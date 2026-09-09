import { ImageResponse } from "next/og";
import { BANKS, BANKS_UPDATED, BANK_SOURCE_COUNT } from "@/lib/banks";
import { formatTimelineDate } from "@/lib/regulators";
import { DISPLAY, OG_COLORS, OG_SIZE, OgFrame, loadOgFonts, ogJoin } from "@/lib/og";

export const alt = "AI strategy of the 20 largest US banks — BankingNewsAI";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const fonts = await loadOgFonts();
  return new ImageResponse(
    (
      <OgFrame
        topRight="banks · ai strategy"
        bottomRight={ogJoin([`${BANKS.length} banks`, `${BANK_SOURCE_COUNT} sources`, `updated ${formatTimelineDate(BANKS_UPDATED).toLowerCase()}`])}
      >
        <div style={{ display: "flex", flexDirection: "column", fontFamily: DISPLAY, fontSize: 84, fontWeight: 300, lineHeight: 1.02, letterSpacing: "-0.045em", maxWidth: 1060 }}>
          <span>What the {BANKS.length} largest US banks</span>
          <span style={{ color: OG_COLORS.accent }}>are actually doing with AI.</span>
        </div>
        <div style={{ display: "flex", marginTop: 32, fontFamily: DISPLAY, fontSize: 26, fontWeight: 300, color: OG_COLORS.soft, maxWidth: 900, lineHeight: 1.35 }}>
          Platforms, agents, budgets, headcount, leadership and regulators — bank by bank, every claim sourced.
        </div>
      </OgFrame>
    ),
    { ...size, fonts }
  );
}
