import { ImageResponse } from "next/og";
import { AGENT_OS_DOC_SLUGS, AGENT_OS_UPDATED, LAYERS } from "@/lib/agent-os";
import { formatTimelineDate } from "@/lib/regulators";
import { DISPLAY, OG_COLORS, OG_SIZE, OgFrame, loadOgFonts, ogJoin } from "@/lib/og";

// One card for the agentic-banking section (hub and sub-pages inherit it).
export const alt = "An operating system for AI agents in your bank — BankingNewsAI";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const fonts = await loadOgFonts();
  return new ImageResponse(
    (
      <OgFrame
        topRight="ai agents in banking"
        bottomRight={ogJoin([
          `${LAYERS.length} control layers`,
          `${AGENT_OS_DOC_SLUGS.length} documents cited`,
          `updated ${formatTimelineDate(AGENT_OS_UPDATED).toLowerCase()}`
        ])}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: DISPLAY,
            fontSize: 84,
            fontWeight: 300,
            lineHeight: 1.02,
            letterSpacing: "-0.045em",
            maxWidth: 1060
          }}
        >
          <span>An operating system for</span>
          <span style={{ color: OG_COLORS.accent }}>AI agents in your bank.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontFamily: DISPLAY,
            fontSize: 26,
            fontWeight: 300,
            color: OG_COLORS.soft,
            maxWidth: 900,
            lineHeight: 1.35
          }}
        >
          Eight control layers, one lifecycle, five autonomy levels — and every regulator&apos;s position, dated and sourced.
        </div>
      </OgFrame>
    ),
    { ...size, fonts }
  );
}
