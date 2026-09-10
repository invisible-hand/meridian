import type { Bank } from "@/lib/banks";

export const FIRST_CITIZENS: Bank = {
  slug: "first-citizens",
  name: "First Citizens BancShares",
  shortName: "First Citizens",
  ticker: "FCNCA",
  hq: "Raleigh, NC",
  fedRank: 18,
  leadBank: "First-Citizens Bank & Trust Company",
  assetsUsdMillions: 235521,
  charter: "State nonmember bank (FDIC)",
  posture: "Deliberately conservative: human in the loop, stability first, a frontier-AI fact sheet — and a new head of AI told not to 'do it timidly'.",
  platform: {
    name: "An enterprise AI program being built, not bought",
    detail: "First Citizens describes its AI program as 'built conservatively' — delivering stability, resilience and preparedness, prioritising a human in the loop, and scaling AI enterprise-wide across operational efficiency, cybersecurity, analytics, productivity and client service. A head of AI hired in late 2025 is standing up the functions: data science and advanced analytics, AI portfolio management, responsible AI and governance, and AI education and community.",
    sources: ["fcb-frontier-fact-sheet-2026", "fcb-corporate-profile-2026"]
  },
  answerFirst:
    "First Citizens is the most deliberately cautious AI adopter among the top-20 banks, and says so: its July 2026 frontier-AI fact sheet describes a program 'built conservatively', with stability and resilience first, a human in the loop, and use cases in operational efficiency, cybersecurity, analytics, productivity and client service, 'risk adjusted for our position as a top 20 US bank'. That posture fits a bank whose growth came from absorbing CIT and the failed Silicon Valley Bank, which is retiring the SVB name in 2026, which bought 138 BMO branches in September 2026, and which is weighing a deal to vault the $250 billion regulatory threshold. The counterpoint is inside the bank: a head of AI hired to build the function from data science to responsible-AI governance told an industry audience in March 2026 that 'if you want to do AI, do it well, do not do it timidly'. Its innovation-banking arm, meanwhile, publishes the sector's reference data on AI venture funding.",
  keyPoints: [
    "Frontier-AI fact sheet (July 2026): AI used for operational efficiency, cybersecurity, analytics, productivity and client service; program 'built conservatively', human in the loop, scaled enterprise-wide, 'risk adjusted' for a top-20 bank.",
    "A head of AI, Ash Kaduskar (ex-EY, PNC, JPMorgan, HSBC), joined in late 2025 to build AI platform and functions: data science, AI portfolio management, responsible AI, and AI engagement and education.",
    "Scale: $236 billion in assets, $171 billion in deposits, $149 billion in loans (1Q26); CEO Frank Holding named to the Fed's Federal Advisory Council for 2026.",
    "Franchise moves: Silicon Valley Bank brand retired in Q4 2026 (renamed First Citizens Innovation Banking and Fund Banking); 138 BMO branches acquired (completed September 4, 2026); advisers asked to list targets to cross $250 billion.",
    "Its innovation-banking research is a reference point on AI funding: AI represented 46% of healthcare investment in 2025 and about 40% of all US startup fundraising in 2024, per SVB reports.",
    "Technology spend is rising in the P&L: third-party processing and equipment expense up as the bank invests in digital infrastructure and data-centre modernisation (Q2 2026)."
  ],
  leadership: [
    { name: "Frank Holding Jr.", role: "Chairman and CEO", sources: ["reuters-fac-2026"], linkedin: "https://www.linkedin.com/in/frank-holding-jr-8847441a/" },
    { name: "Hope Holding Bryant", role: "Vice Chairwoman; commands nearly half the balance sheet", sources: ["ab-bryant-2025"], linkedin: "https://www.linkedin.com/in/hope-bryant-3178621b/" },
    { name: "Craig Nix", role: "Chief Financial Officer", sources: ["reuters-nii-2026"], linkedin: "https://www.linkedin.com/in/craig-nix-419a25a5/" }
  ],
  timeline: [
    { date: "2023-03-27", title: "Acquires the failed Silicon Valley Bank", detail: "A government-orchestrated deal that brings the go-to bank for startups — and its AI-heavy client base — into First Citizens.", sources: ["bloomberg-svb-name-2026"] },
    { date: "2025-05-20", title: "SVB report: 40% of US startup funding came from AI-focused funds", detail: "The 'zombiecorn' report on AI cash and struggling unicorns.", sources: ["cnbc-zombiecorns-2025"] },
    { date: "2025-06-24", title: "Fraud counterattack webinar", detail: "AI in fraudsters' playbooks; tactics with McKinsey for business clients.", sources: ["fcb-fraud-2025"] },
    { date: "2025-10-16", title: "Agrees to buy 138 BMO branches", detail: "Midwest, Great Plains and West footprint.", sources: ["bankingdive-bmo-branches-2025"] },
    { date: "2026-01-08", title: "SVB report: AI was 46% of healthcare investment in 2025", detail: "The 17th Healthcare Investments and Exits report.", sources: ["fcb-svb-healthcare-2026"] },
    { date: "2026-01-23", title: "Downbeat 2026 interest-income guidance", detail: "NII of $6.5–6.9 billion expected; shares slide.", sources: ["reuters-nii-2026"] },
    { date: "2026-02-10", title: "CEO named to the Federal Advisory Council", detail: "Frank Holding represents the Fifth District for 2026.", sources: ["reuters-fac-2026"] },
    { date: "2026-02-20", title: "Weighs a deal to cross $250 billion", detail: "Advisers asked to list targets for scale to absorb regulatory and compliance costs.", sources: ["bloomberg-target-2026"] },
    { date: "2026-04-23", title: "Silicon Valley Bank name to be retired", detail: "Renamed First Citizens Innovation Banking and Fund Banking in Q4 2026.", sources: ["bloomberg-svb-name-2026", "ab-svb-name-2026"] },
    { date: "2026-07-03", title: "Frontier AI Fact Sheet published", detail: "A conservative, human-in-the-loop AI program scaled enterprise-wide.", sources: ["fcb-frontier-fact-sheet-2026"] },
    { date: "2026-07-23", title: "Q2 2026: digital infrastructure and data-centre spend rises", detail: "Third-party processing and equipment expense up as the bank invests.", sources: ["fcb-q2-2026"] },
    { date: "2026-09-04", title: "BMO branch purchase completed", detail: "138 branches across eight-plus states.", sources: ["ft-bmo-complete-2026"] }
  ],
  useCases: [
    { useCase: "cybersecurity", name: "AI in cybersecurity", detail: "Named in the fact sheet as a core AI use; resilience and preparedness first.", status: "In production", sources: ["fcb-frontier-fact-sheet-2026"] },
    { useCase: "generative-agentic-ai", name: "Productivity and client-service AI", detail: "Enterprise-wide scaling to optimise service delivery, quality and speed.", status: "Rolling out", sources: ["fcb-frontier-fact-sheet-2026"] },
    { useCase: "governance-general", name: "Responsible-AI function", detail: "Responsible AI and governance among the functions being stood up under the head of AI.", status: "Rolling out", sources: ["fcb-frontier-fact-sheet-2026", "fcb-ai-architect-job"] },
    { useCase: "fraud", name: "Fraud defence for business clients", detail: "Controls against AI-enabled fraud and check fraud.", status: "In production", sources: ["fcb-fraud-2025"] },
    { useCase: "trading-markets", name: "AI-sector research (innovation banking)", detail: "SVB reports on AI funding, healthcare and 'zombiecorns'.", status: "In production", sources: ["fcb-svb-healthcare-2026", "cnbc-zombiecorns-2025"] }
  ],
  numbers: [
    { label: "Total assets / deposits / loans", value: "$236 billion / $171 billion / $149 billion", asOf: "2026-03-31", sources: ["fcb-corporate-profile-2026"] },
    { label: "BMO branches acquired", value: "138", asOf: "2026-09-04", sources: ["ft-bmo-complete-2026"] },
    { label: "AI share of healthcare investment (SVB report)", value: "46% in 2025", asOf: "2026-01-08", sources: ["fcb-svb-healthcare-2026"] },
    { label: "Regulatory threshold in view", value: "$250 billion", asOf: "2026-02-20", sources: ["bloomberg-target-2026"] }
  ],
  quotes: [
    { who: "First Citizens", role: "Frontier AI Fact Sheet", date: "2026-07-03", quote: "Our approach to AI has been deliberate, and our AI program is being built conservatively.", sources: ["fcb-frontier-fact-sheet-2026"] },
    { who: "Frank Holding Jr.", role: "Chairman and CEO", date: "2026-04-23", quote: "We want to be perfectly clear that while names are changing, the client experience is not.", sources: ["ab-svb-name-2026"] }
  ],
  regulatory: [
    { authority: "fdic", why: "State nonmember bank; FIL-15-2026 is the operative model risk guidance, and the FDIC's 2025 cybersecurity report frames the frontier-AI posture.", docSlugs: ["fdic-fil-15-2026", "fdic-cybersecurity-resilience-report-2025"] },
    { authority: "federal-reserve", why: "Holding company supervisor; crossing $250 billion would bring enhanced prudential standards.", docSlugs: ["fed-sr-26-2", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Consumer and small-business lending; adverse-action duties apply to any AI-assisted decision.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "ny-dfs", why: "The DFS frontier-AI letter is the template the bank's own frontier-AI fact sheet echoes.", docSlugs: ["ny-dfs-industry-letter-2026-05-21-frontier-ai-models"] }
  ],
  suggestions: [
    { title: "Caution is the strategy, and it is written down", detail: "A public fact sheet that says the program is 'built conservatively' is rare; it aligns with supervisors' 'measured approach' language and gives examiners a document to test against." },
    { title: "The $250 billion decision is also an AI decision", detail: "Crossing the threshold brings enhanced standards and higher compliance cost; the head of AI's remit — governance, portfolio management, education — reads like preparation for that." },
    { title: "The innovation-banking client base is an AI-risk book", detail: "First Citizens banks the startups whose funding is 40% AI-driven; the 'zombiecorn' research is its own credit-risk commentary." },
    { title: "Watch for the first named tool", detail: "Unlike peers, the public record has no named assistant or agent yet. The head of AI's 'do not do it timidly' suggests that changes in 2026–27." }
  ],
  faq: [
    { q: "What is First Citizens' approach to AI?", a: "First Citizens says its AI program is being built conservatively: delivering stability, resilience and preparedness, prioritising a human in the loop, and scaling AI enterprise-wide across operational efficiency, cybersecurity, analytics, productivity and client service, risk-adjusted for its position as a top-20 US bank, according to its July 2026 Frontier AI Fact Sheet." },
    { q: "Is Silicon Valley Bank still a brand?", a: "Not for long. First Citizens, which acquired SVB's assets in March 2023, announced in April 2026 that it will retire the Silicon Valley Bank name in the fourth quarter of 2026, renaming the businesses First Citizens Innovation Banking and First Citizens Fund Banking." }
  ],
  sources: [
    { id: "fcb-frontier-fact-sheet-2026", title: "Frontier AI Fact Sheet", publisher: "First Citizens Bank", url: "https://newsroom.firstcitizens.com/image/First-Citizens-Bank-Frontier-AI-Fact-Sheet.pdf", date: "2026-07-03" },
    { id: "fcb-corporate-profile-2026", title: "First Citizens Bank Corporate Profile 1Q26", publisher: "First Citizens Bank", url: "https://www.firstcitizens.com/content/dam/firstcitizens/pdfs/about-us/corporate-profile.pdf", date: "2026-04-30" },
    { id: "fcb-q2-2026", title: "First Citizens BancShares Reports Second Quarter 2026 Earnings", publisher: "First Citizens Bank", url: "https://newsroom.firstcitizens.com/2026-07-23-First-Citizens-BancShares-Reports-Second-Quarter-2026-Earnings", date: "2026-07-23" },
    { id: "fcb-svb-healthcare-2026", title: "AI Investment Accounted for Nearly Half of Healthcare Investment in 2025 (SVB report)", publisher: "First Citizens Bank", url: "https://newsroom.firstcitizens.com/2026-01-08-AI-Investment-Accounted-for-Nearly-Half-of-Healthcare-Investment-in-2025-Silicon-Valley-Bank-Releases-17th-Healthcare-Investments-and-Exits-Report", date: "2026-01-08" },
    { id: "fcb-fraud-2025", title: "Fraud counterattack: Protecting your business from threats", publisher: "First Citizens Bank", url: "https://www.firstcitizens.com/commercial/insights/risk-management/fraud-counterattack-protecting-business-threats", date: "2025-06-24" },
    { id: "fcb-ai-architect-job", title: "Principal AI Architect (job posting)", publisher: "First Citizens Bank", url: "https://jobs.firstcitizens.com/jobs/34272?lang=en-us", date: "2026-01-01" },
    { id: "cnbc-zombiecorns-2025", title: "AI startups have plenty of cash, while more unicorns are struggling", publisher: "CNBC", url: "https://www.cnbc.com/2025/05/20/ai-startups-unicorns-zombiecorns.html", date: "2025-05-20" },
    { id: "reuters-fac-2026", title: "First Citizens CEO Frank Holding named to Federal Advisory Council", publisher: "Reuters", url: "https://www.reuters.com/sustainability/boards-policy-regulation/first-citizens-ceo-frank-holding-named-federal-advisory-council-2026-02-10/", date: "2026-02-10" },
    { id: "reuters-nii-2026", title: "First Citizens BancShares slides after downbeat annual interest income forecast", publisher: "Reuters", url: "https://www.reuters.com/business/finance/first-citizens-bancshares-slides-after-downbeat-annual-interest-income-forecast-2026-01-23/", date: "2026-01-23" },
    { id: "bloomberg-svb-name-2026", title: "First Citizens Ending Silicon Valley Bank Name After Three Years", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-04-23/first-citizens-ending-silicon-valley-bank-name-after-three-years", date: "2026-04-23" },
    { id: "bloomberg-target-2026", title: "First Citizens, Buyer of Collapsed SVB, Weighs Another Target", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-02-20/first-citizens-buyer-of-collapsed-svb-weighs-another-target", date: "2026-02-20" },
    { id: "ab-svb-name-2026", title: "First Citizens to drop SVB name, 3 years after crisis", publisher: "American Banker", url: "https://www.americanbanker.com/news/first-citizens-to-drop-svb-name-3-years-after-crisis", date: "2026-04-23" },
    { id: "ab-bryant-2025", title: "The Most Powerful Women in Banking, No. 18, Hope Holding Bryant, First Citizens Bank", publisher: "American Banker", url: "https://www.americanbanker.com/news/2025-the-most-powerful-women-in-banking-no-18-hope-holding-bryant-first-citizens-bank", date: "2025-10-07" },
    { id: "bankingdive-bmo-branches-2025", title: "First Citizens to acquire 138 BMO branches", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/first-citizens-acquire-138-bmo-bank-branches/802999/", date: "2025-10-16" },
    { id: "ft-bmo-complete-2026", title: "BMO Completes Sale of 138 U.S. Branches to First Citizens Bank", publisher: "CNW via FT Markets", url: "https://markets.ft.com/data/announce/full?dockey=600-202609041801CANADANWCANADAPR_C7959-1", date: "2026-09-04" }
  ],
  lastUpdated: "2026-09-09"
};
