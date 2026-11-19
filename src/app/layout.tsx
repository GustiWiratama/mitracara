import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MITRACARA — Temukan Mitra, Wujudkan Acara",
    template: "%s | MITRACARA",
  },
  description:
    "Temukan mitra UMKM dan penyedia jasa lokal untuk kebutuhan acara organisasi kemahasiswaan.",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={plusJakartaSans.variable}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen bg-cream font-sans text-ink antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
