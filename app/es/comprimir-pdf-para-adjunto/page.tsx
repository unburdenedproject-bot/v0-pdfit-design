import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF para Adjunto — Reduce el Tamaño para Enviar por Email | PDF.it",
  description:
    "Comprime PDFs para adjuntos de correo electrónico. Reduce el tamaño para cumplir límites de Gmail, Outlook y Yahoo.",
  alternates: {
    languages: {
      en: "/compress-pdf-for-attachment",
      es: "/es/comprimir-pdf-para-adjunto",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo comprimo un PDF para adjuntarlo a un email?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a PDF.it y haz clic en Comprimir. La compresión recomendada reduce el tamaño del archivo manteniendo el texto y las imágenes con buena apariencia, para que tu adjunto se suba rápidamente y sea fácil de abrir." }
    },
    {
      "@type": "Question",
      "name": "¿Cuáles son los límites de tamaño de adjuntos en Gmail, Outlook y Yahoo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Gmail permite adjuntos de hasta 25MB, Outlook permite hasta 20MB y Yahoo Mail permite hasta 25MB. Si tu PDF excede estos límites, PDF.it lo comprime para que quepa sin problemas." }
    },
    {
      "@type": "Question",
      "name": "¿La compresión afecta la calidad del PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "La compresión recomendada preserva la calidad visual. El texto se mantiene nítido y claro, y las imágenes conservan buen detalle. El documento se verá profesional cuando el destinatario lo abra." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo comprimir varios PDFs para adjuntarlos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios Pro pueden comprimir múltiples PDFs en lote. Sube todos tus archivos, comprímelos juntos y descarga cada uno listo para adjuntar." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo comprimir un PDF para adjunto desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en cualquier navegador móvil. Sube tu PDF, comprímelo y adjunta el archivo más pequeño — todo desde tu iPhone o dispositivo Android sin instalar una app." }
    },
    {
      "@type": "Question",
      "name": "¿Qué hago si mi PDF sigue siendo muy grande después de comprimirlo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Intenta dividir el PDF en partes más pequeñas con nuestra herramienta Dividir PDF, luego comprime y adjunta cada parte por separado. También puedes aplanar el PDF o eliminar páginas innecesarias antes de comprimir." }
    }
  ]
}

export default function ComprimirPDFParaAdjuntoPageEs() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para Adjunto</h1>
              <p className="text-xl text-slate-300 mb-8">
                Reduce el tamaño de tus PDFs para cumplir con los límites de adjuntos de Gmail, Outlook y Yahoo. La compresión recomendada mantiene la calidad alta mientras reduce el tamaño del archivo para que se envíe sin problemas.
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
          processingMessage="Comprimiendo tu PDF para adjunto..."
          successMessage="¡Tu PDF listo para adjuntar está listo!"
          compressionLevel="recommended"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">¿Por Qué Comprimir PDFs para Adjuntos de Email?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Los proveedores de correo electrónico aplican límites estrictos de tamaño para adjuntos. Si tu PDF excede el límite, el email rebota o el archivo no se adjunta. Comprimir tu PDF antes de enviarlo asegura que llegue sin problemas a la bandeja de entrada del destinatario.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; La compresión recomendada preserva la calidad mientras reduce el tamaño</li>
              <li>&#10003; Cumple los límites de Gmail (25MB), Outlook (20MB) y Yahoo (25MB)</li>
              <li>&#10003; Los archivos más pequeños se suben más rápido al servidor de correo</li>
              <li>&#10003; Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>&#10003; Sin instalación — comprime PDFs directamente en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Email Limits */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Límites de Tamaño de Adjuntos por Proveedor</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { provider: "Gmail", limit: "25MB", color: "bg-red-50 border-red-200" },
                { provider: "Outlook", limit: "20MB", color: "bg-blue-50 border-blue-200" },
                { provider: "Yahoo Mail", limit: "25MB", color: "bg-purple-50 border-purple-200" },
              ].map((item) => (
                <div key={item.provider} className={`${item.color} border rounded-xl p-6 text-center`}>
                  <div className="text-lg font-bold text-slate-900">{item.provider}</div>
                  <div className="text-3xl font-black text-[#14D8C4] mt-2">{item.limit}</div>
                  <div className="text-sm text-slate-500 mt-1">tamaño máximo de adjunto</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comunes</h2>
            <div className="space-y-10">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Contratos y Facturas</h3>
                <p className="text-slate-600">
                  Los contratos con firmas y las facturas con logos e imágenes suelen exceder los límites de adjuntos. Comprime estos documentos para enviarlos directamente por email sin que reboten.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Reportes y Presentaciones</h3>
                <p className="text-slate-600">
                  Los reportes con gráficos, tablas e imágenes pueden ser muy pesados. Comprime tus reportes para enviarlos directamente por email en lugar de usar enlaces de descarga.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Desde Cualquier Dispositivo</h3>
                <p className="text-slate-600">
                  ¿Necesitas enviar un PDF comprimido desde tu celular? PDF.it funciona en cualquier navegador móvil — comprime y adjunta tu PDF directamente desde tu iPhone o Android sin instalar apps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Comprimir un PDF para Adjunto</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra y suelta tu PDF en PDF.it.",
                "Haz clic en Comprimir PDF — se aplica compresión recomendada para reducir el tamaño preservando la calidad.",
                "Descarga tu PDF más pequeño y adjúntalo a tu email. Si aún es muy grande, prueba dividir el archivo primero y luego comprime cada parte.",
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Comprimir a 5MB", desc: "Para límites de 5MB.", href: "/es/comprimir-pdf-a-5mb", icon: Compress },
                { name: "Comprimir a 2MB", desc: "Para límites de 2MB.", href: "/es/comprimir-pdf-a-2mb", icon: Compress },
                { name: "Unir PDF", desc: "Combina varios PDFs.", href: "/es/unir-pdf", icon: Merge },
                { name: "Dividir PDF", desc: "Divide si aún es muy grande.", href: "/es/dividir-pdf", icon: Scissors },
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
                { q: "¿Cómo comprimo un PDF para adjuntarlo a un email?", a: "Sube tu PDF a PDF.it y haz clic en Comprimir. La compresión recomendada reduce el tamaño del archivo manteniendo el texto y las imágenes con buena apariencia, para que tu adjunto se suba rápidamente y sea fácil de abrir." },
                { q: "¿Cuáles son los límites de tamaño de adjuntos en Gmail, Outlook y Yahoo?", a: "Gmail permite adjuntos de hasta 25MB, Outlook permite hasta 20MB y Yahoo Mail permite hasta 25MB. Si tu PDF excede estos límites, PDF.it lo comprime para que quepa sin problemas." },
                { q: "¿La compresión afecta la calidad del PDF?", a: "La compresión recomendada preserva la calidad visual. El texto se mantiene nítido y claro, y las imágenes conservan buen detalle. El documento se verá profesional cuando el destinatario lo abra." },
                { q: "¿Puedo comprimir varios PDFs para adjuntarlos?", a: "Los usuarios Pro pueden comprimir múltiples PDFs en lote. Sube todos tus archivos, comprímelos juntos y descarga cada uno listo para adjuntar." },
                { q: "¿Puedo comprimir un PDF para adjunto desde mi celular?", a: "Sí. PDF.it funciona en cualquier navegador móvil. Sube tu PDF, comprímelo y adjunta el archivo más pequeño — todo desde tu iPhone o dispositivo Android sin instalar una app." },
                { q: "¿Qué hago si mi PDF sigue siendo muy grande después de comprimirlo?", a: "Intenta dividir el PDF en partes más pequeñas con nuestra herramienta Dividir PDF, luego comprime y adjunta cada parte por separado. También puedes aplanar el PDF o eliminar páginas innecesarias antes de comprimir." },
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
            <h2 className="text-2xl font-black mb-4">¿Necesitas Reducir un PDF para Adjuntarlo?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Comprime tu PDF en segundos para que se adjunte sin problemas en cualquier proveedor de email. Sin registro, sin instalación, sin esperas.
            </p>
            <Link
              href="/es/comprimir-pdf-para-adjunto"
              className="inline-block bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Comprimir para Adjunto Ahora
            </Link>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
