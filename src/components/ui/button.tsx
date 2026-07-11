import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-black text-white hover:bg-black/85 dark:bg-white dark:text-black dark:hover:bg-white/90",
        secondary:
          "border border-black/15 bg-transparent text-black hover:bg-black/[0.04] dark:border-white/15 dark:text-white dark:hover:bg-white/[0.06]",
        ghost: "text-black/70 hover:bg-black/[0.04] dark:text-white/70 dark:hover:bg-white/[0.06]",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-[13px]",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

type ButtonProps = VariantProps<typeof buttonVariants> & {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  target?: string;
  rel?: string;
  download?: boolean | string;
};

export function Button({ children, className, variant, size, href, target, rel, download, ...props }: ButtonProps) {
  const cls = cn(buttonVariants({ variant, size }), className);
  if (href) {
    return (
      <Link href={href} target={target} rel={rel} download={download} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
