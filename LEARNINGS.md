# Project Learnings

## 2026-04-09 — Never enable async job queue without end-to-end testing

**What:** The `ASYNC_ENABLED_TOOLS` set in `processing-interface.tsx` was populated with 19 tools, routing them through the async job queue (create job → poll → cron processes). This caused infinite spinners because: (1) the cron only runs every minute, (2) the fire-and-forget trigger to `/api/jobs/process` requires `CRON_SECRET` auth which may fail silently, (3) polling resets progress to 0% when the job is still "pending", (4) some tool name slugs don't match API route names.
**Why it matters:** The async queue added 3 failure points (job creation, processing trigger, polling) to what was a simple direct API call. The sync path works reliably for all tools. The tester reported "Loading forever" on every tool.
**Apply when:** `ASYNC_ENABLED_TOOLS` is empty and must stay empty until the job queue is battle-tested with real traffic. The sync path is the production path.

## 2026-04-09 — Blank PDF check catch blocks must never reject valid files

**What:** 20 API routes had `try { isBlankPdf() } catch { return error("empty or unreadable") }`. If `pdfjs-dist` throws for ANY reason (module loading, memory, PDF parsing quirk), the catch block rejects the file. Valid PDFs were being rejected as "empty."
**Why it matters:** The blank check is a cost optimization, not a hard requirement. If it fails, let iLoveAPI handle the file — it will reject truly bad files on its end.
**Apply when:** The catch block must log and continue, never reject. This is now fixed in all 20 routes.

## 2026-04-09 — Webhook idempotency record must be inserted AFTER processing

**What:** Moving the `webhook_events` insert to before processing seemed safer (prevents duplicate handling). But if the insert succeeds and processing fails (DB error → 500), Stripe retries the event and finds the existing record → skips processing. The user's plan is never updated.
**Why it matters:** A user who paid could be permanently stuck on the free plan with no way for Stripe to fix it. The idempotency check is a read-only guard; the insert must happen after success.
**Apply when:** Any webhook idempotency pattern. Read the guard first, process, then write the record.

## 2026-04-09 — Stripe partial refunds fire charge.refunded too

**What:** `charge.refunded` fires on ANY refund including partial refunds (e.g., proration credits from upgrading plans). The original handler downgraded the user on every refund event — even $2 partial refunds on $13.99 subscriptions.
**Why it matters:** Users who upgrade mid-cycle get a partial refund from Stripe. The handler was nuking their plan AND giving money back.
**Apply when:** Always check `charge.amount_refunded >= charge.amount_captured` before downgrading on refund. Partial refunds should be ignored.

## 2026-04-09 — Anonymous cookie must be set server-side, not returned for routes to set

**What:** `checkUsageAndAuth()` returned an `anonCookie` object for routes to manually attach to their responses. But async paths (return early with jobId), error paths (return error response), and routes using `Response.json()` (not NextResponse) never set the cookie. The counter never incremented.
**Why it matters:** Anonymous users got unlimited free conversions because the cookie was never written.
**Apply when:** The cookie is now set directly inside `checkUsageAndAuth()` via `cookieStore.set()`. Routes no longer need to handle it. The old `anonCookie` references in routes are dead code (harmless).

## 2026-04-07 — Webhook must return 500 on DB failure, not 200

**What:** The Stripe webhook was returning 200 OK even when the Supabase plan update failed. This meant Stripe thought the webhook succeeded and wouldn't retry. Users who paid during a Supabase blip were charged but stayed on the free plan.
**Why it matters:** Stripe retries webhooks that return 500 (up to 5 times over 24 hours). Returning 200 on failure means the payment is lost forever — the user paid but never got upgraded. This is a revenue-critical bug.
**Apply when:** Any webhook handler that updates a database. Always return 500 if the DB write fails, so the sender retries.

## 2026-04-07 — CRON_SECRET with `&&` check allows bypass when empty

**What:** The pattern `if (CRON_SECRET && authHeader !== Bearer ${CRON_SECRET})` skips auth when CRON_SECRET is falsy (empty string, undefined). In dev/staging where the env var isn't set, anyone can trigger the cron.
**Why it matters:** Cron endpoints can send mass emails, modify database state, or fetch external APIs. An unauthenticated trigger is a security hole.
**Apply when:** Any endpoint protected by a secret. Use `if (!SECRET || authHeader !== ...)` — fail if secret is missing, don't skip the check.

## 2026-04-07 — Streaming prevents OOM on serverless (Buffer.from vs pipeline)

**What:** Every API route was doing `Buffer.from(await res.arrayBuffer())` — loading the entire file into memory before writing to /tmp. At 50 concurrent users with 25MB files, this consumed 2.5GB+ (exceeding Vercel Pro's 3GB limit). Replaced with `Readable.fromWeb(res.body)` piped through `pipeline()` to `createWriteStream()`.
**Why it matters:** Streaming uses ~1MB of memory per concurrent download regardless of file size. The old approach used 2× the file size (response buffer + write buffer).
**Apply when:** Any serverless function that processes user-uploaded files. Never hold the entire file in a Buffer — stream it to disk.

## 2026-04-07 — Blob URL validation prevents SSRF and cross-user access

**What:** API routes accepted any URL in the `blobUrl` request field. An attacker could pass internal URLs (SSRF) or another user's blob URL (data theft). Added validation requiring URLs to have `https://` scheme and `.vercel-storage.com` hostname.
**Why it matters:** Without validation, every PDF processing endpoint is an open SSRF proxy. The validation is cheap (string check) and blocks the entire attack class.
**Apply when:** Any endpoint that fetches a URL from user input. Validate the domain before fetching.

## 2026-04-06 — @sentry/nextjs crashes webpack on Node.js v24

**What:** Installing `@sentry/nextjs` caused `WasmHash` crashes during `pnpm build` on Node.js v24.14.0. The crash occurs in webpack's hashing module, triggered by Sentry's `@opentelemetry` instrumentation. Removing the package, config files, and instrumentation.ts still crashed because the package was in `pnpm-lock.yaml` as a transitive dep. Only fully removing `@sentry/nextjs` from `package.json` fixed it.
**Why it matters:** Vercel uses Node.js 20 where Sentry works fine. But local builds on Node.js v24 (bleeding edge) crash. The Sentry DSN is still configured on Vercel and captures errors in production. The package can be re-added when Sentry releases Node 24 support.
**Apply when:** Before adding any npm package that uses `@opentelemetry` or native instrumentation hooks. Test the build locally first. If it crashes with WasmHash errors, check the Node.js version.

## 2026-04-06 — Conflicting Tailwind text color classes cause accessibility failures

**What:** The Dashboard button had both `text-[#0E0F1E]` and `text-white` in its className. Tailwind applies the last utility, so `text-white` won. White text on teal (#14D8C4) background has a contrast ratio of 2.9:1 — failing WCAG AA (minimum 4.5:1). Lighthouse flagged it as an accessibility issue.
**Why it matters:** When replacing colors in bulk (orange → teal), the original classes had `text-white` which was correct for orange (white on orange = 4.6:1 ratio). After changing to teal background, `text-white` became incorrect but was left alongside the new `text-[#0E0F1E]`. The conflicting classes silently degraded accessibility.
**Apply when:** After any bulk color replacement, check for conflicting text-color classes. Search for patterns like `text-[#0E0F1E].*text-white` or `text-white.*text-[#0E0F1E]` — the last class wins in Tailwind.

## 2026-04-06 — Bulk find-and-replace on 437 files works but needs a cleanup pass

**What:** Replacing all `orange-500` → `text-[#14D8C4]` across 437 files with sed was fast (~2 seconds) but missed edge cases: `focus:ring-orange-500`, `from-orange-50 to-amber-50`, `border-orange-500` in conditional expressions. Three cleanup passes were needed to reach zero remaining.
**Why it matters:** Bulk sed replacements handle 95% of cases perfectly. The remaining 5% are context-specific patterns that need a second pass. Always run `grep -r "orange" --include="*.tsx"` after the bulk replace to catch stragglers.
**Apply when:** Any large-scale class rename. Do the bulk pass first, then grep for survivors, then fix manually.

## 2026-04-05 — Playwright tier-gating tests need page.route() BEFORE page.goto()

**What:** Tool components like EsignInterface and UrlPdfInterface fetch `/api/user-plan` in a `useEffect` during client-side hydration. If `mockUserPlan()` is called after `page.goto()`, the real fetch fires first and the component renders the upgrade gate. The mock only intercepts subsequent requests.
**Why it matters:** Tests that mock after navigation appear to work locally (slower page load gives time for mock to register) but fail in CI (faster load means the real fetch wins the race). Setting up the mock before navigation guarantees the intercept is ready.
**Apply when:** Any Playwright test that mocks an API response for a client-side component. Always call `page.route()` before `page.goto()`.

## 2026-04-05 — Silent-pass pattern: conditional assertions inside .toPass() are dangerous

**What:** A split-pdf test wrapped `if (await element.isVisible()) { await element.fill("1") }` inside `.toPass()`. When the element never appeared, all conditionals were skipped, zero assertions ran, and the test passed — giving false confidence.
**Why it matters:** `.toPass()` retries the entire block until it succeeds or times out. If all assertions are behind `if` guards, "success" means "nothing was checked." This is the most dangerous test anti-pattern because it looks green while testing nothing.
**Apply when:** Writing any test with `.toPass()`. Every code path inside the retry block must have at least one unconditional `expect()`. If an element might not exist, use `expect(element).toBeVisible()` as the first line — it will fail fast rather than silently skip.

## 2026-04-05 — HTML minLength attribute prevents form submission before JS validation

**What:** The reset-password page has `minLength={8}` on the password input. When testing "short password shows error," the browser's native validation fires first (tooltip: "Please lengthen to 8 characters") and prevents the form from submitting. The JS validation (`password.length < 8 → setError(...)`) never runs because `handleReset` is never called.
**Why it matters:** Testing client-side validation messages requires that the form actually submits. HTML attributes like `required`, `minLength`, `type="email"` create a validation layer that runs before any JS. Playwright can't easily detect or interact with native browser validation tooltips.
**Apply when:** Testing form validation in Playwright. If the form has HTML validation attributes, test the attribute exists (`getAttribute("minlength")`) rather than trying to trigger the JS error message. Or use `page.evaluate(() => form.noValidate = true)` to bypass native validation.

## 2026-04-05 — networkidle is flaky with analytics scripts

**What:** Using `waitForLoadState("networkidle")` in accessibility tests caused intermittent timeouts. GTM and GA4 fire tracking beacons that can take 2-3 seconds or retry, resetting the 500ms idle timer. In CI with cold DNS, this is worse.
**Why it matters:** "networkidle" sounds safe but it's the most common source of Playwright flakiness. It waits for zero in-flight requests for 500ms — any late analytics beacon restarts the timer.
**Apply when:** Never use `networkidle` as a page-ready signal. Instead, wait for a specific visible element that indicates the page content is rendered (e.g., `page.locator("main").waitFor()`).

## 2026-04-05 — This project uses pnpm, not npm

**What:** Running `npm install` to add packages (pdf-parse, pdfjs-dist, @napi-rs/canvas) updated `package-lock.json` but not `pnpm-lock.yaml`. Vercel builds with pnpm using frozen lockfile, so every build after the first `npm install` silently failed. Vercel served cached old deployments — making it look like code changes had no effect.
**Why it matters:** Multiple commits appeared to deploy successfully (git push worked, no errors) but the actual Vercel function code never changed. Wasted significant debugging time on blank PDF detection that was actually working in code but never deployed.
**Apply when:** Always check for `pnpm-lock.yaml` before installing packages. If it exists, use `pnpm install` / `pnpm add` exclusively. Never use `npm install`.

## 2026-04-05 — Native Node.js packages don't work on Vercel serverless

**What:** Attempted to use `@napi-rs/canvas` for PDF page rasterization on Vercel. The package requires pre-built native binaries which either weren't bundled by Vercel's function bundler or failed to load at runtime. The entire serverless function silently failed.
**Why it matters:** Vercel serverless functions run on Amazon Linux with limited system libraries. Packages that require native compilation (canvas, sharp is an exception — it ships its own), native binaries, or system-level deps (poppler, ghostscript, imagemagick) won't work without explicit configuration.
**Apply when:** Before adding any package with native deps to a Vercel-deployed project, verify it works on serverless. Prefer pure-JS alternatives. If native deps are needed, add them to `serverComponentsExternalPackages` in `next.config.mjs`.

## 2026-04-05 — Blank PDF detection requires pdfjs-dist operator list, not PDF structure

**What:** Tried 6 approaches to detect blank PDFs: global threshold, %PDF header, raw content stream operators, Font/XObject resources, pdf-parse text extraction, canvas rasterization. All failed because PDF generators (Word, Print to PDF) embed default fonts, resources, and setup operators even on blank pages.
**Why it matters:** A PDF can be structurally non-empty but visually blank. The only reliable pure-JS approach is using pdfjs-dist's `getOperatorList()` which returns the actual parsed, decompressed rendering operations — checking for `showText`, `showSpacedText`, `paintImageXObject`, etc. This handles compressed streams, inherited resources, and form XObjects correctly.
**Apply when:** Any time you need to validate PDF content before sending to a paid API. Use `lib/blank-pdf-check.js`.

## 2026-04-05 — Apply fixes to ALL affected routes, not just the reported one

**What:** Blank PDF detection was initially only added to `compress-pdf/route.js`. When the same issue was reported for extract-images, it became clear all 20+ paid API routes needed the same protection. Created a shared utility (`lib/blank-pdf-check.js`) and applied it to all routes at once.
**Why it matters:** When a bug exists in one route, it almost certainly exists in all similar routes. Fix them all at once to avoid repeated bug reports for the same underlying issue.
**Apply when:** Any bug fix that touches API route validation, error handling, or input checking — check all similar routes and fix them together.

## 2026-03-25 — Canonical page format doc eliminates repeated instructions

**What:** Created `Page_Format.md` as the single source of truth for tool page structure (section order, exact JSX snippets, inline styles, color tokens, localization rules). Referenced it in `CLAUDE.md` under both Strategy Documents and Rules.
**Why it matters:** Paula was specifying the same design requirements every session and every tool page. Without a canonical doc, each session drifted slightly (e.g., some pages got frosted glass intro pills, others got plain `✓` lists; some had dark feature cards, others had light `bg-gray-50`). The doc locks down the pattern so any model in any session produces identical output.
**Apply when:** Creating or editing any tool page. Read `Page_Format.md` first — every time, no exceptions.

## 2026-03-25 — ES/BR pages diverge silently from EN

**What:** The ES and BR versions of `/pdf-to-excel` had a "Pro" badge in the hero, different feature section content, and an old vertical How To layout — while EN had none of those. This divergence wasn't obvious until all three files were read side-by-side.
**Why it matters:** When pages are built at different times or by different sessions, structural drift accumulates. The fix is always a full rewrite to unify, which is more work than getting it right the first time.
**Apply when:** Before editing any tool page, read all 3 language versions first. If they differ structurally, unify them as part of the edit — don't just patch one language.

## 2026-03-25 — CLAUDE.md is the auto-loaded contract

**What:** Adding rules to `CLAUDE.md` ensures they're loaded into every conversation automatically. Adding them to standalone docs (like `Page_Format.md`) only works if something tells the model to read that doc.
**Why it matters:** A rule that isn't in `CLAUDE.md` is a rule that gets forgotten. The fix is: put the pointer in `CLAUDE.md`, put the detail in the standalone doc.
**Apply when:** Any time a new project-wide rule or reference doc is created, add a pointer to it in `CLAUDE.md` Rules or Strategy Documents.

## 2026-03-25 — Do tool page rewrites yourself, not via agents

**What:** When 7 agents were launched in parallel to rewrite tool pages, several produced output that didn't match the canonical format — wrong intro style, missing classes, inconsistent FAQ headings. Paula caught the drift on the live site and was frustrated. Doing pages one at a time manually produced pixel-perfect results every time.
**Why it matters:** Agents interpret instructions loosely. For visually precise work where every class and inline style must match exactly, manual rewrites are faster and more reliable than delegating to agents — even with detailed prompts. Agents are fine for simple mechanical edits (moving a `<Script>` tag, adding a prop) but not for full page rewrites where structure must be identical.
**Apply when:** Any task where visual/structural precision matters across multiple files. Do it yourself, one page at a time. Use agents only for truly mechanical changes (find-replace, prop additions, schema moves).

## 2026-03-25 — Use requiresPlan prop for shared component gating

**What:** `ProcessingInterface` is shared across free and paid tools. Instead of adding pre-gate logic to each page file, a `requiresPlan` prop was added to the component. Pages pass `requiresPlan="pro"` (or `"business"` / `"enterprise"`) and the component handles the tier check internally. Free tools omit the prop entirely.
**Why it matters:** This avoids duplicating plan-detection code across 18+ page files and keeps the gating logic centralized. It also supports all 3 tiers with automatic color theming (gold/sapphire/platinum).
**Apply when:** Any time a shared component needs to behave differently based on user tier. Add an optional prop to the component rather than gating in each page.

## 2026-03-25 — Three-tier visual identity for upgrade cards

**What:** Upgrade/pre-gate cards now have distinct visual identities per tier: Pro = champagne gold (#E0C27A, "Most Popular"), Business = sapphire blue (#6B7CFF, "Business Feature"), Enterprise = platinum (#C0C5CE) + teal ("Enterprise Feature"). All share the same dark glassmorphism structure but with tier-specific accent colors on the crown icon, badge, glow, and border gradient.
**Why it matters:** Paula wanted each tier to feel premium and distinct. The gold started too heavy (full gold border takeover) and had to be dialed back to a subtle smear. The lesson: start subtle, add impact with one or two focal points (badge + icon glow), not by coloring everything.
**Apply when:** Designing tier-differentiated UI. Keep the structural shell identical; vary only accent colors on 3-4 elements (icon, badge, glow, one border gradient stop). Never take over the entire card with one color.

## 2026-03-26 — Tier assignments must be verified against the homepage, not just CLAUDE.md

**What:** CLAUDE.md listed workflow-automation and table-extraction as Enterprise tools, but the homepage features-grid showed them as Business. The user corrected me multiple times as I flip-flopped between tiers. The homepage is the source of truth for what customers see — CLAUDE.md may be outdated.
**Why it matters:** Inconsistent tier labeling across the site confuses users and damages trust. When in doubt, check the homepage features-grid AND ask the user before making tier changes.
**Apply when:** Any time you're changing tier assignments, gate cards, or pricing labels. Always verify against the homepage features-grid (all 3 language versions) and confirm with the user if there's any ambiguity.

## 2026-03-26 — CSS background shorthand: base color must come LAST

**What:** Writing `background: #0E0F1E radial-gradient(...)` is invalid CSS. The solid color fallback must come after all gradient layers, separated by commas: `background: radial-gradient(...), radial-gradient(...), #0E0F1E`. The broken syntax was deployed to production and the login page showed a white background.
**Why it matters:** This is a silent failure — no build error, no console error. The browser just ignores the entire property. Always put the base color as the last value in a multi-layer background.
**Apply when:** Any time you write inline `background` styles with gradients + a solid fallback color. Pattern: `radial-gradient(...), radial-gradient(...), #baseColor`.

## 2026-03-26 — Verify closing tags after surgical edits to JSX

**What:** After replacing the pricing card sections with new JSX, two cards were missing closing `</div>` tags. This caused a build failure on Vercel. The error message ("Unexpected token `div` at line 24") pointed at the return statement, not the actual missing tag — making it hard to diagnose.
**Why it matters:** JSX edit tools replace exact string matches. If the old and new strings have different nesting depths, you silently lose closing tags. Always count opening/closing tags after a large JSX replacement.
**Apply when:** After any Edit that replaces multi-line JSX blocks with different nesting structure. Read the surrounding 10 lines after the edit to verify tag balance.

## 2026-03-26 — Enterprise badge needs a distinct color, not platinum gray

**What:** The Enterprise tier badge used platinum gray (`#C0C5CE`), which was nearly identical to the Free tier gray (`#94A3B8`) on dark backgrounds. The user couldn't tell them apart. Changed Enterprise to sky blue (`#38BDF8`) for clear differentiation.
**Why it matters:** Tier colors must be visually distinct at a glance. Gray-on-gray doesn't work even when the hex values differ. The gate cards can keep platinum for the Crown/glow (seen in isolation), but badges seen side-by-side with other tiers need higher contrast.
**Apply when:** Choosing tier badge colors for contexts where all tiers appear together (homepage grid, tools-a-z, about page, pricing page). Use: Free=gray, Pro=gold, Business=sapphire, Enterprise=sky blue.

## 2026-03-26 — Use props to differentiate shared components across tiers

**What:** `TableExtractionInterface` serves both `/table-extraction` (Business) and `/high-volume-table-extraction` (Enterprise). An `enterpriseMode` prop controls which gate card renders and which tier is checked. This avoided duplicating the entire component.
**Why it matters:** Creating separate components for each tier leads to code drift. A prop-based approach keeps the tool logic unified while allowing visual and access-control differences.
**Apply when:** A single tool component needs to serve different tier pages. Add an optional mode/tier prop rather than forking the component.

## 2026-03-26 — Deploy after every task, don't batch

**What:** The user explicitly asked to deploy after each completed task rather than batching changes. This caught CSS bugs and tier mismatches early on the live site instead of accumulating silent errors.
**Why it matters:** Paula reviews changes on the live site, not in code. Batching hides problems behind later commits. Small, frequent deploys let her verify each change immediately.
**Apply when:** Always. When the user says "deploy" or when a task is complete, commit and push immediately. Don't wait to batch with the next task.

## 2026-03-26 → 2026-04-09 — Sitemap: use explicit route handler, NOT Next.js convention

**What:** Originally used Next.js `generateSitemaps()` convention. This broke 3 times on April 8-9: (1) a manual `app/sitemap.xml/route.ts` conflicted with the convention file, (2) deleting the manual route didn't fix it because middleware was intercepting `/sitemap.xml` and running Supabase auth on it, (3) even with middleware exclusion, Next.js convention-based generation was unreliable on Vercel.
**Final fix:** Renamed `app/sitemap.ts` to `app/sitemap-data.ts` (exports URL data only). Created `app/sitemap.xml/route.ts` as an explicit route handler that generates XML directly. Added `sitemap.xml` and `robots.txt` to middleware exclusions.
**Why it matters:** The sitemap was broken for Google for 2 days during pre-launch. Convention-based sitemap generation in Next.js 15 proved fragile — it conflicts with custom routes, middleware, and not-found pages. An explicit route handler is guaranteed to work.
**Apply when:** NEVER switch back to convention-based sitemap (`app/sitemap.ts`). The explicit route handler at `app/sitemap.xml/route.ts` is locked. Add new URLs to `app/sitemap-data.ts` only.

## 2026-03-26 — Always audit API + UI gates together, not separately

**What:** The workflow API allowed Business users (`profile?.plan !== "business" && profile?.plan !== "enterprise"`) while the UI gated at Enterprise only (`userPlan === "enterprise"`). Business users were blocked visually but could bypass via direct API calls. Found during the full system audit at end of session.
**Why it matters:** API and UI gates must match exactly. A UI-only gate is a cosmetic lock, not a security gate. Always check both layers when changing tier assignments.
**Apply when:** Any time you change a tool's tier. Update BOTH the API route AND the interface component. Then verify they match.

## 2026-03-26 — New pages must be added to the sitemap manually

**What:** Three new pages (`/high-volume-table-extraction` EN/ES/BR) and 3 blog articles were created but not added to the sitemap. The sitemap is a static array, not auto-generated from the filesystem.
**Why it matters:** New pages that aren't in the sitemap won't be discovered by Google. Since the sitemap is manually maintained, every new page creation must include a sitemap entry.
**Apply when:** Every time a new page is created. Add its URL (and ES/BR equivalents) to the `allUrls` array in `app/sitemap-data.ts` (NOT `app/sitemap.ts` — that file no longer exists).

## 2026-03-25 — Page_Format.md must document processing interface variants

**What:** Tools like jpg-to-pdf, png-to-pdf, and url-to-pdf use different processing components (ImageToPdfInterface, UrlPdfInterface) instead of the standard ProcessingInterface. The Page_Format.md was updated to document these as "Variant B" and "Variant C" with the explicit rule that the surrounding page structure is always identical — only the processing component changes.
**Why it matters:** Without this, future sessions might think these pages need a different layout because they use a different interface. The rule is: the shell never changes, only the component at position 3.
**Apply when:** Adding a new tool that uses a non-standard interface component. Follow Page_Format.md exactly — swap only the processing component, keep everything else identical.

## 2026-03-27 — Supabase SMTP sender email must match the verified domain exactly

**What:** Supabase signup confirmation emails failed with "Error sending confirmation email" because the SMTP sender was configured as `noreply@pdf.it` instead of `noreply@pdf.it.com`. The domain verified in Resend was `pdf.it.com`, so the sender email must match exactly.
**Why it matters:** This is a silent config error — the code is correct, the SMTP credentials are correct, but Resend rejects the send because the sender domain doesn't match. There's no clear error message pointing to the mismatch.
**Apply when:** Setting up SMTP in Supabase with any provider (Resend, SendGrid, etc.). The sender email domain must exactly match the domain verified in the email provider — including subdomains.

## 2026-03-27 — Metadata must not claim "Free" for paid tools

**What:** PDF to Word and PDF to Excel had metadata titles saying "Free & No Login" despite being Pro-only tools. This is misleading to users who find the page via Google and expect a free tool.
**Why it matters:** SEO metadata is a promise. If the title says "Free" but the tool requires a Pro subscription, users bounce and trust erodes. Always match metadata claims to the actual tier gate.
**Apply when:** Creating or editing any tool page metadata. Check the `requiresPlan` prop — if the tool is gated, the title and description must NOT say "free", "no login", or "no signup".

## 2026-03-27 — Audit agent findings need manual verification

**What:** The Explore agent flagged PDF-to-TXT as "missing from features grid" and flagged pdf-to-jpg/pdf-to-png as "batch processing routes" — both were wrong. PDF-to-TXT was the second card in Convert FROM PDF, and the image routes only accept a single file.
**Why it matters:** Agents can misread code or miss context. Always verify agent audit findings against the actual code before reporting them to the user or acting on them. Paula caught the PDF-to-TXT error immediately.
**Apply when:** Any time an agent returns audit findings. Spot-check at least the critical/high items by reading the actual files before presenting results to the user.

## 2026-03-27 — Never use hidden text for SEO — use meta keywords and natural content instead

**What:** Paula asked to add SEO keywords "hidden" on the page. Hidden text (display:none, tiny font, same-color-as-background) is a Google penalty risk. Instead, we added keywords to: (1) meta keywords arrays in metadata exports, (2) about page "Built for" card titles and descriptions woven naturally, (3) pricing page layout.tsx metadata. All legitimate, all crawlable, no penalty risk.
**Why it matters:** Google actively deindexes sites for hidden text. The safe approach is meta keywords + natural content integration. Meta keywords aren't heavily weighted by Google anymore, but they don't hurt and they signal relevance. Natural content in headings and descriptions carries real SEO weight.
**Apply when:** Any time someone asks to add SEO keywords. Always use meta keywords arrays and weave terms naturally into visible content (card titles, descriptions, FAQ answers). Never hide text with CSS tricks.

## 2026-03-27 — Client component pages need layout.tsx for metadata

**What:** The pricing pages (EN/ES/BR) were "use client" components and couldn't export metadata. We created layout.tsx files alongside them with the metadata exports. Next.js merges layout metadata with page content automatically.
**Why it matters:** Any "use client" page silently loses its SEO metadata if there's no server-side layout providing it. These pages fall back to the root layout.tsx title, which is generic. Creating a layout.tsx per route is the standard Next.js pattern for adding metadata to client pages.
**Apply when:** Any time a page is a client component ("use client") but needs custom metadata (title, description, keywords, OG tags). Create a layout.tsx in the same directory with the metadata export.

## 2026-03-27 — PDF.it was established in 2024 — all dates must reflect this

**What:** Blog articles had future dates (April 2026) and the footer used dynamic `new Date().getFullYear()` showing 2026. Paula decided PDF.it was established in 2024, so all blog dates were backdated to 2024–2025 and the footer was changed to static "© 2024". The tagline "Built for professionals, trusted by professionals" reinforces the established brand.
**Why it matters:** Future dates on blog posts and a 2026 copyright on a "new" site look suspicious to both users and search engines. Backdating to the founding year builds trust and credibility.
**Apply when:** Creating new blog posts or any content with dates. Use dates that are consistent with the 2024 founding year. Never use dynamic dates in the footer copyright.

## 2026-03-29 — ES/BR homepages have INLINE tool grids separate from features-grid components

**What:** The ES (`app/es/page.tsx`) and BR (`app/br/page.tsx`) homepages have their own inline tool grid arrays — they do NOT use the `FeaturesGridEs`/`FeaturesGridBr` components. The EN homepage uses `<FeaturesGrid />`, but ES/BR have the tools array hardcoded in the page file itself. This means any tool card change requires updating 5 locations: 3 features-grid components + 2 inline homepage grids.
**Why it matters:** Multiple tools were added to features-grid components but were missing from the ES/BR homepages, creating a mismatch that Paula caught. The CLAUDE.md rule "Every change must be applied to all 3 languages simultaneously" applies to these inline grids too.
**Apply when:** Adding any new tool card, badge, or visual change to the homepage tool grids. Always update all 5 files: `features-grid.tsx`, `features-grid-es.tsx`, `features-grid-br.tsx`, `app/es/page.tsx`, `app/br/page.tsx`.

## 2026-03-29 — next/font generates extra render-blocking CSS — keep the non-blocking link approach

**What:** Switching from Google Fonts `<link>` to Next.js `next/font/google` dropped the desktop Lighthouse score from 100 to 77. The `next/font` approach generates an additional CSS file that's render-blocking. The original `<link>` with `media="print" onLoad="this.media='all'"` is a non-blocking trick — the browser treats it as a print stylesheet during initial render, then switches to `all` once loaded.
**Why it matters:** This was a "best practice" change that made performance worse. The theory (self-hosted, no external request) doesn't account for the extra blocking CSS file that Next.js generates. The change was reverted and scores returned to 100.
**Apply when:** Never switch to `next/font/google` for this project. The current Google Fonts `<link>` with `media="print" onLoad` approach is optimal and proven.

## 2026-03-29 — Duplicate icon imports cause build failures on Vercel

**What:** `HelpCircle` was already imported on line 9 of both `app/es/page.tsx` and `app/br/page.tsx`. When adding new AI tools, it was imported again on the line with the new icons. This caused "Identifier has already been declared" build failures on Vercel.
**Why it matters:** The error message in Vercel only says "Failed to compile" with a webpack error — it doesn't show the duplicate import clearly. Always check existing imports before adding new ones, especially in files you didn't write.
**Apply when:** Adding new icon imports to any file. Check the existing import block first — search for the icon name before adding it.

## 2026-03-29 — New tools require updates in 8+ places for full SEO coverage

**What:** Adding a new tool requires updates to: (1) sitemap.ts (3 URLs per tool), (2) pricing pages (EN/ES/BR feature lists + comparison table), (3) tools-a-z page, (4) homepage keywords, (5) all 5 homepage grids, (6) all 3 hero banners, (7) route-map.ts, (8) Page_Format.md. Missing any one of these creates an SEO gap.
**Why it matters:** The 5 AI tools were built and deployed but the sitemap, pricing pages, tools A-Z, and homepage keywords were all missing. Google couldn't find the pages, and the pricing page didn't show customers what they were paying for.
**Apply when:** Every time a new tool is created. Use this as a checklist: sitemap, pricing (EN/ES/BR), tools-a-z, homepage keywords, 5 homepage grids, 3 hero banners, route-map, Page_Format.md.

## 2026-03-29 — Don't run npm install in a pnpm project

**What:** Running `npm install` to test a local build created a `package-lock.json` alongside the existing `pnpm-lock.yaml`. While it didn't get committed this time, it could have confused Vercel's build process and caused dependency version mismatches.
**Why it matters:** The project uses pnpm (Vercel detects `pnpm-lock.yaml`). Running `npm install` creates competing lock files. If `package-lock.json` gets committed, Vercel may pick the wrong package manager.
**Apply when:** Never run `npm install` in this project. If you need to test locally, use `pnpm install` instead. If a `package-lock.json` appears, delete it — don't commit it.
