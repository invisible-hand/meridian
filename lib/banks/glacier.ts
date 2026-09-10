import type { Bank } from "@/lib/banks";

export const GLACIER: Bank = {
  slug: "glacier",
  name: "Glacier Bancorp",
  shortName: "Glacier",
  ticker: "GBCI",
  hq: "Kalispell, MT",
  fedRank: 64,
  leadBank: "Glacier Bank",
  assetsUsdMillions: 31717,
  charter: "Montana state nonmember bank (FDIC)",
  posture: "A serial acquirer that runs 18 locally branded divisions on one Montana charter, posting record earnings after two 2025 deals, with no disclosed AI programme and a customer-facing security stack built on authenticator apps rather than analytics.",
  answerFirst:
    "Glacier Bancorp, the Kalispell, Montana holding company for Glacier Bank, is the most acquisitive bank in the rank-51-to-100 group and one of the least communicative about AI. It has more than tripled its assets over a decade through 26 deals since 2000, each acquired bank kept as a locally branded division on the single Glacier Bank charter. In January 2025 it agreed to pay $245.4 million in stock for Bank of Idaho, its 12th announced bank deal in ten years; in June 2025 it agreed to pay $476 million in stock for Guaranty Bancshares in Mount Pleasant, Texas, its entry into that state and its 18th division, closing on 1 October 2025 with Guaranty's chairman Ty Abston staying as division CEO. Second-quarter 2026 net income was a record $97.9 million, or $0.75 per diluted share, up 85% from a year earlier, with net interest income of $276 million, a 3.90% tax-equivalent margin that had expanded for a tenth straight quarter and the Guaranty systems conversion completed. Its public technology footprint is customer authentication and cash management: quick-reference guides for the GAuth authenticator app, voice and text one-time codes, ACH and wire user guides and QuickBooks conversion instructions. Neither the 2025 annual report nor the earnings releases discuss AI, machine learning, an AI leader, a vendor or a budget, and president and CEO Randy Chesler frames growth entirely as geographic expansion into fast-growing Mountain West and Southwest markets. Glacier Bank is a Montana state nonmember bank supervised by the FDIC, so any AI it introduces in credit or fraud would be governed by the FDIC's model-risk and third-party guidance. Treat this as a thin record for a bank whose strategy is acquisition, not automation.",
  keyPoints: [
    "No AI programme, leader, vendor, budget or roadmap disclosed in releases, the 2025 annual report or earnings materials.",
    "Guaranty Bancshares (Texas) acquired for $476 million in stock, closed 1 October 2025 as the 18th division; systems conversion completed in Q2 2026.",
    "Bank of Idaho acquired for $245.4 million in stock (announced January 2025), the 12th bank deal in ten years and 26th since 2000.",
    "Record Q2 2026 net income of $97.9 million ($0.75 per diluted share), up 85% year on year; net interest margin 3.90%, up for a tenth straight quarter.",
    "Customer technology disclosures are authentication and cash-management guides: GAuth authenticator, voice and text codes, ACH and wire, QuickBooks.",
    "Operating model: one Montana charter, 18 locally branded divisions across the Mountain West, Southwest and Pacific Northwest."
  ],
  leadership: [
    { name: "Randy Chesler", role: "President and CEO", linkedin: "https://www.linkedin.com/in/randallchesler", sources: ["ab-guaranty-2025", "ab-idaho-2025"] },
    { name: "Ty Abston", role: "CEO, Guaranty Bank & Trust division", sources: ["ab-guaranty-2025", "gbci-guaranty-close-2025"] }
  ],
  timeline: [
    { date: "2024-02-05", title: "Authenticator-app login guides published", detail: "GAuth plug-in and mobile or landline one-time codes for online banking.", sources: ["gbci-gauth-2024"] },
    { date: "2025-01-14", title: "Bank of Idaho acquisition announced", detail: "$245.4 million in stock; 15 branches, $1.1 billion of deposits.", sources: ["ab-idaho-2025"] },
    { date: "2025-06-25", title: "Guaranty Bancshares deal to enter Texas", detail: "$476 million in stock; Guaranty to operate as the 18th division.", sources: ["ab-guaranty-2025"] },
    { date: "2025-07-07", title: "Cash Management ACH and Wire user guide", detail: "Treasury tooling documentation for business clients.", sources: ["gbci-cash-2025"] },
    { date: "2025-10-01", title: "Guaranty acquisition completed", detail: "33 locations across 26 Texas communities join Glacier Bank.", sources: ["gbci-guaranty-close-2025"] },
    { date: "2026-03-12", title: "2025 annual report filed", detail: "No AI, machine-learning or data-strategy discussion.", sources: ["gbci-ar-2026"] },
    { date: "2026-07-23", title: "Record second-quarter 2026 results", detail: "Net income $97.9 million; EPS $0.75; margin 3.90%; Guaranty conversion complete.", sources: ["gbci-q2-2026"] }
  ],
  useCases: [
    { useCase: "cybersecurity", name: "Multi-factor authentication for digital banking", detail: "GAuth authenticator app plus voice and text one-time codes.", status: "In production", sources: ["gbci-gauth-2024"] },
    { useCase: "third-party-vendors", name: "Acquisition systems conversions", detail: "Bank of Idaho and Guaranty converted onto Glacier Bank platforms within a year of closing.", status: "In production", sources: ["gbci-q2-2026", "gbci-guaranty-close-2025"] },
    { useCase: "governance-general", name: "No disclosed AI deployment", detail: "Annual report and earnings materials silent on AI.", status: "Announced", sources: ["gbci-ar-2026"] }
  ],
  numbers: [
    { label: "Second-quarter 2026 net income / diluted EPS", value: "$97.9 million (record) / $0.75", asOf: "2026-07-23", sources: ["gbci-q2-2026"] },
    { label: "Net interest margin, Q2 2026", value: "3.90% (tenth straight quarterly expansion)", asOf: "2026-07-23", sources: ["gbci-q2-2026"] },
    { label: "Guaranty Bancshares acquisition", value: "$476 million in stock", asOf: "2025-06-25", sources: ["ab-guaranty-2025"] },
    { label: "Bank of Idaho acquisition", value: "$245.4 million in stock", asOf: "2025-01-14", sources: ["ab-idaho-2025"] },
    { label: "Bank deals since 2000", value: "26", asOf: "2025-01-14", sources: ["ab-idaho-2025"] }
  ],
  quotes: [
    { who: "Randy Chesler", role: "President and CEO", date: "2025-06-25", quote: "Further expand our presence in the Southwest.", sources: ["ab-guaranty-2025"] }
  ],
  regulatory: [
    { authority: "fdic", why: "Glacier Bank is a state nonmember bank; FDIC model-risk and third-party guidance would govern any AI in lending or fraud across the divisions.", docSlugs: ["fdic-fil-29-2023", "fdic-fil-15-2026"] },
    { authority: "federal-reserve", why: "Holding-company supervision of the acquisition programme and consolidated risk management.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Consumer lending across 18 divisions brings adverse-action and UDAAP duties to any automated decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] }
  ],
  suggestions: [
    { title: "Conversions are the proven capability", detail: "Two acquisitions converted inside a year shows integration discipline; the same team could stand up a shared AI layer across 18 divisions, but nothing has been said." },
    { title: "One charter, many brands is an AI advantage waiting", detail: "A single data estate behind 18 local brands is unusual at this size; fraud and credit models trained once could serve every division." },
    { title: "Silence has not cost anything yet", detail: "Record earnings and margin expansion mean investors are not pricing AI disclosure; that changes as peers report efficiency gains." },
    { title: "Any first move faces the FDIC bar", detail: "As a nonmember bank Glacier's first AI deployment will be judged under FDIC third-party and model-risk guidance, so governance should precede pilots." }
  ],
  faq: [
    { q: "Does Glacier Bank use AI?", a: "Glacier Bancorp has not disclosed any AI programme, leader, vendor, budget or use case. Its 2025 annual report and 2026 earnings materials do not mention AI; its public technology disclosures cover authentication apps and cash-management tools." },
    { q: "What acquisitions has Glacier made recently?", a: "It bought Bank of Idaho for $245.4 million in stock (announced January 2025) and Guaranty Bancshares of Mount Pleasant, Texas for $476 million in stock (closed 1 October 2025), its 18th division and first in Texas. The Guaranty systems conversion was completed in the second quarter of 2026." }
  ],
  sources: [
    { id: "gbci-gauth-2024", title: "Authentication Quick Reference Guide", publisher: "Glacier Bank", url: "https://glacierbank.com/assets/files/J4AkeXGA", date: "2024-02-05" },
    { id: "ab-idaho-2025", title: "Glacier in Montana takes prolific acquisition strategy to Idaho", publisher: "American Banker", url: "https://americanbanker.com/news/glacier-in-montana-takes-prolific-acquisition-strategy-to-idaho", date: "2025-01-14" },
    { id: "ab-guaranty-2025", title: "Glacier Bancorp to acquire Texas bank in $476 million deal", publisher: "American Banker", url: "https://americanbanker.com/news/glacier-bancorp-to-acquire-texas-bank-in-476-million-deal", date: "2025-06-25" },
    { id: "gbci-cash-2025", title: "Cash Management ACH Wire User Guide", publisher: "Glacier Bank", url: "https://glacierbank.com/assets/files/eM4lMQ3O", date: "2025-07-07" },
    { id: "gbci-guaranty-close-2025", title: "Glacier Bancorp Completes Acquisition of Guaranty Bancshares, Inc. in Mount Pleasant, Texas", publisher: "Glacier Bancorp (GlobeNewswire)", url: "https://globenewswire.com/news-release/2025/10/01/3159604/21011/en/Glacier-Bancorp-Completes-Acquisition-of-Guaranty-Bancshares-Inc-in-Mount-Pleasant-Texas.html", date: "2025-10-01" },
    { id: "gbci-ar-2026", title: "Glacier Bancorp 2025 Annual Report", publisher: "SEC EDGAR", url: "https://sec.gov/Archives/edgar/data/868671/000086867126000041/ars.pdf", date: "2026-03-12" },
    { id: "gbci-q2-2026", title: "Glacier Bancorp, Inc. Announces Results for the Quarter and Period Ended June 30, 2026", publisher: "Glacier Bancorp (GlobeNewswire)", url: "https://globenewswire.com/news-release/2026/07/23/3332613/0/en/Glacier-Bancorp-Inc-Announces-Results-for-the-Quarter-and-Period-Ended-June-30-2026.html", date: "2026-07-23" }
  ],
  lastUpdated: "2026-09-10"
};
