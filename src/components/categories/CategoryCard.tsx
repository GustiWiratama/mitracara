import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SafeImage } from "@/components/ui/SafeImage";
import type { VendorCategory } from "@/types";

type CategoryCardProps = {
  category: VendorCategory;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-line bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-brand-600/40 hover:shadow-md sm:p-5"
      aria-label={`Lihat vendor kategori ${category.name}`}
    >
      <div className="flex items-start justify-between gap-2">
        <SafeImage
          src={category.image}
          alt={`Ilustrasi kategori ${category.name}`}
          width={56}
          height={56}
          className="h-12 w-12 rounded-xl sm:h-14 sm:w-14"
        />
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-brand-700"
        />
      </div>

      <h3 className="mt-4 text-sm font-bold leading-snug text-ink sm:text-base">
        {category.name}
      </h3>
      <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-muted sm:text-[13px]">
        {category.description}
      </p>
      <span className="mt-4 text-xs font-semibold text-brand-700">
        Lihat vendor
      </span>
    </Link>
  );
}
