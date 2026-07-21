import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Compass,
  Handshake,
  Network,
  Scale,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePanel } from "@/components/ui/ImagePanel";
import { Section } from "@/components/ui/Section";
import {
  ENGAGEMENTS,
  GATEWAY_POINTS,
  INDUSTRIES,
  INVESTMENT_OPPORTUNITIES,
  INVESTMENT_THEMES,
  NETWORK_SECTORS,
  PROCESS_STEPS,
  SERVICES,
} from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const pillars = [
  {
    icon: Compass,
    title: "Market intelligence",
    description:
      "Clear, decision-ready insight into demand, competition, and operating conditions.",
  },
  {
    icon: Handshake,
    title: "Selective partnerships",
    description:
      "Introductions to counterparties selected for credibility, capability, and fit.",
  },
  {
    icon: Scale,
    title: "Regulatory clarity",
    description:
      "Practical guidance through institutional and compliance requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Risk-aware execution",
    description:
      "Support that reduces uncertainty while keeping commercial momentum.",
  },
];

export function HomeSections() {
  return (
    <>
      <Section
        eyebrow="Market-entry advisory"
        title="For foreign companies seeking Venezuela"
        description="Grupos Caceres is an early-stage advisory practice helping international companies enter, expand, invest, and operate in Venezuela—with discretion, local judgment, and hands-on execution."
        className="venezuela-watermark"
      >
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <FadeIn>
            <div className="grid gap-3 sm:grid-cols-2">
              {GATEWAY_POINTS.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 border border-[var(--line)] bg-[var(--surface-elevated)] px-4 py-3"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gold" />
                  <p className="text-sm text-navy dark:text-white">{point}</p>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn>
            <ImagePanel
              src={IMAGES.corporateArchitecture.src}
              alt={IMAGES.corporateArchitecture.alt}
              className="h-full min-h-[340px]"
            />
          </FadeIn>
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Advisory firm"
        title="A bridge between global ambition and local execution"
        description="We combine market intelligence, partnership development, licensing structures, regulatory guidance, and operational support."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((item) => (
            <FadeIn key={item.title}>
              <Card className="glass h-full">
                <item.icon className="mb-4 text-gold" size={22} />
                <h3 className="text-lg font-semibold text-navy dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {item.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Services"
        title="Capabilities for serious market participation"
        description="From market entry and corporate representation to licensing, investment advisory, and regulatory navigation."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <FadeIn key={service.title}>
              <Card className="h-full">
                <div className="mb-4 h-px w-10 bg-gold" />
                <h3 className="text-base font-semibold text-navy dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {service.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/services" variant="secondary">
            View all services
          </Button>
        </div>
      </Section>

      {/* Licensing */}
      <section id="licensing" className="relative overflow-hidden py-20 md:py-28">
        <Image
          src={IMAGES.officeModern.src}
          alt={IMAGES.officeModern.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/78" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-medium tracking-[0.22em] text-gold uppercase">
              Licensing & franchising
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Expand without building everything yourself
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
              International companies do not always need to construct full local
              operations from the ground up. Through Grupos Caceres, many can
              license or franchise their model to qualified Venezuelan operators
              who already understand the market.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Briefcase,
                title: "License your model",
                text: "Structure arrangements that allow capable local operators to run and grow your brand under clear commercial terms.",
              },
              {
                icon: Network,
                title: "Identify capable operators",
                text: "We help screen experienced companies and entrepreneurs in Venezuela who can operate with discipline and scale.",
              },
              {
                icon: TrendingUp,
                title: "Move faster, with less risk",
                text: "Licensing can reduce capital intensity, accelerate market presence, and keep expansion focused on execution quality.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-dark border border-white/10 p-6 md:p-8"
              >
                <item.icon className="mb-4 text-gold" size={22} />
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Representative Engagements */}
      <Section
        id="engagements"
        tone="muted"
        eyebrow="Representative engagements"
        title="Active work and completed matters"
        description="Presented anonymously to protect confidentiality. These describe real engagement types—not named clients, and not claims of ownership."
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
                <h3 className="mt-3 text-lg font-semibold text-navy dark:text-white">
                  {item.focus}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {item.summary}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/engagements" variant="secondary">
            View representative engagements
          </Button>
        </div>
      </Section>

      {/* Network */}
      <Section
        id="network"
        eyebrow="Counterpart access"
        title="Selective relationships across key sectors"
        description="Grupos Caceres develops introductions through working relationships in priority industries. We do not claim a massive institutional network or official representation of every organization in these sectors. Introductions are selective and based on fit."
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <FadeIn>
            <ImagePanel
              src={IMAGES.portLogistics.src}
              alt={IMAGES.portLogistics.alt}
              className="min-h-[320px]"
            />
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              Banking, agribusiness, pharmaceuticals, healthcare, CPG, food,
              manufacturing, mining, energy, logistics, infrastructure, real
              estate, and technology—introductions are made with judgment and fit.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-wrap gap-3">
              {NETWORK_SECTORS.map((sector) => (
                <span
                  key={sector}
                  className="border border-[var(--line)] bg-[var(--surface-elevated)] px-4 py-2 text-sm text-navy dark:text-white"
                >
                  {sector}
                </span>
              ))}
            </div>
            <div className="mt-8 border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8">
              <Building2 className="mb-3 text-gold" size={20} />
              <h3 className="text-lg font-semibold text-navy dark:text-white">
                Connection with judgment
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                We connect international businesses with counterparties who can
                execute—operators, distributors, co-investors, and professional
                teams selected for credibility and capability.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Investment */}
      <Section
        id="investment"
        tone="muted"
        eyebrow="Investment"
        title="Local knowledge for capital decisions"
        description="Investors evaluating Venezuela can work with Grupos Caceres to identify opportunities, support local due diligence, structure partnerships, and aid execution. We advise—we do not claim ownership of mines, energy assets, or other underlying investments."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {INVESTMENT_THEMES.map((item) => (
            <FadeIn key={item.title}>
              <Card className="h-full">
                <div className="mb-4 h-px w-10 bg-gold" />
                <h3 className="text-base font-semibold text-navy dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {item.text}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>

        <div className="mt-14">
          <p className="mb-3 text-xs font-medium tracking-[0.22em] text-gold-muted uppercase dark:text-gold">
            Current investment opportunities
          </p>
          <h3 className="max-w-2xl text-2xl font-semibold text-navy dark:text-white">
            Themes for qualified investors
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
            Availability changes. Details are shared only with qualified parties
            under confidentiality. These themes do not imply that Grupos Caceres
            owns or controls the underlying assets.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {INVESTMENT_OPPORTUNITIES.map((item) => (
              <FadeIn key={item.theme}>
                <Card className="h-full">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-lg font-semibold text-navy dark:text-white">
                      {item.theme}
                    </h4>
                    <span className="shrink-0 text-xs tracking-[0.14em] text-gold uppercase">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {item.note}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/contact">Inquire confidentially</Button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <ImagePanel
            src={IMAGES.oilEnergy.src}
            alt={IMAGES.oilEnergy.alt}
            className="min-h-[200px]"
          />
          <ImagePanel
            src={IMAGES.agriculture.src}
            alt={IMAGES.agriculture.alt}
            className="min-h-[200px]"
          />
          <ImagePanel
            src={IMAGES.mining.src}
            alt={IMAGES.mining.alt}
            className="min-h-[200px]"
          />
        </div>
      </Section>

      <Section
        eyebrow="Industries"
        title="Experience across Venezuela’s priority sectors"
        description="We advise clients in industries where local context, partnerships, and regulatory understanding determine outcomes."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.slice(0, 6).map((industry) => (
            <FadeIn key={industry.slug}>
              <Link href="/industries" className="block h-full">
                <Card className="group h-full">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-navy dark:text-white">
                      {industry.title}
                    </h3>
                    <ArrowRight
                      size={16}
                      className="mt-1 text-gold opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {industry.description}
                  </p>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section
        tone="navy"
        eyebrow="Our process"
        title="A structured path from intent to operation"
        description="We simplify market entry by translating complexity into a clear sequence of decisions and actions."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.slice(0, 4).map((step) => (
            <FadeIn key={step.title}>
              <div className="glass-dark border border-white/10 p-6">
                <p className="text-xs tracking-[0.2em] text-gold">{step.step}</p>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10">
          <Button
            href="/why-caceres"
            className="!bg-gold !text-navy hover:!bg-gold-soft"
          >
            See how we work
          </Button>
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Engagement"
        title="Schedule a confidential consultation"
        description="Tell us about your objectives in Venezuela. We will respond with a clear view of how we can assist."
      >
        <FadeIn>
          <div className="relative overflow-hidden border border-[var(--line)]">
            <div className="absolute inset-0">
              <Image
                src={IMAGES.aerialCity.src}
                alt={IMAGES.aerialCity.alt}
                fill
                sizes="100vw"
                className="object-cover opacity-20"
              />
            </div>
            <div className="relative flex flex-col items-start justify-between gap-6 bg-[var(--surface-elevated)]/90 p-8 backdrop-blur-sm md:flex-row md:items-center md:p-10">
              <div className="max-w-xl">
                <h3 className="text-2xl font-semibold text-navy dark:text-white">
                  Ready to assess your options in Venezuela?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  We work with leadership teams that require discretion, rigor,
                  and practical local counsel.
                </p>
              </div>
              <Button href="/contact">Schedule a Consultation</Button>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
