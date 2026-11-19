import type { VendorCategory } from "@/types";

/**
 * The five official MITRACARA categories.
 * Images are local SVG illustrations so no external asset host is required.
 */
export const categories: VendorCategory[] = [
  {
    id: "cat-equipment",
    slug: "perlengkapan-penyewaan",
    name: "Perlengkapan & Penyewaan",
    shortName: "Perlengkapan",
    description: "Tenda, meja kursi, sound system, lighting, dan panggung acara.",
    icon: "equipment",
    image: "/images/categories/perlengkapan-penyewaan.svg",
  },
  {
    id: "cat-food",
    slug: "konsumsi-kuliner",
    name: "Konsumsi & Kuliner",
    shortName: "Konsumsi",
    description: "Katering, nasi box, snack, kopi, hingga dessert khas Bali.",
    icon: "food",
    image: "/images/categories/konsumsi-kuliner.svg",
  },
  {
    id: "cat-ceremony",
    slug: "adat-kerohanian",
    name: "Adat & Kerohanian",
    shortName: "Adat & Kerohanian",
    description: "Banten, canang sari, gebogan, dan perlengkapan upacara.",
    icon: "ceremony",
    image: "/images/categories/adat-kerohanian.svg",
  },
  {
    id: "cat-performer",
    slug: "jasa-pengisi-acara",
    name: "Jasa & Pengisi Acara",
    shortName: "Pengisi Acara",
    description: "MC, moderator, MUA, penari tradisional, dan pertunjukan.",
    icon: "performer",
    image: "/images/categories/jasa-pengisi-acara.svg",
  },
  {
    id: "cat-creative",
    slug: "dokumentasi-kreatif",
    name: "Dokumentasi & Kreatif",
    shortName: "Dokumentasi",
    description: "Fotografi, videografi, desain grafis, cetak, dan merchandise.",
    icon: "creative",
    image: "/images/categories/dokumentasi-kreatif.svg",
  },
];

export function getCategoryBySlug(slug: string): VendorCategory | undefined {
  return categories.find((category) => category.slug === slug);
}
