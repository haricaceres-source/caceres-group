import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { PRIMARY_NAV, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-gold/40 bg-navy text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:gap-6">
        <Logo inverted compact={false} />

        <nav
          className="flex flex-wrap items-center gap-x-6 gap-y-2"
          aria-label="Footer"
        >
          {PRIMARY_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium tracking-[0.15em] text-white/70 uppercase transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="text-sm text-white/60 md:text-right">
          <a
            href={`mailto:${SITE.email}`}
            className="transition-colors hover:text-gold"
          >
            {SITE.email}
          </a>
          <p className="mt-1 text-xs text-white/40">
            © {new Date().getFullYear()} {SITE.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
