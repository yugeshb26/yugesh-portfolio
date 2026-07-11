"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

function AnimatedNumber({ value }: { value: string }) {
  const match = value.match(/^([~]?)([\d,.]+)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(match ? "0" : value);

  useEffect(() => {
    if (!inView) return;
    const m = value.match(/^([~]?)([\d,.]+)(.*)$/);
    if (!m) return;
    const [, prefix, numStr, suffix] = m;
    const target = parseFloat(numStr.replace(/,/g, ""));
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        setDisplay(`${prefix}${v.toFixed(decimals)}${suffix}`);
      },
    });
    return () => controls.stop();
    // `value` is a stable string prop — safe as the sole dependency (unlike a fresh
    // `.match()` array, which changes identity every render and re-triggers this effect
    // on every animation frame, restarting the count from 0 forever).
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export function AnimatedStat({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-1 text-center"
    >
      <span className="text-4xl font-semibold tracking-tight text-black sm:text-5xl dark:text-white">
        <AnimatedNumber value={value} />
      </span>
      <span className="text-xs font-medium uppercase tracking-wide text-black/50 dark:text-white/50">
        {label}
      </span>
    </motion.div>
  );
}
