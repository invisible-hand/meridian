import type { Bank } from "@/lib/banks";

export const PINNACLE: Bank = {
  slug: "pinnacle",
  name: "Pinnacle Financial Partners",
  shortName: "Pinnacle",
  ticker: "PNFP",
  hq: "Nashville, TN (Atlanta co-headquarters)",
  fedRank: 27,
  leadBank: "Pinnacle Bank",
  assetsUsdMillions: 122628,
  charter: "Tennessee state member bank (Federal Reserve)",
  posture: "A relationship bank that has just doubled through a merger of equals, with a head of AI and an AI policy but no public AI numbers — its stated growth engine is hiring bankers, not deploying agents.",
  platform: {
    name: "A head of AI inside a banker-led model",
    detail: "Pinnacle has a named head of AI, Kevin Johnson, a 20-year veteran who the bank says pioneered its adoption of generative-AI services and shaped its AI policy for 'ethical and effective deployment'. Beyond that the public record is thin by design: the merged bank's strategy, as stated on earnings calls, is to recruit 225–250 revenue-producing bankers in 2026 and 250–275 in 2027, and its client-facing AI content is guidance to treasury clients on where automation helps and where 'human judgment still matters'.",
    sources: ["ab-johnson-2026", "ab-hires-2026", "pnfp-ai-treasury-2026"]
  },
  answerFirst:
    "Pinnacle Financial Partners became one of the largest banks in the Southeast on 1 January 2026, when its $8.6 billion merger of equals with Synovus closed, creating a company with about 8,500 team members and, at the lead-bank level, roughly $123 billion in assets. Its AI disclosure is minimal. The bank has a head of AI, Kevin Johnson, credited with pioneering its adoption of generative-AI services and shaping its AI policy, and its chief risk officer, Shellie Creson, speaks publicly about 'AI-enabled operating models' as part of the risk environment. What the bank actually tells investors about is people: CEO Kevin Blair said in April 2026 that the company had hired a net 50 revenue-producing bankers in the first quarter, that 37 more had accepted by mid-April, and that it still expected 225–250 in 2026 and 250–275 in 2027; he called the merger 'a catalyst for growth rather than a distraction'. Client-facing AI content is cautious: a 2026 guide for treasury clients says AI can take routine work off finance teams and make data easier to query, but that 'fraudsters have access to AI, too' and human judgment still matters. The bank's digital-experience lead has described 'top of wallet' strategy in terms of trust, spending advice and fraud alerts rather than models. For a $120 billion bank, that is an unusually quiet AI record; the systems-integration work from the merger, which the Federal Reserve approved in November 2025, is where the technology capacity is going in 2026.",
  keyPoints: [
    "A head of AI without published AI metrics: Kevin Johnson, a 20-year Pinnacle technology leader, is credited with the bank's adoption of generative-AI services and its AI policy; no agent counts, budgets or adoption figures have been disclosed.",
    "Growth strategy is hiring, not automation: net 50 revenue-producing bankers in Q1 2026, 37 more by 17 April, targets of 225–250 in 2026 and 250–275 in 2027.",
    "Merger of equals with Synovus: $8.6 billion, announced July 2025, Fed-approved November 2025, closed 1 January 2026; Terry Turner is chair, Kevin Blair CEO, Jamie Gregory CFO, Rob McCabe chief banking officer.",
    "Risk framing: the CRO describes the environment as one of 'rapid regulatory change, AI-enabled operating models, and accelerating digital and on-chain finance'.",
    "Client guidance is the AI voice: treasury-management content on automation, data querying and AI-enabled fraud, with human judgment kept explicit.",
    "Recognition rather than technology: 50 Coalition Greenwich Best Bank awards across the two legacy banks and a tenth straight year on Fortune's Best Companies to Work For."
  ],
  leadership: [
    { name: "Kevin Blair", role: "President and CEO (ex-Synovus CEO)", sources: ["ab-hires-2026", "reuters-leadership-2025"], linkedin: "https://www.linkedin.com/in/kevin-blair-849a767/" },
    { name: "Terry Turner", role: "Chairman; founding CEO of Pinnacle", sources: ["bankingdive-csuite-2025", "bankingdive-not-truist-2025"] },
    { name: "Kevin Johnson", role: "Head of AI", sources: ["ab-johnson-2026"], linkedin: "https://www.linkedin.com/in/k3vindjohnson/" },
    { name: "Shellie Creson", role: "Chief Risk Officer", sources: ["ab-creson-2026"] },
    { name: "Jamie Gregory", role: "Chief Financial Officer", sources: ["reuters-leadership-2025"] },
    { name: "Jennifer Smith Brittain", role: "Senior Director, Experience Strategy and Digital Experience", sources: ["ab-wallet-2026"] }
  ],
  timeline: [
    { date: "2025-07-24", title: "Merger of equals with Synovus announced", detail: "An $8.6 billion all-stock deal creating a Southeast bank with more than $115 billion in combined assets.", sources: ["reuters-merger-2025", "wsj-merger-2025"] },
    { date: "2025-08-21", title: "Leadership team named", detail: "Jamie Gregory as CFO and Rob McCabe as chief banking officer of the combined bank.", sources: ["reuters-leadership-2025", "bankingdive-csuite-2025"] },
    { date: "2025-09-11", title: "'Not Truist 2.0'", detail: "Pinnacle's CEO on why this merger of equals will avoid the BB&T–SunTrust experience.", sources: ["bankingdive-not-truist-2025"] },
    { date: "2025-11-25", title: "Federal Reserve approves the merger", detail: "Pinnacle Bank and Synovus Bank cleared to combine.", sources: ["bankingdive-fed-2025"] },
    { date: "2026-01-01", title: "Merger closes", detail: "The combined company begins its first full quarter with about 8,500 team members.", sources: ["ft-q1-2026", "pnfp-q1-2026"] },
    { date: "2026-02-11", title: "50 Coalition Greenwich Best Bank awards", detail: "32 earned by legacy Pinnacle and 18 by legacy Synovus.", sources: ["pnfp-greenwich-2026"] },
    { date: "2026-04-01", title: "Tenth straight year on Fortune's Best Companies list", detail: "Ranked No. 12.", sources: ["ft-bestco-2026"] },
    { date: "2026-04-21", title: "Head of AI profiled", detail: "Kevin Johnson credited with pioneering gen-AI adoption and shaping the bank's AI policy.", sources: ["ab-johnson-2026"] },
    { date: "2026-04-23", title: "Net 50 bankers hired in the first quarter", detail: "The CEO says the merger 'has not changed' the recruiting model; 225–250 hires targeted for 2026.", sources: ["ab-hires-2026", "pnfp-q1-2026"] },
    { date: "2026-05-05", title: "'Top of wallet' comes down to trust", detail: "The bank's digital-experience lead on spending advice and fraud alerts as the basis for card primacy.", sources: ["ab-wallet-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Generative-AI services for employees", detail: "Adoption led by the head of AI under a firm AI policy; scope not disclosed.", status: "In production", sources: ["ab-johnson-2026"] },
    { useCase: "governance-general", name: "Firm AI policy", detail: "An ethics-and-effectiveness policy for AI deployment across the business.", status: "In production", sources: ["ab-johnson-2026"] },
    { useCase: "fraud", name: "AI-enabled fraud awareness for treasury clients", detail: "Guidance that fraudsters use AI too, with human review kept in payment workflows.", status: "In production", sources: ["pnfp-ai-treasury-2026"] },
    { useCase: "customer-chatbots", name: "Digital-wallet primacy through advice and alerts", detail: "Spending advice and fraud alerts as the basis for card use in digital wallets.", status: "In production", sources: ["ab-wallet-2026"] }
  ],
  numbers: [
    { label: "Revenue-producing bankers hired, net, Q1 2026", value: "50 (37 more by 17 April)", asOf: "2026-04-23", sources: ["ab-hires-2026"] },
    { label: "Hiring targets", value: "225–250 in 2026; 250–275 in 2027", asOf: "2026-04-23", sources: ["ab-hires-2026"] },
    { label: "Merger value / combined assets at announcement", value: "$8.6 billion / $115 billion+", asOf: "2025-07-24", sources: ["reuters-merger-2025"] },
    { label: "Team members", value: "≈ 8,500", asOf: "2026-04-22", sources: ["pnfp-q1-2026"] }
  ],
  quotes: [
    { who: "Kevin Blair", role: "President and CEO", date: "2026-04-23", quote: "Others have said this merger would be a huge opportunity to poach Pinnacle team members. That just hasn't happened.", sources: ["ab-hires-2026"] },
    { who: "Jennifer Smith Brittain", role: "Senior Director, Experience Strategy and Digital Experience", date: "2026-05-05", quote: "Top of wallet strategies are really important. It really comes down to who they trust.", sources: ["ab-wallet-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "Pinnacle Bank is a Tennessee state member bank; the Fed approved the Synovus merger and supervises the combined holding company's model risk.", docSlugs: ["fed-sr-26-2", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Consumer cards, digital-wallet services and any AI in consumer lending sit under UDAAP and ECOA.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "fincen", why: "AI-enabled fraud and payments controls for treasury clients fall inside the AML/CFT program rule.", docSlugs: ["fincen-aml-cft-program-nprm-2026"] }
  ],
  suggestions: [
    { title: "The merger integration is the AI project", detail: "Combining two core stacks in 2026 consumes the capacity other banks are spending on agents. Expect AI announcements to follow the systems conversion, not precede it." },
    { title: "A head of AI with no public metrics is a disclosure gap, not necessarily a capability gap", detail: "Pinnacle has the role and the policy; publishing even adoption figures would let investors compare it with peers now reporting agent counts." },
    { title: "Hiring bankers as the growth model sets up an AI question", detail: "Every peer is describing AI as the way to grow without adding headcount. Pinnacle's opposite bet — 500 bankers over two years — will be judged against that narrative." },
    { title: "Fraud is the natural first AI story", detail: "The bank already tells treasury clients that fraudsters use AI; its own AI-enabled fraud defences would be the least controversial thing to disclose next." }
  ],
  faq: [
    { q: "Does Pinnacle Financial Partners use AI?", a: "Yes, but it discloses little. The bank has a head of AI, Kevin Johnson, credited with pioneering its adoption of generative-AI services and shaping its AI policy. It has not published agent counts, budgets or adoption figures. Its public AI voice is guidance to treasury clients on where automation helps and where human judgment still matters." },
    { q: "Who runs Pinnacle after the Synovus merger?", a: "Kevin Blair, formerly Synovus's CEO, is president and CEO of the combined company, which closed its merger of equals on 1 January 2026. Terry Turner, Pinnacle's founding CEO, is chairman; Jamie Gregory is CFO and Rob McCabe is chief banking officer." }
  ],
  sources: [
    { id: "ab-johnson-2026", title: "Kevin Johnson, Head of AI, Pinnacle Financial Partners (Digital Banking speaker profile)", publisher: "American Banker", url: "https://digital-banking.americanbanker.com/profile/kevin-d-johnson", date: "2026-04-21" },
    { id: "ab-hires-2026", title: "Pinnacle points to new hires as proof that merger is working", publisher: "American Banker", url: "https://www.americanbanker.com/news/pinnacle-points-to-new-hires-as-proof-that-merger-is-working", date: "2026-04-23" },
    { id: "ab-wallet-2026", title: "How banks reach for the 'top of the wallet'", publisher: "American Banker", url: "https://americanbanker.com/payments/news/barclays-pinnacle-regions-discuss-digital-wallet-strategies", date: "2026-05-05" },
    { id: "ab-creson-2026", title: "Shellie Creson, Chief Risk Officer, Pinnacle Financial Partners (The Most Powerful Women in Banking)", publisher: "American Banker", url: "https://the-most-powerful-women-in-banking.americanbanker.com/profile/shellie-creson", date: "2026-06-25" },
    { id: "reuters-merger-2025", title: "Pinnacle Financial Partners, Synovus Financial to merge in $8.6 billion deal", publisher: "Reuters", url: "https://www.reuters.com/legal/transactional/pinnacle-financial-partners-synovus-financial-merge-86-billion-deal-2025-07-24/", date: "2025-07-24" },
    { id: "reuters-leadership-2025", title: "Pinnacle Financial, Synovus name leadership team to steer combined bank", publisher: "Reuters", url: "https://www.reuters.com/business/finance/pinnacle-financial-synovus-name-leadership-team-steer-combined-bank-2025-08-21/", date: "2025-08-21" },
    { id: "wsj-merger-2025", title: "Pinnacle Financial, Synovus Financial Agree to $8.6 Billion Merger", publisher: "The Wall Street Journal", url: "https://wsj.com/business/deals/pinnacle-financial-synovus-financial-agree-to-8-6-billion-merger-1b8564bf", date: "2025-07-24" },
    { id: "bankingdive-csuite-2025", title: "Synovus, Pinnacle plan post-merger C-suite", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/synovus-pinnacle-merger-bank-c-suite-management-team-truist/758417/", date: "2025-08-22" },
    { id: "bankingdive-not-truist-2025", title: "Merger with Synovus isn't 'Truist 2.0,' Pinnacle CEO says", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/pinnacle-synovus-merger-turner-blair-southeast-bank-deal-moe/759910/", date: "2025-09-11" },
    { id: "bankingdive-fed-2025", title: "Fed approves Pinnacle, Synovus merger", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/pinnacle-synovus-bank-merger-fed-approval/806559/", date: "2025-11-26" },
    { id: "pnfp-q1-2026", title: "Pinnacle Financial Partners announces earnings for first quarter 2026", publisher: "Pinnacle Financial Partners", url: "https://pnfp.com/about-pinnacle/media-room/news-releases/pinnacle-financial-partners-announces-earnings-for-first-quarter-2026", date: "2026-04-22" },
    { id: "pnfp-greenwich-2026", title: "Pinnacle Financial Partners earns a combined 50 Coalition Greenwich Best Bank Awards", publisher: "Pinnacle Financial Partners", url: "https://dev.sitecore.pnfp.com/about-us/news/2026/2026-02-11-pinnacle-financial-partners-earns-a-combined-50-coalition-greenwich-best-bank-awards", date: "2026-02-11" },
    { id: "pnfp-ai-treasury-2026", title: "AI and Treasury Management: More Opportunity, More Risk", publisher: "Pinnacle Financial Partners", url: "https://www.pnfp.com/learning-center/business-resource-center/articles/managing-your-business/ai-and-treasury-management-more-opportunity-more-risk/", date: "2026-06-01" },
    { id: "ft-q1-2026", title: "Pinnacle Financial Partners announces earnings for first quarter 2026 (merger closed January 1, 2026)", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202604221730BIZWIRE_USPRX____20260422_BW847457-1", date: "2026-04-22" },
    { id: "ft-bestco-2026", title: "Pinnacle is America's No. 12 Best Company to Work For", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/full?dockey=600-202604010830BIZWIRE_USPRX____20260401_BW481527-1", date: "2026-04-01" }
  ],
  lastUpdated: "2026-09-10"
};
