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
import { Section } from "@/components/ui/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
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
        title="Disciplined execution for serious market participants"
        description="Grupos Caceres advises international companies and investors on capital access, market entry, and strategic partnerships in Venezuela — grounded in direct sector experience, not general market commentary."
      >
        <FadeIn>
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {GATEWAY_POINTS.map((point) => (
              <div key={point} className="border-t border-gold/35 pt-5">
                <p className="text-sm leading-snug text-navy dark:text-white">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section
        tone="muted"
        eyebrow="Advisory firm"
        title="A bridge between global ambition and local execution"
        description="We combine market intelligence, partnership development, licensing structures, regulatory guidance, and operational support."
      >
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((item) => (
            <FadeIn key={item.title}>
              <Card className="h-full">
                <item.icon className="mb-4 text-gold" size={20} />
                <h3 className="font-serif text-lg font-medium text-navy dark:text-white">
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
        <div className="grid gap-10 md:grid-cols-2">
          {SERVICES.map((service) => (
            <FadeIn key={service.title}>
              <Card className="h-full">
                <h3 className="font-serif text-lg font-medium text-navy dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {service.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
        <div className="mt-12">
          <Button href="/services" variant="secondary">
            View all services
          </Button>
        </div>
      </Section>

      {/* Licensing — text/numeral layout (no decorative photo) */}
      <section id="licensing" className="bg-navy py-32 text-white md:py-40">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-3xl">
            <p className="mb-4 text-[11px] font-medium tracking-[0.25em] text-gold uppercase">
              Licensing & franchising
            </p>
            <h2 className="font-serif text-2xl font-medium leading-tight tracking-tight md:text-3xl">
              Expand without building everything yourself
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              International companies do not always need to construct full local
              operations from the ground up. Through Grupos Caceres, many can
              license or franchise their model to qualified Venezuelan operators
              who already understand the market.
            </p>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {[
              {
                icon: Briefcase,
                numeral: "01",
                title: "License your model",
                text: "Structure arrangements that allow capable local operators to run and grow your brand under clear commercial terms.",
              },
              {
                icon: Network,
                numeral: "02",
                title: "Identify capable operators",
                text: "We help screen experienced companies and entrepreneurs in Venezuela who can operate with discipline and scale.",
              },
              {
                icon: TrendingUp,
                numeral: "03",
                title: "Move faster, with less risk",
                text: "Licensing can reduce capital intensity, accelerate market presence, and keep expansion focused on execution quality.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-gold/35 pt-6">
                <p className="font-serif text-3xl text-gold/80">{item.numeral}</p>
                <h3 className="mt-4 font-serif text-lg font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Engagements */}
      <Section
        id="engagements"
        tone="muted"
        eyebrow="Active Engagements"
        title="Active Engagements"
        description="Presented anonymously to protect confidentiality. These describe real engagement types—not named clients, and not claims of ownership."
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
                <h3 className="mt-4 font-serif text-xl font-medium text-navy dark:text-white">
                  {item.focus}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                  {item.summary}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
        <div className="mt-12">
          <Button href="/engagements" variant="secondary">
            View representative engagements
          </Button>
        </div>
      </Section>

      {/* Long-term direction — after engagements, before network */}
      <Section
        id="direction"
        tone="direction"
        eyebrow="Long-term direction"
        title="Building toward a holding structure"
        description="Grupos Caceres is developing a long-term thesis around adapting proven fintech models — including digital microcredit platforms for agricultural equipment — for Venezuela's agribusiness sector, and building toward a holding structure of licensed partnerships with international companies seeking Venezuela market presence."
      >
        <FadeIn>
          <div className="grid gap-12 sm:grid-cols-3">
            {[
              { value: "01", label: "Fintech models", detail: "Under evaluation" },
              { value: "02", label: "Agri microcredit", detail: "Thesis in development" },
              { value: "03", label: "Holding structure", detail: "Long-term direction" },
            ].map((item) => (
              <div key={item.label} className="border-t border-gold/40 pt-5">
                <p className="font-serif text-4xl text-navy dark:text-white">
                  {item.value}
                </p>
                <p className="mt-4 text-[11px] font-medium tracking-[0.25em] text-gold uppercase">
                  {item.label}
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button href="/vision" variant="secondary">
              Read our vision
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* Network — text layout, no decorative port image */}
      <Section
        id="network"
        eyebrow="Counterpart access"
        title="Selective relationships across key sectors"
        description="Grupos Caceres develops introductions through working relationships in priority industries. We do not claim a massive institutional network or official representation of every organization in these sectors. Introductions are selective and based on fit."
      >
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <FadeIn>
            <div className="border-t border-gold/40 pt-6">
              <Building2 className="mb-4 text-gold" size={20} />
              <h3 className="font-serif text-xl font-medium text-navy dark:text-white">
                Connection with judgment
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                We connect international businesses with counterparties who can
                execute—operators, distributors, co-investors, and professional
                teams selected for credibility and capability.
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {NETWORK_SECTORS.map((sector) => (
                <p
                  key={sector}
                  className="border-t border-[var(--line)] pt-3 text-sm text-navy dark:text-white"
                >
                  {sector}
                </p>
              ))}
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
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {INVESTMENT_THEMES.map((item) => (
            <FadeIn key={item.title}>
              <Card className="h-full">
                <h3 className="font-serif text-base font-medium text-navy dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {item.text}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>

        <div className="mt-20">
          <p className="mb-4 text-[11px] font-medium tracking-[0.25em] text-gold uppercase">
            Current investment opportunities
          </p>
          <h3 className="max-w-2xl font-serif text-xl font-medium text-navy dark:text-white md:text-2xl">
            Themes for qualified investors
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
            Availability changes. Details are shared only with qualified parties
            under confidentiality. These themes do not imply that Grupos Caceres
            owns or controls the underlying assets.
          </p>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {INVESTMENT_OPPORTUNITIES.map((item) => (
              <FadeIn key={item.theme}>
                <Card className="h-full">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-serif text-lg font-medium text-navy dark:text-white">
                      {item.theme}
                    </h4>
                    <span className="shrink-0 text-[10px] tracking-[0.16em] text-gold uppercase">
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
          <div className="mt-10">
            <Button href="/contact">Inquire confidentially</Button>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Industries"
        title="Experience across Venezuela’s priority sectors"
        description="We advise clients in industries where local context, partnerships, and regulatory understanding determine outcomes."
      >
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.slice(0, 6).map((industry) => (
            <FadeIn key={industry.slug}>
              <Link href="/industries" className="block h-full">
                <Card className="group h-full">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-lg font-medium text-navy dark:text-white">
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
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.slice(0, 4).map((step) => (
            <FadeIn key={step.title}>
              <div className="border-t border-gold/35 pt-6">
                <p className="text-[11px] tracking-[0.25em] text-gold">
                  {step.step}
                </p>
                <h3 className="mt-3 font-serif text-lg font-medium">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-12">
          <Button href="/why-caceres" variant="secondary" className="!border-white/40 !text-white hover:!bg-white hover:!text-navy">
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
          <div className="flex flex-col items-start justify-between gap-8 border-t border-gold/40 pt-10 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h3 className="font-serif text-xl font-medium text-navy dark:text-white md:text-2xl">
                Ready to assess your options in Venezuela?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                We work with leadership teams that require discretion, rigor,
                and practical local counsel.
              </p>
            </div>
            <Button href="/contact">Schedule a Consultation</Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
