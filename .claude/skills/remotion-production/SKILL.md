---
name: remotion-production
description: Create, edit, preview, and render frame-accurate videos using Remotion and React.
---

# Remotion Production

Use Remotion when the output benefits from typed React components, frame-accurate animation, parameterized compositions, or reusable data-driven scenes.

## Workflow
1. Read the brief and storyboard.
2. Read the current Remotion documentation or official skill when an API detail is uncertain.
3. Keep all animation deterministic from `useCurrentFrame()` and composition props.
4. Use `Sequence`, `interpolate`, and spring utilities intentionally; clamp interpolation at boundaries.
5. Register compositions in `src/Root.tsx` and make duration, FPS, width, and height explicit.
6. Use Remotion media components for audio/video where applicable.
7. Render a low-cost preview before the final export.
8. Validate the file with FFprobe when available and inspect representative frames.

## Rules
- Avoid `Date.now()`, unseeded randomness, and wall-clock timing in frame-rendered components.
- Keep render-time components free from unsupported browser APIs.
- Do not silently change frame rate or dimensions.
- Report the actual render command and output path.
