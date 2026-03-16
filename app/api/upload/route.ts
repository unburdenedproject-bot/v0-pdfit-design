import { type NextRequest, NextResponse } from "next/server"
import { handleUpload, type HandleUploadBody } from "@vercel/blob/client"
import { createClient } from "@/lib/supabase/server"

export const runtime = "nodejs"

/**
 * POST /api/upload
 *
 * Token-granting endpoint consumed by the @vercel/blob/client `upload()`
 * helper.  The browser sends the file directly to Vercel Blob storage
 * (no server body size limit), and this route only issues a short-lived
 * upload token.
 */
export async function POST(request: NextRequest) {
  // Allow anonymous uploads — auth checked at download/processing stage
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // Look up plan if logged in, otherwise default to free limits
  let maximumSizeInBytes = 25 * 1024 * 1024 // 25MB for free/anonymous
  if (user) {
    const { data: profile } = await supabase
      .from("users")
      .select("plan")
      .eq("id", user.id)
      .single()
    const plan = profile?.plan || "free"
    if (plan === "enterprise" || plan === "business") {
      maximumSizeInBytes = 1024 * 1024 * 1024 // 1GB for Business/Enterprise
    } else if (plan === "pro") {
      maximumSizeInBytes = 200 * 1024 * 1024  // 200MB for Pro
    }
  }

  const body = (await request.json()) as HandleUploadBody

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (/* pathname */) => {
        return {
          allowedContentTypes: [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "application/vnd.ms-powerpoint",
            "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "image/jpeg",
            "image/png",
            "application/octet-stream",
          ],
          maximumSizeInBytes,
          addRandomSuffix: true,
        }
      },
      onUploadCompleted: async ({ blob }) => {
        // Optional: log or track uploads
        console.log("Upload completed:", blob.url)
      },
    })

    return NextResponse.json(jsonResponse)
  } catch (error) {
    console.error("Upload token error:", error)
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 },
    )
  }
}
