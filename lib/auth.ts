import { cookies } from "next/headers";
import { createHash, createHmac, timingSafeEqual } from "node:crypto";

const ADMIN_COOKIE = "admin_session";
const SESSION_TTL_SECONDS = 60 * 60 * 12;
const SESSION_VERSION = "v1";

/**
 * Secret used to sign admin session cookies. Falls back to ADMIN_PASSWORD so
 * rotating the password also invalidates every outstanding session — which is
 * what you want when rotating because of a suspected leak.
 */
function sessionSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET ?? process.env.ADMIN_PASSWORD;
  if (!secret) {
    throw new Error("Missing ADMIN_SESSION_SECRET or ADMIN_PASSWORD");
  }
  return secret;
}

function sign(payload: string): string {
  return createHmac("sha256", sessionSecret()).update(payload).digest("base64url");
}

/**
 * Constant-time comparison for strings of any length. Both sides are hashed
 * first so the comparison runs over fixed-width buffers and leaks neither the
 * contents nor the length of the expected value.
 */
function safeEqual(a: string, b: string): boolean {
  const aHash = createHash("sha256").update(a).digest();
  const bHash = createHash("sha256").update(b).digest();
  return timingSafeEqual(aHash, bHash);
}

/** Builds a signed, expiring session token: `v1.<unix-expiry>.<hmac>`. */
function createSessionToken(): string {
  const exp = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const payload = `${SESSION_VERSION}.${exp}`;
  return `${payload}.${sign(payload)}`;
}

/**
 * Verifies signature and expiry. The previous implementation accepted the
 * literal string "1", which any client could simply set on itself — a cookie is
 * client-supplied data, and httpOnly stops JS from *reading* it, not from being
 * sent by curl.
 */
function verifySessionToken(token: string | undefined): boolean {
  if (!token) {
    return false;
  }
  const parts = token.split(".");
  if (parts.length !== 3) {
    return false;
  }
  const [version, expRaw, signature] = parts;
  if (version !== SESSION_VERSION) {
    return false;
  }
  const exp = Number(expRaw);
  if (!Number.isFinite(exp) || exp * 1000 <= Date.now()) {
    return false;
  }
  try {
    return safeEqual(signature, sign(`${version}.${expRaw}`));
  } catch {
    return false;
  }
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return verifySessionToken(cookieStore.get(ADMIN_COOKIE)?.value);
}

export async function setAdminAuthenticated(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE, createSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_TTL_SECONDS
  });
}

export async function clearAdminAuthenticated(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE);
}

export function isValidAdminPassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected || !password) {
    return false;
  }
  return safeEqual(password, expected);
}
