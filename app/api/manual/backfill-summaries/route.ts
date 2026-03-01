import { NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { buildBriefSummary } from "@/lib/digest";
import { DailyDigest } from "@/lib/types";

export const dynamic = "force-dynamic";

export async function POST(): Promise<NextResponse> {
  const supabase = getSupabaseAdminClient();

  const { data: digests, error } = await supabase
    .from("digests")
    .select("id, content_json")
    .order("digest_date", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  let updated = 0;
  let skipped = 0;

  for (const row of digests ?? []) {
    const content = row.content_json as DailyDigest | null;
    if (!content) { skipped++; continue; }

    // Already has the new short format (≤15 words) — skip
    if (content.briefSummary && content.briefSummary.split(/\s+/).length <= 15) { skipped++; continue; }

    const bankingStories = content.bankingStories ?? content.stories ?? [];
    const aiStories = content.aiStories ?? [];
    const briefSummary = buildBriefSummary(bankingStories, aiStories);
    if (!briefSummary) { skipped++; continue; }

    const { error: updateError } = await supabase
      .from("digests")
      .update({ content_json: { ...content, briefSummary } })
      .eq("id", row.id);

    if (updateError) {
      return NextResponse.json({ error: updateError.message, updatedSoFar: updated }, { status: 500 });
    }

    updated++;
  }

  return NextResponse.json({ updated, skipped });
}
