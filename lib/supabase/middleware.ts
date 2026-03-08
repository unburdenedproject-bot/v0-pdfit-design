import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

// Tool page paths that require authentication
const PROTECTED_TOOL_PATHS = [
  "/dashboard",
]

function isProtectedPath(pathname: string): boolean {
  return PROTECTED_TOOL_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  )
}

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // When Supabase env vars are not configured (e.g. v0 sandbox),
  // skip all auth checks and let every request through.
  if (!supabaseUrl || !supabaseKey) {
    return supabaseResponse
  }

  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll()
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value)
        )
        supabaseResponse = NextResponse.next({ request })
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options)
        )
      },
    },
  })

  // IMPORTANT: Do not run code between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard
  // to debug issues with users being randomly logged out.
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // If the user is NOT logged in and the path is protected, redirect to /login
  if (!user && isProtectedPath(request.nextUrl.pathname)) {
    const url = request.nextUrl.clone()
    const redirectTo = request.nextUrl.pathname + request.nextUrl.search
    url.pathname = "/login"
    url.searchParams.set("redirect", redirectTo)
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}
