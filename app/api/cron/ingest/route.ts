import { NextResponse } from "next/server";
import { authorizeOperator } from "@/lib/api-auth";
import { ensureSchema } from "@/lib/db";
import { runIngestion } from "@/lib/ingest";

export async function GET(request: Request) {
  const denied = await authorizeOperator(request);
  if (denied) return denied;

  await ensureSchema();
  const stats = await runIngestion();
  return NextResponse.json({ ok: true, stats });
}
