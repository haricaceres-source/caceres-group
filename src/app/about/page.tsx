import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePanel } from "@/components/ui/ImagePanel";
import { Section } from "@/components/ui/Section";
import { VALUES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Grupos Caceres (Caceres Group)",
  description:
    "About Grupos Caceres (Caceres Group): early-stage Venezuela consulting and market entry advisory for international companies expanding into Venezuela.",
};

const founderExperience = [
  "Founder & Managing Director, Grupos Caceres",
  "Operations Associate, BCI Miami",
  "Private Credit Associate, Bluemar Mellon Capital Partners",
  "Apprenticeship with Darius Dale / 42 Macro",
  "Private Wealth Management Associate, City National Bank Private ($150M+ reallocation)",
  "SIE and Bloomberg Market Concepts",
  "A.A. Business Administration, Miami Dade College",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Who we are"
        description="Grupos Caceres is an early-stage strategic consulting and market-entry advisory practice that helps international companies enter and operate in Venezuela."
        imageSrc={IMAGES.officeModern.src}
        imageAlt={IMAGES.officeModern.alt}
      />

      <Section
        title="High-touch advisory between foreign business and local opportunity"
        description="We combine market intelligence, partnership development, regulatory guidance, licensing structures, and operational support so leadership teams can make informed decisions and execute with confidence."
        className="venezuela-watermark"
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <FadeIn>
            <Card>
              <h3 className="text-lg font-semibold text-navy dark:text-white">
                Why Venezuela
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                Venezuela remains one of Latin America&apos;s most
                resource-endowed markets—energy, minerals, agriculture, and a
                strategic Caribbean position. For companies prepared to engage
                carefully, the opportunity is material.
              </p>
            </Card>
          </FadeIn>
          <FadeIn>
            <Card>
              <h3 className="text-lg font-semibold text-navy dark:text-white">
                Why local expertise matters
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                International companies need more than general market interest.
                They need counterpart clarity, institutional orientation, and
                operating judgment grounded in local realities.
              </p>
            </Card>
          </FadeIn>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <ImagePanel src={IMAGES.portLogistics.src} alt={IMAGES.portLogistics.alt} />
          <ImagePanel src={IMAGES.officeModern.src} alt={IMAGES.officeModern.alt} />
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Leadership"
        title="Founder"
        description="Grupos Caceres is led by Hari Cáceres, with experience across operations, private credit, macro research, and private wealth."
      >
        <FadeIn>
          <Card>
            <p className="text-xs tracking-[0.2em] text-gold uppercase">
              Hari Cáceres
            </p>
            <h3 className="mt-3 text-xl font-semibold text-navy dark:text-white">
              Founder & Managing Director
            </h3>
            <ul className="mt-6 space-y-3">
              {founderExperience.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-[var(--muted)]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </FadeIn>
      </Section>

      <Section eyebrow="Purpose" title="Mission and vision">
        <div className="grid gap-6 md:grid-cols-2">
          <FadeIn>
            <Card className="h-full">
              <p className="text-xs tracking-[0.2em] text-gold uppercase">
                Mission
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                To reduce the complexity and risk of doing business in Venezuela
                while helping global companies evaluate and work with qualified
                local partners.
              </p>
            </Card>
          </FadeIn>
          <FadeIn>
            <Card className="h-full">
              <p className="text-xs tracking-[0.2em] text-gold uppercase">
                Vision
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                To build a durable advisory practice international companies can
                rely on when Venezuela becomes a strategic market—not only a
                speculative idea. Longer-term direction is outlined on our Vision
                page.
              </p>
            </Card>
          </FadeIn>
        </div>
      </Section>

      <Section
        eyebrow="Values"
        title="How we work"
        description="Our standards are designed for high-touch advisory relationships with teams that value discretion and delivery."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((value) => (
            <FadeIn key={value.title}>
              <Card className="h-full">
                <h3 className="text-lg font-semibold text-navy dark:text-white">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {value.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
