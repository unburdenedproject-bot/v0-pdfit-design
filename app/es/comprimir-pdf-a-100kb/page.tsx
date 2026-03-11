import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF a 100KB Online — Reducir Tamaño de PDF | OmnisPDF",
  description:
    "Comprime tu PDF para cumplir con límites de 100KB. Compresión extrema para firmas de email, micro-adjuntos, fotos de credencial y documentos optimizados para móvil — rápido, desde tu navegador, gratis.",
  alternates: {
    languages: {
      en: "/compress-pdf-to-100kb",
      es: "/es/comprimir-pdf-a-100kb",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo comprimo un PDF para un límite de 100KB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a OmnisPDF y haz clic en Comprimir. La herramienta aplica compresión extrema para reducir la resolución de imágenes y optimizar la estructura interna, reduciendo drásticamente el tamaño del archivo. Los resultados dependen del contenido de tu PDF." }
    },
    {
      "@type": "Question",
      "name": "¿Mi PDF quedará definitivamente debajo de 100KB después de comprimirlo?",
      "acceptedAnswer": { "@type": "Answer", "text": "La compresión extrema reduce drásticamente el tamaño del archivo, pero los resultados dependen del contenido del PDF. Los documentos simples de una sola página con texto pueden llegar a menos de 100KB. Los archivos con muchas imágenes o de varias páginas probablemente necesiten dividirse en páginas individuales primero y luego comprimir cada página por separado." }
    },
    {
      "@type": "Question",
      "name": "¿Qué tipos de archivos se pueden comprimir a 100KB de forma realista?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los documentos de una sola página con principalmente texto, firmas simples, fotos de tamaño credencial y formularios pequeños pueden comprimirse a menos de 100KB. Los documentos de varias páginas o con imágenes de alta resolución necesitarán dividirse primero." }
    },
    {
      "@type": "Question",
      "name": "¿Mi PDF seguirá siendo legible después de comprimirlo a 100KB?",
      "acceptedAnswer": { "@type": "Answer", "text": "El texto se mantiene nítido y legible. Las imágenes perderán detalle notable con este nivel de compresión extrema, pero para firmas, credenciales y documentos simples, el resultado sigue siendo utilizable." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo comprimir un PDF a 100KB desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. OmnisPDF funciona en cualquier navegador móvil. Sube tu PDF, comprímelo y descarga el archivo más pequeño directamente en tu iPhone o Android." }
    },
    {
      "@type": "Question",
      "name": "¿Qué hago si mi PDF sigue pesando más de 100KB después de comprimirlo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Divide el PDF en páginas individuales con nuestra herramienta Dividir PDF y luego comprime cada página por separado. Para mejores resultados, quédate solo con la página que necesitas, aplana el PDF y convierte las imágenes a escala de grises antes de comprimir." }
    }
  ]
}

export default function ComprimirPDFA100KBPage() {
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
                <Compress className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para Límites de 100KB</h1>
              <p className="text-xl text-slate-300 mb-8">
                Aplica compresión extrema para reducir drásticamente el tamaño de tu PDF en portales con límites de 100KB. Perfecto para firmas de email, micro-adjuntos, subida de fotos de credencial y documentos optimizados para móvil.
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
          processingMessage="Compressing your PDF for 100KB upload limits..."
          successMessage="Your compressed PDF is ready!"
          compressionLevel="extreme"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">¿Por Qué Comprimir un PDF para Límites de 100KB?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Algunas plataformas exigen un límite de tamaño extremadamente estricto de 100KB. Los adjuntos de firma de email, subida de fotos de credencial, campos de micro-adjuntos y ciertos formularios optimizados para móvil requieren archivos muy pequeños. OmnisPDF aplica compresión extrema para reducir drásticamente el tamaño de tu PDF y ayudarte a cumplir con estos requisitos de subida tan exigentes.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Compresión extrema para máxima reducción de tamaño</li>
              <li>&#10003; Perfecto para firmas de email, credenciales y micro-adjuntos</li>
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
                <h3 className="text-xl font-black text-slate-900 mb-3">Adjuntos de Firma de Email</h3>
                <p className="text-slate-600">
                  Los sistemas de email corporativo frecuentemente limitan los adjuntos de firma a 100KB o menos. Comprime tu logo, vCard o PDF de folleto para que quepa dentro de las restricciones de tamaño de firma de email sin ralentizar la entrega.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Micro-Adjuntos para Formularios en Línea</h3>
                <p className="text-slate-600">
                  Algunos formularios en línea y sistemas de tickets solo permiten adjuntos muy pequeños de menos de 100KB. Comprime tus documentos de soporte para adjuntarlos a tickets de soporte, formularios de retroalimentación o campos de registro.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Documentos Optimizados para Móvil</h3>
                <p className="text-slate-600">
                  Enviar PDFs por conexiones móviles lentas o a dispositivos con almacenamiento limitado se beneficia de la compresión extrema. Reduce tu archivo a menos de 100KB para carga instantánea y mínimo uso de datos.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Subida de Fotos de Credencial e Identificación</h3>
                <p className="text-slate-600">
                  Los sistemas de credenciales de empleados, portales de registro de eventos y plataformas de tarjetas de membresía frecuentemente requieren subida de fotos de menos de 100KB. Comprime tu foto de credencial en PDF para cumplir con estos límites estrictos de tamaño.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Comprimir un PDF para Límites de 100KB</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a OmnisPDF.",
                "Haz clic en Comprimir PDF — la compresión extrema se aplica automáticamente.",
                "Descarga tu PDF más pequeño. Si sigue superando 100KB, intenta dividirlo en una sola página primero y luego comprime esa página.",
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
              <h2 className="text-2xl font-black text-slate-900 mb-3">Consejos para Lograr Menos de 100KB</h2>
              <p className="text-slate-600 mb-4">
                Lograr menos de 100KB requiere optimización agresiva. Prueba estas estrategias:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Usa solo una página</strong> — extrae la página que necesitas con nuestra herramienta Dividir PDF y luego comprime solo esa página.</li>
                <li>&#10003; <strong>Elimina contenido innecesario</strong> — borra páginas, imágenes o elementos que no sean estrictamente necesarios.</li>
                <li>&#10003; <strong>Usa blanco y negro</strong> — convierte las imágenes a escala de grises antes de comprimir. Los datos de color ocupan mucho espacio.</li>
                <li>&#10003; <strong>Aplana el PDF</strong> — si el PDF tiene campos de formulario, anotaciones o capas, aplánalo primero para eliminar datos ocultos.</li>
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
                { name: "Comprimir a 200KB", desc: "Para límites de 200KB.", href: "/es/comprimir-pdf-a-200kb", icon: Compress },
                { name: "Comprimir a 500KB", desc: "Para límites de 500KB.", href: "/es/comprimir-pdf-a-500kb", icon: Compress },
                { name: "Comprimir a 1MB", desc: "Para límites de 1MB.", href: "/es/comprimir-pdf-a-1mb", icon: Compress },
                { name: "Comprimir para Email", desc: "Para adjuntos de email.", href: "/es/comprimir-pdf-para-email", icon: Compress },
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
                { q: "¿Cómo comprimo un PDF para un límite de 100KB?", a: "Sube tu PDF a OmnisPDF y haz clic en Comprimir. La herramienta aplica compresión extrema para reducir la resolución de imágenes y optimizar la estructura interna, reduciendo drásticamente el tamaño del archivo. Los resultados dependen del contenido de tu PDF." },
                { q: "¿Mi PDF quedará definitivamente debajo de 100KB después de comprimirlo?", a: "La compresión extrema reduce drásticamente el tamaño del archivo, pero los resultados dependen del contenido del PDF. Los documentos simples de una sola página con texto pueden llegar a menos de 100KB. Los archivos con muchas imágenes o de varias páginas probablemente necesiten dividirse en páginas individuales primero y luego comprimir cada página por separado." },
                { q: "¿Qué tipos de archivos se pueden comprimir a 100KB de forma realista?", a: "Los documentos de una sola página con principalmente texto, firmas simples, fotos de tamaño credencial y formularios pequeños pueden comprimirse a menos de 100KB. Los documentos de varias páginas o con imágenes de alta resolución necesitarán dividirse primero." },
                { q: "¿Mi PDF seguirá siendo legible después de comprimirlo a 100KB?", a: "El texto se mantiene nítido y legible. Las imágenes perderán detalle notable con este nivel de compresión extrema, pero para firmas, credenciales y documentos simples, el resultado sigue siendo utilizable." },
                { q: "¿Puedo comprimir un PDF a 100KB desde mi celular?", a: "Sí. OmnisPDF funciona en cualquier navegador móvil. Sube tu PDF, comprímelo y descarga el archivo más pequeño directamente en tu iPhone o Android." },
                { q: "¿Qué hago si mi PDF sigue pesando más de 100KB después de comprimirlo?", a: "Divide el PDF en páginas individuales con nuestra herramienta Dividir PDF y luego comprime cada página por separado. Para mejores resultados, quédate solo con la página que necesitas, aplana el PDF y convierte las imágenes a escala de grises antes de comprimir." },
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
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">¿Necesitas Compresión Extrema de PDF?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Sube tu PDF y aplica compresión máxima en segundos. Sin registro, sin instalación, sin esperas.
            </p>
            <Link
              href="/es/comprimir-pdf-a-100kb"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Comprimir a 100KB Ahora
            </Link>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
