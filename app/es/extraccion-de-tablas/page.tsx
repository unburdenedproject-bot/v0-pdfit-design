import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { FileSpreadsheet } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extracción de Tablas — Próximamente | OmnisPDF",
  description: "Extrae tablas de PDFs directamente a hojas de cálculo Excel. Próximamente en OmnisPDF Business.",
}

export default function TableExtractionPageEs() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderEs />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileSpreadsheet className="h-10 w-10 text-white" />
              </div>
              <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                Próximamente
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extracción de Tablas</h1>
              <p className="text-xl text-slate-300 mb-8">
                Extrae tablas de PDFs directamente a hojas de cálculo Excel. Esta herramienta es parte del plan Business de OmnisPDF y está actualmente en desarrollo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/es/precios"
                  className="inline-flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors"
                >
                  Ver Plan Business
                </Link>
                <Link
                  href="/es"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-xl text-lg transition-all border border-white/20"
                >
                  Volver a Herramientas
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
