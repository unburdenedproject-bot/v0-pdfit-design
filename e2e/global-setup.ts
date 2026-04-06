import { FullConfig } from "@playwright/test";
import { generateFixtures } from "./fixtures/generate-pdfs";

async function globalSetup(config: FullConfig) {
  await generateFixtures();
}

export default globalSetup;
