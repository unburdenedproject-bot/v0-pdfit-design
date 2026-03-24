import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Link2, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extraer Enlaces de PDF — Obtén Todos los URLs de un PDF | PDF.it",
  description:
    "Extrae todos los hipervínculos y URLs de archivos PDF con PDF.it. Obtén una lista completa de enlaces — rápido, desde tu navegador, sin registro.",
  alternates: {
    canonical: "https://pdf.it.com/es/extraer-enlaces-de-pdf",
    languages: {
      en: "https://pdf.it.com/extract-links-from-pdf",
      es: "https://pdf.it.com/es/extraer-enlaces-de-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo extraigo los enlaces de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a PDF.it, haz clic en Extraer y descarga un archivo TXT con todos los hipervínculos y URLs encontrados en tu documento." }
    },
    {
      "@type": "Question",
      "name": "¿Qué tipo de enlaces se pueden extraer?",
      "acceptedAnswer": { "@type": "Answer", "text": "Se extraen todos los hipervínculos del documento: URLs web (http/https), enlaces a correos electrónicos (mailto) y enlaces internos del documento." }
    },
    {
      "@type": "Question",
      "name": "¿Para qué sirve extraer enlaces de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Es útil para auditorías de documentos, verificar que los enlaces funcionen, migrar contenido web, recopilar referencias bibliográficas o analizar las fuentes citadas en un documento." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo verificar si los enlaces extraídos funcionan?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it extrae los enlaces del PDF. Para verificar si funcionan, puedes abrir cada enlace en tu navegador o usar una herramienta de verificación de enlaces." }
    },
    {
      "@type": "Question",
      "name": "¿Funciona con PDFs escaneados?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los PDFs escaneados no contienen hipervínculos activos — son imágenes. Solo los PDFs con texto seleccionable contienen enlaces que se pueden extraer." }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis extraer enlaces de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Las cuentas gratuitas tienen 10 extracciones por día. Las cuentas Pro tienen extracciones ilimitadas." }
    }
  ]
}

export default function ExtraerEnlacesDePDFPage() {
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
                <Link2 className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extraer Enlaces de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Obtén todos los hipervínculos y URLs de tu documento PDF. Extrae una lista completa de enlaces — rápido y desde tu navegador.
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
          processingMessage="Extrayendo enlaces de tu PDF..."
          successMessage="¡Los enlaces han sido extraídos!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              ¿Necesitas obtener todos los enlaces de un documento PDF? El extractor de enlaces de PDF.it analiza tu PDF y te entrega una lista completa de todas las URLs e hipervínculos — perfecta para auditorías, verificación de referencias o migración de contenido.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Extrae todos los hipervínculos y URLs del PDF</li>
              <li>✓ Incluye enlaces web, correos electrónicos y enlaces internos</li>
              <li>✓ Perfecto para auditorías y verificación de referencias</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — extrae enlaces en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Auditoría de Documentos</h2>
              <p className="text-slate-600">
                Verifica que todos los enlaces en tus documentos corporativos, manuales y guías sean correctos y estén actualizados. Extrae la lista completa para revisarla antes de publicar.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Verificación de Referencias</h2>
              <p className="text-slate-600">
                ¿Revisando un documento académico o informe con múltiples fuentes? Extrae todos los enlaces citados para verificar rápidamente que las referencias sean válidas y accesibles.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Migración Web e Investigación</h2>
              <p className="text-slate-600">
                Recopila todos los enlaces de documentos PDF para migrar contenido a tu sitio web, crear listas de recursos o investigar las fuentes utilizadas en informes y presentaciones.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Extraer Enlaces de un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Haz clic en Extraer Enlaces — todos los hipervínculos se detectan automáticamente.",
                "Descarga el archivo TXT con la lista completa de enlaces.",
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
                { name: "Extraer Datos de PDF", href: "/es/extraer-datos-de-pdf", desc: "Obtén información del PDF" },
                { name: "Extraer Texto de PDF", href: "/es/extraer-texto-de-pdf", desc: "Copia todo el texto" },
                { name: "PDF a Texto", href: "/es/pdf-a-texto", desc: "Convierte PDF a TXT" },
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
                { q: "¿Cómo extraigo los enlaces de un PDF?", a: "Sube tu PDF a PDF.it, haz clic en Extraer y descarga un archivo TXT con todos los hipervínculos y URLs encontrados en tu documento." },
                { q: "¿Qué tipo de enlaces se pueden extraer?", a: "Se extraen todos los hipervínculos del documento: URLs web (http/https), enlaces a correos electrónicos (mailto) y enlaces internos del documento." },
                { q: "¿Para qué sirve extraer enlaces de un PDF?", a: "Es útil para auditorías de documentos, verificar que los enlaces funcionen, migrar contenido web, recopilar referencias bibliográficas o analizar las fuentes citadas en un documento." },
                { q: "¿Puedo verificar si los enlaces extraídos funcionan?", a: "PDF.it extrae los enlaces del PDF. Para verificar si funcionan, puedes abrir cada enlace en tu navegador o usar una herramienta de verificación de enlaces." },
                { q: "¿Funciona con PDFs escaneados?", a: "Los PDFs escaneados no contienen hipervínculos activos — son imágenes. Solo los PDFs con texto seleccionable contienen enlaces que se pueden extraer." },
                { q: "¿Es gratis extraer enlaces de un PDF?", a: "Sí. Las cuentas gratuitas tienen 10 extracciones por día. Las cuentas Pro tienen extracciones ilimitadas." },
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
