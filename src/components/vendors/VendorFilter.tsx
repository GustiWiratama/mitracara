"use client";

import { RotateCcw, SlidersHorizontal } from "lucide-react";
import { categories } from "@/data/categories";
import { useVendorFilters } from "@/hooks/useVendorFilters";
import {
  hasActiveVendorFilters,
  VENDOR_SORT_OPTIONS,
  vendorLocations,
  type VendorFilterValues,
  type VendorSort,
} from "@/lib/vendor-filters";

type VendorFilterProps = {
  filters: VendorFilterValues;
};

const controlClasses =
  "min-h-11 w-full rounded-xl border border-line bg-white px-3 text-sm text-ink outline-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600";

export function VendorFilter({ filters }: VendorFilterProps) {
  const { setCategory, setLocation, setSort, reset } =
    useVendorFilters(filters);
  const showReset = hasActiveVendorFilters(filters);

  return (
    <section
      aria-label="Filter dan urutkan vendor"
      className="rounded-2xl border border-line bg-white p-4 shadow-sm sm:p-5"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="inline-flex items-center gap-2 text-sm font-bold text-ink">
          <SlidersHorizontal aria-hidden="true" className="h-4 w-4 text-brand-700" />
          Filter &amp; Urutkan
        </h2>
        {showReset && (
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-line px-3 text-xs font-semibold text-muted transition-colors hover:border-brand-600 hover:text-brand-700 sm:text-sm"
          >
            <RotateCcw aria-hidden="true" className="h-3.5 w-3.5" />
            Reset filter
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
        <div className="min-w-0">
          <label
            htmlFor="vendor-category-filter"
            className="mb-1.5 block text-xs font-semibold text-muted"
          >
            Kategori
          </label>
          <select
            id="vendor-category-filter"
            value={filters.category}
            onChange={(event) => setCategory(event.target.value)}
            className={controlClasses}
          >
            <option value="">Semua kategori</option>
            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="min-w-0">
          <label
            htmlFor="vendor-location-filter"
            className="mb-1.5 block text-xs font-semibold text-muted"
          >
            Lokasi
          </label>
          <select
            id="vendor-location-filter"
            value={filters.location}
            onChange={(event) => setLocation(event.target.value)}
            className={controlClasses}
          >
            <option value="">Semua lokasi</option>
            {vendorLocations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div className="min-w-0">
          <label
            htmlFor="vendor-sort"
            className="mb-1.5 block text-xs font-semibold text-muted"
          >
            Urutkan
          </label>
          <select
            id="vendor-sort"
            value={filters.sort}
            onChange={(event) => setSort(event.target.value as VendorSort)}
            className={controlClasses}
          >
            {VENDOR_SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}
