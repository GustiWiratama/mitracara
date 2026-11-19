/** Shared domain types for MITRACARA mock data and UI components. */

export type CategorySlug =
  | "perlengkapan-penyewaan"
  | "konsumsi-kuliner"
  | "adat-kerohanian"
  | "jasa-pengisi-acara"
  | "dokumentasi-kreatif";

/** Icon key is resolved to a Lucide component inside the UI layer. */
export type CategoryIconKey =
  | "equipment"
  | "food"
  | "ceremony"
  | "performer"
  | "creative";

export type VendorCategory = {
  id: string;
  slug: CategorySlug;
  name: string;
  shortName: string;
  description: string;
  icon: CategoryIconKey;
  image: string;
};

export type VendorProduct = {
  id: string;
  name: string;
  description: string;
  price: string;
  priceNote?: string;
  details: string[];
  image: string;
};

export type VendorPortfolioItem = {
  id: string;
  image: string;
  caption: string;
};

export type VendorReview = {
  id: string;
  reviewer: string;
  rating: number;
  date: string;
  comment: string;
};

export type Vendor = {
  id: string;
  slug: string;
  name: string;
  categorySlug: CategorySlug;
  shortDescription: string;
  description: string;
  location: string;
  address: string;
  contactPhone: string;
  /** Digits-only demonstration WhatsApp number; no real personal data. */
  whatsapp: string;
  profileImage: string;
  coverImage: string;
  verified: boolean;
  rating: number;
  reviewCount: number;
  featured: boolean;
  products: VendorProduct[];
  portfolio: VendorPortfolioItem[];
  reviews: VendorReview[];
};
