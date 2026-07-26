import { NextResponse } from "next/server";
import { authorizeOperator } from "@/lib/api-auth";
import { ensureSchema } from "@/lib/db";
import { generateFintechDigest } from "@/lib/digest";

export async function GET(request: Request) {
  const denied = await authorizeOperator(request);
  if (denied) return denied;

  await ensureSchema();
  const digest = await generateFintechDigest();
  return NextResponse.json({ ok: true, digest });
}
