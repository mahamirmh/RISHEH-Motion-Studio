import { spawnSync } from "node:child_process";
import { mkdirSync, existsSync } from "node:fs";

const projectDir = "videos/hyperframes-demo";
if (existsSync(projectDir)) {
  console.log(`HyperFrames workspace already exists at ${projectDir}; leaving it untouched.`);
  process.exit(0);
}
mkdirSync("videos", { recursive: true });
const command = process.platform === "win32" ? "npx.cmd" : "npx";
const result = spawnSync(command, [
  "--yes", "hyperframes@latest", "init", projectDir,
  "--non-interactive", "--example=blank", "--skill=motion-graphics"
], { stdio: "inherit" });
if (result.error) {
  console.error("Could not launch HyperFrames initializer:", result.error.message);
  process.exit(1);
}
if (result.status !== 0) {
  console.error("HyperFrames initialization failed. Check the installed CLI help and Node/Chrome/FFmpeg requirements.");
  process.exit(result.status ?? 1);
}
console.log(`Initialized isolated HyperFrames project at ${projectDir}`);
