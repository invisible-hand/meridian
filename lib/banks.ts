// The banks section — `/banks` and `/banks/<slug>`: one page per bank on its
// AI strategy, built only from public sources. Every dated entry cites one or
// more `sources[]` ids; `npm run tracker:check` (checkBanks) refuses a page
// with an unsourced claim, a source on a non-tier host, or an unknown
// regulator / document slug. Numbers are quoted as reported, with the date.
// Bump `lastUpdated` on a bank when its text changes; BANKS_UPDATED is the
// section-wide date for the sitemap and IndexNow.

import type { UseCase } from "@/lib/regulators";
import { JPMORGAN_CHASE } from "@/lib/banks/jpmorgan-chase";
import { BANK_OF_AMERICA } from "@/lib/banks/bank-of-america";
import { CITIGROUP } from "@/lib/banks/citigroup";
import { WELLS_FARGO } from "@/lib/banks/wells-fargo";
import { GOLDMAN_SACHS } from "@/lib/banks/goldman-sachs";
import { MORGAN_STANLEY } from "@/lib/banks/morgan-stanley";
import { US_BANCORP } from "@/lib/banks/us-bancorp";
import { CAPITAL_ONE } from "@/lib/banks/capital-one";
import { PNC } from "@/lib/banks/pnc";
import { TRUIST } from "@/lib/banks/truist";
import { BNY_MELLON } from "@/lib/banks/bny-mellon";
import { STATE_STREET } from "@/lib/banks/state-street";
import { TD_BANK_US } from "@/lib/banks/td-bank-us";
import { FIFTH_THIRD } from "@/lib/banks/fifth-third";
import { HUNTINGTON } from "@/lib/banks/huntington";
import { BMO_US } from "@/lib/banks/bmo-us";
import { FIRST_CITIZENS } from "@/lib/banks/first-citizens";
import { CITIZENS } from "@/lib/banks/citizens";
import { AMERICAN_EXPRESS } from "@/lib/banks/american-express";
import { MT_BANK } from "@/lib/banks/mt-bank";

export const BANKS_PUBLISHED = "2026-09-09";
export const BANKS_UPDATED = "2026-09-09";
/** How many banks are in the current published set (used in copy). */
export const BANK_COUNT = 20;
/** Federal Reserve "Large Commercial Banks" release the asset figures come from. */
export const FED_LBR = { asOf: "2026-03-31", url: "https://www.federalreserve.gov/releases/lbr/current/" };

export type BankSource = { id: string; title: string; publisher: string; url: string; date: string };
export type BankEvent = { date: string; title: string; detail: string; sources: string[] };
export type BankUseCase = {
  useCase: UseCase;
  name: string;
  detail: string;
  status: "In production" | "Rolling out" | "Pilot" | "Announced";
  sources: string[];
};
export type BankNumber = { label: string; value: string; asOf: string; sources: string[] };
export type BankQuote = { who: string; role: string; date: string; quote: string; sources: string[] };
export type BankRegulatory = { authority: string; why: string; docSlugs: string[] };
/** `linkedin` is the person's public profile URL (https://www.linkedin.com/in/…), verified by
 * hand against the profile's visible employer; omit rather than guess. */
export type BankLeader = { name: string; role: string; sources: string[]; linkedin?: string };

export type Bank = {
  slug: string;
  name: string;
  shortName: string;
  ticker: string;
  hq: string;
  /** Lead bank's Federal Reserve rank and consolidated assets ($ millions) at FED_LBR.asOf */
  fedRank: number;
  leadBank: string;
  assetsUsdMillions: number;
  charter: "National bank (OCC)" | "State member bank (Fed)" | "State nonmember bank (FDIC)";
  /** One line: the shape of the strategy */
  posture: string;
  /** The flagship internal platform or assistant, if there is one */
  platform?: { name: string; detail: string; sources: string[] };
  answerFirst: string;
  keyPoints: string[];
  leadership: BankLeader[];
  timeline: BankEvent[];
  useCases: BankUseCase[];
  numbers: BankNumber[];
  quotes: BankQuote[];
  regulatory: BankRegulatory[];
  /** Analysis — what the public record suggests. Framed as observations, not advice. */
  suggestions: { title: string; detail: string }[];
  faq: { q: string; a: string }[];
  sources: BankSource[];
  lastUpdated: string;
};

/**
 * Ordered by size. Batch 1 (1–10): the ten largest US bank holding companies.
 * Batch 2 (11–20): the next ten by the Federal Reserve's lead-bank ranking
 * (Charles Schwab's lead bank is a savings bank outside that release and
 * is deferred to batch 3).
 */
export const BANKS: Bank[] = [
  JPMORGAN_CHASE,
  BANK_OF_AMERICA,
  CITIGROUP,
  WELLS_FARGO,
  GOLDMAN_SACHS,
  MORGAN_STANLEY,
  US_BANCORP,
  CAPITAL_ONE,
  PNC,
  TRUIST,
  BNY_MELLON,
  STATE_STREET,
  TD_BANK_US,
  FIFTH_THIRD,
  HUNTINGTON,
  BMO_US,
  FIRST_CITIZENS,
  CITIZENS,
  AMERICAN_EXPRESS,
  MT_BANK
];

export function getBank(slug: string): Bank | undefined {
  return BANKS.find((b) => b.slug === slug);
}

export function bankPath(b: Bank | string): string {
  return `/banks/${typeof b === "string" ? b : b.slug}`;
}

export function formatAssets(usdMillions: number): string {
  return usdMillions >= 1_000_000 ? `$${(usdMillions / 1_000_000).toFixed(2)} trillion` : `$${Math.round(usdMillions / 1000)} billion`;
}

/** Every regulator and document slug the section references — validated by tracker:check. */
export const BANK_AUTHORITY_SLUGS: string[] = Array.from(new Set(BANKS.flatMap((b) => b.regulatory.map((r) => r.authority))));
export const BANK_DOC_SLUGS: string[] = Array.from(new Set(BANKS.flatMap((b) => b.regulatory.flatMap((r) => r.docSlugs))));
export const BANK_SOURCE_COUNT = BANKS.reduce((n, b) => n + b.sources.length, 0);
