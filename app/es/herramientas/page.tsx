import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { FeaturesGridEs } from "@/components/features-grid-es"
import { Wrench } from "lucide-react"

export default function HerramientasPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        {/* Hero Section */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Wrench className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Todas las Herramientas PDF</h1>
              <p className="text-xl text-slate-300">
                Colección completa de herramientas para PDF. Convierte, edita, comprime y organiza tus documentos.
              </p>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <FeaturesGridEs />
      </main>
      <FooterEs />
    </div>
  )
}
