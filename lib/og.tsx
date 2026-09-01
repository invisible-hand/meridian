import type { ReactNode } from "react";

/** Footer label from parts: "19 authorities  ·  164 documents". */
export function ogJoin(parts: (string | false | null | undefined)[]): string {
  return parts.filter((p): p is string => Boolean(p)).join("   ·   ");
}

// Shared pieces for the social cards (opengraph-image.tsx files). Mirrors the
// site-wide "2050" look: near-white ground, light Epilogue display type,
// IBM Plex Mono data labels, #1a3fcb as the only accent, hairlines, no dark
// bands. Fonts are fetched from Google Fonts at render time (next/font files
// are not readable at runtime) and cached per instance; if the fetch fails the
// card still renders with the fallback faces.

export const OG_SIZE = { width: 1200, height: 630 };

export const OG_COLORS = {
  ground: "#fbfbf9",
  ink: "#111111",
  accent: "#1a3fcb",
  muted: "#9a9a96",
  soft: "#5a5a56",
  hairline: "#e4e4df"
};

type OgFont = { name: string; data: ArrayBuffer; weight: 300 | 500 | 600; style: "normal" };

const FONT_CSS =
  "https://fonts.googleapis.com/css2?family=Epilogue:wght@300;600&family=IBM+Plex+Mono:wght@500&display=swap";

let cached: Promise<OgFont[]> | null = null;

async function fetchFont(url: string, name: string, weight: OgFont["weight"]): Promise<OgFont | null> {
  try {
    const res = await fetch(url, { next: { revalidate: 60 * 60 * 24 * 30 } });
    if (!res.ok) return null;
    return { name, data: await res.arrayBuffer(), weight, style: "normal" };
  } catch {
    return null;
  }
}

/** Epilogue 300/600 + IBM Plex Mono 500 as ImageResponse `fonts`; empty on failure. */
export function loadOgFonts(): Promise<OgFont[]> {
  if (cached) return cached;
  cached = (async () => {
    try {
      // A desktop UA makes Google Fonts return plain TTF urls (no unicode-range splits).
      const css = await fetch(FONT_CSS, {
        headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)" },
        next: { revalidate: 60 * 60 * 24 * 30 }
      }).then((r) => (r.ok ? r.text() : ""));
      const blocks = css.split("@font-face").slice(1);
      const wanted: { family: string; weight: OgFont["weight"] }[] = [
        { family: "Epilogue", weight: 300 },
        { family: "Epilogue", weight: 600 },
        { family: "IBM Plex Mono", weight: 500 }
      ];
      const jobs = wanted.map(({ family, weight }) => {
        const block = blocks.find(
          (b) => b.includes(`font-family: '${family}'`) && b.includes(`font-weight: ${weight}`)
        );
        const url = block?.match(/url\((https:[^)]+)\)/)?.[1];
        return url ? fetchFont(url, family, weight) : Promise.resolve(null);
      });
      const fonts = (await Promise.all(jobs)).filter((f): f is OgFont => f !== null);
      return fonts;
    } catch {
      return [];
    }
  })();
  return cached;
}

export const DISPLAY = "Epilogue, 'Helvetica Neue', Helvetica, Arial, sans-serif";
export const MONO = "'IBM Plex Mono', 'Courier New', monospace";

/** The card frame: logo + data label on top, hairline footer at the bottom. */
export function OgFrame({
  topRight,
  bottomRight,
  children
}: {
  topRight: string;
  bottomRight?: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: OG_COLORS.ground,
        color: OG_COLORS.ink,
        display: "flex",
        flexDirection: "column",
        padding: "48px 64px 40px",
        fontFamily: DISPLAY
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          fontFamily: MONO,
          fontSize: 22,
          fontWeight: 500,
          letterSpacing: "0.06em"
        }}
      >
        <div style={{ display: "flex" }}>
          banking<span style={{ color: OG_COLORS.accent }}>news</span>ai
        </div>
        <div style={{ display: "flex", fontSize: 15, letterSpacing: "0.1em", color: OG_COLORS.muted }}>
          {topRight}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>
        {children}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          borderTop: `1px solid ${OG_COLORS.hairline}`,
          paddingTop: 18,
          fontFamily: MONO,
          fontSize: 14,
          letterSpacing: "0.1em",
          color: OG_COLORS.muted
        }}
      >
        <div style={{ display: "flex" }}>bankingnewsai.com</div>
        <div style={{ display: "flex" }}>{bottomRight ?? ""}</div>
      </div>
    </div>
  );
}
