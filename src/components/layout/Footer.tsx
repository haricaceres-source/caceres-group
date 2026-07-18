import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo inverted />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            The trusted gateway for international companies seeking to enter,
            expand, invest, and operate in Venezuela.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-gold uppercase">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/75 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-gold uppercase">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Mail size={15} />
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${SITE.phoneHref}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Phone size={15} />
                {SITE.phone}
              </a>
            </li>
            <li>{SITE.address}</li>
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-flex border border-gold/50 px-4 py-2 text-xs font-medium tracking-[0.14em] text-gold uppercase transition-colors hover:bg-gold hover:text-navy"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Market-entry advisory · Venezuela</p>
        </div>
      </div>
    </footer>
  );
}
