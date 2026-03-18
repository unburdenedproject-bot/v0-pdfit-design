"use client"

import { useEffect } from "react"

export function ScrollToTools() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash === "#tools") {
      setTimeout(() => {
        const toolsSection = document.getElementById("tools")
        if (toolsSection) {
          const headerHeight = 64
          const elementPosition = toolsSection.offsetTop
          const offsetPosition = elementPosition - headerHeight
          window.scrollTo({ top: offsetPosition, behavior: "smooth" })
        }
      }, 100)
    }
  }, [])

  return null
}
