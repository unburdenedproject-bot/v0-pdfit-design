/**
 * Validate that a URL is a legitimate Vercel Blob storage URL.
 *
 * Prevents SSRF attacks and cross-user blob access by ensuring
 * the URL points to Vercel's blob storage domain.
 *
 * @param {string} url - The URL to validate
 * @returns {boolean} true if the URL is a valid Vercel Blob URL
 */
export function isValidBlobUrl(url) {
  if (!url || typeof url !== "string") return false;
  if (!url.startsWith("https://")) return false;
  try {
    const parsed = new URL(url);
    return parsed.hostname.endsWith(".vercel-storage.com");
  } catch {
    return false;
  }
}

/**
 * Validate an array of blob URLs. Returns true only if every URL is valid.
 *
 * @param {string[]} urls - Array of URLs to validate
 * @returns {boolean} true if all URLs are valid Vercel Blob URLs
 */
export function areValidBlobUrls(urls) {
  if (!Array.isArray(urls) || urls.length === 0) return false;
  return urls.every(isValidBlobUrl);
}
