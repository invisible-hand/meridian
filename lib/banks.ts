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
import { SCHWAB } from "@/lib/banks/schwab";
import { KEYBANK } from "@/lib/banks/keybank";
import { ALLY } from "@/lib/banks/ally";
import { NORTHERN_TRUST } from "@/lib/banks/northern-trust";
import { HSBC_USA } from "@/lib/banks/hsbc-usa";
import { REGIONS } from "@/lib/banks/regions";
import { PINNACLE } from "@/lib/banks/pinnacle";
import { UBS_USA } from "@/lib/banks/ubs-usa";
import { SANTANDER_US } from "@/lib/banks/santander-us";
import { CITY_NATIONAL } from "@/lib/banks/city-national";
import { WESTERN_ALLIANCE } from "@/lib/banks/western-alliance";
import { ZIONS } from "@/lib/banks/zions";
import { FLAGSTAR } from "@/lib/banks/flagstar";
import { WEBSTER } from "@/lib/banks/webster";
import { FIRST_HORIZON } from "@/lib/banks/first-horizon";
import { EAST_WEST } from "@/lib/banks/east-west";
import { OLD_NATIONAL } from "@/lib/banks/old-national";
import { UMB } from "@/lib/banks/umb";
import { SOUTHSTATE } from "@/lib/banks/southstate";
import { COLUMBIA } from "@/lib/banks/columbia";
import { CIBC_US } from "@/lib/banks/cibc-us";
import { VALLEY } from "@/lib/banks/valley";
import { BOKF } from "@/lib/banks/bokf";
import { FROST } from "@/lib/banks/frost";
import { FNB } from "@/lib/banks/fnb";
import { SOFI } from "@/lib/banks/sofi";
import { EVERBANK } from "@/lib/banks/everbank";
import { BARCLAYS_US } from "@/lib/banks/barclays-us";
import { RAYMOND_JAMES } from "@/lib/banks/raymond-james";
import { ASSOCIATED } from "@/lib/banks/associated";
import { PROSPERITY } from "@/lib/banks/prosperity";
import { BANK_OZK } from "@/lib/banks/bank-ozk";
import { DEUTSCHE_BANK_US } from "@/lib/banks/deutsche-bank-us";
import { ATLANTIC_UNION } from "@/lib/banks/atlantic-union";
import { COMMERCE } from "@/lib/banks/commerce";
import { HANCOCK_WHITNEY } from "@/lib/banks/hancock-whitney";
import { BANKUNITED } from "@/lib/banks/bankunited";
import { FNBO } from "@/lib/banks/fnbo";
import { BANC_OF_CALIFORNIA } from "@/lib/banks/banc-of-california";
import { UNITED_BANKSHARES } from "@/lib/banks/united-bankshares";
import { TEXAS_CAPITAL } from "@/lib/banks/texas-capital";
import { FULTON } from "@/lib/banks/fulton";
import { GLACIER } from "@/lib/banks/glacier";
import { EASTERN } from "@/lib/banks/eastern";
import { SALLIE_MAE } from "@/lib/banks/sallie-mae";
import { CITY_NATIONAL_FLORIDA } from "@/lib/banks/city-national-florida";
import { UNITED_COMMUNITY } from "@/lib/banks/united-community";
import { ARVEST } from "@/lib/banks/arvest";
import { AMERIS } from "@/lib/banks/ameris";
import { WAFD } from "@/lib/banks/wafd";
import { WESBANCO } from "@/lib/banks/wesbanco";
import { RENASANT } from "@/lib/banks/renasant";
import { FIRST_INTERSTATE } from "@/lib/banks/first-interstate";
import { CUSTOMERS } from "@/lib/banks/customers";
import { ROCKLAND_TRUST } from "@/lib/banks/rockland-trust";
import { SIMMONS } from "@/lib/banks/simmons";
import { FIRST_HAWAIIAN } from "@/lib/banks/first-hawaiian";
import { CATHAY } from "@/lib/banks/cathay";
import { BANK_OF_HAWAII } from "@/lib/banks/bank-of-hawaii";
import { HOME_BANCSHARES } from "@/lib/banks/home-bancshares";
import { FIRST_FINANCIAL_OHIO } from "@/lib/banks/first-financial-ohio";
import { TOWNEBANK } from "@/lib/banks/townebank";
import { BEACON } from "@/lib/banks/beacon";
import { MECHANICS } from "@/lib/banks/mechanics";
import { SEACOAST } from "@/lib/banks/seacoast";
import { FIRST_MERCHANTS } from "@/lib/banks/first-merchants";
import { OPTUM_BANK } from "@/lib/banks/optum-bank";
import { CENTRAL_BANCOMPANY } from "@/lib/banks/central-bancompany";
import { MERCHANTS_INDIANA } from "@/lib/banks/merchants-indiana";
import { STIFEL_BANK } from "@/lib/banks/stifel-bank";
import { TRUSTMARK } from "@/lib/banks/trustmark";
import { BANK_OF_HOPE } from "@/lib/banks/bank-of-hope";
import { SERVISFIRST } from "@/lib/banks/servisfirst";
import { BUSEY } from "@/lib/banks/busey";
import { COMMUNITY_BANK_NA } from "@/lib/banks/community-bank-na";
import { ENTERPRISE_BANK } from "@/lib/banks/enterprise-bank";
import { FB_FINANCIAL } from "@/lib/banks/fb-financial";
import { FIRST_UNITED } from "@/lib/banks/first-united";
import { BANNER } from "@/lib/banks/banner";
import { NBT } from "@/lib/banks/nbt";

export const BANKS_PUBLISHED = "2026-09-09";
export const BANKS_UPDATED = "2026-09-10";
/** How many banks are in the current published set (used in copy). */
export const BANK_COUNT = 100;
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
  /** Free text: charter type and primary federal supervisor, plus ownership notes where relevant. */
  charter: string;
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
 * Charles Schwab follows by holding-company assets ($517bn); its lead bank is a
 * savings bank outside the Fed's commercial-bank release, so its fedRank is 0.
 * The rest follow the Federal Reserve's lead-bank ranking through rank 100 (second banks of
 * covered groups skipped; ranks 101–103 and 105 fill the count to 100 groups).
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
  SCHWAB,
  BNY_MELLON,
  STATE_STREET,
  TD_BANK_US,
  FIFTH_THIRD,
  HUNTINGTON,
  BMO_US,
  FIRST_CITIZENS,
  CITIZENS,
  AMERICAN_EXPRESS,
  MT_BANK,
  KEYBANK,
  ALLY,
  NORTHERN_TRUST,
  HSBC_USA,
  REGIONS,
  PINNACLE,
  UBS_USA,
  SANTANDER_US,
  CITY_NATIONAL,
  WESTERN_ALLIANCE,
  ZIONS,
  FLAGSTAR,
  WEBSTER,
  FIRST_HORIZON,
  EAST_WEST,
  OLD_NATIONAL,
  UMB,
  SOUTHSTATE,
  COLUMBIA,
  CIBC_US,
  VALLEY,
  BOKF,
  FROST,
  FNB,
  SOFI,
  EVERBANK,
  BARCLAYS_US,
  RAYMOND_JAMES,
  ASSOCIATED,
  PROSPERITY,
  BANK_OZK,
  DEUTSCHE_BANK_US,
  ATLANTIC_UNION,
  COMMERCE,
  HANCOCK_WHITNEY,
  BANKUNITED,
  FNBO,
  BANC_OF_CALIFORNIA,
  UNITED_BANKSHARES,
  TEXAS_CAPITAL,
  FULTON,
  GLACIER,
  EASTERN,
  SALLIE_MAE,
  CITY_NATIONAL_FLORIDA,
  UNITED_COMMUNITY,
  ARVEST,
  AMERIS,
  WAFD,
  WESBANCO,
  RENASANT,
  FIRST_INTERSTATE,
  CUSTOMERS,
  ROCKLAND_TRUST,
  SIMMONS,
  FIRST_HAWAIIAN,
  CATHAY,
  BANK_OF_HAWAII,
  HOME_BANCSHARES,
  FIRST_FINANCIAL_OHIO,
  TOWNEBANK,
  BEACON,
  MECHANICS,
  SEACOAST,
  FIRST_MERCHANTS,
  OPTUM_BANK,
  CENTRAL_BANCOMPANY,
  MERCHANTS_INDIANA,
  STIFEL_BANK,
  TRUSTMARK,
  BANK_OF_HOPE,
  SERVISFIRST,
  BUSEY,
  COMMUNITY_BANK_NA,
  ENTERPRISE_BANK,
  FB_FINANCIAL,
  FIRST_UNITED,
  BANNER,
  NBT
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
