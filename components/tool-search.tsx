"use client"

import { useEffect, useState } from "react"
import { Search, X } from "lucide-react"

interface ToolSearchProps {
  onSearch: (query: string) => void
  onFilterTier: (tier: string | null) => void
  activeTier: string | null
  initialQuery?: string
}

export function ToolSearch({ onSearch, onFilterTier, activeTier, initialQuery = "" }: ToolSearchProps) {
  const [query, setQuery] = useState(initialQuery)

  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery)
      onSearch(initialQuery)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuery])

  const handleChange = (value: string) => {
    setQuery(value)
    onSearch(value)
  }

  const tiers = [
    { id: null, label: "All Tools" },
    { id: "FREE", label: "Free" },
    { id: "PRO", label: "Pro" },
    { id: "BUSINESS", label: "Business" },
  ]

  return (
    <div className="max-w-2xl mx-auto mb-8">
      {/* Search input */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
        <input
          type="text"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search tools... (e.g., compress, merge, convert to word)"
          className="w-full pl-12 pr-10 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#14D8C4] focus:border-transparent text-sm"
        />
        {query && (
          <button
            onClick={() => handleChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Tier filter pills */}
      <div className="flex flex-wrap justify-center gap-2">
        {tiers.map((tier) => (
          <button
            key={tier.id || "all"}
            onClick={() => onFilterTier(tier.id)}
            className="px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200"
            style={{
              background: activeTier === tier.id
                ? "linear-gradient(135deg, #14D8C4, #0FBFB0)"
                : "rgba(255,255,255,0.06)",
              color: activeTier === tier.id ? "#0E0F1E" : "#94A3B8",
              border: `1px solid ${activeTier === tier.id ? "rgba(20,216,196,0.5)" : "rgba(255,255,255,0.1)"}`,
            }}
          >
            {tier.label}
          </button>
        ))}
      </div>
    </div>
  )
}
