import type { Bank } from "@/lib/banks";

export const COMMUNITY_BANK_NA: Bank = {
  slug: "community-bank-na",
  name: "Community Financial System (Community Bank, N.A.)",
  shortName: "Community Bank N.A.",
  ticker: "CBU",
  hq: "Canton, NY (holding company: Syracuse, NY)",
  fedRank: 99,
  leadBank: "Community Bank, N.A.",
  assetsUsdMillions: 17434,
  charter: "National bank (OCC)",
  posture: "A diversified upstate New York bank, benefits administrator, wealth manager and insurer whose CEO counts 'more than a dozen people' on AI with a handful fully dedicated, sees the gains so far in application development, and discloses rising data-processing expense for 'artificial intelligence applications'.",
  platform: {
    name: "AI team inside a four-business diversified model",
    detail: "Community Financial System says its second-quarter 2026 data-processing and communications expense rose 17.9% year on year, reflecting 'continued investment in customer-facing and back-office technologies, including artificial intelligence applications and other workflow efficiency initiatives'. Asked on the call how much staff is dedicated to AI, president and CEO Dimitar Karaivanov described 'more than a dozen people with a handful of them being kind of fully dedicated to just purely AI', the rest augmenting their productivity with AI tools, with efficiency the main opportunity 'at this stage' and the transformational results so far 'more on the app development side'. The company runs four businesses, banking, employee benefits (Benefit Plans Administrative Services), wealth management (Nottingham) and insurance (OneGroup), and publishes small-business guides on AI and automation. No vendor, model inventory or budget has been disclosed.",
    sources: ["cbu-q2call-2026", "cbu-q2rel-2026", "cbu-aiblog-2024"]
  },
  answerFirst:
    "Community Financial System, the Syracuse-area holding company for Community Bank, N.A., with about $17 billion of assets and four businesses spanning banking, employee-benefits administration, wealth management and insurance, is one of the few banks its size to give investors a headcount for AI. On the July 2026 call, president and CEO Dimitar Karaivanov said the company has 'more than a dozen people with a handful of them being kind of fully dedicated to just purely AI', with the others using AI to raise their output, that efficiency is the main opportunity 'at this stage in time', and that the transformational effects so far are 'on the app development side', as at most companies. The earnings release ties the spending to numbers: data-processing and communications expense up 17.9% year on year on 'customer-facing and back-office technologies, including artificial intelligence applications and other workflow efficiency initiatives'. The business delivered a fifth consecutive record quarter, with net income of $61.3 million, operating earnings of $1.16 per share, up 11.5%, a 1.40% operating return on assets, banking pre-tax earnings up 13.2%, employee benefits up 16.2%, wealth up 46.5% and insurance down 10.8%, while completing the $40 million acquisition of ClearPoint Federal Bank & Trust, a funeral-planning specialist folded into its wealth arm, after buying seven Santander branches in Pennsylvania for about $48 million and taking a $37.4 million minority stake in insurer Leap Holdings, its largest investment ever. For clients the bank publishes guides on leveraging AI and automation in small businesses. Community Bank, N.A. is a national bank supervised by the OCC.",
  keyPoints: [
    "AI staffing disclosed: 'more than a dozen people', a handful fully dedicated; gains so far in application development; efficiency the near-term goal.",
    "Data-processing expense up 17.9% year on year on customer-facing and back-office technology 'including artificial intelligence applications'.",
    "Fifth consecutive record quarter: net income $61.3 million; operating EPS $1.16 (+11.5%); operating ROA 1.40%.",
    "Diversified model: banking +13.2%, employee benefits +16.2%, wealth +46.5% pre-tax; insurance -10.8%.",
    "Deals: ClearPoint Federal Bank & Trust ($40 million, completed Q2 2026), seven Santander Pennsylvania branches (about $48 million), $37.4 million stake in Leap Holdings.",
    "Client education on AI and automation for small businesses."
  ],
  leadership: [
    { name: "Dimitar A. Karaivanov", role: "President and CEO", sources: ["cbu-q2call-2026", "ab-leap-2025"] },
    { name: "Marya Burgio Wlos", role: "EVP and Chief Financial Officer", linkedin: "https://www.linkedin.com/in/maryaburgio", sources: ["cbu-q2call-2026"] }
  ],
  timeline: [
    { date: "2024-08-05", title: "'Your Business and AI' small-business guide", detail: "Marketing, sales and operations uses explained.", sources: ["cbu-aiblog-2024"] },
    { date: "2025-06-25", title: "Seven Santander branches acquired in Pennsylvania", detail: "About $48 million; Allentown market.", sources: ["ab-santander-2025"] },
    { date: "2025-09-17", title: "$37.4 million stake in Leap Holdings", detail: "Largest investment ever; rental-housing insurer.", sources: ["ab-leap-2025"] },
    { date: "2026-01-16", title: "ClearPoint Federal Bank & Trust acquisition agreed", detail: "$40 million cash; funeral-planning specialist to join Nottingham wealth unit.", sources: ["ab-clearpoint-2026"] },
    { date: "2026-07-28", title: "Second-quarter 2026 results: AI staffing and spending disclosed", detail: "Record quarter; more than a dozen people on AI; data-processing expense up 17.9%.", sources: ["cbu-q2call-2026", "cbu-q2rel-2026"] },
    { date: "2025-07-16", title: "'How Automation is Empowering Small Businesses' guide", detail: "Client education on automation tools.", sources: ["cbu-automation-2025"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "AI-assisted application development", detail: "Where management sees the most transformational effect so far.", status: "In production", sources: ["cbu-q2call-2026"] },
    { useCase: "governance-general", name: "Dedicated AI team", detail: "More than a dozen staff, a handful fully dedicated; efficiency focus.", status: "In production", sources: ["cbu-q2call-2026"] },
    { useCase: "third-party-vendors", name: "Customer-facing and back-office AI applications", detail: "Funded through rising data-processing expense; debit-card platform conversion.", status: "Rolling out", sources: ["cbu-q2rel-2026"] },
    { useCase: "customer-chatbots", name: "Small-business AI and automation guidance", detail: "Client education on AI tools.", status: "In production", sources: ["cbu-aiblog-2024"] }
  ],
  numbers: [
    { label: "Q2 2026 net income / operating EPS", value: "$61.3 million / $1.16 (+11.5%)", asOf: "2026-07-28", sources: ["cbu-q2rel-2026"] },
    { label: "Data-processing and communications expense growth", value: "+17.9% year on year", asOf: "2026-07-28", sources: ["cbu-q2rel-2026"] },
    { label: "Staff working on AI", value: "> 12, a handful fully dedicated", asOf: "2026-07-28", sources: ["cbu-q2call-2026"] },
    { label: "Wealth management pre-tax earnings growth", value: "+46.5% year on year", asOf: "2026-07-28", sources: ["cbu-q2call-2026"] }
  ],
  quotes: [
    { who: "Dimitar A. Karaivanov", role: "President and CEO", date: "2026-07-28", quote: "I can think of it as more than a dozen people with a handful of them being kind of fully dedicated to just purely AI, essentially, the rest of them being augmented in multiple ways, their production levels through AI.", sources: ["cbu-q2call-2026"] },
    { who: "Community Financial System", role: "Second-quarter 2026 release", date: "2026-07-28", quote: "Continued investment in customer-facing and back-office technologies, including artificial intelligence applications and other workflow efficiency initiatives.", sources: ["cbu-q2rel-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "Community Bank, N.A. is a national bank; OCC model-risk and gen-AI expectations govern its AI applications.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "ny-dfs", why: "Insurance and wealth subsidiaries in New York sit under DFS cyber rules and its AI-risk letter.", docSlugs: ["ny-dfs-23-nycrr-part-500", "ny-dfs-industry-letter-2024-10-16-ai-cyber-risks"] },
    { authority: "cfpb", why: "Consumer banking and benefits products carry UDAAP and adverse-action duties for automated decisions.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] }
  ],
  suggestions: [
    { title: "Headcount disclosure is a model others should copy", detail: "Saying how many people work on AI, and where the gains are, is more informative than most banks' adjectives; pairing it with a use-case list would complete it." },
    { title: "Four businesses mean four data sets", detail: "Benefits administration and insurance generate data most banks lack; the AI team's biggest lever is cross-business analytics." },
    { title: "Expense growth needs a payback line", detail: "A 17.9% rise in data-processing cost attributed partly to AI invites the question of when it shows up in the efficiency ratio." },
    { title: "Insurance underperformance is the test case", detail: "The one business falling short is where AI-driven pricing and retention analytics would be judged fastest." }
  ],
  faq: [
    { q: "Does Community Bank, N.A. use AI?", a: "Yes. Community Financial System says more than a dozen people work on AI, a handful fully dedicated, with the biggest effects so far in application development, and its second-quarter 2026 release attributes rising data-processing expense partly to artificial intelligence applications. No vendor or budget has been named." },
    { q: "What businesses does Community Financial System run?", a: "Four: banking through Community Bank, N.A., employee-benefits administration, wealth management through Nottingham, and insurance through OneGroup. In 2025 and 2026 it bought seven Santander branches in Pennsylvania, took a $37.4 million stake in insurer Leap Holdings and acquired ClearPoint Federal Bank & Trust for $40 million." }
  ],
  sources: [
    { id: "cbu-aiblog-2024", title: "Your Business and AI: What You Need to Know", publisher: "Community Bank, N.A.", url: "https://cbna.com/blog/business/your-business-and-ai", date: "2024-08-05" },
    { id: "ab-santander-2025", title: "Santander to sell 7 branches to Community Bank in Syracuse", publisher: "American Banker", url: "https://americanbanker.com/news/santander-to-sell-7-branches-to-community-bank-in-syracuse", date: "2025-06-25" },
    { id: "ab-leap-2025", title: "New York bank doubles down on insurance with big investment", publisher: "American Banker", url: "https://www.americanbanker.com/news/new-york-bank-doubles-down-on-insurance-with-big-investment", date: "2025-09-17" },
    { id: "ab-clearpoint-2026", title: "Upstate NY lender to buy bank with funeral-planning focus", publisher: "American Banker", url: "https://americanbanker.com/news/upstate-ny-lender-to-buy-bank-with-funeral-planning-focus", date: "2026-01-16" },
    { id: "cbu-q2rel-2026", title: "Community Financial System, Inc. Reports Second Quarter 2026 Results", publisher: "Community Financial System (Yahoo Finance)", url: "https://finance.yahoo.com/markets/stocks/articles/community-financial-system-inc-cbu-230041956.html", date: "2026-07-28" },
    { id: "cbu-q2call-2026", title: "Community Financial System Q2 Earnings Call Highlights", publisher: "MarketBeat (Yahoo Finance)", url: "https://finance.yahoo.com/markets/stocks/articles/community-financial-system-q2-earnings-160446246.html", date: "2026-07-28" },
    { id: "cbu-automation-2025", title: "How Automation is Empowering Small Businesses", publisher: "Community Bank, N.A.", url: "https://cbna.com/blog/business/automation-for-small-businesses", date: "2025-07-16" }
  ],
  lastUpdated: "2026-09-10"
};
