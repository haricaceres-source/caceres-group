"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { FIRM_NAV, PRIMARY_NAV } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [firmOpen, setFirmOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const firmRef = useRef<HTMLDivElement>(null);
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !open;
  const firmActive = FIRM_NAV.some((link) => pathname === link.href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setFirmOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (firmRef.current && !firmRef.current.contains(e.target as Node)) {
        setFirmOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const linkClass = (active: boolean) =>
    cn(
      "px-3 py-2 text-[12px] font-medium tracking-[0.15em] uppercase transition-colors",
      active
        ? transparent
          ? "text-gold"
          : "text-navy dark:text-white"
        : transparent
          ? "text-white/80 hover:text-white"
          : "text-navy/65 hover:text-navy dark:text-white/65 dark:hover:text-white",
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        transparent
          ? "border-transparent bg-transparent"
          : "border-black/10 bg-white dark:border-white/10 dark:bg-[var(--background)]",
      )}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <Logo inverted={transparent} />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {PRIMARY_NAV.filter((link) => link.href !== "/contact").map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClass(pathname === link.href)}
            >
              {link.label}
            </Link>
          ))}

          <div className="relative" ref={firmRef}>
            <button
              type="button"
              className={cn(linkClass(firmActive), "inline-flex items-center gap-1")}
              aria-expanded={firmOpen}
              aria-haspopup="true"
              onClick={() => setFirmOpen((v) => !v)}
            >
              Firm
              <ChevronDown
                size={12}
                className={cn("transition-transform", firmOpen && "rotate-180")}
              />
            </button>
            {firmOpen && (
              <div className="absolute top-full left-0 mt-2 min-w-[220px] border border-black/10 bg-white py-2 shadow-none dark:border-white/10 dark:bg-[var(--surface-elevated)]">
                {FIRM_NAV.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block px-4 py-2.5 text-[11px] font-medium tracking-[0.15em] uppercase transition-colors",
                      pathname === link.href
                        ? "text-gold"
                        : "text-navy/70 hover:text-navy dark:text-white/70 dark:hover:text-white",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className={linkClass(pathname === "/contact")}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle inverted={transparent} />
          <Button
            href="/contact"
            className={cn(
              "!py-2",
              transparent &&
                "!border !border-white/40 !bg-transparent !text-white hover:!border-gold hover:!bg-transparent hover:!text-gold",
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
              "inline-flex h-9 w-9 items-center justify-center border rounded-none",
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
        <div className="border-t border-black/10 bg-white dark:border-white/10 dark:bg-[var(--background)] lg:hidden">
          <nav className="mx-auto flex max-w-5xl flex-col px-6 py-4" aria-label="Mobile">
            {PRIMARY_NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "border-b border-[var(--line)] py-3 text-[12px] font-medium tracking-[0.15em] uppercase",
                  pathname === link.href
                    ? "text-navy dark:text-white"
                    : "text-navy/80 dark:text-white/80",
                )}
              >
                {link.label}
              </Link>
            ))}
            <p className="pt-4 pb-2 text-[10px] font-medium tracking-[0.25em] text-gold uppercase">
              Firm
            </p>
            {FIRM_NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "border-b border-[var(--line)] py-3 pl-2 text-[12px] font-medium tracking-[0.15em] uppercase",
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
