import Link from "next/link";
import { notFound } from "next/navigation";
import { ensureSchema, getDigestForDate } from "@/lib/db";
import { DailyDigest, DigestStory } from "@/lib/types";

export const dynamic = "force-dynamic";

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      weekday: "long", year: "numeric", month: "long", day: "numeric"
    });
  } catch { return iso; }
}

function extractDomain(url: string): string {
  try { return new URL(url).hostname.replace(/^www\./, ""); }
  catch { return "source"; }
}

function StoryCard({
  story,
  index,
  accent
}: {
  story: DigestStory;
  index: number;
  accent: string;
}) {
  const domain = extractDomain(story.sourceUrl);
  return (
    <div style={{
      background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10,
      overflow: "hidden", marginBottom: 16
    }}>
      <div style={{ height: 3, background: accent }} />
      <div style={{ padding: "18px 22px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{
            fontSize: 11, fontWeight: 600, color: "#6b7280",
            textTransform: "uppercase", letterSpacing: "0.05em"
          }}>
            <img
              src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=32`}
              width={14} height={14}
              alt=""
              style={{ display: "inline-block", verticalAlign: "middle", marginRight: 5, borderRadius: 2 }}
            />
            {domain}
          </span>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#d1d5db" }}>#{index}</span>
        </div>
        <p style={{ margin: "0 0 10px", fontSize: 16, fontWeight: 700, color: "#0f172a", lineHeight: 1.35 }}>
          {story.title}
        </p>
        <p style={{ margin: "0 0 12px", fontSize: 13, color: "#374151", lineHeight: 1.65 }}>
          {story.executiveSummary}
        </p>
        <div style={{
          background: "#f8fafc", borderLeft: `3px solid ${accent}`,
          borderRadius: "0 6px 6px 0", padding: "9px 14px", marginBottom: 14
        }}>
          <p style={{ margin: 0, fontSize: 12, color: "#4b5563", lineHeight: 1.55 }}>
            <strong style={{ color: "#374151" }}>Action: </strong>{story.businessImpact}
          </p>
        </div>
        <a href={story.sourceUrl} target="_blank" rel="noreferrer" style={{
          display: "inline-block", fontSize: 12, fontWeight: 600, color: "#fff",
          background: accent, textDecoration: "none", padding: "6px 14px",
          borderRadius: 6
        }}>
          Read article →
        </a>
      </div>
    </div>
  );
}

export default async function IssuePage({
  params
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;

  // Basic date validation
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) notFound();

  await ensureSchema();
  const digest = await getDigestForDate({ digestDate: date, category: "fintech_banking" }).catch(() => null);

  if (!digest || digest.status !== "sent") notFound();

  const content = digest.content_json as DailyDigest | null;
  if (!content) notFound();

  const bankingStories = content.bankingStories ?? content.stories ?? [];
  const aiStories = content.aiStories ?? [];
  const formatted = formatDate(date);

  return (
    <>
      {/* Nav */}
      <nav style={{
        background: "#ffffff", borderBottom: "1px solid #e5e7eb",
        padding: "0 2rem", position: "sticky", top: 0, zIndex: 50
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
          <Link href="/" style={{ fontWeight: 800, fontSize: 17, color: "#0f172a", textDecoration: "none" }}>
            Banking<span style={{ color: "#3b82f6" }}>News</span>AI
          </Link>
          <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
            <Link href="/issues" style={{ color: "#64748b", fontSize: 13, textDecoration: "none" }}>
              ← All issues
            </Link>
            <Link href="/#subscribe" style={{
              background: "#3b82f6", color: "#fff", fontSize: 13, fontWeight: 600,
              padding: "7px 18px", borderRadius: 8, textDecoration: "none"
            }}>
              Subscribe free
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div style={{
        background: "#f8fafc", borderBottom: "1px solid #e5e7eb",
        padding: "48px 2rem 44px", textAlign: "center"
      }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3b82f6", marginBottom: 10 }}>
          BANKINGNEWSAI DAILY BRIEF &nbsp;&middot;&nbsp; {formatted}
        </p>
        <h1 style={{ fontSize: "clamp(1.2rem,3vw,1.75rem)", fontWeight: 800, color: "#0f172a", margin: "0 0 14px", letterSpacing: "-0.02em", lineHeight: 1.25, maxWidth: 680, marginLeft: "auto", marginRight: "auto" }}>
          {content.briefSummary ?? formatted}
        </h1>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          {bankingStories.length > 0 && (
            <span style={{
              display: "inline-block", background: "#eff6ff", color: "#2563eb",
              fontSize: 11, fontWeight: 600, padding: "3px 12px", borderRadius: 999,
              border: "1px solid #bfdbfe"
            }}>
              🏦 {bankingStories.length} Banking AI
            </span>
          )}
          {aiStories.length > 0 && (
            <span style={{
              display: "inline-block", background: "#f0fdf4", color: "#16a34a",
              fontSize: 11, fontWeight: 600, padding: "3px 12px", borderRadius: 999,
              border: "1px solid #bbf7d0"
            }}>
              🤖 {aiStories.length} General AI
            </span>
          )}
        </div>
      </div>

      {/* Stories */}
      <div style={{ background: "#f8fafc", padding: "36px 2rem 64px" }}>
        <div style={{ maxWidth: 740, margin: "0 auto" }}>

          {bankingStories.length > 0 && (
            <section style={{ marginBottom: 36 }}>
              <div style={{
                background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "10px 10px 0 0",
                padding: "12px 20px", display: "flex", alignItems: "center", gap: 8, marginBottom: 0
              }}>
                <span style={{ fontSize: 15 }}>🏦</span>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#2563eb" }}>
                  Banking AI
                </span>
              </div>
              <div style={{ paddingTop: 16 }}>
                {bankingStories.map((story, i) => (
                  <StoryCard key={i} story={story} index={i + 1} accent="#3b82f6" />
                ))}
              </div>
            </section>
          )}

          {aiStories.length > 0 && (
            <section>
              <div style={{
                background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px 10px 0 0",
                padding: "12px 20px", display: "flex", alignItems: "center", gap: 8
              }}>
                <span style={{ fontSize: 15 }}>🤖</span>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#16a34a" }}>
                  General AI
                </span>
              </div>
              <div style={{ paddingTop: 16 }}>
                {aiStories.map((story, i) => (
                  <StoryCard key={i} story={story} index={i + 1} accent="#22c55e" />
                ))}
              </div>
            </section>
          )}

          {/* Subscribe nudge */}
          <div style={{
            marginTop: 40, background: "#f8fafc", border: "1px solid #e5e7eb",
            borderRadius: 14, padding: "32px 28px", textAlign: "center"
          }}>
            <p style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", margin: "0 0 8px" }}>
              Get this in your inbox every morning
            </p>
            <p style={{ fontSize: 13, color: "#64748b", margin: "0 0 22px" }}>
              Free. No spam. Unsubscribe anytime.
            </p>
            <Link href="/#subscribe" style={{
              display: "inline-block", background: "#3b82f6", color: "#fff",
              fontWeight: 700, fontSize: 14, padding: "11px 28px",
              borderRadius: 8, textDecoration: "none"
            }}>
              Subscribe free →
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        background: "#f8fafc", borderTop: "1px solid #e5e7eb",
        padding: "24px 2rem", textAlign: "center"
      }}>
        <p style={{ color: "#94a3b8", fontSize: 12, margin: 0 }}>
          <Link href="/" style={{ color: "#3b82f6", textDecoration: "none" }}>BankingNewsAI</Link>
          {" "}·{" "}
          <Link href="/issues" style={{ color: "#64748b", textDecoration: "none" }}>All issues</Link>
          {" "}· Curated by AI · Delivered daily
        </p>
      </footer>
    </>
  );
}
