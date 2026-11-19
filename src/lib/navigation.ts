import { categories } from "@/data/categories";

export type NavigationLink = {
  label: string;
  href: string;
};

/** Main navigation shared by the desktop navbar, mobile menu and footer. */
export const mainNavigation: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "Explore Vendors", href: "/vendors" },
  { label: "Categories", href: "/#categories" },
  { label: "About Us", href: "/#about" },
];

/** Partner CTA and authentication links (UI demonstrations only). */
export const accountNavigation: NavigationLink[] = [
  { label: "Jadi Mitra", href: "/partner/register" },
  { label: "Login", href: "/login" },
  { label: "Daftar", href: "/register" },
];

/** Footer category links point at the real category listing routes. */
export const footerCategoryLinks: NavigationLink[] = categories.map(
  (category) => ({
    label: category.name,
    href: `/categories/${category.slug}`,
  }),
);
