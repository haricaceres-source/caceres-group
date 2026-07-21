import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { OPPORTUNITIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Why Venezuela",
  description:
    "Why enter Venezuela: resources, geography, and commercial opportunity for disciplined international market participants.",
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
      />

      <Section
        eyebrow="At a glance"
        title="Opportunity indicators"
        description="Figures below are illustrative placeholders for presentation and can be replaced with updated sources as needed."
      >
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {OPPORTUNITIES.map((item, index) => (
            <FadeIn key={item.label} delay={(index % 4) * 0.05}>
              <div className="border-t border-gold/40 pt-5">
                <p className="text-[11px] tracking-[0.25em] text-gold uppercase">
                  {item.label}
                </p>
                <p className="mt-4 font-serif text-3xl font-medium tracking-tight text-navy dark:text-white">
                  <AnimatedCounter value={item.value} />
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
                  {item.unit}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                  {item.detail}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section tone="muted" eyebrow="Context" title="Structural advantages">
        <div className="grid gap-16 lg:grid-cols-2">
          <FadeIn>
            <ul className="space-y-0">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-t border-[var(--line)] py-4 text-sm leading-relaxed text-[var(--muted)]"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="bg-navy p-8 text-white md:p-10">
              <p className="text-[11px] tracking-[0.25em] text-gold uppercase">
                Regional position
              </p>
              <h3 className="mt-4 font-serif text-2xl font-medium">
                Northern South America · Caribbean access
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
                Strategic geography linking South American production with
                Caribbean and Atlantic trade routes.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { label: "Energy", detail: "Oil & gas base" },
                  { label: "Minerals", detail: "Gold & iron" },
                  { label: "Power", detail: "Hydroelectric" },
                  { label: "Trade", detail: "Caribbean routes" },
                ].map((cell) => (
                  <div key={cell.label} className="border-t border-gold/35 pt-4">
                    <p className="text-[11px] tracking-[0.2em] text-gold uppercase">
                      {cell.label}
                    </p>
                    <p className="mt-2 text-sm text-white/70">{cell.detail}</p>
                  </div>
                ))}
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
          <div className="h-px w-24 bg-gold/50" />
        </FadeIn>
      </Section>
    </>
  );
}
