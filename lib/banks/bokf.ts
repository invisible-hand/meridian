import type { Bank } from "@/lib/banks";

export const BOKF: Bank = {
  slug: "bok-financial",
  name: "BOK Financial Corporation",
  shortName: "BOK Financial",
  ticker: "BOKF",
  hq: "Tulsa, OK",
  fedRank: 43,
  leadBank: "BOKF, National Association",
  assetsUsdMillions: 53493,
  charter: "National bank (OCC)",
  posture: "A data-first rebuild under a new chief data and analytics officer, with AI discussed publicly mostly through the bank's own journalism on fraud, healthcare and the economy rather than through product launches.",
  answerFirst:
    "BOK Financial, the $53 billion Tulsa-based parent of BOKF, N.A. with operations across Oklahoma, Texas, Colorado, Arizona, Kansas, Missouri, New Mexico and Arkansas, has said little about its own AI deployments and has not disclosed AI spending, use-case counts or productivity claims. What is on the record is organisational: Shanthi Pudota, a 30-year data executive from Expedia, Discover and Fannie Mae, is senior vice-president and chief data and analytics officer and 'leads BOK Financial's enterprise data and AI strategy', described in March 2026 as a shift to a 'data-first model' in which data is a shared enterprise asset so that 'analytics and AI [can] scale responsibly'. The bank's public voice on AI otherwise comes through its own editorial site, The Statement, where its fraud, healthcare and economics specialists write about generative-AI-enabled phishing and deepfake scams (a 'double-edged sword'), social engineering behind ACH and wire fraud, AI in healthcare operations (57% of healthcare executives rank AI clinical solutions as their top technology initiative) and AI's effect on productivity and energy demand. Financially the bank earned $155.8 million in the first quarter of 2026 with operating expense falling to $354.2 million, CEO Stacy Kymes is counting on a new mortgage-finance unit for 2026 growth, and BOK ranked 18th among banks for customer reputation in American Banker's 2026 survey. Treat this page as a thin record: a national bank with a named AI and data leader, an explicit governance framing and a specialty-lending data heritage (a warehouse of forecasts on more than 200,000 oil and gas wells), but no disclosed AI product roadmap.",
  keyPoints: [
    "Named leader: Shanthi Pudota, SVP and chief data and analytics officer, owns 'enterprise data and AI strategy' and a shift to a data-first operating model (March 2026).",
    "Framing is governance-led: build data foundations so that 'analytics and AI [can] scale responsibly while remaining aligned with business priorities'.",
    "Public AI content is defensive: the bank's fraud team warns that ChatGPT-class tools write convincing phishing and that deepfake imagery is rising; ACH and wire fraud guidance stresses human verification over tools.",
    "Data heritage in energy lending: a three-year data warehouse centralising evaluations on 200,000-plus oil and gas wells improved risk analysis and lending outcomes.",
    "No disclosed AI spend, use-case count or customer-facing AI product; first-quarter 2026 net income $155.8 million with operating expense down $6.9 million.",
    "Reputation: 18th among banks by customer reputation in 2026 (score 79.7), down from 10th in 2025."
  ],
  leadership: [
    { name: "Stacy Kymes", role: "President and CEO", sources: ["ab-mortgage-2026", "cnbc-kymes-2025"], linkedin: "https://www.linkedin.com/in/stacy-kymes-718460b6/" },
    { name: "Shanthi Pudota", role: "SVP, Chief Data and Analytics Officer (enterprise data and AI strategy)", sources: ["ab-pudota-2026"], linkedin: "https://www.linkedin.com/in/shanthipudota/" },
    { name: "Brian Henderson", role: "Chief Investment Officer", sources: ["statement-energy-2024"] }
  ],
  timeline: [
    { date: "2024-02-21", title: "'AI a double-edged sword' on fraud", detail: "Fraud team ties rising phishing losses to tools like ChatGPT and warns of AI-generated imagery.", sources: ["statement-fraud-2024"] },
    { date: "2024-03-21", title: "Energy data warehouse profiled", detail: "Three-year effort centralised evaluations on 200,000-plus wells for risk and pricing analysis.", sources: ["statement-data-2024"] },
    { date: "2024-07-15", title: "CIO on AI and productivity", detail: "AI 'has the potential to increase the output for every hour worked'; energy as the constraint.", sources: ["statement-energy-2024"] },
    { date: "2026-01-27", title: "CEO counts on mortgage finance for 2026", detail: "New unit could reach $1 billion in commitments; high-single-digit loan growth forecast.", sources: ["ab-mortgage-2026"] },
    { date: "2026-03-06", title: "ACH and wire fraud guidance", detail: "Human verification, daily reconciliation and dual controls as the layer AI tools cannot replace.", sources: ["statement-ach-2026"] },
    { date: "2026-03-24", title: "Chief data and analytics officer profiled", detail: "Pudota leads enterprise data and AI strategy and a 'data-first' shift.", sources: ["ab-pudota-2026"] },
    { date: "2026-03-30", title: "Healthcare research on AI adoption", detail: "57% of healthcare C-suites rank AI clinical solutions as their top technology initiative.", sources: ["statement-healthcare-2026"] },
    { date: "2026-04-20", title: "First-quarter 2026 results", detail: "Net income $155.8 million; operating expense $354.2 million.", sources: ["bokf-q1-2026"] },
    { date: "2026-08-17", title: "18th for customer reputation", detail: "Score 79.7 in American Banker's 2026 survey.", sources: ["ab-reputation-2026"] }
  ],
  useCases: [
    { useCase: "governance-general", name: "Data-first model for responsible AI scaling", detail: "Enterprise data treated as a shared asset under the chief data and analytics officer.", status: "Rolling out", sources: ["ab-pudota-2026"] },
    { useCase: "credit-underwriting", name: "Energy portfolio data warehouse", detail: "Historical and forecast data on 200,000-plus wells for production, pricing and expense risk.", status: "In production", sources: ["statement-data-2024"] },
    { useCase: "fraud", name: "AI-enabled fraud awareness and controls", detail: "Client guidance on generative-AI phishing, deepfakes and ACH/wire social engineering.", status: "In production", sources: ["statement-fraud-2024", "statement-ach-2026"] }
  ],
  numbers: [
    { label: "First-quarter 2026 net income", value: "$155.8 million", asOf: "2026-04-20", sources: ["bokf-q1-2026"] },
    { label: "Operating expense, Q1 2026", value: "$354.2 million (down $6.9 million)", asOf: "2026-04-20", sources: ["bokf-q1-2026"] },
    { label: "Oil and gas wells in the energy data warehouse", value: "> 200,000", asOf: "2024-03-21", sources: ["statement-data-2024"] },
    { label: "Customer reputation rank", value: "18th (79.7)", asOf: "2026-08-17", sources: ["ab-reputation-2026"] }
  ],
  quotes: [
    { who: "Shanthi Pudota", role: "SVP, Chief Data and Analytics Officer", date: "2026-03-24", quote: "Building the foundations that enable analytics and AI to scale responsibly while remaining aligned with business priorities and enterprise decision-making.", sources: ["ab-pudota-2026"] },
    { who: "Stacy Kymes", role: "President and CEO", date: "2026-01-27", quote: "I think the setup for 2026 is probably as good as I can remember, both from a company-performance perspective and from an economic-backdrop perspective.", sources: ["ab-mortgage-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "BOKF, N.A. is a national bank; any AI models in credit, fraud or operations fall under the OCC's model-risk and gen-AI supervisory expectations.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "federal-reserve", why: "Holding-company supervision of model risk and third-party AI vendors.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Consumer and mortgage lending bring ECOA adverse-action and UDAAP duties to any AI in decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] }
  ],
  suggestions: [
    { title: "The data-first hire is the signal", detail: "Appointing a chief data and analytics officer with an explicit AI remit is what precedes disclosure at peers; expect use-case announcements to follow." },
    { title: "Fraud content is a governance asset", detail: "BOK's own writing on AI-enabled phishing and ACH fraud documents that it understands the threat; the next step is disclosing the detection tools it runs." },
    { title: "Energy data is a moat", detail: "A curated warehouse on 200,000-plus wells is exactly the proprietary dataset AI underwriting needs; it is a differentiated place to build." },
    { title: "Thin record, not no record", detail: "Investors and examiners will read silence as caution; publishing AI governance principles would cost little and match the responsible-scaling framing." }
  ],
  faq: [
    { q: "Who leads AI at BOK Financial?", a: "Shanthi Pudota, senior vice-president and chief data and analytics officer, leads BOK Financial's enterprise data and AI strategy. She joined from roles at Expedia Group, Discover Financial Services and Fannie Mae and is moving the bank to a data-first model designed to let analytics and AI scale responsibly." },
    { q: "Has BOK Financial announced AI products?", a: "No. As of September 2026 BOK Financial has not disclosed customer-facing AI products, AI spending or use-case counts. Its public AI content focuses on fraud awareness, healthcare industry research and economic commentary published on its editorial site, The Statement." }
  ],
  sources: [
    { id: "ab-pudota-2026", title: "Shanthi Pudota, SVP, Chief Data and Analytics Officer, BOK Financial (Digital Banking speaker profile)", publisher: "American Banker", url: "https://digital-banking.americanbanker.com/profile/shanthi-pudota", date: "2026-03-24" },
    { id: "ab-mortgage-2026", title: "BOK counting on mortgage finance for a boost in 2026", publisher: "American Banker", url: "https://www.americanbanker.com/news/bok-counting-on-mortgage-finance-for-a-boost-in-2026", date: "2026-01-27" },
    { id: "ab-reputation-2026", title: "Top Banks by Reputation 2026: Customers", publisher: "American Banker", url: "https://www.americanbanker.com/news/top-banks-by-reputation-2026-customers", date: "2026-08-17" },
    { id: "bokf-q1-2026", title: "BOK Financial Corporation reports quarterly earnings of $156 million in the first quarter", publisher: "BOK Financial", url: "https://investor.bokf.com/Q1-2026-Earnings-Full-Release-PDF", date: "2026-04-20" },
    { id: "cnbc-kymes-2025", title: "Kymes: Credit is still very benign despite recent headlines", publisher: "CNBC", url: "https://cnbc.com/video/2025/10/22/kymes-credit-is-still-very-benign-despite-recent-headlines.html", date: "2025-10-22" },
    { id: "statement-fraud-2024", title: "AI a double-edged sword", publisher: "BOK Financial (The Statement)", url: "https://thestatement.bokf.com/_site_journalism/articles/2024/02/ai-a-double-edged-sword", date: "2024-02-21" },
    { id: "statement-data-2024", title: "From wildcatting to data mapping", publisher: "BOK Financial (The Statement)", url: "https://thestatement.bokf.com/articles/2024/03/From-wildcatting-to-data-mapping", date: "2024-03-21" },
    { id: "statement-energy-2024", title: "Energy availability will determine winners and losers in the next 30 years", publisher: "BOK Financial (The Statement)", url: "https://thestatement.bokf.com/articles/2024/07/Access-to-cheap-sources-of-energy", date: "2024-07-15" },
    { id: "statement-ach-2026", title: "How to help mitigate the risks of ACH and wire fraud", publisher: "BOK Financial (The Statement)", url: "https://thestatement.bokf.com/articles/2026/02/human-behavior-as-a-layer-of-defense-in-helping-prevent-ach-and-wire-fraud", date: "2026-03-06" },
    { id: "statement-healthcare-2026", title: "Healthcare looks to AI to alleviate burnout, labor shortages", publisher: "BOK Financial (The Statement)", url: "https://thestatement.bokf.com/articles/2026/03/AI-helps-healthcare-tackle-burnout-and-labor-shortages", date: "2026-03-30" }
  ],
  lastUpdated: "2026-09-10"
};
