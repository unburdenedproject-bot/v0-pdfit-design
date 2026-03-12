import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileSpreadsheet, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Tabla PDF a Excel — Convierte Tablas de PDF a Hojas de Cálculo | OmnisPDF",
  description:
    "Convierte tablas de archivos PDF a hojas de cálculo Excel con OmnisPDF. Exporta datos tabulares a XLSX con estructura intacta — rápido, desde tu navegador, sin registro.",
  alternates: {
    canonical: "https://omnispdf.com/es/tabla-pdf-a-excel",
    languages: {
      en: "https://omnispdf.com/pdf-table-to-excel",
      es: "https://omnispdf.com/es/tabla-pdf-a-excel",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo convierto tablas de PDF a Excel?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a OmnisPDF, haz clic en Convertir y descarga un archivo Excel con las tablas detectadas en tu documento, organizadas en hojas de cálculo." }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es la diferencia entre esta herramienta y PDF a Excel?",
      "acceptedAnswer": { "@type": "Answer", "text": "Tabla PDF a Excel se enfoca específicamente en extraer tablas con su estructura de filas y columnas. PDF a Excel convierte todo el contenido del PDF, incluyendo texto y formato." }
    },
    {
      "@type": "Question",
      "name": "¿Se mantienen las fórmulas en Excel?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los PDFs no contienen fórmulas — solo valores. Los números se mantienen como datos numéricos en Excel, lo que te permite agregar tus propias fórmulas después de la conversión." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo convertir múltiples tablas a la vez?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. OmnisPDF detecta todas las tablas del PDF y las organiza en hojas separadas dentro del mismo archivo Excel." }
    },
    {
      "@type": "Question",
      "name": "¿Funciona con PDFs escaneados?",
      "acceptedAnswer": { "@type": "Answer", "text": "Para PDFs escaneados, primero usa nuestro Escáner OCR para convertir las imágenes a texto, y luego convierte las tablas a Excel." }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis convertir tablas de PDF a Excel?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Las cuentas gratuitas tienen 10 conversiones por día. Las cuentas Pro tienen conversiones ilimitadas." }
    }
  ]
}

export default function TablaPDFaExcelPage() {
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
                <FileSpreadsheet className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Tabla PDF a Excel</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convierte las tablas de tu PDF a hojas de cálculo Excel. Mantén la estructura de filas y columnas intacta — rápido y desde tu navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Conversión Instantánea</span></div>
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
          processingMessage="Convirtiendo tablas a Excel..."
          successMessage="¡Tu archivo Excel está listo!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              ¿Tienes tablas en un PDF que necesitas en Excel? El conversor de tablas PDF a Excel de OmnisPDF detecta automáticamente las tablas en tu documento y las convierte a hojas de cálculo XLSX, manteniendo la estructura original para que puedas trabajar con los datos de inmediato.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convierte tablas de PDF a formato Excel (XLSX)</li>
              <li>✓ Mantiene la estructura de filas y columnas</li>
              <li>✓ Números listos para usar con fórmulas</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — convierte tablas en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Presupuestos y Finanzas</h2>
              <p className="text-slate-600">
                Convierte tablas de presupuestos, cotizaciones y estados de cuenta en PDF a Excel para analizarlos, compararlos o integrarlos en tu sistema contable con fórmulas y gráficos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Inventarios y Listas de Contactos</h2>
              <p className="text-slate-600">
                ¿Recibiste un inventario o directorio en PDF? Conviértelo a Excel para filtrar, ordenar y buscar información fácilmente. Actualiza los datos sin tener que reescribir todo.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Análisis Financiero</h2>
              <p className="text-slate-600">
                Extrae tablas de reportes anuales, balances y estados financieros para crear tus propios modelos de análisis en Excel con fórmulas, tablas dinámicas y visualizaciones.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Convertir Tablas de PDF a Excel</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a OmnisPDF.",
                "Haz clic en Convertir a Excel — las tablas se detectan automáticamente.",
                "Descarga el archivo Excel con las tablas convertidas.",
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
                { name: "Tabla PDF a CSV", href: "/es/tabla-pdf-a-csv", desc: "Tablas a formato CSV" },
                { name: "Extraer Tablas de PDF", href: "/es/extraer-tablas-de-pdf", desc: "Extrae tablas del PDF" },
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
                { q: "¿Cómo convierto tablas de PDF a Excel?", a: "Sube tu PDF a OmnisPDF, haz clic en Convertir y descarga un archivo Excel con las tablas detectadas en tu documento, organizadas en hojas de cálculo." },
                { q: "¿Cuál es la diferencia entre esta herramienta y PDF a Excel?", a: "Tabla PDF a Excel se enfoca específicamente en extraer tablas con su estructura de filas y columnas. PDF a Excel convierte todo el contenido del PDF, incluyendo texto y formato." },
                { q: "¿Se mantienen las fórmulas en Excel?", a: "Los PDFs no contienen fórmulas — solo valores. Los números se mantienen como datos numéricos en Excel, lo que te permite agregar tus propias fórmulas después de la conversión." },
                { q: "¿Puedo convertir múltiples tablas a la vez?", a: "Sí. OmnisPDF detecta todas las tablas del PDF y las organiza en hojas separadas dentro del mismo archivo Excel." },
                { q: "¿Funciona con PDFs escaneados?", a: "Para PDFs escaneados, primero usa nuestro Escáner OCR para convertir las imágenes a texto, y luego convierte las tablas a Excel." },
                { q: "¿Es gratis convertir tablas de PDF a Excel?", a: "Sí. Las cuentas gratuitas tienen 10 conversiones por día. Las cuentas Pro tienen conversiones ilimitadas." },
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
