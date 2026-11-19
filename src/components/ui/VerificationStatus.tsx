import { BadgeCheck, CircleHelp } from "lucide-react";
import { cn } from "@/lib/utils";

type VerificationStatusProps = {
  verified: boolean;
  compact?: boolean;
};

/** Text + icon keeps verification status accessible without relying on color. */
export function VerificationStatus({
  verified,
  compact = false,
}: VerificationStatusProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-lg border px-2 py-1 text-[11px] font-semibold leading-none",
        compact && "px-1.5 py-1 text-[10px]",
        verified
          ? "border-brand-600/20 bg-brand-50 text-brand-700"
          : "border-line bg-cream text-muted",
      )}
    >
      {verified ? (
        <BadgeCheck aria-hidden="true" className="h-3.5 w-3.5" />
      ) : (
        <CircleHelp aria-hidden="true" className="h-3.5 w-3.5" />
      )}
      {verified ? "Terverifikasi" : "Belum diverifikasi"}
    </span>
  );
}
