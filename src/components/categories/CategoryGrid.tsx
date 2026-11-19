import { CategoryCard } from "@/components/categories/CategoryCard";
import { categories as defaultCategories } from "@/data/categories";
import type { VendorCategory } from "@/types";

type CategoryGridProps = {
  categories?: VendorCategory[];
};

export function CategoryGrid({ categories = defaultCategories }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
      {categories.map((category) => (
        <CategoryCard key={category.slug} category={category} />
      ))}
    </div>
  );
}
