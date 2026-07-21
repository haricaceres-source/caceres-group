import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Grupos Caceres for capital access, market entry, partnerships, licensing, and investment advisory in Venezuela. info@caceres-group.com",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Schedule a consultation"
        description="Share your company background and objectives. We respond with discretion and a clear view of how we can assist."
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <ContactForm />
          </FadeIn>

          <FadeIn>
            <div className="space-y-10">
              <div className="border-t border-gold/40 pt-6">
                <p className="text-[11px] tracking-[0.25em] text-gold uppercase">
                  Direct
                </p>
                <ul className="mt-6 space-y-4 text-sm text-[var(--muted)]">
                  <li>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="inline-flex items-center gap-3 text-navy transition-colors hover:text-gold dark:text-white"
                    >
                      <Mail size={16} className="text-gold" />
                      {SITE.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${SITE.phoneHref}`}
                      className="inline-flex items-center gap-3 text-navy transition-colors hover:text-gold dark:text-white"
                    >
                      <Phone size={16} className="text-gold" />
                      {SITE.phone}
                    </a>
                  </li>
                  <li className="inline-flex items-center gap-3">
                    <MapPin size={16} className="text-gold" />
                    {SITE.address}
                  </li>
                </ul>
              </div>

              <div className="relative min-h-[200px] overflow-hidden bg-[var(--surface)]">
                <div className="map-grid absolute inset-0 opacity-40" />
                <div className="relative flex h-full min-h-[200px] flex-col items-center justify-center p-8 text-center">
                  <p className="font-serif text-3xl text-navy dark:text-white">
                    2
                  </p>
                  <div className="mx-auto mt-3 h-px w-8 bg-gold" />
                  <p className="mt-4 text-[11px] font-medium tracking-[0.25em] text-gold uppercase">
                    Cities
                  </p>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    Caracas · Miami
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
