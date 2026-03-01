import Link from "next/link";
import { ensureSchema, listSentDigests } from "@/lib/db";
import { DailyDigest } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function IssuesPage() {
  await ensureSchema();
  const digests = await listSentDigests(365).catch(() => []);

  return (
    <>
      {/* Nav */}
      <nav style={{
        background: "#ffffff", borderBottom: "1px solid #e5e7eb",
        padding: "0 2rem"
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
          <Link href="/" style={{ fontWeight: 800, fontSize: 17, color: "#0f172a", textDecoration: "none", letterSpacing: "-0.02em" }}>
            Banking<span style={{ color: "#3b82f6" }}>News</span>AI
          </Link>
          <Link href="/#subscribe" style={{
            background: "#3b82f6", color: "#fff", fontSize: 13, fontWeight: 600,
            padding: "7px 18px", borderRadius: 8, textDecoration: "none"
          }}>
            Subscribe free
          </Link>
        </div>
      </nav>

      {/* Header */}
      <div style={{
        background: "#f8fafc", borderBottom: "1px solid #e5e7eb",
        padding: "48px 2rem 44px", textAlign: "center"
      }}>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 800, color: "#0f172a", margin: "0 0 12px", letterSpacing: "-0.02em" }}>
          Past Issues
        </h1>
        <p style={{ fontSize: 14, color: "#64748b", margin: 0 }}>
          {digests.length} issue{digests.length !== 1 ? "s" : ""} published
        </p>
      </div>

      {/* List */}
      <div style={{ background: "#f8fafc", minHeight: "60vh", padding: "36px 2rem 64px" }}>
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
          {digests.length === 0 ? (
            <p style={{ textAlign: "center", color: "#64748b", paddingTop: 48 }}>
              No issues published yet. Check back soon.
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {digests.map((digest) => {
                const content = digest.content_json as DailyDigest | null;
                const bankingCount = (content?.bankingStories ?? content?.stories ?? []).length;
                const aiCount = (content?.aiStories ?? []).length;
                const total = bankingCount + aiCount;
                const formatted = formatIssueDate(digest.digest_date);

                const briefSummary = content?.briefSummary;

                return (
                  <Link
                    key={digest.id}
                    href={`/issues/${digest.digest_date}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div style={{
                      background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10,
                      padding: "18px 22px", display: "flex", alignItems: "center",
                      justifyContent: "space-between", gap: 16,
                      transition: "border-color 0.15s", cursor: "pointer"
                    }}>
                      <div style={{ minWidth: 0 }}>
                        <p style={{ margin: "0 0 3px", fontSize: 15, fontWeight: 700, color: "#0f172a", lineHeight: 1.35, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {briefSummary ?? formatted}
                        </p>
                        <p style={{ margin: 0, fontSize: 12, color: "#94a3b8" }}>
                          {formatted} &nbsp;&middot;&nbsp; {total} stor{total !== 1 ? "ies" : "y"}
                          {bankingCount > 0 ? ` · ${bankingCount} banking AI` : ""}
                          {aiCount > 0 ? ` · ${aiCount} general AI` : ""}
                        </p>
                      </div>
                      <span style={{ fontSize: 13, color: "#3b82f6", fontWeight: 600, whiteSpace: "nowrap" }}>
                        Read →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        background: "#f8fafc", borderTop: "1px solid #e5e7eb",
        padding: "24px 2rem", textAlign: "center"
      }}>
        <p style={{ color: "#94a3b8", fontSize: 12, margin: 0 }}>
          <Link href="/" style={{ color: "#3b82f6", textDecoration: "none" }}>BankingNewsAI</Link>
          {" "}· Curated by AI · Delivered daily
        </p>
      </footer>
    </>
  );
}

function formatIssueDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      weekday: "long", year: "numeric", month: "long", day: "numeric"
    });
  } catch {
    return iso;
  }
}
