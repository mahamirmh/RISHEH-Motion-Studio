---
name: lottie-assets
description: Integrate existing Lottie JSON animations into web experiences and motion projects with graceful fallback.
---

# Lottie Assets

Lottie is an asset playback path, not a general-purpose MP4 renderer.

1. Confirm a valid Lottie JSON file exists and its license permits the intended use.
2. Check dimensions, frame rate, duration, external image dependencies, and unsupported features.
3. Use the Lottie player only where the target runtime supports it.
4. Provide a poster/static fallback when animation cannot load.
5. Respect reduced-motion preferences for interface playback.
6. For a final video, capture or reproduce the animation through a supported deterministic renderer; do not assume the web player alone creates an MP4.
7. Verify asset loading and playback in the actual target environment.
