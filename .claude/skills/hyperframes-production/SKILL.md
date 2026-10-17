---
name: hyperframes-production
description: Build HTML, CSS, SVG, Canvas, and GSAP motion compositions and render them to video using HyperFrames.
---

# HyperFrames Production

Choose HyperFrames for HTML-native motion graphics, kinetic typography, SVG/Canvas compositions, and workflows that benefit from a browser-based scene source. Treat it as a separate rendering backend from Remotion, not a library to mix into the same composition.

## Safe workflow
1. Read current official HyperFrames docs and run `npx hyperframes doctor` when available.
2. Create an isolated project under `videos/<project-name>/`; never initialize over the repository root.
3. Use the official initializer and the current CLI options shown by `npx hyperframes init --help`.
4. Keep project-specific HTML, assets, configuration, and output inside that project directory.
5. Prefer deterministic GSAP timelines that can be seeked to an exact timestamp.
6. Use the project's supported lint/check/snapshot/render commands, discovered from its generated package scripts or CLI help.
7. Inspect snapshots and validate final media with FFprobe/FFmpeg when installed.

## Boundaries
- Do not assume Remotion composition files are directly renderable by HyperFrames.
- Do not overwrite the Remotion root project or shared package configuration.
- If CLI/API options differ from these instructions, trust the installed version's help and report the discrepancy.
