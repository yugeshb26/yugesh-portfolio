import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="YB logo"
      width={128}
      height={128}
      className={className}
    />
  );
}
