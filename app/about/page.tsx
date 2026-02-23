import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Meridian — AI News for Banking Executives",
  description:
    "Meridian was built for VPs, SVPs, and C-suite leaders in banking and fintech who need to stay current on AI without spending an hour a day sifting through noise. Here's why it exists.",
  openGraph: {
    title: "About Meridian — AI News for Banking Executives",
    description:
      "Hundreds of AI headlines break every day. Most of them have nothing to do with banking. Meridian filters down to the six stories that actually matter — delivered before your first meeting."
  }
};

export default function AboutPage() {
  return (
    <>
      <style>{`
        .about-root {
          min-height: 100vh;
          background: #07101f;
          background-image:
            radial-gradient(ellipse 90% 55% at 50% -5%, rgba(59,130,246,0.1) 0%, transparent 65%);
          color: #f8fafc;
          font-family: system-ui, -apple-system, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .about-nav {
          padding: 28px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }

        .about-logo {
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #fff;
          text-decoration: none;
        }

        .about-logo span { color: #3b82f6; }

        .about-nav-link {
          font-size: 13px;
          color: #475569;
          text-decoration: none;
          transition: color 0.15s;
        }

        .about-nav-link:hover { color: #94a3b8; }

        .about-body {
          max-width: 680px;
          margin: 0 auto;
          padding: 72px 32px 96px;
        }

        .about-kicker {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #3b82f6;
          margin-bottom: 20px;
        }

        .about-h1 {
          font-size: clamp(2rem, 4.5vw, 3.25rem);
          font-weight: 900;
          line-height: 1.08;
          letter-spacing: -0.035em;
          color: #fff;
          margin: 0 0 40px;
        }

        .about-h1 em {
          font-style: normal;
          color: #3b82f6;
        }

        .about-section {
          margin-bottom: 52px;
        }

        .about-h2 {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #334155;
          margin: 0 0 16px;
        }

        .about-p {
          font-size: 16px;
          line-height: 1.78;
          color: #94a3b8;
          margin: 0 0 20px;
        }

        .about-p strong {
          color: #e2e8f0;
          font-weight: 600;
        }

        .about-p:last-child { margin-bottom: 0; }

        .about-divider {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.05);
          margin: 52px 0;
        }

        .about-pull {
          font-size: clamp(1.15rem, 2.5vw, 1.5rem);
          font-weight: 700;
          line-height: 1.4;
          color: #e2e8f0;
          letter-spacing: -0.02em;
          margin: 0 0 20px;
          padding-left: 20px;
          border-left: 3px solid #3b82f6;
        }

        .about-cta-block {
          background: rgba(59,130,246,0.06);
          border: 1px solid rgba(59,130,246,0.12);
          border-radius: 14px;
          padding: 36px 32px;
          text-align: center;
          margin-top: 64px;
        }

        .about-cta-block h3 {
          font-size: 1.4rem;
          font-weight: 800;
          color: #fff;
          margin: 0 0 10px;
          letter-spacing: -0.02em;
        }

        .about-cta-block p {
          font-size: 14px;
          color: #64748b;
          margin: 0 0 24px;
        }

        .about-cta-btn {
          display: inline-block;
          background: #fff;
          color: #07101f;
          font-size: 14px;
          font-weight: 700;
          padding: 13px 28px;
          border-radius: 10px;
          text-decoration: none;
          transition: opacity 0.15s;
          font-family: inherit;
        }

        .about-cta-btn:hover { opacity: 0.88; }

        .about-footer {
          padding: 24px 40px;
          border-top: 1px solid rgba(255,255,255,0.04);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .about-footer-link {
          font-size: 12px;
          color: #334155;
          text-decoration: none;
        }

        .about-footer-link:hover { color: #64748b; }

        @media (max-width: 480px) {
          .about-nav { padding: 20px; }
          .about-body { padding: 48px 20px 72px; }
          .about-footer { padding: 20px; }
        }
      `}</style>

      <div className="about-root">
        <nav className="about-nav">
          <Link href="/" className="about-logo"><span>M</span>eridian</Link>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <Link href="/issues" className="about-nav-link">Past issues</Link>
            <Link href="/#subscribe" style={{
              background: "#3b82f6", color: "#fff", fontSize: 13, fontWeight: 600,
              padding: "7px 18px", borderRadius: 8, textDecoration: "none"
            }}>
              Subscribe free
            </Link>
          </div>
        </nav>

        <article className="about-body">
          <p className="about-kicker">About Meridian</p>

          <h1 className="about-h1">
            The world ships<br />
            hundreds of AI stories<br />
            a day. <em>Most don&apos;t<br />
            matter to banking.</em>
          </h1>

          {/* ── The problem ── */}
          <section className="about-section">
            <p className="about-h2">The problem</p>

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

          {/* ── Who it's for ── */}
          <section className="about-section">
            <p className="about-h2">Who Meridian is for</p>

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
              Meridian was built for that person. For the five minutes between getting your
              coffee and your 8am call where you want to feel genuinely caught up — not
              just scrolled.
            </p>
          </section>

          <hr className="about-divider" />

          {/* ── What Meridian does ── */}
          <section className="about-section">
            <p className="about-h2">What Meridian does</p>

            <p className="about-p">
              Every morning, Meridian scans 20+ sources — Banking Dive, Finextra, Tearsheet,
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

          {/* ── Philosophy ── */}
          <section className="about-section">
            <p className="about-h2">Our philosophy</p>

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
              Meridian is free. It takes under five minutes to read. And the goal — every
              single day — is to make sure that when someone in your next meeting references
              an AI development in financial services, you already know exactly what
              they&apos;re talking about.
            </p>
          </section>

          {/* ── CTA ── */}
          <div className="about-cta-block">
            <h3>Start your morning smarter</h3>
            <p>Free. No spam. Unsubscribe in one click anytime.</p>
            <Link href="/#subscribe" className="about-cta-btn">
              Subscribe to Meridian →
            </Link>
          </div>
        </article>

        <footer className="about-footer">
          <Link href="/" className="about-footer-link">Home</Link>
          <Link href="/issues" className="about-footer-link">Past issues</Link>
          <Link href="/admin" className="about-footer-link">Admin</Link>
        </footer>
      </div>
    </>
  );
}
