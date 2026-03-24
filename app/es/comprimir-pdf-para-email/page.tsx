import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Mail } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF para Email — Reducir PDF para Adjuntar | PDF.it",
  description:
    "Comprime archivos PDF para adjuntos de email con PDF.it. Reduce PDFs para cumplir los límites de Gmail, Outlook y Yahoo — rápido, desde tu navegador, sin registro.",
  alternates: {
    languages: {
      en: "/compress-pdf-for-email",
      es: "/es/comprimir-pdf-para-email",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo comprimo un PDF para email?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a PDF.it, haz clic en Comprimir y descarga un archivo más pequeño listo para adjuntar a tu email." }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el tamaño máximo de adjunto en email?",
      "acceptedAnswer": { "@type": "Answer", "text": "Gmail permite 25MB, Outlook permite 20MB y Yahoo Mail permite 25MB. PDF.it comprime tu PDF para que quepa dentro de estos límites." }
    },
    {
      "@type": "Question",
      "name": "¿El PDF se verá bien después de la compresión?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it usa compresión inteligente que mantiene el texto nítido y las páginas legibles. La calidad de imagen puede reducirse ligeramente, pero el documento se mantiene profesional." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo comprimir varios PDFs para email?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Sube varios PDFs y PDF.it comprimirá cada uno individualmente. También puedes unirlos primero con la herramienta Unir PDF." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo comprimir un PDF para email desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en navegadores móviles — comprime y envía PDFs por email directamente desde tu iPhone o Android." }
    },
    {
      "@type": "Question",
      "name": "¿Qué hago si mi PDF sigue siendo muy grande para email?",
      "acceptedAnswer": { "@type": "Answer", "text": "Intenta usar la herramienta Dividir PDF de PDF.it para separar el documento en partes más pequeñas, luego comprime y envía cada parte por separado." }
    }
  ]
}

export default function ComprimirPDFParaEmailPage() {
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
                <Mail className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para Email</h1>
              <p className="text-xl text-slate-300 mb-8">
                Reduce tu PDF para que quepa como adjunto de email. Funciona con Gmail, Outlook, Yahoo Mail y cualquier proveedor de correo — compresión instantánea en tu navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Compresión Inteligente</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-orange-500" /><span>Tamaño Listo para Email</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Compress PDF"
          outputFormat="PDF"
          processingMessage="Compressing your PDF for email..."
          successMessage="Your email-ready PDF is ready!"
          compressionLevel="recommended"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Los adjuntos de email tienen límites de tamaño — Gmail tiene un tope de 25MB, Outlook de 20MB. PDF.it comprime tu PDF para que quepa como adjunto de email sin perder legibilidad. Sube, comprime, descarga y adjunta en segundos.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Comprime PDFs para cumplir los límites de Gmail, Outlook y Yahoo</li>
              <li>✓ Compresión inteligente que mantiene documentos profesionales</li>
              <li>✓ Ideal para contratos, facturas, informes y formularios</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — comprime PDFs en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Email Limits */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Límites de Tamaño de Adjuntos por Email</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { provider: "Gmail", limit: "25MB", color: "bg-red-50 border-red-200" },
                { provider: "Outlook", limit: "20MB", color: "bg-blue-50 border-blue-200" },
                { provider: "Yahoo Mail", limit: "25MB", color: "bg-purple-50 border-purple-200" },
              ].map((item) => (
                <div key={item.provider} className={`${item.color} border rounded-xl p-6 text-center`}>
                  <div className="text-lg font-bold text-slate-900">{item.provider}</div>
                  <div className="text-3xl font-black text-orange-600 mt-2">{item.limit}</div>
                  <div className="text-sm text-slate-500 mt-1">adjunto máximo</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Envía Contratos y Facturas Sin Que Reboten</h2>
              <p className="text-slate-600">
                Los contratos y facturas grandes con firmas a menudo superan los límites de email. PDF.it los comprime a un tamaño enviable manteniendo cada página nítida y profesional.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Comprime Informes y Presentaciones</h2>
              <p className="text-slate-600">
                Los informes con gráficos, imágenes y tablas pueden ser enormes. PDF.it reduce el tamaño del archivo para que puedas enviarlos por email directamente en vez de usar enlaces de archivos compartidos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Funciona Desde Cualquier Dispositivo</h2>
              <p className="text-slate-600">
                ¿Necesitas enviar un PDF comprimido desde tu celular? PDF.it funciona en navegadores móviles — comprime y envía por email sobre la marcha.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Comprimir un PDF para Email</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Haz clic en Comprimir PDF — la compresión inteligente se aplica automáticamente.",
                "Descarga el PDF más pequeño y adjúntalo a tu email.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Comprimir a 5MB", href: "/compress-pdf-to-5mb", desc: "Cumple límites de 5MB" },
                { name: "Comprimir a 2MB", href: "/compress-pdf-to-2mb", desc: "Tamaños estrictos" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina antes de enviar" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Divide si sigue siendo muy grande" },
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "¿Cómo comprimo un PDF para email?", a: "Sube tu PDF a PDF.it, haz clic en Comprimir y descarga un archivo más pequeño listo para adjuntar a tu email." },
                { q: "¿Cuál es el tamaño máximo de adjunto en email?", a: "Gmail permite 25MB, Outlook permite 20MB y Yahoo Mail permite 25MB. PDF.it comprime tu PDF para que quepa dentro de estos límites." },
                { q: "¿El PDF se verá bien después de la compresión?", a: "Sí. PDF.it usa compresión inteligente que mantiene el texto nítido y las páginas legibles. La calidad de imagen puede reducirse ligeramente, pero el documento se mantiene profesional." },
                { q: "¿Puedo comprimir varios PDFs para email?", a: "Sí. Sube varios PDFs y PDF.it comprimirá cada uno individualmente. También puedes unirlos primero con la herramienta Unir PDF." },
                { q: "¿Puedo comprimir un PDF para email desde mi celular?", a: "Sí. PDF.it funciona en navegadores móviles — comprime y envía PDFs por email directamente desde tu iPhone o Android." },
                { q: "¿Qué hago si mi PDF sigue siendo muy grande para email?", a: "Intenta usar la herramienta Dividir PDF de PDF.it para separar el documento en partes más pequeñas, luego comprime y envía cada parte por separado." },
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
