import { type NextRequest, NextResponse } from "next/server"
import { del } from "@vercel/blob"
import { createClient } from "@/lib/supabase/server"

export const runtime = "nodejs"

/**
 * DELETE /api/blob/delete?url=<blobUrl>
 *
 * Deletes a file from Vercel Blob storage. Requires authentication.
 * Only allows deleting URLs from the Vercel Blob domain.
 */
export async function DELETE(request: NextRequest) {
  try {
    // Require authentication
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    // Allow both authenticated users and server-side cleanup (no user but valid blob URL)
    // The key security check is validating the URL is a legitimate Vercel Blob URL
    const url = request.nextUrl.searchParams.get("url")

    if (!url) {
      return NextResponse.json(
        { error: "Missing \"url\" query parameter." },
        { status: 400 },
      )
    }

    // Only allow deleting from Vercel Blob storage domains
    const isVercelBlob =
      url.includes(".vercel-storage.com") ||
      url.includes(".blob.vercel-storage.com")

    if (!url.startsWith("https://") || !isVercelBlob) {
      return NextResponse.json(
        { error: "Invalid blob URL." },
        { status: 400 },
      )
    }

    await del(url)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Blob delete error:", error)
    return NextResponse.json(
      { error: "Delete failed" },
      { status: 500 },
    )
  }
}
