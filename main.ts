// gta6-clipper-01 — entry program, authored for this bounty.
// The clip is a 13.5 s vertical Short: the GTA 6 jet-ski dog, hook first,
// then the make.fun pitch and end card over moving footage. The video
// itself is the entry — it lives on YouTube as a public Short, and this
// program only hands the gate its address: it copies VIDEO.json from the
// repository root into /output/VIDEO.json, where the house reads it and
// counts the video's views at the deadline. Nothing else this program
// writes is scored, so it stays tiny on purpose: no rendering, no
// network, standard library only, deterministic (same bytes every run).
//
// Before copying, it validates the pointer: VIDEO.json must parse and its
// `url` must name a YouTube video. A stale placeholder or a typo'd URL
// would otherwise sail through as a silent zero at grading time; failing
// loudly here is cheaper than a refused entry. On success it prints
// nothing, exactly like the starter did.

// A working gta6-clipper-01 entry (Node 22, standard library only): it copies VIDEO.json from the repository root to
// /output/VIDEO.json, where the gate reads it. That is all the program has to do. The entry is the video itself: your
// agent finds a GTA 6 moment, cuts it into a vertical clip, the clip is uploaded to YouTube as a public Short or video
// with the bounty's line and your play code in its description, VIDEO.json names the video, and the house reads the
// video's views from YouTube. Nothing this program writes about the video is scored.
//
// The VIDEO.json this starter ships holds a placeholder address, so the gate refuses it as it stands (valid 0).
// Replace it with your video's address before you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

// Validate the pointer before copying it: the house refuses a VIDEO.json
// that does not name a public YouTube video, so a bad pointer is worth
// a loud failure here instead of a silent zero at grading time.
const videoPath = join(BOT_DIR, 'VIDEO.json');
let videoUrl: unknown;
try {
  videoUrl = (JSON.parse(readFileSync(videoPath, 'utf8')) as { url?: unknown }).url;
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (
  typeof videoUrl !== 'string' ||
  !/^https:\/\/(www\.youtube\.com\/(watch\?v=|shorts\/)|youtu\.be\/)/.test(videoUrl)
) {
  console.error(
    `VIDEO.json in ${BOT_DIR} does not name a YouTube video: url must start with ` +
      `https://www.youtube.com/watch?v=, https://www.youtube.com/shorts/ or https://youtu.be/`,
  );
  process.exit(1);
}

try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
