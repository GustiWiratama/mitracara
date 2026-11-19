import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageContainer } from "@/components/ui/PageContainer";
import { VendorGrid } from "@/components/vendors/VendorGrid";
import { categories } from "@/data/categories";
import { vendors } from "@/data/vendors";

export const metadata: Metadata = {
  title: "Jelajahi Vendor",
  description:
    "Jelajahi direktori vendor lokal MITRACARA untuk kebutuhan acara organisasi kemahasiswaan.",
};

export default function VendorsPage() {
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
        <PageContainer className="py-10 sm:py-14">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-ink">
              {vendors.length} vendor ditemukan
            </p>
            <Link
              href="/#categories"
              className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Lihat semua kategori
            </Link>
          </div>

          <VendorGrid vendors={vendors} columns={4} />
        </PageContainer>
      </section>
    </main>
  );
}
