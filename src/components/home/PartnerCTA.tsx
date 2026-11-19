import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageContainer } from "@/components/ui/PageContainer";

export function PartnerCTA() {
  return (
    <section id="partner" className="scroll-mt-20 bg-cream">
      <PageContainer className="py-12 sm:py-16">
        <div className="relative overflow-hidden rounded-3xl bg-brand-50 px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-white/60"
          />
          <div className="relative max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-700">
              UNTUK UMKM &amp; PENYEDIA JASA
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Punya Usaha atau Jasa Lokal?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/75 sm:text-base">
              Bergabunglah menjadi mitra MITRACARA agar usahamu lebih mudah
              ditemukan oleh organisasi mahasiswa yang membutuhkan produk dan
              layanan untuk acara mereka.
            </p>
            <Link
              href="/partner/register"
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Daftar Jadi Mitra
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
