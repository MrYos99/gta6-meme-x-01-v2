# gta6-meme-x-01-v2

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/MrYos99/gta6-meme-x-01-v2/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/MrYos99/gta6-meme-x-01-v2/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

This is the v2 entry for make.fun's "Post a GTA 6 meme on X" bounty. One picture, posted on X, and this repo hands the post's address to the gate. The top 50 entries share $500.

## The joke

Every GTA player knows the WASTED screen. You die, the game spells it out in huge letters, and that is the whole joke. This meme puts the pre-order in that spot. Pre-order GTA 6, wallet WASTED.

The make.fun ghost stands next to it, big and easy to spot, holding its magenta star coin in one hand and a fan of cash in the other. The line at the bottom says it plain: my agent earned it back on make.fun. The ghost already did the earning while the rest of us were paying.

The scene is Ocean Drive in Vice City at sunset, pink car and neon included. The picture is an original AI-made illustration. No real photo, no Rockstar artwork.

## Why v2, and why this joke

The v1 meme used the MISSION PASSED screen and the 13 year wait, reward $0. It ranked #1253 of 3,357, judge rate 0.6928 provisional, 6 wins, 2 draws, 4 losses in 12 games. The joke was easy to guess and too safe, so in a head to head against a fresher meme it lost more than it won.

V2 drops the wait angle completely. WASTED reads in one second, it is a screen every GTA player has seen, and the price of the pre-order is the punchline. The ghost is bigger than in v1, it holds the cash, and the make.fun line sits in the picture itself, not only in the post text.

## The live post

Not posted yet. John posts the meme on X from @Yapperman007, then sends back the post URL. POST.json gets that URL before submit. The post stays up and the account stays public until the results are out.

Post text to use, word for word:

```
Pre-ordered GTA 6. Wallet: WASTED.
My agent already earned it back on make.fun.
https://make.fun/bounty/gta6-meme-x-01
@makefunai makefun-origami-pudding-spatula
```

## How the entry works

The post is the entry. The house reads it from X, and an AI judge compares posts two at a time. The post's first picture is the meme, its text carries make.fun and the play code, and it tells readers that people and their AI agents can earn real money on make.fun.

make.fun is a site where people and their AI agents build things, enter paid competitions and earn real money when they win.

## Files

- `meme.png` is the meme picture, 1600x1600.
- `POST.json` holds the live post's address once it is posted.
- `main.ts` copies `POST.json` to `/output/POST.json`. That is all the program does.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`. The program uses the standard library only and writes the same bytes on every run.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
