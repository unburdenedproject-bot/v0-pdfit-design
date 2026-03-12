import { HeaderPt } from "@/components/header-pt"
import { FooterPt } from "@/components/footer-pt"
import { FeaturesGridPt } from "@/components/features-grid-pt"
import { Wrench } from "lucide-react"

export default function FerramentasPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderPt />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Wrench className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Todas as Ferramentas PDF</h1>
              <p className="text-xl text-slate-300">
                Colecao completa de ferramentas para PDF. Converta, edite, comprima e organize seus documentos.
              </p>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <FeaturesGridPt />
      </main>
      <FooterPt />
    </div>
  )
}
