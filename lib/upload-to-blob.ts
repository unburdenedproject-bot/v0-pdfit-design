import { upload } from "@vercel/blob/client"

/**
 * Upload a single File directly from the browser to Vercel Blob storage.
 *
 * Uses client-side multipart upload so the file never passes through the
 * API route body -- this avoids HTTP 413 payload-too-large errors on Vercel.
 *
 * Returns the public Blob URL.
 */
const FREE_MAX_BYTES     = 25 * 1024 * 1024    // 25 MB
const PRO_MAX_BYTES      = 200 * 1024 * 1024   // 200 MB
const BUSINESS_MAX_BYTES = 1024 * 1024 * 1024  // 1 GB

export async function uploadFileToBlob(file: File): Promise<string> {
  const maxBytes = await getMaxUploadBytes()

  if (file.size > maxBytes.maxBytes) {
    throw new Error(maxBytes.errorMessage)
  }

  const blob = await upload(file.name, file, {
    access: "public",
    handleUploadUrl: "/api/upload",
    multipart: true,
  })

  return blob.url
}

async function getMaxUploadBytes(): Promise<{ maxBytes: number; errorMessage: string }> {
  // Fetch the user's plan to determine the size limit
  const planRes = await fetch("/api/user-plan")
  const { plan } = (await planRes.json()) as { plan: string }
  const maxBytes = plan === "business" ? BUSINESS_MAX_BYTES : plan === "pro" ? PRO_MAX_BYTES : FREE_MAX_BYTES
  const maxLabel = plan === "business" ? "1GB" : plan === "pro" ? "200MB" : "25MB"
  const planLabel = plan === "business" ? "Business" : plan === "pro" ? "Pro" : "Free"
  const upgradeHint = plan === "pro"
    ? " Upgrade to Business for files up to 1GB."
    : plan === "free" || !plan
      ? " Upgrade to Pro for files up to 200MB, or Business for up to 1GB."
      : ""

  return {
    maxBytes,
    errorMessage: `File exceeds the ${maxLabel} limit for your ${planLabel} plan. Please choose a smaller file.${upgradeHint}`,
  }
}

export async function uploadBlobToBlob(blob: Blob, filename: string): Promise<string> {
  const { maxBytes, errorMessage } = await getMaxUploadBytes()

  if (blob.size > maxBytes) {
    throw new Error(errorMessage)
  }

  const file = new File([blob], filename, {
    type: blob.type || "application/octet-stream",
  })

  const uploaded = await upload(file.name, file, {
    access: "public",
    handleUploadUrl: "/api/upload",
    multipart: true,
  })

  return uploaded.url
}

/**
 * Upload multiple Files to Vercel Blob in sequence.
 * Returns an array of public Blob URLs in the same order as the input files.
 */
export async function uploadManyToBlob(files: File[]): Promise<string[]> {
  const urls: string[] = []
  for (const file of files) {
    const url = await uploadFileToBlob(file)
    urls.push(url)
  }
  return urls
}

/**
 * Client-side helper: delete a Blob URL via /api/blob/delete.
 *
 * Best-effort cleanup -- failures are swallowed so they never
 * block the user flow.
 */
export async function deleteBlobUrl(blobUrl: string): Promise<void> {
  try {
    await fetch(`/api/blob/delete?url=${encodeURIComponent(blobUrl)}`, {
      method: "DELETE",
    })
  } catch {
    // swallow -- cleanup is best-effort
  }
}
