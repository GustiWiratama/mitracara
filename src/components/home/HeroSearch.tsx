"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";

/**
 * Visual search entry point on the landing page. Keyword filtering itself is
 * scheduled for Milestone 3; for now this navigates to the vendor catalog.
 */
export function HeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/vendors");
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className="flex w-full max-w-xl flex-col gap-2 rounded-2xl border border-line bg-white p-2 shadow-sm sm:flex-row sm:items-center"
    >
      <label htmlFor="hero-vendor-search" className="sr-only">
        Cari vendor, produk, atau jasa
      </label>
      <span className="relative flex-1">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
        />
        <input
          id="hero-vendor-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Cari vendor, produk, atau jasa..."
          className="min-h-11 w-full rounded-xl bg-transparent pl-10 pr-3 text-sm text-ink outline-none placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
        />
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
