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

  // Clean up integration test data
  const projectNames = config.projects.map((p) => p.name);
  const isIntegration =
    projectNames.includes("integration") ||
    projectNames.includes("integration-nightly");

  if (isIntegration && process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    try {
      const { cleanupTestData } = await import(
        "./integration/helpers/test-users"
      );
      await cleanupTestData();
      console.log("[integration] Cleaned up test data");
    } catch (err) {
      console.error("[integration] Cleanup error:", err);
    }
  }
}

export default globalTeardown;
