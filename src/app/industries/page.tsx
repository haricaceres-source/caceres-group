import type { Metadata } from "next";
import { IndustryIcon } from "@/components/industries/IndustryIcon";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { INDUSTRIES, INDUSTRY_LIST } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Grupos Caceres industry focus: mining, pharmaceuticals, energy, banking, technology, healthcare, infrastructure, and more in Venezuela.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sector focus grounded in local market reality"
        description="We advise across industries where Venezuela’s resource base, consumer demand, and infrastructure needs create durable commercial interest."
      />

      <Section>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, index) => (
            <FadeIn key={industry.slug} delay={(index % 3) * 0.05}>
              <Card className="h-full">
                <IndustryIcon slug={industry.slug} />
                <h2 className="mt-4 font-serif text-lg font-medium text-navy dark:text-white">
                  {industry.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {industry.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Coverage"
        title="Additional sectors we support"
        description="Beyond our featured industry focus, we regularly advise across a broader set of commercial activities."
      >
        <FadeIn>
          <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2 md:grid-cols-3">
            {INDUSTRY_LIST.map((item) => (
              <p
                key={item}
                className="border-t border-[var(--line)] pt-3 text-sm text-navy dark:text-white"
              >
                {item}
              </p>
            ))}
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
