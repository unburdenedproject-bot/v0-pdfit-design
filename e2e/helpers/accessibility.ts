import { Page, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

/**
 * Run an axe accessibility audit on the current page.
 * Returns violations array. Excludes known third-party widgets.
 */
export async function runAxeAudit(
  page: Page,
  options?: { disableRules?: string[] }
) {
  let builder = new AxeBuilder({ page })
    .exclude("#hcaptcha-container") // hCaptcha iframe
    .exclude("iframe") // third-party iframes
    .withTags(["wcag2a", "wcag2aa"]); // WCAG AA

  if (options?.disableRules) {
    builder = builder.disableRules(options.disableRules);
  }

  const results = await builder.analyze();
  return results.violations;
}

/**
 * Assert zero critical/serious axe violations on the current page.
 */
export async function expectAccessible(
  page: Page,
  options?: { disableRules?: string[] }
) {
  const violations = await runAxeAudit(page, options);
  const critical = violations.filter(
    (v) => v.impact === "critical" || v.impact === "serious"
  );
  if (critical.length > 0) {
    const summary = critical
      .map((v) => `[${v.impact}] ${v.id}: ${v.description} (${v.nodes.length} nodes)`)
      .join("\n");
    expect(critical.length, `Accessibility violations:\n${summary}`).toBe(0);
  }
}
