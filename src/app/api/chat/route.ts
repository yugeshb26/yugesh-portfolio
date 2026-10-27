import { NextRequest, NextResponse } from "next/server";
import { profile, experience, projects, skills, certifications, education } from "@/lib/data";

// Gemini is primary; Groq is a fallback used only when every Gemini key fails
// (rate limit, quota, etc.) -- mirrors the resilience pattern used elsewhere.
const GEMINI_MODEL = "gemini-3.6-flash";
const GROQ_MODEL = "openai/gpt-oss-120b";

const MAX_MESSAGE_LENGTH = 500;
const MAX_HISTORY = 12;

type ChatMessage = { role: "user" | "assistant"; content: string };

function buildSystemPrompt(): string {
  const expText = experience
    .map((e) => {
      const roles = e.roles
        .map((r) => `${r.title} [${r.duration}]: ${r.bullets.join(" ")}`)
        .join(" | ");
      return `${e.company} (${e.totalDuration}, ${e.location}) -- ${roles}`;
    })
    .join("\n");

  const projText = projects
    .map((p) => `${p.name}: ${p.tagline}. ${p.summary} Tech: ${p.techStack.join(", ")}.`)
    .join("\n\n");

  const skillsText = skills.map((s) => `${s.category}: ${s.skills.join(", ")}`).join("\n");

  const certsText = certifications.map((c) => `${c.name} (${c.issuer})`).join(", ");

  return `You are a friendly assistant embedded on ${profile.name}'s personal portfolio website (yugesh.dev). Visitors ask you questions about his background, skills, and work. Answer naturally in third person (e.g. "He built..."), like a knowledgeable colleague describing him -- never in first person as if you ARE him.

ABOUT ${profile.name}:
${profile.summary}
Location: ${profile.location}
Availability: ${profile.availability}

EXPERIENCE:
${expText}

EDUCATION: ${education.degree}, ${education.school} (${education.duration})

CERTIFICATIONS: ${certsText}

SKILLS:
${skillsText}

PROJECTS:
${projText}

RULES:
- Keep answers short and conversational -- 2 to 4 sentences, this is a small chat widget, not an essay.
- Only answer using the information above. If asked something not covered here (salary expectations, private contact details, opinions on other people or companies, anything unrelated to his professional background), say you don't have that information and suggest reaching out directly via email (${profile.email}) or LinkedIn.
- Do not write code, complete unrelated tasks, or answer general-knowledge questions unrelated to ${profile.name} -- politely redirect back to questions about his background or work.
- Never invent facts that aren't in the information above.`;
}

function parseKeys(raw: string | undefined): string[] {
  if (!raw) return [];
  const trimmed = raw.trim();
  if (!trimmed) return [];
  try {
    const parsed = JSON.parse(trimmed);
    if (Array.isArray(parsed)) {
      return parsed.filter((k): k is string => typeof k === "string" && k.length > 10);
    }
    // A single key pasted with surrounding quotes parses as a valid JSON string,
    // not an array -- treat that as one key rather than silently discarding it.
    if (typeof parsed === "string" && parsed.length > 10) {
      return [parsed];
    }
    return [];
  } catch {
    // Not valid JSON at all -- the raw/unquoted key case.
    return trimmed.length > 10 ? [trimmed] : [];
  }
}

// Collects keys from multiple plain, separately-named env vars (no JSON/brackets
// needed -- e.g. GEMINI_API_KEY and GEMINI_API_KEY_2, each holding one bare key),
// plus the legacy combined GEMINI_API_KEYS (single value or JSON array), for
// backwards compatibility. This is the simpler, less error-prone path: paste one
// raw key per variable, nothing else.
function collectKeys(baseName: string): string[] {
  const keys: string[] = [];
  keys.push(...parseKeys(process.env[`${baseName}S`])); // e.g. GEMINI_API_KEYS
  for (const suffix of ["", "_2", "_3", "_4"]) {
    const v = process.env[`${baseName}${suffix}`]?.trim();
    if (v && v.length > 10 && !keys.includes(v)) keys.push(v);
  }
  return keys;
}

const PER_ATTEMPT_TIMEOUT_MS = 12_000;

async function fetchWithTimeout(url: string, options: RequestInit, timeoutMs: number): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function tryGemini(keys: string[], systemPrompt: string, messages: ChatMessage[]): Promise<string | null> {
  const contents = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  for (const key of keys) {
    const started = Date.now();
    try {
      const res = await fetchWithTimeout(
        `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${key}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents,
            systemInstruction: { parts: [{ text: systemPrompt }] },
            generationConfig: { temperature: 0.5, maxOutputTokens: 400 },
          }),
        },
        PER_ATTEMPT_TIMEOUT_MS
      );
      const ms = Date.now() - started;
      if (!res.ok) {
        console.error(`[chat] Gemini key ...${key.slice(-4)} failed after ${ms}ms: ${res.status} ${await res.text()}`);
        continue;
      }
      const data = await res.json();
      const parts = data?.candidates?.[0]?.content?.parts as { text?: string }[] | undefined;
      const text = parts?.map((p) => p.text ?? "").join("");
      if (text) {
        console.error(`[chat] Gemini key ...${key.slice(-4)} succeeded in ${ms}ms`);
        return text.trim();
      }
      console.error(`[chat] Gemini key ...${key.slice(-4)} returned no text after ${ms}ms: ${JSON.stringify(data).slice(0, 500)}`);
    } catch (err) {
      const ms = Date.now() - started;
      const aborted = err instanceof Error && err.name === "AbortError";
      console.error(`[chat] Gemini key ...${key.slice(-4)} ${aborted ? "timed out" : "threw"} after ${ms}ms:`, err);
      continue;
    }
  }
  return null;
}

async function tryGroq(keys: string[], systemPrompt: string, messages: ChatMessage[]): Promise<string | null> {
  const chatMessages = [{ role: "system", content: systemPrompt }, ...messages];

  for (const key of keys) {
    const started = Date.now();
    try {
      const res = await fetchWithTimeout(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${key}`,
          },
          body: JSON.stringify({
            model: GROQ_MODEL,
            messages: chatMessages,
            temperature: 0.5,
            max_completion_tokens: 400,
          }),
        },
        PER_ATTEMPT_TIMEOUT_MS
      );
      const ms = Date.now() - started;
      if (!res.ok) {
        console.error(`[chat] Groq key ...${key.slice(-4)} failed after ${ms}ms: ${res.status} ${await res.text()}`);
        continue;
      }
      const data = await res.json();
      const text = data?.choices?.[0]?.message?.content;
      if (text) {
        console.error(`[chat] Groq key ...${key.slice(-4)} succeeded in ${ms}ms`);
        return String(text).trim();
      }
      console.error(`[chat] Groq key ...${key.slice(-4)} returned no text after ${ms}ms: ${JSON.stringify(data).slice(0, 500)}`);
    } catch (err) {
      const ms = Date.now() - started;
      const aborted = err instanceof Error && err.name === "AbortError";
      console.error(`[chat] Groq key ...${key.slice(-4)} ${aborted ? "timed out" : "threw"} after ${ms}ms:`, err);
      continue;
    }
  }
  return null;
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const rawMessages = (body as { messages?: unknown })?.messages;
  if (!Array.isArray(rawMessages) || rawMessages.length === 0) {
    return NextResponse.json({ error: "No messages provided." }, { status: 400 });
  }

  const messages: ChatMessage[] = rawMessages.slice(-MAX_HISTORY).map((m) => {
    const role = (m as { role?: string })?.role === "assistant" ? "assistant" : "user";
    const content = String((m as { content?: unknown })?.content ?? "").slice(0, MAX_MESSAGE_LENGTH);
    return { role, content };
  });

  const systemPrompt = buildSystemPrompt();
  const geminiKeys = collectKeys("GEMINI_API_KEY");
  const groqKeys = collectKeys("GROQ_API_KEY");
  console.error(
    `[chat] env var names containing GEMINI or GROQ: ${Object.keys(process.env).filter((k) => /GEMINI|GROQ/i.test(k)).join(", ") || "(none found)"}`
  );
  console.error(`[chat] collected ${geminiKeys.length} Gemini key(s), ${groqKeys.length} Groq key(s) from env`);

  let reply: string | null = null;
  if (geminiKeys.length > 0) {
    reply = await tryGemini(geminiKeys, systemPrompt, messages);
  }
  if (!reply && groqKeys.length > 0) {
    reply = await tryGroq(groqKeys, systemPrompt, messages);
  }

  if (!reply) {
    return NextResponse.json(
      { error: "The assistant is temporarily unavailable -- please try again shortly or reach out directly." },
      { status: 503 }
    );
  }

  return NextResponse.json({ reply });
}
