import type { Bank } from "@/lib/banks";

export const FIRST_UNITED: Bank = {
  slug: "first-united",
  name: "First United Bank & Trust (Spend Life Wisely Company)",
  shortName: "First United Bank",
  ticker: "private (Spend Life Wisely Co.)",
  hq: "Durant, OK",
  fedRank: 102,
  leadBank: "First United Bank & Trust",
  assetsUsdMillions: 16404,
  charter: "Oklahoma state member bank (Federal Reserve); privately held",
  posture: "A family-controlled, purpose-driven Oklahoma and Texas bank whose transformation leader wants technology to be 'an enterprise capability' connected to strategy, data and risk, and whose goal is 'a great community bank with the modern capabilities required to serve people for generations', with no disclosed AI programme.",
  answerFirst:
    "First United Bank & Trust, the Durant, Oklahoma bank owned by the Massey family's Spend Life Wisely Company, serves more than 362,000 customers through 75 locations across Oklahoma and Texas with about $16.3 billion of assets and a stated purpose 'to inspire and empower others to Spend Life Wisely' through four pillars of faith, financial well-being, health and wellness, and personal growth. Its technology stance comes from executive vice president and transformation leader Tadd Tobkin, who describes four years of moving technology 'from a support function to more of an enterprise capability' that 'connects our strategy to our operating model, our data, our risk, and our digital experience', and who prefers 'evolution' to 'transformation' because 'the evolution is just speeding up'; the bank's goal, he says, is 'not to become a technology company that happens to be a bank' but 'a great community bank with the modern capabilities required to serve people for generations'. Chairman and CEO Greg Massey's 2025 letter describes a year of 'steady progress' in which teams 'advanced the systems and capabilities that support how we work' and aligned 'technology, talent, and processes to operate more effectively as one enterprise', while improving capital and asset quality; the bank hired a new chief financial officer in 2026 and the Massey family filed to consolidate ownership through a trust. Customer-facing AI content is cautious: a guide to ChatGPT privacy risks, cybersecurity threats for 2026 and holiday fraud, plus an ISO 20022 payments explainer for businesses. As a private company it publishes no 10-K, and no AI leader, vendor, model or budget has been disclosed. First United Bank & Trust is an Oklahoma state member bank supervised by the Federal Reserve.",
  keyPoints: [
    "Technology as 'an enterprise capability' linking strategy, operating model, data, risk and digital experience, led by EVP Tadd Tobkin.",
    "Goal: 'a great community bank with the modern capabilities required to serve people for generations', not 'a technology company that happens to be a bank'.",
    "2025 impact report: systems and capabilities advanced; technology, talent and processes aligned 'as one enterprise'; capital and asset quality improved.",
    "Customer AI content is defensive: ChatGPT privacy risks, 2026 cybersecurity threats, holiday fraud; ISO 20022 guidance for businesses.",
    "Scale: 362,000-plus customers, 75 locations, about $16.3 billion of assets; Massey family control via Spend Life Wisely Company.",
    "Private company: no 10-K; no AI leader, vendor, model or budget disclosed."
  ],
  leadership: [
    { name: "Greg Massey", role: "Chairman and CEO", linkedin: "https://www.linkedin.com/in/greg-massey", sources: ["fub-impact-2026"] },
    { name: "Tadd Tobkin", role: "Executive Vice President, transformation leader", linkedin: "https://www.linkedin.com/in/taddtobkin", sources: ["b2e-tobkin-2026"] }
  ],
  timeline: [
    { date: "2025-08-05", title: "ChatGPT privacy risks guide for customers", detail: "How AI tools store and may expose shared information.", sources: ["fub-chatgpt-2025"] },
    { date: "2026-03-20", title: "2025 impact report", detail: "125th year; systems and capabilities advanced; one-enterprise alignment.", sources: ["fub-impact-2026"] },
    { date: "2026-08-11", title: "Transformation leader on technology as enterprise capability", detail: "Evolution over transformation; modern capabilities for a community bank.", sources: ["b2e-tobkin-2026"] },
    { date: "2025-03-01", title: "ISO 20022 payments guidance for businesses", detail: "Structured payment data and the Fedwire transition.", sources: ["fub-iso-2025"] },
    { date: "2025-12-31", title: "Year-end 2025: capital and asset quality improved", detail: "Disciplined performance in a changing environment.", sources: ["fub-impact-2026"] },
    { date: "2026-01-15", title: "2026 cybersecurity threats guide", detail: "Layered security and multi-factor authentication for customers.", sources: ["fub-cyber-2026"] }
  ],
  useCases: [
    { useCase: "governance-general", name: "Technology as enterprise capability", detail: "Strategy, operating model, data, risk and digital experience connected under one programme.", status: "In production", sources: ["b2e-tobkin-2026"] },
    { useCase: "cybersecurity", name: "Customer cybersecurity and AI-privacy education", detail: "ChatGPT privacy, layered security, holiday fraud.", status: "In production", sources: ["fub-chatgpt-2025", "fub-cyber-2026"] },
    { useCase: "third-party-vendors", name: "ISO 20022 payments readiness", detail: "Business guidance on structured payment data.", status: "In production", sources: ["fub-iso-2025"] }
  ],
  numbers: [
    { label: "Customers / locations", value: "> 362,000 / 75", asOf: "2026-08-11", sources: ["b2e-tobkin-2026"] },
    { label: "Total assets", value: "≈ $16.3 billion", asOf: "2026-08-11", sources: ["b2e-tobkin-2026"] },
    { label: "Years in operation", value: "125 (in 2025)", asOf: "2026-03-20", sources: ["fub-impact-2026"] }
  ],
  quotes: [
    { who: "Tadd Tobkin", role: "Executive Vice President", date: "2026-08-11", quote: "The focus has been moving technology from a support function to more of an enterprise capability. One that connects our strategy to our operating model, our data, our risk, and our digital experience.", sources: ["b2e-tobkin-2026"] },
    { who: "Greg Massey", role: "Chairman and CEO", date: "2026-03-20", quote: "Our teams made steady progress aligning technology, talent, and processes to operate more effectively as one enterprise.", sources: ["fub-impact-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "First United is a state member bank; Fed model-risk and third-party guidance govern its data and digital platforms and any AI.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Consumer and mortgage products bring adverse-action and UDAAP duties to any automated decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "fdic", why: "Deposit-insurance supervision and interagency third-party guidance apply to vendor platforms.", docSlugs: ["fdic-fil-29-2023"] }
  ],
  suggestions: [
    { title: "Data and risk in the same sentence is the right frame", detail: "Tying technology to data and risk before digital experience is how examiners want AI governance built; the bank has the framing without the disclosure." },
    { title: "Private ownership permits patience", detail: "Without quarterly investor pressure, First United can sequence data foundations before AI; it should still document the roadmap for regulators." },
    { title: "Purpose-driven brand needs a stated AI ethic", detail: "A bank built on 'Spend Life Wisely' will be asked how AI serves customers rather than extracts from them; a principles statement would fit." },
    { title: "ChatGPT caution should extend to staff policy", detail: "Warning customers about AI privacy implies an internal acceptable-use policy; publishing it would be consistent." }
  ],
  faq: [
    { q: "Does First United Bank use AI?", a: "First United has not disclosed an AI leader, vendor, model or budget. Its transformation leader describes technology as an enterprise capability connected to strategy, data and risk, and its customer content warns about ChatGPT privacy risks and AI-era cyber threats." },
    { q: "Who owns First United Bank & Trust?", a: "Spend Life Wisely Company, controlled by the Massey family, with chairman and CEO Greg Massey. The Durant, Oklahoma bank has about $16.3 billion of assets, 75 locations and more than 362,000 customers across Oklahoma and Texas, and is a state member bank supervised by the Federal Reserve." }
  ],
  sources: [
    { id: "fub-iso-2025", title: "Understanding ISO 20022: Preparing for the Future of Payments", publisher: "First United Bank", url: "https://www.firstunitedbank.com/spendlifewisely/understanding-iso-20022-preparing-future-payments", date: "2025-03-01" },
    { id: "fub-chatgpt-2025", title: "ChatGPT Privacy Risks: Protecting Sensitive Information in the Digital Age", publisher: "First United Bank", url: "https://www.firstunitedbank.com/spendlifewisely/chatgpt-privacy-risks-protecting-sensitive-information-digital-age", date: "2025-08-05" },
    { id: "fub-cyber-2026", title: "Cybersecurity Threats on the Rise in 2026: What You Can Do to Protect What Matters Most", publisher: "First United Bank", url: "https://www.firstunitedbank.com/spendlifewisely/cybersecurity-threats-rise-2026-what-you-can-do-protect-what-matters-most", date: "2026-01-15" },
    { id: "fub-impact-2026", title: "Impact Report 2025", publisher: "First United Bank", url: "https://firstunitedbank.com/_s3/firstunitedbank-com/files/document/ImpactReport2025.pdf?VersionId=HIOSkTx5ZoQnwHiTnb8zuVq9NIVbvo94", date: "2026-03-20" },
    { id: "b2e-tobkin-2026", title: "First United Bank: Combining Community Banking Values with Modern Technology", publisher: "Interface / FinTech Strategy (B2E Media)", url: "https://interface.media/blog/executiveinsights/first-united-bank-combining-community-banking-values-with-modern-technology", date: "2026-08-11" }
  ],
  lastUpdated: "2026-09-10"
};
