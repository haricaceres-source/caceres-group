import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact Grupos Caceres (Caceres Group)",
  description:
    "Contact Grupos Caceres (Caceres Group) for Venezuela consulting: market entry, partnerships, licensing, and investment advisory.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Schedule a consultation"
        description="Share your company background and objectives. We respond with discretion and a clear view of how we can assist."
        imageSrc={IMAGES.aerialCity.src}
        imageAlt={IMAGES.aerialCity.alt}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <ContactForm />
          </FadeIn>

          <FadeIn>
            <div className="space-y-6">
              <div className="border border-[var(--line)] bg-[var(--surface-elevated)] p-6 md:p-8">
                <p className="text-xs tracking-[0.2em] text-gold uppercase">
                  Direct
                </p>
                <ul className="mt-5 space-y-4 text-sm text-[var(--muted)]">
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

              <div className="relative min-h-[240px] overflow-hidden border border-[var(--line)] bg-[var(--surface)]">
                <div className="map-grid absolute inset-0 opacity-50" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.12),transparent_55%)]" />
                <div className="relative flex h-full min-h-[240px] flex-col items-center justify-center p-8 text-center">
                  <MapPin className="text-gold" size={28} />
                  <p className="mt-4 text-sm font-medium text-navy dark:text-white">
                    Caracas · Miami
                  </p>
                  <p className="mt-2 max-w-xs text-xs leading-relaxed text-[var(--muted)]">
                    Consultations by appointment. International clients welcome.
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
