import { defineConfig, devices } from "@playwright/test";

const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3000";
const isCI = !!process.env.CI;

export default defineConfig({
  testDir: "./e2e/tests",
  fullyParallel: true,
  globalSetup: "./e2e/global-setup.ts",
  globalTeardown: "./e2e/global-teardown.ts",
  timeout: 60_000,
  expect: { timeout: 10_000 },
  retries: isCI ? 2 : 0,
  workers: isCI ? 4 : 1,
  reporter: isCI ? [["html"], ["github"]] : [["html"]],
  use: {
    baseURL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    actionTimeout: 15_000,
  },
  projects: [
    {
      name: "desktop-chrome",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "integration",
      testDir: "./e2e/integration",
      testIgnore: "**/nightly/**",
      retries: isCI ? 1 : 0,
      workers: isCI ? 2 : 1,
      use: {
        baseURL,
        extraHTTPHeaders: {
          Accept: "application/json",
        },
      },
    },
    {
      name: "integration-nightly",
      testDir: "./e2e/integration/nightly",
      retries: 0,
      workers: 1,
      use: {
        baseURL,
      },
    },
  ],
  webServer: {
    command: isCI ? "pnpm build && pnpm start" : "pnpm dev",
    url: "http://localhost:3000",
    reuseExistingServer: !isCI,
    timeout: isCI ? 180_000 : 120_000,
    env: {
      MOCK_EXTERNAL_APIS: "true",
      NEXT_PUBLIC_HCAPTCHA_SITE_KEY: "10000000-ffff-ffff-ffff-000000000001",
      HCAPTCHA_SECRET_KEY: "0x0000000000000000000000000000000000000000",
    },
  },
});
