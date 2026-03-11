import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF a 5MB Online — Reducir Tamaño de PDF | OmnisPDF",
  description:
    "Aplica compresión extrema para reducir el tamaño de tu PDF para portales con límite de 5MB. Compresión máxima para trámites, solicitudes y cargas — rápido, desde tu navegador, gratis.",
  alternates: {
    languages: {
      en: "/compress-pdf-to-5mb",
      es: "/es/comprimir-pdf-a-5mb",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo comprimo un PDF para un límite de carga de 5MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a OmnisPDF, haz clic en Comprimir y descarga el archivo reducido. OmnisPDF usa compresión extrema para reducir drásticamente el tamaño del archivo. Los resultados dependen del contenido de tu PDF." }
    },
    {
      "@type": "Question",
      "name": "¿Mi PDF quedará definitivamente por debajo de 5MB después de la compresión?",
      "acceptedAnswer": { "@type": "Answer", "text": "La compresión extrema reduce drásticamente el tamaño del archivo. La mayoría de los PDFs de menos de 20MB se comprimen significativamente. Los archivos muy pesados en imágenes pueden necesitar dividirse primero y luego comprimir cada parte por separado." }
    },
    {
      "@type": "Question",
      "name": "¿El texto seguirá siendo legible después de la compresión?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. El texto se mantiene nítido y legible. La calidad de las imágenes puede reducirse ligeramente, pero las páginas siguen siendo utilizables." }
    },
    {
      "@type": "Question",
      "name": "¿Por qué los portales de carga tienen un límite de 5MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Muchos portales de gobierno, universidades y solicitudes de empleo establecen un límite de 5MB para gestionar almacenamiento y ancho de banda. Comprimir tu PDF asegura que cumpla con estos requisitos." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo comprimir un PDF a 5MB desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. OmnisPDF funciona en navegadores móviles — sube, comprime y descarga desde tu iPhone o Android." }
    },
    {
      "@type": "Question",
      "name": "¿Qué hago si mi PDF sigue pesando más de 5MB después de la compresión?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si el archivo sigue siendo muy grande, intenta dividirlo en partes más pequeñas con la herramienta Dividir PDF de OmnisPDF, luego comprime cada parte individualmente." }
    }
  ]
}

export default function ComprimirPDFA5MBPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para Límites de 5MB</h1>
              <p className="text-xl text-slate-300 mb-8">
                Aplica compresión extrema para reducir drásticamente el tamaño de tu PDF para portales con límite de carga de 5MB. Desde tu navegador, resultados instantáneos.
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
          processingMessage="Compressing your PDF to under 5MB..."
          successMessage="Your compressed PDF is ready!"
          compressionLevel="extreme"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              ¿Necesitas subir un PDF pero el portal dice &quot;archivo muy grande&quot;? OmnisPDF aplica compresión extrema para reducir drásticamente el tamaño de tu PDF — perfecto para formularios del gobierno, trámites universitarios, solicitudes de empleo y cualquier sitio con límite de carga de 5MB.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Compresión extrema para máxima reducción de tamaño</li>
              <li>✓ Perfecto para portales de carga con límites de tamaño</li>
              <li>✓ El texto se mantiene nítido y legible</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — comprime PDFs en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Cumple con los Límites de Tamaño de los Portales</h2>
              <p className="text-slate-600">
                Los portales de gobierno, solicitudes universitarias y sitios de empleo frecuentemente limitan las cargas a 5MB. OmnisPDF aplica compresión extrema para reducir drásticamente el tamaño de tu archivo, ayudándote a cumplir con estos requisitos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Comprime Documentos Escaneados y Formularios</h2>
              <p className="text-slate-600">
                Los PDFs escaneados frecuentemente pesan 10-30MB. El modo de compresión extrema de OmnisPDF reduce agresivamente los datos de imagen para llevar el archivo por debajo de 5MB manteniendo el texto legible.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">¿Sigue Muy Grande? Divide y Luego Comprime</h2>
              <p className="text-slate-600">
                Si tu PDF sigue pesando más de 5MB después de la compresión, usa la herramienta Dividir PDF de OmnisPDF para separarlo en partes más pequeñas, luego comprime cada una individualmente.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Comprimir un PDF para Límites de 5MB</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a OmnisPDF.",
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
                { name: "Comprimir a 2MB", href: "/compress-pdf-to-2mb", desc: "Compresión aún más fuerte" },
                { name: "Comprimir para Email", href: "/es/comprimir-pdf-para-email", desc: "PDFs listos para email" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Divide si sigue muy grande" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Compresión estándar" },
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
                { q: "¿Cómo comprimo un PDF para un límite de carga de 5MB?", a: "Sube tu PDF a OmnisPDF, haz clic en Comprimir y descarga el archivo reducido. OmnisPDF usa compresión extrema para reducir drásticamente el tamaño del archivo. Los resultados dependen del contenido de tu PDF." },
                { q: "¿Mi PDF quedará definitivamente por debajo de 5MB después de la compresión?", a: "La compresión extrema reduce drásticamente el tamaño del archivo. La mayoría de los PDFs de menos de 20MB se comprimen significativamente. Los archivos muy pesados en imágenes pueden necesitar dividirse primero y luego comprimir cada parte por separado." },
                { q: "¿El texto seguirá siendo legible después de la compresión?", a: "Sí. El texto se mantiene nítido y legible. La calidad de las imágenes puede reducirse ligeramente, pero las páginas siguen siendo utilizables." },
                { q: "¿Por qué los portales de carga tienen un límite de 5MB?", a: "Muchos portales de gobierno, universidades y solicitudes de empleo establecen un límite de 5MB para gestionar almacenamiento y ancho de banda. Comprimir tu PDF asegura que cumpla con estos requisitos." },
                { q: "¿Puedo comprimir un PDF a 5MB desde mi celular?", a: "Sí. OmnisPDF funciona en navegadores móviles — sube, comprime y descarga desde tu iPhone o Android." },
                { q: "¿Qué hago si mi PDF sigue pesando más de 5MB después de la compresión?", a: "Si el archivo sigue siendo muy grande, intenta dividirlo en partes más pequeñas con la herramienta Dividir PDF de OmnisPDF, luego comprime cada parte individualmente." },
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
