import { GraduationCap, MapPin, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { profile, education } from "@/lib/data";

const facts = [
  { icon: Briefcase, label: "Current Role", value: `${profile.role} @ Thurro` },
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: GraduationCap, label: "Education", value: education.degree },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-16 py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="About"
          title="From Perl automation to GenAI products"
          description="A quick look at how the journey connects."
        />

        <div className="grid gap-12 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <p className="text-lg leading-relaxed text-black/70 dark:text-white/70">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-2">
            <div className="flex flex-col gap-4 rounded-2xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.03]">
              {facts.map((f) => (
                <div key={f.label} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400">
                    <f.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-black/40 dark:text-white/40">
                      {f.label}
                    </p>
                    <p className="text-sm font-medium text-black dark:text-white">{f.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
