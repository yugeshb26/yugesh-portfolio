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
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((k) => typeof k === "string" && k.length > 10) : [];
  } catch {
    return raw.length > 10 ? [raw] : [];
  }
}

async function tryGemini(keys: string[], systemPrompt: string, messages: ChatMessage[]): Promise<string | null> {
  const contents = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  for (const key of keys) {
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${key}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents,
            systemInstruction: { parts: [{ text: systemPrompt }] },
            generationConfig: { temperature: 0.5, maxOutputTokens: 400 },
          }),
        }
      );
      if (!res.ok) {
        console.error(`[chat] Gemini key ...${key.slice(-4)} failed: ${res.status} ${await res.text()}`);
        continue;
      }
      const data = await res.json();
      const parts = data?.candidates?.[0]?.content?.parts as { text?: string }[] | undefined;
      const text = parts?.map((p) => p.text ?? "").join("");
      if (text) return text.trim();
      console.error(`[chat] Gemini key ...${key.slice(-4)} returned no text: ${JSON.stringify(data).slice(0, 500)}`);
    } catch (err) {
      console.error(`[chat] Gemini key ...${key.slice(-4)} threw:`, err);
      continue;
    }
  }
  return null;
}

async function tryGroq(keys: string[], systemPrompt: string, messages: ChatMessage[]): Promise<string | null> {
  const chatMessages = [{ role: "system", content: systemPrompt }, ...messages];

  for (const key of keys) {
    try {
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
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
      });
      if (!res.ok) {
        console.error(`[chat] Groq key ...${key.slice(-4)} failed: ${res.status} ${await res.text()}`);
        continue;
      }
      const data = await res.json();
      const text = data?.choices?.[0]?.message?.content;
      if (text) return String(text).trim();
      console.error(`[chat] Groq key ...${key.slice(-4)} returned no text: ${JSON.stringify(data).slice(0, 500)}`);
    } catch (err) {
      console.error(`[chat] Groq key ...${key.slice(-4)} threw:`, err);
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
  const geminiKeys = parseKeys(process.env.GEMINI_API_KEYS);
  const groqKeys = parseKeys(process.env.GROQ_API_KEYS);
  console.error(`[chat] parsed ${geminiKeys.length} Gemini key(s), ${groqKeys.length} Groq key(s) from env`);

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
