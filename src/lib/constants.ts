export const SITE = {
  name: "Grupos Caceres",
  tagline: "Strategic consulting and market-entry advisory for Venezuela",
  url: "https://gruposcaceres.com",
  email: "gruposcaceres@gmail.com",
  phone: "+1 (954) 740-0389",
  phoneHref: "+19547400389",
  address: "Caracas, Venezuela · Miami, Florida",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/engagements", label: "Engagements" },
  { href: "/why-venezuela", label: "Why Venezuela" },
  { href: "/why-caceres", label: "Why Grupos Caceres" },
  { href: "/contact", label: "Contact" },
] as const;

export const VALUES = [
  {
    title: "Integrity",
    description:
      "We advise with candor and hold ourselves to the standards our clients expect of their own organizations.",
  },
  {
    title: "Execution",
    description:
      "Strategy without delivery has little value. We stay engaged through implementation, not only planning.",
  },
  {
    title: "Local Knowledge",
    description:
      "Deep familiarity with Venezuelan markets, institutions, and operating realities informs every engagement.",
  },
  {
    title: "Global Perspective",
    description:
      "We understand how international companies evaluate risk, structure decisions, and measure success.",
  },
  {
    title: "Long-Term Partnerships",
    description:
      "We build relationships designed to support clients beyond market entry—through growth and complexity.",
  },
] as const;

/** Primary service offering — institutional clarity for international clients. */
export const SERVICES = [
  {
    title: "Market Entry",
    description:
      "Define and execute a disciplined path into Venezuela aligned with your sector, risk tolerance, and commercial objectives.",
  },
  {
    title: "Expansion",
    description:
      "Support established operators scaling into adjacent sectors, regions, channels, or partnership models.",
  },
  {
    title: "Strategic Partnerships",
    description:
      "Identify, evaluate, and structure relationships with credible local counterparties for joint ventures and alliances.",
  },
  {
    title: "Corporate Representation",
    description:
      "Provide on-the-ground representation and coordination so international leadership teams maintain presence without unnecessary complexity.",
  },
  {
    title: "Investment Advisory",
    description:
      "Support capital decisions with market context, counterpart assessment, diligence framing, and execution counsel.",
  },
  {
    title: "Business Development",
    description:
      "Open commercial pathways through targeted outreach, opportunity screening, and deal support.",
  },
  {
    title: "Licensing & Franchising",
    description:
      "Structure licensing and franchise arrangements so international brands can operate through qualified Venezuelan partners.",
  },
  {
    title: "Local Market Intelligence",
    description:
      "Deliver rigorous analysis of demand, pricing, channels, competition, and operating conditions specific to your sector.",
  },
  {
    title: "Commercial Introductions",
    description:
      "Connect leadership teams with relevant private-sector and professional counterparts selected for credibility and fit.",
  },
  {
    title: "Regulatory Navigation",
    description:
      "Guide permits, sector requirements, and institutional processes with clear, actionable counsel.",
  },
] as const;

export const INDUSTRIES = [
  {
    slug: "mining",
    title: "Mining",
    description:
      "Advisory for mineral projects, local partnerships, and operating frameworks in resource-rich regions.",
  },
  {
    slug: "banking",
    title: "Banking",
    description:
      "Guidance for financial institutions assessing market presence, partnerships, and regulatory pathways.",
  },
  {
    slug: "technology",
    title: "Technology",
    description:
      "Support for technology firms entering Venezuela through partnerships, distribution, and enterprise sales.",
  },
  {
    slug: "pharmaceuticals",
    title: "Pharmaceuticals",
    description:
      "Market access, partner selection, and regulatory orientation for pharmaceutical organizations.",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description:
      "Strategic support for healthcare providers, suppliers, and investors navigating local demand.",
  },
  {
    slug: "infrastructure",
    title: "Infrastructure",
    description:
      "Advisory on infrastructure opportunities, stakeholder mapping, and project development support.",
  },
  {
    slug: "energy",
    title: "Energy",
    description:
      "Counsel for energy participants evaluating opportunities across conventional and related sectors.",
  },
  {
    slug: "agriculture",
    title: "Agriculture",
    description:
      "Market intelligence and partnership support across agribusiness production and trade channels.",
  },
  {
    slug: "logistics",
    title: "Logistics",
    description:
      "Practical guidance on logistics models, corridor access, and supply-chain partner selection.",
  },
  {
    slug: "software",
    title: "Software",
    description:
      "Go-to-market support for software companies targeting enterprise and institutional buyers.",
  },
  {
    slug: "consumer-goods",
    title: "Consumer Goods",
    description:
      "Entry and distribution strategies for consumer brands assessing Venezuelan demand and channels.",
  },
] as const;

export const OPPORTUNITIES = [
  {
    label: "Proven oil reserves",
    value: "300B+",
    unit: "barrels",
    detail: "Among the world’s largest proven crude oil reserves.",
  },
  {
    label: "Natural gas",
    value: "200T+",
    unit: "cubic feet",
    detail: "Substantial natural gas endowment with regional relevance.",
  },
  {
    label: "Gold & minerals",
    value: "Major",
    unit: "resources",
    detail: "Significant gold, iron, and broader mineral potential.",
  },
  {
    label: "Hydroelectric capacity",
    value: "Strategic",
    unit: "power base",
    detail: "Established hydroelectric infrastructure supporting industry.",
  },
  {
    label: "Caribbean access",
    value: "Prime",
    unit: "location",
    detail: "Strategic geography linking South America and Caribbean trade routes.",
  },
  {
    label: "Workforce",
    value: "Young",
    unit: "talent pool",
    detail: "A young population and experienced professional base across key sectors.",
  },
  {
    label: "Private sector",
    value: "Growing",
    unit: "activity",
    detail: "Expanding private initiative across trade, services, and industry.",
  },
  {
    label: "Investment cases",
    value: "Diverse",
    unit: "sectors",
    detail: "Opportunities spanning energy, mining, consumer, logistics, and technology.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We clarify objectives, constraints, timelines, and the commercial outcome you intend to achieve.",
  },
  {
    step: "02",
    title: "Market Research",
    description:
      "We assess demand, competitors, channels, and operating conditions with sector-specific rigor.",
  },
  {
    step: "03",
    title: "Strategy",
    description:
      "We define an entry or expansion path that balances opportunity, risk, and capital discipline.",
  },
  {
    step: "04",
    title: "Local Partnerships",
    description:
      "We identify and introduce counterparties suited to your model—operators, distributors, or co-investors.",
  },
  {
    step: "05",
    title: "Regulatory Support",
    description:
      "We guide the regulatory and institutional steps required to establish and operate lawfully.",
  },
  {
    step: "06",
    title: "Execution",
    description:
      "We remain involved through implementation so plans translate into concrete operating progress.",
  },
  {
    step: "07",
    title: "Growth",
    description:
      "We support scaling decisions as market footing strengthens and new opportunities emerge.",
  },
] as const;

export const INDUSTRY_LIST = [
  "Mining",
  "Energy",
  "Oil & Gas",
  "Pharmaceuticals",
  "Healthcare",
  "Financial Services",
  "Banking",
  "FinTech",
  "Software",
  "Technology",
  "Infrastructure",
  "Logistics",
  "Agriculture",
  "Consumer Goods",
  "Manufacturing",
  "Food & Beverage",
  "Real Estate",
] as const;

export const NETWORK_SECTORS = [
  "Banking & financial institutions",
  "Agriculture & agribusiness",
  "Pharmaceuticals",
  "Healthcare",
  "Consumer packaged goods",
  "Food & beverage",
  "Manufacturing",
  "Mining",
  "Energy & oil & gas",
  "Logistics & supply chain",
  "Infrastructure",
  "Real estate",
  "Technology",
  "Retail",
  "Hospitality",
] as const;

export const GATEWAY_POINTS = [
  "Enter the Venezuelan market",
  "Expand existing operations",
  "Invest with local judgment",
  "Operate through trusted partners",
  "License or franchise a brand",
  "Build strategic alliances",
  "Secure commercial introductions",
  "Navigate regulatory requirements",
] as const;

/** Anonymous, confidential illustrative engagements — no invented company names. */
export const ENGAGEMENTS = [
  {
    sector: "Consumer & retail",
    focus: "Market entry via licensing",
    summary:
      "Advised an international consumer brand on entering Venezuela through a licensing structure with a qualified local operator, reducing the need to build full owned infrastructure at launch.",
    outcome:
      "Client secured a clear entry path, counterpart evaluation framework, and commercial terms oriented around speed and risk control.",
  },
  {
    sector: "Healthcare & pharmaceuticals",
    focus: "Partner identification",
    summary:
      "Supported a foreign healthcare supplier assessing distribution and partnership options, including counterpart screening and regulatory orientation.",
    outcome:
      "Leadership obtained decision-ready options and introductions aligned with quality, compliance, and channel reach.",
  },
  {
    sector: "Industrial & logistics",
    focus: "Expansion strategy",
    summary:
      "Assisted an established regional operator evaluating expansion into Venezuelan logistics corridors and private-sector partnerships.",
    outcome:
      "Engagement produced a sequenced expansion plan with prioritized counterparties and operating considerations.",
  },
  {
    sector: "Natural resources",
    focus: "Investment diligence support",
    summary:
      "Provided local market intelligence and counterpart context for an investor group evaluating a resource-related opportunity. Grupos Caceres does not own or operate mining or energy assets.",
    outcome:
      "Investors received structured diligence framing and local insight to inform go / no-go discussions.",
  },
  {
    sector: "Financial services",
    focus: "Strategic introductions",
    summary:
      "Facilitated selective commercial introductions for an international services firm exploring institutional relationships in Venezuela.",
    outcome:
      "Client progressed from exploratory interest to qualified conversations with relevant private-sector counterparts.",
  },
  {
    sector: "Food & agriculture",
    focus: "Business development",
    summary:
      "Supported a foreign agribusiness participant mapping channels, local operators, and partnership models for market presence.",
    outcome:
      "Client left with a practical shortlist of pathways and a clearer view of operating realities on the ground.",
  },
] as const;

export const INVESTMENT_THEMES = [
  {
    title: "Opportunity identification",
    text: "Screen sectors and counterparties aligned with your investment thesis and risk parameters.",
  },
  {
    title: "Local due diligence",
    text: "Assess commercial reality, counterpart quality, and operating conditions beyond desk research.",
  },
  {
    title: "Partnership building",
    text: "Introduce and support relationships with operators, sponsors, and professional advisors.",
  },
  {
    title: "Execution support",
    text: "Stay engaged as decisions move from evaluation into structured, practical implementation.",
  },
] as const;

/** Illustrative opportunity themes for qualified investors — not owned assets. */
export const INVESTMENT_OPPORTUNITIES = [
  {
    theme: "Agribusiness & food supply",
    status: "By invitation",
    note: "Situations involving production, processing, or distribution partnerships. Details shared only with qualified parties under confidentiality.",
  },
  {
    theme: "Logistics & trade corridors",
    status: "Selective",
    note: "Opportunities linked to port-adjacent, warehouse, or distribution capabilities. Availability varies; no ownership claim by Grupos Caceres.",
  },
  {
    theme: "Consumer & franchise models",
    status: "Active dialogue",
    note: "Licensing and franchise-ready concepts seeking capable local operators. Introductions arranged after mutual qualification.",
  },
  {
    theme: "Industrial & infrastructure-adjacent",
    status: "Confidential",
    note: "Project-adjacent commercial situations reviewed case by case. Information provided under NDA to qualified investors only.",
  },
] as const;
