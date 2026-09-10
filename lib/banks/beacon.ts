import type { Bank } from "@/lib/banks";

export const BEACON: Bank = {
  slug: "beacon",
  name: "Beacon Financial Corporation",
  shortName: "Beacon Bank",
  ticker: "BBT",
  hq: "Boston, MA",
  fedRank: 87,
  leadBank: "Beacon Bank & Trust",
  assetsUsdMillions: 22181,
  charter: "Massachusetts state member bank (Federal Reserve)",
  posture: "A one-year-old New England regional formed by the Berkshire Hills and Brookline merger of equals, through its core conversion and rebrand, now adding AI-enabled document classification and spreading to small-business and SBA lending through Baker Hill.",
  answerFirst:
    "Beacon Financial Corporation, the Boston holding company for Beacon Bank & Trust, did not exist until 1 September 2025, when Berkshire Hills Bancorp and Brookline Bancorp completed their merger of equals to create a roughly $24 billion bank with more than 145 branches across New England and New York; Brookline's Paul Perrault became CEO, the core system conversion was completed in February 2026, and the four legacy brands, Berkshire Bank, Brookline Bank, BankRI and PCSB Bank, debuted as Beacon Bank on 23 February 2026. Perrault called the launch 'a critical step forward in our long-term strategy' aimed at 'improved performance, better efficiency and expanded opportunities'. The merger's payoff arrived in the second quarter of 2026: net income of $64.4 million, or $0.77 per share, up from $0.55 in the first quarter, with merger and restructuring costs at zero, non-interest expense down $13.6 million, a core efficiency ratio of 54.26% that beat the original merger target, deposits up $194 million and a $0.3225 dividend, offset by loan run-off in commercial real estate and equipment finance and $14.3 million of charge-offs. The bank's first named AI capability came in June 2026 through an expanded partnership with Baker Hill: its UN/FY platform will run Beacon's small-business and SBA 7(a) lending, and the application experience 'will also incorporate ASK BKR, Baker Hill's AI-enabled tools that leverage document classification and automated spreading capabilities' to streamline credit analysis, which credit director Scott Gillanders framed as delivering experiences that are 'simple, accessible and available when and where our clients want to engage with us'. No internal AI programme, leader or budget has been disclosed. Beacon Bank & Trust is a Massachusetts state member bank supervised by the Federal Reserve.",
  keyPoints: [
    "Created 1 September 2025 by the Berkshire Hills and Brookline merger of equals; core conversion completed February 2026; Beacon Bank brand launched 23 February 2026.",
    "First named AI capability: Baker Hill's ASK BKR document classification and automated spreading inside the UN/FY small-business and SBA lending platform (June 2026).",
    "Q2 2026 net income $64.4 million ($0.77 per share); zero merger costs; core efficiency ratio 54.26%, better than the merger target.",
    "Loan balances fell $102 million on CRE and equipment-finance run-off; net charge-offs $14.3 million concentrated in a Boston office loan and rent-controlled multifamily.",
    "CEO Paul Perrault positions Beacon as 'a strong alternative for people who don't want to deal with a big bank'.",
    "No internal AI leader, programme or budget disclosed."
  ],
  leadership: [
    { name: "Paul A. Perrault", role: "Chief Executive Officer", sources: ["bbt-debut-2026", "bbt-q2call-2026"] },
    { name: "David Brunelle", role: "Chairman", sources: ["ab-beacon-2025"] },
    { name: "Scott Gillanders", role: "Credit Director, Government Guaranteed Lending", linkedin: "https://www.linkedin.com/in/scott-gillanders-76a07a7", sources: ["bbt-bakerhill-2026"] }
  ],
  timeline: [
    { date: "2025-08-07", title: "Merged company to be named Beacon", detail: "Berkshire Hills and Brookline settle on the Beacon Financial and Beacon Bank & Trust names.", sources: ["ab-beacon-2025"] },
    { date: "2025-09-01", title: "Merger of equals completed", detail: "About $24 billion of assets; 145-plus branches.", sources: ["bbt-debut-2026"] },
    { date: "2026-02-23", title: "Beacon Bank brand debuts after February core conversion", detail: "Four legacy brands unified.", sources: ["bbt-debut-2026", "bbt-q1-2026"] },
    { date: "2026-04-29", title: "First-quarter 2026 results", detail: "Net income $46.2 million; core conversion completed; $50 million buyback authorised.", sources: ["bbt-q1-2026"] },
    { date: "2026-06-16", title: "Baker Hill partnership expanded with AI-enabled lending tools", detail: "UN/FY platform with ASK BKR document classification and automated spreading for SBA lending.", sources: ["bbt-bakerhill-2026"] },
    { date: "2026-07-29", title: "Second-quarter 2026 results", detail: "Net income $64.4 million; EPS $0.77; core efficiency ratio 54.26%.", sources: ["bbt-q2-2026", "bbt-q2call-2026"] }
  ],
  useCases: [
    { useCase: "credit-underwriting", name: "AI-enabled document classification and spreading (Baker Hill ASK BKR)", detail: "Streamlines credit analysis in small-business and SBA 7(a) lending.", status: "Rolling out", sources: ["bbt-bakerhill-2026"] },
    { useCase: "third-party-vendors", name: "Core system conversion and brand unification", detail: "Completed February 2026 across four legacy banks.", status: "In production", sources: ["bbt-q1-2026", "bbt-debut-2026"] },
    { useCase: "generative-agentic-ai", name: "Digital small-business lending experience", detail: "Borrowers begin, continue and complete applications digitally while connected to lending teams.", status: "Rolling out", sources: ["bbt-bakerhill-2026"] }
  ],
  numbers: [
    { label: "Q2 2026 net income / diluted EPS", value: "$64.4 million / $0.77", asOf: "2026-07-29", sources: ["bbt-q2call-2026"] },
    { label: "Core efficiency ratio, Q2 2026", value: "54.26%", asOf: "2026-07-29", sources: ["bbt-q2call-2026"] },
    { label: "Assets at merger close / branches", value: "≈ $24 billion / 145+", asOf: "2025-09-01", sources: ["bbt-debut-2026"] },
    { label: "SBA 7(a) financing ceiling", value: "$5 million", asOf: "2026-06-16", sources: ["bbt-bakerhill-2026"] }
  ],
  quotes: [
    { who: "Paul A. Perrault", role: "Chief Executive Officer", date: "2026-02-23", quote: "Launching Beacon Bank represents a significant achievement for our organization and a critical step forward in our long-term strategy.", sources: ["bbt-debut-2026"] },
    { who: "Scott Gillanders", role: "Credit Director, Government Guaranteed Lending", date: "2026-06-16", quote: "As customer expectations continue to evolve, we are focused on delivering banking experiences that are simple, accessible and available when and where our clients want to engage with us.", sources: ["bbt-bakerhill-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "Beacon Bank & Trust is a state member bank; SR 11-7 and SR 23-4 govern the AI-enabled spreading tools and the Baker Hill dependency.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Small-business credit decisions carry ECOA adverse-action duties even when automation only classifies documents.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "ny-dfs", why: "New York branches from the legacy PCSB and Berkshire footprint bring DFS cyber and AI-risk expectations.", docSlugs: ["ny-dfs-23-nycrr-part-500", "ny-dfs-industry-letter-2024-10-16-ai-cyber-risks"] }
  ],
  suggestions: [
    { title: "Vendor AI is the first step, and the governance test", detail: "Document classification and spreading are low-risk uses, but they feed credit decisions; validation of the vendor's models belongs in the SR 11-7 inventory now." },
    { title: "Post-conversion is the moment to set an AI stance", detail: "With one core, one brand and zero merger costs, Beacon can state its AI priorities without the integration caveat every peer uses." },
    { title: "Credit run-off is where analytics pay", detail: "Office, multifamily and equipment-finance losses argue for portfolio surveillance models before customer-facing AI." },
    { title: "Name an owner", detail: "The SBA tools have a business sponsor; an enterprise AI owner would signal that adoption goes beyond one product line." }
  ],
  faq: [
    { q: "Does Beacon Bank use AI?", a: "Beacon Bank's first named AI capability is Baker Hill's ASK BKR document classification and automated spreading, being introduced in its small-business and SBA lending platform under a June 2026 partnership expansion. The bank has not disclosed an internal AI programme, leader or budget." },
    { q: "How was Beacon Bank formed?", a: "Berkshire Hills Bancorp and Brookline Bancorp completed a merger of equals on 1 September 2025, creating Beacon Financial Corporation with about $24 billion of assets. The core conversion finished in February 2026 and the Berkshire Bank, Brookline Bank, BankRI and PCSB Bank brands became Beacon Bank on 23 February 2026, led by CEO Paul Perrault." }
  ],
  sources: [
    { id: "ab-beacon-2025", title: "Two merging Boston banks to rebrand under new Beacon name", publisher: "American Banker", url: "https://americanbanker.com/news/two-merging-boston-banks-to-rebrand-under-new-beacon-name", date: "2025-08-07" },
    { id: "bbt-debut-2026", title: "Beacon Financial Corporation Announces Debut of Beacon Bank", publisher: "Beacon Financial (PR Newswire)", url: "https://prnewswire.com/news-releases/beacon-financial-corporation-announces-debut-of-beacon-bank-302694053.html", date: "2026-02-23" },
    { id: "bbt-q1-2026", title: "Beacon Financial Corporation Announces First Quarter Results", publisher: "Beacon Financial (GlobeNewswire)", url: "https://globenewswire.com/news-release/2026/04/29/3284291/0/en/Beacon-Financial-Corporation-Announces-First-Quarter-Results.html", date: "2026-04-29" },
    { id: "bbt-bakerhill-2026", title: "Beacon Bank and Baker Hill Expand Long-Standing Partnership to Enhance Digital Small Business and SBA Lending Experiences", publisher: "Baker Hill (PR Newswire)", url: "https://prnewswire.com/news-releases/beacon-bank-and-baker-hill-expand-long-standing-partnership-to-enhance-digital-small-business-and-sba-lending-experiences-302802028.html", date: "2026-06-16" },
    { id: "bbt-q2-2026", title: "Beacon Financial Corporation Announces Second Quarter Results", publisher: "Beacon Financial (GlobeNewswire)", url: "https://globenewswire.com/news-release/2026/07/29/3335554/0/en/Beacon-Financial-Corporation-Announces-Second-Quarter-Results.html", date: "2026-07-29" },
    { id: "bbt-q2call-2026", title: "Beacon Financial Corp (BBT) Q2 2026 Earnings Call Highlights", publisher: "GuruFocus (Yahoo Finance)", url: "https://finance.yahoo.com/news/beacon-financial-corp-bbt-q2-010233049.html", date: "2026-08-07" }
  ],
  lastUpdated: "2026-09-10"
};
