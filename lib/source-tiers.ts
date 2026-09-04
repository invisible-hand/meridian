// Source tiers used when ranking candidates. Lower is better. The tier is a
// property of the publishing host, not of the feed the item arrived through:
// a Fed press release found via Keenable is still tier 1, and a press release
// on a wire is still tier 4 even if a trade feed carried it.

export const REGULATOR_HOSTS = [
  "federalreserve.gov", "occ.gov", "occ.treas.gov", "fdic.gov", "consumerfinance.gov", "sec.gov",
  "cftc.gov", "fincen.gov", "treasury.gov", "ncua.gov", "dfs.ny.gov", "nist.gov", "fsb.org", "bis.org",
  "bankingsupervision.europa.eu", "ecb.europa.eu", "eba.europa.eu", "europa.eu", "bankofengland.co.uk",
  "fca.org.uk", "gov.uk", "federalregister.gov", "ffiec.gov", "fsoc.gov", "newyorkfed.org",
  "govdelivery.com", "whitehouse.gov", "cppa.ca.gov", "oag.ca.gov", "coag.gov"
];

export const PRIMARY_HOSTS = [
  // banks
  "jpmorganchase.com", "jpmorgan.com", "bankofamerica.com", "wellsfargo.com", "citigroup.com", "citi.com",
  "capitalone.com", "usbank.com", "pnc.com", "truist.com", "goldmansachs.com", "morganstanley.com",
  "schwab.com", "americanexpress.com", "discover.com", "synchrony.com", "ally.com", "fifththird.com",
  "keybank.com", "regions.com", "mtb.com", "citizensbank.com", "huntington.com",
  // core / fintech vendors
  "fiserv.com", "fisglobal.com", "jackhenry.com", "ncino.com", "temenos.com", "mambu.com", "nymbus.com",
  "q2.com", "alkami.com", "plaid.com", "stripe.com", "adyen.com", "visa.com", "visa.co.uk", "mastercard.com",
  "socure.com", "experian.com", "equifax.com", "transunion.com", "fico.com", "nice.com", "feedzai.com",
  "emvco.com", "swift.com", "nacha.org", "theclearinghouse.org",
  // AI labs and clouds
  "openai.com", "anthropic.com", "deepmind.google", "blog.google", "google.com", "cloud.google.com",
  "microsoft.com", "aws.amazon.com", "amazon.com", "nvidia.com", "salesforce.com", "huggingface.co",
  "meta.com", "ai.meta.com", "mistral.ai", "cohere.com", "ibm.com", "oracle.com", "sap.com",
  "servicenow.com", "workday.com", "palantir.com", "databricks.com", "snowflake.com", "broadcom.com",
  "kyndryl.com", "accenture.com"
];

export const TRADE_HOSTS = [
  "bankingdive.com", "bankingjournal.aba.com", "aba.com", "paymentsjournal.com", "paymentsdive.com",
  "cfodive.com", "cybersecuritydive.com", "ciodive.com", "housingwire.com", "crowdfundinsider.com",
  "finovate.com", "finextra.com", "pymnts.com", "regtechanalyst.com", "coverager.com", "fintech.global",
  "bankautomationnews.com", "thefinancialbrand.com", "fintechfutures.com", "fintechnexus.com",
  "bpi.com", "icba.org", "cutimes.com", "creditunions.com", "insurancejournal.com",
  "techcrunch.com", "venturebeat.com", "theverge.com", "theregister.com", "semafor.com", "axios.com",
  "reuters.com", "apnews.com", "technologyreview.com", "sloanreview.mit.edu", "aibusiness.com",
  "artificialintelligence-news.com", "siliconangle.com", "zdnet.com", "wired.com", "arstechnica.com",
  "computerworld.com", "infoworld.com", "americanbanker.com"
];

export const WIRE_HOSTS = [
  "prnewswire.com", "businesswire.com", "globenewswire.com", "newswire.com", "accesswire.com",
  "einpresswire.com", "openpr.com", "prweb.com", "finance.yahoo.com", "morningstar.com", "marketwatch.com",
  "benzinga.com", "ainvest.com", "cryptobriefing.com", "techtimes.com", "aijourn.com", "dailyprabhat.com"
];

export function hostOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return "";
  }
}

function matches(host: string, list: string[]): boolean {
  return list.some((h) => host === h || host.endsWith(`.${h}`));
}

/** 1 regulator/standard-setter · 2 bank or vendor primary · 3 trade/tech press · 4 wire/aggregator/unknown */
export function sourceTier(url: string): 1 | 2 | 3 | 4 {
  const host = hostOf(url);
  if (!host) return 4;
  if (matches(host, REGULATOR_HOSTS)) return 1;
  if (matches(host, PRIMARY_HOSTS)) return 2;
  if (matches(host, TRADE_HOSTS)) return 3;
  return 4;
}

export const TIER_LABEL: Record<1 | 2 | 3 | 4, string> = {
  1: "regulator",
  2: "primary (bank/vendor)",
  3: "trade press",
  4: "wire/other"
};
