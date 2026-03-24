import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF a 2MB Online — Reducir Tamaño de PDF | PDF.it",
  description:
    "Comprime tu PDF para cumplir con límites de 2MB. Compresión extrema para formularios gubernamentales, solicitudes de visa y subidas a portales — rápido, desde tu navegador, gratis.",
  alternates: {
    languages: {
      en: "/compress-pdf-to-2mb",
      es: "/es/comprimir-pdf-a-2mb",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo comprimo un PDF para un límite de 2MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a PDF.it, haz clic en Comprimir y descarga el archivo reducido. PDF.it usa compresión extrema para reducir drásticamente el tamaño del archivo. Los resultados dependen del contenido de tu PDF." }
    },
    {
      "@type": "Question",
      "name": "¿Mi PDF quedará definitivamente debajo de 2MB después de comprimirlo?",
      "acceptedAnswer": { "@type": "Answer", "text": "La compresión extrema reduce drásticamente el tamaño del archivo. La mayoría de los PDFs de menos de 10MB se comprimen significativamente. Los archivos con muchas imágenes pueden necesitar dividirse primero y luego comprimir cada parte por separado." }
    },
    {
      "@type": "Question",
      "name": "¿Se afecta la calidad al comprimir a 2MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "El texto se mantiene nítido y completamente legible. Las imágenes pueden perder algo de calidad, pero las páginas se mantienen claras y utilizables para la mayoría de los propósitos." }
    },
    {
      "@type": "Question",
      "name": "¿Qué tipos de portales requieren un PDF de 2MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Muchos formularios gubernamentales, solicitudes de visa, entregas de exámenes y portales de recursos humanos requieren PDFs de menos de 2MB. PDF.it te ayuda a cumplir con estos requisitos estrictos." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo comprimir un PDF a 2MB desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en navegadores móviles — sube, comprime y descarga desde tu iPhone o Android." }
    },
    {
      "@type": "Question",
      "name": "¿Qué hago si mi PDF sigue pesando más de 2MB después de comprimirlo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Intenta dividir el PDF en secciones más pequeñas con la herramienta Dividir PDF de PDF.it y luego comprime cada parte por separado." }
    }
  ]
}

export default function ComprimirPDFA2MBPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para Límites de 2MB</h1>
              <p className="text-xl text-slate-300 mb-8">
                Aplica compresión extrema para reducir drásticamente el tamaño de tu PDF en portales con límites de 2MB. Perfecto para formularios gubernamentales, solicitudes de visa y entregas de exámenes.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Compresión Máxima</span></div>
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
          processingMessage="Compressing your PDF to under 2MB..."
          successMessage="Your compressed PDF is ready!"
          compressionLevel="extreme"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Muchos portales oficiales requieren PDFs de menos de 2MB — solicitudes de visa, formularios gubernamentales, entregas de exámenes y sistemas de recursos humanos. PDF.it aplica compresión extrema para reducir drásticamente el tamaño de tu PDF y ayudarte a cumplir con los requisitos estrictos de subida.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Compresión extrema para máxima reducción de tamaño</li>
              <li>&#10003; Perfecto para portales de visa, gobierno y exámenes</li>
              <li>&#10003; El texto se mantiene nítido y legible</li>
              <li>&#10003; Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>&#10003; Sin instalación — comprime PDFs en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Cumple con los Requisitos Estrictos de 2MB</h2>
              <p className="text-slate-600">
                Los portales gubernamentales, solicitudes de visa y sistemas de exámenes frecuentemente exigen un límite estricto de 2MB. El modo de compresión extrema de PDF.it reduce agresivamente el tamaño del archivo para que puedas enviar tu documento sin problemas.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Comprime Identificaciones y Documentos Escaneados</h2>
              <p className="text-slate-600">
                Los documentos de identidad, certificados y formularios escaneados frecuentemente superan los 2MB. PDF.it reduce el tamaño de las imágenes incrustadas manteniendo el texto legible para entregas oficiales.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">¿Sigue siendo muy grande? Divide y luego comprime</h2>
              <p className="text-slate-600">
                Si tu PDF sigue superando los 2MB después de comprimirlo, usa la herramienta Dividir PDF de PDF.it para separarlo en páginas individuales y luego comprime cada una por separado.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Comprimir un PDF para Límites de 2MB</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Haz clic en Comprimir PDF — la compresión extrema se aplica automáticamente.",
                "Descarga tu PDF más pequeño y súbelo a tu portal.",
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
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Compresión estándar" },
                { name: "Comprimir para Email", href: "/es/comprimir-pdf-para-email", desc: "PDFs listos para email" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Divide si sigue siendo grande" },
                { name: "Comprimir a 1MB", href: "/es/comprimir-pdf-a-1mb", desc: "Límite más estricto" },
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
                { q: "¿Cómo comprimo un PDF para un límite de 2MB?", a: "Sube tu PDF a PDF.it, haz clic en Comprimir y descarga el archivo reducido. PDF.it usa compresión extrema para reducir drásticamente el tamaño del archivo. Los resultados dependen del contenido de tu PDF." },
                { q: "¿Mi PDF quedará definitivamente debajo de 2MB después de comprimirlo?", a: "La compresión extrema reduce drásticamente el tamaño del archivo. La mayoría de los PDFs de menos de 10MB se comprimen significativamente. Los archivos con muchas imágenes pueden necesitar dividirse primero y luego comprimir cada parte por separado." },
                { q: "¿Se afecta la calidad al comprimir a 2MB?", a: "El texto se mantiene nítido y completamente legible. Las imágenes pueden perder algo de calidad, pero las páginas se mantienen claras y utilizables para la mayoría de los propósitos." },
                { q: "¿Qué tipos de portales requieren un PDF de 2MB?", a: "Muchos formularios gubernamentales, solicitudes de visa, entregas de exámenes y portales de recursos humanos requieren PDFs de menos de 2MB. PDF.it te ayuda a cumplir con estos requisitos estrictos." },
                { q: "¿Puedo comprimir un PDF a 2MB desde mi celular?", a: "Sí. PDF.it funciona en navegadores móviles — sube, comprime y descarga desde tu iPhone o Android." },
                { q: "¿Qué hago si mi PDF sigue pesando más de 2MB después de comprimirlo?", a: "Intenta dividir el PDF en secciones más pequeñas con la herramienta Dividir PDF de PDF.it y luego comprime cada parte por separado." },
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
