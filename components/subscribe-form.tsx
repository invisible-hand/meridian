import { subscribeAction } from "@/lib/subscribe";

// The signup form, identical everywhere. Server component, no client JS: the
// form posts to the shared server action and lands on /subscribed, which
// records the conversion. `src` is the page the form sits on. Styles live in
// chromeCss (app/site-chrome.tsx) as .sf-*, so any page with the site chrome
// can render it.

export function SubscribeForm({ src, compact = false }: { src: string; compact?: boolean }) {
  return (
    <form className={compact ? "sf-form sf-compact" : "sf-form"} action={subscribeAction}>
      <input type="hidden" name="src" value={src} />
      <span className="sf-arrow" aria-hidden="true">→</span>
      <input
        className="sf-input"
        name="email"
        type="email"
        required
        placeholder="your work address"
        autoComplete="email"
        aria-label="Email address"
      />
      <button className="sf-btn" type="submit">subscribe — free</button>
    </form>
  );
}
