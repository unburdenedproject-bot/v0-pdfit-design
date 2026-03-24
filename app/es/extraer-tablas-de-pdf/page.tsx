import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Table, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extraer Tablas de PDF — Convierte Tablas PDF a Excel | PDF.it",
  description:
    "Extrae tablas de archivos PDF y conviértelas a Excel con PDF.it. Obtén datos tabulares en formato de hoja de cálculo — rápido, desde tu navegador, sin registro.",
  alternates: {
    canonical: "https://pdf.it.com/es/extraer-tablas-de-pdf",
    languages: {
      en: "https://pdf.it.com/extract-tables-from-pdf",
      es: "https://pdf.it.com/es/extraer-tablas-de-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo extraigo tablas de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a PDF.it, haz clic en Extraer Tablas y descarga un archivo Excel con todas las tablas detectadas en tu documento, organizadas en hojas separadas." }
    },
    {
      "@type": "Question",
      "name": "¿En qué formato se extraen las tablas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Las tablas se extraen en formato XLSX (Excel). También puedes usar nuestra herramienta de Tabla PDF a CSV si prefieres formato CSV." }
    },
    {
      "@type": "Question",
      "name": "¿Funciona con tablas complejas?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it detecta tablas con filas, columnas y celdas combinadas. Para tablas muy complejas o con formato irregular, los resultados pueden variar." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo extraer tablas de un PDF escaneado?",
      "acceptedAnswer": { "@type": "Answer", "text": "Para PDFs escaneados, primero usa nuestro Escáner OCR para convertir las imágenes a texto, y luego extrae las tablas del resultado." }
    },
    {
      "@type": "Question",
      "name": "¿Se mantiene el formato de las tablas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it conserva la estructura de filas y columnas de las tablas originales. Los datos numéricos se mantienen como números en Excel para que puedas usar fórmulas." }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis extraer tablas de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Las cuentas gratuitas tienen 10 extracciones por día. Las cuentas Pro tienen extracciones ilimitadas." }
    }
  ]
}

export default function ExtraerTablasDePDFPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderEs />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Table className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extraer Tablas de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convierte las tablas de tu PDF a hojas de cálculo Excel. Extrae datos tabulares con su estructura intacta — rápido y desde tu navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Detección Automática de Tablas</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to Excel"
          outputFormat="XLSX"
          processingMessage="Extrayendo tablas de tu PDF..."
          successMessage="¡Las tablas han sido extraídas!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              ¿Tienes datos tabulares atrapados en un PDF? El extractor de tablas de PDF.it detecta automáticamente las tablas en tu documento y las convierte a formato Excel, manteniendo la estructura de filas y columnas para que puedas trabajar con los datos inmediatamente.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Detecta y extrae tablas automáticamente</li>
              <li>✓ Mantiene la estructura de filas y columnas</li>
              <li>✓ Resultado en formato Excel (XLSX) listo para usar</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — extrae tablas en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Datos Financieros y Presupuestos</h2>
              <p className="text-slate-600">
                Extrae tablas de estados financieros, balances, reportes trimestrales y presupuestos en PDF. Obtén los números directamente en Excel para analizarlos con fórmulas y gráficos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Inventarios y Listas de Precios</h2>
              <p className="text-slate-600">
                ¿Recibiste un catálogo o lista de precios en PDF? Extrae las tablas para importarlas a tu sistema de inventario, ERP o base de datos sin copiar manualmente cada dato.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Resultados de Encuestas e Investigación</h2>
              <p className="text-slate-600">
                Convierte tablas de resultados de encuestas, estudios estadísticos y reportes de investigación a Excel para crear tus propios análisis, gráficos y visualizaciones.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Extraer Tablas de un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Haz clic en Extraer Tablas — todas las tablas se detectan automáticamente.",
                "Descarga el archivo Excel con las tablas extraídas.",
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Tabla PDF a Excel", href: "/es/tabla-pdf-a-excel", desc: "Tablas a hojas de cálculo" },
                { name: "Tabla PDF a CSV", href: "/es/tabla-pdf-a-csv", desc: "Tablas a formato CSV" },
                { name: "PDF a Excel", href: "/es/pdf-a-excel", desc: "Convierte PDF completo a Excel" },
                { name: "Extracción de Tablas", href: "/es/extraccion-de-tablas", desc: "Herramienta avanzada" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="border border-orange-200 bg-orange-50 rounded-xl p-4 hover:border-orange-400 hover:bg-orange-100 transition-all text-center flex flex-col justify-center min-h-[80px]"
                >
                  <div className="font-bold text-orange-600 text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-500">{tool.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "¿Cómo extraigo tablas de un PDF?", a: "Sube tu PDF a PDF.it, haz clic en Extraer Tablas y descarga un archivo Excel con todas las tablas detectadas en tu documento, organizadas en hojas separadas." },
                { q: "¿En qué formato se extraen las tablas?", a: "Las tablas se extraen en formato XLSX (Excel). También puedes usar nuestra herramienta de Tabla PDF a CSV si prefieres formato CSV." },
                { q: "¿Funciona con tablas complejas?", a: "PDF.it detecta tablas con filas, columnas y celdas combinadas. Para tablas muy complejas o con formato irregular, los resultados pueden variar." },
                { q: "¿Puedo extraer tablas de un PDF escaneado?", a: "Para PDFs escaneados, primero usa nuestro Escáner OCR para convertir las imágenes a texto, y luego extrae las tablas del resultado." },
                { q: "¿Se mantiene el formato de las tablas?", a: "Sí. PDF.it conserva la estructura de filas y columnas de las tablas originales. Los datos numéricos se mantienen como números en Excel para que puedas usar fórmulas." },
                { q: "¿Es gratis extraer tablas de un PDF?", a: "Sí. Las cuentas gratuitas tienen 10 extracciones por día. Las cuentas Pro tienen extracciones ilimitadas." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
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
