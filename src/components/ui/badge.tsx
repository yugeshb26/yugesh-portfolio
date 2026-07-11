import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs font-medium text-black/70 dark:border-white/10 dark:bg-white/[0.05] dark:text-white/70",
        className
      )}
    >
      {children}
    </span>
  );
}
