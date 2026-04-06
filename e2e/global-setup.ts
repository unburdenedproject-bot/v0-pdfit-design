import { FullConfig } from "@playwright/test";
import { generateFixtures } from "./fixtures/generate-pdfs";

async function globalSetup(config: FullConfig) {
  await generateFixtures();

  // Provision integration test users when running the integration project
  const projectNames = config.projects.map((p) => p.name);
  const isIntegration =
    projectNames.includes("integration") ||
    projectNames.includes("integration-nightly");

  if (isIntegration && process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    try {
      const { provisionTestUsers } = await import(
        "./integration/helpers/test-users"
      );
      const users = await provisionTestUsers();
      console.log(
        `[integration] Provisioned ${Object.keys(users).length} test users`
      );
    } catch (err) {
      console.error("[integration] Failed to provision test users:", err);
      // Don't fail setup — tests will fail individually with clear errors
    }
  }
}

export default globalSetup;
