import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { PROCESS_STEPS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Why Grupos Caceres",
  description:
    "Why choose Grupos Caceres for Venezuela capital access and market entry: discovery, research, strategy, partnerships, and execution.",
};

const reasons = [
  {
    title: "Decision-grade insight",
    description:
      "We focus on the information leadership teams need to approve, structure, and sequence market entry.",
  },
  {
    title: "Counterpart quality",
    description:
      "Introductions are selective. We prioritize credibility, capability, and alignment with your model.",
  },
  {
    title: "Execution continuity",
    description:
      "Advisory does not end with a slide deck. We remain engaged as plans become operating reality.",
  },
];

export default function WhyCaceresPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Grupos Caceres"
        title="How we simplify market entry"
        description="International companies do not need more complexity. They need a clear path from intent to presence—grounded in local knowledge, selective counterpart access, and practical standards."
      />

      <Section
        eyebrow="Process"
        title="From discovery to growth"
        description="A structured engagement model that keeps strategy and execution connected."
      >
        <div className="space-y-0">
          {PROCESS_STEPS.map((step) => (
            <FadeIn key={step.title}>
              <div className="grid gap-4 border-t border-[var(--line)] py-8 md:grid-cols-[4rem_1fr] md:gap-8">
                <p className="font-serif text-2xl text-gold">{step.step}</p>
                <div>
                  <h2 className="font-serif text-lg font-medium text-navy dark:text-white">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section tone="muted" eyebrow="Difference" title="What clients can expect">
        <div className="grid gap-10 md:grid-cols-3">
          {reasons.map((reason) => (
            <FadeIn key={reason.title}>
              <Card className="h-full">
                <h3 className="font-serif text-lg font-medium text-navy dark:text-white">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {reason.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-8 border-t border-gold/40 bg-navy p-10 text-white md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="font-serif text-2xl font-medium">
                Engage with a high-touch advisory practice focused on Venezuela
              </h2>
              <p className="mt-3 text-sm text-white/65">
                Share your objectives. We will outline a practical next step.
              </p>
            </div>
            <Button
              href="/contact"
              variant="secondary"
              className="!border-white/40 !text-white hover:!bg-white hover:!text-navy"
            >
              Schedule a Consultation
            </Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
