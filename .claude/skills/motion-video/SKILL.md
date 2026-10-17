---
name: motion-video
description: Plan, implement, render, and quality-check short product videos and motion graphics in RISHEH Motion Studio.
---

# Motion Video Skill

Use this workflow whenever asked to create or edit a video in this repository.

## 1. Understand the brief
Extract:
- audience and objective
- approved product/service facts
- platform and aspect ratio
- duration and frame rate
- language and tone
- CTA and delivery format
- available assets and usage rights
- audio and caption requirements

If a critical field is missing, record a reasonable assumption in the storyboard rather than inventing facts.

## 2. Plan before coding
Create or update `brief/storyboard.md` with:
| Scene | Duration | Message | Visual | Motion | Audio |
Include total duration, FPS, and aspect ratio. Make the opening legible quickly and ensure each scene advances one clear idea.

## 3. Build
- Register compositions in `src/Root.tsx`.
- Put each reusable scene in `src/scenes/`.
- Put brand tokens in `src/theme.ts`.
- Prefer deterministic, frame-based animation.
- Use GSAP only for complex sequencing where it adds value.
- Use Motion for web/interface motion; do not mix animation systems unnecessarily.
- Use Lottie only for an existing suitable animation asset.
- Respect text safe areas and mobile readability.
- For Persian, set direction and alignment explicitly and verify the selected font is available in the render environment.

## 4. Render and review
Run:
```bash
npm run studio
npm run render
npm run validate
```
If rendering fails, report the actual error and fix it before claiming success. If visual inspection or audio playback is unavailable, say so.

## 5. Final response
Summarize:
- output file path
- duration, dimensions, FPS
- assets used
- validation performed
- remaining limitations
