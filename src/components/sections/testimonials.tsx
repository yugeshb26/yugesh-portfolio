import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-16 bg-black/[0.015] py-28 dark:bg-white/[0.015]">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What colleagues say"
          description="This section is reserved for real feedback from managers and teammates — nothing fabricated in the meantime."
        />

        <div className="grid gap-5 sm:grid-cols-3">
          {["Manager", "Colleague", "Mentor"].map((role, i) => (
            <Reveal key={role} delay={i * 0.08}>
              <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-black/15 bg-black/[0.015] p-8 text-center dark:border-white/15 dark:bg-white/[0.02]">
                <Quote className="h-6 w-6 text-black/20 dark:text-white/20" />
                <p className="text-xs font-medium uppercase tracking-wide text-black/35 dark:text-white/35">
                  {role} testimonial
                </p>
                <p className="text-[13px] text-black/30 dark:text-white/30">Coming soon</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
