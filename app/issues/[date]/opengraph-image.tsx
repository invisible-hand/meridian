import { ImageResponse } from "next/og";
import { ensureSchema, getDigestForDate } from "@/lib/db";
import type { DailyDigest } from "@/lib/types";
import { formatIssueDateLong } from "@/lib/seo";
import { DISPLAY, OG_COLORS, OG_SIZE, OgFrame, loadOgFonts, ogJoin } from "@/lib/og";

// Dynamic per-issue social card. Renders the date, the issue's brief summary
// headline, and the story counts so LinkedIn / Twitter shares show the actual
// content of the issue rather than a generic site card.
export const runtime = "nodejs";
export const alt = "BankingNewsAI Daily AI Brief";
export const size = OG_SIZE;
export const contentType = "image/png";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

export default async function OpenGraphImage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;

  let headline = "Banking AI Brief";
  let formatted = date;
  let bankingCount = 0;
  let aiCount = 0;

  if (ISO_DATE.test(date)) {
    await ensureSchema();
    const digest = await getDigestForDate({
      digestDate: date,
      category: "fintech_banking"
    }).catch(() => null);

    if (digest) {
      const content = digest.content_json as DailyDigest | null;
      formatted = formatIssueDateLong(date);
      headline = content?.briefSummary?.trim() || formatted;
      bankingCount = (content?.bankingStories ?? content?.stories ?? []).length;
      aiCount = (content?.aiStories ?? []).length;
    }
  }

  const fonts = await loadOgFonts();
  const long = headline.length > 110;

  return new ImageResponse(
    (
      <OgFrame
        topRight={`daily brief · ${formatted.toLowerCase()}`}
        bottomRight={ogJoin([bankingCount > 0 && `${bankingCount} banking ai`, aiCount > 0 && `${aiCount} general ai`])}
      >
        <div style={{ display: "flex", width: 56, height: 2, background: OG_COLORS.accent, marginBottom: 30 }} />
        <div
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            fontFamily: DISPLAY,
            fontSize: long ? 54 : 66,
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: "-0.035em",
            color: OG_COLORS.ink,
            maxWidth: 1060
          }}
        >
          {headline}
        </div>
      </OgFrame>
    ),
    {
      ...size,
      fonts,
      // Cache the rendered image at the edge for a day. OG cards rarely change
      // once the issue is sent and re-rendering hits Supabase, so this avoids
      // a DB roundtrip every time a social platform re-scrapes a share.
      headers: {
        "Cache-Control": "public, immutable, max-age=86400, s-maxage=86400, stale-while-revalidate=604800"
      }
    }
  );
}
