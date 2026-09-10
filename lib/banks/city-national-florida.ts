import type { Bank } from "@/lib/banks";

export const CITY_NATIONAL_FLORIDA: Bank = {
  slug: "city-national-florida",
  name: "City National Bank of Florida",
  shortName: "City National Florida",
  ticker: "private (Bci)",
  hq: "Miami, FL",
  fedRank: 69,
  leadBank: "City National Bank of Florida",
  assetsUsdMillions: 28626,
  charter: "National bank (OCC); subsidiary of Chile's Bci",
  posture: "Florida's second-largest bank, owned by Chile's Bci, is consolidating 800 Miami staff into one headquarters, pushing north to Orlando and Tampa, and recruiting for a chief AI officer while its disclosed AI is a CISO-led webinar and vendor-driven mortgage pricing.",
  answerFirst:
    "City National Bank of Florida (CNB), the Miami bank founded in 1946 and owned since 2015 by Chile's Banco de Crédito e Inversiones (Bci), has more than $28 billion of assets, about 30 branches from Miami-Dade to greater Orlando and nearly 1,000 employees; it is one of the two largest banks based in Florida and represents roughly a third of its parent's consolidated assets. Its AI record is thin but moving. The bank's only first-party AI content is a May 2024 webinar, 'Exploring AI Trends for Small Businesses', presented by chief information security officer Brian Fricke with a Dell Technologies specialist, and its residential lending team uses Polly's product and pricing engine to adjust pricing, eligibility and rules as it expands beyond South Florida. A job listing circulated in June 2026 for a chief artificial intelligence officer 'defining and executing the AI strategy' to transform operational efficiency and client experience through AI and analytics, a role the bank has not yet announced filling. Its former head of digital banking and transformation, Mark Jaundoo, who ran digital channels, CRM, lending, data and operating-model work, has since left for a fintech role. The corporate agenda is physical and geographic: in April 2025 CNB signed the largest office lease of the year in Miami, 145,000 square feet in the former Bacardi USA headquarters in Coral Gables, to be renamed the City National Financial Center and to house 800 team members from 2026, and it is pursuing a statewide growth strategy through Orlando and Tampa commercial teams. As a national bank CNB is supervised by the OCC, and as a subsidiary of a Chilean group it also sits inside Bci's consolidated risk framework. Treat this as a thin record with a recruiting signal.",
  keyPoints: [
    "Recruiting signal: a June 2026 listing for a chief artificial intelligence officer to define and execute CNB's AI strategy; no appointment announced.",
    "Disclosed AI is client education: a May 2024 small-business AI trends webinar led by CISO Brian Fricke with Dell Technologies.",
    "Mortgage pricing runs on Polly's engine, letting capital markets adjust pricing, eligibility and rules as lending expands statewide.",
    "Digital-transformation talent has left: former head of digital banking and transformation Mark Jaundoo now advises fintechs.",
    "New headquarters: 145,000 square feet in Coral Gables, the largest Miami office lease of 2025, uniting 800 Miami-Dade staff from 2026.",
    "Scale: more than $28 billion of assets, about 30 branches, nearly 1,000 employees; owned by Chile's Bci since 2015."
  ],
  leadership: [
    { name: "Jorge Gonzalez", role: "President and CEO", linkedin: "https://www.linkedin.com/in/jorge-gonzalez-ceo", sources: ["cnb-hq-2025"] },
    { name: "Brian Fricke", role: "Chief Information Security Officer", sources: ["cnb-aiwebinar-2024"] }
  ],
  timeline: [
    { date: "2024-05-28", title: "Webinar: Exploring AI Trends for Small Businesses", detail: "CISO Brian Fricke with Dell Technologies on integrating AI into business operations.", sources: ["cnb-aiwebinar-2024"] },
    { date: "2025-04-08", title: "Corporate headquarters expansion in Coral Gables", detail: "145,000 square feet; City National Financial Center; 800 Miami-based team members under one roof from 2026.", sources: ["cnb-hq-2025"] },
    { date: "2026-03-03", title: "Sports partnership with PGA Tour winner Nico Echavarria", detail: "Bank cites more than $28 billion of assets.", sources: ["cnb-echavarria-2026"] },
    { date: "2026-05-27", title: "Former head of digital banking and transformation profiled at Digital Banking 2026", detail: "Mark Jaundoo led digital channels, CRM, lending, data and operating model at CNB.", sources: ["ab-jaundoo-2026"] },
    { date: "2026-07-28", title: "Residential lending strategy and Polly pricing engine", detail: "Next-generation technology and partnerships as the bank expands beyond South Florida.", sources: ["hw-cnb-2026"] },
    { date: "2026-01-15", title: "Move into the City National Financial Center begins", detail: "800 Miami-Dade team members consolidated in Coral Gables from 2026.", sources: ["cnb-hq-2025"] }
  ],
  useCases: [
    { useCase: "credit-underwriting", name: "Polly product and pricing engine for residential lending", detail: "Rules, eligibility and pricing adjusted quickly across portfolio products.", status: "In production", sources: ["hw-cnb-2026"] },
    { useCase: "cybersecurity", name: "CISO-led AI education for small businesses", detail: "Webinar on AI trends, tools and safe integration.", status: "In production", sources: ["cnb-aiwebinar-2024"] },
    { useCase: "governance-general", name: "Chief AI officer search", detail: "Role to define and execute AI strategy across efficiency and client experience.", status: "Announced", sources: ["cnb-echavarria-2026"] }
  ],
  numbers: [
    { label: "Total assets", value: "> $28 billion", asOf: "2026-03-03", sources: ["cnb-echavarria-2026"] },
    { label: "New headquarters", value: "145,000 sq ft; 800 team members", asOf: "2025-04-08", sources: ["cnb-hq-2025"] }
  ],
  quotes: [
    { who: "City National Bank of Florida", role: "Headquarters announcement", date: "2025-04-08", quote: "CNB now ranks among the two largest banks based in Florida and one of the 75-largest commercial banks in the U.S. by asset value.", sources: ["cnb-hq-2025"] }
  ],
  regulatory: [
    { authority: "occ", why: "CNB is a national bank; OCC model-risk and gen-AI risk expectations govern any AI in pricing, credit or servicing.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "federal-reserve", why: "Foreign ownership by Bci brings Fed oversight of the US operations and third-party technology.", docSlugs: ["fed-sr-23-4", "fed-sr-11-7"] },
    { authority: "cfpb", why: "Residential lending pricing engines carry fair-lending and adverse-action duties.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] }
  ],
  suggestions: [
    { title: "A chief AI officer before a programme is unusual", detail: "Hiring the leader first signals intent; the first announced use case will show whether efficiency or client experience wins." },
    { title: "The parent has AI credit models; the subsidiary has not said so", detail: "Bci's group strategy cites AI-driven credit models; CNB has yet to disclose whether they extend to its Florida book." },
    { title: "Pricing engines are already model risk", detail: "A vendor pricing engine that sets eligibility and rules is within OCC model-risk scope regardless of the AI label." },
    { title: "Talent turnover is the risk to watch", detail: "Losing the head of digital transformation before an AI leader arrives leaves a gap in continuity for data and CRM work."}
  ],
  faq: [
    { q: "Does City National Bank of Florida use AI?", a: "CNB has not disclosed an AI deployment. Its AI content is a 2024 small-business webinar led by its chief information security officer, its mortgage business uses a vendor pricing engine, and a June 2026 job listing sought a chief artificial intelligence officer to define its AI strategy." },
    { q: "Who owns City National Bank of Florida?", a: "Chile's Banco de Crédito e Inversiones (Bci) has owned it since 2015. CNB has more than $28 billion of assets, about 30 branches from Miami-Dade to Orlando, and is moving its headquarters to the City National Financial Center in Coral Gables." }
  ],
  sources: [
    { id: "cnb-aiwebinar-2024", title: "Webinar: Exploring AI Trends for Small Businesses", publisher: "City National Bank of Florida", url: "https://www.citynational.com/post/webinar-exploring-ai-trends-for-small-businesses", date: "2024-05-28" },
    { id: "cnb-hq-2025", title: "City National Bank of Florida To Expand Corporate Headquarters in Coral Gables", publisher: "City National Bank of Florida", url: "https://www.citynational.com/post/city-national-bank-of-florida-to-expand-corporate-headquarters-in-coral-gables", date: "2025-04-08" },
    { id: "cnb-echavarria-2026", title: "City National Bank of Florida Expands Sports Partnership Platform with Three-Time PGA Tour Winner Nico Echavarria", publisher: "City National Bank of Florida", url: "https://www.citynational.com/post/city-national-bank-of-florida-expands-sports-partnership-platform-with-three-time-pga-tour-winner-nico-echavarria", date: "2026-03-03" },
    { id: "ab-jaundoo-2026", title: "Mark Jaundoo, speaker profile, Digital Banking 2026", publisher: "American Banker", url: "https://digital-banking.americanbanker.com/profile/mark-jaundoo", date: "2026-05-27" },
    { id: "hw-cnb-2026", title: "The New York sessions: City National Bank of Florida's service-first growth strategy", publisher: "HousingWire", url: "https://housingwire.com/videos/the-new-york-sessions-city-national-bank-of-floridas-service-first-growth-strategy", date: "2026-07-28" }
  ],
  lastUpdated: "2026-09-10"
};
