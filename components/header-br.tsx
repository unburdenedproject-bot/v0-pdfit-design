"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, User, LogIn, ArrowLeft, ChevronDown, Globe } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState, useRef } from "react"
import { createClient } from "@/lib/supabase/client"
import { getAlternateRoute } from "@/lib/route-map"
import type { User as SupabaseUser } from "@supabase/supabase-js"

export function HeaderBr() {
  const router = useRouter()
  const pathname = usePathname()
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const langDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

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
    if (pathname !== "/br") {
      router.push("/br#tools")
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
    <header
      className="sticky top-0 z-50"
      style={{
        background: "#0E0F1E",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            {pathname !== "/br" && (
              <button
                onClick={() => router.back()}
                className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Voltar"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            <Link href="/br" className="flex items-center">
              <img src="/logo.svg" alt="PDF.it" style={{height: '28px', width: 'auto'}} />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/br" className="text-white/80 hover:text-white font-medium transition-colors">
              Inicio
            </Link>
            <Link href="/br/sobre" className="text-white/80 hover:text-white font-medium transition-colors">
              Sobre
            </Link>
            <Link href="/br/contato" className="text-white/80 hover:text-white font-medium transition-colors">
              Contato
            </Link>
            <Link href="/br/precos" className="text-white/80 hover:text-white font-medium transition-colors">
              Precos
            </Link>
            <Link href="/br/ferramentas" className="text-white/80 hover:text-white font-medium transition-colors">
              Todas as Ferramentas
            </Link>
            <Link href="/br/ferramentas-a-z" className="text-white/80 hover:text-white font-medium transition-colors">
              Indice A–Z
            </Link>
            <Link href="/br/blog" className="text-white/80 hover:text-white font-medium transition-colors">
              Blog
            </Link>

            {/* Language dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 text-white/80 hover:text-white font-medium transition-colors px-2 py-1.5 rounded-lg hover:bg-white/10"
                aria-expanded={langDropdownOpen}
                aria-haspopup="true"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm">BR</span>
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {langDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 rounded-xl overflow-hidden shadow-xl border border-white/10" style={{ background: "#13152A", backdropFilter: "blur(16px)" }}>
                  <Link
                    href={getAlternateRoute(pathname, "en")}
                    onClick={() => setLangDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7410 3900" className="w-6 h-4 rounded-sm shadow-sm border border-white/20 flex-shrink-0">
                      <rect width="7410" height="3900" fill="#B22234"/>
                      <path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#fff" strokeWidth="300"/>
                      <rect width="2964" height="2100" fill="#3C3B6E"/>
                    </svg>
                    English
                  </Link>
                  <Link
                    href={getAlternateRoute(pathname, "es")}
                    onClick={() => setLangDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" className="w-6 h-4 rounded-sm shadow-sm border border-white/20 flex-shrink-0">
                      <rect width="750" height="500" fill="#c60b1e"/>
                      <rect y="125" width="750" height="250" fill="#ffc400"/>
                    </svg>
                    Español
                  </Link>
                </div>
              )}
            </div>

            {loading ? (
              <div className="w-[100px] h-9 flex-shrink-0" />
            ) : (
              user ? (
                <Link href="/br/painel">
                  <Button size="sm" className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold">
                    <User className="mr-1.5 h-4 w-4" />
                    Painel
                  </Button>
                </Link>
              ) : (
                <Link href="/br/login">
                  <button
                    className="inline-flex items-center text-sm"
                    style={{
                      background: "#14D8C4",
                      color: "#0E0F1E",
                      fontWeight: 700,
                      borderRadius: "8px",
                      padding: "8px 20px",
                      boxShadow: "0 0 16px rgba(20, 216, 196, 0.4)",
                    }}
                  >
                    <LogIn className="mr-1.5 h-4 w-4" />
                    Entrar
                  </button>
                </Link>
              )
            )}
          </nav>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden relative z-50 text-white hover:text-white/80"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
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
        <nav className="fixed top-16 left-0 right-0 z-40 bg-[#0E0F1E]/95 backdrop-blur-xl border-b border-white/10 shadow-lg md:hidden">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link href="/br" onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-white/10 transition-colors">
              Inicio
            </Link>
            <Link href="/br/sobre" onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-white/10 transition-colors">
              Sobre
            </Link>
            <Link href="/br/contato" onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-white/10 transition-colors">
              Contato
            </Link>
            <Link href="/br/precos" onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-white/10 transition-colors">
              Precos
            </Link>
            <Link href="/br/ferramentas" onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-white/10 transition-colors">
              Todas as Ferramentas
            </Link>
            <Link href="/br/ferramentas-a-z" onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-white/10 transition-colors">
              Indice A–Z
            </Link>
            <Link href="/br/blog" onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-white/10 transition-colors">
              Blog
            </Link>

            <div className="pt-2 border-t border-white/10">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-bold px-3 mb-2">Idioma</p>
              <Link href={getAlternateRoute(pathname, "en")} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 text-white/80 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7410 3900" className="w-6 h-4 rounded-sm shadow-sm border border-white/20 flex-shrink-0">
                  <rect width="7410" height="3900" fill="#B22234"/>
                  <path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#fff" strokeWidth="300"/>
                  <rect width="2964" height="2100" fill="#3C3B6E"/>
                </svg>
                English
              </Link>
              <Link href={getAlternateRoute(pathname, "es")} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 text-white/80 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" className="w-6 h-4 rounded-sm shadow-sm border border-white/20 flex-shrink-0">
                  <rect width="750" height="500" fill="#c60b1e"/>
                  <rect y="125" width="750" height="250" fill="#ffc400"/>
                </svg>
                Español
              </Link>
            </div>

            <div className="pt-2 border-t border-white/10">
              {loading ? (
                <div className="h-9 flex-shrink-0" />
              ) : user ? (
                <Link href="/br/painel" onClick={() => setMobileMenuOpen(false)}>
                  <Button size="sm" className="w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold">
                    <User className="mr-1.5 h-4 w-4" />
                    Painel
                  </Button>
                </Link>
              ) : (
                <Link href="/br/login" onClick={() => setMobileMenuOpen(false)}>
                  <button
                    className="inline-flex items-center justify-center w-full text-sm"
                    style={{
                      background: "#14D8C4",
                      color: "#0E0F1E",
                      fontWeight: 700,
                      borderRadius: "8px",
                      padding: "8px 20px",
                      boxShadow: "0 0 16px rgba(20, 216, 196, 0.4)",
                    }}
                  >
                    <LogIn className="mr-1.5 h-4 w-4" />
                    Entrar
                  </button>
                </Link>
              )}
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
