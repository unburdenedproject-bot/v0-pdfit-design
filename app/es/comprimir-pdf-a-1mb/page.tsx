import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF a 1MB Online — Reducir Tamaño de PDF | PDF.it",
  description:
    "Comprime tu PDF para cumplir con límites de 1MB. Compresión extrema para solicitudes de visa, formularios gubernamentales y envío por mensajería — rápido, desde tu navegador, gratis.",
  alternates: {
    languages: {
      en: "/compress-pdf-to-1mb",
      es: "/es/comprimir-pdf-a-1mb",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo comprimo un PDF para un límite de 1MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a PDF.it y haz clic en Comprimir. La herramienta aplica compresión extrema para reducir la resolución de imágenes y optimizar la estructura interna, reduciendo drásticamente el tamaño del archivo. Los resultados dependen del contenido de tu PDF." }
    },
    {
      "@type": "Question",
      "name": "¿Mi PDF quedará definitivamente debajo de 1MB después de comprimirlo?",
      "acceptedAnswer": { "@type": "Answer", "text": "La compresión extrema reduce drásticamente el tamaño del archivo, pero los resultados dependen del contenido del PDF. Los PDFs con mucho texto se comprimen muy bien. Los archivos con muchas imágenes pueden necesitar dividirse primero y luego comprimir cada parte por separado." }
    },
    {
      "@type": "Question",
      "name": "¿Mi PDF seguirá siendo legible después de comprimirlo a 1MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. El texto se mantiene nítido y completamente legible. Las imágenes pueden perder algo de detalle con la compresión extrema, pero el documento sigue siendo utilizable para la mayoría de los propósitos." }
    },
    {
      "@type": "Question",
      "name": "¿Por qué necesitaría un PDF de menos de 1MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Muchos formularios en línea, portales gubernamentales, solicitudes de visa y apps de mensajería tienen límites estrictos de 1MB. Comprimir a 1MB asegura que tu documento se suba sin problemas." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo comprimir un PDF a 1MB desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en cualquier navegador móvil. Sube tu PDF, comprímelo y descarga el archivo más pequeño directamente en tu iPhone o Android." }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es la diferencia entre comprimir a 1MB, 2MB o 5MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los tres usan el mismo motor de compresión extrema. La diferencia es el tamaño objetivo. Comprimir a 1MB aplica una optimización más agresiva, lo que puede reducir la calidad de imagen ligeramente más que los objetivos de 2MB o 5MB." }
    }
  ]
}

export default function ComprimirPDFA1MBPage() {
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
                <Compress className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para Límites de 1MB</h1>
              <p className="text-xl text-slate-300 mb-8">
                Aplica compresión extrema para reducir drásticamente el tamaño de tu PDF en portales con límites de 1MB. Perfecto para solicitudes de visa, formularios gubernamentales y envío por mensajería.
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
          processingMessage="Compressing your PDF to under 1MB..."
          successMessage="Your compressed PDF is ready!"
          compressionLevel="extreme"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">¿Por Qué Comprimir un PDF para Límites de 1MB?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Muchas plataformas exigen un límite estricto de 1MB. Solicitudes de visa, entregas de identificación gubernamental, formularios de becas y algunos portales de empleo requieren documentos pequeños. PDF.it aplica compresión extrema para reducir drásticamente el tamaño de tu PDF y ayudarte a cumplir con los requisitos de subida más estrictos.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Compresión extrema para máxima reducción de tamaño</li>
              <li>&#10003; Perfecto para subidas de visa, pasaporte y formularios gubernamentales</li>
              <li>&#10003; El texto se mantiene nítido y legible</li>
              <li>&#10003; Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>&#10003; Sin instalación — comprime PDFs en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comunes</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Solicitudes de Visa e Inmigración</h3>
                <p className="text-slate-600">
                  Muchos portales de visa (Schengen, EE.UU., Reino Unido, Canadá) requieren documentos de soporte de menos de 1MB cada uno. Comprime tus escaneos de pasaporte, estados de cuenta bancarios y cartas de presentación para cumplir con estos límites estrictos.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Formularios Gubernamentales y Subida de Identificaciones</h3>
                <p className="text-slate-600">
                  Los portales gubernamentales para declaraciones de impuestos, solicitudes de permisos y entregas de identificación frecuentemente limitan las subidas a 1MB. Comprime tus documentos para subirlos sin errores.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Envío por WhatsApp y Telegram</h3>
                <p className="text-slate-600">
                  Enviar PDFs grandes por apps de mensajería es lento y a veces se bloquea. Comprimir a menos de 1MB asegura una entrega rápida y descarga fácil en cualquier dispositivo.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Solicitudes de Becas y Universidades</h3>
                <p className="text-slate-600">
                  Muchos portales de becas y admisiones requieren expedientes académicos, cartas de recomendación y ensayos de menos de 1MB. Comprime sin perder legibilidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Comprimir un PDF para Límites de 1MB</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Haz clic en Comprimir PDF — la compresión extrema se aplica automáticamente.",
                "Descarga tu PDF más pequeño. Si sigue superando 1MB, intenta dividir el archivo primero y luego comprime cada parte.",
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Consejos para Lograr Menos de 1MB</h2>
              <p className="text-slate-600 mb-4">
                Si tu PDF sigue superando 1MB después de comprimirlo, prueba estas estrategias:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Divide primero, luego comprime</strong> — separa un PDF grande en secciones más pequeñas y comprime cada una.</li>
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
                { name: "Comprimir a 2MB", desc: "Para límites de 2MB.", href: "/es/comprimir-pdf-a-2mb", icon: Compress },
                { name: "Comprimir para Email", desc: "Para adjuntos de email.", href: "/es/comprimir-pdf-para-email", icon: Compress },
                { name: "Comprimir a 500KB", desc: "Para límites de 500KB.", href: "/es/comprimir-pdf-a-500kb", icon: Compress },
                { name: "Dividir PDF", desc: "Divide si sigue siendo grande.", href: "/es/dividir-pdf", icon: Scissors },
                { name: "Unir PDF", desc: "Combina múltiples PDFs.", href: "/es/unir-pdf", icon: Merge },
                { name: "Comprimir PDF", desc: "Compresión estándar.", href: "/es/comprimir-pdf", icon: Compress },
                { name: "Rotar PDF", desc: "Corrige la orientación.", href: "/es/rotar-pdf", icon: RotateCw },
                { name: "Comprimir a 100KB", desc: "Para límites de 100KB.", href: "/es/comprimir-pdf-a-100kb", icon: Compress },
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "¿Cómo comprimo un PDF para un límite de 1MB?", a: "Sube tu PDF a PDF.it y haz clic en Comprimir. La herramienta aplica compresión extrema para reducir la resolución de imágenes y optimizar la estructura interna, reduciendo drásticamente el tamaño del archivo. Los resultados dependen del contenido de tu PDF." },
                { q: "¿Mi PDF quedará definitivamente debajo de 1MB después de comprimirlo?", a: "La compresión extrema reduce drásticamente el tamaño del archivo, pero los resultados dependen del contenido del PDF. Los PDFs con mucho texto se comprimen muy bien. Los archivos con muchas imágenes pueden necesitar dividirse primero y luego comprimir cada parte por separado." },
                { q: "¿Mi PDF seguirá siendo legible después de comprimirlo a 1MB?", a: "Sí. El texto se mantiene nítido y completamente legible. Las imágenes pueden perder algo de detalle con la compresión extrema, pero el documento sigue siendo utilizable para la mayoría de los propósitos." },
                { q: "¿Por qué necesitaría un PDF de menos de 1MB?", a: "Muchos formularios en línea, portales gubernamentales, solicitudes de visa y apps de mensajería tienen límites estrictos de 1MB. Comprimir a 1MB asegura que tu documento se suba sin problemas." },
                { q: "¿Puedo comprimir un PDF a 1MB desde mi celular?", a: "Sí. PDF.it funciona en cualquier navegador móvil. Sube tu PDF, comprímelo y descarga el archivo más pequeño directamente en tu iPhone o Android." },
                { q: "¿Qué hago si mi PDF sigue siendo demasiado grande después de comprimirlo?", a: "Intenta dividir el PDF en partes más pequeñas con nuestra herramienta Dividir PDF y luego comprime cada parte individualmente. También puedes aplanar el PDF o eliminar páginas innecesarias para reducir aún más el tamaño." },
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
              href="/es/comprimir-pdf-a-1mb"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Comprimir a 1MB Ahora
            </Link>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
