"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Toolbox"
          title="Skills & Technologies"
          description="Organized by category — every item here has shipped in a real project."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.05}>
              <div className="h-full rounded-2xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.03]">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-400">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: si * 0.03 }}
                      whileHover={{ y: -2 }}
                      className="cursor-default rounded-lg border border-black/10 bg-white px-3 py-1.5 text-sm text-black/80 shadow-sm transition-colors hover:border-violet-400/50 hover:text-black dark:border-white/10 dark:bg-black/40 dark:text-white/80 dark:hover:border-violet-400/50 dark:hover:text-white"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
