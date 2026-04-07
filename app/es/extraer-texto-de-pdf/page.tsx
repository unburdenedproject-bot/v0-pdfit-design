import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extraer Texto de PDF — Copia Todo el Texto de un PDF | PDF.it",
  description:
    "Extrae todo el texto de archivos PDF con PDF.it. Copia el contenido textual completo de cualquier PDF — rápido, desde tu navegador, sin registro.",
  alternates: {
    canonical: "https://pdf.it.com/es/extraer-texto-de-pdf",
    languages: {
      en: "https://pdf.it.com/extract-text-from-pdf",
      es: "https://pdf.it.com/es/extraer-texto-de-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo extraigo texto de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a PDF.it, haz clic en Extraer y descarga un archivo TXT con todo el contenido textual de tu documento PDF." }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es la diferencia entre extraer texto y PDF a TXT?",
      "acceptedAnswer": { "@type": "Answer", "text": "Son herramientas muy similares. Extraer Texto se enfoca en obtener el contenido textual para reutilizarlo, mientras que PDF a TXT convierte el formato del archivo completo." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo extraer texto de un PDF protegido?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si el PDF tiene restricciones de copia, primero usa nuestra herramienta Desbloquear PDF para eliminar las restricciones, y luego extrae el texto." }
    },
    {
      "@type": "Question",
      "name": "¿Se mantiene el formato del texto?",
      "acceptedAnswer": { "@type": "Answer", "text": "El texto se extrae como texto plano (TXT). Se conservan los párrafos y saltos de línea, pero no el formato visual como negritas, colores o fuentes." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo extraer texto de un PDF escaneado?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los PDFs escaneados son imágenes y no contienen texto seleccionable. Usa primero nuestro Escáner OCR para convertir las imágenes a texto." }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis extraer texto de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Las cuentas gratuitas tienen 10 extracciones por día. Las cuentas Pro tienen extracciones ilimitadas." }
    }
  ]
}

export default function ExtraerTextoDePDFPage() {
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
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a1f5e] to-[#252A6A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extraer Texto de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Copia todo el contenido textual de tu PDF. Extrae párrafos, títulos, listas y más — rápido y desde tu navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Extracción Completa</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to TXT"
          outputFormat="TXT"
          processingMessage="Extrayendo texto de tu PDF..."
          successMessage="¡El texto ha sido extraído!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              ¿Necesitas copiar el texto de un PDF pero no puedes seleccionarlo? El extractor de texto de PDF.it obtiene todo el contenido textual de tu documento — párrafos, títulos, listas, pies de página — y lo entrega como texto plano que puedes editar, traducir o reutilizar.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Extrae todo el texto de cualquier PDF</li>
              <li>✓ Conserva párrafos y estructura de contenido</li>
              <li>✓ Perfecto para edición, traducción y análisis</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — extrae texto en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Edición de Contenido</h2>
              <p className="text-slate-600">
                Extrae el texto de documentos PDF para editarlo en Word, Google Docs o cualquier editor de texto. Modifica, actualiza o reformatea el contenido sin empezar desde cero.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Análisis de Texto y Accesibilidad</h2>
              <p className="text-slate-600">
                Obtén el texto de PDFs para análisis de contenido, búsqueda de palabras clave, conteo de palabras o para hacer documentos más accesibles con lectores de pantalla.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Traducción de Documentos</h2>
              <p className="text-slate-600">
                Extrae el texto de un PDF en un idioma para traducirlo a otro. Copia el contenido extraído directamente en Google Translate, DeepL u otra herramienta de traducción.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Extraer Texto de un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Haz clic en Extraer Texto — todo el contenido se procesa automáticamente.",
                "Descarga el archivo TXT con todo el texto extraído.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
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
                { name: "PDF a Texto", href: "/es/pdf-a-texto", desc: "Convierte PDF a TXT" },
                { name: "Extraer Datos de PDF", href: "/es/extraer-datos-de-pdf", desc: "Obtén información del PDF" },
                { name: "Escáner OCR", href: "/es/escaner-ocr", desc: "Texto de escaneos" },
                { name: "Desbloquear PDF", href: "/es/desbloquear-pdf", desc: "Elimina restricciones" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="rounded-xl p-4 transition-all text-center flex flex-col justify-center min-h-[80px] hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(20,216,196,0.25)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.2)" }}
                >
                  <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-400">{tool.desc}</div>
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
                { q: "¿Cómo extraigo texto de un PDF?", a: "Sube tu PDF a PDF.it, haz clic en Extraer y descarga un archivo TXT con todo el contenido textual de tu documento PDF." },
                { q: "¿Cuál es la diferencia entre extraer texto y PDF a TXT?", a: "Son herramientas muy similares. Extraer Texto se enfoca en obtener el contenido textual para reutilizarlo, mientras que PDF a TXT convierte el formato del archivo completo." },
                { q: "¿Puedo extraer texto de un PDF protegido?", a: "Si el PDF tiene restricciones de copia, primero usa nuestra herramienta Desbloquear PDF para eliminar las restricciones, y luego extrae el texto." },
                { q: "¿Se mantiene el formato del texto?", a: "El texto se extrae como texto plano (TXT). Se conservan los párrafos y saltos de línea, pero no el formato visual como negritas, colores o fuentes." },
                { q: "¿Puedo extraer texto de un PDF escaneado?", a: "Los PDFs escaneados son imágenes y no contienen texto seleccionable. Usa primero nuestro Escáner OCR para convertir las imágenes a texto." },
                { q: "¿Es gratis extraer texto de un PDF?", a: "Sí. Las cuentas gratuitas tienen 10 extracciones por día. Las cuentas Pro tienen extracciones ilimitadas." },
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
