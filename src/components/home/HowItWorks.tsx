import { MessageCircle, Search, Store } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageContainer } from "@/components/ui/PageContainer";

const steps = [
  {
    number: "01",
    title: "Temukan Kebutuhanmu",
    description:
      "Jelajahi kategori dan cari vendor sesuai kebutuhan acara organisasimu.",
    icon: Search,
  },
  {
    number: "02",
    title: "Jelajahi Vendor Lokal",
    description:
      "Lihat profil, produk, layanan, dan informasi harga dari setiap vendor.",
    icon: Store,
  },
  {
    number: "03",
    title: "Hubungi Vendor Pilihan",
    description:
      "Bandingkan informasi lalu lanjutkan komunikasi langsung dengan vendor.",
    icon: MessageCircle,
  },
] as const;

export function HowItWorks() {
  return (
    <section id="about" className="scroll-mt-20 border-y border-line bg-white">
      <PageContainer className="py-12 sm:py-16">
        <SectionHeading
          eyebrow="TENTANG MITRACARA"
          title="Cara Kerja MITRACARA"
          description="MITRACARA mempertemukan organisasi mahasiswa dengan UMKM dan penyedia jasa lokal dalam satu direktori yang mudah dijelajahi."
          align="center"
        />

        <ol className="mt-10 grid gap-4 md:grid-cols-3 sm:gap-5">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.number}
                className="rounded-2xl border border-line bg-cream p-5 sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-brand-600/25">
                    {step.number}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </PageContainer>
    </section>
  );
}
