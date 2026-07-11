import { Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-16 py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Credentials" title="Certifications" />

        <div className="grid gap-5 sm:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.08}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-black/10 bg-black/[0.02] p-6 text-center dark:border-white/10 dark:bg-white/[0.03]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400">
                  <Award className="h-6 w-6" />
                </div>
                <p className="text-sm font-semibold text-black dark:text-white">{cert.name}</p>
                <p className="mt-1 text-xs text-black/50 dark:text-white/50">{cert.issuer}</p>
                <span className="mt-4 rounded-full bg-black/[0.04] px-3 py-1 text-[11px] text-black/40 dark:bg-white/[0.06] dark:text-white/40">
                  Credential link coming soon
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
