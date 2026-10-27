"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { profile } from "@/lib/data";

type ChatMessage = { role: "user" | "assistant"; content: string };

const STARTER_QUESTIONS = [
  "What's he working on right now?",
  "What's his tech stack?",
  "Tell me about his biggest project",
];

const MAX_MESSAGES_PER_SESSION = 20;
const firstName = profile.name.split(" ")[0];
// Terminal-style "user@hostname" handle combining name + profession, e.g. "yugesh@data-engineer"
const botHandle = `${firstName.toLowerCase()}@${profile.role.toLowerCase().replace(/\s+/g, "-")}`;

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(text: string) {
    const content = text.trim();
    if (!content || loading) return;

    if (messages.length >= MAX_MESSAGES_PER_SESSION) {
      setError(`That's a lot of questions! For anything more, reach out directly at ${profile.email}.`);
      return;
    }

    const next = [...messages, { role: "user" as const, content }];
    setMessages(next);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      if (!res.ok || !data.reply) {
        throw new Error(data?.error || "Something went wrong.");
      }
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="fixed bottom-9 right-24 z-50 rounded-full border border-black/10 bg-white px-3 py-1.5 font-mono text-xs font-medium text-black/70 shadow-md transition-colors hover:text-violet-600 dark:border-white/10 dark:bg-[#0d0e14] dark:text-white/70 dark:hover:text-violet-400"
          >
            yugesh.ai
          </motion.button>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 text-white shadow-lg shadow-violet-500/30"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? "Close chat" : `${botHandle} — ask about ${firstName}`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 flex h-[28rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl dark:border-white/10 dark:bg-[#0d0e14]"
          >
            <div className="flex items-center gap-2 border-b border-black/10 bg-black/[0.02] px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <div>
                <p className="font-mono text-sm font-semibold text-black dark:text-white">{botHandle}</p>
                <p className="text-[11px] text-black/40 dark:text-white/40">Ask about {firstName}</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.length === 0 && (
                <div className="space-y-3">
                  <p className="text-sm text-black/50 dark:text-white/50">
                    Hi! Ask me anything about {profile.name}&apos;s background, skills, or projects.
                  </p>
                  <div className="flex flex-col gap-2">
                    {STARTER_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="rounded-lg border border-black/10 px-3 py-2 text-left text-xs text-black/70 transition-colors hover:border-violet-400/50 hover:text-black dark:border-white/10 dark:text-white/70 dark:hover:border-violet-400/50 dark:hover:text-white"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-violet-600 text-white"
                        : "bg-black/[0.04] text-black/80 dark:bg-white/[0.06] dark:text-white/80"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1.5 rounded-2xl bg-black/[0.04] px-3.5 py-2.5 dark:bg-white/[0.06]">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-black/40 dark:bg-white/40" style={{ animationDelay: "0ms" }} />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-black/40 dark:bg-white/40" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-black/40 dark:bg-white/40" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}

              {error && <p className="text-xs text-red-500">{error}</p>}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2 border-t border-black/10 p-3 dark:border-white/10"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                maxLength={500}
                className="flex-1 rounded-full border border-black/10 bg-black/[0.02] px-4 py-2 text-sm text-black outline-none focus:border-violet-400/50 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white disabled:opacity-40"
                aria-label="Send"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
