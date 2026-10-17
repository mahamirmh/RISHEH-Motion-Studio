---
name: motion-design-principles
description: Apply motion design fundamentals, timing, easing, composition, typography, color, and accessibility to any video or animated interface.
---

# Motion Design Principles

Apply these rules across Remotion, HTML/GSAP, Motion, and Lottie.

## Motion grammar
- Define the subject, action, and visual consequence before choosing an effect.
- Use anticipation, clear action, follow-through, and settling when they improve comprehension.
- Prefer a small, consistent easing vocabulary; avoid arbitrary easing per element.
- Use overshoot and spring motion only when the material and brand tone support it.
- Establish hierarchy: primary motion first, supporting motion second, decorative motion last.
- Preserve continuity across cuts through shared shape, direction, scale, color, or rhythm.

## Typography and composition
- Establish a clear type scale and line length. Animate words only when motion reinforces meaning.
- Use kerning, line breaks, and baseline alignment deliberately.
- Keep critical content inside safe margins for the target aspect ratio.
- Use contrast and restrained color; do not use gradients as a substitute for composition.
- For Persian/RTL, set direction and alignment explicitly and inspect rendered glyph shaping.

## Timing
- Use frames for deterministic video timelines; use seconds only at system boundaries.
- Hold key messages long enough to read.
- Avoid simultaneous entrances for every element.
- Sync impactful cuts to measured beats only when music exists and the sync serves the story.
- Respect `prefers-reduced-motion` for interactive web experiences.

## Accessibility and performance
- Do not communicate meaning through motion or color alone.
- Avoid rapid flashing and disorienting camera motion.
- Prefer transform and opacity for web animation; profile layout-heavy animation.
- Check mobile readability, reduced-motion behavior, and contrast.
