/**
 * Pure search, filter and sort logic for the MITRACARA vendor catalog.
 * Kept free of React/Next.js APIs so both Server and Client Components can use it.
 */
import { categories } from "@/data/categories";
import { vendors } from "@/data/vendors";
import type { Vendor } from "@/types";

export type VendorSort = "default" | "newest" | "rating" | "name";

export type VendorFilterValues = {
  q: string;
  category: string;
  location: string;
  sort: VendorSort;
};

export const DEFAULT_VENDOR_FILTERS: VendorFilterValues = {
  q: "",
  category: "",
  location: "",
  sort: "default",
};

export const VENDOR_SORT_OPTIONS: Array<{
  value: VendorSort;
  label: string;
}> = [
  { value: "default", label: "Default" },
  { value: "newest", label: "Terbaru" },
  { value: "rating", label: "Rating tertinggi" },
  { value: "name", label: "Nama A-Z" },
];

/** Location choices are derived from the existing mock vendor data. */
export const vendorLocations = Array.from(
  new Set(vendors.map((vendor) => vendor.location)),
).sort((a, b) => a.localeCompare(b, "id-ID"));

type SearchParamRecord = Record<string, string | string[] | undefined>;

function firstValue(value: string | string[] | undefined): string {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }
  return value ?? "";
}

/**
 * Normalize raw URL search params into safe filter values. Unknown categories,
 * locations or sort keys fall back to defaults so shared URLs cannot break the UI.
 */
export function parseVendorFilters(raw: SearchParamRecord): VendorFilterValues {
  const rawCategory = firstValue(raw.category);
  const rawLocation = firstValue(raw.location);
  const rawSort = firstValue(raw.sort) as VendorSort;

  const category = categories.some((item) => item.slug === rawCategory)
    ? rawCategory
    : "";
  const location = vendorLocations.includes(rawLocation) ? rawLocation : "";
  const sort = VENDOR_SORT_OPTIONS.some((option) => option.value === rawSort)
    ? rawSort
    : "default";

  return {
    q: firstValue(raw.q).trim(),
    category,
    location,
    sort,
  };
}

export function hasActiveVendorFilters(values: VendorFilterValues): boolean {
  return Boolean(
    values.q || values.category || values.location || values.sort !== "default",
  );
}

export function buildVendorCatalogHref(values: VendorFilterValues): string {
  const params = new URLSearchParams();

  if (values.q.trim()) {
    params.set("q", values.q.trim());
  }
  if (values.category) {
    params.set("category", values.category);
  }
  if (values.location) {
    params.set("location", values.location);
  }
  if (values.sort !== "default") {
    params.set("sort", values.sort);
  }

  const query = params.toString();
  return query ? `/vendors?${query}` : "/vendors";
}

function vendorSearchText(vendor: Vendor): string {
  const category = categories.find(
    (item) => item.slug === vendor.categorySlug,
  );

  return [
    vendor.name,
    vendor.shortDescription,
    vendor.location,
    category?.name ?? "",
    category?.shortName ?? "",
    category?.slug ?? "",
    ...vendor.products.flatMap((product) => [
      product.name,
      product.description,
      ...product.details,
    ]),
  ]
    .join(" ")
    .toLocaleLowerCase("id-ID");
}

function vendorIdNumber(vendor: Vendor): number {
  const match = vendor.id.match(/(\d+)$/);
  return match ? Number(match[1]) : 0;
}

function sortVendors(list: Vendor[], sort: VendorSort): Vendor[] {
  const sorted = [...list];

  switch (sort) {
    case "newest":
      // Sequential mock IDs (v-001 ... v-015) represent catalog insertion order.
      return sorted.sort(
        (a, b) =>
          vendorIdNumber(b) - vendorIdNumber(a) ||
          a.name.localeCompare(b.name, "id-ID"),
      );
    case "rating":
      return sorted.sort(
        (a, b) =>
          b.rating - a.rating ||
          b.reviewCount - a.reviewCount ||
          a.name.localeCompare(b.name, "id-ID"),
      );
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name, "id-ID"));
    default:
      return sorted;
  }
}

/** Apply search, category, location and sorting as one deterministic pipeline. */
export function filterVendors(values: VendorFilterValues): Vendor[] {
  const tokens = values.q
    .toLocaleLowerCase("id-ID")
    .split(/\s+/)
    .filter(Boolean);

  const matches = vendors.filter((vendor) => {
    if (values.category && vendor.categorySlug !== values.category) {
      return false;
    }
    if (values.location && vendor.location !== values.location) {
      return false;
    }
    if (tokens.length === 0) {
      return true;
    }

    const searchableText = vendorSearchText(vendor);
    return tokens.every((token) => searchableText.includes(token));
  });

  return sortVendors(matches, values.sort);
}
