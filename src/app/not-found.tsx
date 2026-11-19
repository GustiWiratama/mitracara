import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageContainer } from "@/components/ui/PageContainer";

export default function NotFound() {
  return (
    <main className="bg-cream">
      <PageContainer className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-700">
          404 — HALAMAN TIDAK DITEMUKAN
        </p>
        <h1 className="mt-3 text-2xl font-bold sm:text-3xl">
          Data yang kamu cari tidak tersedia
        </h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          Tautan mungkin salah atau vendor/kategori yang dimaksud belum tersedia
          dalam direktori demo ini.
        </p>
        <Link
          href="/vendors"
          className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Jelajahi Vendor
        </Link>
      </PageContainer>
    </main>
  );
}
