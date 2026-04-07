import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF para WhatsApp — Envía PDFs por WhatsApp | PDF.it",
  description:
    "Comprime PDFs para enviar por WhatsApp. WhatsApp tiene un límite de 100MB para documentos — reduce el tamaño de tu PDF para enviarlo fácilmente.",
  alternates: {
    languages: {
      en: "/compress-pdf-for-whatsapp",
      es: "/es/comprimir-pdf-para-whatsapp",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo comprimo un PDF para enviarlo por WhatsApp?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a PDF.it y haz clic en Comprimir. La compresión recomendada reduce el tamaño del archivo optimizando imágenes y la estructura interna, haciéndolo mucho más pequeño y rápido de enviar por WhatsApp." }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el límite de tamaño de archivo en WhatsApp para PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "WhatsApp permite adjuntos de documentos de hasta 100MB. Sin embargo, los PDFs grandes son lentos para subir y descargar en redes móviles. Comprimir tu PDF asegura una entrega rápida incluso en conexiones lentas y ahorra datos móviles." }
    },
    {
      "@type": "Question",
      "name": "¿El PDF seguirá siendo legible después de comprimirlo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. El texto se mantiene nítido y completamente legible. Las imágenes conservan buen detalle con la compresión recomendada. El documento sigue siendo perfectamente utilizable para compartir por WhatsApp." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo comprimir un PDF para WhatsApp desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en cualquier navegador móvil en iPhone o Android. Comprime tu PDF y compártelo directamente en WhatsApp sin instalar ninguna app adicional." }
    },
    {
      "@type": "Question",
      "name": "¿Por qué mi PDF es demasiado grande para enviar por WhatsApp?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los PDFs con imágenes escaneadas, gráficos de alta resolución o fuentes incrustadas pueden ser muy grandes. La compresión reduce estos elementos manteniendo el documento legible, haciéndolo mucho más fácil de compartir." }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si mi PDF sigue siendo muy grande después de comprimirlo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Intenta dividir el PDF en partes más pequeñas con nuestra herramienta Dividir PDF, luego comprime cada parte individualmente. También puedes aplanar el PDF o eliminar páginas innecesarias para reducir aún más el tamaño." }
    }
  ]
}

export default function ComprimirPDFParaWhatsAppPageEs() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema-es"
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
                <Compress className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para WhatsApp</h1>
              <p className="text-xl text-slate-300 mb-8">
                WhatsApp permite documentos de hasta 100MB, pero los PDFs grandes son lentos para enviar y descargar — especialmente con datos móviles. Comprime tu PDF para que se envíe y descargue rápidamente, ahorrando datos y tiempo.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Compresión Inteligente</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Después de la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Compress PDF"
          outputFormat="PDF"
          processingMessage="Comprimiendo tu PDF para WhatsApp..."
          successMessage="¡Tu PDF listo para WhatsApp está listo!"
          compressionLevel="recommended"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">¿Por Qué Comprimir un PDF para WhatsApp?</h2>
            <p className="text-lg text-slate-600 mb-8">
              WhatsApp admite adjuntos de documentos de hasta 100MB, pero los PDFs grandes son lentos para enviar y descargar — especialmente con datos móviles. Comprimir tu PDF antes de compartirlo asegura una entrega rápida, ahorra datos y facilita que el destinatario abra el archivo en cualquier dispositivo.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Compresión inteligente para compartir rápido en el celular</li>
              <li>&#10003; Envía documentos, recibos y contratos al instante</li>
              <li>&#10003; El texto se mantiene nítido y legible en cualquier pantalla</li>
              <li>&#10003; Funciona en iPhone, Android, Mac y Windows</li>
              <li>&#10003; Sin instalar apps — comprime en tu navegador y comparte</li>
            </ul>
          </div>
        </section>

        {/* WhatsApp Limit */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Límite de WhatsApp para Documentos</h2>
            <div className="max-w-md mx-auto">
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="text-lg font-bold text-slate-900">WhatsApp</div>
                <div className="text-4xl font-black text-[#14D8C4] mt-2">100MB</div>
                <div className="text-sm text-slate-500 mt-1">límite para documentos</div>
                <p className="text-sm text-slate-600 mt-4">
                  Aunque el límite es de 100MB, los archivos más pequeños se envían y descargan mucho más rápido — especialmente con datos móviles. Comprimir tu PDF mejora la experiencia tanto para ti como para el destinatario.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comunes</h2>
            <div className="space-y-10">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Compartir Facturas</h3>
                <p className="text-slate-600">
                  Envía rápidamente facturas y cotizaciones a clientes por WhatsApp. Los PDFs comprimidos llegan al instante y se abren sin problemas en cualquier celular, mejorando la comunicación con tus clientes.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Enviar Contratos</h3>
                <p className="text-slate-600">
                  ¿Necesitas que alguien revise un contrato sobre la marcha? Comprime el PDF para que se descargue al instante en su celular. Pueden leerlo y responder sin esperar a que un archivo grande cargue.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Documentos Escolares</h3>
                <p className="text-slate-600">
                  Estudiantes y profesores suelen compartir tareas, apuntes y material de estudio en grupos de WhatsApp. Comprimir los PDFs asegura que todos puedan descargarlos rápidamente sin gastar muchos datos móviles.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Recibos y Comprobantes</h3>
                <p className="text-slate-600">
                  Comparte recibos de compra, confirmaciones de pago y comprobantes por WhatsApp. La compresión mantiene los archivos pequeños para que se envíen en segundos, incluso con conexiones lentas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Comprimir un PDF para WhatsApp</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra y suelta tu PDF en PDF.it.",
                "Haz clic en Comprimir PDF — la compresión recomendada se aplica automáticamente para reducir el tamaño del archivo.",
                "Descarga tu PDF más pequeño y compártelo en WhatsApp. Si aún es muy grande, prueba dividir el archivo primero y luego comprime cada parte.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Más Herramientas PDF</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Comprimir PDF", desc: "Compresión estándar.", href: "/es/comprimir-pdf", icon: Compress },
                { name: "Comprimir a 1MB", desc: "Para límites de 1MB.", href: "/es/comprimir-pdf-a-1mb", icon: Compress },
                { name: "Comprimir a 2MB", desc: "Para límites de 2MB.", href: "/es/comprimir-pdf-a-2mb", icon: Compress },
                { name: "Comprimir para Email", desc: "Para adjuntos de email.", href: "/es/comprimir-pdf-para-email", icon: Compress },
                { name: "Dividir PDF", desc: "Divide si aún es muy grande.", href: "/es/dividir-pdf", icon: Scissors },
                { name: "Unir PDF", desc: "Combina varios PDFs.", href: "/es/unir-pdf", icon: Merge },
                { name: "Aplanar PDF", desc: "Elimina campos y anotaciones.", href: "/es/aplanar-pdf", icon: FileText },
                { name: "Rotar PDF", desc: "Corrige la orientación.", href: "/es/rotar-pdf", icon: RotateCw },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col items-center text-center rounded-xl border border-gray-200 bg-white p-4 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#14D8C4] to-[#0FBFB0] rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    <tool.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#14D8C4] transition-colors mb-1">
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
                { q: "¿Cómo comprimo un PDF para enviarlo por WhatsApp?", a: "Sube tu PDF a PDF.it y haz clic en Comprimir. La compresión recomendada reduce el tamaño del archivo optimizando imágenes y la estructura interna, haciéndolo mucho más pequeño y rápido de enviar por WhatsApp." },
                { q: "¿Cuál es el límite de tamaño de archivo en WhatsApp para PDFs?", a: "WhatsApp permite adjuntos de documentos de hasta 100MB. Sin embargo, los PDFs grandes son lentos para subir y descargar en redes móviles. Comprimir tu PDF asegura una entrega rápida incluso en conexiones lentas y ahorra datos móviles." },
                { q: "¿El PDF seguirá siendo legible después de comprimirlo?", a: "Sí. El texto se mantiene nítido y completamente legible. Las imágenes conservan buen detalle con la compresión recomendada. El documento sigue siendo perfectamente utilizable para compartir por WhatsApp." },
                { q: "¿Puedo comprimir un PDF para WhatsApp desde mi celular?", a: "Sí. PDF.it funciona en cualquier navegador móvil en iPhone o Android. Comprime tu PDF y compártelo directamente en WhatsApp sin instalar ninguna app adicional." },
                { q: "¿Por qué mi PDF es demasiado grande para enviar por WhatsApp?", a: "Los PDFs con imágenes escaneadas, gráficos de alta resolución o fuentes incrustadas pueden ser muy grandes. La compresión reduce estos elementos manteniendo el documento legible, haciéndolo mucho más fácil de compartir." },
                { q: "¿Qué pasa si mi PDF sigue siendo muy grande después de comprimirlo?", a: "Intenta dividir el PDF en partes más pequeñas con nuestra herramienta Dividir PDF, luego comprime cada parte individualmente. También puedes aplanar el PDF o eliminar páginas innecesarias para reducir aún más el tamaño." },
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
            <h2 className="text-2xl font-black mb-4">¿Listo para Compartir PDFs en WhatsApp?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Comprime tu PDF en segundos y compártelo al instante. Sin registro, sin instalación, sin esperas.
            </p>
            <Link
              href="/es/comprimir-pdf-para-whatsapp"
              className="inline-block bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Comprimir para WhatsApp Ahora
            </Link>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
