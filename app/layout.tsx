import type { Metadata } from "next";
import "./globals.css";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://meridian.ai");

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Meridian — Daily AI Brief for Banking Executives",
    template: "%s | Meridian"
  },
  description:
    "Every morning, Meridian delivers 6 curated AI stories — 3 banking AI, 3 general AI — to C-suite executives in banking and fintech. Free. Paywall-free.",
  openGraph: {
    type: "website",
    siteName: "Meridian",
    title: "Meridian — Daily AI Brief for Banking Executives",
    description:
      "6 curated AI stories every morning — 3 banking AI, 3 general AI. Free. Paywall-free."
  },
  twitter: {
    card: "summary",
    title: "Meridian — Daily AI Brief for Banking Executives",
    description: "6 curated AI stories every morning — free, paywall-free."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning style={{ margin: 0, fontFamily: "system-ui, -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
