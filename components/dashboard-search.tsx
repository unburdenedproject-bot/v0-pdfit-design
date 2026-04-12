"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Search, X } from "lucide-react"
import { searchDashboardTools, type DashboardLocale } from "@/lib/dashboard-tool-catalog"

interface DashboardSearchProps {
  locale: DashboardLocale
}

const COPY: Record<DashboardLocale, { placeholder: string; noResults: string; hint: string }> = {
  en: {
    placeholder: "Search tools (e.g. merge, compress, OCR)...",
    noResults: "No tools match your search.",
    hint: "Press Enter to open the top match",
  },
  es: {
    placeholder: "Buscar herramientas (ej. unir, comprimir, OCR)...",
    noResults: "Ninguna herramienta coincide con tu busqueda.",
    hint: "Presiona Enter para abrir el primer resultado",
  },
  br: {
    placeholder: "Buscar ferramentas (ex. unir, comprimir, OCR)...",
    noResults: "Nenhuma ferramenta corresponde a sua busca.",
    hint: "Pressione Enter para abrir o primeiro resultado",
  },
}

export function DashboardSearch({ locale }: DashboardSearchProps) {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const copy = COPY[locale]

  const results = useMemo(() => searchDashboardTools(query, locale, 8), [query, locale])
  const showPanel = query.trim().length > 0

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && results.length > 0) {
      e.preventDefault()
      router.push(results[0][locale].href)
    } else if (e.key === "Escape") {
      setQuery("")
    }
  }

  return (
    <div className="mb-8">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={copy.placeholder}
          aria-label={copy.placeholder}
          className="w-full h-12 pl-11 pr-10 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#14D8C4] focus:border-[#14D8C4] transition-colors"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {showPanel && (
        <div className="mt-3 rounded-xl border border-white/10 bg-[#13152A]/60 backdrop-blur-sm p-3">
          {results.length === 0 ? (
            <p className="text-sm text-slate-400 px-2 py-3">{copy.noResults}</p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {results.map((tool, idx) => {
                  const Icon = tool.icon
                  const info = tool[locale]
                  return (
                    <Link
                      key={tool.id}
                      href={info.href}
                      className="group flex items-center gap-3 rounded-lg border border-white/5 p-3 hover:border-[#14D8C4]/40 hover:bg-white/[0.04] transition-all duration-150"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#14D8C4]/20 to-[#14D8C4]/5 border border-[#14D8C4]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="h-4 w-4 text-[#14D8C4]" />
                      </div>
                      <span className="text-sm font-medium text-slate-200 group-hover:text-white truncate">
                        {info.label}
                      </span>
                      {idx === 0 && (
                        <span className="ml-auto text-[10px] font-bold uppercase tracking-wider text-[#14D8C4]/80 shrink-0">
                          ↵
                        </span>
                      )}
                    </Link>
                  )
                })}
              </div>
              <p className="mt-2 text-[11px] text-slate-500 px-1">{copy.hint}</p>
            </>
          )}
        </div>
      )}
    </div>
  )
}
