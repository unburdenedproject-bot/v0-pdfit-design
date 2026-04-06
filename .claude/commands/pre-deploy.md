# Pre-Deploy Safety Check

Run tests, verify the build, then commit and push safely.

**Usage:** `/pre-deploy` or `/pre-deploy fix login page styling`

---

## Step 1 — Check for uncommitted changes

Run `git status` and `git diff --stat`. If there are no changes, tell the user "Nothing to deploy" and stop.

---

## Step 2 — Run the E2E test suite

Run `pnpm test:e2e` (or `npx playwright test --reporter=list` if the script isn't available).

- If all tests pass: continue to Step 3
- If tests fail: show the failures and ask the user whether to proceed or fix first. Do NOT auto-push with failing tests.

---

## Step 3 — Run a build check

Run `pnpm build 2>&1 | tail -20`.

- If build succeeds: continue to Step 4
- If build fails: show the error and stop. Do NOT push broken builds.

---

## Step 4 — Commit and push

Stage the changed files (use specific filenames, not `git add .`), create a commit with a descriptive message, and push.

If the user provided a message with `/pre-deploy`, use it as the commit message. Otherwise, analyze the diff and write one.

Always end the commit message with:
```
Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
```

Push to `origin/main`.

---

## Step 5 — Confirm

Tell the user:
- What was committed (files changed)
- That Vercel will auto-deploy
- Any test warnings or skipped tests they should know about
