import crypto from "crypto";

function secret(): string {
  return process.env.UNSUBSCRIBE_SECRET ?? process.env.ADMIN_PASSWORD ?? "bankingnewsai-unsub-default";
}

/** Returns a URL-safe token encoding the subscriber's email address. */
export function makeUnsubToken(email: string): string {
  const b64 = Buffer.from(email.toLowerCase()).toString("base64url");
  const sig = crypto
    .createHmac("sha256", secret())
    .update(email.toLowerCase())
    .digest("base64url")
    .slice(0, 24);
  return `${b64}.${sig}`;
}

/**
 * Verifies the token and returns the email it encodes, or null if tampered/invalid.
 */
export function verifyUnsubToken(token: string): string | null {
  try {
    const dotIdx = token.lastIndexOf(".");
    if (dotIdx < 0) return null;
    const b64 = token.slice(0, dotIdx);
    const sig = token.slice(dotIdx + 1);
    const email = Buffer.from(b64, "base64url").toString("utf8");
    if (!email.includes("@")) return null;
    const expected = makeUnsubToken(email).split(".").pop();
    if (!sig || sig !== expected) return null;
    return email;
  } catch {
    return null;
  }
}

/** Full unsubscribe URL for a given email. */
export function unsubUrl(email: string, baseUrl?: string): string {
  const base =
    baseUrl ??
    process.env.NEXT_PUBLIC_BASE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
  return `${base}/api/unsubscribe?t=${makeUnsubToken(email)}`;
}
