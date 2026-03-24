"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, User, LogIn } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { getAlternateRoute } from "@/lib/route-map"
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
          <Link href="/es" className="flex items-center">
            <img src="/logo.svg" alt="PDF.it" className="h-8 w-auto" width="180" height="32" fetchPriority="high" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/es" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Inicio
            </Link>
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
            <Link href="/es/herramientas-a-z" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Indice A–Z
            </Link>
            <Link href="/es/blog" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Blog
            </Link>

            {/* Language switcher */}
            <div className="flex items-center gap-1.5">
              <Link href={getAlternateRoute(pathname, "en")} className="hover:opacity-80 transition-opacity" title="Switch to English">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7410 3900" className="w-6 h-4 rounded-sm shadow-sm border border-gray-200">
                  <rect width="7410" height="3900" fill="#B22234"/>
                  <path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#fff" strokeWidth="300"/>
                  <rect width="2964" height="2100" fill="#3C3B6E"/>
                  <g fill="#fff"><g id="s18"><g id="s9"><g id="s5"><g id="s4"><path id="s" d="M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z"/><use href="#s" y="420"/><use href="#s" y="840"/><use href="#s" y="1260"/></g><use href="#s" y="1680"/></g><use href="#s4" x="247" y="210"/></g><use href="#s9" x="494"/></g><use href="#s18" x="988"/><use href="#s9" x="1976"/></g>
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

            {!loading && (
              user ? (
                <Link href="/es/dashboard">
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                    <User className="mr-1.5 h-4 w-4" />
                    Mi Cuenta
                  </Button>
                </Link>
              ) : (
                <Link href="/es/login">
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
            <Link
              href="/es"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-slate-900 font-medium py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Inicio
            </Link>
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
              href="/es/herramientas-a-z"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-slate-900 font-medium py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Indice A–Z
            </Link>
            <Link
              href="/es/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-slate-900 font-medium py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Blog
            </Link>

            <Link
              href={getAlternateRoute(pathname, "en")}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7410 3900" className="w-6 h-4 rounded-sm shadow-sm border border-gray-200">
                <rect width="7410" height="3900" fill="#B22234"/>
                <path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#fff" strokeWidth="300"/>
                <rect width="2964" height="2100" fill="#3C3B6E"/>
                <g fill="#fff"><g id="ms18"><g id="ms9"><g id="ms5"><g id="ms4"><path id="ms" d="M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z"/><use href="#ms" y="420"/><use href="#ms" y="840"/><use href="#ms" y="1260"/></g><use href="#ms" y="1680"/></g><use href="#ms4" x="247" y="210"/></g><use href="#ms9" x="494"/></g><use href="#ms18" x="988"/><use href="#ms9" x="1976"/></g>
              </svg>
              English
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

            {!loading && (
              <div className="pt-2 border-t border-gray-100">
                {user ? (
                  <Link href="/es/dashboard" onClick={() => setMobileMenuOpen(false)}>
                    <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      <User className="mr-1.5 h-4 w-4" />
                      Mi Cuenta
                    </Button>
                  </Link>
                ) : (
                  <Link href="/es/login" onClick={() => setMobileMenuOpen(false)}>
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
