"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  // On home at top: fully transparent over El Ávila — never a solid white bar
  const transparent = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        // Fixed so hero is true first viewport (nav overlays, does not push content)
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        transparent
          ? "border-transparent bg-transparent"
          : "border-[var(--line)]/80 bg-[var(--background)]/94 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5">
        <Logo inverted={transparent} />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {NAV_LINKS.filter((link) => link.href !== "/").map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 text-[13px] tracking-[0.02em] transition-colors",
                pathname === link.href
                  ? transparent
                    ? "text-gold"
                    : "text-navy dark:text-white"
                  : transparent
                    ? "text-white/80 hover:text-white"
                    : "text-navy/70 hover:text-navy dark:text-white/70 dark:hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle inverted={transparent} />
          <Button
            href="/contact"
            className={cn(
              "!py-2 !text-[11px] uppercase tracking-[0.16em]",
              transparent &&
                "!border !border-white/35 !bg-transparent !text-white hover:!border-gold hover:!bg-transparent hover:!text-gold",
            )}
          >
            Schedule a Consultation
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle inverted={transparent} />
          <button
            type="button"
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center border",
              transparent
                ? "border-white/30 text-white"
                : "border-[var(--line)] text-navy dark:text-white",
            )}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--line)] bg-[var(--background)] lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "border-b border-[var(--line)] py-3 text-sm",
                  pathname === link.href
                    ? "text-navy dark:text-white"
                    : "text-navy/80 dark:text-white/80",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-4">
              Schedule a Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
