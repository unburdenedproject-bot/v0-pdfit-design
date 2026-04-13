---
name: SSRF Fix in URL-to-PDF
description: lib/url-validation.js blocks internal IPs, cloud metadata, non-HTTP schemes in /api/url-to-pdf
type: project
---

SSRF vulnerability found during integration test audit (April 2026). The /api/url-to-pdf route passed user URLs directly to CloudConvert without checking for internal addresses.

**Fix:** Added `lib/url-validation.js` with `validateUrlForCapture()` that blocks:
- RFC 1918 private IPs (10.x, 172.16-31.x, 192.168.x)
- Loopback (127.x, ::1, localhost)
- Cloud metadata (169.254.169.254, metadata.google.internal)
- Non-HTTP schemes (file://, ftp://, javascript:)
- DNS rebinding (resolves hostname and checks result IP)

**How to apply:** Any new route that fetches user-supplied URLs must use `validateUrlForCapture()`.
