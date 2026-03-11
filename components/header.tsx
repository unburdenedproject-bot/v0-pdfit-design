"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, User, LogIn } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
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
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-black">
              <span style={{color: '#1E3A8A'}}>Omnis</span><span style={{color: '#F97316'}}>PDF</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={handleToolsClick}
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md px-2 py-1"
            >
              Tools
            </button>
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

            {/* Language switcher */}
            <Link href="/es" className="text-slate-500 hover:text-slate-700 text-sm font-medium transition-colors flex items-center gap-1.5" title="Cambiar a Español">
              <span className="text-base leading-none">🇲🇽</span> ES
            </Link>

            {/* Auth links */}
            {!loading && (
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
        <nav className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-lg md:hidden">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                handleToolsClick()
              }}
              className="text-left text-slate-700 hover:text-slate-900 font-medium py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Tools
            </button>
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
              href="/es"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-500 hover:text-slate-700 text-sm font-medium py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              <span className="text-base leading-none">🇲🇽</span> Español
            </Link>

            {!loading && (
              <div className="pt-2 border-t border-gray-100">
                {user ? (
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
            )}
          </div>
        </nav>
      )}
    </header>
  )
}
