import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { ENGAGEMENTS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Engagements | Caceres Group Venezuela Work",
  description:
    "How Grupos Caceres (Caceres Group) supports Venezuela market entry, partnerships, and investment advisory—confidential representative engagements.",
};

export default function EngagementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Representative engagements"
        title="Active work and completed matters"
        description="Engagements are presented anonymously to protect client confidentiality. They describe the nature of work—not named companies, and not claims of ownership or exclusive representation."
        imageSrc={IMAGES.corporateArchitecture.src}
        imageAlt={IMAGES.corporateArchitecture.alt}
      />

      <Section
        eyebrow="Confidential by design"
        title="Current and completed advisory work"
        description="Each matter is handled with discretion. The summaries below reflect real engagement types Grupos Caceres is supporting or has completed."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {ENGAGEMENTS.map((item) => (
            <FadeIn key={`${item.sector}-${item.focus}`}>
              <Card className="h-full">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-xs tracking-[0.18em] text-gold uppercase">
                    {item.sector}
                  </p>
                  <span className="shrink-0 text-xs tracking-[0.14em] text-gold-muted uppercase dark:text-gold">
                    {item.status}
                  </span>
                </div>
                <h2 className="mt-3 text-xl font-semibold text-navy dark:text-white">
                  {item.focus}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                  {item.summary}
                </p>
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
