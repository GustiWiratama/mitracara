"use client";

import { useState, type FormEvent } from "react";
import { Search, X } from "lucide-react";
import { useVendorFilters } from "@/hooks/useVendorFilters";
import type { VendorFilterValues } from "@/lib/vendor-filters";

type VendorSearchProps = {
  filters: VendorFilterValues;
  id?: string;
};

export function VendorSearch({
  filters,
  id = "vendor-search",
}: VendorSearchProps) {
  const [query, setQuery] = useState(filters.q);
  const { setQuery: applyQuery } = useVendorFilters(filters);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedQuery = query.trim();
    setQuery(trimmedQuery);
    applyQuery(trimmedQuery);
  };

  const handleClear = () => {
    setQuery("");
    applyQuery("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className="flex w-full flex-col gap-2 rounded-2xl border border-line bg-white p-2 shadow-sm sm:flex-row sm:items-center"
    >
      <label htmlFor={id} className="sr-only">
        Cari vendor, produk, atau jasa
      </label>
      <span className="relative flex-1">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
        />
        <input
          id={id}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Cari vendor, produk, atau jasa..."
          className="min-h-11 w-full rounded-xl bg-transparent pl-10 pr-10 text-sm text-ink outline-none placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Hapus kata kunci pencarian"
            className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-muted transition-colors hover:bg-brand-50 hover:text-brand-700"
          >
            <X aria-hidden="true" className="h-4 w-4" />
          </button>
        )}
      </span>
      <button
        type="submit"
        className="inline-flex min-h-11 items-center justify-center rounded-xl bg-brand-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
      >
        Cari Vendor
      </button>
    </form>
  );
}
