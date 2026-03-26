import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { FileSpreadsheet, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extraer Tablas de PDF — Convierte Tablas PDF a Excel | PDF.it",
  description:
    "Extrae tablas de archivos PDF y conviértelas a hojas de cálculo Excel. PDF.it ofrece dos opciones: PDF a Excel (Pro) para extracción básica, y Extracción de Tablas (Business) para exportación avanzada de datos estructurados.",
  alternates: {
    canonical: "https://pdf.it.com/es/extraer-tablas-de-pdf",
    languages: {
      en: "https://pdf.it.com/extract-tables-from-pdf",
      es: "https://pdf.it.com/es/extraer-tablas-de-pdf",
      pt: "https://pdf.it.com/br/extrair-tabelas-de-pdf",
    },
  },
}

export default function ExtraerTablasDePDFPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extraer Tablas de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Extrae datos tabulares de archivos PDF y conviértelos en hojas de cálculo Excel para edición, análisis y reportes.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Detección Precisa de Tablas</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Exportar a Excel</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Los PDFs encierran tus datos en páginas estáticas. Cuando necesitas analizar tablas financieras, actualizar listas de precios o importar datos de facturas, reescribir manualmente desperdicia horas. PDF.it extrae tablas de PDFs y las convierte en archivos Excel editables — elige PDF a Excel (Pro) para extracción básica o Extracción de Tablas (Business) para datos estructurados avanzados.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Extrae tablas con filas, columnas y celdas intactas</li>
              <li className="flex items-center gap-2">✓ Funciona con reportes financieros, facturas y hojas de datos</li>
              <li className="flex items-center gap-2">✓ Exporta a Excel (.xlsx) para edición y análisis</li>
              <li className="flex items-center gap-2">✓ Sin instalación — extrae tablas en tu navegador</li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/es/pdf-a-excel" className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">PDF a Excel (Pro)</Link>
              <Link href="/es/extraccion-de-tablas" className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-colors">Extracción de Tablas (Business)</Link>
            </div>
          </div>
        </section>

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
                { title: "Tablas Financieras y Reportes", desc: "Extrae números de reportes anuales, estados de resultados y balances para tus modelos financieros." },
                { title: "Datos de Investigación y Encuestas", desc: "Extrae tablas de artículos de investigación, reportes de mercado y encuestas a Excel para análisis." },
                { title: "Líneas de Facturas", desc: "Extrae datos de facturas con cantidades y totales para contabilidad y software financiero." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Cómo Extraer Tablas de un PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Sube tu PDF", desc: "Arrastra y suelta tu archivo" },
                { num: "2", title: "Elige el método de extracción", desc: "PDF a Excel o Extracción de Tablas" },
                { num: "3", title: "Descarga el archivo Excel", desc: "Obtén tus datos en una hoja de cálculo" },
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
                { name: "PDF a Excel", href: "/es/pdf-a-excel", desc: "Convierte PDFs a Excel" },
                { name: "Extracción de Tablas", href: "/es/extraccion-de-tablas", desc: "Exportación avanzada de datos" },
                { name: "Escáner OCR", href: "/es/escaner-ocr", desc: "Texto de PDFs escaneados" },
                { name: "PDF a TXT", href: "/es/pdf-a-texto", desc: "Extrae texto de PDFs" },
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
              {[
                { q: "¿Qué tan precisa es la extracción de tablas de PDFs?", a: "PDF.it usa análisis avanzado para detectar estructuras de tablas, bordes y alineación de celdas. La precisión depende del PDF — tablas bien estructuradas con bordes claros se extraen con alta fidelidad, mientras que tablas escaneadas pueden necesitar OCR primero." },
                { q: "¿En qué formatos puedo exportar las tablas extraídas?", a: "Con PDF a Excel (Pro), obtienes archivos .xlsx. Con Extracción de Tablas (Business), puedes exportar datos estructurados a Excel, CSV y otros formatos aptos para bases de datos y herramientas de análisis." },
                { q: "¿Puedo extraer tablas de PDFs escaneados?", a: "Para PDFs escaneados, pásalos primero por el Escáner OCR de PDF.it para convertir imágenes a texto, y luego extrae las tablas. Este proceso de dos pasos funciona bien para la mayoría de los documentos escaneados." },
                { q: "¿Cuál es la diferencia entre Pro y Business para extracción de tablas?", a: "Pro incluye conversión de PDF a Excel, que funciona bien para extracción básica de tablas. Business incluye Extracción de Tablas avanzada con mejor detección de estructura, soporte multi-tabla y exportación directa a múltiples formatos." },
                { q: "¿Puedo extraer múltiples tablas de un solo PDF?", a: "Sí. Tanto PDF a Excel como Extracción de Tablas pueden manejar múltiples tablas en diferentes páginas. La Extracción de Tablas del nivel Business es mejor separando tablas distintas en la misma página." },
                { q: "¿La extracción de tablas conserva el formato como celdas combinadas?", a: "PDF.it conserva la estructura de celdas, alineación de columnas y tipos de datos. El formato complejo como celdas combinadas se maneja mejor con la herramienta de Extracción de Tablas del nivel Business, que usa análisis de diseño avanzado." },
              ].map((faq, i) => (
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
        <Script id="faq-schema-es" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "¿Qué tan precisa es la extracción de tablas de PDFs?", "acceptedAnswer": { "@type": "Answer", "text": "PDF.it usa análisis avanzado para detectar estructuras de tablas, bordes y alineación de celdas. La precisión depende del PDF — tablas bien estructuradas con bordes claros se extraen con alta fidelidad, mientras que tablas escaneadas pueden necesitar OCR primero." } },
            { "@type": "Question", "name": "¿En qué formatos puedo exportar las tablas extraídas?", "acceptedAnswer": { "@type": "Answer", "text": "Con PDF a Excel (Pro), obtienes archivos .xlsx. Con Extracción de Tablas (Business), puedes exportar datos estructurados a Excel, CSV y otros formatos aptos para bases de datos y herramientas de análisis." } },
            { "@type": "Question", "name": "¿Puedo extraer tablas de PDFs escaneados?", "acceptedAnswer": { "@type": "Answer", "text": "Para PDFs escaneados, pásalos primero por el Escáner OCR de PDF.it para convertir imágenes a texto, y luego extrae las tablas. Este proceso de dos pasos funciona bien para la mayoría de los documentos escaneados." } },
            { "@type": "Question", "name": "¿Cuál es la diferencia entre Pro y Business para extracción de tablas?", "acceptedAnswer": { "@type": "Answer", "text": "Pro incluye conversión de PDF a Excel, que funciona bien para extracción básica de tablas. Business incluye Extracción de Tablas avanzada con mejor detección de estructura, soporte multi-tabla y exportación directa a múltiples formatos." } },
            { "@type": "Question", "name": "¿Puedo extraer múltiples tablas de un solo PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Tanto PDF a Excel como Extracción de Tablas pueden manejar múltiples tablas en diferentes páginas. La Extracción de Tablas del nivel Business es mejor separando tablas distintas en la misma página." } },
            { "@type": "Question", "name": "¿La extracción de tablas conserva el formato como celdas combinadas?", "acceptedAnswer": { "@type": "Answer", "text": "PDF.it conserva la estructura de celdas, alineación de columnas y tipos de datos. El formato complejo como celdas combinadas se maneja mejor con la herramienta de Extracción de Tablas del nivel Business, que usa análisis de diseño avanzado." } },
          ]
        })}} />
      </main>
      <FooterEs />
    </div>
  )
}
