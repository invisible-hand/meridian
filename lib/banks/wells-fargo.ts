import type { Bank } from "@/lib/banks";

export const WELLS_FARGO: Bank = {
  slug: "wells-fargo",
  name: "Wells Fargo",
  shortName: "Wells Fargo",
  ticker: "WFC",
  hq: "San Francisco, CA",
  fedRank: 4,
  leadBank: "Wells Fargo Bank, N.A.",
  assetsUsdMillions: 1852239,
  charter: "National bank (OCC)",
  posture: "Google-first agents on a cloud-agnostic platform, run by a newly named head of AI, with headcount managed down through attrition.",
  platform: {
    name: "Fargo and the Google Cloud agent stack",
    detail: "Fargo, the consumer virtual assistant built on Google's conversational AI, went to 21.3 million interactions in 2023 and 245 million in 2024 without customer data reaching a large language model; in August 2025 the bank began rolling Google Cloud's Agentspace, Gemini Deep Research and NotebookLM to all 215,000 employees.",
    sources: ["wf-4q23", "venturebeat-fargo-2025", "ab-agentspace-2025"]
  },
  answerFirst:
    "Wells Fargo's AI strategy is defined by three choices made since 2021: a deep relationship with Google Cloud (alongside Microsoft Azure) that powers both the Fargo consumer assistant and the enterprise agent rollout; an AI platform its payments chief describes as model- and cloud-agnostic so newer models can be swapped in; and, since November 2025, a single accountable executive — Saul Van Beurden, named head of AI while co-running consumer banking. Freed from the Federal Reserve's asset cap in 2025, the bank pairs that build-out with an explicit efficiency agenda: CEO Charlie Scharf says engineers are 30–35% more efficient writing code with AI and that the workforce, already down from 275,000 to about 210,000 since 2019, will keep shrinking, mostly through attrition.",
  keyPoints: [
    "Fargo: full rollout in 2023 with Spanish-language capability; 21.3 million interactions in 2023, 245 million in 2024, with a privacy-first pipeline that keeps personal data away from the LLM.",
    "August 2025: generative and agentic AI to all 215,000 employees via Google Cloud's Agentspace, Gemini Deep Research and NotebookLM — one of the first enterprise-wide agent rollouts at a large bank.",
    "November 2025: Saul Van Beurden named head of AI; Kleber Santos and Van Beurden become co-CEOs of a combined consumer banking and lending unit. January 2026: Faraz Shafiq hired from AWS to run adoption of AI products.",
    "Consumer CIO and head of generative AI Tracy Kerrins manages a $4 billion budget and about 7,000 people; the AI platform is designed to be model- and cloud-agnostic.",
    "Most active US bank investor in AI companies: 81 venture deals since 2019, per Evident.",
    "Efficiency is stated plainly: 30–35% coding efficiency gain, $612 million of severance in Q4 2025, headcount expected to fall further."
  ],
  leadership: [
    { name: "Saul Van Beurden", role: "Head of AI; co-CEO, Consumer Banking and Lending", sources: ["wf-vanbeurden-2025", "bloomberg-shafiq-2026"], linkedin: "https://www.linkedin.com/in/saulvanbeurden/" },
    { name: "Tracy Kerrins", role: "CIO, Consumer Technology; Head of Enterprise Generative AI", sources: ["ab-kerrins-2025"], linkedin: "https://www.linkedin.com/in/tracymkerrins/" },
    { name: "Faraz Shafiq", role: "Head of AI product adoption (from AWS)", sources: ["bloomberg-shafiq-2026", "ab-shafiq-2026"], linkedin: "https://www.linkedin.com/in/fshafiq/" },
    { name: "Ather Williams III", role: "Head of Global Payments and Liquidity and Wholesale Digital", sources: ["ab-payments-2026"], linkedin: "https://www.linkedin.com/in/atherw/" }
  ],
  timeline: [
    { date: "2021-01-01", title: "Google Cloud and Microsoft Azure chosen as cloud partners", detail: "The relationship that later carries Fargo and the agent rollout.", sources: ["ab-agentspace-2025"] },
    { date: "2022-01-01", title: "Fargo to be powered by Google Cloud AI", detail: "The virtual assistant is built on Google's conversational product.", sources: ["ab-agentspace-2025", "ab-shafiq-2026"] },
    { date: "2023-12-31", title: "Fargo fully rolled out: 21.3 million interactions", detail: "Includes a Spanish-language capability, per the 4Q23 results.", sources: ["wf-4q23"] },
    { date: "2024-12-31", title: "245 million Fargo interactions in 2024", detail: "336 million since launch; speech transcribed locally, no personal data sent to the LLM.", sources: ["venturebeat-fargo-2025"] },
    { date: "2025-08-05", title: "Agentic AI to all 215,000 employees", detail: "Google Cloud Agentspace, Gemini Deep Research and NotebookLM; Kerrins: 'a big deal for us'.", sources: ["ab-agentspace-2025"] },
    { date: "2025-11-05", title: "Scharf: headcount will keep falling", detail: "From 275,000 in 2019 to a little over 210,000; further declines 'through attrition as possible'.", sources: ["reuters-headcount-2025"] },
    { date: "2025-11-20", title: "Van Beurden named head of AI", detail: "Santos and Van Beurden become co-CEOs of consumer banking and lending.", sources: ["wf-vanbeurden-2025", "ab-vanbeurden-2025"] },
    { date: "2025-12-09", title: "AI makes engineers 30–35% more efficient", detail: "Scharf at the Goldman Sachs conference; more job cuts and higher severance expected.", sources: ["bloomberg-scharf-2025", "reuters-cuts-2025"] },
    { date: "2026-01-14", title: "$612 million severance in Q4 2025", detail: "Streamlining under Scharf; the stock falls 4.6% on the miss.", sources: ["reuters-severance-2026"] },
    { date: "2026-01-26", title: "AWS executive hired to expand AI use", detail: "Faraz Shafiq to study company-wide needs for generative and agentic AI and manage those products.", sources: ["bloomberg-shafiq-2026"] },
    { date: "2026-04-20", title: "Most active US bank AI venture investor", detail: "81 AI venture deals since 2019.", sources: ["ab-venture-2026"] },
    { date: "2026-04-29", title: "Wall Street expansion post asset cap", detail: "Freed from the Fed cap in 2025, the bank invests in trading and crosses $2 trillion of assets.", sources: ["wsj-expansion-2026"] },
    { date: "2026-05-05", title: "Payments AI platform is model- and cloud-agnostic", detail: "Ather Williams at American Banker's Payments Forum.", sources: ["ab-payments-2026"] }
  ],
  useCases: [
    { useCase: "customer-chatbots", name: "Fargo", detail: "Consumer virtual assistant: bill pay, transfers, transaction lookups; 245 million interactions in 2024.", status: "In production", sources: ["venturebeat-fargo-2025"] },
    { useCase: "generative-agentic-ai", name: "Agentspace agents for employees", detail: "Agents to summarise complex FX inquiries and navigate compliance policies; research tools for all staff.", status: "Rolling out", sources: ["ab-agentspace-2025", "ab-shafiq-2026"] },
    { useCase: "generative-agentic-ai", name: "AI coding assistants", detail: "30–35% efficiency gain for engineers.", status: "In production", sources: ["bloomberg-scharf-2025"] },
    { useCase: "fraud", name: "Payments fraud defence", detail: "AI on payment flows of more than $1 trillion a day; guidance to corporate clients on generative-AI fraud.", status: "In production", sources: ["ab-williams-2026", "wf-fraud-insights"] },
    { useCase: "generative-agentic-ai", name: "Integrated receivables", detail: "Automation and AI match electronic payments to remittance data for commercial clients.", status: "In production", sources: ["wf-receivables"] }
  ],
  numbers: [
    { label: "Fargo interactions", value: "245 million (2024); 336 million since launch", asOf: "2025-04-08", sources: ["venturebeat-fargo-2025"] },
    { label: "Employees in the agent rollout", value: "215,000", asOf: "2025-08-05", sources: ["ab-agentspace-2025"] },
    { label: "Consumer technology / gen-AI budget", value: "$4 billion (Kerrins' organisation)", asOf: "2025-09-24", sources: ["ab-kerrins-2025"] },
    { label: "Coding efficiency gain", value: "30–35%", asOf: "2025-12-09", sources: ["bloomberg-scharf-2025"] },
    { label: "Headcount", value: "≈ 210,000, from 275,000 in 2019", asOf: "2025-11-05", sources: ["reuters-headcount-2025"] },
    { label: "AI venture deals since 2019", value: "81 (most of any US bank)", asOf: "2026-04-20", sources: ["ab-venture-2026"] }
  ],
  quotes: [
    { who: "Charlie Scharf", role: "CEO", date: "2025-11-05", quote: "It's likely we'll have less headcount as we look forward … we'd like to do much of it through attrition as possible.", sources: ["reuters-headcount-2025"] },
    { who: "Tracy Kerrins", role: "Head of Enterprise Generative AI", date: "2025-08-05", quote: "Our goal overall is to get generative AI tools in the hands of all of our employees.", sources: ["ab-agentspace-2025"] }
  ],
  regulatory: [
    { authority: "occ", why: "National bank; the revised model risk guidance and the interagency third-party guidance govern the Google Cloud dependency.", docSlugs: ["occ-bulletin-2026-13", "occ-bulletin-2023-17"] },
    { authority: "federal-reserve", why: "The asset cap imposed in 2018 was lifted in 2025; SR 26-2 and SR 23-4 apply to vendor-supplied models.", docSlugs: ["fed-sr-26-2", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Fargo is a consumer chatbot at scale; adverse-action duties apply to AI in consumer lending.", docSlugs: ["cfpb-chatbots-in-consumer-finance-2023", "cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "basel-committee", why: "A single-vendor agent platform is the concentration risk the Basel third-party principles address.", docSlugs: ["bcbs-third-party-risk-principles-2025"] }
  ],
  suggestions: [
    { title: "Vendor concentration is the question examiners will ask", detail: "Fargo, the agent rollout and research tools all run on Google Cloud. The 'cloud-agnostic' platform language is the answer the bank has prepared; the exit plan behind it is what the third-party guidance requires." },
    { title: "The privacy architecture is a differentiator worth publicising", detail: "Keeping personal data out of the LLM is exactly the design regulators describe for chatbots; it is also why Fargo scaled to hundreds of millions of interactions without a headline incident." },
    { title: "One accountable executive for AI arrived late but decisively", detail: "Naming a head of AI who also runs consumer banking ties AI to the P&L rather than to the technology function — the structure supervisors say they want to see." },
    { title: "Efficiency is the stated strategy, not a side effect", detail: "The severance charges and the attrition guidance mean AI productivity will show up in expense ratios first; the growth story is the newly uncapped balance sheet, not AI." }
  ],
  faq: [
    { q: "What is Fargo at Wells Fargo?", a: "Fargo is Wells Fargo's AI virtual assistant, built on Google Cloud's conversational AI and fully rolled out in 2023. It handles bill payments, transfers, transaction lookups and account questions by voice or text, and recorded 245 million interactions in 2024 with a design that keeps customers' personal data away from the language model." },
    { q: "Who leads AI at Wells Fargo?", a: "Saul Van Beurden was named head of AI in November 2025 while also becoming co-CEO of consumer banking and lending with Kleber Santos. Tracy Kerrins runs enterprise generative AI as consumer CIO, and Faraz Shafiq, hired from AWS in January 2026, oversees adoption of AI products." }
  ],
  sources: [
    { id: "wf-4q23", title: "4Q23 Financial Results", publisher: "Wells Fargo", url: "https://www.wellsfargo.com/assets/pdf/about/investor-relations/earnings/fourth-quarter-2023-financial-results.pdf", date: "2024-01-11" },
    { id: "wf-vanbeurden-2025", title: "Wells Fargo Names Saul Van Beurden to Lead Artificial Intelligence", publisher: "Wells Fargo via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202511201615BIZWIRE_USPRX____20251120_BW971693-1", date: "2025-11-20" },
    { id: "wf-fraud-insights", title: "Helping you protect your payments as AI changes the fraud landscape", publisher: "Wells Fargo", url: "https://www.wellsfargo.com/com/insights/protect-payments-as-ai-changes-landscape/", date: "2025-06-01" },
    { id: "wf-receivables", title: "How integrated receivables take the pain out of electronic payment posting", publisher: "Wells Fargo", url: "https://www.wellsfargo.com/com/insights/how-ir-takes-pain-from-receivable-posting/", date: "2025-06-01" },
    { id: "venturebeat-fargo-2025", title: "Wells Fargo's AI assistant just crossed 245 million interactions – no human handoffs, no sensitive data exposed", publisher: "VentureBeat", url: "https://venturebeat.com/business/wells-fargos-ai-assistant-just-crossed-245-million-interactions-with-zero-humans-in-the-loop-and-zero-pii-to-the-llm", date: "2025-04-08" },
    { id: "ab-agentspace-2025", title: "Wells Fargo plans to unleash Google's agentic AI bank-wide", publisher: "American Banker", url: "https://www.americanbanker.com/news/wells-fargo-plans-to-unleash-googles-agentic-ai-bank-wide", date: "2025-08-05" },
    { id: "ab-kerrins-2025", title: "The Most Powerful Women to Watch, No. 6, Tracy Kerrins, Wells Fargo", publisher: "American Banker", url: "https://www.americanbanker.com/news/2025-the-most-powerful-women-to-watch-no-6-tracy-kerrins-wells-fargo", date: "2025-09-24" },
    { id: "ab-vanbeurden-2025", title: "Wells Fargo taps head of consumer banking to lead on AI", publisher: "American Banker", url: "https://www.americanbanker.com/news/wells-fargo-taps-head-of-consumer-banking-to-lead-on-ai", date: "2025-11-25" },
    { id: "ab-shafiq-2026", title: "Wells Fargo hires AWS exec to lead AI strategy", publisher: "American Banker", url: "https://www.americanbanker.com/news/wells-fargo-hires-aws-exec-to-lead-ai-strategy", date: "2026-01-26" },
    { id: "ab-payments-2026", title: "How Wells Fargo deploys AI in payments", publisher: "American Banker", url: "https://www.americanbanker.com/payments/news/how-wells-fargo-deploys-ai-in-payments", date: "2026-05-05" },
    { id: "ab-williams-2026", title: "Ather Williams thinks unicorn fintechs have nothing on Wells Fargo's innovation", publisher: "American Banker", url: "https://www.americanbanker.com/news/wells-fargos-ather-williams-is-32-on-the-most-innovative-people-in-finance-ranking", date: "2026-06-01" },
    { id: "ab-venture-2026", title: "Wells Fargo, Citi and Goldman lead in AI venture investment", publisher: "American Banker", url: "https://www.americanbanker.com/news/wells-fargo-citi-and-goldman-lead-in-ai-venture-investment", date: "2026-04-20" },
    { id: "bloomberg-scharf-2025", title: "Wells Fargo CEO Sees AI Impacting Companies' Workforce Decisions", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2025-12-09/wells-fargo-ceo-sees-ai-impacting-companies-workforce-decisions", date: "2025-12-09" },
    { id: "bloomberg-shafiq-2026", title: "Wells Fargo Taps Amazon Web Services Executive to Expand AI Use", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-01-26/wells-fargo-taps-amazon-web-services-executive-to-expand-ai-use", date: "2026-01-26" },
    { id: "reuters-headcount-2025", title: "Wells Fargo CEO expects bank's workforce to shrink further", publisher: "Reuters", url: "https://www.reuters.com/business/finance/wells-fargo-ceo-says-bank-not-under-pressure-make-acquisitions-2025-11-05/", date: "2025-11-05" },
    { id: "reuters-cuts-2025", title: "Wells Fargo expects more job cuts, will roll out AI gradually in 2026", publisher: "Reuters", url: "https://www.reuters.com/business/finance/wells-fargo-sees-more-job-cuts-going-into-2026-2025-12-09/", date: "2025-12-09" },
    { id: "reuters-severance-2026", title: "Wells Fargo misses profit estimates on severance costs, shares fall", publisher: "Reuters", url: "https://www.reuters.com/business/finance/wells-fargo-profit-climbs-rising-interest-income-2026-01-14/", date: "2026-01-14" },
    { id: "wsj-expansion-2026", title: "Wells Fargo's Long-Anticipated Wall Street Expansion Is Here", publisher: "The Wall Street Journal", url: "https://www.wsj.com/finance/banking/wells-fargos-long-anticipated-wall-street-expansion-is-here-459201d2", date: "2026-04-29" }
  ],
  lastUpdated: "2026-09-09"
};
