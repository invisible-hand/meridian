import { NextResponse } from "next/server";
import { createHash, timingSafeEqual } from "node:crypto";
import { isAdminAuthenticated } from "@/lib/auth";

function safeEqual(a: string, b: string): boolean {
  const aHash = createHash("sha256").update(a).digest();
  const bHash = createHash("sha256").update(b).digest();
  return timingSafeEqual(aHash, bHash);
}

/**
 * Vercel Cron attaches `Authorization: Bearer $CRON_SECRET` to every scheduled
 * invocation when CRON_SECRET is set on the project. Any other caller — anyone
 * who guesses the route path — gets rejected.
 */
function hasCronSecret(request: Request): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return false;
  }
  const header = request.headers.get("authorization");
  if (!header) {
    return false;
  }
  return safeEqual(header, `Bearer ${secret}`);
}

/**
 * Gate for every route that mutates state or spends money: the cron scheduler
 * and a signed-in admin are the only two callers that should ever reach one.
 *
 * Returns `null` when the request is authorized, or the response to return
 * otherwise. Fails closed — an unset CRON_SECRET rejects scheduled runs rather
 * than silently leaving the route open.
 */
export async function authorizeOperator(request: Request): Promise<NextResponse | null> {
  if (hasCronSecret(request)) {
    return null;
  }

  // Lets the admin trigger a manual run straight from the admin panel, where
  // the browser sends the signed session cookie along with the request.
  if (await isAdminAuthenticated()) {
    return null;
  }

  if (!process.env.CRON_SECRET) {
    console.error(
      "[api-auth] CRON_SECRET is not set — scheduled runs cannot authenticate. " +
        "Set it on the Vercel project and redeploy."
    );
    return NextResponse.json(
      { ok: false, error: "CRON_SECRET is not configured on this deployment." },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
}
