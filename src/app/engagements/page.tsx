import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ENGAGEMENTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Engagements",
  description:
    "Active Engagements: capital sourcing for mining and pharmaceutical distribution partnerships — confidential work by Grupos Caceres in Venezuela.",
};

export default function EngagementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Active Engagements"
        title="Active Engagements"
        description="Engagements are presented anonymously to protect client confidentiality. They describe the nature of work—not named companies, and not claims of ownership or exclusive representation."
      />

      <Section
        eyebrow="Confidential by design"
        title="Current and completed advisory work"
        description="Each matter is handled with discretion. The summaries below reflect real engagement types Grupos Caceres is supporting or has completed."
      >
        <div className="grid gap-12 md:grid-cols-2">
          {ENGAGEMENTS.map((item) => (
            <FadeIn key={`${item.sector}-${item.focus}`}>
              <Card className="h-full">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[11px] tracking-[0.25em] text-gold uppercase">
                    {item.sector}
                  </p>
                  <StatusBadge status={item.status} />
                </div>
                <h2 className="mt-4 font-serif text-xl font-medium text-navy dark:text-white">
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
          <div className="flex flex-col items-start justify-between gap-8 border-t border-gold/40 pt-10 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="font-serif text-2xl font-medium text-navy dark:text-white">
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
