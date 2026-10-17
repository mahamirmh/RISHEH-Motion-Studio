---
name: motion-quality-gate
description: Review motion video source and output for technical validity, visual defects, audio issues, accessibility, and factual integrity.
---

# Motion Quality Gate

## Source checks
- Confirm all referenced assets exist.
- Confirm composition duration, FPS, and dimensions are explicit.
- Check text overflow, unsupported fonts, external network dependencies, and unlicensed assets.
- Ensure animations are deterministic where frame-accurate rendering is required.

## Media checks
When tools are installed, use FFprobe to inspect codec, dimensions, frame rate, duration, audio streams, and file size. Extract a contact sheet or representative frames for visual inspection. Listen to the audio if audio is present.

## Review checklist
- Black frames, missing assets, flicker, accidental crop, clipping, unreadable copy
- Pacing, transitions, contrast, safe margins, CTA hold
- Audio sync, clipping, silence, loudness (if applicable)
- Persian shaping/RTL (if applicable)
- Factual accuracy and rights

## Honest reporting
Separate checks that were executed from checks that are only planned. A file-exists test is not full media QA. Never report a render as visually approved without examining its frames.
