import { existsSync, statSync } from "node:fs";
import { spawnSync } from "node:child_process";

const output = process.env.VIDEO_OUTPUT ?? "out/risheh-motion-studio.mp4";
if (!existsSync(output)) {
  console.error(`Missing render: ${output}. Run npm run render first.`);
  process.exit(1);
}

const size = statSync(output).size;
if (size < 10_000) {
  console.error(`Render looks unexpectedly small (${size} bytes).`);
  process.exit(1);
}
console.log(`OK: output exists (${size} bytes): ${output}`);

const probe = spawnSync("ffprobe", [
  "-v", "error",
  "-show_entries", "format=duration,format_name:stream=codec_type,codec_name,width,height,r_frame_rate",
  "-of", "json",
  output
], { encoding: "utf8" });

if (probe.error || probe.status !== 0) {
  console.warn("FFprobe unavailable or failed; only the basic file check passed.");
  console.warn("Install FFmpeg/FFprobe and rerun npm run validate for media metadata checks.");
  process.exit(0);
}

let metadata;
try {
  metadata = JSON.parse(probe.stdout);
} catch {
  console.error("FFprobe returned invalid JSON.");
  process.exit(1);
}

const video = (metadata.streams ?? []).find((stream) => stream.codec_type === "video");
if (!video) {
  console.error("No video stream found in output.");
  process.exit(1);
}
const duration = Number(metadata.format?.duration);
if (!Number.isFinite(duration) || duration <= 0) {
  console.error("Invalid or missing media duration.");
  process.exit(1);
}
console.log(`Video: ${video.codec_name ?? "unknown"} ${video.width}x${video.height} @ ${video.r_frame_rate ?? "unknown"}`);
console.log(`Duration: ${duration.toFixed(2)}s; container: ${metadata.format?.format_name ?? "unknown"}`);
console.log("Technical metadata checks passed. Visual inspection and audio listening are still required.");
