import type { Bank } from "@/lib/banks";

export const FROST: Bank = {
  slug: "frost",
  name: "Cullen/Frost Bankers",
  shortName: "Frost",
  ticker: "CFR",
  hq: "San Antonio, TX",
  fedRank: 44,
  leadBank: "Frost Bank",
  assetsUsdMillions: 52770,
  charter: "Texas state member bank (Federal Reserve)",
  posture: "A Texas-only, build-not-buy bank that talks about AI as a way to make its mobile app simpler and its account opening faster, and has kept its own AI claims modest.",
  platform: {
    name: "Frost mobile app and Blend digital origination",
    detail: "Frost's consumer technology runs through a mobile app it launched a decade ago and has deliberately kept simple; Jimmy Stead, chief consumer banking and technology officer, expects AI to let customers 'in your own words, tell the app what you need to do'. Account opening and lending run on Blend, first for home equity, mortgage and consumer loans from 2020 and extended to deposits: completion rates rose from 50% to 80%, manual review fell from 15% to 3%, accounts open in six to seven minutes and net promoter score moved from 90 to 94. Blend's own agentic pre-underwriting system, Autopilot, has been in production across its lenders since March 2026, but Frost has not said whether it uses it. Frost is hiring AI engineers and an application-security analyst for AI.",
    sources: ["bankingdive-stead-2025", "ft-blend-2026", "ft-blend-autopilot-2026", "frost-careers"]
  },
  answerFirst:
    "Cullen/Frost Bankers, the $53 billion parent of Frost Bank and the largest bank headquartered in San Antonio, operates only in Texas, grows organically by building branches rather than buying banks (about 15 new branches and 150 hires planned for 2026) and applies the same build-over-buy instinct to technology. Its public AI position is customer-experience-led rather than efficiency-led. Jimmy Stead, chief consumer banking and technology officer and a member of the team that created Frost's online and mobile banking, told Banking Dive in January 2025 that after a decade of feature races AI would make banking apps 'smarter, and better, and more customized', letting customers describe what they need in their own words instead of following a bank-defined path. The most concrete numbers come from Frost's digital account-opening overhaul with Blend, disclosed in August 2026: completion rates up from 50% to 80%, manual review down from 15% to 3%, accounts opened in six to seven minutes, a 60% rise in completed digital applications and net promoter score up from 90 to 94, building on a lending partnership since 2020. Frost's re-entered mortgage business ended 2025 with $595 million of originations, 19% above goal, with its mortgage leader crediting integrated software rather than AI as such. The bank earned $170.4 million in the second quarter of 2026 and $169.3 million in the first. On the risk side, an April 2026 ransomware claim by the Everest group, which Frost attributed to a third-party tax-document vendor, illustrates the vendor concentration that regulators' third-party guidance targets. Frost has not disclosed AI spending, a head of AI or an internal generative-AI programme, though it is recruiting AI engineers and an AI application-security analyst.",
  keyPoints: [
    "AI framed around simplicity: the consumer-technology chief expects AI to reverse a decade of app-feature bloat by letting customers state tasks in plain language.",
    "Account opening with Blend: completion 50% to 80%, manual review 15% to 3%, six-to-seven-minute opens, NPS 90 to 94, digital completions up 60% (August 2026).",
    "Build-over-buy in branches and technology: 10 Texas branches opened in 2025, about 15 planned for 2026, no bank acquisitions; the CEO wants to win customers disrupted by rivals' mergers.",
    "Mortgage re-entry delivered $595 million of 2025 originations, 19% above plan, attributed to integrated systems rather than AI.",
    "Third-party risk made real: an April 2026 ransomware claim traced to a shared statement-printing and tax-document vendor, not Frost's own systems.",
    "No disclosed AI budget, AI leader or internal gen-AI rollout; hiring for AI engineering and AI application security."
  ],
  leadership: [
    { name: "Phil Green", role: "Chairman and CEO, Cullen/Frost Bankers", sources: ["bankingdive-texas-2026"] },
    { name: "Jimmy Stead", role: "Chief Consumer Banking and Technology Officer", sources: ["bankingdive-stead-2025"], linkedin: "https://www.linkedin.com/in/jimmy-stead-frost/" },
    { name: "Katie Keating", role: "EVP, Director of Consumer Products and Strategy", sources: ["ft-blend-2026"] },
    { name: "Brad Bremer", role: "SVP, Consumer Deposit Products", sources: ["ft-blend-2026"] },
    { name: "Beverly Hankinson", role: "SVP, Mortgage Loan Advisors Manager", sources: ["ab-mortgage-2026"] }
  ],
  timeline: [
    { date: "2025-01-29", title: "'AI will make banking apps simpler'", detail: "Stead on the next decade of mobile banking.", sources: ["bankingdive-stead-2025"] },
    { date: "2026-01-29", title: "Organic Texas growth despite M&A wave", detail: "About 15 branches and 150 hires in 2026; CEO targets rivals' disrupted customers.", sources: ["bankingdive-texas-2026"] },
    { date: "2026-04-22", title: "Ransomware claim attributed to a vendor", detail: "Everest claims 250,000 Frost records; bank cites a third-party tax-document vendor.", sources: ["ab-breach-2026"] },
    { date: "2026-04-30", title: "First-quarter 2026 results", detail: "Net income available to common $169.3 million.", sources: ["frost-q1-2026"] },
    { date: "2026-05-12", title: "Mortgage unit beats goal with integrated software", detail: "$595 million of 2025 originations, 19% above plan.", sources: ["ab-mortgage-2026"] },
    { date: "2026-07-30", title: "Second-quarter 2026 results", detail: "Net income available to common $170.4 million, $2.70 per share.", sources: ["frost-q2-2026"] },
    { date: "2026-08-18", title: "Blend account-opening results published", detail: "Completion 80%, manual review 3%, NPS 94.", sources: ["ft-blend-2026"] },
    { date: "2026-08-20", title: "Blend reports agentic Autopilot results across lenders", detail: "50,000-plus live loans since March 2026; Frost's participation undisclosed.", sources: ["ft-blend-autopilot-2026"] }
  ],
  useCases: [
    { useCase: "customer-chatbots", name: "Conversational, personalised mobile banking", detail: "Stated direction: customers describe tasks in their own words; not yet launched.", status: "Announced", sources: ["bankingdive-stead-2025"] },
    { useCase: "credit-underwriting", name: "Digital account opening and lending on Blend", detail: "Automated review cut manual handling to 3%; lending on Blend since 2020.", status: "In production", sources: ["ft-blend-2026"] },
    { useCase: "third-party-vendors", name: "Vendor-breach response", detail: "Statement and tax-document vendor compromise; limited-exposure framing.", status: "In production", sources: ["ab-breach-2026"] },
    { useCase: "cybersecurity", name: "AI application security", detail: "Hiring an application-security analyst dedicated to AI integrations.", status: "Rolling out", sources: ["frost-careers"] }
  ],
  numbers: [
    { label: "Digital account-opening completion rate", value: "50% → 80%", asOf: "2026-08-18", sources: ["ft-blend-2026"] },
    { label: "Applications needing manual review", value: "15% → 3%", asOf: "2026-08-18", sources: ["ft-blend-2026"] },
    { label: "Net promoter score after launch", value: "90 → 94", asOf: "2026-08-18", sources: ["ft-blend-2026"] },
    { label: "2025 mortgage originations", value: "$595 million (19% above goal)", asOf: "2026-05-12", sources: ["ab-mortgage-2026"] },
    { label: "Second-quarter 2026 net income to common", value: "$170.4 million", asOf: "2026-07-30", sources: ["frost-q2-2026"] },
    { label: "New Texas branches planned for 2026", value: "≈ 15 (≈ 150 hires)", asOf: "2026-01-29", sources: ["bankingdive-texas-2026"] }
  ],
  quotes: [
    { who: "Jimmy Stead", role: "Chief Consumer Banking and Technology Officer", date: "2025-01-29", quote: "We're entering a time where you can really, in your own words, tell the app what you need to do, and it'll walk you through that. It's more on your terms.", sources: ["bankingdive-stead-2025"] },
    { who: "Beverly Hankinson", role: "SVP, Mortgage Loan Advisors Manager", date: "2026-05-12", quote: "I don't know that technology is influencing goals, but it certainly is allowing us to achieve those in a manner that we probably couldn't if we didn't have what we have.", sources: ["ab-mortgage-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "Frost Bank is a Texas state member bank; the Fed's model-risk and third-party guidance govern Blend-based decisioning and the vendor breach.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Automated account-opening and consumer lending decisions carry ECOA adverse-action and UDAAP obligations.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action", "cfpb-chatbots-in-consumer-finance-2023"] },
    { authority: "fdic", why: "Deposit account opening and the vendor incident touch FDIC operational-risk expectations for state banks.", docSlugs: ["fdic-fil-29-2023"] }
  ],
  suggestions: [
    { title: "The Blend numbers are the best AI-adjacent disclosure Frost has", detail: "Manual review at 3% is an automation result; naming what does the reviewing would help examiners and investors distinguish rules from models." },
    { title: "Autopilot is the question to ask", detail: "Blend's agentic pre-underwriting is live across its lenders; whether Frost has opted in determines whether it now runs an agent in credit." },
    { title: "Vendor concentration is the risk that materialised", detail: "The 2026 breach came through outsourced document fulfilment, the kind of concentrated vendor that AI-era third-party guidance singles out." },
    { title: "A conversational app is a CFPB chatbot question", detail: "Stead's vision of plain-language banking is exactly what the CFPB's chatbot circular scrutinises; design for escalation to humans from the start." }
  ],
  faq: [
    { q: "Does Frost Bank use AI?", a: "Frost has described AI as the technology that will make its mobile app simpler and more personalised, and it automates digital account opening and lending through Blend, which cut manual review from 15% to 3%. It has not disclosed an internal generative-AI programme, an AI budget or a head of AI, though it is hiring AI engineers." },
    { q: "What happened in Frost Bank's 2026 data breach?", a: "In April 2026 the Everest ransomware group claimed to hold about 250,000 Social Security and taxpayer identification numbers from Frost. Frost attributed the incident to a third-party vendor that handles tax-document fulfilment, and analysts said the samples suggested a shared vendor compromise also affecting Citizens, not a breach of Frost's own systems." }
  ],
  sources: [
    { id: "ab-breach-2026", title: "Citizens, Frost blame vendor after data breach claim", publisher: "American Banker", url: "https://www.americanbanker.com/news/citizens-frost-blame-vendor-after-data-breach-claim", date: "2026-04-22" },
    { id: "ab-mortgage-2026", title: "How AI is supporting bank mortgage growth plans", publisher: "American Banker", url: "https://www.americanbanker.com/news/how-ai-is-supporting-bank-mortgage-growth-plans", date: "2026-05-12" },
    { id: "bankingdive-stead-2025", title: "Frost Bank exec: AI will make mobile banking apps simpler", publisher: "Banking Dive", url: "https://bankingdive.com/news/ai-mobile-banking-apps-digital-customer-experience-frost-bank/738610", date: "2025-01-29" },
    { id: "bankingdive-texas-2026", title: "Frost Bank sticks to organic growth as Texas M&A heats up", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/frost-bank-texas-growth-mergers-acquisitions-fifth-third-huntington/811110/", date: "2026-01-29" },
    { id: "ft-blend-2026", title: "Frost Bank Achieves 60% Increase in Digital Account Openings With Blend", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/full?dockey=600-202608180800BIZWIRE_USPRX____20260818_BW315276-1", date: "2026-08-18" },
    { id: "ft-blend-autopilot-2026", title: "Early Production Results for Blend's Autopilot Show What Agentic AI Means For Lending", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/full?dockey=600-202608200800BIZWIRE_USPRX____20260820_BW158280-1", date: "2026-08-20" },
    { id: "frost-q1-2026", title: "Cullen/Frost Reports First Quarter Results", publisher: "Cullen/Frost Bankers", url: "https://frostbank.com/dam/Docs/Newsroom/NewsRelease/CullenFrostBankersReportsFirstQuarterResults-April302026.pdf", date: "2026-04-30" },
    { id: "frost-q2-2026", title: "Cullen/Frost Reports Second Quarter Results", publisher: "Cullen/Frost Bankers", url: "https://frostbank.com/dam/Docs/Newsroom/NewsRelease/CullenFrostBankersReportsSecondQuarterResults-July302026.pdf", date: "2026-07-30" },
    { id: "frost-careers", title: "Technology and digital jobs at Frost (Engineer III - AI; Application Security Analyst II - AI)", publisher: "Frost Bank", url: "https://careers.frostbank.com/us/en/c/technology-digital-jobs?from=10&s=1", date: "2026-09-01" }
  ],
  lastUpdated: "2026-09-10"
};
