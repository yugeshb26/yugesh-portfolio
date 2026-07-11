"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { Button } from "@/components/ui/button";
import { TypingText } from "@/components/ui/typing-text";
import { AnimatedStat } from "@/components/ui/animated-stat";
import { profile, stats } from "@/lib/data";

const roles = [
  "Data Engineer",
  "GenAI Application Builder",
  "Automation & Web Scraping Engineer",
  "ETL Pipeline Developer",
];

export function Hero() {
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Animated gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white dark:bg-black" />
        <motion.div
          className="absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-violet-400/25 blur-[120px] dark:bg-violet-600/25"
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[5%] top-[20%] h-[26rem] w-[26rem] rounded-full bg-cyan-400/20 blur-[110px] dark:bg-cyan-500/20"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.25]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 text-2xl font-semibold text-white shadow-xl shadow-violet-500/20 sm:h-28 sm:w-28 sm:text-3xl"
          >
            {initials}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-1.5 text-xs font-medium text-black/60 dark:border-white/10 dark:bg-white/[0.05] dark:text-white/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {profile.availability}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl font-semibold tracking-tight text-black sm:text-7xl dark:text-white"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 h-8 text-lg font-medium text-violet-600 sm:text-xl dark:text-violet-400"
          >
            <TypingText words={roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mx-auto mt-6 max-w-2xl text-balance text-base text-black/60 sm:text-lg dark:text-white/60"
          >
            {profile.tagline}. Based in {profile.location}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Button href={profile.resumeFile} download>
              Download Resume
            </Button>
            <Button href="#projects" variant="secondary">
              Explore Projects
            </Button>
            <Button href="#contact" variant="ghost">
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex items-center gap-5"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-black/50 transition-colors hover:text-black dark:text-white/50 dark:hover:text-white"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-black/50 transition-colors hover:text-black dark:text-white/50 dark:hover:text-white"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-black/50 transition-colors hover:text-black dark:text-white/50 dark:hover:text-white"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>

          <div className="mt-20 grid w-full max-w-3xl grid-cols-2 gap-8 border-t border-black/10 pt-10 sm:grid-cols-4 dark:border-white/10">
            {stats.map((s, i) => (
              <AnimatedStat key={s.label} value={s.value} label={s.label} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to content"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-black/40 dark:text-white/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}
