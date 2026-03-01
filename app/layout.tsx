import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Playfair_Display, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["700", "900"],
  style: ["normal", "italic"],
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://bankingnewsai.com");

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "BankingNewsAI — Daily AI Brief for Banking Executives",
    template: "%s | BankingNewsAI"
  },
  description:
    "Every morning, BankingNewsAI delivers 6 curated AI stories — 3 banking AI, 3 general AI — to C-suite executives in banking and fintech. Free. Paywall-free.",
  openGraph: {
    type: "website",
    siteName: "BankingNewsAI",
    title: "BankingNewsAI — Daily AI Brief for Banking Executives",
    description:
      "6 curated AI stories every morning — 3 banking AI, 3 general AI. Free. Paywall-free."
  },
  twitter: {
    card: "summary",
    title: "BankingNewsAI — Daily AI Brief for Banking Executives",
    description: "6 curated AI stories every morning — free, paywall-free."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <body suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
