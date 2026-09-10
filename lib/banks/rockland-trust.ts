import type { Bank } from "@/lib/banks";

export const ROCKLAND_TRUST: Bank = {
  slug: "rockland-trust",
  name: "Independent Bank Corp. (Rockland Trust)",
  shortName: "Rockland Trust",
  ticker: "INDB",
  hq: "Rockland, MA",
  fedRank: 78,
  leadBank: "Rockland Trust Company",
  assetsUsdMillions: 24788,
  charter: "Massachusetts state nonmember bank (FDIC)",
  posture: "A Boston-area bank that stood up an Office of Digital Innovation and an AI steering committee in early 2026 to pick use cases 'with a meaningful payback', while digesting the Enterprise Bank acquisition and preparing an October core conversion.",
  platform: {
    name: "Office of Digital Innovation and AI governance framework",
    detail: "In the first quarter of 2026 Rockland Trust established an Office of Digital Innovation and a governance framework for AI 'to ensure we stay within the guardrails of our moderate risk profile'. The framework includes a steering committee that serves as 'a clearinghouse for AI use cases', so that investment goes to areas 'that have a meaningful payback' rather than 'boiling the ocean'; CEO Jeff Tengel expects to start with 'relatively easy use cases as we build muscle memory'. The bank is simultaneously moving its core operating platform from FIS Horizon to FIS IBS, with the conversion scheduled for October 2026 at an expected cost of $4 million to $5 million.",
    sources: ["indb-q1call-2026", "indb-q2-2026"]
  },
  answerFirst:
    "Independent Bank Corp., the Rockland, Massachusetts parent of Rockland Trust Company with $25 billion of assets, has answered the AI question the way a self-described moderate-risk bank would: with governance first. On the April 2026 earnings call CEO Jeff Tengel said the bank had established an Office of Digital Innovation in the first quarter and 'a governance framework around our AI activities to ensure we stay within the guardrails of our moderate risk profile', including a steering committee acting as 'a clearinghouse for AI use cases' so the bank can 'make AI investments in those areas that have a meaningful payback and avoid the proverbial boiling the ocean', starting with 'relatively easy use cases as we build muscle memory'. The bigger technology event is a core conversion from FIS Horizon to FIS IBS scheduled for October 2026, expected to cost $4 million to $5 million, with $2.1 million of one-time costs in the second quarter alone. Both follow the $562 million acquisition of Enterprise Bancorp, which closed on 1 July 2025 with systems converted over the weekend of 11 October 2025, adding about $5 billion of assets north of Boston and in southern New Hampshire. Second-quarter 2026 net income was $81.8 million, or $1.70 per diluted share, with no merger costs, assets under administration of $9.5 billion and, in Tengel's words, 'strong execution on many of our strategic priorities'. No AI vendor, use case in production or budget has been named. Rockland Trust is a Massachusetts state nonmember bank supervised by the FDIC.",
  keyPoints: [
    "Office of Digital Innovation and an AI governance framework with a use-case steering committee established in Q1 2026.",
    "Investment philosophy: fund AI where there is 'a meaningful payback', start with easy use cases, stay within a moderate risk profile.",
    "Core conversion from FIS Horizon to FIS IBS scheduled for October 2026; $4 million to $5 million expected cost; $2.1 million incurred in Q2.",
    "Enterprise Bancorp acquired for $562 million, closed 1 July 2025, converted October 2025; no merger costs by Q2 2026.",
    "Q2 2026 net income $81.8 million ($1.70 per share); assets under administration $9.5 billion; total assets $25.0 billion.",
    "No AI vendor, production use case or budget disclosed."
  ],
  leadership: [
    { name: "Jeffrey Tengel", role: "Chief Executive Officer", linkedin: "https://www.linkedin.com/in/jeffrey-tengel-88426410", sources: ["indb-q2-2026", "indb-q1call-2026"] },
    { name: "Mark Ruggiero", role: "Chief Financial Officer and Head of Consumer Lending", sources: ["indb-q1call-2026"] }
  ],
  timeline: [
    { date: "2025-07-01", title: "Enterprise Bancorp acquisition closes", detail: "Enterprise Bank merged into Rockland Trust; conversion set for October 2025.", sources: ["indb-enterprise-2025"] },
    { date: "2026-03-23", title: "Boston-area consolidation context", detail: "$562 million Enterprise purchase counted among 2025's major Massachusetts deals.", sources: ["ab-boston-2026"] },
    { date: "2026-04-17", title: "Q1 2026 call: Office of Digital Innovation and AI governance", detail: "Steering committee as use-case clearinghouse; core move from Horizon to IBS in October.", sources: ["indb-q1call-2026"] },
    { date: "2026-07-16", title: "Second-quarter 2026 results", detail: "Net income $81.8 million; $2.1 million of core-conversion costs; no merger costs.", sources: ["indb-q2-2026"] },
    { date: "2025-10-11", title: "Enterprise Bank core and account conversion", detail: "Product and customer account conversions over the October 11 weekend.", sources: ["indb-enterprise-2025"] },
    { date: "2026-04-16", title: "First-quarter 2026 results", detail: "Net income $79.9 million; $1.63 per diluted share; $3.0 million of merger costs.", sources: ["indb-q2-2026"] }
  ],
  useCases: [
    { useCase: "governance-general", name: "AI steering committee and governance framework", detail: "Clearinghouse for use cases within a moderate risk appetite.", status: "In production", sources: ["indb-q1call-2026"] },
    { useCase: "third-party-vendors", name: "Core conversion to FIS IBS", detail: "October 2026 platform migration within the FIS ecosystem.", status: "Rolling out", sources: ["indb-q1call-2026", "indb-q2-2026"] },
    { useCase: "generative-agentic-ai", name: "Initial 'easy' AI use cases", detail: "First deployments to build organisational muscle memory.", status: "Announced", sources: ["indb-q1call-2026"] }
  ],
  numbers: [
    { label: "Q2 2026 net income / diluted EPS", value: "$81.8 million / $1.70", asOf: "2026-07-16", sources: ["indb-q2-2026"] },
    { label: "Core conversion cost estimate", value: "$4 million to $5 million", asOf: "2026-01-26", sources: ["indb-q1call-2026"] },
    { label: "Enterprise Bancorp acquisition", value: "$562 million", asOf: "2025-07-01", sources: ["ab-boston-2026"] },
    { label: "Total assets / assets under administration", value: "$25.0 billion / $9.5 billion", asOf: "2026-06-30", sources: ["indb-q2-2026"] }
  ],
  quotes: [
    { who: "Jeffrey Tengel", role: "Chief Executive Officer", date: "2026-04-17", quote: "This will allow us to make AI investments in those areas that have a meaningful payback and avoid the proverbial boiling the ocean.", sources: ["indb-q1call-2026"] },
    { who: "Jeffrey Tengel", role: "Chief Executive Officer", date: "2026-04-17", quote: "We have established a governance framework around our AI activities to ensure we stay within the guardrails of our moderate risk profile.", sources: ["indb-q1call-2026"] }
  ],
  regulatory: [
    { authority: "fdic", why: "Rockland Trust is a state nonmember bank; FDIC model-risk and third-party guidance govern the core conversion and any AI use cases.", docSlugs: ["fdic-fil-29-2023", "fdic-fil-15-2026"] },
    { authority: "cfpb", why: "Consumer lending and deposit products bring adverse-action and UDAAP duties to any automated decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "federal-reserve", why: "Holding-company oversight of acquisition integration and technology risk.", docSlugs: ["fed-sr-23-4"] }
  ],
  suggestions: [
    { title: "Governance before use cases is the examiner-friendly order", detail: "A steering committee that vets payback and risk before pilots is what FDIC guidance asks for; the test is whether it accelerates or blocks." },
    { title: "Do not stack AI on a core conversion", detail: "An October platform migration is the year's real operational risk; AI pilots should wait for the new core's data model." },
    { title: "Easy use cases should still be measured", detail: "Muscle-memory projects need baselines so the committee's 'meaningful payback' test has numbers." },
    { title: "The new core is the enabler", detail: "FIS IBS opens vendor AI options that Horizon did not; the 2027 roadmap should name them." }
  ],
  faq: [
    { q: "Does Rockland Trust use AI?", a: "Rockland Trust established an Office of Digital Innovation and an AI governance framework with a use-case steering committee in the first quarter of 2026 and plans to start with relatively easy use cases that show a meaningful payback. No AI vendor or production deployment has been disclosed." },
    { q: "What is Rockland Trust's core conversion?", a: "The bank is moving its core operating platform from FIS Horizon to FIS IBS, with the conversion scheduled for October 2026 at an expected cost of $4 million to $5 million. It follows the October 2025 systems conversion of Enterprise Bank, acquired on 1 July 2025 for $562 million." }
  ],
  sources: [
    { id: "indb-enterprise-2025", title: "Independent Bank Corp. Announces Completion of Enterprise Bancorp, Inc. Acquisition", publisher: "Rockland Trust", url: "https://www.rocklandtrust.com/independent-bank-corp-announces-completion-of-enterprise-bancorp-inc-aquisition-and-appointment-of-kenneth-s-ansin-and-joseph-c-lerner-as-directors", date: "2025-07-01" },
    { id: "ab-boston-2026", title: "This cash-rich Boston-area bank is on the lookout for deals", publisher: "American Banker", url: "https://www.americanbanker.com/news/this-cash-rich-boston-area-bank-is-on-the-lookout-for-deals", date: "2026-03-23" },
    { id: "indb-q1call-2026", title: "Independent Bank Corp. First Quarter 2026 Earnings Call", publisher: "Independent Bank Corp.", url: "https://indb.rocklandtrust.com/events-and-presentations", date: "2026-04-17" },
    { id: "indb-q2-2026", title: "Independent Bank Corp. Reports Second Quarter Net Income of $81.8 Million", publisher: "Independent Bank Corp.", url: "https://indb.rocklandtrust.com/news/news-details/2026/Independent-Bank-Corp--Reports-Second-Quarter-Net-Income-of-81-8-Million", date: "2026-07-16" }
  ],
  lastUpdated: "2026-09-10"
};
