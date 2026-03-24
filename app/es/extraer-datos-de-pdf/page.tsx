import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Database, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extraer Datos de PDF — Obtén Información de Documentos PDF | PDF.it",
  description:
    "Extrae datos, texto e información de archivos PDF con PDF.it. Obtén los datos que necesitas de cualquier documento PDF — rápido, desde tu navegador, sin registro.",
  alternates: {
    canonical: "https://pdf.it.com/es/extraer-datos-de-pdf",
    languages: {
      en: "https://pdf.it.com/extract-data-from-pdf",
      es: "https://pdf.it.com/es/extraer-datos-de-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo extraigo datos de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a PDF.it, haz clic en Extraer y descarga un archivo TXT con todos los datos y texto encontrados en tu documento PDF." }
    },
    {
      "@type": "Question",
      "name": "¿Qué tipo de datos puedo extraer de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Puedes extraer texto, números, tablas, fechas y cualquier información textual contenida en tu PDF. Para tablas estructuradas, usa nuestra herramienta de extracción de tablas." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo extraer datos de un PDF escaneado?",
      "acceptedAnswer": { "@type": "Answer", "text": "Para PDFs escaneados, necesitas usar primero nuestro Escáner OCR para convertir las imágenes a texto. Luego puedes extraer los datos del resultado." }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro extraer datos de mis PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Todos los archivos se procesan en tu navegador y se eliminan automáticamente después de la sesión. Nunca almacenamos tus documentos." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo extraer datos de un PDF desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en navegadores móviles — sube, extrae y descarga desde tu iPhone o Android." }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis extraer datos de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Las cuentas gratuitas tienen 10 extracciones por día. Las cuentas Pro tienen extracciones ilimitadas." }
    }
  ]
}

export default function ExtraerDatosDePDFPage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Database className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extraer Datos de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Obtén toda la información, texto y datos de tus documentos PDF. Extrae lo que necesitas — rápido y desde tu navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Extracción Instantánea</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to TXT"
          outputFormat="TXT"
          processingMessage="Extrayendo datos de tu PDF..."
          successMessage="¡Tus datos han sido extraídos!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              ¿Necesitas obtener información de un documento PDF? El extractor de datos de PDF.it te permite sacar todo el contenido textual — párrafos, números, fechas, listas — y descargarlo como texto plano para usar en cualquier otro programa o sistema.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Extrae todo el texto y datos de cualquier PDF</li>
              <li>✓ Perfecto para investigación, análisis y migración de datos</li>
              <li>✓ Resultado en formato TXT limpio y organizado</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — extrae datos en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Investigación y Análisis de Datos</h2>
              <p className="text-slate-600">
                Extrae datos de informes, estudios y documentos académicos para analizarlos en hojas de cálculo, bases de datos o herramientas de análisis. Ahorra horas de copiar y pegar manualmente.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Migración de Sistemas</h2>
              <p className="text-slate-600">
                ¿Migrando datos de un sistema antiguo? Extrae la información de PDFs generados por tu sistema anterior y úsala para alimentar tu nueva plataforma sin perder ningún dato.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Generación de Reportes</h2>
              <p className="text-slate-600">
                Obtén datos de facturas, recibos, contratos y reportes financieros en PDF para crear tus propios informes consolidados, comparativos o resúmenes ejecutivos.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Extraer Datos de un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Haz clic en Extraer Datos — todo el contenido se procesa automáticamente.",
                "Descarga el archivo TXT con todos los datos extraídos.",
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
                { name: "PDF a Texto", href: "/es/pdf-a-texto", desc: "Convierte PDF a TXT" },
                { name: "Extraer Texto de PDF", href: "/es/extraer-texto-de-pdf", desc: "Copia todo el texto" },
                { name: "Extraer Tablas de PDF", href: "/es/extraer-tablas-de-pdf", desc: "Tablas a Excel" },
                { name: "Escáner OCR", href: "/es/escaner-ocr", desc: "Texto de escaneos" },
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
                { q: "¿Cómo extraigo datos de un PDF?", a: "Sube tu PDF a PDF.it, haz clic en Extraer y descarga un archivo TXT con todos los datos y texto encontrados en tu documento PDF." },
                { q: "¿Qué tipo de datos puedo extraer de un PDF?", a: "Puedes extraer texto, números, tablas, fechas y cualquier información textual contenida en tu PDF. Para tablas estructuradas, usa nuestra herramienta de extracción de tablas." },
                { q: "¿Puedo extraer datos de un PDF escaneado?", a: "Para PDFs escaneados, necesitas usar primero nuestro Escáner OCR para convertir las imágenes a texto. Luego puedes extraer los datos del resultado." },
                { q: "¿Es seguro extraer datos de mis PDFs?", a: "Sí. Todos los archivos se procesan en tu navegador y se eliminan automáticamente después de la sesión. Nunca almacenamos tus documentos." },
                { q: "¿Puedo extraer datos de un PDF desde mi celular?", a: "Sí. PDF.it funciona en navegadores móviles — sube, extrae y descarga desde tu iPhone o Android." },
                { q: "¿Es gratis extraer datos de un PDF?", a: "Sí. Las cuentas gratuitas tienen 10 extracciones por día. Las cuentas Pro tienen extracciones ilimitadas." },
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
