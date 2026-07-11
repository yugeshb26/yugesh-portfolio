export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="26" fill="url(#logo-grad)" />
      <text
        x="50"
        y="54"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="800"
        fontSize="42"
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        letterSpacing="-2"
      >
        YB
      </text>
    </svg>
  );
}
