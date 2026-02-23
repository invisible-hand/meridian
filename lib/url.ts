import { createHash } from "node:crypto";

const TRACKING_PARAMS = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid"
]);

export function canonicalizeUrl(input: string): string {
  try {
    const url = new URL(input);
    url.hash = "";
    for (const param of TRACKING_PARAMS) {
      url.searchParams.delete(param);
    }
    if (url.pathname.endsWith("/")) {
      url.pathname = url.pathname.slice(0, -1);
    }
    return url.toString();
  } catch {
    return input.trim();
  }
}

export function hashUrl(input: string): string {
  return createHash("sha256").update(input).digest("hex");
}
