import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageContainer } from "@/components/ui/PageContainer";

export const metadata: Metadata = {
  title: "Login",
  description: "Halaman informasi login MITRACARA (prototipe frontend).",
};

export default function LoginPage() {
  return (
    <main className="bg-cream">
      <PageContainer className="flex min-h-[65vh] flex-col items-start justify-center py-16">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-700">
          AKUN MITRACARA
        </p>
        <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
          Login Belum Tersedia
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          Prototipe ini tidak menyediakan autentikasi. Seluruh fitur direktori
          vendor dapat dijelajahi tanpa masuk ke akun.
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
