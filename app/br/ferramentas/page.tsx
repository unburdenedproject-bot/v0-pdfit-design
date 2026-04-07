import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { FeaturesGridBr } from "@/components/features-grid-br"
import { Wrench } from "lucide-react"

export const metadata = {
  title: "Todas as Ferramentas PDF — Converter, Editar, Comprimir | PDF.it",
  description:
    "Colecao completa de ferramentas para PDF. Converta, edite, comprima e organize seus documentos — tudo online e gratis.",
  alternates: {
    languages: {
      en: "/tools",
      es: "/es/herramientas",
      pt: "/br/ferramentas",
    },
  },
}

export default function FerramentasPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        {/* Hero */}
        <section
          className="text-white py-16 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%),
              #0E0F1E
            `,
          }}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
            <filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#heroGrain)" />
          </svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                  boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)",
                }}
              >
                <Wrench className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Todas as Ferramentas PDF</h1>
              <p className="text-xl text-slate-300">
                Colecao completa de ferramentas para PDF. Converta, edite, comprima e organize seus documentos.
              </p>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <FeaturesGridBr />
      </main>
      <FooterBr />
    </div>
  )
}
