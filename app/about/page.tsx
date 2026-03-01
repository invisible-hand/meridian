import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About BankingNewsAI — AI News for Banking Executives",
  description:
    "BankingNewsAI was built for VPs, SVPs, and C-suite leaders in banking and fintech who need to stay current on AI without spending an hour a day sifting through noise. Here's why it exists.",
  openGraph: {
    title: "About BankingNewsAI — AI News for Banking Executives",
    description:
      "Hundreds of AI headlines break every day. Most of them have nothing to do with banking. BankingNewsAI filters down to the six stories that actually matter — delivered before your first meeting."
  }
};

export default function AboutPage() {
  return (
    <>
      <style>{`
        .about-root {
          min-height: 100vh;
          background: #f0ede8;
          display: flex;
          flex-direction: column;
        }

        .about-nav {
          padding: 0 40px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e8e4de;
          background: #f0ede8;
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .about-logo {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #111111;
          text-decoration: none;
        }

        .about-logo span { color: #1a3fcb; }

        .about-nav-link {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9a9a9a;
          text-decoration: none;
          transition: color 0.15s;
        }

        .about-nav-link:hover { color: #111111; }

        .about-nav-cta {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #f0ede8;
          background: #111111;
          text-decoration: none;
          padding: 7px 16px;
          transition: opacity 0.15s;
        }

        .about-nav-cta:hover { opacity: 0.8; }

        /* ── Masthead ── */
        .about-masthead {
          background: #0c0c0c;
          padding: 52px 40px 48px;
          border-bottom: 1px solid #1a1a1a;
        }

        .about-masthead-inner {
          max-width: 680px;
          margin: 0 auto;
        }

        .about-eyebrow {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #444;
          margin: 0 0 16px;
        }

        .about-masthead-rule {
          height: 1px;
          background: #1e1e1e;
          margin: 0 0 22px;
        }

        .about-h1 {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(2rem, 4.5vw, 3.25rem);
          font-weight: 900;
          font-style: italic;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0;
        }

        .about-h1 em {
          font-style: normal;
          color: #4f7fff;
        }

        /* ── Body ── */
        .about-body {
          flex: 1;
          max-width: 680px;
          margin: 0 auto;
          padding: 64px 40px 96px;
          width: 100%;
          box-sizing: border-box;
        }

        .about-section {
          margin-bottom: 52px;
        }

        .about-section-label {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .about-section-label-text {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b0ab9a;
          white-space: nowrap;
        }

        .about-section-rule {
          flex: 1;
          height: 1px;
          background: #e8e4de;
        }

        .about-p {
          font-family: var(--font-sans), 'Helvetica Neue', sans-serif;
          font-size: 16px;
          line-height: 1.8;
          color: #3a3a3a;
          margin: 0 0 22px;
        }

        .about-p:last-child { margin-bottom: 0; }

        .about-p strong {
          color: #111111;
          font-weight: 600;
        }

        .about-divider {
          border: none;
          border-top: 1px solid #e8e4de;
          margin: 52px 0;
        }

        .about-pull {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(1.2rem, 2.5vw, 1.55rem);
          font-weight: 700;
          font-style: italic;
          line-height: 1.45;
          color: #111111;
          margin: 0 0 24px;
          padding-left: 22px;
          border-left: 2px solid #1a3fcb;
        }

        /* ── CTA block ── */
        .about-cta {
          background: #0c0c0c;
          padding: 44px 40px;
          text-align: center;
          margin-top: 64px;
        }

        .about-cta h3 {
          font-family: var(--font-serif), Georgia, serif;
          font-size: 1.6rem;
          font-weight: 700;
          font-style: italic;
          color: #ffffff;
          margin: 0 0 10px;
        }

        .about-cta p {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #555;
          margin: 0 0 26px;
        }

        .about-cta-btn {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #0c0c0c;
          background: #f0ede8;
          text-decoration: none;
          padding: 13px 30px;
          display: inline-block;
          transition: opacity 0.15s;
        }

        .about-cta-btn:hover { opacity: 0.8; }

        /* ── Footer ── */
        .about-footer {
          padding: 18px 40px;
          border-top: 1px solid #e8e4de;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .about-footer-link {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 9px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #b0ab9a;
          text-decoration: none;
          transition: color 0.15s;
        }

        .about-footer-link:hover { color: #5a5a5a; }

        @media (max-width: 520px) {
          .about-nav { padding: 0 20px; }
          .about-masthead { padding: 40px 20px 36px; }
          .about-body { padding: 48px 20px 72px; }
          .about-footer { padding: 18px 20px; }
        }
      `}</style>

      <div className="about-root">

        {/* Nav */}
        <nav className="about-nav">
          <Link href="/" className="about-logo">Banking<span>News</span>AI</Link>
          <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
            <Link href="/issues" className="about-nav-link">Archive</Link>
            <Link href="/#subscribe" className="about-nav-cta">Subscribe</Link>
          </div>
        </nav>

        {/* Masthead */}
        <div className="about-masthead">
          <div className="about-masthead-inner">
            <p className="about-eyebrow">About BankingNewsAI</p>
            <div className="about-masthead-rule" />
            <h1 className="about-h1">
              The world ships hundreds of AI stories a day.<br />
              <em>Most don&apos;t matter to banking.</em>
            </h1>
          </div>
        </div>

        {/* Body */}
        <article className="about-body">

          {/* The problem */}
          <section className="about-section">
            <div className="about-section-label">
              <span className="about-section-label-text">The problem</span>
              <div className="about-section-rule" />
            </div>

            <p className="about-p">
              If you run a business unit, a technology function, or a risk team at a bank or
              fintech firm, you already know what it feels like. Your inbox is a flood. Your
              LinkedIn feed is a fire hose. Every vendor, every analyst, every newsletter is
              screaming about AI — and somehow, by 9am, you&apos;re already three meetings deep
              without a clear picture of what actually moved overnight.
            </p>

            <p className="about-p">
              The AI news cycle has become genuinely brutal. On a busy day, <strong>hundreds
              of stories</strong> break across industry blogs, financial press, research labs,
              regulator sites, and social media. The vast majority are noise — funding
              announcements for consumer apps, data center capacity debates, model benchmark
              wars that have no bearing on whether your fraud detection system needs rethinking
              by Q3.
            </p>

            <p className="about-p">
              But buried inside that avalanche? There&apos;s a Fed guidance note on AI model risk.
              A major EU bank quietly deployed an AI underwriting system that cut decisioning
              time by 40%. A fintech you&apos;ve been watching raised a Series C to go after your
              SMB lending book. <strong>Those stories exist. They&apos;re just very hard to find
              before your first meeting.</strong>
            </p>
          </section>

          <hr className="about-divider" />

          {/* Who it's for */}
          <section className="about-section">
            <div className="about-section-label">
              <span className="about-section-label-text">Who it&apos;s for</span>
              <div className="about-section-rule" />
            </div>

            <p className="about-pull">
              VPs. SVPs. Chiefs. People whose mornings are already scheduled before they wake up.
            </p>

            <p className="about-p">
              You&apos;re not a developer. You&apos;re not building models. But you are responsible —
              for decisions, for strategy, for a team that keeps asking whether the bank is
              moving fast enough on AI. You need to be conversant, not expert. Informed,
              not overwhelmed.
            </p>

            <p className="about-p">
              The executive in wealth management who needs to understand what large language
              models mean for client advisory services. The Chief Risk Officer who needs to
              know which regulators are moving on algorithmic decision-making — and how fast.
              The Head of Payments who wants to know what Visa, Mastercard, and the
              neobanks are actually shipping, not what they&apos;re announcing in press releases.
            </p>

            <p className="about-p">
              BankingNewsAI was built for that person. For the five minutes between getting your
              coffee and your 8am call where you want to feel genuinely caught up — not
              just scrolled.
            </p>
          </section>

          <hr className="about-divider" />

          {/* What it does */}
          <section className="about-section">
            <div className="about-section-label">
              <span className="about-section-label-text">What it does</span>
              <div className="about-section-rule" />
            </div>

            <p className="about-p">
              Every morning, BankingNewsAI scans 20+ sources — Banking Dive, Finextra, Tearsheet,
              PYMNTS, Fintech Futures, Crowdfund Insider, and the curated AI industry
              newsletter from smol.ai, among others. An AI model trained for this specific
              task reads through every item, strips out the paywalled teasers that give you
              a headline and a wall, removes the consumer tech stories that have no
              bearing on financial services, and surfaces what&apos;s actually worth your time.
            </p>

            <p className="about-p">
              The result lands in your inbox as two sections. <strong>Banking AI</strong> covers
              AI developments with a direct, explicit connection to your world — real
              institutions, named regulators, specific financial products. No tenuous links,
              no "this could someday affect banks" speculation. <strong>General AI</strong>
              covers the broader AI landscape: model releases, capability shifts, enterprise
              adoption trends — the developments significant enough that a banking executive
              would feel behind on if they missed them.
            </p>

            <p className="about-p">
              Each story comes with a concise summary and a specific, actionable
              implication — written for someone who reads it standing up, between meetings.
              Not for someone with 20 minutes to spare.
            </p>
          </section>

          <hr className="about-divider" />

          {/* Philosophy */}
          <section className="about-section">
            <div className="about-section-label">
              <span className="about-section-label-text">Philosophy</span>
              <div className="about-section-rule" />
            </div>

            <p className="about-p">
              We have one strong belief: <strong>less is worth more, if the less is actually right.</strong>
              A digest that gives you six stories you can act on is infinitely more valuable
              than fifty that clog your thinking and make you feel busy without making you
              better informed.
            </p>

            <p className="about-p">
              We hard-filter paywalled content. If you can&apos;t read the article, it shouldn&apos;t
              be in your brief. We reject opinion pieces with no new data. We skip the
              Anthropic vs. OpenAI funding round coverage unless there&apos;s a direct banking
              angle — because those stories, while interesting, are not the ones that change
              what you do on Monday morning.
            </p>

            <p className="about-p">
              BankingNewsAI is free. It takes under five minutes to read. And the goal — every
              single day — is to make sure that when someone in your next meeting references
              an AI development in financial services, you already know exactly what
              they&apos;re talking about.
            </p>
          </section>

          {/* CTA */}
          <div className="about-cta">
            <h3>Start your morning smarter</h3>
            <p>Free · No spam · Unsubscribe in one click</p>
            <Link href="/#subscribe" className="about-cta-btn">
              Subscribe to BankingNewsAI →
            </Link>
          </div>

        </article>

        {/* Footer */}
        <footer className="about-footer">
          <Link href="/" className="about-footer-link">Home</Link>
          <Link href="/issues" className="about-footer-link">Archive</Link>
          <Link href="/admin" className="about-footer-link">Admin</Link>
        </footer>

      </div>
    </>
  );
}
