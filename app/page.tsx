import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesGrid } from "@/components/features-grid"
import { TrustSection } from "@/components/trust-section"
import { ComprehensiveFAQSection } from "@/components/comprehensive-faq-section"
import { Footer } from "@/components/footer"
import { ScrollToTools } from "@/components/scroll-to-tools"

export default function HomePage() {
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
      <ScrollToTools />
    </div>
  )
}
