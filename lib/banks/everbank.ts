import type { Bank } from "@/lib/banks";

export const EVERBANK: Bank = {
  slug: "everbank",
  name: "EverBank Financial Corp",
  shortName: "EverBank",
  ticker: "EVBK (post-merger)",
  hq: "Jacksonville, FL",
  fedRank: 47,
  leadBank: "EverBank, National Association",
  assetsUsdMillions: 47233,
  charter: "National bank (OCC); private-equity owned since 2023, merging with WaFd in a $3.9 billion reverse merger announced 7 September 2026",
  posture: "An online-banking pioneer under private-equity ownership that has said almost nothing public about AI while rebuilding its branch and commercial platforms and, in September 2026, agreeing a $3.9 billion reverse merger with WaFd.",
  answerFirst:
    "EverBank, the Jacksonville-based national bank that describes itself as 'a pioneer in online banking', is a thin AI record among the 50 largest US banks. Bought from TIAA in 2023 by a group of five private-equity firms (Stone Point, Warburg Pincus, Reverence, Sixth Street and Bayview), it spent 2025 and 2026 buying and converting Sterling Bank & Trust for a California and New York branch network, launching corporate banking, fund finance and specialty deposit divisions, and hiring Prateek Sangal, a former JPMorgan, US Bank and Barclays digital executive, as head of digital and customer platforms to lead omnichannel and customer-experience transformation. It has not disclosed an AI strategy, AI leader, AI spending or generative-AI deployments, and its public materials on the subject are limited to consumer savings content. The Wall Street Journal reported in August 2026 that the owners had clashed over strategy and put the bank up for sale after a months-long process; on 7 September 2026 EverBank and Seattle-based WaFd announced a $3.9 billion all-stock reverse merger creating a $75 billion bank that will keep the EverBank name, national charter and Nasdaq listing under the ticker EVBK, with closing expected in the first quarter of 2027. Executives told analysts the deal diversifies EverBank's funding away from higher-cost online deposits and accelerates WaFd's shift from thrift to commercial bank; the combined company projects $788 million of 2027 net income. For AI-in-banking purposes EverBank matters as a systems-integration story: an online bank with a fast-growing commercial franchise, a mid-integration branch platform and a merger that will fold a $27.6 billion thrift into an OCC-supervised national bank.",
  keyPoints: [
    "No disclosed AI strategy, leader, budget or generative-AI deployment as of September 2026; EverBank's public AI-related content is consumer education.",
    "Digital leadership: Prateek Sangal, head of digital and customer platforms, leads omnichannel and customer-experience transformation (profiled April 2026).",
    "Platform building: Sterling Bank & Trust acquired April 2025 and converted September 2025 (27 California branches plus New York); corporate banking division launched December 2025.",
    "Ownership in flux: five private-equity owners sought an exit (WSJ, August 2026); $3.9 billion reverse merger with WaFd announced 7 September 2026, creating a $75 billion bank.",
    "Funding profile is the strategic driver: executives say the merger diversifies away from higher-cost online deposits, the classic constraint of digital-only banks.",
    "Post-merger the bank stays a national bank under the OCC, keeps the EverBank name and lists on Nasdaq as EVBK; closing expected Q1 2027."
  ],
  leadership: [
    { name: "Greg Seibly", role: "Chief Executive Officer, EverBank Financial Corp", sources: ["ft-merger-2026", "everbank-sterling-2025"], linkedin: "https://www.linkedin.com/in/greg-seibly-89318b7/" },
    { name: "Prateek Sangal", role: "Head of Digital and Customer Platforms", sources: ["ab-sangal-2026"], linkedin: "https://www.linkedin.com/in/prateeksangal/" },
    { name: "Aric Graham", role: "Head of Corporate Banking", sources: ["everbank-corporate-2025"], linkedin: "https://www.linkedin.com/in/aric-graham-681b0a6/" }
  ],
  timeline: [
    { date: "2025-04-01", title: "Sterling Bank & Trust acquisition completed", detail: "Expands EverBank's presence in California.", sources: ["everbank-sterling-2025"] },
    { date: "2025-09-08", title: "Sterling conversion and rebrand completed", detail: "27 California financial centres and one in Queens; four more planned.", sources: ["everbank-sterling-2025"] },
    { date: "2025-12-11", title: "Corporate Banking division launched", detail: "Middle-market and large-corporate lending, deposits and treasury from Nevada, New York and California.", sources: ["everbank-corporate-2025"] },
    { date: "2026-04-24", title: "Head of digital and customer platforms profiled", detail: "Sangal leads omnichannel strategy and customer-experience transformation.", sources: ["ab-sangal-2026"] },
    { date: "2026-08-20", title: "Private-equity owners seek an exit", detail: "Bank up for sale after owners clashed over strategy; IPO a fallback.", sources: ["wsj-exit-2026"] },
    { date: "2026-09-07", title: "$3.9 billion reverse merger with WaFd announced", detail: "Combined $75 billion bank keeps EverBank's name and national charter; ticker EVBK.", sources: ["ft-merger-2026"] },
    { date: "2026-09-08", title: "Executives explain the deal", detail: "Diversifies EverBank's online-deposit funding; $788 million pro forma 2027 net income; close Q1 2027.", sources: ["ab-merger-2026", "pymnts-merger-2026"] }
  ],
  useCases: [
    { useCase: "governance-general", name: "Omnichannel and customer-platform transformation", detail: "Digital, voice, contact-centre and branch context sharing under the head of digital and customer platforms.", status: "Rolling out", sources: ["ab-sangal-2026"] },
    { useCase: "third-party-vendors", name: "Merger and platform integration", detail: "WaFd Bank to merge into EverBank, N.A.; Sterling conversion completed in 2025.", status: "Announced", sources: ["ft-merger-2026", "everbank-sterling-2025"] }
  ],
  numbers: [
    { label: "Total assets (holding company)", value: "$46.7 billion", asOf: "2026-09-08", sources: ["ab-merger-2026"] },
    { label: "WaFd reverse merger value", value: "$3.9 billion (all stock)", asOf: "2026-09-07", sources: ["ft-merger-2026"] },
    { label: "Combined bank assets", value: "≈ $75 billion", asOf: "2026-09-08", sources: ["ab-merger-2026"] },
    { label: "Pro forma 2027 net income", value: "$788 million", asOf: "2026-09-08", sources: ["ab-merger-2026"] },
    { label: "California financial centres after Sterling", value: "27 (+1 New York)", asOf: "2025-09-08", sources: ["everbank-sterling-2025"] }
  ],
  quotes: [
    { who: "Greg Seibly", role: "Chief Executive Officer", date: "2026-09-07", quote: "Since 2023, EverBank has been on a journey to transform itself into a high-performing bank sharply focused on enabling our consumer and business clients to make the most of their money.", sources: ["ft-merger-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "EverBank, N.A. is and will remain the OCC-chartered surviving bank; merger approval and any post-merger AI models sit with the OCC.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "federal-reserve", why: "WaFd, Inc. continues as the financial holding company; third-party and model-risk guidance apply across the combined platforms.", docSlugs: ["fed-sr-23-4", "fed-sr-11-7"] },
    { authority: "cfpb", why: "Online deposit gathering and any future AI-driven servicing for consumers fall under UDAAP and the chatbot circular.", docSlugs: ["cfpb-chatbots-in-consumer-finance-2023"] }
  ],
  suggestions: [
    { title: "The merger is where AI decisions will be made", detail: "Two cores, two digital stacks and a thrift-to-commercial transition create the integration budget in which AI tooling either gets funded or deferred; watch the first combined technology plan." },
    { title: "Online-deposit funding is the AI-relevant constraint", detail: "Executives named higher-cost digital deposits as the problem the merger solves; AI-driven pricing and retention tools, as SoFi uses, are the alternative route incumbents will compare it to." },
    { title: "A digital head without a stated AI mandate is a gap", detail: "Peers of this size have named AI leads; naming one in the merged bank would signal that omnichannel transformation includes generative AI." },
    { title: "Thin record, not a negative one", detail: "Absence of AI disclosure during a sale process is expected; the post-close investor materials are the first place to expect substantive AI claims." }
  ],
  faq: [
    { q: "Does EverBank use AI?", a: "EverBank has not disclosed an AI strategy, AI leader, AI budget or generative-AI deployments as of September 2026. Its public technology story centres on omnichannel and customer-experience transformation under its head of digital and customer platforms and on integrating acquisitions, most recently the pending reverse merger with WaFd." },
    { q: "What is the EverBank and WaFd merger?", a: "On 7 September 2026 EverBank Financial Corp and WaFd, Inc. announced a $3.9 billion all-stock reverse merger. WaFd, Inc. survives as the holding company but takes the EverBank name and the Nasdaq ticker EVBK, WaFd Bank merges into EverBank, N.A. under the OCC, and the combined bank has about $75 billion of assets. Closing is expected in the first quarter of 2027." }
  ],
  sources: [
    { id: "ab-merger-2026", title: "EverBank, WaFd say merger would address each firm's issues", publisher: "American Banker", url: "https://www.americanbanker.com/news/everbank-wafd-say-merger-would-address-each-firms-issues", date: "2026-09-08" },
    { id: "ab-sangal-2026", title: "Prateek Sangal, Head of Digital & Customer Platforms, EverBank (Digital Banking speaker profile)", publisher: "American Banker", url: "https://digital-banking.americanbanker.com/profile/prateek-sangal", date: "2026-04-24" },
    { id: "everbank-corporate-2025", title: "EverBank Introduces Corporate Banking Division to Expand Commercial Capabilities", publisher: "EverBank", url: "https://everbank.com/about/news/12-11-25/everbank-corporate-banking-launch", date: "2025-12-11" },
    { id: "everbank-sterling-2025", title: "EverBank Completes Conversion and Rebrand of Sterling Bank & Trust", publisher: "EverBank", url: "https://everbank.com/about/news/09-08-25/everbank-completes-conversion-sterling-bank", date: "2025-09-08" },
    { id: "ft-merger-2026", title: "WaFd, Inc. Enters into a $3.9 Billion Reverse Merger Transaction with EverBank Financial Corp", publisher: "PR Newswire via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202609071700PR_NEWS_USPRX____NY41981-1", date: "2026-09-07" },
    { id: "pymnts-merger-2026", title: "EverBank-WaFd Deal Bridges Banking's Digital and Branch Divide", publisher: "PYMNTS", url: "https://www.pymnts.com/news/banking/2026/everbank-wafd-deal-bridges-banking-digital-branch-divide/", date: "2026-09-08" },
    { id: "wsj-exit-2026", title: "Private-Equity Firms Look for an Exit Three Years After Buying EverBank", publisher: "The Wall Street Journal", url: "https://www.wsj.com/finance/banking/private-equity-firms-look-for-an-exit-three-years-after-buying-everbank-d9cfe378", date: "2026-08-20" }
  ],
  lastUpdated: "2026-09-10"
};
