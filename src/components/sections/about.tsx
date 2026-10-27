import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { TerminalWindow, TerminalLine, TerminalCursor } from "@/components/ui/terminal-window";
import { profile, education } from "@/lib/data";

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
            <TerminalWindow title="yugesh@portfolio: ~">
              <TerminalLine>whoami</TerminalLine>
              <div className="mt-3 space-y-1.5 text-white/70">
                <div>
                  <span className="inline-block w-20 text-white/40">role</span>
                  {profile.role} @ Thurro
                </div>
                <div>
                  <span className="inline-block w-20 text-white/40">location</span>
                  {profile.location}
                </div>
                <div>
                  <span className="inline-block w-20 text-white/40">degree</span>
                  {education.degree}
                </div>
                <div>
                  <span className="inline-block w-20 text-white/40">status</span>
                  <span className="text-emerald-400">●</span> {profile.availability}
                </div>
              </div>
              <div className="mt-4">
                <TerminalLine>
                  <TerminalCursor />
                </TerminalLine>
              </div>
            </TerminalWindow>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
