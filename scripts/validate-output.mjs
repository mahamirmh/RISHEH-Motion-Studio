import { existsSync, statSync } from "node:fs";

const output = "out/risheh-motion-studio.mp4";
if (!existsSync(output)) {
  console.error(`Missing render: ${output}. Run npm run render first.`);
  process.exit(1);
}
const size = statSync(output).size;
if (size < 10_000) {
  console.error(`Render looks unexpectedly small (${size} bytes).`);
  process.exit(1);
}
console.log(`Render file exists (${size} bytes): ${output}`);
console.log("Basic file check passed. For full media validation, inspect with ffprobe/FFmpeg.");
