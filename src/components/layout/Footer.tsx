import Link from "next/link";
import { ExternalLink, Mail, MapPin } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { PageContainer } from "@/components/ui/PageContainer";
import { accountNavigation, footerCategoryLinks, mainNavigation } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="bg-brand-700 text-white">
      <PageContainer className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div>
          <div className="[&_span:last-child]:text-white">
            <BrandLogo />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
            Platform yang mempertemukan organisasi kemahasiswaan dengan UMKM dan
            penyedia jasa lokal untuk kebutuhan acara kampus.
          </p>
          <p className="mt-3 text-xs text-white/60">
            Temukan Mitra, Wujudkan Acara.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider">Navigasi</h2>
          <ul className="mt-4 space-y-2.5">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider">Kategori</h2>
          <ul className="mt-4 space-y-2.5">
            {footerCategoryLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider">Kontak</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2.5">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
              <span>Bali, Indonesia</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
              <a
                href="mailto:halo@mitracara.id"
                className="transition-colors hover:text-white"
              >
                halo@mitracara.id
              </a>
            </li>
          </ul>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {[
              { label: "Instagram", href: "https://www.instagram.com/" },
              { label: "Facebook", href: "https://www.facebook.com/" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.label} MITRACARA (tautan demo)`}
                className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-white/25 px-3 text-xs font-semibold text-white/75 transition-colors hover:bg-white/10 hover:text-white"
              >
                {social.label}
                <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </PageContainer>

      <div className="border-t border-white/15">
        <PageContainer className="flex flex-col gap-3 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MITRACARA. Seluruh hak dilindungi.</p>
          <div className="flex flex-wrap gap-4">
            {accountNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </PageContainer>
      </div>
    </footer>
  );
}
