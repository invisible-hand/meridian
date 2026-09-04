import { NextResponse } from "next/server";
import { authorizeOperator } from "@/lib/api-auth";
import { ensureSchema } from "@/lib/db";
import { generateFintechDigest } from "@/lib/digest";

// Collection and generation both make many network calls; give them the full budget.
export const maxDuration = 300;

export async function GET(request: Request) {
  const denied = await authorizeOperator(request);
  if (denied) return denied;

  await ensureSchema();
  const digest = await generateFintechDigest();
  return NextResponse.json({ ok: true, digest });
}
