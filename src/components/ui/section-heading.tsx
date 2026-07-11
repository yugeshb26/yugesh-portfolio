import { Reveal } from "@/components/ui/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance text-base text-black/60 dark:text-white/60">
          {description}
        </p>
      )}
    </Reveal>
  );
}
