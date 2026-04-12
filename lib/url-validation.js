/**
 * URL validation for URL-to-PDF route.
 *
 * Blocks SSRF attacks by rejecting internal/private IP addresses,
 * cloud metadata endpoints, and non-HTTP schemes.
 *
 * SECURITY: This is a critical guard. Do not weaken these checks
 * without understanding the SSRF implications.
 */

import { lookup } from "dns/promises";

/**
 * Check if a hostname resolves to a private/internal IP address.
 * Blocks RFC 1918, loopback, link-local, and cloud metadata IPs.
 */
export function isPrivateIP(ip) {
  // IPv4 private ranges
  if (ip.startsWith("10.")) return true;
  if (ip.startsWith("172.")) {
    const second = parseInt(ip.split(".")[1], 10);
    if (second >= 16 && second <= 31) return true;
  }
  if (ip.startsWith("192.168.")) return true;

  // Loopback
  if (ip.startsWith("127.")) return true;

  // Link-local
  if (ip.startsWith("169.254.")) return true;
  if (ip.toLowerCase().startsWith("fe80:")) return true;

  // 0.0.0.0
  if (ip === "0.0.0.0") return true;

  // IPv6 loopback in various forms
  if (ip === "::1" || ip === "0:0:0:0:0:0:0:1") return true;

  return false;
}

/**
 * Known internal hostnames that should always be blocked.
 */
const BLOCKED_HOSTNAMES = new Set([
  "localhost",
  "metadata.google.internal",
  "metadata",
  "kubernetes.default.svc",
]);

/**
 * Validate a URL for the URL-to-PDF feature.
 * Returns { valid: true } or { valid: false, reason: string }.
 */
export async function validateUrlForCapture(url) {
  // Parse the URL
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return { valid: false, reason: "Invalid URL format." };
  }

  // Only allow HTTP and HTTPS
  if (!["http:", "https:"].includes(parsed.protocol)) {
    return {
      valid: false,
      reason: "Only HTTP and HTTPS URLs are supported.",
    };
  }

  // Block known internal hostnames
  const hostname = parsed.hostname.toLowerCase();
  if (BLOCKED_HOSTNAMES.has(hostname)) {
    return {
      valid: false,
      reason: "This URL points to an internal address and cannot be accessed.",
    };
  }

  // Block raw IP addresses that are private
  // Check if hostname is an IP (v4 or v6)
  const isIPv4 = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(hostname);
  const isIPv6 = hostname.startsWith("[") || hostname.includes(":");

  if (isIPv4 || isIPv6) {
    const cleanIP = hostname.replace(/^\[|\]$/g, "");
    if (isPrivateIP(cleanIP)) {
      return {
        valid: false,
        reason:
          "This URL points to an internal address and cannot be accessed.",
      };
    }
  }

  // DNS resolution check — resolve hostname and verify it doesn't point to private IP
  try {
    const addresses = await lookup(hostname, { all: true });
    for (const addr of addresses) {
      if (isPrivateIP(addr.address)) {
        return {
          valid: false,
          reason:
            "This URL resolves to an internal address and cannot be accessed.",
        };
      }
    }
  } catch {
    // DNS resolution failed — fail closed to prevent SSRF bypass
    return {
      valid: false,
      reason: "Could not resolve hostname. Please check the URL and try again.",
    };
  }

  return { valid: true };
}

/**
 * Check a URL against Google Safe Browsing (v4) for known phishing,
 * malware, unwanted software, or social-engineering threats.
 *
 * Requires env var GOOGLE_SAFE_BROWSING_API_KEY. If the key is not set,
 * the check is skipped (returns { safe: true }) so existing deployments
 * don't break on missing config. Paula: set this key to turn it on.
 *
 * Returns { safe: true } or { safe: false, threatType: string }.
 */
export async function checkUrlSafety(url) {
  const apiKey = process.env.GOOGLE_SAFE_BROWSING_API_KEY;
  if (!apiKey) {
    // Safe Browsing not configured -- skip. Log once so Paula sees it.
    if (!globalThis.__pdfItSafeBrowsingWarned) {
      console.warn("[url-validation] GOOGLE_SAFE_BROWSING_API_KEY not set -- phishing/malware blocking is disabled.");
      globalThis.__pdfItSafeBrowsingWarned = true;
    }
    return { safe: true };
  }

  try {
    const endpoint = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${apiKey}`;
    const payload = {
      client: { clientId: "pdf.it", clientVersion: "1.0" },
      threatInfo: {
        threatTypes: [
          "MALWARE",
          "SOCIAL_ENGINEERING",
          "UNWANTED_SOFTWARE",
          "POTENTIALLY_HARMFUL_APPLICATION",
        ],
        platformTypes: ["ANY_PLATFORM"],
        threatEntryTypes: ["URL"],
        threatEntries: [{ url }],
      },
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      // API error -- don't block the user for Google's outage. Log and continue.
      console.warn("[url-validation] Safe Browsing API returned", res.status);
      return { safe: true };
    }

    const data = await res.json();
    if (data && Array.isArray(data.matches) && data.matches.length > 0) {
      return { safe: false, threatType: data.matches[0].threatType || "THREAT" };
    }
    return { safe: true };
  } catch (err) {
    // Timeout or network error -- fail open (don't block legit users on Google's flakiness).
    console.warn("[url-validation] Safe Browsing check failed:", err?.message || err);
    return { safe: true };
  }
}
