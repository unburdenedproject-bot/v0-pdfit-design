import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF a 200KB Online — Reducir Tamaño de PDF | PDF.it",
  description:
    "Comprime tu PDF para cumplir con límites de 200KB. Compresión extrema para subida de pasaporte, identificaciones, archivos de firma digital y portales estrictos — rápido, desde tu navegador, gratis.",
  alternates: {
    languages: {
      en: "/compress-pdf-to-200kb",
      es: "/es/comprimir-pdf-a-200kb",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo comprimo un PDF para un límite de 200KB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a PDF.it y haz clic en Comprimir. La herramienta aplica compresión extrema para reducir la resolución de imágenes y optimizar la estructura interna, reduciendo drásticamente el tamaño del archivo. Los resultados dependen del contenido de tu PDF." }
    },
    {
      "@type": "Question",
      "name": "¿Mi PDF quedará definitivamente debajo de 200KB después de comprimirlo?",
      "acceptedAnswer": { "@type": "Answer", "text": "La compresión extrema reduce drásticamente el tamaño del archivo, pero los resultados dependen del contenido del PDF. Los documentos de una sola página con texto se comprimen muy bien. Los archivos de varias páginas o con muchas imágenes pueden necesitar dividirse primero y luego comprimir cada parte por separado." }
    },
    {
      "@type": "Question",
      "name": "¿Qué portales requieren PDFs de menos de 200KB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Muchos portales de envío de fotos de pasaporte, sistemas de subida de identificación nacional, subida de archivos de firma digital y formularios gubernamentales muy estrictos exigen un límite de 200KB por archivo." }
    },
    {
      "@type": "Question",
      "name": "¿Mi PDF seguirá siendo legible después de comprimirlo a 200KB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. El texto se mantiene nítido y completamente legible. Las imágenes pueden perder detalle notable con este nivel de compresión, pero el documento sigue siendo utilizable para propósitos de identificación y envío." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo comprimir un PDF a 200KB desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en cualquier navegador móvil. Sube tu PDF, comprímelo y descarga el archivo más pequeño directamente en tu iPhone o Android." }
    },
    {
      "@type": "Question",
      "name": "¿Qué hago si mi PDF sigue pesando más de 200KB después de comprimirlo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Intenta dividir el PDF en páginas individuales con nuestra herramienta Dividir PDF y luego comprime cada página por separado. También puedes aplanar el PDF, eliminar páginas innecesarias o convertir las imágenes a escala de grises para reducir aún más el tamaño." }
    }
  ]
}

export default function ComprimirPDFA200KBPage() {
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
                <Compress className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para Límites de 200KB</h1>
              <p className="text-xl text-slate-300 mb-8">
                Aplica compresión extrema para reducir drásticamente el tamaño de tu PDF en portales con límites de 200KB. Perfecto para envío de fotos de pasaporte, subida de identificaciones, archivos de firma digital y portales muy estrictos.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Compresión Extrema</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Compress PDF"
          outputFormat="PDF"
          processingMessage="Compressing your PDF for 200KB upload limits..."
          successMessage="Your compressed PDF is ready!"
          compressionLevel="extreme"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">¿Por Qué Comprimir un PDF para Límites de 200KB?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Algunas plataformas exigen un límite de tamaño muy ajustado de 200KB. Los portales de fotos de pasaporte, sistemas de envío de identificación nacional, subida de firmas digitales y formularios gubernamentales estrictos requieren archivos extremadamente pequeños. PDF.it aplica compresión extrema para reducir drásticamente el tamaño de tu PDF y ayudarte a cumplir con estos requisitos de subida tan exigentes.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Compresión extrema para máxima reducción de tamaño</li>
              <li>&#10003; Perfecto para subida de pasaporte, identificación y archivos de firma</li>
              <li>&#10003; El texto se mantiene nítido y legible</li>
              <li>&#10003; Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>&#10003; Sin instalación — comprime PDFs en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comunes</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Envío de Fotos de Pasaporte</h3>
                <p className="text-slate-600">
                  Los portales de renovación y solicitud de pasaporte frecuentemente requieren subida de fotos de menos de 200KB. Comprime tu foto de pasaporte escaneada en PDF para cumplir con estos requisitos estrictos de tamaño sin perder claridad.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Subida de Identificación Nacional y Documentos</h3>
                <p className="text-slate-600">
                  Las subidas de cédula de identidad, licencia de conducir y otros documentos oficiales frecuentemente exigen un límite de 200KB. Comprime tus identificaciones escaneadas para subirlas exitosamente.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Archivos de Firma Digital</h3>
                <p className="text-slate-600">
                  Muchas plataformas requieren archivos de firma de menos de 200KB para la firma electrónica de documentos. Comprime tu firma escaneada en PDF para cumplir con los límites de tamaño manteniendo la firma legible.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Portales Gubernamentales Muy Estrictos</h3>
                <p className="text-slate-600">
                  Algunos sistemas gubernamentales, especialmente en países en desarrollo, exigen límites de subida muy bajos de 200KB por documento. Comprime tus formularios, certificados y documentos de soporte para enviarlos sin errores.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Comprimir un PDF para Límites de 200KB</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Haz clic en Comprimir PDF — la compresión extrema se aplica automáticamente.",
                "Descarga tu PDF más pequeño. Si sigue superando 200KB, intenta dividirlo en páginas individuales primero y luego comprime cada página.",
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

        {/* Tips */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Consejos para Lograr Menos de 200KB</h2>
              <p className="text-slate-600 mb-4">
                Si tu PDF sigue superando 200KB después de comprimirlo, prueba estas estrategias:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Separa en páginas individuales</strong> — extrae solo la página que necesitas y comprime esa sola página.</li>
                <li>&#10003; <strong>Elimina páginas innecesarias</strong> — borra páginas en blanco o que no sean requeridas para tu entrega.</li>
                <li>&#10003; <strong>Usa blanco y negro</strong> — si no necesitas color, convierte las imágenes a escala de grises antes de comprimir (esto reduce el tamaño significativamente).</li>
                <li>&#10003; <strong>Aplana el PDF</strong> — si el PDF tiene campos de formulario o anotaciones, aplánalo primero para eliminar datos ocultos.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Más Herramientas PDF</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Comprimir a 500KB", desc: "Para límites de 500KB.", href: "/es/comprimir-pdf-a-500kb", icon: Compress },
                { name: "Comprimir a 1MB", desc: "Para límites de 1MB.", href: "/es/comprimir-pdf-a-1mb", icon: Compress },
                { name: "Comprimir a 2MB", desc: "Para límites de 2MB.", href: "/es/comprimir-pdf-a-2mb", icon: Compress },
                { name: "Comprimir a 100KB", desc: "Para límites de 100KB.", href: "/es/comprimir-pdf-a-100kb", icon: Compress },
                { name: "Dividir PDF", desc: "Divide si sigue siendo grande.", href: "/es/dividir-pdf", icon: Scissors },
                { name: "Unir PDF", desc: "Combina múltiples PDFs.", href: "/es/unir-pdf", icon: Merge },
                { name: "Comprimir PDF", desc: "Compresión estándar.", href: "/es/comprimir-pdf", icon: Compress },
                { name: "Rotar PDF", desc: "Corrige la orientación.", href: "/es/rotar-pdf", icon: RotateCw },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col items-center text-center rounded-xl border border-gray-200 bg-white p-4 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    <tool.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-1">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{tool.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "¿Cómo comprimo un PDF para un límite de 200KB?", a: "Sube tu PDF a PDF.it y haz clic en Comprimir. La herramienta aplica compresión extrema para reducir la resolución de imágenes y optimizar la estructura interna, reduciendo drásticamente el tamaño del archivo. Los resultados dependen del contenido de tu PDF." },
                { q: "¿Mi PDF quedará definitivamente debajo de 200KB después de comprimirlo?", a: "La compresión extrema reduce drásticamente el tamaño del archivo, pero los resultados dependen del contenido del PDF. Los documentos de una sola página con texto se comprimen muy bien. Los archivos de varias páginas o con muchas imágenes pueden necesitar dividirse primero y luego comprimir cada parte por separado." },
                { q: "¿Qué portales requieren PDFs de menos de 200KB?", a: "Muchos portales de envío de fotos de pasaporte, sistemas de subida de identificación nacional, subida de archivos de firma digital y formularios gubernamentales muy estrictos exigen un límite de 200KB por archivo." },
                { q: "¿Mi PDF seguirá siendo legible después de comprimirlo a 200KB?", a: "Sí. El texto se mantiene nítido y completamente legible. Las imágenes pueden perder detalle notable con este nivel de compresión, pero el documento sigue siendo utilizable para propósitos de identificación y envío." },
                { q: "¿Puedo comprimir un PDF a 200KB desde mi celular?", a: "Sí. PDF.it funciona en cualquier navegador móvil. Sube tu PDF, comprímelo y descarga el archivo más pequeño directamente en tu iPhone o Android." },
                { q: "¿Qué hago si mi PDF sigue pesando más de 200KB después de comprimirlo?", a: "Intenta dividir el PDF en páginas individuales con nuestra herramienta Dividir PDF y luego comprime cada página por separado. También puedes aplanar el PDF, eliminar páginas innecesarias o convertir las imágenes a escala de grises para reducir aún más el tamaño." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#191B4D] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">¿Necesitas Compresión Extrema de PDF?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Sube tu PDF y aplica compresión máxima en segundos. Sin registro, sin instalación, sin esperas.
            </p>
            <Link
              href="/es/comprimir-pdf-a-200kb"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Comprimir a 200KB Ahora
            </Link>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
