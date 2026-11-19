/**
 * WhatsApp URL utilities for MITRACARA demo contacts.
 *
 * Every number in the mock data is fictional. These helpers only build URLs;
 * nothing opens WhatsApp automatically. A user must click the rendered link.
 */

const WHATSAPP_BASE_URL = "https://wa.me";
const COUNTRY_CODE = "62";
const LOCAL_PREFIX = "0";

export type WhatsAppLink = {
  /** Digits-only international number, without the leading `+`. */
  number: string;
  /** Plain-text message, kept for labels and verification. */
  message: string;
  /** wa.me URL with the pre-filled message URL-encoded. */
  href: string;
};

/**
 * Normalize a demo WhatsApp number to the digits-only international format
 * expected by wa.me. Accepts `+62...`, `62...` and `0...` forms and tolerates
 * spaces, hyphens, dots and parentheses. Unsupported or malformed values
 * return null so callers never produce a broken link.
 */
export function normalizeWhatsAppNumber(
  raw: string | null | undefined,
): string | null {
  if (typeof raw !== "string") {
    return null;
  }

  const trimmed = raw.trim();
  if (!trimmed || !/^\+?[\d\s().-]+$/.test(trimmed)) {
    return null;
  }

  const digits = trimmed.replace(/\D/g, "");
  if (!digits) {
    return null;
  }

  let normalized: string;
  if (digits.startsWith(COUNTRY_CODE)) {
    normalized = digits;
  } else if (digits.startsWith(LOCAL_PREFIX)) {
    normalized = `${COUNTRY_CODE}${digits.slice(LOCAL_PREFIX.length)}`;
  } else {
    return null;
  }

  // Indonesian mobile numbers start with 8 after the country code. The length
  // bound rejects accidental short/long values before they reach wa.me.
  return /^628\d{7,12}$/.test(normalized) ? normalized : null;
}

/** Build a polite Indonesian opening message for a vendor or a specific item. */
export function buildWhatsAppMessage(
  vendorName: string,
  productName?: string | null,
): string {
  const vendor = vendorName.trim() || "vendor ini";
  const product = productName?.trim();

  const interest = product
    ? `Saya tertarik untuk mengetahui informasi lebih lanjut mengenai "${product}".`
    : "Saya tertarik untuk mengetahui informasi lebih lanjut mengenai produk dan jasa yang ditawarkan.";

  return `Halo Kak, saya menemukan data ${vendor} melalui MITRACARA. ${interest} Boleh saya bertanya lebih lanjut? Terima kasih.`;
}

/**
 * Create a complete wa.me link. Returns null when the number is invalid, so
 * UI components can render an informative fallback instead of a broken link.
 */
export function buildWhatsAppLink(options: {
  number: string | null | undefined;
  vendorName: string;
  productName?: string | null;
}): WhatsAppLink | null {
  const normalized = normalizeWhatsAppNumber(options.number);
  if (!normalized) {
    return null;
  }

  const message = buildWhatsAppMessage(options.vendorName, options.productName);
  const encodedMessage = new URLSearchParams({ text: message }).toString();

  return {
    number: normalized,
    message,
    href: `${WHATSAPP_BASE_URL}/${normalized}?${encodedMessage}`,
  };
}
