import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CategoryIcon } from "@/components/categories/CategoryIcon";
import { PageContainer } from "@/components/ui/PageContainer";
import { SafeImage } from "@/components/ui/SafeImage";
import { VendorGrid } from "@/components/vendors/VendorGrid";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getVendorsByCategorySlug } from "@/data/vendors";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: "Kategori tidak ditemukan" };
  }

  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryVendors = getVendorsByCategorySlug(category.slug);

  return (
    <main>
      <section className="border-b border-line bg-white">
        <PageContainer className="py-10 sm:py-14">
          <Link
            href="/#categories"
            className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Kembali ke kategori
          </Link>

          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
            <SafeImage
              src={category.image}
              alt={`Ilustrasi kategori ${category.name}`}
              width={80}
              height={80}
              className="h-16 w-16 rounded-2xl sm:h-20 sm:w-20"
            />
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
                <CategoryIcon
                  icon={category.icon}
                  className="h-4 w-4"
                />
                KATEGORI VENDOR
              </p>
              <h1 className="mt-2 text-[26px] font-bold tracking-tight sm:text-4xl">
                {category.name}
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {category.description}
              </p>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="bg-cream">
        <PageContainer className="py-10 sm:py-14">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-ink">
              {categoryVendors.length} vendor dalam kategori ini
            </p>
            <Link
              href="/vendors"
              className="text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600"
            >
              Lihat semua vendor
            </Link>
          </div>

          <VendorGrid vendors={categoryVendors} columns={3} />

          <div className="mt-10 border-t border-line pt-8">
            <h2 className="text-base font-bold">Jelajahi kategori lain</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {categories.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/categories/${item.slug}`}
                    aria-current={item.slug === category.slug ? "page" : undefined}
                    className={`inline-flex min-h-10 items-center rounded-xl border px-3 text-xs font-semibold transition-colors sm:text-sm ${
                      item.slug === category.slug
                        ? "border-brand-600 bg-brand-600 text-white"
                        : "border-line bg-white text-ink hover:border-brand-600 hover:text-brand-700"
                    }`}
                  >
                    {item.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </PageContainer>
      </section>
    </main>
  );
}
