"use client";

import { useState } from "react";
import { FileText, ChevronDown } from "lucide-react";
import { GithubIcon } from "@/components/ui/brand-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const langColors: Record<string, string> = {
  Python: "bg-blue-500",
  CSS: "bg-pink-500",
  JavaScript: "bg-yellow-500",
  TypeScript: "bg-sky-500",
};

function LanguageBar({ languages }: { languages: NonNullable<Project["githubStats"]>["languages"] }) {
  const total = languages.reduce((s, l) => s + l.bytes, 0);
  return (
    <div>
      <div className="flex h-2 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
        {languages.map((l) => (
          <div
            key={l.name}
            className={cn(langColors[l.name] ?? "bg-violet-500")}
            style={{ width: `${(l.bytes / total) * 100}%` }}
          />
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-black/50 dark:text-white/50">
        {languages.map((l) => (
          <span key={l.name} className="inline-flex items-center gap-1.5">
            <span className={cn("h-2 w-2 rounded-full", langColors[l.name] ?? "bg-violet-500")} />
            {l.name} · {((l.bytes / total) * 100).toFixed(0)}%
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const visibleContributions = expanded ? project.contributions : project.contributions.slice(0, 4);

  return (
    <Reveal delay={index * 0.1}>
      <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm shadow-black/[0.03] dark:border-white/10 dark:bg-white/[0.03]">
        {/* Hero banner */}
        <div className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-violet-500 to-cyan-500 px-8 py-10">
          <div
            aria-hidden
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative">
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">{project.name}</h3>
            <p className="mt-2 max-w-2xl text-sm text-white/80 sm:text-base">{project.tagline}</p>
          </div>
        </div>

        <div className="p-8">
          <p className="text-[15px] leading-relaxed text-black/70 dark:text-white/70">{project.summary}</p>

          {/* Stats */}
          <div className="mt-7 grid grid-cols-2 gap-4 border-y border-black/10 py-6 sm:grid-cols-4 dark:border-white/10">
            {project.stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-semibold text-black dark:text-white">{s.value}</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wide text-black/45 dark:text-white/45">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* GitHub stats */}
          {project.githubStats && (
            <div className="mt-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-black/40 dark:text-white/40">
                Language breakdown (live from GitHub)
              </p>
              <LanguageBar languages={project.githubStats.languages} />
            </div>
          )}

          {/* Contributions */}
          <div className="mt-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-black/40 dark:text-white/40">
              Key Contributions
            </p>
            <ul className="space-y-2.5">
              {visibleContributions.map((c, i) => {
                const [lead, ...rest] = c.split(" — ");
                return (
                  <li key={i} className="text-sm leading-relaxed text-black/70 dark:text-white/70">
                    <span className="font-semibold text-black dark:text-white">{lead}</span>
                    {rest.length > 0 && <span> — {rest.join(" — ")}</span>}
                  </li>
                );
              })}
            </ul>
            {project.contributions.length > 4 && (
              <button
                onClick={() => setExpanded((v) => !v)}
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-violet-600 dark:text-violet-400"
              >
                {expanded ? "Show less" : `Show ${project.contributions.length - 4} more`}
                <ChevronDown className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")} />
              </button>
            )}
          </div>

          {/* Tech stack */}
          <div className="mt-7 flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          {/* Links */}
          <div className="mt-7 flex flex-wrap gap-3">
            {project.github && (
              <Button href={project.github} target="_blank" rel="noreferrer" size="sm" variant="secondary">
                <GithubIcon className="h-4 w-4" /> View Code
              </Button>
            )}
            {project.docFile && (
              <Button href={project.docFile} target="_blank" rel="noreferrer" size="sm" variant="ghost">
                <FileText className="h-4 w-4" /> Project Overview (PDF)
              </Button>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 bg-black/[0.015] py-28 dark:bg-white/[0.015]">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Case Studies"
          title="Featured Projects"
          description="Two production systems I built and maintained end-to-end."
        />
        <div className="space-y-10">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
