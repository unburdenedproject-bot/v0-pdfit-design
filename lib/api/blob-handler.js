import { readFile, unlink } from "fs/promises";
import { createWriteStream } from "fs";
import { join } from "path";
import { randomUUID } from "crypto";
import { Readable } from "stream";
import { pipeline } from "stream/promises";

/**
 * Fetch a Vercel Blob URL and stream it to /tmp.
 * Uses streaming to avoid loading entire file into memory.
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

  const id = randomUUID();
  const tmpPath = join("/tmp", `${id}-${name}`);

  // Stream directly from network to disk — no full-file buffering
  if (res.body) {
    const nodeStream = Readable.fromWeb(res.body);
    await pipeline(nodeStream, createWriteStream(tmpPath));
  } else {
    // Fallback for environments where res.body is not a ReadableStream
    const buffer = Buffer.from(await res.arrayBuffer());
    const { writeFile } = await import("fs/promises");
    await writeFile(tmpPath, buffer);
  }

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
