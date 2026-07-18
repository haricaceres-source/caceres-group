import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePanel } from "@/components/ui/ImagePanel";
import { Section } from "@/components/ui/Section";
import { VALUES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Grupos Caceres—strategic consulting and market-entry advisory for international companies expanding into Venezuela.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Who we are"
        description="Grupos Caceres is a strategic consulting and market-entry advisory firm that helps international companies successfully enter and operate in Venezuela."
        imageSrc={IMAGES.officeModern.src}
        imageAlt={IMAGES.officeModern.alt}
      />

      <Section
        title="The bridge between foreign business and local opportunity"
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

      <Section tone="muted" eyebrow="Purpose" title="Mission and vision">
        <div className="grid gap-6 md:grid-cols-2">
          <FadeIn>
            <Card className="h-full">
              <p className="text-xs tracking-[0.2em] text-gold uppercase">
                Mission
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                To reduce the complexity and risk of doing business in Venezuela
                while connecting global companies with trusted local partners.
              </p>
            </Card>
          </FadeIn>
          <FadeIn>
            <Card className="h-full">
              <p className="text-xs tracking-[0.2em] text-gold uppercase">
                Vision
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                To be the advisory firm international companies rely on when
                Venezuela becomes a strategic market—not a speculative idea.
              </p>
            </Card>
          </FadeIn>
        </div>
      </Section>

      <Section
        eyebrow="Values"
        title="How we work"
        description="Our standards are designed for long-term advisory relationships with institutions that value discretion and delivery."
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
