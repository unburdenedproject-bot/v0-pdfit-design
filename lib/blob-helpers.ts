import { put, del } from "@vercel/blob"

/**
 * Upload a Blob / Buffer to Vercel Blob storage.
 *
 * @param filename  The desired pathname inside the store (e.g. "merged.pdf")
 * @param data      File-like body accepted by the Blob SDK (Blob, Buffer, ReadableStream, etc.)
 * @returns         The public Blob URL and pathname
 */
export async function uploadToBlob(
  filename: string,
  data: Blob | Buffer | ReadableStream | ArrayBuffer,
) {
  const blob = await put(filename, data, {
    access: "public",
    addRandomSuffix: true,
  })

  return { url: blob.url, pathname: blob.pathname }
}

/**
 * Stream a file from a Vercel Blob URL.
 *
 * Fetches the blob and returns its body as a ReadableStream together with
 * the content-type reported by the Blob CDN.
 */
export async function downloadFromBlob(blobUrl: string) {
  const res = await fetch(blobUrl)

  if (!res.ok) {
    throw new Error(`Failed to fetch blob: ${res.status} ${res.statusText}`)
  }

  return {
    body: res.body as ReadableStream,
    contentType: res.headers.get("content-type") || "application/octet-stream",
    contentLength: res.headers.get("content-length"),
  }
}

/**
 * Delete a file from Vercel Blob storage.
 */
export async function deleteFromBlob(blobUrl: string) {
  await del(blobUrl)
}
