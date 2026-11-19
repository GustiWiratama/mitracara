import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function BrandLogo({
  className,
  showWordmark = true,
}: BrandLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 40 40"
        width="36"
        height="36"
        aria-hidden="true"
        focusable="false"
        className="shrink-0"
      >
        <rect width="40" height="40" rx="12" fill="#167D5A" />
        <rect
          x="8.5"
          y="15"
          width="14"
          height="10"
          rx="5"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2.6"
        />
        <rect
          x="17.5"
          y="15"
          width="14"
          height="10"
          rx="5"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2.6"
        />
        <circle cx="20" cy="20" r="2.4" fill="#F2A65A" />
      </svg>
      {showWordmark ? (
        <span className="text-lg font-extrabold tracking-tight">MITRACARA</span>
      ) : null}
    </span>
  );
}
