import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArchiveView, { archivePath, getArchivePageCount } from "../../archive-view";

// Same fallback window as /issues. Deeper pages change only when older issues
// shift across a page boundary, so an hour is generous.
export const revalidate = 3600;

// Pre-render the pages that exist at build time; anything newer is rendered on
// first request and then cached (ISR), so a growing archive needs no rebuild.
export async function generateStaticParams() {
  const pageCount = await getArchivePageCount().catch(() => 1);
  const pages: Array<{ n: string }> = [];
  for (let p = 2; p <= pageCount; p++) {
    pages.push({ n: String(p) });
  }
  return pages;
}

function parsePage(raw: string): number | null {
  // Reject "01", "2.5", "-3", "abc" — one canonical URL per page, no dupes.
  if (!/^[1-9]\d*$/.test(raw)) return null;
  const n = Number(raw);
  return Number.isSafeInteger(n) ? n : null;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ n: string }>;
}): Promise<Metadata> {
  const { n } = await params;
  const page = parsePage(n);
  if (page === null || page === 1) {
    return {};
  }

  const pageCount = await getArchivePageCount().catch(() => 1);
  const title = `Archive — page ${page} of ${pageCount}`;

  return {
    title,
    description: `Older issues of BankingNewsAI, the daily AI brief for banking executives — page ${page} of ${pageCount}.`,
    alternates: { canonical: archivePath(page) },
    openGraph: {
      type: "website",
      url: archivePath(page),
      title: `BankingNewsAI Archive — page ${page}`,
      description: "Every daily AI brief for banking executives. 6 stories a day, free."
    },
    // Paginated pages are for crawl discovery, not search results — the issue
    // pages themselves are what should rank.
    robots: { index: false, follow: true }
  };
}

export default async function ArchivePaginatedPage({
  params
}: {
  params: Promise<{ n: string }>;
}) {
  const { n } = await params;
  const page = parsePage(n);

  // /issues/page/1 would duplicate /issues — send it to 404 rather than serve
  // the same content at two URLs.
  if (page === null || page === 1) {
    notFound();
  }

  return <ArchiveView page={page} />;
}
