import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileSpreadsheet, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Tabla PDF a CSV — Convierte Tablas de PDF a Formato CSV | PDF.it",
  description:
    "Convierte tablas de archivos PDF a formato CSV con PDF.it. Exporta datos tabulares a CSV para importar en bases de datos y hojas de cálculo — rápido y sin registro.",
  alternates: {
    canonical: "https://pdf.it.com/es/tabla-pdf-a-csv",
    languages: {
      en: "https://pdf.it.com/pdf-table-to-csv",
      es: "https://pdf.it.com/es/tabla-pdf-a-csv",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo convierto tablas de PDF a CSV?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a PDF.it, haz clic en Convertir y descarga un archivo CSV con las tablas detectadas en tu documento, listas para importar en cualquier sistema." }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es la diferencia entre CSV y Excel?",
      "acceptedAnswer": { "@type": "Answer", "text": "CSV es un formato de texto plano separado por comas, ideal para importar datos en bases de datos y sistemas. Excel (XLSX) es un formato de hoja de cálculo con soporte para fórmulas y formato visual." }
    },
    {
      "@type": "Question",
      "name": "¿Para qué sirve el formato CSV?",
      "acceptedAnswer": { "@type": "Answer", "text": "CSV es el formato más universal para intercambio de datos. Se puede importar en Excel, Google Sheets, bases de datos SQL, CRMs, ERPs y prácticamente cualquier sistema de datos." }
    },
    {
      "@type": "Question",
      "name": "¿Se detectan todas las tablas del PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it detecta automáticamente las tablas con estructura clara de filas y columnas. Tablas muy irregulares o sin bordes visibles pueden requerir ajustes manuales." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo convertir tablas de PDFs escaneados a CSV?",
      "acceptedAnswer": { "@type": "Answer", "text": "Para PDFs escaneados, primero usa nuestro Escáner OCR para convertir las imágenes a texto, y luego convierte las tablas a CSV." }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis convertir tablas de PDF a CSV?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Las cuentas gratuitas tienen 10 conversiones por día. Las cuentas Pro tienen conversiones ilimitadas." }
    }
  ]
}

export default function TablaPDFaCSVPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderEs />
      <main>
        {/* Hero */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileSpreadsheet className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Tabla PDF a CSV</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convierte las tablas de tu PDF a formato CSV. Exporta datos tabulares para importar en bases de datos, hojas de cálculo y sistemas — rápido y desde tu navegador.
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
          outputFormat="CSV"
          processingMessage="Convirtiendo tablas a CSV..."
          successMessage="¡Tu archivo CSV está listo!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              ¿Necesitas importar datos de un PDF a tu base de datos o sistema? El conversor de tablas PDF a CSV de PDF.it detecta las tablas en tu documento y las exporta como archivos CSV — el formato más universal para intercambio de datos entre sistemas.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convierte tablas de PDF a formato CSV</li>
              <li>✓ Compatible con Excel, Google Sheets, bases de datos y CRMs</li>
              <li>✓ Perfecto para importación masiva de datos</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — convierte tablas en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Importación a Bases de Datos</h2>
              <p className="text-slate-600">
                Exporta tablas de PDFs a CSV para importarlas directamente en MySQL, PostgreSQL, MongoDB o cualquier base de datos. El formato CSV es compatible con todos los sistemas de gestión de datos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Análisis de Datos</h2>
              <p className="text-slate-600">
                Convierte datos tabulares de reportes PDF a CSV para analizarlos en Python, R, Excel o Google Sheets. Usa filtros, fórmulas y gráficos para obtener insights de tus datos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Integración con Sistemas y Reportes Automatizados</h2>
              <p className="text-slate-600">
                Alimenta tu CRM, ERP o sistema de reportes con datos extraídos de PDFs. El formato CSV permite integraciones automáticas con prácticamente cualquier plataforma empresarial.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Convertir Tablas de PDF a CSV</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Haz clic en Convertir a CSV — las tablas se detectan automáticamente.",
                "Descarga el archivo CSV listo para importar.",
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Tabla PDF a Excel", href: "/es/tabla-pdf-a-excel", desc: "Tablas a hojas de cálculo" },
                { name: "Extraer Tablas de PDF", href: "/es/extraer-tablas-de-pdf", desc: "Extrae tablas del PDF" },
                { name: "PDF a Excel", href: "/es/pdf-a-excel", desc: "Convierte PDF completo a Excel" },
                { name: "Extraer Datos de PDF", href: "/es/extraer-datos-de-pdf", desc: "Obtén información del PDF" },
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
                { q: "¿Cómo convierto tablas de PDF a CSV?", a: "Sube tu PDF a PDF.it, haz clic en Convertir y descarga un archivo CSV con las tablas detectadas en tu documento, listas para importar en cualquier sistema." },
                { q: "¿Cuál es la diferencia entre CSV y Excel?", a: "CSV es un formato de texto plano separado por comas, ideal para importar datos en bases de datos y sistemas. Excel (XLSX) es un formato de hoja de cálculo con soporte para fórmulas y formato visual." },
                { q: "¿Para qué sirve el formato CSV?", a: "CSV es el formato más universal para intercambio de datos. Se puede importar en Excel, Google Sheets, bases de datos SQL, CRMs, ERPs y prácticamente cualquier sistema de datos." },
                { q: "¿Se detectan todas las tablas del PDF?", a: "PDF.it detecta automáticamente las tablas con estructura clara de filas y columnas. Tablas muy irregulares o sin bordes visibles pueden requerir ajustes manuales." },
                { q: "¿Puedo convertir tablas de PDFs escaneados a CSV?", a: "Para PDFs escaneados, primero usa nuestro Escáner OCR para convertir las imágenes a texto, y luego convierte las tablas a CSV." },
                { q: "¿Es gratis convertir tablas de PDF a CSV?", a: "Sí. Las cuentas gratuitas tienen 10 conversiones por día. Las cuentas Pro tienen conversiones ilimitadas." },
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
