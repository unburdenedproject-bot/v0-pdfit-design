"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, User, LogIn } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { getAlternateRoute } from "@/lib/route-map"
import type { User as SupabaseUser } from "@supabase/supabase-js"

export function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const supabase = createClient()

    // Skip auth when Supabase is not configured (e.g. v0 sandbox)
    if (!supabase) {
      setLoading(false)
      return
    }

    // Get initial session
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
      setLoading(false)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleToolsClick = () => {
    if (pathname !== "/") {
      router.push("/#tools")
      return
    }

    const toolsSection = document.getElementById("tools")
    if (toolsSection) {
      const headerHeight = 64
      const elementPosition = toolsSection.offsetTop
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="bg-[#F3F4FF] border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span style={{fontWeight: 800, color: '#191B4D', fontSize: '22px', letterSpacing: '-0.5px'}}>PDF<span style={{color: '#14D8C4', fontWeight: 400}}>.it</span></span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Contact
            </Link>
            <Link href="/pricing" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/tools" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              All Tools
            </Link>
            <Link href="/tools-a-z" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              A–Z Index
            </Link>
            <Link href="/blog" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Blog
            </Link>

            {/* Language switcher */}
            <div className="flex items-center gap-1.5">
              <Link href={getAlternateRoute(pathname, "es")} className="hover:opacity-80 transition-opacity" title="Cambiar a Español">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" className="w-6 h-4 rounded-sm shadow-sm border border-gray-200">
                  <rect width="750" height="500" fill="#c60b1e"/>
                  <rect y="125" width="750" height="250" fill="#ffc400"/>
                </svg>
              </Link>
              <Link href={getAlternateRoute(pathname, "pt")} className="hover:opacity-80 transition-opacity" title="Mudar para Português">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 504" className="w-6 h-4 rounded-sm shadow-sm border border-gray-200">
                  <rect width="720" height="504" fill="#009B3A"/>
                  <polygon points="360,42 692,252 360,462 28,252" fill="#FEDF00"/>
                  <circle cx="360" cy="252" r="115" fill="#002776"/>
                </svg>
              </Link>
            </div>

            {/* Auth links */}
            {loading ? (
              <div className="w-[100px] h-9" />
            ) : (
              user ? (
                <Link href="/dashboard">
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                    <User className="mr-1.5 h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <Link href="/login">
                  <Button size="sm" variant="outline" className="border-slate-200 text-slate-700 hover:text-slate-900">
                    <LogIn className="mr-1.5 h-4 w-4" />
                    Sign In
                  </Button>
                </Link>
              )
            )}
          </nav>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <nav className="fixed top-16 left-0 right-0 z-40 bg-[#F3F4FF] border-b border-gray-100 shadow-lg md:hidden">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-slate-900 font-medium py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-slate-900 font-medium py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-slate-900 font-medium py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-slate-900 font-medium py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/tools"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-slate-900 font-medium py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              All Tools
            </Link>
            <Link
              href="/tools-a-z"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-slate-900 font-medium py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              A–Z Index
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-slate-900 font-medium py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Blog
            </Link>

            <Link
              href={getAlternateRoute(pathname, "es")}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" className="w-6 h-4 rounded-sm shadow-sm border border-gray-200">
                <rect width="750" height="500" fill="#c60b1e"/>
                <rect y="125" width="750" height="250" fill="#ffc400"/>
              </svg>
              Español
            </Link>
            <Link
              href={getAlternateRoute(pathname, "pt")}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 504" className="w-6 h-4 rounded-sm shadow-sm border border-gray-200">
                <rect width="720" height="504" fill="#009B3A"/>
                <polygon points="360,42 692,252 360,462 28,252" fill="#FEDF00"/>
                <circle cx="360" cy="252" r="115" fill="#002776"/>
              </svg>
              Português
            </Link>

            <div className="pt-2 border-t border-gray-100">
              {loading ? (
                <div className="h-9" />
              ) : user ? (
                <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                  <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    <User className="mr-1.5 h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button size="sm" variant="outline" className="w-full border-slate-200 text-slate-700 hover:text-slate-900">
                    <LogIn className="mr-1.5 h-4 w-4" />
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
