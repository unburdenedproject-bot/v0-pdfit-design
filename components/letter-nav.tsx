"use client"

import { useState, useEffect } from "react"

interface LetterNavProps {
  letters: string[]
}

export function LetterNav({ letters }: LetterNavProps) {
  const [activeLetter, setActiveLetter] = useState<string | null>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    letters.forEach((letter) => {
      const el = document.getElementById(`letter-${letter}`)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveLetter(letter)
            }
          })
        },
        { rootMargin: "-20% 0px -70% 0px" }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [letters])

  return (
    <nav
      className="sticky top-16 z-10"
      style={{
        background: "rgba(14,15,30,0.9)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-0.5 py-3 justify-center">
          {letters.map((letter) => (
            <a
              key={letter}
              href={`#letter-${letter}`}
              className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-black transition-all duration-200 ${
                activeLetter === letter
                  ? "text-[#14D8C4] bg-white/10"
                  : "hover:text-[#14D8C4] hover:bg-white/5"
              }`}
              style={{
                color: activeLetter === letter ? "#14D8C4" : "rgba(165,180,252,0.5)",
              }}
            >
              {letter}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
