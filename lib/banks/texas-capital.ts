import type { Bank } from "@/lib/banks";

export const TEXAS_CAPITAL: Bank = {
  slug: "texas-capital",
  name: "Texas Capital Bancshares",
  shortName: "Texas Capital",
  ticker: "TCBI",
  hq: "Dallas, TX",
  fedRank: 61,
  leadBank: "Texas Capital Bank",
  assetsUsdMillions: 33206,
  charter: "Texas state member bank (Federal Reserve)",
  posture: "A rebuilt Dallas bank that now runs on a cloud-native platform, has just hired a chief digital and information officer with AI enablement in his brief, and applies technology to the mortgage-asset trading market it knows best.",
  platform: {
    name: "Cloud-native platform, MAP mortgage-asset platform, CDIO-led AI enablement",
    detail: "Texas Capital says it serves clients 'through a fully integrated technology platform' whose 'agile, cloud-native technology infrastructure allows us to onboard clients as fast as any firm in the nation', and that it continues 'to make investments in automation, data and artificial intelligence'. On 13 July 2026 it appointed Mo Jamous chief digital and information officer to lead technology strategy and organisation, 'including infrastructure, enterprise architecture, application development, data platforms, artificial intelligence (AI) enablement and information security'. In May 2026 it launched MAP, the Texas Capital Mortgage Asset Platform powered by Black Lake Digital Markets' Dealer-in-a-Box technology, an end-to-end environment for financing, hedging, pricing, trading and transferring agency and non-QM loans and mortgage servicing rights in a market that 'still trade[s] based on spreadsheets and disconnected vendor stacks'.",
    sources: ["tcbi-lookahead-2026", "tcbi-jamous-2026", "tcbi-map-2026"]
  },
  answerFirst:
    "Texas Capital Bancshares, the Dallas parent of Texas Capital Bank with $33 billion of assets, is the regional bank whose multi-year turnaround under CEO Rob Holmes was declared 'mission accomplished' by analyst Tom Brown in March 2026, and its AI posture reflects that rebuild: technology is a platform it now owns rather than a problem it is fixing. Holmes' 2026 outlook says the bank serves clients through a fully integrated, cloud-native platform that can 'onboard clients as fast as any firm in the nation' and that it 'continue[s] to make investments in automation, data and artificial intelligence', while observing that AI 'seems to be reducing demand for entry-level talent in some industries' and that policy on AI and digital assets has been 'more favorable than anticipated'. The organisational step came on 13 July 2026 with the appointment of Mo Jamous as chief digital and information officer, responsible for infrastructure, enterprise architecture, application development, data platforms, AI enablement and information security. The product step came in May 2026 with MAP, the Texas Capital Mortgage Asset Platform built with Black Lake Digital Markets, which brings institutional trading infrastructure and warehouse connectivity to whole loans, pools and mortgage servicing rights that 'still trade based on spreadsheets'. The commercial results the platform sits on: investment-banking and advisory fees doubled to $32 million in the first quarter of 2026, the bank declared its first-ever dividend in April 2026 and launched a private-banking and family-office push modelled on its investment-banking playbook, and management plans a second attempt to redomicile from Delaware to Texas after a failed shareholder vote. Texas Capital Bank is a Texas state member bank supervised by the Federal Reserve; the bank has not disclosed AI spending, use-case counts or specific models.",
  keyPoints: [
    "A chief digital and information officer, Mo Jamous, appointed 13 July 2026 with AI enablement, data platforms and information security in one remit.",
    "CEO outlook: continued 'investments in automation, data and artificial intelligence' on a cloud-native platform that onboards clients 'as fast as any firm in the nation'.",
    "MAP (May 2026): an end-to-end mortgage-asset trading platform with Black Lake Digital Markets, replacing spreadsheet-based workflows for loans and MSRs.",
    "Turnaround complete: first-ever dividend (April 2026), investment-banking fees doubled to $32 million in Q1 2026, private-banking and family-office build-out launched.",
    "Governance agenda: a second attempt to redomicile from Delaware to Texas after shareholders rejected the first.",
    "No disclosed AI budget, model inventory or use-case count; AI is discussed at platform and talent level."
  ],
  leadership: [
    { name: "Rob C. Holmes", role: "President and CEO", linkedin: "https://www.linkedin.com/in/rob-c-holmes-45627998", sources: ["tcbi-lookahead-2026", "ab-dividend-2026"] },
    { name: "Mo Jamous", role: "Chief Digital and Information Officer (from July 2026)", linkedin: "https://www.linkedin.com/in/mo-jamous", sources: ["tcbi-jamous-2026"] }
  ],
  timeline: [
    { date: "2025-10-22", title: "'Promises Kept': the transformation recap", detail: "Bank marks completion of its multi-year rebuild.", sources: ["tcbi-promises-2025"] },
    { date: "2025-10-23", title: "CEO on Bloomberg: record growth", detail: "Segmented corporate-bank verticals; criticised loans down.", sources: ["tcbi-bloomberg-2025"] },
    { date: "2026-01-15", title: "2026 outlook: automation, data and AI investment", detail: "Cloud-native onboarding; AI's effect on entry-level hiring noted.", sources: ["tcbi-lookahead-2026"] },
    { date: "2026-03-13", title: "Analyst: 'mission accomplished'", detail: "Tom Brown's assessment of the turnaround.", sources: ["tcbi-brown-2026"] },
    { date: "2026-04-23", title: "First-ever dividend; private-banking push", detail: "Investment-banking fees doubled to $32 million in Q1.", sources: ["ab-dividend-2026"] },
    { date: "2026-05-18", title: "MAP mortgage-asset platform launched", detail: "Financing, hedging, pricing, trading and transfer of loans and MSRs.", sources: ["tcbi-map-2026"] },
    { date: "2026-07-13", title: "Chief digital and information officer appointed", detail: "Mo Jamous leads technology, data, AI enablement and security.", sources: ["tcbi-jamous-2026"] },
    { date: "2026-07-29", title: "Second attempt to redomicile to Texas planned", detail: "After a failed shareholder vote.", sources: ["ab-redomicile-2026"] }
  ],
  useCases: [
    { useCase: "trading-markets", name: "MAP mortgage-asset trading platform", detail: "Institutional-grade infrastructure for whole loans, pools and MSRs with warehouse connectivity.", status: "In production", sources: ["tcbi-map-2026"] },
    { useCase: "governance-general", name: "AI enablement under the CDIO", detail: "Data platforms, AI enablement and security in one technology organisation.", status: "Rolling out", sources: ["tcbi-jamous-2026"] },
    { useCase: "customer-chatbots", name: "Cloud-native client onboarding", detail: "Integrated platform cited for onboarding speed.", status: "In production", sources: ["tcbi-lookahead-2026"] },
    { useCase: "generative-agentic-ai", name: "Investment in automation, data and AI", detail: "Stated ongoing investment programme; no use cases named.", status: "Announced", sources: ["tcbi-lookahead-2026"] }
  ],
  numbers: [
    { label: "Investment-banking and advisory fees, Q1 2026", value: "$32 million (doubled y/y)", asOf: "2026-04-23", sources: ["ab-dividend-2026"] },
    { label: "First dividend", value: "Declared April 2026", asOf: "2026-04-23", sources: ["ab-dividend-2026"] },
    { label: "CDIO remit", value: "infrastructure, architecture, applications, data, AI enablement, security", asOf: "2026-07-13", sources: ["tcbi-jamous-2026"] }
  ],
  quotes: [
    { who: "Rob C. Holmes", role: "President and CEO", date: "2026-01-15", quote: "Our agile, cloud-native technology infrastructure allows us to onboard clients as fast as any firm in the nation. We continue to make investments in automation, data and artificial intelligence.", sources: ["tcbi-lookahead-2026"] },
    { who: "Texas Capital", role: "MAP launch announcement", date: "2026-05-18", quote: "Whole loans, pools and MSRs still trade based on spreadsheets and disconnected vendor stacks, creating execution risk for sellers and information asymmetry for buyers.", sources: ["tcbi-map-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "Texas Capital Bank is a state member bank; Fed model-risk and third-party guidance cover the Black Lake-powered MAP platform and any AI enablement.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "sec", why: "Texas Capital Securities and the mortgage-asset trading platform bring SEC and broker-dealer obligations to any AI in pricing or trading.", docSlugs: ["sec-exam-priorities-fy2026"] },
    { authority: "cfpb", why: "Private-banking and consumer products carry UDAAP and adverse-action duties for AI in decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] }
  ],
  suggestions: [
    { title: "The CDIO appointment is the moment to name use cases", detail: "Bundling AI enablement with data platforms and security is the right structure; the first public deliverables will show whether the platform claims translate into models." },
    { title: "MAP is a market-structure play with AI upside", detail: "Once loan and MSR trading runs on one platform, pricing and hedging analytics are the obvious AI layer, and a differentiated one for a bank of this size." },
    { title: "Talent commentary is unusually candid", detail: "A CEO noting that AI reduces entry-level demand invites the question of how the bank's own junior pipeline changes; that is a workforce disclosure in waiting." },
    { title: "Redomiciling does not change the supervisor", detail: "Moving incorporation to Texas affects corporate law, not Fed supervision of the bank's technology and model risk." }
  ],
  faq: [
    { q: "Who leads AI at Texas Capital?", a: "Mo Jamous, appointed chief digital and information officer on 13 July 2026, leads technology strategy including infrastructure, enterprise architecture, application development, data platforms, AI enablement and information security." },
    { q: "What is Texas Capital's MAP?", a: "MAP, the Texas Capital Mortgage Asset Platform, launched on 18 May 2026 with Black Lake Digital Markets. It is an end-to-end platform for financing, hedging, pricing, trading and transferring agency loans, non-QM loans and mortgage servicing rights, with integrated warehouse connectivity, in a market that has relied on spreadsheets and disconnected vendor systems." }
  ],
  sources: [
    { id: "ab-dividend-2026", title: "Texas Capital, buoyed by turnaround, to pay first-ever dividend", publisher: "American Banker", url: "https://www.americanbanker.com/news/texas-capital-buoyed-by-turnaround-to-pay-first-ever-dividend", date: "2026-04-23" },
    { id: "ab-redomicile-2026", title: "Why one bank is determined to reincorporate in Texas", publisher: "American Banker", url: "https://www.americanbanker.com/news/why-one-bank-is-determined-to-reincorporate-in-texas", date: "2026-07-29" },
    { id: "tcbi-promises-2025", title: "Promises Kept: Texas Capital's Transformation", publisher: "Texas Capital", url: "https://texascapitalbank.com/who-we-are/newsroom/news/2025/10/22/promises-kept-texas-capital-transformation", date: "2025-10-22" },
    { id: "tcbi-bloomberg-2025", title: "Rob C. Holmes highlights Texas Capital's record growth on Bloomberg's The Close", publisher: "Texas Capital", url: "https://texascapitalbank.com/who-we-are/newsroom/news/2025/10/23/rob-c-holmes-highlights-texas-capitals-record-growth-bloombergs-close", date: "2025-10-23" },
    { id: "tcbi-lookahead-2026", title: "A Look Ahead with Rob C. Holmes — 2026", publisher: "Texas Capital", url: "https://texascapitalbank.com/insights/look-ahead-rob-c-holmes-2026", date: "2026-01-15" },
    { id: "tcbi-brown-2026", title: "Analyst Tom Brown highlights Texas Capital transformation", publisher: "Texas Capital", url: "https://texascapitalbank.com/who-we-are/newsroom/news/2026/03/13/analyst-tom-brown-highlights-texas-capital-transformation", date: "2026-03-13" },
    { id: "tcbi-map-2026", title: "Texas Capital Launches MAP", publisher: "Texas Capital", url: "https://texascapitalbank.com/who-we-are/newsroom/news/2026/05/18/texas-capital-launches-maptm", date: "2026-05-18" },
    { id: "tcbi-jamous-2026", title: "Texas Capital Appoints Mo Jamous as Chief Digital and Information Officer", publisher: "Texas Capital", url: "https://texascapitalbank.com/news/2026/07/13/texas-capital-appoints-mo-jamous-chief-digital-and-information-officer", date: "2026-07-13" }
  ],
  lastUpdated: "2026-09-10"
};
