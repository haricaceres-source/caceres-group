import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { PROCESS_STEPS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Why Grupos Caceres (Caceres Group)",
  description:
    "Why choose Grupos Caceres (Caceres Group) for Venezuela consulting: discovery, research, strategy, partnerships, licensing, and market entry execution.",
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
        imageSrc={IMAGES.corporateArchitecture.src}
        imageAlt={IMAGES.corporateArchitecture.alt}
      />

      <Section
        eyebrow="Process"
        title="From discovery to growth"
        description="A structured engagement model that keeps strategy and execution connected."
      >
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-[1.15rem] hidden w-px bg-[var(--line)] md:block" />
          <div className="space-y-5">
            {PROCESS_STEPS.map((step) => (
              <FadeIn key={step.title}>
                <div className="grid gap-4 md:grid-cols-[3rem_1fr]">
                  <div className="relative z-10 flex h-9 w-9 items-center justify-center border border-gold/50 bg-[var(--background)] text-xs font-semibold text-gold">
                    {step.step}
                  </div>
                  <Card>
                    <h2 className="text-lg font-semibold text-navy dark:text-white">
                      {step.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                      {step.description}
                    </p>
                  </Card>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="muted" eyebrow="Difference" title="What clients can expect">
        <div className="grid gap-4 md:grid-cols-3">
          {reasons.map((reason) => (
            <FadeIn key={reason.title}>
              <Card className="h-full">
                <h3 className="text-lg font-semibold text-navy dark:text-white">
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
          <div className="flex flex-col items-start justify-between gap-6 border border-[var(--line)] bg-navy p-8 text-white md:flex-row md:items-center md:p-10">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold">
                Engage with a high-touch advisory practice focused on Venezuela
              </h2>
              <p className="mt-3 text-sm text-white/70">
                Share your objectives. We will outline a practical next step.
              </p>
            </div>
            <Button
              href="/contact"
              className="!bg-gold !text-navy hover:!bg-gold-soft"
            >
              Schedule a Consultation
            </Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
