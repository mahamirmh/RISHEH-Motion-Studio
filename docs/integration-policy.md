# Source integration policy

The original list mixes full engines, JavaScript libraries, agent skills, teaching kits, and discovery lists. "Install all 20" must not mean importing every repository into one runtime.

## Integrated capability groups

- **Direction and craft:** local motion-director and motion-design-principles skills.
- **Launch and social video:** product-launch-film and motion-graphics-shortform.
- **Renderer A:** Remotion for React-native, frame-accurate compositions.
- **Renderer B:** HyperFrames as an isolated HTML/GSAP/SVG/Canvas project.
- **Web UI motion:** Motion and GSAP.
- **Vector animation playback:** Lottie Web.
- **Audio and quality:** beat-sync-audio and motion-quality-gate.

## Why sources are not all copied verbatim

- Libraries belong in package dependencies, not duplicated source folders.
- Skill instructions may be licensed differently from their associated source code.
- Sample projects can contain external asset downloads, API keys, or provider-specific setup.
- Multiple renderers should remain separate backends because their project formats and render pipelines are not interchangeable.
- Discovery lists are references, not installable packages.
- Two short links in the original list have not been resolved to a canonical repository; they remain explicitly marked in `source-integration-matrix.json`.

## Direct upstream imports

Before importing a third-party skill or code:
1. Verify the canonical repository and current revision.
2. Read its license and any asset licenses.
3. Check runtime requirements and API compatibility.
4. Import only the skill/package needed; avoid copying sample assets without rights.
5. Record the source URL and version in the integration matrix.
6. Run install, typecheck, render smoke test, and media QA.

## Commercial licensing

Review the current terms of every renderer and dependency. Remotion's company licensing may affect commercial production. HyperFrames is a separate engine and is not a drop-in Remotion replacement. External image, voice, and music services may have separate usage terms.
