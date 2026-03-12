import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Type, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extraer Fuentes de PDF — Identifica las Fuentes Usadas en un PDF | OmnisPDF",
  description:
    "Identifica y extrae la información de fuentes tipográficas de cualquier PDF con OmnisPDF. Descubre qué fuentes se usaron — rápido, desde tu navegador, sin registro.",
  alternates: {
    canonical: "https://omnispdf.com/es/extraer-fuentes-de-pdf",
    languages: {
      en: "https://omnispdf.com/extract-fonts-from-pdf",
      es: "https://omnispdf.com/es/extraer-fuentes-de-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo identifico las fuentes de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a OmnisPDF y la herramienta analizará el documento para identificar todas las fuentes tipográficas utilizadas, incluyendo nombre, estilo y tamaño." }
    },
    {
      "@type": "Question",
      "name": "¿Para qué sirve extraer las fuentes de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Es útil para diseñadores gráficos que necesitan recrear un documento, mantener la consistencia de marca o identificar tipografías específicas usadas en materiales existentes." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo descargar las fuentes extraídas?",
      "acceptedAnswer": { "@type": "Answer", "text": "OmnisPDF identifica los nombres y estilos de las fuentes usadas en el PDF. Para descargar las fuentes, necesitarás buscarlas en sitios de tipografía como Google Fonts o Adobe Fonts." }
    },
    {
      "@type": "Question",
      "name": "¿Qué información de fuentes se extrae?",
      "acceptedAnswer": { "@type": "Answer", "text": "Se extrae el nombre de la fuente, el estilo (regular, bold, italic), el tamaño utilizado y si la fuente está incrustada en el documento." }
    },
    {
      "@type": "Question",
      "name": "¿Funciona con PDFs escaneados?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los PDFs escaneados no contienen información de fuentes ya que son imágenes. Para estos casos, puedes usar herramientas de reconocimiento de fuentes basadas en imágenes." }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis extraer fuentes de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Las cuentas gratuitas tienen 10 extracciones por día. Las cuentas Pro tienen extracciones ilimitadas." }
    }
  ]
}

export default function ExtraerFuentesDePDFPage() {
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
                <Type className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extraer Fuentes de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Identifica todas las fuentes tipográficas usadas en tu PDF. Descubre nombres, estilos y tamaños — instantáneo y desde tu navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Análisis Instantáneo</span></div>
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
          processingMessage="Analizando fuentes de tu PDF..."
          successMessage="¡Las fuentes han sido identificadas!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              ¿Necesitas saber qué fuentes tipográficas se usaron en un PDF? El extractor de fuentes de OmnisPDF analiza tu documento y te muestra todas las fuentes utilizadas — nombres, estilos, tamaños y si están incrustadas en el archivo.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Identifica todas las fuentes tipográficas del PDF</li>
              <li>✓ Muestra nombre, estilo (bold, italic) y tamaño</li>
              <li>✓ Perfecto para diseño gráfico y consistencia de marca</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — analiza fuentes en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Diseño Gráfico y Tipografía</h2>
              <p className="text-slate-600">
                ¿Te enviaron un diseño en PDF y necesitas saber qué fuentes usaron? Identifica las tipografías exactas para recrear el diseño o crear materiales complementarios con la misma estética visual.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Consistencia de Marca</h2>
              <p className="text-slate-600">
                Verifica que todos los documentos corporativos usen las fuentes oficiales de tu marca. Detecta inconsistencias tipográficas en materiales de marketing, presentaciones y documentos internos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Recreación de Documentos</h2>
              <p className="text-slate-600">
                ¿Necesitas editar un PDF pero no tienes el archivo original? Identifica primero las fuentes usadas para poder recrear el documento con exactitud en tu editor de texto o diseño.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Extraer Fuentes de un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a OmnisPDF.",
                "Haz clic en Analizar Fuentes — todas las tipografías se detectan automáticamente.",
                "Descarga el reporte con todas las fuentes identificadas.",
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
                { name: "Extraer Datos de PDF", href: "/es/extraer-datos-de-pdf", desc: "Obtén información del PDF" },
                { name: "PDF a Word", href: "/es/pdf-a-word", desc: "Convierte PDF a Word" },
                { name: "Extraer Imágenes", href: "/es/extraer-imagenes-de-pdf", desc: "Saca fotos del PDF" },
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
                { q: "¿Cómo identifico las fuentes de un PDF?", a: "Sube tu PDF a OmnisPDF y la herramienta analizará el documento para identificar todas las fuentes tipográficas utilizadas, incluyendo nombre, estilo y tamaño." },
                { q: "¿Para qué sirve extraer las fuentes de un PDF?", a: "Es útil para diseñadores gráficos que necesitan recrear un documento, mantener la consistencia de marca o identificar tipografías específicas usadas en materiales existentes." },
                { q: "¿Puedo descargar las fuentes extraídas?", a: "OmnisPDF identifica los nombres y estilos de las fuentes usadas en el PDF. Para descargar las fuentes, necesitarás buscarlas en sitios de tipografía como Google Fonts o Adobe Fonts." },
                { q: "¿Qué información de fuentes se extrae?", a: "Se extrae el nombre de la fuente, el estilo (regular, bold, italic), el tamaño utilizado y si la fuente está incrustada en el documento." },
                { q: "¿Funciona con PDFs escaneados?", a: "Los PDFs escaneados no contienen información de fuentes ya que son imágenes. Para estos casos, puedes usar herramientas de reconocimiento de fuentes basadas en imágenes." },
                { q: "¿Es gratis extraer fuentes de un PDF?", a: "Sí. Las cuentas gratuitas tienen 10 extracciones por día. Las cuentas Pro tienen extracciones ilimitadas." },
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
