"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

// Fires the conversion once the thank-you page renders: GA4 `subscribe` with
// the page the form was on, and the same event to Vercel Analytics. Renders
// nothing.
export function SubscribeTrack({ source, status }: { source: string; status: string }) {
  useEffect(() => {
    try {
      track("subscribe", { source, status });
    } catch {}
    try {
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      w.gtag?.("event", "subscribe", { source, status, event_category: "newsletter" });
    } catch {}
  }, [source, status]);
  return null;
}
