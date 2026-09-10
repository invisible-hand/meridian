import type { Bank } from "@/lib/banks";

export const BANKUNITED: Bank = {
  slug: "bankunited",
  name: "BankUnited",
  shortName: "BankUnited",
  ticker: "BKU",
  hq: "Miami Lakes, FL",
  fedRank: 57,
  leadBank: "BankUnited, N.A.",
  assetsUsdMillions: 35342,
  charter: "National bank (OCC)",
  posture: "A Florida commercial bank that positions security as the reason small businesses switch banks, publishes a steady stream of AI-fraud guidance, and argues that 'digital plus human' beats digital alone, without disclosing AI of its own.",
  answerFirst:
    "BankUnited, the $35.4 billion national bank headquartered in Miami Lakes with commercial offices in New York, Dallas, Atlanta and Charlotte, has built its public technology voice around fraud rather than AI deployment. Since 2024 it has published guides on safeguarding against AI fraud, AI-powered fraud for small businesses, AI voice-clone impersonation scams, AI-generated phishing 'without the typos', and why digital payments need AI-powered fraud prevention with automated risk scoring, and its January 2026 research argues that security will be 'the deciding factor for SMB banking in 2026': 23% of surveyed small businesses named security and fraud concerns as the single factor most likely to make them switch banks, ahead of fees (22%) and rates (7%), while 79% of organisations reported payment-fraud attempts in 2024. Its counterpart theme is 'digital plus human': Michael Mitchell, executive vice-president and head of consumer and business banking, argues that digital 'excels at delivering convenience and enabling self-service' but that high-value decisions still need a banker. The bank has not named an AI programme, AI leader, vendor or budget, and its 2025 annual report on Form 10-K emphasises relationship-based commercial lending and core deposits. Under chairman, president and CEO Rajinder Singh, 2025 net income was $268.4 million, up 15%, with a $200 million repurchase expansion; first-quarter 2026 net income was $61.9 million, or $0.83 per share, on a 2.99% net interest margin and an improved funding mix. As a national bank BankUnited is supervised by the OCC, whose 2026 bulletin on model risk and its gen-AI risk perspective would govern any AI it adopts in fraud detection or credit.",
  keyPoints: [
    "Security as strategy: 23% of surveyed SMBs would switch banks over security and fraud concerns, more than over fees (22%) or rates (7%), per the bank's January 2026 research.",
    "Sustained AI-fraud education: guides on AI voice cloning, AI phishing, AI-powered scams and AI-based fraud prevention with automated risk scoring (2024–2026).",
    "'Digital plus human' positioning from the head of consumer and business banking: digital for convenience, bankers for high-value decisions.",
    "No AI programme, leader, vendor or spend disclosed; the 10-K stresses relationship lending and core deposits.",
    "2025 net income $268.4 million (+15%); Q1 2026 net income $61.9 million, EPS $0.83, NIM 2.99%.",
    "Footprint: Florida plus commercial offices in New York, Dallas, Atlanta and Charlotte; 1,803 employees."
  ],
  leadership: [
    { name: "Rajinder Singh", role: "Chairman, President and CEO", sources: ["bku-q1-2026"] },
    { name: "Michael Mitchell", role: "EVP, Head of Consumer and Business Banking", linkedin: "https://www.linkedin.com/in/michael-mitchellucf", sources: ["bku-digital-human-2025"] }
  ],
  timeline: [
    { date: "2024-06-06", title: "Guidance on safeguarding against AI fraud", detail: "Safe words for family calls, stronger passwords, verification habits.", sources: ["bku-aifraud-2024"] },
    { date: "2025-04-08", title: "'Why digital payments need AI-powered fraud prevention'", detail: "Automated risk scoring on amount, behaviour, device and merchant signals.", sources: ["bku-aifraudprev-2025"] },
    { date: "2025-06-26", title: "AI voice-clone impersonation scam series begins", detail: "Imposter calls mimicking executives and family members.", sources: ["bku-voiceclone-2025"] },
    { date: "2025-12-17", title: "'Digital plus human' for small businesses", detail: "Mitchell on where digital stops and bankers start.", sources: ["bku-digital-human-2025"] },
    { date: "2026-01-09", title: "Security named the deciding factor for SMB banking", detail: "23% would switch banks over security; 79% of firms saw payment-fraud attempts in 2024.", sources: ["bku-smb-2026"] },
    { date: "2026-02-26", title: "2025 annual report: net income $268.4 million", detail: "Up 15%; $200 million repurchase expansion; 1,803 employees.", sources: ["bku-10k-2025"] },
    { date: "2026-04-22", title: "First-quarter 2026 results", detail: "Net income $61.9 million; EPS $0.83; total assets $35.4 billion.", sources: ["bku-q1-2026"] },
    { date: "2026-06-04", title: "Guide to AI-generated phishing", detail: "'Scams without the typos'; a five-step client checklist.", sources: ["bku-phishing-2026"] }
  ],
  useCases: [
    { useCase: "fraud", name: "AI-fraud awareness programme", detail: "Continuous client guidance on AI-enabled scams and AI-based fraud prevention.", status: "In production", sources: ["bku-aifraudprev-2025", "bku-phishing-2026"] },
    { useCase: "customer-chatbots", name: "'Digital plus human' service model", detail: "Digital self-service paired with bankers for complex, high-value work.", status: "In production", sources: ["bku-digital-human-2025"] },
    { useCase: "governance-general", name: "No disclosed internal AI deployment", detail: "No AI programme, vendor or leader named in filings or releases.", status: "Announced", sources: ["bku-10k-2025"] }
  ],
  numbers: [
    { label: "Total assets", value: "$35.4 billion", asOf: "2026-03-31", sources: ["bku-q1-2026"] },
    { label: "First-quarter 2026 net income / EPS", value: "$61.9 million / $0.83", asOf: "2026-04-22", sources: ["bku-q1-2026"] },
    { label: "2025 net income", value: "$268.4 million (+15%)", asOf: "2026-02-26", sources: ["bku-10k-2025"] },
    { label: "SMBs who would switch banks over security concerns", value: "23% (fees 22%, rates 7%)", asOf: "2026-01-09", sources: ["bku-smb-2026"] },
    { label: "Organisations reporting payment-fraud attempts in 2024", value: "79%", asOf: "2026-01-09", sources: ["bku-smb-2026"] }
  ],
  quotes: [
    { who: "Rajinder Singh", role: "Chairman, President and CEO", date: "2026-04-22", quote: "Despite a seasonally slow quarter, we continue to gather market share.", sources: ["bku-q1-2026"] },
    { who: "Michael Mitchell", role: "EVP, Head of Consumer and Business Banking", date: "2025-11-18", quote: "Digital banking excels at delivering convenience and enabling self-service.", sources: ["bku-branches-2025"] }
  ],
  regulatory: [
    { authority: "occ", why: "BankUnited, N.A. is a national bank; OCC model-risk and gen-AI expectations govern any AI adopted in fraud scoring or credit.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "cfpb", why: "Consumer and small-business products bring UDAAP and adverse-action duties; AI phishing and impersonation guidance intersects with Reg E error-resolution.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "federal-reserve", why: "Holding-company oversight of model risk and third-party fraud-prevention vendors.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] }
  ],
  suggestions: [
    { title: "Selling security implies owning it", detail: "A bank that tells SMBs to switch over security will be asked what AI it runs against the AI-enabled fraud it describes; disclosure would close the loop." },
    { title: "The research is a positioning asset", detail: "Original SMB survey data on why customers switch is rarer than AI announcements and gives the bank a defensible story with examiners and clients." },
    { title: "'Digital plus human' is a governance choice for agents", detail: "If the bank adopts AI assistants, its stated model already defines the human hand-off, which the CFPB's chatbot circular expects." },
    { title: "A national charter sets the AI bar early", detail: "The OCC's 2026 model-risk bulletin applies from the first fraud model; BankUnited has a clean record to build on." }
  ],
  faq: [
    { q: "Does BankUnited use AI?", a: "BankUnited has not disclosed an AI programme, AI leader, vendor or budget. Its public material explains how criminals use AI and how AI-based fraud prevention works, and positions security and a 'digital plus human' service model as reasons small businesses choose it." },
    { q: "What did BankUnited's 2026 small-business research find?", a: "That security is the deciding factor: 23% of surveyed small businesses named security and fraud concerns as the single factor most likely to make them switch banks, ahead of high fees (22%) and unfavourable rates (7%), and 79% of organisations reported being targeted by payment fraud in 2024." }
  ],
  sources: [
    { id: "bku-aifraud-2024", title: "Tips on How to Safeguard Against AI Fraud", publisher: "BankUnited", url: "https://bankunited.com/all-resources/how-to-safeguard-against-artificial-intelligence-(ai)-fraud", date: "2024-06-06" },
    { id: "bku-aifraudprev-2025", title: "Why Digital Payments Need AI-Powered Fraud Prevention", publisher: "BankUnited", url: "https://bankunited.com/all-resources/why-digital-payments-need-ai-powered-fraud-prevention", date: "2025-04-08" },
    { id: "bku-voiceclone-2025", title: "Emerging AI Voice Clone Impersonation Scams", publisher: "BankUnited", url: "https://bankunited.com/all-resources/emerging-ai-voice-clone-impersonation-scams", date: "2025-06-26" },
    { id: "bku-branches-2025", title: "Banking Moments That Matter: Why Branches Still Count", publisher: "BankUnited", url: "https://bankunited.com/all-resources/banking-moments-that-matter--when-businesses-need-a-branch", date: "2025-11-18" },
    { id: "bku-digital-human-2025", title: "Digital + Human: Why Small Businesses Want the Best of Both Worlds in Banking", publisher: "BankUnited", url: "https://bankunited.com/resource-corner/digital---human--why-small-businesses-want-the-best-of-both-worlds-in-banking", date: "2025-12-17" },
    { id: "bku-smb-2026", title: "Why Security Will Be the Deciding Factor for SMB Banking in 2026", publisher: "BankUnited", url: "https://bankunited.com/all-resources/why-security-will-be-the-deciding-factor-for-smb-banking-in-2026", date: "2026-01-09" },
    { id: "bku-10k-2025", title: "BankUnited, Inc. Annual Report on Form 10-K for 2025", publisher: "SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/1504008/000150400826000011/bku-20251231.htm", date: "2026-02-26" },
    { id: "bku-q1-2026", title: "BankUnited, Inc. Reports 1Q 2026 Net Income of $62 million, $0.83 Diluted EPS", publisher: "BankUnited", url: "https://ir.bankunited.com/node/13726/pdf", date: "2026-04-22" },
    { id: "bku-phishing-2026", title: "Navigating the Rise of AI-Generated Phishing Attacks", publisher: "BankUnited", url: "https://bankunited.com/resource-corner/navigating-the-rise-of-ai-generated-phishing-attacks", date: "2026-06-04" }
  ],
  lastUpdated: "2026-09-10"
};
