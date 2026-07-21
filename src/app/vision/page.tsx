import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Vision",
  description:
    "Grupos Caceres vision: exploring fintech and agri microcredit models, and evaluating a long-term holding structure for licenses and partnerships in Venezuela.",
};

const theses = [
  {
    title: "Fintech & agri microcredit",
    text: "We are exploring whether Brazil-style agricultural microcredit and related fintech models can be adapted to Venezuelan operating realities. This work is under evaluation—not a launched product or commitment to any specific platform.",
  },
  {
    title: "Licenses & partnerships",
    text: "A long-term direction under consideration is a holding structure that can house licenses, franchise rights, and partnership interests over time—supporting continuity as advisory relationships mature into durable commercial arrangements.",
  },
  {
    title: "High-touch advisory first",
    text: "Near-term focus remains early-stage, high-touch market-entry advisory with real active engagements. Broader platform ideas stay exploratory until the market, capital, and counterpart conditions justify them.",
  },
];

export default function VisionPage() {
  return (
    <>
      <PageHero
        eyebrow="Vision"
        title="Long-term direction, under evaluation"
        description="Grupos Caceres is building from active advisory work. Beyond near-term client engagements, we are exploring thesis areas that may shape how we support Venezuela’s private economy over time."
      />

      <Section
        eyebrow="Thesis"
        title="What we are exploring"
        description="These ideas describe long-term direction. They are under evaluation and should not be read as product launches, fundraising claims, or guarantees of execution."
      >
        <div className="grid gap-12 md:grid-cols-3">
          {theses.map((item) => (
            <FadeIn key={item.title}>
              <Card className="h-full">
                <h2 className="font-serif text-lg font-medium text-navy dark:text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {item.text}
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
                Discuss direction or an active engagement
              </h2>
              <p className="mt-3 text-sm text-[var(--muted)]">
                If your objectives align with market entry, partnerships, or
                capital introductions in Venezuela, we welcome a confidential
                conversation.
              </p>
            </div>
            <Button href="/contact">Schedule a Consultation</Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
