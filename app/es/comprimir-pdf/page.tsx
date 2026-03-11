import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF Online — Reducir Tamaño de PDF Gratis | OmnisPDF",
  description:
    "Comprime archivos PDF con OmnisPDF para reducir el tamaño del archivo rápidamente. Reduce PDFs para email y subidas manteniendo el texto legible — sin instalar nada.",
  alternates: {
    languages: {
      en: "/compress-pdf",
      es: "/es/comprimir-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo comprimo un PDF con OmnisPDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF, haz clic en Comprimir PDF y descarga el archivo más pequeño." }
    },
    {
      "@type": "Question",
      "name": "¿Comprimir un PDF reduce la calidad?",
      "acceptedAnswer": { "@type": "Answer", "text": "La compresión reduce el tamaño del archivo optimizando imágenes y datos. El texto generalmente se mantiene legible, pero los PDFs con muchas imágenes pueden perder algo de detalle dependiendo del nivel de compresión." }
    },
    {
      "@type": "Question",
      "name": "¿Por qué mi PDF sigue siendo grande después de comprimirlo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si el PDF ya está optimizado o contiene imágenes de alta resolución, el tamaño puede no reducirse mucho. Intenta dividir el PDF en partes más pequeñas." }
    },
    {
      "@type": "Question",
      "name": "¿OmnisPDF puede comprimir PDFs escaneados?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí — los PDFs escaneados suelen ser los mejores candidatos para la compresión porque contienen imágenes grandes incrustadas." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo comprimir un PDF desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. OmnisPDF funciona en navegadores móviles — sube, comprime y descarga directamente desde tu iPhone o Android." }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el tamaño máximo de PDF que puedo comprimir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Las cuentas gratuitas pueden subir archivos de hasta 25MB. Las cuentas Pro y Business pueden subir hasta 200MB." }
    }
  ]
}

export default function ComprimirPDFPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Reduce el tamaño de tus archivos PDF con OmnisPDF. Comprime PDFs para compartir más rápido, subir archivos más fácil y enviar adjuntos más pequeños por email — rápido y desde tu navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Compresión Inteligente</span></div>
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
          processingMessage="Compressing your PDF..."
          successMessage="Your compressed PDF is ready!"
          showCompressionSelector
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa la herramienta Comprimir PDF de OmnisPDF para reducir el tamaño de tus archivos PDF en segundos. Perfecto para adjuntos de email, límites de subida y compartir archivos más rápido — sube tu PDF, comprímelo y descarga un archivo más pequeño al instante.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Reduce el tamaño de PDFs rápidamente para email y subidas</li>
              <li>✓ Mantén tus PDFs legibles y compartibles después de la compresión</li>
              <li>✓ Ideal para PDFs escaneados, archivos con muchas imágenes y documentos largos</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — comprime PDFs en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Reduce el Tamaño de PDF para Email y Límites de Subida</h2>
              <p className="text-slate-600">
                Muchos servicios limitan el tamaño de los adjuntos. OmnisPDF te ayuda a reducir tus PDFs para que sean más fáciles de enviar y subir sin necesidad de dividirlos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Comprime PDFs con Muchas Imágenes y Escaneados</h2>
              <p className="text-slate-600">
                Los escaneos y PDFs basados en fotos pueden ser enormes. La compresión de PDF reduce los datos de imagen para crear un archivo más pequeño manteniendo las páginas utilizables.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Compresión de PDF Rápida y Online</h2>
              <p className="text-slate-600">
                Sube, comprime, descarga. Sin necesidad de software — OmnisPDF funciona directamente en tu navegador.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Comprimir un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a OmnisPDF.",
                "Elige tu nivel de compresión: Ligera (mejor calidad), Media (equilibrada) o Extrema (máxima reducción).",
                "Haz clic en Comprimir PDF y descarga tu archivo más pequeño.",
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
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Divide si sigue siendo muy grande" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina después de comprimir" },
                { name: "Proteger PDF", href: "/es/proteger-pdf", desc: "Asegura después de comprimir" },
                { name: "Marca de Agua PDF", href: "/es/marca-de-agua-pdf", desc: "Marca después de comprimir" },
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
                {
                  q: "¿Cómo comprimo un PDF con OmnisPDF?",
                  a: "Sube tu PDF, haz clic en Comprimir PDF y descarga el archivo más pequeño.",
                },
                {
                  q: "¿Comprimir un PDF reduce la calidad?",
                  a: "La compresión reduce el tamaño del archivo optimizando imágenes y datos. El texto generalmente se mantiene legible, pero los PDFs con muchas imágenes pueden perder algo de detalle dependiendo del nivel de compresión.",
                },
                {
                  q: "¿Por qué mi PDF sigue siendo grande después de comprimirlo?",
                  a: "Si el PDF ya está optimizado o contiene imágenes de alta resolución, el tamaño puede no reducirse mucho. Intenta dividir el PDF en partes más pequeñas.",
                },
                {
                  q: "¿OmnisPDF puede comprimir PDFs escaneados?",
                  a: "Sí — los PDFs escaneados suelen ser los mejores candidatos para la compresión porque contienen imágenes grandes incrustadas.",
                },
                {
                  q: "¿Puedo comprimir un PDF desde mi celular?",
                  a: "Sí. OmnisPDF funciona en navegadores móviles — sube, comprime y descarga directamente desde tu iPhone o Android.",
                },
                {
                  q: "¿Cuál es el tamaño máximo de PDF que puedo comprimir?",
                  a: "Las cuentas gratuitas pueden subir archivos de hasta 25MB. Las cuentas Pro y Business pueden subir hasta 200MB.",
                },
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
