import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo inverted />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            Early-stage market-entry advisory for international companies
            seeking to enter, expand, invest, and operate in Venezuela.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-medium tracking-[0.26em] text-gold uppercase">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-medium tracking-[0.26em] text-gold uppercase">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Mail size={15} />
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${SITE.phoneHref}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Phone size={15} />
                {SITE.phone}
              </a>
            </li>
            <li>{SITE.address}</li>
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-flex border border-gold/40 px-4 py-2 text-[11px] font-medium tracking-[0.16em] text-gold uppercase transition-colors hover:border-gold hover:bg-gold/10"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Market-entry advisory · Venezuela</p>
        </div>
      </div>
    </footer>
  );
}
