"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import {
  buildVendorCatalogHref,
  DEFAULT_VENDOR_FILTERS,
  type VendorFilterValues,
  type VendorSort,
} from "@/lib/vendor-filters";

/**
 * Keeps catalog controls in sync with the URL. Every change preserves the
 * other active filters, so search, category, location and sorting compose.
 */
export function useVendorFilters(current: VendorFilterValues) {
  const router = useRouter();

  const goTo = useCallback(
    (next: VendorFilterValues) => {
      router.push(buildVendorCatalogHref(next), { scroll: false });
    },
    [router],
  );

  return {
    setQuery: (q: string) => goTo({ ...current, q }),
    setCategory: (category: string) => goTo({ ...current, category }),
    setLocation: (location: string) => goTo({ ...current, location }),
    setSort: (sort: VendorSort) => goTo({ ...current, sort }),
    reset: () => goTo(DEFAULT_VENDOR_FILTERS),
  };
}
