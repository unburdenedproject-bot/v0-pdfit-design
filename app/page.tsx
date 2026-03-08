"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesGrid } from "@/components/features-grid"
import { TrustSection } from "@/components/trust-section"
import { ComprehensiveFAQSection } from "@/components/comprehensive-faq-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Handle hash navigation when page loads
    const hash = window.location.hash
    if (hash === "#tools") {
      setTimeout(() => {
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
      }, 100) // Small delay to ensure page is fully loaded
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <TrustSection />
        <ComprehensiveFAQSection />
      </main>
      <Footer />
    </div>
  )
}
