// Run the pipeline end to end from a laptop and email the result to one address:
//   npx tsx --env-file=.env.local scripts/preview-digest.ts you@example.com [--skip-ingest]
// Writes to the production database exactly as the crons do (news_items and
// today's digest draft); the send goes only to the address given.
import { runIngestion } from "../lib/ingest";
import { generateFintechDigest } from "../lib/digest";
import { sendDigestEmail } from "../lib/email";

async function main() {
  const to = process.argv[2];
  const skipIngest = process.argv.includes("--skip-ingest");
const skipGenerate = process.argv.includes("--skip-generate");
  if (!to || !to.includes("@")) throw new Error("usage: preview-digest.ts <email> [--skip-ingest]");
  if (!skipIngest) {
    const t0 = Date.now();
    const stats = await runIngestion();
    console.log("ingest", JSON.stringify(stats), `${Math.round((Date.now() - t0) / 1000)}s`);
  }
  const t1 = Date.now();
  const digest = await generateFintechDigest();
  console.log("generate", `${Math.round((Date.now() - t1) / 1000)}s`);
  console.log(JSON.stringify(digest, null, 2));
  await sendDigestEmail({ to, digest });
  console.log("sent preview to", to);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
