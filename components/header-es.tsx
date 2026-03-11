"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, User, LogIn } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import type { User as SupabaseUser } from "@supabase/supabase-js"

export function HeaderEs() {
  const router = useRouter()
  const pathname = usePathname()
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const supabase = createClient()

    if (!supabase) {
      setLoading(false)
      return
    }

    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
      setLoading(false)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleToolsClick = () => {
    if (pathname !== "/es") {
      router.push("/es#tools")
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
          <Link href="/es" className="flex items-center space-x-2">
            <div className="text-2xl font-black">
              <span style={{color: '#1E3A8A'}}>Omnis</span><span style={{color: '#F97316'}}>PDF</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={handleToolsClick}
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md px-2 py-1"
            >
              Herramientas
            </button>
            <Link href="/es/acerca" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Nosotros
            </Link>
            <Link href="/es/contacto" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Contacto
            </Link>
            <Link href="/es/precios" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Precios
            </Link>
            <Link href="/es/herramientas" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Todas las Herramientas
            </Link>

            {/* Language switcher */}
            <Link href="/" className="text-slate-500 hover:text-slate-700 text-sm font-medium transition-colors" title="Switch to English">
              EN
            </Link>

            {!loading && (
              user ? (
                <Link href="/dashboard">
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                    <User className="mr-1.5 h-4 w-4" />
                    Mi Cuenta
                  </Button>
                </Link>
              ) : (
                <Link href="/login">
                  <Button size="sm" variant="outline" className="border-slate-200 text-slate-700 hover:text-slate-900">
                    <LogIn className="mr-1.5 h-4 w-4" />
                    Iniciar Sesión
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
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

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
              Herramientas
            </button>
            <Link
              href="/es/acerca"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-slate-900 font-medium py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="/es/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-slate-900 font-medium py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Contacto
            </Link>
            <Link
              href="/es/precios"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-slate-900 font-medium py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Precios
            </Link>
            <Link
              href="/es/herramientas"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-slate-900 font-medium py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Todas las Herramientas
            </Link>

            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-500 hover:text-slate-700 text-sm font-medium py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              English
            </Link>

            {!loading && (
              <div className="pt-2 border-t border-gray-100">
                {user ? (
                  <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                    <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      <User className="mr-1.5 h-4 w-4" />
                      Mi Cuenta
                    </Button>
                  </Link>
                ) : (
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                    <Button size="sm" variant="outline" className="w-full border-slate-200 text-slate-700 hover:text-slate-900">
                      <LogIn className="mr-1.5 h-4 w-4" />
                      Iniciar Sesión
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
