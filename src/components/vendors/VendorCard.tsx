import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { RatingBadge } from "@/components/ui/RatingBadge";
import { SafeImage } from "@/components/ui/SafeImage";
import { VerificationStatus } from "@/components/ui/VerificationStatus";
import { getCategoryBySlug } from "@/data/categories";
import type { Vendor } from "@/types";

type VendorCardProps = {
  vendor: Vendor;
  priority?: boolean;
};

export function VendorCard({ vendor, priority = false }: VendorCardProps) {
  const category = getCategoryBySlug(vendor.categorySlug);
  const detailHref = `/vendors/${vendor.slug}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <Link
        href={detailHref}
        className="relative block aspect-[16/10] overflow-hidden bg-brand-50"
        aria-label={`Lihat detail ${vendor.name}`}
      >
        <SafeImage
          src={vendor.coverImage}
          alt={`Ilustrasi ${vendor.name}`}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2">
          <Link
            href={detailHref}
            className="text-base font-bold leading-snug text-ink transition-colors hover:text-brand-700 sm:text-lg"
          >
            {vendor.name}
          </Link>
          <VerificationStatus verified={vendor.verified} compact />
        </div>

        <p className="mt-1 text-xs font-semibold text-brand-700">
          {category?.name ?? "Vendor lokal"}
        </p>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
          {vendor.shortDescription}
        </p>

        <div className="mt-4 flex items-center justify-between gap-2 border-t border-line pt-3">
          <span className="inline-flex min-w-0 items-center gap-1 text-xs text-muted">
            <MapPin aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{vendor.location}</span>
          </span>
          <RatingBadge rating={vendor.rating} reviewCount={vendor.reviewCount} />
        </div>

        <Link
          href={detailHref}
          className="mt-4 inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-brand-600 px-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-600 hover:text-white"
        >
          Lihat Detail
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
