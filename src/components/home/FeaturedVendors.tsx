import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageContainer } from "@/components/ui/PageContainer";
import { VendorGrid } from "@/components/vendors/VendorGrid";
import { featuredVendors } from "@/data/vendors";

export function FeaturedVendors() {
  return (
    <section id="featured" className="scroll-mt-20 bg-cream">
      <PageContainer className="py-12 sm:py-16">
        <SectionHeading
          eyebrow="PILIHAN MITRACARA"
          title="Vendor Pilihan"
          description="Beberapa mitra lokal yang siap membantu kebutuhan acara organisasimu."
          action={
            <Link
              href="/vendors"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-brand-600 px-4 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
            >
              Lihat Semua Vendor
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          }
        />
        <div className="mt-8">
          <VendorGrid vendors={featuredVendors} columns={4} />
        </div>
      </PageContainer>
    </section>
  );
}
