import crypto from "crypto";
import { BASE_URL } from "@/lib/seo";

/**
 * Secret used to sign new unsubscribe tokens.
 *
 * Falls back to ADMIN_PASSWORD only so a deployment that hasn't set
 * UNSUBSCRIBE_SECRET yet keeps sending — but see `legacySecrets()`: rotating the
 * admin password without setting UNSUBSCRIBE_SECRET would otherwise break every
 * unsubscribe link already sitting in a subscriber's inbox.
 */
function signingSecret(): string {
  const secret = process.env.UNSUBSCRIBE_SECRET ?? process.env.ADMIN_PASSWORD;
  if (!secret) {
    throw new Error("Missing UNSUBSCRIBE_SECRET (or ADMIN_PASSWORD to fall back on)");
  }
  return secret;
}

/**
 * Retired secrets that must still *verify* (never sign). Emails live in inboxes
 * for months, so a secret rotation has to keep honouring tokens minted under the
 * old one. Comma-separated, oldest or newest order doesn't matter.
 */
function legacySecrets(): string[] {
  return (process.env.UNSUBSCRIBE_SECRET_LEGACY ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function signWith(email: string, secret: string): string {
  return crypto
    .createHmac("sha256", secret)
    .update(email.toLowerCase())
    .digest("base64url")
    .slice(0, 24);
}

function safeEqual(a: string, b: string): boolean {
  const aHash = crypto.createHash("sha256").update(a).digest();
  const bHash = crypto.createHash("sha256").update(b).digest();
  return crypto.timingSafeEqual(aHash, bHash);
}

/** Returns a URL-safe token encoding the subscriber's email address. */
export function makeUnsubToken(email: string): string {
  const b64 = Buffer.from(email.toLowerCase()).toString("base64url");
  return `${b64}.${signWith(email, signingSecret())}`;
}

/**
 * Verifies the token and returns the email it encodes, or null if
 * tampered/invalid. Accepts signatures from the current secret or any
 * configured legacy secret.
 */
export function verifyUnsubToken(token: string): string | null {
  try {
    const dotIdx = token.lastIndexOf(".");
    if (dotIdx < 0) return null;
    const b64 = token.slice(0, dotIdx);
    const sig = token.slice(dotIdx + 1);
    if (!sig) return null;

    const email = Buffer.from(b64, "base64url").toString("utf8");
    if (!email.includes("@")) return null;

    for (const secret of [signingSecret(), ...legacySecrets()]) {
      if (safeEqual(sig, signWith(email, secret))) {
        return email.toLowerCase();
      }
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Full unsubscribe URL for a given email.
 *
 * Uses the shared BASE_URL so this resolves to the canonical domain rather than
 * the per-deployment VERCEL_URL hostname — a List-Unsubscribe header pointing at
 * a random deployment host reads as suspicious to receiving mail servers.
 */
export function unsubUrl(email: string, baseUrl?: string): string {
  const base = baseUrl ?? BASE_URL;
  return `${base}/api/unsubscribe?t=${makeUnsubToken(email)}`;
}
