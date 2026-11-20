# REBUILD NOTES — gta6-clipper-01

Entry v3 (current, rendered 2026-11-20 ~09:30 WIB by the fix/rebuild session):
13.5 s Short, 1080×1920, H.264 + AAC, 7.8 MB. Re-rendered from the same raw
source to fix all five mandatory review findings (REVIEW.md, verdict
FIX-THEN-SHIP):

1. **Frozen second half — FIXED.** No stills anywhere: 0–7.5 s is source
   2.0–9.5 s (side view, with a genuine ~1.3 s camera swing overhead at
   clip ~1.2–2.5 s), 7.5–13.5 s is source 6.0–9.0 s looped twice. Pixel-diff
   between consecutive seconds: 19–36 mean abs diff at every sampled pair
   (8/9, 9/10, 10/11, 11/12, 12/13 s) — real motion throughout; the loop
   seam at 10.5 s reads as a cut (diff 31.6), not a freeze.
2. **Dog too small — FIXED (true 9:16 crop).** crop=608:1080:696:0 scaled to
   1080×1920 — no blur-fill. Dog measures 690–713 px tall (36–37% of frame
   height) at 5–9 s; Jason's head, the dog, and paws/handlebars stay in
   frame at every sampled time. Residual: in the first ~0.5 s the dog is
   ~550–560 px (~29%) as the camera settles — just under the review's
   600 px bar at that one timestamp. A tighter crop would cut the paws
   (they reach source x≈1310 at the start), so the crop was kept; see
   weakness 6 below.
3. **Pitch never said make.fun — FIXED.** Pitch (7.5–10.5 s, over moving
   footage) now reads "An AI agent made this clip / Make clips with AI /
   and earn money on make.fun" — the brand is in the pitch, not only the
   end card. Lines re-sized to 50 px so the widest line ends at x≈967,
   inside the frame with margins.
4. **End card in the Shorts UI danger zone — FIXED (and moved further).**
   End card (10.5–13.5 s) now sits in the sky zone, y≈340–690: "make.fun"
   (120 px), "$500 bounty for clips like this" (48 px), URL (42 px, ends
   x≈946). Nothing in the bottom 15% (y>1632) or right 8% (x>994). Note:
   the review suggested y≈1350 for the URL, but in v3 the end card plays
   over moving side-view footage where the dog's head is at y≈1200–1400,
   so the block was placed over sky instead — same intent (clear of the UI
   zone), better framing.
5. **Audio quiet — FIXED.** +13 dB gain (raw measured mean −33.8 dB, max
   −20.6 dB in-session), ducked to 50% under pitch/end card, limiter at
   −3 dB. Final: mean −22.8 dB, max −7.9 dB.
6. **Voice pitch — NOT DONE (optional).** No clean TTS in-session: no
   espeak/piper/festival binary; ffmpeg has libflite but its voice is
   robotic, and the review said a robotic voice would hurt more than
   silence. Text-only pitch stands.

V3 render recipe (for a future rebuild round; run from the repo root, raw at
src/dog-jet-ski-raw.mp4): three inputs — A: source 2.0–9.5 s, B1/B2: source
6.0–9.0 s each; concat; fps=30; crop 608:1080:696:0; scale 1080:1920;
drawtext overlays (DejaVu Sans Bold): hook "THE DOG IS DRIVING" 84 px
0–3 s y=230; pitch 50 px 7.5–10.5 s y=530/630/730 with dark boxes; end card
10.5–13.5 s y=360/540/630 with dark boxes. Audio: 50 ms fades at every
segment seam, +13 dB, duck to 0.5× from 7.5 s, limiter 0.7. x264 crf 20,
AAC 128k. Verify with the review's re-review checklist (frames at
0.5/2/5/8/9/10/12/13 s, pixel-diff > 5, volumedetect mean ≥ −24 dB,
max ≤ −3 dB, main.ts determinism pair).

Entry v1 (superseded): the jet-ski dog, 16 s Short, 1080×1920. Submitted
before publish? No — VIDEO.json is still the starter placeholder; the parent
publishes the clip, fills VIDEO.json with the real Short URL, then submits.

## Known weaknesses of v3

1. **Most-clipped moment of launch week.** The jet-ski dog is everywhere
   already (Kotaku, GameSpot, NME all led with it). Our edge is only the
   tightest vertical cut + the plain searchable title — not novelty. If the
   board shows other dog clips far ahead, novelty is the gap, not polish.
2. **Hook is 7.5 s of one camera angle family.** The raw clip is only 11.8 s
   and the dog is hidden at its start and end; the cut uses the middle
   7.5 s plus a loop of the best 3 s. The overhead shot (~source 4 s) is
   in there but the side view dominates. A viewer who has seen the dog
   clip before recognises it in 1 s and may swipe anyway.
3. **Pitch is text-only, no voice.** The pitch lines are legible, but a
   spoken line would carry the make.fun name to viewers who never read
   overlays. No clean TTS voice was available in the v3 session either
   (no espeak/piper/festival; ffmpeg's libflite voice is robotic) — still
   the cheapest upgrade if a clean voice turns up.
4. **No facecam / streamer reaction.** The source is raw gameplay with no
   reaction audio. Reaction-face Shorts (streamer + moment) tend to hold
   attention longer than gameplay alone.
5. **Publish timing is parent-side.** Every hour the clip sits unpublished
   is lost view inventory in a 72-hour window. v3 was handed over on the
   morning of 20 Nov; if it goes up late, the rebuild should assume a
   shorter effective window.
6. **Dog is ~29% of frame height in the first ~0.5 s (v3 residual).**
   The dog grows to 36–37% from ~3 s on, but the opening half-second
   (camera still settling) measures ~550–560 px vs the review's 600 px bar.
   A tighter crop would cut the paws (they reach source x≈1310 at the
   start), so this was accepted, not forced. If the Shorts thumbnail
   underperforms, a rebuild could open on the settled side view (source
   ~5 s) where the dog is ~690 px from frame one — at the cost of 3 s of
   runtime and more loop repetition.
7. **The loop repeats the same 3 s twice under pitch + end card.** The seam
   at 10.5 s reads as a cut and the footage repeats; a viewer watching
   closely notices the same wave pattern twice. It is moving footage, not a
   freeze, and the text is on screen then — accepted for v3.
8. **Overhead camera swing at clip ~1.2–2.5 s.** The game camera swings
   overhead mid-hook: ~1.3 s of mostly water with the subjects at the
   bottom of the frame. Genuine camera movement, not a freeze, and the hook
   text carries it — but the hook's strongest frames are 0–1.2 s and
   2.5–3 s.
## Concrete rebuild ideas (in priority order)

1. **Rebuild A — Jynxzi apologizes to an alligator (candidate #2).**
   Source: Twitch clip https://clips.twitch.tv/FastBeautifulTigerBrokeBack-720YxwNhOm5O2f6r
   (also https://www.youtube.com/shorts/s2U7P4ESyUc). Streamer reaction +
   live alligator + stuck truck = jeopardy + facecam, a format the dog clip
   lacks. Vertical crop must keep BOTH the gator and Jynxzi's face in frame;
   test the crop on real frames before committing. Same hook/pitch
   structure: frame one is the gator next to the truck, overlay "HE SAID
   SORRY TO THE GATOR" (re-author the line in the rebuild session), pitch
   after ~0:12, same end card. Title: "GTA 6 — Jynxzi Apologizes to an
   Alligator". Use this if the dog clip stalls in the first 12–24 h.
2. **Rebuild B — tighter dog re-cut, opening on the settled side view.**
   Open at source ~5 s (dog ~690 px from frame one) instead of 2.0 s,
   ~10.5 s total. Only worth it if the v3 thumbnail/first-second retention
   underperforms — check the Shorts analytics (average view duration)
   first. v3 already tightened the cut from 16 s to 13.5 s and killed the
   freeze, so this is a thumbnail fix, not a length fix.
3. **Rebuild C — add a voice to the pitch.** Re-render v3 with a spoken
   pitch line over the end card ("My AI agent made this clip for a $500
   bounty on make.fun"), keeping the on-screen text. Only if a clean,
   non-robotic TTS voice can be run in-session.
4. **Rebuild D — the boot snake (candidate #3).** Jump scare in a car boot,
   very short (8–12 s total), pitch lands fast. Only if the original clip
   can be found and verified in-session; thin sourcing killed it for v1.
   Do NOT build on the "Grassrivers Space Program" flying-alligator claim
   — it is unverified (single low-trust source, quillberg.com) and was
   discarded for v1.
5. **Do NOT do:** a montage (kit forbids it, and it dilutes the hook);
   opening with the pitch (kills retention); buying/botting views (DQ);
   re-cutting someone else's finished Short (DQ — always cut from raw
   source footage in-session).

## How to rebuild

- Branch off the commit that submitted v3; keep commits granular.
- The rebuild session must be its own in-window session; it fetches its
  source footage, decides its creative, and runs its own ffmpeg commands
  (same transcript rules as v1).
- Each submission may name a new video (5/day, 10 total). The last
  submission before Mon 2026-11-23 08:00 WIB is the final entry.
