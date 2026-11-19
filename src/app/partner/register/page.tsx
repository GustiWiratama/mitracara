import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { PageContainer } from "@/components/ui/PageContainer";

export const metadata: Metadata = {
  title: "Daftar Jadi Mitra",
  description:
    "Informasi pendaftaran mitra MITRACARA (prototipe frontend, belum tersedia).",
};

export default function PartnerRegisterPage() {
  return (
    <main className="bg-cream">
      <PageContainer className="flex min-h-[65vh] flex-col items-start justify-center py-16">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-700">
          MITRA MITRACARA
        </p>
        <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
          Pendaftaran Mitra
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          Formulir pendaftaran mitra belum tersedia dalam prototipe frontend ini.
          Untuk sementara, calon mitra dapat menghubungi tim MITRACARA melalui
          email demo berikut.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href="mailto:halo@mitracara.id?subject=Pendaftaran%20Mitra%20MITRACARA"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            <Mail aria-hidden="true" className="h-4 w-4" />
            Hubungi via Email
          </a>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-brand-600 px-5 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Kembali ke Beranda
          </Link>
        </div>
      </PageContainer>
    </main>
  );
}
