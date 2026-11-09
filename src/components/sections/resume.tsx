import { Download, Eye } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/lib/data";

export function ResumeViewer() {
  return (
    <section id="resume" className="scroll-mt-16 py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="Resume" title="Full Resume" description="View inline or download the PDF." />

        <Reveal>
          {/* Desktop/tablet: inline PDF preview (mobile browsers have no PDF plugin for <object>) */}
          <div className="hidden overflow-hidden rounded-2xl border border-black/10 shadow-sm sm:block dark:border-white/10">
            <object
              data={profile.resumeFile}
              type="application/pdf"
              className="h-[600px] w-full"
              aria-label="Resume PDF preview"
            >
              <div className="flex h-[600px] items-center justify-center bg-black/[0.02] text-sm text-black/50 dark:bg-white/[0.03] dark:text-white/50">
                PDF preview isn&apos;t supported in this browser — use the download button below.
              </div>
            </object>
          </div>

          {/* Mobile: no inline preview, open in the device's native PDF viewer instead */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-black/10 bg-black/[0.02] px-6 py-16 text-center sm:hidden dark:border-white/10 dark:bg-white/[0.03]">
            <p className="text-sm text-black/50 dark:text-white/50">
              Inline preview isn&apos;t supported on mobile browsers. View or download the PDF instead.
            </p>
            <Button href={profile.resumeFile} target="_blank" rel="noreferrer">
              <Eye className="h-4 w-4" /> View Resume
            </Button>
          </div>

          <div className="mt-6 flex justify-center">
            <Button href={profile.resumeFile} download>
              <Download className="h-4 w-4" /> Download Resume (PDF)
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
