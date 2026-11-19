import Link from "next/link";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { HeroSearch } from "@/components/home/HeroSearch";
import { SafeImage } from "@/components/ui/SafeImage";
import { PageContainer } from "@/components/ui/PageContainer";

export function HeroSection() {
  return (
    <section className="border-b border-line bg-cream">
      <PageContainer className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
            LOCAL EVENT PARTNER
          </p>
          <h1 className="mt-4 text-[32px] font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-[56px]">
            Temukan Mitra,
            <br />
            Wujudkan Acara.
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Hubungkan kebutuhan acara kampus dengan UMKM dan penyedia jasa lokal.
            Jelajahi vendor, bandingkan produk dan layanan, lalu pilih mitra yang
            paling sesuai untuk kegiatanmu.
          </p>

          <div className="mt-7">
            <HeroSearch />
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/vendors"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Explore Vendors
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              href="/partner/register"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-brand-600 px-5 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
            >
              Become a Partner
            </Link>
          </div>

          <p className="mt-5 inline-flex items-center gap-2 text-xs text-muted">
            <HeartHandshake aria-hidden="true" className="h-4 w-4 text-brand-600" />
            Direktori vendor lokal untuk organisasi kemahasiswaan.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-brand-50 bg-brand-50 shadow-sm">
            <SafeImage
              src="/images/hero-collaboration.svg"
              alt="Ilustrasi kolaborasi organisasi kampus dan UMKM lokal dalam menyiapkan acara"
              width={1000}
              height={760}
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
