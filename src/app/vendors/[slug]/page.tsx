import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  MapPin,
  Phone,
  Store,
} from "lucide-react";
import { VendorContactButton } from "@/components/vendors/VendorContactButton";
import { RatingBadge } from "@/components/ui/RatingBadge";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageContainer } from "@/components/ui/PageContainer";
import { VerificationStatus } from "@/components/ui/VerificationStatus";
import { getCategoryBySlug } from "@/data/categories";
import { getVendorBySlug, vendors } from "@/data/vendors";

type VendorDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return vendors.map((vendor) => ({ slug: vendor.slug }));
}

export async function generateMetadata({
  params,
}: VendorDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const vendor = getVendorBySlug(slug);

  if (!vendor) {
    return { title: "Vendor tidak ditemukan" };
  }

  return {
    title: vendor.name,
    description: vendor.shortDescription,
  };
}

export default async function VendorDetailPage({ params }: VendorDetailProps) {
  const { slug } = await params;
  const vendor = getVendorBySlug(slug);

  if (!vendor) {
    notFound();
  }

  const category = getCategoryBySlug(vendor.categorySlug);
  const phoneHref = `tel:${vendor.contactPhone.replace(/[^\d]/g, "")}`;

  return (
    <main>
      <section className="border-b border-line bg-white">
        <PageContainer className="py-6 sm:py-8">
          <Link
            href="/vendors"
            className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Kembali ke katalog
          </Link>

          <div className="relative mt-5 aspect-[16/7] overflow-hidden rounded-2xl border border-line bg-brand-50 sm:rounded-3xl">
            <SafeImage
              src={vendor.coverImage}
              alt={`Ilustrasi sampul ${vendor.name}`}
              fill
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <SafeImage
                src={vendor.profileImage}
                alt={`Logo profil ${vendor.name}`}
                width={96}
                height={96}
                className="h-20 w-20 rounded-2xl border border-line bg-white object-cover sm:h-24 sm:w-24"
              />
              <div>
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {vendor.name}
                </h1>
                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <VerificationStatus verified={vendor.verified} />
                  {category ? (
                    <Link
                      href={`/categories/${category.slug}`}
                      className="text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600"
                    >
                      {category.name}
                    </Link>
                  ) : null}
                  <span className="inline-flex items-center gap-1 text-sm text-muted">
                    <MapPin aria-hidden="true" className="h-4 w-4" />
                    {vendor.location}
                  </span>
                  <RatingBadge
                    rating={vendor.rating}
                    reviewCount={vendor.reviewCount}
                  />
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col gap-2 sm:w-auto">
              <VendorContactButton vendor={vendor} />
              <a
                href={phoneHref}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-brand-600 px-5 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
                Telepon Vendor
                <span className="inline-flex items-center rounded bg-brand-50 px-1.5 py-0.5 text-[9px] font-bold leading-none tracking-wide text-brand-700">
                  DEMO
                </span>
              </a>
              <p className="text-[11px] leading-relaxed text-muted">
                Kontak demo — nomor fiktif untuk prototipe MITRACARA.
              </p>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="bg-cream">
        <PageContainer className="grid gap-6 py-10 sm:py-14 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-2xl border border-line bg-white p-5 sm:p-7">
            <h2 className="text-xl font-bold">Tentang Vendor</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {vendor.description}
            </p>
            <dl className="mt-6 space-y-4 border-t border-line pt-5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                />
                <div>
                  <dt className="font-semibold">Alamat</dt>
                  <dd className="text-muted">{vendor.address}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                />
                <div>
                  <dt className="font-semibold">Kontak (data demo)</dt>
                  <dd className="text-muted">{vendor.contactPhone}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Store
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                />
                <div>
                  <dt className="font-semibold">Kategori utama</dt>
                  <dd className="text-muted">{category?.name ?? "Lokal"}</dd>
                </div>
              </div>
            </dl>
          </div>

          <aside className="rounded-2xl border border-brand-50 bg-brand-50 p-5 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
              INFORMASI SINGKAT
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center justify-between gap-3">
                <span className="text-muted">Rating</span>
                <RatingBadge rating={vendor.rating} />
              </li>
              <li className="flex items-center justify-between gap-3">
                <span className="text-muted">Jumlah ulasan</span>
                <span className="font-semibold">{vendor.reviewCount}</span>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span className="text-muted">Lokasi</span>
                <span className="font-semibold">{vendor.location}</span>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span className="text-muted">Status</span>
                <span className="font-semibold">
                  {vendor.verified ? "Terverifikasi" : "Belum diverifikasi"}
                </span>
              </li>
            </ul>
          </aside>
        </PageContainer>
      </section>

      <section className="border-t border-line bg-white">
        <PageContainer className="py-10 sm:py-14">
          <SectionHeading
            eyebrow="LAYANAN"
            title="Produk & Jasa"
            description="Berikut contoh produk atau layanan yang ditawarkan vendor ini."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {vendor.products.map((product) => (
              <article
                key={product.id}
                className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
              >
                <div className="relative aspect-[16/10] bg-brand-50">
                  <SafeImage
                    src={product.image}
                    alt={`Ilustrasi ${product.name}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-base font-bold">{product.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {product.description}
                  </p>
                  <p className="mt-3 text-lg font-bold text-brand-700">
                    {product.price}
                    {product.priceNote ? (
                      <span className="ml-1 text-xs font-semibold text-muted">
                        {product.priceNote}
                      </span>
                    ) : null}
                  </p>
                  <ul className="mt-3 space-y-1.5 border-t border-line pt-3 text-xs text-muted">
                    {product.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <CheckCircle2
                          aria-hidden="true"
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-600"
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 border-t border-line pt-4">
                    <VendorContactButton
                      vendor={vendor}
                      productName={product.name}
                      variant="secondary"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="bg-cream">
        <PageContainer className="py-10 sm:py-14">
          <SectionHeading
            eyebrow="DOKUMENTASI"
            title="Portofolio"
            description="Ilustrasi contoh hasil pekerjaan atau penyiapan acara oleh vendor."
          />
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {vendor.portfolio.map((item) => (
              <figure
                key={item.id}
                className="overflow-hidden rounded-2xl border border-line bg-white"
              >
                <div className="relative aspect-[4/3] bg-brand-50">
                  <SafeImage
                    src={item.image}
                    alt={item.caption}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-3 text-xs leading-relaxed text-muted">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="border-t border-line bg-white">
        <PageContainer className="py-10 sm:py-14">
          <SectionHeading
            eyebrow="ULASAN DEMO"
            title="Ulasan Pelanggan"
            description="Konten ulasan berikut adalah data simulasi untuk keperluan prototipe."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {vendor.reviews.map((review) => (
              <article
                key={review.id}
                className="rounded-2xl border border-line bg-cream p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-bold">{review.reviewer}</p>
                  <RatingBadge rating={review.rating} />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {review.comment}
                </p>
                <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted">
                  <CalendarDays aria-hidden="true" className="h-3.5 w-3.5" />
                  {review.date}
                </p>
              </article>
            ))}
          </div>
        </PageContainer>
      </section>
    </main>
  );
}
