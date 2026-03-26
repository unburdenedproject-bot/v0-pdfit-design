import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Table, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Convertir Excel a PDF Online — XLSX a PDF Gratis | PDF.it",
  description:
    "Convierte Excel a PDF en segundos con PDF.it. Transforma hojas de calculo XLS o XLSX en un PDF limpio y listo para compartir — rapido, facil y desde tu navegador.",
  alternates: {
    canonical: "https://pdf.it.com/es/excel-a-pdf",
    languages: {
      en: "https://pdf.it.com/excel-to-pdf",
      es: "https://pdf.it.com/es/excel-a-pdf",
      pt: "https://pdf.it.com/br/excel-para-pdf",
    },
  },
}

export default function ExcelaPDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        {/* Hero Section */}
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
                <Table className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir Excel a PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convierte XLS/XLSX a PDF con PDF.it — ideal para compartir reportes, facturas y hojas de calculo en un formato consistente y listo para imprimir.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#14D8C4]" />
                  <span>Tablas Preservadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#14D8C4]" />
                  <span>Archivos Eliminados Tras la Sesion</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-[#14D8C4]" />
                  <span>XLS y XLSX Soportados</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Usa el convertidor de Excel a PDF de PDF.it para transformar una hoja de calculo XLS o XLSX en un PDF que puedes compartir con cualquier persona. Ideal para reportes, impresion, envio por correo y entrega de archivos — convierte en segundos y descarga tu PDF al instante.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Convierte Excel a PDF online en segundos</li>
              <li className="flex items-center gap-2">✓ Soporta hojas de calculo .xls y .xlsx</li>
              <li className="flex items-center gap-2">✓ Crea PDFs listos para compartir, imprimir y enviar por correo</li>
              <li className="flex items-center gap-2">✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li className="flex items-center gap-2">✓ Sin instalacion — conversion desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          requiresPlan="pro"
          acceptedFiles=".xls,.xlsx"
          toolName="Excel to PDF"
          outputFormat="PDF"
          processingMessage="Converting your spreadsheet..."
          successMessage="Your PDF is ready!"
        />

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
                { title: "Exporta XLSX a PDF para Compartir Facilmente", desc: "PDF es la forma mas sencilla de compartir hojas de calculo sin sorpresas de diseno. Convierte Excel a PDF para que los destinatarios lo vean de manera consistente — sin necesitar Excel." },
                { title: "PDFs Listos para Imprimir para Reportes y Facturas", desc: "Transforma hojas de calculo en PDFs que son mas faciles de imprimir, adjuntar a correos o subir a portales para contabilidad, escuela y trabajo." },
                { title: "Mantiene las Tablas Legibles", desc: "PDF.it convierte tus hojas en un PDF optimizado para visualizacion e impresion estandar, manteniendo tus datos claros y organizados." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Convertir Excel a PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Sube tu hoja de calculo", desc: "Arrastra o haz clic para elegir un archivo" },
                { num: "2", title: "Haz clic en Convertir", desc: "El procesamiento toma solo segundos" },
                { num: "3", title: "Descarga tu PDF", desc: "Obtiene un PDF listo para imprimir" },
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
                { name: "Word a PDF", href: "/es/word-a-pdf", desc: "Convierte documentos Word a PDF" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamano del PDF" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina varios PDFs en uno" },
                { name: "PowerPoint a PDF", href: "/es/powerpoint-a-pdf", desc: "Convierte presentaciones a PDF" },
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
                { q: "¿PDF.it puede convertir tanto XLS como XLSX a PDF?", a: "Si. PDF.it soporta ambos formatos de archivo .xls y .xlsx." },
                { q: "¿El formato de mi Excel se mantendra en el PDF?", a: "En la mayoria de los casos, si. Hojas de calculo complejas con columnas muy anchas o fuentes personalizadas pueden verse ligeramente diferentes segun el archivo." },
                { q: "¿Por que las columnas se cortan en mi conversion de Excel a PDF?", a: "Esto generalmente ocurre cuando la hoja es mas ancha que la pagina PDF. Intenta usar un diseno de impresion ajustado a la pagina en Excel antes de subir el archivo." },
                { q: "¿Puedo convertir Excel a PDF en mi celular?", a: "Si. PDF.it funciona en navegadores moviles — sube el archivo XLSX y descarga el PDF." },
                { q: "¿Es seguro subir mi archivo Excel?", a: "Si. Todas las transferencias estan cifradas con SSL y tus archivos se eliminan inmediatamente despues de tu sesion. Nunca almacenamos ni compartimos tus documentos." },
                { q: "¿Cual es el tamano maximo de archivo que puedo convertir?", a: "Las cuentas Pro y Business pueden subir archivos de hasta 200MB." },
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

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "¿PDF.it puede convertir tanto XLS como XLSX a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it soporta ambos formatos de archivo .xls y .xlsx." } },
            { "@type": "Question", "name": "¿El formato de mi Excel se mantendra en el PDF?", "acceptedAnswer": { "@type": "Answer", "text": "En la mayoria de los casos, si. Hojas de calculo complejas con columnas muy anchas o fuentes personalizadas pueden verse ligeramente diferentes segun el archivo." } },
            { "@type": "Question", "name": "¿Por que las columnas se cortan en mi conversion de Excel a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Esto generalmente ocurre cuando la hoja es mas ancha que la pagina PDF. Intenta usar un diseno de impresion ajustado a la pagina en Excel antes de subir el archivo." } },
            { "@type": "Question", "name": "¿Puedo convertir Excel a PDF en mi celular?", "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it funciona en navegadores moviles — sube el archivo XLSX y descarga el PDF." } },
            { "@type": "Question", "name": "¿Es seguro subir mi archivo Excel?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Todas las transferencias estan cifradas con SSL y tus archivos se eliminan inmediatamente despues de tu sesion. Nunca almacenamos ni compartimos tus documentos." } },
            { "@type": "Question", "name": "¿Cual es el tamano maximo de archivo que puedo convertir?", "acceptedAnswer": { "@type": "Answer", "text": "Las cuentas Pro y Business pueden subir archivos de hasta 200MB." } }
          ]
        })}} />
      </main>
      <FooterEs />
    </div>
  )
}
