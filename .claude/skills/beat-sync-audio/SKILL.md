---
name: beat-sync-audio
description: Plan narration, music, sound effects, beat maps, and frame-accurate audio synchronization for motion videos.
---

# Beat Sync & Audio

- Identify audio source, license, duration, sample rate, and permitted usage.
- Do not download, synthesize, or use copyrighted music without rights.
- If a music file is provided, analyze it using available tools; never invent BPM or beat timestamps.
- Store beat events in a machine-readable timeline such as `brief/beat-map.json`, with event name, time in seconds, frame index, and confidence/source.
- Convert seconds to frames using the composition FPS and a documented rounding rule.
- Place cuts and motion accents on beats only when it improves the creative result.
- Align narration to the supplied transcript or measured speech timing. Avoid claiming word-level sync without a transcript or alignment data.
- Keep dialogue intelligible above music; use measured loudness/peak analysis when FFmpeg is available.
- Check for clipping, abrupt audio starts/ends, unwanted silence, and sync drift.
- If there is no audio, do not create fake audio metadata or imply audio QA was performed.
