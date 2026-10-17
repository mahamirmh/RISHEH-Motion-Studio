---
name: web-motion
description: Build performant, accessible interactive web animations using Motion and GSAP.
---

# Web Motion

Use this skill for website UI animation, not for frame-by-frame MP4 rendering unless paired with a video renderer.

- Use Motion for React/interface transitions and gesture-driven animation.
- Use GSAP for complex timelines, SVG choreography, or tightly sequenced DOM animation.
- Avoid running multiple animation libraries over the same element.
- Prefer transform and opacity; measure performance before optimizing prematurely.
- Honor `prefers-reduced-motion` and provide a usable non-animated state.
- Ensure keyboard and screen-reader interactions do not depend on animation.
- Clean up subscriptions, observers, and animation contexts.
- Do not rely on scroll position or wall-clock time for deterministic video frames.
