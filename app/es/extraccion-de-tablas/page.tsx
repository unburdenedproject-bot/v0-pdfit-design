import Script from "next/script"
import Link from "next/link"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { TableExtractionInterface } from "@/components/table-extraction-interface"
import { FileSpreadsheet, Zap, Shield } from "lucide-react"

export const metadata = {
  title: "Extraccion de Tablas — Extraer Tablas de PDF a Excel | PDF.it",
  description:
    "Extrae tablas de documentos PDF y conviertelas en hojas de calculo Excel. Detecta automaticamente datos tabulares de reportes financieros, facturas y documentos de investigacion. 200 paginas/mes en el plan Business.",
  alternates: {
    canonical: "https://pdf.it.com/es/extraccion-de-tablas",
    languages: {
      "en": "https://pdf.it.com/table-extraction",
      "es": "https://pdf.it.com/es/extraccion-de-tablas",
      "pt-BR": "https://pdf.it.com/br/extracao-de-tabelas",
    },
  },
}

const faqs = [
  { q: "¿Que es la Extraccion de Tablas?", a: "Detecta automaticamente tablas dentro de PDFs y las convierte en hojas de calculo Excel editables. Funciona con reportes financieros, facturas, datos cientificos y cualquier PDF con datos tabulares." },
  { q: "¿Cuantas paginas puedo extraer por mes?", a: "El plan Business ($13.99/mes) incluye 200 paginas por mes. Para mayor volumen, Enterprise ($49.99/mes) ofrece 2,000 paginas por mes con procesamiento prioritario." },
  { q: "¿Que tipos de tablas se pueden extraer?", a: "Tablas con bordes visibles, tablas sin bordes, tablas de varias paginas y tablas con encabezados combinados. Funciona mejor con tablas estructuradas y limpias." },
  { q: "¿Puedo extraer tablas de PDFs escaneados?", a: "Para mejores resultados, primero ejecute OCR usando nuestra herramienta Scanner OCR, luego use la Extraccion de Tablas en el PDF procesado." },
  { q: "¿En que formato es la salida?", a: "Las tablas se exportan como archivos Excel (.xlsx) compatibles con Microsoft Excel, Google Sheets y LibreOffice Calc." },
  { q: "¿La Extraccion de Tablas es gratis?", a: "La Extraccion de Tablas es una funcion del plan Business a $13.99/mes con 200 paginas/mes. Incluye todas las demas herramientas Business como Comparar PDF, Firma Electronica y Redaccion de PDF." },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": { "@type": "Answer", "text": faq.a },
  })),
}

export default function TableExtractionPageEs() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
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
                <FileSpreadsheet className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extraccion de Tablas de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Extrae tablas de documentos PDF y conviertelas en hojas de calculo Excel editables. Detecta automaticamente datos tabulares de reportes financieros, facturas y documentos de investigacion. 200 paginas/mes en el plan Business.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><FileSpreadsheet className="h-4 w-4 text-[#14D8C4]" /><span>Deteccion Automatica</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Exportacion a Excel</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>200 Paginas/Mes</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Los PDFs bloquean tus datos dentro de paginas estaticas. Cuando necesitas numeros de un reporte financiero, partidas de una factura o datos de investigacion de un documento, copiar celda por celda es lento y propenso a errores. La Extraccion de Tablas usa IA para detectar y extraer tablas automaticamente de cualquier PDF, entregando hojas de calculo Excel limpias listas para analisis. El plan Business incluye 200 paginas por mes — ¿necesitas mas? Actualiza a Enterprise para 2,000 paginas/mes.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Detecta tablas con filas, columnas y celdas</li>
              <li className="flex items-center gap-2">✓ Exporta a Excel (.xlsx) para edicion y analisis</li>
              <li className="flex items-center gap-2">✓ 200 paginas/mes en el plan Business</li>
              <li className="flex items-center gap-2">✓ ¿Necesitas mas? Enterprise ofrece 2,000 paginas/mes</li>
            </ul>
          </div>
        </section>

        {/* Interface */}
        <TableExtractionInterface />

        {/* Feature Blocks */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Reportes Financieros y Facturas", desc: "Extrae estados financieros, balances generales y partidas de facturas directamente a Excel para analisis, modelado y contabilidad." },
                { title: "Datos de Investigacion y Regulatorios", desc: "Extrae tablas de datos de articulos cientificos, reportes de mercado y documentos gubernamentales en hojas de calculo estructuradas para tu propio analisis." },
                { title: "200 Paginas/Mes — Escala con Enterprise", desc: "El plan Business incluye 200 paginas de extraccion de tablas por mes. Para necesidades de alto volumen, Enterprise ofrece 2,000 paginas/mes con procesamiento prioritario." },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <div
                    className="rounded-[11px] p-6 h-full"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                        rgba(255, 255, 255, 0.07)
                      `,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Extraer Tablas de PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Sube tu PDF", desc: "Arrastra y suelta tu archivo" },
                { num: "2", title: "Tablas detectadas", desc: "La IA identifica las estructuras de tablas" },
                { num: "3", title: "Descarga el Excel", desc: "Obtiene tus datos en una hoja de calculo" },
              ].map((step) => (
                <div key={step.num} className="flex-1">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{
                      background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                      boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)",
                      border: "1px solid rgba(20,216,196,0.25)",
                    }}
                  >
                    <span className="text-[#14D8C4] font-black text-lg">{step.num}</span>
                  </div>
                  <p className="font-semibold text-slate-900">{step.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Extraccion de Tablas Alto Volumen", href: "/es/extraccion-tablas-alto-volumen", desc: "2,000 paginas/mes — Enterprise" },
                { name: "PDF a Excel", href: "/es/pdf-a-excel", desc: "Convierte PDFs completos a Excel" },
                { name: "Scanner OCR", href: "/es/escaner-ocr", desc: "Haz PDFs escaneados buscables primero" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamano del archivo" },
              ].map((tool) => (
                <div
                  key={tool.href}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <Link
                    href={tool.href}
                    className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                        rgba(255, 255, 255, 0.07)
                      `,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%),
              radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%),
              radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Schema */}
        <Script
          id="faq-schema-es"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </main>
      <FooterEs />
    </div>
  )
}
