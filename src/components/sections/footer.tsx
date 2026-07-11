import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { Mail } from "lucide-react";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-black/10 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-xs text-black/40 dark:text-white/40">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind CSS & Framer Motion.
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-black/40 hover:text-black dark:text-white/40 dark:hover:text-white">
            <GithubIcon className="h-4 w-4" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-black/40 hover:text-black dark:text-white/40 dark:hover:text-white">
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-black/40 hover:text-black dark:text-white/40 dark:hover:text-white">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
