import Script from "next/script"
import Link from "next/link"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileSpreadsheet, Zap, Shield, Download, Crown } from "lucide-react"

export const metadata = {
  title: "Convertir PDF a Excel Online — Extraer Tablas de PDF | PDF.it",
  description:
    "Convierte PDF a Excel con PDF.it. Extrae tablas y datos de tus archivos PDF en hojas de calculo .xlsx editables — rapido, seguro y desde tu navegador.",
  alternates: {
    canonical: "https://pdf.it.com/es/pdf-a-excel",
    languages: {
      en: "https://pdf.it.com/pdf-to-excel",
      es: "https://pdf.it.com/es/pdf-a-excel",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Como convierto un PDF a Excel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sube tu PDF a PDF.it, haz clic en Convertir y descarga tu hoja de calculo Excel.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los datos de las tablas se extraen con precision?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PDF.it extrae tablas y datos estructurados con la mayor precision posible. Los resultados pueden variar dependiendo de como fue creado el PDF original.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo convertir un PDF escaneado a Excel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los PDFs escaneados requieren OCR para extraer texto y tablas. Usa primero la herramienta de Escaner OCR de PDF.it y luego convierte a Excel.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo convertir PDF a Excel desde mi celular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. PDF.it funciona en navegadores moviles — sube, convierte y descarga desde iPhone o Android.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es seguro subir mi PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. Todas las transferencias estan cifradas con SSL y tus archivos se eliminan inmediatamente despues de tu sesion. Nunca almacenamos ni compartimos tus documentos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cual es el tamano maximo de archivo que puedo convertir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las cuentas gratuitas pueden subir archivos de hasta 25MB. Las cuentas Pro y Business pueden subir archivos de hasta 200MB.",
      },
    },
  ],
}

export default function PDFaExcelPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderEs />
      <main>
        {/* Hero Section */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileSpreadsheet className="h-10 w-10 text-white" />
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl lg:text-5xl font-black">Convertir PDF a Excel</h1>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <p className="text-xl text-slate-300 mb-8">
                Extrae datos de tus PDFs en hojas de calculo Excel. Perfecto para analisis de datos y reportes.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>Extraccion de Tablas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>Archivos Eliminados Tras la Sesion</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>Formato XLSX</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to Excel"
          outputFormat="XLSX"
          processingMessage="Converting your PDF to Excel..."
          successMessage="Your Excel file is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa la herramienta de PDF a Excel de PDF.it para extraer tablas y datos de archivos PDF en hojas de calculo editables. Sube tu PDF, convierte y descarga un archivo .xlsx listo para analizar — sin necesidad de instalar software.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convierte tablas y datos de PDF a hojas de calculo Excel</li>
              <li>✓ Ideal para reportes financieros, facturas y exportaciones de datos</li>
              <li>✓ Descarga un archivo .xlsx listo para abrir en Excel o Google Sheets</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalacion — convierte PDFs desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extrae Tablas de PDF con Precision</h2>
              <p className="text-slate-600">
                PDF.it detecta y extrae tablas de tus archivos PDF, convirtiendo filas y columnas en celdas de Excel que puedes editar, filtrar y analizar.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Ideal para Reportes Financieros y Facturas</h2>
              <p className="text-slate-600">
                Convierte estados de cuenta, facturas y reportes en hojas de calculo editables. Ahorra horas de trabajo manual copiando datos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Herramienta Pro para Profesionales</h2>
              <p className="text-slate-600">
                PDF a Excel es una funcion Pro. Actualiza tu plan para acceder a conversiones ilimitadas, archivos de hasta 200MB y procesamiento prioritario.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Convertir PDF a Excel</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Haz clic en Convertir PDF a Excel.",
                "Descarga tu archivo .xlsx y abrelo en Excel o Google Sheets.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
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
                { name: "PDF a Word", href: "/es/pdf-a-word", desc: "Convierte PDF a documento editable" },
                { name: "PDF a JPG", href: "/es/pdf-a-jpg", desc: "Convierte paginas a imagenes" },
                { name: "Escaner OCR", href: "/es/escaner-ocr", desc: "Extrae texto de PDFs escaneados" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamano antes de convertir" },
              ].map((tool) => (
                <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: "radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255,255,255,0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16" style={{ background: "radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-white mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {[
                { q: "¿Como convierto un PDF a Excel?", a: "Sube tu PDF a PDF.it, haz clic en Convertir y descarga tu hoja de calculo Excel." },
                { q: "¿Los datos de las tablas se extraen con precision?", a: "PDF.it extrae tablas y datos estructurados con la mayor precision posible. Los resultados pueden variar dependiendo de como fue creado el PDF original." },
                { q: "¿Puedo convertir un PDF escaneado a Excel?", a: "Los PDFs escaneados requieren OCR para extraer texto y tablas. Usa primero la herramienta de Escaner OCR de PDF.it y luego convierte a Excel." },
                { q: "¿Puedo convertir PDF a Excel desde mi celular?", a: "Si. PDF.it funciona en navegadores moviles — sube, convierte y descarga desde iPhone o Android." },
                { q: "¿Es seguro subir mi PDF?", a: "Si. Todas las transferencias estan cifradas con SSL y tus archivos se eliminan inmediatamente despues de tu sesion. Nunca almacenamos ni compartimos tus documentos." },
                { q: "¿Cual es el tamano maximo de archivo que puedo convertir?", a: "Las cuentas gratuitas pueden subir archivos de hasta 25MB. Las cuentas Pro y Business pueden subir archivos de hasta 200MB." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                  <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
