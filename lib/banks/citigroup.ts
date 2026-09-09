import type { Bank } from "@/lib/banks";

export const CITIGROUP: Bank = {
  slug: "citigroup",
  name: "Citigroup",
  shortName: "Citi",
  ticker: "C",
  hq: "New York, NY",
  fedRank: 3,
  leadBank: "Citibank, N.A.",
  assetsUsdMillions: 1933622,
  charter: "National bank (OCC)",
  posture: "Re-engineer the enterprise: AI as the tool that finishes the transformation, measured on the earnings deck.",
  platform: {
    name: "Citi Stylus Workspaces",
    detail: "The most broadly available AI tool for Citi staff, rolled out in late 2024; adoption climbed from single digits to more than 80% of colleagues by mid-2026, pushed by a 4,000-strong network of 'champions' and 'accelerators'.",
    sources: ["wsj-superfans-2026", "citi-q1-2026"]
  },
  answerFirst:
    "Citigroup treats AI as the instrument for completing Jane Fraser's multi-year overhaul rather than as a separate program, and it reports the results on the quarterly earnings deck: more than 80% of colleagues using AI tools, 42 million interactions, agentic AI in the hands of 10,000-plus engineers remapping decades of legacy code, and 1,700 hours a month of capacity created in Markets oversight work. The May 2026 investor day tied AI to growth — an AI wealth advisor, Citi Sky, rolling out to Citigold clients, faster account opening and underwriting — while the CEO has been among the most direct in saying the bank will need fewer people.",
  keyPoints: [
    "Q1 2026 earnings presentation: AI tool adoption by 80%-plus of colleagues, 42 million interactions since inception (up 50% on Q4 2025).",
    "Markets processes 4,400-plus documents via AI, creating 1,700-plus hours a month of capacity in oversight areas such as trade confirms and interest-claims investigations.",
    "Advanced and agentic AI used by 10,000-plus engineers, including to remap more than 30 years of legacy code; coding work that took top developers a week and a half now takes minutes, per Fraser.",
    "Investor day, May 7, 2026: Citi Sky, an AI wealth advisor, begins rolling out to Citigold clients in the summer; 400 more advisors and personal bankers hired alongside it.",
    "AI rolled out to 182,000 colleagues in 84 countries under the CIO; the bank ranks second among US banks for AI venture deals (77 since 2019).",
    "Agentic payments in the cards business (Mastercard Agent Pay) and an AI Infrastructure Banking team formed in February 2026 to serve the build-out."
  ],
  leadership: [
    { name: "Tim Ryan", role: "Head of Technology and Business Enablement", sources: ["reuters-ryan-2026"] },
    { name: "Nikhil Joshi", role: "Chief Information Officer", sources: ["ab-agents-humans-2025"] },
    { name: "Jonathan Lofthouse", role: "CIO, Markets (led the firm-wide AI rollout)", sources: ["ab-lofthouse-2026"] },
    { name: "Pam Habner", role: "Head of US Branded Cards and Lending", sources: ["ab-habner-2026"] }
  ],
  timeline: [
    { date: "2024-10-01", title: "Citi Stylus Workspaces rolled out", detail: "Adoption starts in the single digits; the champions programme is built to change that.", sources: ["wsj-superfans-2026"] },
    { date: "2025-10-28", title: "AI for performance reviews; coding in minutes", detail: "Fraser at the Future Investment Initiative: the firm is rapidly expanding how staff can use AI.", sources: ["bloomberg-reviews-2025"] },
    { date: "2025-11-20", title: "Deploying agents 'without upsetting humans'", detail: "CIO Nikhil Joshi on reskilling and adoption: 'You must take people along'.", sources: ["ab-agents-humans-2025"] },
    { date: "2026-02-25", title: "AI Infrastructure Banking team formed", detail: "Investment and corporate bankers grouped to cover the AI build-out.", sources: ["bloomberg-infra-team-2026"] },
    { date: "2026-04-08", title: "AI speeds account openings and system retirement", detail: "Tim Ryan: AI is used to open accounts faster and retire old software.", sources: ["reuters-ryan-2026"] },
    { date: "2026-04-14", title: "Q1 deck: 80%+ adoption, 42 million interactions", detail: "The bank reports 'the benefits of an AI-ready organization, reengineering our enterprise at scale'.", sources: ["citi-q1-2026"] },
    { date: "2026-04-28", title: "Services unit efficiencies", detail: "Four ways AI makes the 'crown jewel' unit more efficient, with revenue up 17% in the quarter.", sources: ["ab-services-2026"] },
    { date: "2026-05-05", title: "Fraser: AI to drive wealth growth", detail: "Ahead of investor day the CEO says the bank is betting on AI to grow its wealth business.", sources: ["reuters-investor-day-preview-2026"] },
    { date: "2026-05-07", title: "Investor day: Citi Sky, 400 advisors, new targets", detail: "AI wealth advisor for Citigold clients from the summer; Fraser: AI applied from onboarding and underwriting to virtual wealth advisers, cybersecurity and coding.", sources: ["reuters-investor-day-2026", "ab-advisors-2026", "wsj-superfans-2026"] },
    { date: "2026-06-01", title: "Agentic AI in cards", detail: "Mastercard Agent Pay and Citi Flex Pay capabilities in a card portfolio serving more than 70 million customers.", sources: ["ab-habner-2026"] },
    { date: "2026-06-11", title: "Among banks expecting fewer jobs", detail: "Bloomberg groups Citi with JPMorgan and Goldman in the consensus that AI means fewer banking jobs.", sources: ["bloomberg-jobs-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Stylus Workspaces and engineering agents", detail: "Firm-wide assistant; agentic AI for 10,000-plus engineers on legacy remapping.", status: "In production", sources: ["citi-q1-2026"] },
    { useCase: "customer-chatbots", name: "Citi Sky", detail: "AI wealth advisor for Citigold clients, phased US rollout from summer 2026.", status: "Rolling out", sources: ["reuters-investor-day-2026", "ab-advisors-2026"] },
    { useCase: "trading-markets", name: "Markets document processing", detail: "4,400-plus documents processed via AI; 1,700-plus hours a month of oversight capacity.", status: "In production", sources: ["citi-q1-2026"] },
    { useCase: "aml-kyc", name: "Faster account opening and onboarding", detail: "AI applied to client onboarding and underwriting processing.", status: "In production", sources: ["reuters-ryan-2026", "wsj-superfans-2026"] },
    { useCase: "generative-agentic-ai", name: "Agentic payments", detail: "Mastercard Agent Pay in the branded-cards business.", status: "Rolling out", sources: ["ab-habner-2026"] },
    { useCase: "cybersecurity", name: "Frontier-model testing", detail: "Has access to or is testing Anthropic's Mythos, per Reuters.", status: "Pilot", sources: ["reuters-asia-mythos-2026"] }
  ],
  numbers: [
    { label: "Colleagues using AI tools", value: "80%+", asOf: "2026-04-14", sources: ["citi-q1-2026"] },
    { label: "AI interactions since inception", value: "42 million (+50% vs Q4 2025)", asOf: "2026-04-14", sources: ["citi-q1-2026"] },
    { label: "Engineers using advanced/agentic AI", value: "10,000+", asOf: "2026-04-14", sources: ["citi-q1-2026"] },
    { label: "Markets oversight capacity created", value: "1,700+ hours a month", asOf: "2026-04-14", sources: ["citi-q1-2026"] },
    { label: "Colleagues with AI rollout", value: "182,000 in 84 countries", asOf: "2026-06-01", sources: ["ab-lofthouse-2026"] },
    { label: "AI venture deals since 2019", value: "77 (second among US banks)", asOf: "2026-04-20", sources: ["ab-venture-2026"] }
  ],
  quotes: [
    { who: "Jane Fraser", role: "Chair and CEO", date: "2026-05-07", quote: "We will steadily scale by continuing to invest in advisors, data, and technology, including AI, to improve productivity and client outcomes.", sources: ["reuters-investor-day-2026"] },
    { who: "Nikhil Joshi", role: "CIO", date: "2025-11-20", quote: "You must take people along.", sources: ["ab-agents-humans-2025"] }
  ],
  regulatory: [
    { authority: "occ", why: "Citibank N.A. is a national bank; the revised model risk guidance and third-party guidance apply.", docSlugs: ["occ-bulletin-2026-13", "occ-bulletin-2023-17"] },
    { authority: "federal-reserve", why: "Holding-company supervisor; agentic engineering tools sit outside SR 26-2 and inside broader governance.", docSlugs: ["fed-sr-26-2"] },
    { authority: "sec", why: "Citi Sky is an AI advisory interface for wealth clients — the SEC's exam priorities test AI representations and supervision of automated advice.", docSlugs: ["sec-exam-priorities-fy2026"] },
    { authority: "eu-ai-act", why: "The largest cross-border footprint of the US banks; EU credit scoring is high-risk from December 2, 2027.", docSlugs: ["eu-ai-act-regulation-2024-1689"] },
    { authority: "fsb", why: "G-SIB; FSB sound practices on human oversight apply directly to a client-facing AI advisor.", docSlugs: ["fsb-ai-sound-practices-consultation-2026"] }
  ],
  suggestions: [
    { title: "Citi is the bank to benchmark for AI disclosure", detail: "Adoption, interactions, engineer counts and hours created appear on the earnings deck. Analysts will hold peers to that standard." },
    { title: "Citi Sky is the first customer-facing AI advisor at a G-SIB — watch the supervisory response", detail: "An avatar giving investment prompts to retail wealth clients touches SEC exam priorities, FSB human-oversight practices and consumer-protection law at once. Its disclosures and escalation paths will be the template or the cautionary tale." },
    { title: "Legacy remediation is the hidden AI dividend", detail: "Using agents to remap 30 years of code addresses the controls failures behind Citi's consent orders. AI is doing regulatory remediation work here, not only productivity work." },
    { title: "The headcount message is already public", detail: "Fraser's wealth plan adds 400 advisors while the firm expects fewer people overall — the net is efficiency in operations and technology, growth in client-facing roles." }
  ],
  faq: [
    { q: "What is Citi Sky?", a: "Citi Sky is an AI-powered wealth advisor that Citi announced at its May 7, 2026 investor day. It began a phased rollout to Citigold clients in the United States in summer 2026, engaging clients through conversation and investment prompts, alongside a plan to add 400 human advisors and personal bankers." },
    { q: "How many Citi employees use AI?", a: "More than 80% of colleagues had adopted the bank's AI tools by the first quarter of 2026, with 42 million interactions since inception, according to the Q1 2026 earnings presentation; the firm-wide rollout reached 182,000 colleagues in 84 countries." }
  ],
  sources: [
    { id: "citi-q1-2026", title: "Earnings Results Presentation, First Quarter 2026", publisher: "Citigroup", url: "https://www.citigroup.com/rcs/citigpa/storage/public/Earnings/Q12026/2026psqtr1rslt.pdf", date: "2026-04-14" },
    { id: "wsj-superfans-2026", title: "The AI Superfans Companies Count On to Convert the Skeptics", publisher: "The Wall Street Journal", url: "https://www.wsj.com/cio-journal/the-ai-superfans-companies-count-on-to-convert-the-skeptics-5b301a90", date: "2026-07-08" },
    { id: "reuters-ryan-2026", title: "Citigroup says AI helps speed account openings and systems upgrades", publisher: "Reuters", url: "https://www.reuters.com/business/finance/citigroup-says-ai-helps-speed-account-openings-systems-upgrades-2026-04-08/", date: "2026-04-08" },
    { id: "reuters-investor-day-preview-2026", title: "Citigroup to announce new profit targets at investor day, CEO says", publisher: "Reuters", url: "https://www.reuters.com/legal/transactional/citigroup-announce-new-profit-targets-investor-day-ceo-says-2026-05-05/", date: "2026-05-05" },
    { id: "reuters-investor-day-2026", title: "Citigroup targets stronger profitability as CEO Fraser drives overhaul", publisher: "Reuters", url: "https://www.reuters.com/business/finance/citigroup-targets-11-13-near-term-return-tangible-assets-2026-05-07/", date: "2026-05-07" },
    { id: "reuters-asia-mythos-2026", title: "Banks in Asia brace for complex cyber threats from frontier AI", publisher: "Reuters", url: "https://www.reuters.com/legal/litigation/banks-asia-brace-complex-cyber-threats-frontier-ai-2026-04-30/", date: "2026-04-30" },
    { id: "ab-advisors-2026", title: "To gain wallet share, Citi to add 400 U.S. advisors and personal bankers", publisher: "American Banker", url: "https://www.americanbanker.com/news/to-gain-wallet-share-citi-looks-to-add-400-u-s-advisors-and-personal-bankers", date: "2026-05-07" },
    { id: "ab-services-2026", title: "Four ways AI is making Citi's Services unit more efficient", publisher: "American Banker", url: "https://www.americanbanker.com/news/four-ways-ai-is-making-citis-services-unit-more-efficient", date: "2026-04-28" },
    { id: "ab-agents-humans-2025", title: "How Citi, Citizens, TD deploy AI agents without upsetting humans", publisher: "American Banker", url: "https://www.americanbanker.com/news/how-citi-citizens-td-deploy-ai-agents-without-upsetting-humans", date: "2025-11-20" },
    { id: "ab-lofthouse-2026", title: "Citi's CIO is #37 on The Most Innovative People in Finance ranking", publisher: "American Banker", url: "https://www.americanbanker.com/news/citis-cio-in-37-on-the-most-innovative-people-in-finance-ranking", date: "2026-06-01" },
    { id: "ab-habner-2026", title: "Citi's Pam Habner bets big on agentic AI", publisher: "American Banker", url: "https://www.americanbanker.com/news/citis-pam-habner-is-23-on-the-most-innovative-people-in-finance-ranking", date: "2026-06-01" },
    { id: "ab-venture-2026", title: "Wells Fargo, Citi and Goldman lead in AI venture investment", publisher: "American Banker", url: "https://www.americanbanker.com/news/wells-fargo-citi-and-goldman-lead-in-ai-venture-investment", date: "2026-04-20" },
    { id: "bloomberg-reviews-2025", title: "Citi Looks to AI to Help Bosses Write Performance Reviews", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2025-10-28/citi-looks-to-ai-to-help-bosses-write-performance-reviews", date: "2025-10-28" },
    { id: "bloomberg-infra-team-2026", title: "Citigroup Assembles Banking Team Focused on AI Infrastructure", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-02-25/citigroup-assembles-banking-team-focused-on-ai-infrastructure", date: "2026-02-25" },
    { id: "bloomberg-jobs-2026", title: "Banks Brace for AI-Driven Staff Cuts and European Mergers", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/newsletters/2026-06-11/banks-face-mergers-and-ai-driven-job-cuts", date: "2026-06-11" }
  ],
  lastUpdated: "2026-09-09"
};
