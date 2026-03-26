import Script from "next/script"
import Link from "next/link"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { TableExtractionInterface } from "@/components/table-extraction-interface"
import { FileSpreadsheet, Zap, Shield, Download } from "lucide-react"

export const metadata = {
  title: "Extraccion de Tablas de Alto Volumen — 2,000 Paginas/Mes a Excel | PDF.it",
  description:
    "Extrae hasta 2,000 paginas de tablas al mes de PDFs a hojas de calculo Excel. Disenado para bufetes de abogados, equipos contables, laboratorios y organizaciones con grandes volumenes de datos. Funcion Enterprise de PDF.it.",
  alternates: {
    canonical: "https://pdf.it.com/es/extraccion-tablas-alto-volumen",
    languages: {
      "en": "https://pdf.it.com/high-volume-table-extraction",
      "es": "https://pdf.it.com/es/extraccion-tablas-alto-volumen",
      "pt-BR": "https://pdf.it.com/br/extracao-tabelas-alto-volume",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Que es la Extraccion de Tablas de Alto Volumen?",
      "acceptedAnswer": { "@type": "Answer", "text": "Es la version Enterprise de Extraccion de Tablas con un limite mensual de 2,000 paginas en lugar de 200. El mismo motor de extraccion preciso, pero disenado para equipos que procesan documentos a gran escala." }
    },
    {
      "@type": "Question",
      "name": "En que se diferencia de la Extraccion de Tablas normal?",
      "acceptedAnswer": { "@type": "Answer", "text": "La Extraccion de Tablas normal (Business, $13.99/mes) permite 200 paginas al mes. Alto Volumen (Enterprise, $49.99/mes) permite 2,000 paginas al mes con procesamiento prioritario y soporte dedicado." }
    },
    {
      "@type": "Question",
      "name": "Que tipos de tablas se pueden extraer?",
      "acceptedAnswer": { "@type": "Answer", "text": "Tablas financieras, facturas, documentos legales, resultados de laboratorio, informes de cumplimiento — cualquier PDF con datos tabulares estructurados. La herramienta detecta filas, columnas y limites de celdas automaticamente." }
    },
    {
      "@type": "Question",
      "name": "Funciona con PDFs escaneados?",
      "acceptedAnswer": { "@type": "Answer", "text": "Para PDFs escaneados, primero pasalos por nuestro Escaner OCR para convertir imagenes a texto buscable, y luego extrae las tablas." }
    },
    {
      "@type": "Question",
      "name": "Se almacenan mis datos?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Los archivos se procesan y eliminan inmediatamente despues de tu sesion. Nunca almacenamos ni compartimos tus documentos." }
    },
    {
      "@type": "Question",
      "name": "En que formato es la salida?",
      "acceptedAnswer": { "@type": "Answer", "text": "Las tablas se exportan como archivos Excel (.xlsx) que puedes abrir en Microsoft Excel, Google Sheets o cualquier aplicacion de hojas de calculo compatible." }
    },
  ]
}

export default function ExtraccionTablasAltoVolumenPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extraccion de Tablas de Alto Volumen</h1>
              <p className="text-xl text-slate-300 mb-8">
                Extrae hasta 2,000 paginas de tablas al mes de PDFs a Excel. Disenado para bufetes de abogados, equipos contables, laboratorios de investigacion y organizaciones con grandes volumenes de documentos.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><FileSpreadsheet className="h-4 w-4 text-[#14D8C4]" /><span>2,000 Paginas/Mes</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Procesamiento Prioritario</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Funcion Enterprise</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              La Extraccion de Tablas estandar (Business) maneja hasta 200 paginas al mes. La Extraccion de Tablas de Alto Volumen esta disenada para equipos Enterprise que procesan miles de paginas — informes financieros, archivos legales, resultados de laboratorio y documentos de cumplimiento. Extrae datos tabulares estructurados de PDFs a Excel a gran escala con procesamiento prioritario.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">{"\u2713"} 2,000 paginas de extraccion de tablas al mes</li>
              <li className="flex items-center gap-2">{"\u2713"} Cola de procesamiento prioritario</li>
              <li className="flex items-center gap-2">{"\u2713"} El mismo motor preciso de deteccion de tablas</li>
              <li className="flex items-center gap-2">{"\u2713"} Soporte dedicado por correo electronico</li>
            </ul>
          </div>
        </section>

        {/* Table Extraction Interface */}
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
                { title: "Bufetes de Abogados y Equipos Legales", desc: "Procesa documentos de descubrimiento, archivos judiciales y tablas de contratos en volumen. Extrae datos estructurados de cientos de PDFs legales al mes sin transcripcion manual." },
                { title: "Contabilidad y Finanzas", desc: "Extrae tablas financieras de informes anuales, documentos fiscales y facturas a gran escala. Alimenta los datos extraidos directamente en tus hojas de calculo y software contable." },
                { title: "Laboratorios e Informes de Cumplimiento", desc: "Extrae tablas de datos experimentales, informes de cumplimiento y archivos regulatorios. Maneja grandes lotes de documentos cientificos y regulatorios de manera eficiente." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Funciona</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Sube tu PDF", desc: "Arrastra y suelta tu archivo" },
                { num: "2", title: "Tablas auto-detectadas", desc: "La IA identifica estructuras de tablas" },
                { num: "3", title: "Descarga Excel", desc: "Obtiene tus datos en una hoja de calculo" },
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
                { name: "Extraccion de Tablas", href: "/es/extraccion-de-tablas", desc: "200 paginas/mes — Business" },
                { name: "PDF a Excel", href: "/es/pdf-a-excel", desc: "Convierte PDFs completos a Excel" },
                { name: "Escaner OCR", href: "/es/escaner-ocr", desc: "Haz PDFs escaneados buscables primero" },
                { name: "Automatizacion", href: "/es/automatizacion", desc: "Encadena herramientas PDF juntas" },
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
                { q: "Que es la Extraccion de Tablas de Alto Volumen?", a: "Es la version Enterprise de Extraccion de Tablas con un limite mensual de 2,000 paginas en lugar de 200. El mismo motor de extraccion preciso, pero disenado para equipos que procesan documentos a gran escala." },
                { q: "En que se diferencia de la Extraccion de Tablas normal?", a: "La Extraccion de Tablas normal (Business, $13.99/mes) permite 200 paginas al mes. Alto Volumen (Enterprise, $49.99/mes) permite 2,000 paginas al mes con procesamiento prioritario y soporte dedicado." },
                { q: "Que tipos de tablas se pueden extraer?", a: "Tablas financieras, facturas, documentos legales, resultados de laboratorio, informes de cumplimiento — cualquier PDF con datos tabulares estructurados. La herramienta detecta filas, columnas y limites de celdas automaticamente." },
                { q: "Funciona con PDFs escaneados?", a: "Para PDFs escaneados, primero pasalos por nuestro Escaner OCR para convertir imagenes a texto buscable, y luego extrae las tablas." },
                { q: "Se almacenan mis datos?", a: "No. Los archivos se procesan y eliminan inmediatamente despues de tu sesion. Nunca almacenamos ni compartimos tus documentos." },
                { q: "En que formato es la salida?", a: "Las tablas se exportan como archivos Excel (.xlsx) que puedes abrir en Microsoft Excel, Google Sheets o cualquier aplicacion de hojas de calculo compatible." },
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

        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </main>
      <FooterEs />
    </div>
  )
}
