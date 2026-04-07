import { readFile, writeFile, unlink } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";

/**
 * Fetch a Vercel Blob URL and write it to /tmp.
 * Returns { tmpPath, name }.
 */
export async function blobUrlToTmp(blobUrl) {
  const res = await fetch(blobUrl);
  if (!res.ok) {
    console.error(`Failed to fetch blob URL (${res.status}): ${blobUrl}`);
    throw new Error("Failed to retrieve your uploaded file. Please try uploading again.");
  }

  let name = "input.pdf";
  try {
    const pathname = new URL(blobUrl).pathname;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0) {
      name = decodeURIComponent(segments[segments.length - 1]);
    }
  } catch {
    // keep default name
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  const id = randomUUID();
  const tmpPath = join("/tmp", `${id}-${name}`);
  await writeFile(tmpPath, buffer);
  return { tmpPath, name };
}

/**
 * Read a file from /tmp (or any path).
 */
export async function readTmpFile(tmpPath) {
  return readFile(tmpPath);
}

/**
 * Safely delete a temp file (ignores errors if already gone).
 */
export async function cleanupTmp(tmpPath) {
  if (tmpPath) await unlink(tmpPath).catch(() => {});
}
