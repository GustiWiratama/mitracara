"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { PageContainer } from "@/components/ui/PageContainer";
import { accountNavigation, mainNavigation } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

function subscribeToHashChange(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function getHashSnapshot() {
  return window.location.hash;
}

function getServerHashSnapshot() {
  return "";
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const hash = useSyncExternalStore(
    subscribeToHashChange,
    getHashSnapshot,
    getServerHashSnapshot,
  );

  // Menu links close it on click; this covers browser back/forward navigation.
  useEffect(() => {
    const closeMenu = () => setMobileOpen(false);
    window.addEventListener("popstate", closeMenu);
    return () => window.removeEventListener("popstate", closeMenu);
  }, []);

  const isActive = (href: string) => {
    const [path, fragment] = href.split("#");

    if (fragment) {
      return pathname === path && hash === `#${fragment}`;
    }

    return path === "/"
      ? pathname === "/" && !hash
      : pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/85">
      <PageContainer className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
          aria-label="MITRACARA — ke beranda"
        >
          <BrandLogo />
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-1 lg:flex">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:bg-brand-50 hover:text-brand-700",
                isActive(item.href) ? "text-brand-700" : "text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href={accountNavigation[0].href}
            className="rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            {accountNavigation[0].label}
          </Link>
          {accountNavigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-2.5 py-2 text-sm font-semibold text-ink transition-colors hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-ink transition-colors hover:border-brand-600 hover:text-brand-700 lg:hidden"
        >
          {mobileOpen ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </PageContainer>

      <MobileMenu
        id="mobile-navigation"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}
