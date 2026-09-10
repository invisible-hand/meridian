import type { Bank } from "@/lib/banks";

export const CITIZENS: Bank = {
  slug: "citizens",
  name: "Citizens Financial Group",
  shortName: "Citizens",
  ticker: "CFG",
  hq: "Providence, RI",
  fedRank: 19,
  leadBank: "Citizens Bank, N.A.",
  assetsUsdMillions: 227134,
  charter: "National bank (OCC)",
  posture: "'Reimagine the Bank': a $300 million, three-year AI-led overhaul with a $450 million payoff, on the first super-regional to move its whole mainframe to the cloud.",
  platform: {
    name: "CiZi and the cloud-native core",
    detail: "CiZi, the AI assistant in the Citizens mobile app, has cut mobile-banking call volume by 44%. Behind it, CIO Michael Ruttledge's team migrated 700 applications over four years and is unplugging the last mainframe — 'the first super-regional bank to move its entire mainframe and every business application into the cloud' — which is what lets generative and agentic AI run across operations under the Reimagine the Bank program.",
    sources: ["ab-ruttledge-2026", "ab-reimagine-2026"]
  },
  answerFirst:
    "Citizens has given its AI strategy a name, a budget and a return: 'Reimagine the Bank', a three-year, roughly $300 million program launched in 2025 to redesign how it serves customers and runs the bank with generative and agentic AI, expected to deliver $450 million of run-rate benefits — and, the bank stresses, not needed to hit its profitability targets. The foundation is unusual for a regional: CIO Michael Ruttledge says Citizens is the first super-regional to move its entire mainframe and every application to the cloud, and it has used generative AI to rewrite legacy code, including a mortgage system moved in six weeks. The results it reports are concrete: CiZi, the mobile assistant, cut app-related call volume 44%; new-account opening time fell by half; coding output is up 10% overall and 55% for engineers using advanced agents; GitHub Copilot's coding agent went to about 800 developers. President Brendan Coughlin, now positioned as the next CEO, says the pace of AI change is 'overwhelming' and that the technology is 'here and present right now'.",
  keyPoints: [
    "Reimagine the Bank: launched 2025, about three years and $300 million, targeting $450 million of run-rate benefits by 2028; CEO Bruce Van Saun says profit goals do not depend on it.",
    "Cloud-first foundation: 700 applications migrated in four years; the last mainframe being retired — 'no one has done that, not even banks like Capital One', per the CIO.",
    "Results reported: CiZi cut mobile-related call volume 44%; new-account opening time down 50%; engineering output +10% overall, +55% for engineers on advanced agents; GitHub Copilot's coding agent rolled to ~800 developers, half the engineering staff.",
    "Legacy rewrite: generative AI converts old code to modern languages — a mortgage system with millions of lines rewritten and moved to the cloud in six weeks.",
    "Governance in the proxy: the 2026 proxy statement tells shareholders the bank 'will utilize new technologies like artificial intelligence and agentic artificial intelligence to enhance how we serve customers and how we run the bank'.",
    "Leadership: President Brendan Coughlin runs all business lines and the AI-led overhaul; his July 2026 expanded role positions him as the next CEO."
  ],
  leadership: [
    { name: "Brendan Coughlin", role: "President; leads all business lines and the Reimagine the Bank program", sources: ["ab-coughlin-ceo-2026", "ab-reimagine-2026"], linkedin: "https://www.linkedin.com/in/brendan-coughlin-b924981/" },
    { name: "Michael Ruttledge", role: "Chief Information Officer", sources: ["ab-ruttledge-2026", "ab-inside-plan-2025"], linkedin: "https://www.linkedin.com/in/michaelruttledge/" },
    { name: "Bruce Van Saun", role: "Chairman and CEO", sources: ["ab-tech-overhaul-2026"] },
    { name: "Krish Swamy", role: "Chief Data and Analytics Officer", sources: ["ab-ai-enabled-bank-2026"], linkedin: "https://www.linkedin.com/in/krishswamy/" }
  ],
  timeline: [
    { date: "2025-07-01", title: "Van Saun: 'reimagining the bank with AI in mind'", detail: "The objective, set out on the Q2 2025 call, is to redesign how the bank serves customers and runs itself with gen and agentic AI.", sources: ["ab-inside-plan-2025"] },
    { date: "2025-08-06", title: "'First inning' of AI in business banking", detail: "AI not yet in the online banking platform; exploring applications, per the head of business banking.", sources: ["bankingdive-smb-2025"] },
    { date: "2025-11-20", title: "GitHub Copilot's coding agent to ~800 developers", detail: "Half the software developers; fintech partners rewriting legacy systems for the cloud.", sources: ["ab-agents-humans-2025"] },
    { date: "2025-12-01", title: "Inside the plan: 47 use cases in execution", detail: "Ruttledge: 'a lot of proof of concepts… where there's manual processes today that we think we can automate.'", sources: ["ab-inside-plan-2025"] },
    { date: "2026-01-21", title: "Tech overhaul laid out: $450 million of run-rate benefits", detail: "Three-year revamp; not baked into return guidance.", sources: ["ab-tech-overhaul-2026"] },
    { date: "2026-03-05", title: "Proxy statement: AI and agentic AI in how the bank is run", detail: "Reimagine the Bank described to shareholders.", sources: ["cfg-proxy-2026"] },
    { date: "2026-03-27", title: "'AI is speeding everything up'; the pace is 'overwhelming'", detail: "Coughlin on $300 million, three years, and model leadership changing every three weeks.", sources: ["ab-reimagine-2026", "bankingdive-coughlin-2026"] },
    { date: "2026-05-27", title: "MANTL account opening automates 85% of decisions", detail: "KYC, AML, BSA checks, funding and core booking automated with Alkami's MANTL.", sources: ["ft-mantl-2026"] },
    { date: "2026-06-01", title: "The mainframe goes: CIO's cloud-first claim", detail: "700 applications migrated; CiZi −44% call volume; +55% output for engineers on advanced agents.", sources: ["ab-ruttledge-2026"] },
    { date: "2026-07-08", title: "Coughlin's expanded role", detail: "All primary business lines plus the AI-led technology overhaul; seen as the next CEO.", sources: ["ab-coughlin-ceo-2026", "ft-coughlin-2026"] },
    { date: "2026-09-02", title: "Unifying business, private banking and wealth", detail: "Product, technology and geographic investments to spin the 'massive flywheel' faster.", sources: ["bankingdive-flywheel-2026"] }
  ],
  useCases: [
    { useCase: "customer-chatbots", name: "CiZi", detail: "Mobile-app AI assistant; call volume down 44%.", status: "In production", sources: ["ab-ruttledge-2026", "cfg-cizi-2026"] },
    { useCase: "generative-agentic-ai", name: "Coding agents", detail: "GitHub Copilot's agent for ~800 developers; +55% output for advanced-agent users.", status: "In production", sources: ["ab-agents-humans-2025", "ab-ruttledge-2026"] },
    { useCase: "generative-agentic-ai", name: "Legacy code conversion", detail: "Gen AI rewrites old code for the cloud; mortgage system in six weeks.", status: "In production", sources: ["ab-agents-humans-2025"] },
    { useCase: "aml-kyc", name: "Automated account opening (MANTL)", detail: "85%+ of application decisions automated, including KYC/AML/BSA checks.", status: "Rolling out", sources: ["ft-mantl-2026"] },
    { useCase: "generative-agentic-ai", name: "Frontline AI tools", detail: "Account opening time halved for frontline staff.", status: "In production", sources: ["ab-ruttledge-2026"] },
    { useCase: "fraud", name: "Payment-fraud defence", detail: "Head of fraud on AI deepfakes, BEC and bank impersonation.", status: "In production", sources: ["cfg-fraud-2026"] }
  ],
  numbers: [
    { label: "Reimagine the Bank", value: "≈ $300 million over ≈ 3 years; $450 million run-rate benefit", asOf: "2026-03-27", sources: ["ab-reimagine-2026", "ab-tech-overhaul-2026"] },
    { label: "CiZi effect on call volume", value: "−44%", asOf: "2026-06-01", sources: ["ab-ruttledge-2026"] },
    { label: "Engineering output", value: "+10% overall; +55% with advanced agents", asOf: "2026-06-01", sources: ["ab-ruttledge-2026"] },
    { label: "Developers with coding agents", value: "≈ 800 (half)", asOf: "2025-11-20", sources: ["ab-agents-humans-2025"] },
    { label: "Applications migrated to cloud", value: "700 in four years", asOf: "2026-06-01", sources: ["ab-ruttledge-2026"] },
    { label: "Total assets", value: "$227.9 billion", asOf: "2026-03-31", sources: ["ft-coughlin-2026"] }
  ],
  quotes: [
    { who: "Brendan Coughlin", role: "President", date: "2026-03-27", quote: "The technology is in a spot at the moment where it's not hopes and dreams. It's here and present right now, and we're leveraging it.", sources: ["ab-reimagine-2026"] },
    { who: "Michael Ruttledge", role: "CIO", date: "2026-06-01", quote: "We are the first super-regional bank to move its entire mainframe and every business application into the cloud.", sources: ["ab-ruttledge-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "National bank; the revised model risk guidance and the OCC's gen-AI posture apply to a program this broad.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "cfpb", why: "CiZi is a consumer chatbot and account opening is automated; UDAAP, the chatbot spotlight and ECOA apply.", docSlugs: ["cfpb-chatbots-in-consumer-finance-2023", "cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "fincen", why: "Automating 85% of KYC/AML/BSA decisions at onboarding sits inside the BSA/AML program rule.", docSlugs: ["fincen-aml-cft-program-nprm-2026"] },
    { authority: "federal-reserve", why: "Cloud, Infosys, Alkami/MANTL and GitHub are third-party relationships under interagency guidance.", docSlugs: ["fed-sr-23-4"] },
    { authority: "ny-dfs", why: "New York expansion and Part 500 obligations for DFS-licensed activities.", docSlugs: ["ny-dfs-23-nycrr-part-500"] }
  ],
  suggestions: [
    { title: "The cloud claim is the real differentiator", detail: "Retiring the last mainframe removes the constraint that keeps most regionals' AI at the edges. If the claim holds, Citizens can run agents on core processes years before peers." },
    { title: "Automating 85% of onboarding decisions concentrates BSA/AML risk in a vendor rule-set", detail: "The efficiency is real; the question examiners will ask is who owns the decision logic and how exceptions are reviewed." },
    { title: "A program 'not needed to hit targets' is a hedge that can turn into a promise", detail: "Keeping $450 million out of guidance protects credibility now; investors will expect it to show up by 2028." },
    { title: "The next CEO is the AI program's owner", detail: "Coughlin's expanded role ties succession to the overhaul's success — an unusually direct link between AI execution and leadership." }
  ],
  faq: [
    { q: "What is Citizens' Reimagine the Bank program?", a: "Reimagine the Bank is Citizens Financial Group's three-year, roughly $300 million initiative, launched in 2025, to redesign how it serves customers and runs the bank using generative and agentic AI. The bank expects about $450 million of run-rate benefits by 2028 and says its profitability targets do not depend on them. President Brendan Coughlin leads it." },
    { q: "What is CiZi?", a: "CiZi is the AI-powered assistant built into the Citizens mobile app. It walks customers through tasks such as updating information, checking balances and reporting lost cards, and the bank says it has reduced mobile-banking-related call volume by 44%." }
  ],
  sources: [
    { id: "ab-reimagine-2026", title: "Citizens details how AI is speeding everything up", publisher: "American Banker", url: "https://www.americanbanker.com/news/citizens-details-how-ai-is-speeding-everything-up", date: "2026-03-27" },
    { id: "ab-ruttledge-2026", title: "Citizens Financial's Michael Ruttledge is #43 on the Most Innovative People in Finance ranking", publisher: "American Banker", url: "https://www.americanbanker.com/news/citizen-financials-michael-ruttledge-is-43-on-the-most-innovative-people-in-finance-ranking", date: "2026-06-01" },
    { id: "ab-inside-plan-2025", title: "Inside Citizens' plan to reimagine itself with AI", publisher: "American Banker", url: "https://www.americanbanker.com/news/inside-citizens-plan-to-reimagine-itself-with-ai", date: "2025-12-01" },
    { id: "ab-agents-humans-2025", title: "How Citi, Citizens, TD deploy AI agents without upsetting humans", publisher: "American Banker", url: "https://www.americanbanker.com/news/how-citi-citizens-td-deploy-ai-agents-without-upsetting-humans", date: "2025-11-20" },
    { id: "ab-tech-overhaul-2026", title: "Citizens lays out tech overhaul, says profit goals are close", publisher: "American Banker", url: "https://www.americanbanker.com/news/citizens-lays-out-tech-overhaul-says-profit-goals-are-close", date: "2026-01-21" },
    { id: "ab-coughlin-ceo-2026", title: "Citizens' latest move further positions Coughlin as next CEO", publisher: "American Banker", url: "https://www.americanbanker.com/news/citizens-latest-move-further-positions-coughlin-as-next-ceo", date: "2026-07-09" },
    { id: "ab-ai-enabled-bank-2026", title: "The AI-Enabled Bank: Reimagining Retail Banking from Branch to Mobile", publisher: "American Banker", url: "https://www.americanbanker.com/leaders/the-ai-enabled-bank-reimagining-retail-banking-from-branch-to-mobile", date: "2026-06-17" },
    { id: "bankingdive-coughlin-2026", title: "Citizens' Coughlin talks 'overwhelming' pace of AI change", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/citizens-ai-banking-reimagine-coughlin/815965/", date: "2026-03-27" },
    { id: "bankingdive-smb-2025", title: "Small businesses turn to financial advice, data for growth: Citizens survey", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/small-businesses-turn-financial-advice-data-growth-citizens-survey/756992/", date: "2025-08-06" },
    { id: "bankingdive-flywheel-2026", title: "Citizens targets gap between consumer, commercial banking", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/citizens-business-banking-private-bank-growth-mobile/829398/", date: "2026-09-02" },
    { id: "cfg-proxy-2026", title: "2026 Proxy Statement", publisher: "Citizens Financial Group", url: "https://investor.citizensbank.com/~/media/Files/C/CitizensBank-IR/cfg-pxy-2026-wo24-web-ready.pdf", date: "2026-03-05" },
    { id: "cfg-cizi-2026", title: "When you're busy, use CiZi", publisher: "Citizens", url: "https://www.citizensbank.com/learning/when-youre-busy-use-cizi.aspx", date: "2026-03-31" },
    { id: "cfg-fraud-2026", title: "What Treasurers Need to Know About Payment Fraud In An Increasingly Digital World", publisher: "Citizens", url: "https://www.citizensbank.com/corporate-finance/insights/digital-payment-fraud-cfo-treasurer-guide.aspx", date: "2026-01-30" },
    { id: "ft-mantl-2026", title: "Citizens Bank Expands Relationship with Alkami by Selecting MANTL", publisher: "PR Newswire via FT Markets", url: "https://markets.ft.com/data/announce/full?dockey=600-202605271000PR_NEWS_USPRX____DA64503-1", date: "2026-05-27" },
    { id: "ft-coughlin-2026", title: "Citizens Announces Expanded Role for President Brendan Coughlin", publisher: "Business Wire via FT Markets", url: "https://markets-data-api-proxy.ft.com/data/announce/detail?dockey=600-202607081630BIZWIRE_USPRX____20260708_BW034674-1", date: "2026-07-08" }
  ],
  lastUpdated: "2026-09-09"
};
