import { ImageResponse } from "next/og";
import { getBank, formatAssets } from "@/lib/banks";
import { clampText } from "@/lib/seo";
import { DISPLAY, OG_COLORS, OG_SIZE, OgFrame, loadOgFonts, ogJoin } from "@/lib/og";

// Per-bank social card: the bank's name, its one-line posture, and the
// numbers that make the page credible. Rendered on demand and cached a day.
export const runtime = "nodejs";
export const alt = "Bank AI strategy — BankingNewsAI";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = getBank(slug);
  const fonts = await loadOgFonts();
  const name = b?.name ?? "US bank";
  const posture = b ? clampText(b.posture, 190) : "AI strategy from the public record.";
  return new ImageResponse(
    (
      <OgFrame
        topRight="banks · ai strategy"
        bottomRight={ogJoin(b ? [formatAssets(b.assetsUsdMillions), `${b.timeline.length} dated moves`, `${b.sources.length} sources`] : [])}
      >
        <div style={{ display: "flex", width: 56, height: 2, background: OG_COLORS.accent, marginBottom: 30 }} />
        <div style={{ display: "flex", flexDirection: "column", fontFamily: DISPLAY, fontSize: name.length > 30 ? 60 : 76, fontWeight: 300, lineHeight: 1.04, letterSpacing: "-0.04em", color: OG_COLORS.ink, maxWidth: 1060 }}>
          <span>{name}</span>
          <span style={{ color: OG_COLORS.accent }}>and AI, on the record.</span>
        </div>
        <div style={{ display: "flex", marginTop: 28, fontFamily: DISPLAY, fontSize: 25, fontWeight: 300, color: OG_COLORS.soft, maxWidth: 980, lineHeight: 1.35 }}>
          {posture}
        </div>
      </OgFrame>
    ),
    { ...size, fonts, headers: { "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800" } }
  );
}
