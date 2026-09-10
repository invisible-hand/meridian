import type { Bank } from "@/lib/banks";

export const BARCLAYS_US: Bank = {
  slug: "barclays-us",
  name: "Barclays US Consumer Bank",
  shortName: "Barclays US",
  ticker: "BCS (Barclays PLC)",
  hq: "Wilmington, DE",
  fedRank: 48,
  leadBank: "Barclays Bank Delaware",
  assetsUsdMillions: 46648,
  charter: "Delaware state nonmember bank (FDIC); subsidiary of Barclays PLC",
  posture: "A co-brand credit-card issuer that has put generative AI into its contact centres at scale (eight million call summaries in four months) under a group-wide AI programme, and is adding an $800 million personal-loan platform.",
  platform: {
    name: "GenAI call summarisation under Barclays' group AI programme",
    detail: "Since October 2025 Barclays US Consumer Bank has used generative AI to summarise contact-centre calls, capturing the reason for the call, actions taken and next steps so that the next agent starts with context; more than eight million calls had been summarised by February 2026, with shorter resolution times, fewer repeat calls and better satisfaction scores reported. The tool does not make account decisions or talk to customers. It sits inside Barclays PLC's group strategy for scaling agentic and generative AI, which in markets includes BARXBot, a client-facing gen-AI chatbot for requests for quotes, and in research a new global head of data science and applied AI. Fraud detection on cards uses BioCatch behavioural biometrics. Best Egg, acquired for $800 million on 1 May 2026, adds a direct-to-consumer personal-loan origination platform with $11 billion of serviced loans.",
    sources: ["barclays-genai-2026", "ab-bestegg-2025", "ab-agentic-2026", "ft-athreya-2026"]
  },
  answerFirst:
    "Barclays US Consumer Bank, the Wilmington, Delaware card issuer that runs co-brand programmes for JetBlue, Wyndham, Carnival, Gap and, since 2025, General Motors, with about 20 million customers and roughly $32 billion of receivables, has one of the clearest disclosed production generative-AI deployments among midsize US banks. Since October 2025 it has used GenAI to summarise every contact-centre interaction, capturing the reason for the call, actions taken and next steps so agents have context for complex or repeat calls; by 5 February 2026 more than eight million calls had been summarised, and chief operating officer Tony Castañon said the bank was measuring 'shorter call resolution times, fewer repeat calls and improved customer satisfaction scores'. The bank is explicit that the tool does not make decisions about accounts or interact with customers, which keeps it outside the CFPB's chatbot concerns. The deployment is part of Barclays PLC's group programme for scaling agentic and generative AI, alongside a gen-AI chatbot for quotes in global markets and, from April 2026, a global head of data science and applied AI in research. On the risk side, Barclays is a named user of BioCatch behavioural biometrics against bots and fraud, relevant as agentic shopping bots begin to transact with cards. Strategically the US bank is growing beyond cards: it completed the $800 million acquisition of Best Egg, a direct-to-consumer personal-loan platform servicing $11 billion of loans, on 1 May 2026, and its expanded Visa agreement of October 2025 explicitly covers agentic commerce. Barclays Bank Delaware is a state nonmember bank supervised by the FDIC and, as a foreign-owned card lender, sits under the CFPB's credit-card rules; it does not disclose US AI spending separately from the group.",
  keyPoints: [
    "Production gen-AI at scale: contact-centre call summaries since October 2025, more than eight million by February 2026, with measured gains in resolution time, repeat calls and satisfaction.",
    "Deliberately non-decisional: the tool does not act on accounts or speak to customers; qualified agents keep those responsibilities.",
    "Part of a group programme: Barclays PLC's strategy for scaling agentic and generative AI includes a markets chatbot (BARXBot) and a new global head of data science and applied AI in research (April 2026).",
    "Fraud and agentic commerce: BioCatch behavioural biometrics in use; the expanded Visa partnership (October 2025) targets agentic commerce and account-to-account payments.",
    "Growth beyond cards: Best Egg acquired for $800 million (closed 1 May 2026), adding a personal-loan origination platform servicing $11 billion of loans.",
    "Scale: about 20 million customers, ~$32 billion of card receivables; GM card issuance won from Goldman Sachs in 2025."
  ],
  leadership: [
    { name: "Denny Nealon", role: "CEO, Barclays US Consumer Bank", sources: ["ab-bestegg-2025"], linkedin: "https://www.linkedin.com/in/denny-nealon-763663b/" },
    { name: "Tony Castañon", role: "Chief Operating Officer, Barclays US Consumer Bank", sources: ["barclays-genai-2026"] },
    { name: "Lili Tomovich", role: "Chief Marketing and Experience Officer", sources: ["bankingdive-cmo-2025"] },
    { name: "Sahana Athreya", role: "Global Head of Data Science and Applied AI, Barclays Research (group)", sources: ["ft-athreya-2026"], linkedin: "https://www.linkedin.com/in/sahana-athreya/" }
  ],
  timeline: [
    { date: "2025-10-28", title: "Best Egg acquisition announced for $800 million", detail: "Personal-loan platform to complement partnership cards; close expected Q2 2026.", sources: ["ab-bestegg-2025"] },
    { date: "2025-10-29", title: "Visa partnership expanded with agentic-commerce focus", detail: "Covers US retail issuing and new payment experiences including agentic commerce.", sources: ["pymnts-visa-2025"] },
    { date: "2025-11-03", title: "US CMO on the partnership model", detail: "20 million customers and ~$32 billion of receivables; GM card won in 2025.", sources: ["bankingdive-cmo-2025"] },
    { date: "2026-02-05", title: "GenAI call summaries disclosed", detail: "Eight million-plus calls summarised since October 2025; no account decisions by AI.", sources: ["barclays-genai-2026"] },
    { date: "2026-03-18", title: "Named BioCatch user as agentic shopping bots emerge", detail: "Behavioural biometrics to tell customers from fraudsters and bots.", sources: ["ab-agentic-2026"] },
    { date: "2026-04-14", title: "Global head of data science and applied AI appointed", detail: "Barclays Research hires Sahana Athreya in New York.", sources: ["ft-athreya-2026"] },
    { date: "2026-05-01", title: "Best Egg acquisition completed", detail: "Barclays Bank Delaware closes the $800 million purchase.", sources: ["ab-bestegg-2025"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "GenAI contact-centre call summarisation", detail: "Reason, actions and next steps captured for every call; 8 million-plus summaries.", status: "In production", sources: ["barclays-genai-2026"] },
    { useCase: "fraud", name: "Behavioural biometrics (BioCatch)", detail: "Distinguishes customers from fraudsters and automated bots.", status: "In production", sources: ["ab-agentic-2026"] },
    { useCase: "generative-agentic-ai", name: "Agentic commerce readiness with Visa", detail: "Expanded agreement targets agent-initiated and account-to-account payments.", status: "Announced", sources: ["pymnts-visa-2025"] },
    { useCase: "credit-underwriting", name: "Best Egg digital personal-loan origination", detail: "Direct-to-consumer platform with $40 billion originated since 2013.", status: "In production", sources: ["ab-bestegg-2025"] },
    { useCase: "trading-markets", name: "Group gen-AI in markets and research", detail: "BARXBot for RFQs; applied-AI team embedding alternative data in research.", status: "In production", sources: ["ft-athreya-2026"] }
  ],
  numbers: [
    { label: "Calls summarised by GenAI since October 2025", value: "> 8 million", asOf: "2026-02-05", sources: ["barclays-genai-2026"] },
    { label: "US card customers / receivables", value: "≈ 20 million / ≈ $32 billion", asOf: "2025-11-03", sources: ["bankingdive-cmo-2025"] },
    { label: "Best Egg acquisition", value: "$800 million; $11 billion serviced portfolio", asOf: "2026-05-01", sources: ["ab-bestegg-2025"] },
    { label: "Personal loans facilitated by Best Egg since 2013", value: "> $40 billion", asOf: "2025-10-28", sources: ["ab-bestegg-2025"] }
  ],
  quotes: [
    { who: "Tony Castañon", role: "Chief Operating Officer, Barclays US Consumer Bank", date: "2026-02-05", quote: "We continue to measure the benefits from shorter call resolution times, fewer repeat calls and improved customer satisfaction scores.", sources: ["barclays-genai-2026"] },
    { who: "Lili Tomovich", role: "Chief Marketing and Experience Officer", date: "2025-11-03", quote: "We're very much focused on the digital ecosystem experience, and then our partners help develop the experiential side.", sources: ["bankingdive-cmo-2025"] }
  ],
  regulatory: [
    { authority: "fdic", why: "Barclays Bank Delaware is a state nonmember bank; the FDIC is its primary federal supervisor for AI in servicing and fraud.", docSlugs: ["fdic-fil-29-2023"] },
    { authority: "cfpb", why: "Card servicing, personal lending through Best Egg and any future customer-facing AI fall under the chatbot circular, ECOA and credit-card rules.", docSlugs: ["cfpb-chatbots-in-consumer-finance-2023", "cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "federal-reserve", why: "Barclays' US intermediate holding company is Fed-supervised; group AI governance flows through it.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "uk", why: "Group AI strategy and model risk are set in London under the PRA's model-risk principles and the UK regulators' AI surveys.", docSlugs: ["pra-ss1-23-model-risk-management", "uk-ai-in-financial-services-survey-2026"] }
  ],
  suggestions: [
    { title: "Call summarisation is the safe first agentic step", detail: "Eight million summaries with no decision authority is the template other card issuers will copy; the measured metrics make it auditable." },
    { title: "Best Egg brings model-driven credit into scope", detail: "A digital personal-loan platform runs on underwriting models; expect ECOA adverse-action and fair-lending questions to move from cards to loans." },
    { title: "Agentic commerce makes the issuer the gatekeeper", detail: "As shopping agents transact on cards, Barclays' BioCatch signals and Visa agent rails decide which bots are customers; publish the policy." },
    { title: "US AI spend is undisclosed", detail: "Group-level AI investment is reported in London; a US breakdown would help FDIC and CFPB examiners size the programme." }
  ],
  faq: [
    { q: "How does Barclays US Consumer Bank use generative AI?", a: "Since October 2025 it has used generative AI to summarise contact-centre calls, recording the reason for the call, the actions taken and next steps so agents have context. More than eight million calls had been summarised by February 2026. The tool does not make decisions about customer accounts or interact with customers directly." },
    { q: "What is Barclays Bank Delaware?", a: "Barclays Bank Delaware, operating as Barclays US Consumer Bank, is the Wilmington-based US consumer banking subsidiary of Barclays PLC. It issues co-brand credit cards for partners such as JetBlue, Wyndham, Carnival and General Motors, takes online deposits, and since 1 May 2026 owns Best Egg, a personal-loan origination platform." }
  ],
  sources: [
    { id: "ab-agentic-2026", title: "Agentic AI shopping bots are coming. Banks need to be ready", publisher: "American Banker", url: "https://www.americanbanker.com/news/agentic-ai-shopping-bots-are-coming-banks-need-to-be-ready", date: "2026-03-18" },
    { id: "ab-bestegg-2025", title: "Barclays to buy Best Egg for $800M and expand U.S. footprint", publisher: "American Banker", url: "https://www.americanbanker.com/news/barclays-to-buy-best-egg-for-800m-and-expand-u-s-footprint", date: "2025-10-28" },
    { id: "bankingdive-cmo-2025", title: "6 questions with Barclays' US CMO", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/6-questions-with-barclays-us-cmo/804511/", date: "2025-11-03" },
    { id: "barclays-genai-2026", title: "Barclays harnesses GenAI to deliver world-class customer service", publisher: "Barclays", url: "https://home.barclays/news/press-releases/20260/02/barclays-harnesses-genai-to-deliver-world-class-customer-service1/", date: "2026-02-05" },
    { id: "ft-athreya-2026", title: "Barclays Research Appoints Sahana Athreya as Global Head of Data Science & Applied AI", publisher: "Business Wire via FT Markets", url: "https://markets-data-api-proxy.ft.com/data/announce/full?dockey=600-202604141058BIZWIRE_USPRX____20260414_BW065778-1", date: "2026-04-14" },
    { id: "pymnts-visa-2025", title: "Visa and Barclays Expand Partnership With Agentic Commerce Focus", publisher: "PYMNTS", url: "https://www.pymnts.com/partnerships/2025/visa-barclays-expand-partnership-with-agentic-commerce-focus/", date: "2025-10-29" }
  ],
  lastUpdated: "2026-09-10"
};
