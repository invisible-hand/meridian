export const PAYWALLED_DOMAINS = new Set([
  "ft.com",
  "wsj.com",
  "bloomberg.com",
  "theinformation.com",
  "americanbanker.com",
  "economist.com",
  "barrons.com",
  "seekingalpha.com",
  "hbr.org",
  "thetimes.co.uk",
  "telegraph.co.uk",
  "businessinsider.com",
  "insider.com",
  "nytimes.com",
  "washingtonpost.com",
  "theathletic.com",
  "morningstar.com",
  "tearsheet.co",
  "fortune.com",
  "cnbc.com",  // some content paywalled
  "thebanker.com",
  "globalcapital.com",
  "risk.net",
  "euromoney.com"
]);

export function isPaywalled(url: string): boolean {
  try {
    const hostname = new URL(url).hostname.replace(/^www\./, "");
    return (
      PAYWALLED_DOMAINS.has(hostname) ||
      [...PAYWALLED_DOMAINS].some((d) => hostname.endsWith(`.${d}`))
    );
  } catch {
    return false;
  }
}
