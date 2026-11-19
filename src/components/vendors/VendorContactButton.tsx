import { MessageCircle, MessageCircleOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import type { Vendor } from "@/types";

type VendorContactVariant = "primary" | "secondary" | "compact";

type VendorContactButtonProps = {
  vendor: Vendor;
  /** When set, the pre-filled message mentions this product or service. */
  productName?: string;
  variant?: VendorContactVariant;
  className?: string;
};

const variantClasses: Record<VendorContactVariant, string> = {
  primary:
    "min-h-11 w-full rounded-xl bg-brand-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 sm:w-auto",
  secondary:
    "min-h-10 w-full rounded-xl border border-brand-600 px-3 text-xs font-semibold text-brand-700 transition-colors hover:bg-brand-50",
  compact:
    "min-h-10 w-full rounded-xl border border-line px-3 text-xs font-semibold text-brand-700 transition-colors hover:border-brand-600 hover:bg-brand-50",
};

const variantLabels: Record<VendorContactVariant, string> = {
  primary: "Hubungi via WhatsApp",
  secondary: "Tanya produk ini",
  compact: "Chat WA",
};

function DemoBadge({ onDark = false }: { onDark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded px-1.5 py-0.5 text-[9px] font-bold leading-none tracking-wide",
        onDark ? "bg-brand-700 text-white" : "bg-brand-50 text-brand-700",
      )}
    >
      DEMO
    </span>
  );
}

/**
 * Reusable, explicitly labelled demo contact action. Renders a real link only
 * when the vendor number is valid; otherwise it renders a non-clickable,
 * informative fallback.
 */
export function VendorContactButton({
  vendor,
  productName,
  variant = "primary",
  className,
}: VendorContactButtonProps) {
  const contact = buildWhatsAppLink({
    number: vendor.whatsapp,
    vendorName: vendor.name,
    productName,
  });
  const context = productName ? ` tentang ${productName}` : "";
  const accessibleName = `Hubungi ${vendor.name}${context} via WhatsApp (kontak DEMO)`;

  if (!contact) {
    return (
      <div
        role="status"
        aria-label={`Kontak WhatsApp ${vendor.name}${context} tidak tersedia (data DEMO)`}
        className={cn(
          "inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-dashed border-line bg-cream px-3 text-center text-xs font-semibold text-muted",
          variant === "primary" && "min-h-11 text-sm",
          className,
        )}
      >
        <MessageCircleOff aria-hidden="true" className="h-4 w-4 shrink-0" />
        <span>Kontak WhatsApp tidak tersedia</span>
        <DemoBadge />
      </div>
    );
  }

  return (
    <a
      href={contact.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={accessibleName}
      className={cn(
        "inline-flex items-center justify-center gap-2 text-center",
        variantClasses[variant],
        className,
      )}
    >
      <MessageCircle aria-hidden="true" className="h-4 w-4 shrink-0" />
      <span>{variantLabels[variant]}</span>
      <DemoBadge onDark={variant === "primary"} />
    </a>
  );
}
