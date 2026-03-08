import { type NextRequest, NextResponse } from "next/server"
import { del } from "@vercel/blob"

export const runtime = "nodejs"

/**
 * DELETE /api/blob/delete?url=<blobUrl>
 *
 * Deletes a file from Vercel Blob storage.  Used for client-side cleanup
 * after processing is complete.
 */
export async function DELETE(request: NextRequest) {
  try {
    const url = request.nextUrl.searchParams.get("url")

    if (!url) {
      return NextResponse.json(
        { error: "Missing \"url\" query parameter." },
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
