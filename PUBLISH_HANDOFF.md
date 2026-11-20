# PUBLISH HANDOFF — gta6-clipper-01 (parent/Boss step)

The clip is rendered and the repo is built. YouTube publish is a parent
step: upload the file below as a PUBLIC Short, paste the title and
description exactly, then fill VIDEO.json with the Short's URL and submit.

## Clip file

`~/workspace/makefun-bounties/gta6-clipper-01/clip/gta6-dog-jet-ski-short.mp4`

- 13.5 s, 1080×1920 vertical, H.264 + AAC, 7.8 MB. (v3 re-render
  2026-11-20 ~09:30 WIB: true 9:16 crop, no frozen frames, louder audio.)
- Content: 0–7.5 s the GTA 6 jet-ski dog (Jason rides behind a goggled dog in
  an orange life vest steering a jet ski off Leonida), on-screen hook
  "THE DOG IS DRIVING" (0–3 s); 7.5–10.5 s pitch lines on screen over
  moving footage ("An AI agent made this clip / Make clips with AI / and
  earn money on make.fun"); 10.5–13.5 s end card with make.fun, the $500
  bounty and the bounty URL, also over moving footage (the best 3 s of the
  dog driving, looped once). Original game audio under the hook, louder
  than v2, faded under the pitch. No voiceover.
- Source: the original @ChizPlays clip (X, 18 Nov 2026), fetched and cut
  in-session with ffmpeg — not someone else's finished edit.

## Title (paste exactly)

GTA 6 — The Dog Drives the Jet Ski

## Description (paste exactly)

The dog drives the jet ski in GTA 6. Jason just rides along.

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
makefun-diamond-lion-banister

GTA 6 launched November 19, 2026. This is the jet ski dog from Leonida — he shows up when you swim too far out and gives you a lift back to shore.

#GTA6 #GTAVI #Shorts #GTA6Clips #ViceCity #Leonida

Notes:
- The second paragraph is the mandatory line, word for word — do not
  reword it. The third line is the play code; it must stay in the video
  description (or the channel description) until the check has run.
- Keep the video PUBLIC until results are out (deadline Mon 2026-11-23
  08:00 WIB). Publish as soon as possible — every hour is lost view
  inventory in a 72-hour window.

## Tags (YouTube tag field, if used)

GTA6, GTAVI, Shorts, GTA6Clips, ViceCity, Leonida, Gaming

## After publish

1. Copy the Short's URL (Share button) — it will look like
   https://www.youtube.com/shorts/<11-char id>.
2. In a recorded follow-up session, replace the placeholder in
   `VIDEO.json` with `{"url": "<that URL>"}`.
3. Run the local verify (`mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`)
   twice and check the bytes match, then submit per the kit's RULES.txt.

## Repo note

GitHub repo is not created yet (repos are only ever created via Boss's
Chrome web UI). README badges assume owner `rfebiago` and repo
`gta6-clipper-01` — if the repo is created under a different name, update
the badge URLs in README.md before submitting. Repo About (parent web-UI
step): description "An AI agent's entry for make.fun's 'Clip GTA 6 for
the most YouTube views' bounty, $500 in USDC.", homepage
https://make.fun/bounty/gta6-clipper-01, topics makefun, ai-agents,
bounties, growth.
