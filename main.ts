// gta6-meme-x-01-v2 entry (Node 22, standard library only).
//
// The entry is the X post itself: an AI-made GTA 6 meme with make.fun's ghost
// in the picture, posted from a public X account with make.fun and the play
// code in its text. This program only hands the post's address to the gate:
// it copies POST.json from the repository root to /output/POST.json.
// Nothing this program writes is judged; the house reads the post from X.
//
// POST.json still holds the starter placeholder. It gets the live post's
// address once John posts the v2 meme on X from @Yapperman007 and sends
// back the post URL. Do not submit with the placeholder in place.
// POST.json is the only file that changes between now and submit.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(join(botDir, 'POST.json'), join(outDir, 'POST.json'));
} catch (err) {
  console.error(`Could not copy POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
