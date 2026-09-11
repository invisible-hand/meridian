import { ImageResponse } from "next/og";
import { getRegulator, formatTimelineDate } from "@/lib/regulators";
import { documentsFor } from "@/lib/tracker";
import { clampText } from "@/lib/seo";
import { DISPLAY, OG_COLORS, OG_SIZE, OgFrame, loadOgFonts, ogJoin } from "@/lib/og";

// Per-authority social card. Rendered on demand and cached a day.
export const runtime = "nodejs";
export const alt = "AI regulation in banking, by authority — BankingNewsAI";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const reg = getRegulator(slug);
  const fonts = await loadOgFonts();
  const name = reg?.name ?? "Regulators";
  const docs = reg ? documentsFor(reg.slug).length : 0;
  return new ImageResponse(
    (
      <OgFrame
        topRight="ai regulation tracker"
        bottomRight={ogJoin(reg ? [`${docs} documents`, reg.binding.toLowerCase(), `updated ${formatTimelineDate(reg.lastUpdated).toLowerCase()}`] : [])}
      >
        <div style={{ display: "flex", width: 56, height: 2, background: OG_COLORS.accent, marginBottom: 30 }} />
        <div style={{ display: "flex", flexWrap: "wrap", fontFamily: DISPLAY, fontSize: name.length > 14 ? 62 : 76, fontWeight: 300, lineHeight: 1.04, letterSpacing: "-0.04em", color: OG_COLORS.ink, maxWidth: 1060 }}>
          <span style={{ marginRight: "0.25em" }}>How the</span>
          <span style={{ color: OG_COLORS.accent, marginRight: "0.25em" }}>{name}</span>
          <span>regulates AI in banking.</span>
        </div>
        <div style={{ display: "flex", marginTop: 28, fontFamily: DISPLAY, fontSize: 25, fontWeight: 300, color: OG_COLORS.soft, maxWidth: 980, lineHeight: 1.35 }}>
          {reg ? clampText(reg.answerFirst, 190) : "Every document, dated and linked to the official text."}
        </div>
      </OgFrame>
    ),
    { ...size, fonts, headers: { "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800" } }
  );
}
