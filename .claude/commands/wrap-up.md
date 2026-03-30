---
context: current
---

# Session Wrap-Up

Summarize this session and update project docs.

---

## Step 1 — Summarize What Was Done

Review the conversation and list every change made during this session:
- Files created or edited
- Bugs fixed
- Features added
- Config changes
- Deployments

Format as a short bullet list. Keep it clear and simple.

---

## Step 2 — Update CLAUDE.md

Check if any TODO items in CLAUDE.md were completed during this session. If so, mark them as done (~~strikethrough~~ DONE).

If new TODO items came up during the session, add them under the appropriate priority section.

---

## Step 3 — Update COMPLETED.md

Add a dated entry to COMPLETED.md with the changes made in this session. Follow the existing format in that file.

---

## Step 4 — Check for Uncommitted Changes

Run `git status` to see if there are uncommitted changes from the wrap-up updates.

If there are changes, ask Paula if she wants to deploy now. If yes, run:
```
git add .
git commit -m "[describe wrap-up updates]"
git push
```

---

## Step 5 — Remind Paula

End with a short summary:
- What was accomplished today
- What's still pending (from CLAUDE.md TODO)
- Any next steps she should take manually (verifications, Stripe checks, etc.)
