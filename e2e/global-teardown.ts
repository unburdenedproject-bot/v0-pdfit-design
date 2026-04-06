import { FullConfig } from "@playwright/test";
import { rmSync } from "fs";
import { FIXTURES_DIR } from "./helpers/paths";

async function globalTeardown(config: FullConfig) {
  if (process.env.CI) {
    try {
      rmSync(FIXTURES_DIR, { recursive: true, force: true });
    } catch {
      // Ignore if already cleaned
    }
  }
}

export default globalTeardown;
