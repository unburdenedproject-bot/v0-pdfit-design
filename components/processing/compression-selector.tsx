"use client"

import { cn } from "@/lib/utils"

interface CompressionSelectorProps {
  selected: string
  onChange: (level: string) => void
}

export function CompressionSelector({ selected, onChange }: CompressionSelectorProps) {
  return (
    <div>
      <h3 className="text-lg font-bold text-slate-900 mb-3">Compression Level:</h3>
      <div className="grid grid-cols-3 gap-3">
        {[
          { value: "low", label: "Light", desc: "Smaller reduction, best quality" },
          { value: "recommended", label: "Medium", desc: "Balanced size and quality" },
          { value: "extreme", label: "Extreme", desc: "Maximum compression" },
        ].map((level) => (
          <button
            key={level.value}
            type="button"
            onClick={() => onChange(level.value)}
            className={cn(
              "flex flex-col items-center gap-1 rounded-xl border-2 p-4 transition-all",
              selected === level.value
                ? "border-[#14D8C4] bg-[#F0FDFA] shadow-sm"
                : "border-gray-200 hover:border-[#14D8C4]/30 hover:bg-gray-50"
            )}
          >
            <span className={cn(
              "font-bold text-sm",
              selected === level.value ? "text-[#0FBFB0]" : "text-slate-700"
            )}>
              {level.label}
            </span>
            <span className="text-xs text-slate-500 text-center">{level.desc}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
