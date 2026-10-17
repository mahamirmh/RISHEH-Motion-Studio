# Architecture and tool selection

## Core path

Creative brief → storyboard → reusable React scenes → Remotion render → media QA → MP4 delivery.

## Why not merge all 20 repositories as code?

The source list mixes skills, repositories, frameworks, and rendering utilities. Copying all of them creates duplicate abstractions, dependency conflicts, maintenance burden, and licensing risk. This starter consolidates the workflow and selects one default renderer.

## Tool roles

- **Remotion:** default renderer for frame-accurate, data-driven videos.
- **GSAP:** optional for complex timeline animation, especially DOM/SVG scenes.
- **Motion:** web and UI motion; use selectively to avoid overlapping animation systems.
- **Lottie:** playback of existing Lottie JSON animations, not a complete video renderer.
- **FFmpeg:** optional audio muxing, codec conversion, trimming, and media inspection.
- **HyperFrames:** evaluate as an alternative HTML-to-video path only after verifying its repository, APIs, license, and overlap with Remotion.
- **Claude Code skills:** workflow instructions, not render engines.
- **3D:** consider Blender for offline 3D rendering or Three.js for web-native 3D when the brief requires it.

## Delivery phases

1. Reliable 2D motion-video MVP with Remotion.
2. Reusable brand templates and vertical/square layouts.
3. Voiceover, captions, and licensed music pipeline.
4. Automated render QA and contact-sheet generation.
5. Optional 3D worker and queue-based rendering.
