// Submit tracker URLs changed in the last N days (default 7) to IndexNow.
// Run locally: npm run tracker:indexnow -- [days]
// The daily send cron does the same automatically on Vercel; this is for
// pushing a big change immediately.
import { pingIndexNow } from "../lib/indexnow";
import { trackerPathsUpdatedSince } from "../lib/tracker";

const days = Number(process.argv[2] ?? 7);
const since = new Date(Date.now() - days * 86400_000).toISOString().slice(0, 10);
const paths = trackerPathsUpdatedSince(since);
console.log(`${paths.length} tracker paths updated since ${since}`);
pingIndexNow(paths).then((r) => {
  console.log(r);
  process.exit(r.ok ? 0 : 1);
});
