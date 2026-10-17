# RISHEH Motion Studio — AI agent instructions

Applies to Codex, Cursor, Copilot and other coding agents. Claude Code should also read `CLAUDE.md`.

## Read first
1. `docs/AI-USAGE-GUIDE.fa.md` — Persian operator guide, examples, integration status.
2. `CLAUDE.md` — production standards and project skills.
3. `brief/creative-brief.md` — user-provided product facts and assets.
4. `docs/source-integration-matrix.json` and `docs/integration-policy.md` — third-party source roles and license policy.

## Mandatory working method
- Start from the brief. Ask for missing factual claims or assets; never invent them.
- Write a timed storyboard to `brief/storyboard.md` before implementation.
- Prefer existing React/Remotion components; Remotion is the default MP4 renderer.
- Use the relevant original local skill from `.claude/skills/<name>/SKILL.md` when helpful.
- Do not treat the 20 source entries as vendored/installed upstream repositories.
- Keep HyperFrames isolated from the Remotion project. Do not introduce duplicate animation engines without justification.
- Respect RTL shaping and licensing for Persian fonts, music, and customer assets.
- Do not leak secrets, change deployment settings, or install external code without checking necessity, version and license.

## Commands
```bash
npm install
npm run check:tools
npm run typecheck
npm run studio
npm run render
npm run validate
```

Run only commands supported by the actual environment. Do not report tests as passed if they did not run.

## Deliverable report
Provide: changed files, storyboard, composition ID, duration/FPS/resolution, output MP4 path (if rendered), commands actually executed, QA findings, and outstanding limitations.
