import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageContainer } from "@/components/ui/PageContainer";
import { VendorFilter } from "@/components/vendors/VendorFilter";
import { VendorGrid } from "@/components/vendors/VendorGrid";
import { VendorSearch } from "@/components/vendors/VendorSearch";
import { categories } from "@/data/categories";
import { vendors } from "@/data/vendors";
import {
  filterVendors,
  hasActiveVendorFilters,
  parseVendorFilters,
} from "@/lib/vendor-filters";

export const metadata: Metadata = {
  title: "Jelajahi Vendor",
  description:
    "Jelajahi direktori vendor lokal MITRACARA untuk kebutuhan acara organisasi kemahasiswaan.",
};

type VendorsPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function VendorsPage({ searchParams }: VendorsPageProps) {
  const filters = parseVendorFilters(await searchParams);
  const results = filterVendors(filters);
  const hasFilters = hasActiveVendorFilters(filters);

  return (
    <main>
      <section className="border-b border-line bg-white">
        <PageContainer className="py-10 sm:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-700">
            KATALOG VENDOR
          </p>
          <h1 className="mt-3 text-[26px] font-bold tracking-tight sm:text-4xl">
            Temukan Mitra untuk Acaramu
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Jelajahi {vendors.length} vendor lokal yang siap membantu kebutuhan
            acara kampus, mulai dari perlengkapan hingga dokumentasi.
          </p>

          <nav aria-label="Jelajahi berdasarkan kategori" className="mt-6">
            <ul className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/categories/${category.slug}`}
                    className="inline-flex min-h-10 items-center rounded-xl border border-line bg-cream px-3 text-xs font-semibold text-ink transition-colors hover:border-brand-600 hover:text-brand-700 sm:text-sm"
                  >
                    {category.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </PageContainer>
      </section>

      <section className="bg-cream">
        <PageContainer className="space-y-6 py-10 sm:py-14">
          <VendorSearch key={filters.q} filters={filters} />
          <VendorFilter filters={filters} />

          <div className="flex flex-wrap items-center justify-between gap-3">
            <p
              aria-live="polite"
              className="text-sm font-semibold text-ink"
            >
              {results.length} vendor ditemukan
              {hasFilters && (
                <span className="font-normal text-muted">
                  {" "}
                  dari {vendors.length} vendor
                </span>
              )}
            </p>
            <Link
              href="/#categories"
              className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Lihat semua kategori
            </Link>
          </div>

          {results.length > 0 ? (
            <VendorGrid vendors={results} columns={4} />
          ) : (
            <EmptyState />
          )}
        </PageContainer>
      </section>
    </main>
  );
}
