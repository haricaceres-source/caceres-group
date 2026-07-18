import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SERVICES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Market entry strategy, business licensing, regulatory guidance, partner identification, due diligence, and operational support for Venezuela.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Advisory capabilities for market entry and growth"
        description="We support international companies from initial assessment through licensing, partnership formation, regulatory navigation, and operating execution."
        imageSrc={IMAGES.officeModern.src}
        imageAlt={IMAGES.officeModern.alt}
      />

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.title} delay={(index % 4) * 0.04}>
              <Card className="h-full">
                <div className="mb-4 h-px w-10 bg-gold" />
                <h2 className="text-lg font-semibold text-navy dark:text-white">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {service.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-6 border border-[var(--line)] bg-[var(--surface-elevated)] p-8 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-navy dark:text-white">
                Discuss the right scope for your objectives
              </h2>
              <p className="mt-3 max-w-xl text-sm text-[var(--muted)]">
                Engagements are tailored. We begin with clarity on what you need
                to decide—and what must be executed.
              </p>
            </div>
            <Button href="/contact">Schedule a Consultation</Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
