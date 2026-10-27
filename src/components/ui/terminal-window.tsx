import type { ReactNode } from "react";

export function TerminalWindow({
  title = "yugesh@portfolio",
  children,
  className,
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-black/10 bg-[#0d0e14] shadow-xl shadow-black/10 dark:border-white/10 ${className ?? ""}`}
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-2 font-mono text-[11px] text-white/40">{title}</span>
      </div>
      <div className="px-5 py-4 font-mono text-[13px] leading-relaxed text-white/80">{children}</div>
    </div>
  );
}

export function TerminalLine({
  prompt = "$",
  children,
  className,
}: {
  prompt?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex gap-2 ${className ?? ""}`}>
      <span className="shrink-0 text-emerald-400">{prompt}</span>
      <span className="text-white/90">{children}</span>
    </div>
  );
}

export function TerminalCursor() {
  return <span className="ml-0.5 inline-block h-[1.1em] w-[7px] translate-y-[2px] animate-pulse bg-violet-400" />;
}
