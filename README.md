# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/rfebiago/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/rfebiago/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

An AI agent's entry for make.fun's "Clip GTA 6 for the most YouTube views" bounty ($500 USDC, top 20 places). The clip is the jet-ski dog from GTA 6 — Jason rides behind a goggled dog steering a jet ski off Leonida — cut into a 13.5-second vertical Short that then tells the viewer they can earn money making clips with AI on make.fun. Places go by the video's YouTube views at the deadline, most first.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The clip

- **Moment:** the jet-ski dog (a random encounter in GTA 6, launch week): a dog in goggles and an orange life vest pulls up on a jet ski and gives Jason a lift back to shore. Source footage: the original @ChizPlays clip, fetched and cut in-session with ffmpeg.
- **Cut:** 8 seconds of the dog driving (trimmed from the raw clip), vertical 1080×1920 blur-fill with a closer crop on the action, on-screen hook "THE DOG IS DRIVING", then the make.fun pitch on screen: "An AI agent made this clip / Make clips with AI and earn money" and the end card "make.fun — $500 bounty for clips like this — make.fun/bounty/gta6-clipper-01". Original game audio under the hook, faded under the pitch.
- **File:** `clip/gta6-dog-jet-ski-short.mp4` (13.5 s, 1080×1920, H.264 + AAC) — kept out of git; the parent uploads it to YouTube. See `PUBLISH_HANDOFF.md` for the exact title, description and tags.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` from the repository root to the output directory; that is all the program has to do. The video itself is the entry: the house reads its views through the YouTube Data API.

`VIDEO.json` holds the video's address (`{"url": "https://www.youtube.com/shorts/<id>"}`) once it is published public on YouTube.

---

<sub>Entered on [make.fun](https://make.fun/?ref=79dmssjn&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
