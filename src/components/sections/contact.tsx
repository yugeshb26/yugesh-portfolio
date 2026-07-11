"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

const contactLinks = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: GithubIcon, label: "GitHub", href: profile.github },
  { icon: LinkedinIcon, label: "LinkedIn", href: profile.linkedin },
  { icon: MapPin, label: profile.location, href: undefined },
];

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function validate() {
    const next: Record<string, string> = {};
    if (!values.name.trim()) next.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email";
    if (values.message.trim().length < 10) next.message = "Message should be at least 10 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Portfolio contact from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setSent(true);
    setValues({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact" className="scroll-mt-16 bg-black/[0.015] py-28 dark:bg-white/[0.015]">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build something"
          description="Open to Data Engineering, Python automation, and GenAI application roles."
        />

        <div className="grid gap-10 md:grid-cols-5">
          <Reveal className="md:col-span-2">
            <div className="flex flex-col gap-4">
              {contactLinks.map((c) => {
                const content = (
                  <div className="flex items-center gap-3 rounded-xl border border-black/10 bg-black/[0.02] p-4 transition-colors hover:border-violet-400/40 dark:border-white/10 dark:bg-white/[0.03]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400">
                      <c.icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm text-black/75 dark:text-white/75">{c.label}</span>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={c.label}>{content}</div>
                );
              })}
              <p className="mt-2 inline-flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {profile.availability}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <input
                  value={values.name}
                  onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition-colors focus:border-violet-400 dark:border-white/10 dark:bg-black/40 dark:text-white"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>
              <div>
                <input
                  value={values.email}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                  placeholder="Your email"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition-colors focus:border-violet-400 dark:border-white/10 dark:bg-black/40 dark:text-white"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>
              <div>
                <textarea
                  value={values.message}
                  onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                  placeholder="What are you looking to build?"
                  rows={4}
                  className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition-colors focus:border-violet-400 dark:border-white/10 dark:bg-black/40 dark:text-white"
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              <Button type="submit" className="w-full sm:w-auto">
                <Send className="h-4 w-4" /> Send Message
              </Button>
              <p className="text-xs text-black/40 dark:text-white/40">
                Opens your email client with the message pre-filled to {profile.email}.
              </p>

              <AnimatePresence>
                {sent && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400"
                  >
                    <CheckCircle2 className="h-4 w-4" /> Opening your email client…
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
