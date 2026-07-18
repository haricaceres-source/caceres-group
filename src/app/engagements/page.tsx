import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { ENGAGEMENTS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Representative Engagements",
  description:
    "Anonymous, confidential illustrations of how Grupos Caceres supports international market entry, partnerships, and investment advisory in Venezuela.",
};

export default function EngagementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Representative engagements"
        title="Selected client successes"
        description="Illustrative engagements are presented anonymously to protect client confidentiality. They describe the nature of work—not named companies, and not claims of ownership or exclusive representation."
        imageSrc={IMAGES.corporateArchitecture.src}
        imageAlt={IMAGES.corporateArchitecture.alt}
      />

      <Section
        eyebrow="Confidential by design"
        title="How we work with international clients"
        description="Each matter is handled with discretion. The summaries below are representative of the types of advisory support Grupos Caceres provides."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {ENGAGEMENTS.map((item) => (
            <FadeIn key={`${item.sector}-${item.focus}`}>
              <Card className="h-full">
                <p className="text-xs tracking-[0.18em] text-gold uppercase">
                  {item.sector}
                </p>
                <h2 className="mt-3 text-xl font-semibold text-navy dark:text-white">
                  {item.focus}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                  {item.summary}
                </p>
                <div className="mt-5 border-t border-[var(--line)] pt-4">
                  <p className="text-xs tracking-[0.16em] text-gold-muted uppercase dark:text-gold">
                    Outcome
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-navy/80 dark:text-white/80">
                    {item.outcome}
                  </p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-6 border border-[var(--line)] bg-[var(--surface-elevated)] p-8 md:flex-row md:items-center md:p-10">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold text-navy dark:text-white">
                Discuss a confidential engagement
              </h2>
              <p className="mt-3 text-sm text-[var(--muted)]">
                Tell us about your objectives. We will respond with a clear view
                of whether—and how—we can assist.
              </p>
            </div>
            <Button href="/contact">Schedule a Consultation</Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
