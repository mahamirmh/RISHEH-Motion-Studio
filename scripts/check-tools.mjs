import { spawnSync } from "node:child_process";

const checks = [
  ["node", ["--version"]],
  ["npm", ["--version"]],
  ["ffmpeg", ["-version"]],
  ["ffprobe", ["-version"]],
];
let missing = [];
for (const [command, args] of checks) {
  const result = spawnSync(command, args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
  if (result.error || result.status !== 0) {
    console.log(`MISSING/FAILED: ${command}`);
    missing.push(command);
  } else {
    const firstLine = (result.stdout || result.stderr || "").split("\n")[0].trim();
    console.log(`OK: ${command} — ${firstLine}`);
  }
}
if (missing.length) {
  console.log("\nSome tools are unavailable. Remotion may still work without FFmpeg preflight, but final media QA requires suitable media tools.");
  process.exitCode = 1;
} else {
  console.log("\nToolchain preflight passed.");
}
