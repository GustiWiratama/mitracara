"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { PageContainer } from "@/components/ui/PageContainer";
import { accountNavigation, mainNavigation } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  id: string;
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ id, open, onClose }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    closeButtonRef.current?.focus();
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const links = [...mainNavigation, ...accountNavigation];

  return (
    <div
      id={id}
      className="border-t border-line bg-white shadow-sm lg:hidden motion-reduce:transition-none"
    >
      <PageContainer className="py-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            Menu
          </span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Tutup menu navigasi"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-ink transition-colors hover:border-brand-600 hover:text-brand-700"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        <nav aria-label="Navigasi seluler" className="mt-3 flex flex-col">
          {links.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex min-h-11 items-center rounded-xl px-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-50 hover:text-brand-700",
                index === 0 && "mt-1",
                index === 4 && "mt-2 border-t border-line pt-3",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </PageContainer>
    </div>
  );
}
