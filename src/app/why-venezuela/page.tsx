import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { OPPORTUNITIES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Why Venezuela | Market Entry Opportunity",
  description:
    "Why enter Venezuela now: Grupos Caceres (Caceres Group) on resources, location, and commercial opportunities for international market entry Venezuela.",
};

const highlights = [
  "Largest proven oil reserves among global peers",
  "Mineral resources including gold and iron",
  "Natural gas endowment with regional relevance",
  "Hydroelectric power supporting industrial activity",
  "Strategic Caribbean location for trade and logistics",
  "Young workforce and expanding private-sector activity",
];

export default function WhyVenezuelaPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Venezuela"
        title="A market defined by resources, geography, and renewal"
        description="Venezuela presents a distinctive combination of natural endowment, strategic location, and commercial opportunity for companies prepared to engage with discipline."
        imageSrc={IMAGES.oilEnergy.src}
        imageAlt={IMAGES.oilEnergy.alt}
      />

      <Section
        eyebrow="At a glance"
        title="Opportunity indicators"
        description="Figures below are illustrative placeholders for presentation and can be replaced with updated sources as needed."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {OPPORTUNITIES.map((item, index) => (
            <FadeIn key={item.label} delay={(index % 4) * 0.05}>
              <Card className="h-full">
                <p className="text-xs tracking-[0.18em] text-gold uppercase">
                  {item.label}
                </p>
                <p className="mt-4 text-3xl font-semibold tracking-tight text-navy dark:text-white">
                  <AnimatedCounter value={item.value} />
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                  {item.unit}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                  {item.detail}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section tone="muted" eyebrow="Context" title="Structural advantages">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-[var(--line)] pb-4 text-sm leading-relaxed text-[var(--muted)]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.08}>
            {/* Stylized map / infographic placeholder */}
            <div className="relative min-h-[320px] overflow-hidden border border-[var(--line)] bg-navy p-8 text-white">
              <div className="map-grid absolute inset-0 opacity-40" />
              <div className="relative">
                <p className="text-xs tracking-[0.22em] text-gold uppercase">
                  Regional position
                </p>
                <h3 className="mt-4 text-2xl font-semibold">
                  Northern South America · Caribbean access
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
                  Placeholder map panel. Replace with a custom Venezuela /
                  Caribbean trade-route visualization when cartography assets
                  are available.
                </p>
                <div className="mt-10 grid grid-cols-2 gap-4 text-sm">
                  <div className="border border-white/15 p-4">
                    <p className="text-gold">Energy</p>
                    <p className="mt-2 text-white/70">Oil & gas base</p>
                  </div>
                  <div className="border border-white/15 p-4">
                    <p className="text-gold">Minerals</p>
                    <p className="mt-2 text-white/70">Gold & iron</p>
                  </div>
                  <div className="border border-white/15 p-4">
                    <p className="text-gold">Power</p>
                    <p className="mt-2 text-white/70">Hydroelectric</p>
                  </div>
                  <div className="border border-white/15 p-4">
                    <p className="text-gold">Trade</p>
                    <p className="mt-2 text-white/70">Caribbean routes</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section
        eyebrow="Investment lens"
        title="Opportunity requires orientation"
        description="Resource potential alone is not a market-entry plan. International companies benefit from local partnership quality, regulatory clarity, and operating judgment—precisely where Grupos Caceres focuses."
      >
        <FadeIn>
          <div className="gold-rule max-w-md" />
        </FadeIn>
      </Section>
    </>
  );
}
