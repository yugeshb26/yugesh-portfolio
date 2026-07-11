"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/lib/data";
import { cn } from "@/lib/utils";

function ExperienceCard({ entry, defaultOpen }: { entry: (typeof experience)[number]; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="relative pl-10">
      <span
        className={cn(
          "absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-white dark:ring-black",
          entry.current ? "bg-emerald-500" : "bg-violet-500"
        )}
      />
      <div className="rounded-2xl border border-black/10 bg-white/60 shadow-sm shadow-black/[0.02] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03]">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 p-6 text-left"
        >
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-semibold text-black dark:text-white">{entry.company}</h3>
              {entry.current && (
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                  Current
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-black/50 dark:text-white/50">
              {entry.totalDuration} · {entry.location}
            </p>
          </div>
          <ChevronDown
            className={cn("h-5 w-5 shrink-0 text-black/40 transition-transform dark:text-white/40", open && "rotate-180")}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="space-y-6 px-6 pb-6">
                {entry.roles.map((role) => (
                  <div key={role.title} className="border-l-2 border-black/10 pl-4 dark:border-white/10">
                    <p className="text-sm font-semibold text-black dark:text-white">{role.title}</p>
                    <p className="mb-2 text-xs text-black/40 dark:text-white/40">{role.duration}</p>
                    <ul className="space-y-1.5">
                      {role.bullets.map((b, i) => (
                        <li key={i} className="text-sm leading-relaxed text-black/65 dark:text-white/65">
                          <span className="mr-2 text-violet-500">—</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="flex flex-wrap gap-2 pt-1">
                  {entry.techStack.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 bg-black/[0.015] py-28 dark:bg-white/[0.015]">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Career"
          title="Experience"
          description="Click a role to expand contributions and tech stack."
        />

        <div className="relative space-y-6 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-black/10 dark:before:bg-white/10">
          {experience.map((entry, i) => (
            <Reveal key={entry.company} delay={i * 0.08}>
              <ExperienceCard entry={entry} defaultOpen={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
