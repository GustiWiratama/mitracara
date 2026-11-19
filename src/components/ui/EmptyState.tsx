import Link from "next/link";
import { SearchX } from "lucide-react";

type EmptyStateProps = {
  title?: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
};

/** Reusable friendly empty state with an optional recovery action. */
export function EmptyState({
  title = "Vendor tidak ditemukan.",
  description = "Coba kata kunci lain atau ubah kategori, lokasi, dan pengurutan yang dipilih.",
  actionHref = "/vendors",
  actionLabel = "Hapus filter & pencarian",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-line bg-white px-6 py-14 text-center">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-700">
        <SearchX aria-hidden="true" className="h-7 w-7" />
      </span>
      <h2 className="mt-5 text-lg font-bold text-ink sm:text-xl">{title}</h2>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
        {description}
      </p>
      <Link
        href={actionHref}
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-brand-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
      >
        {actionLabel}
      </Link>
    </div>
  );
}
