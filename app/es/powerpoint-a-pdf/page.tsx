import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Presentation, CheckCircle, Zap, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Convertir PowerPoint a PDF Online — PPTX a PDF | PDF.it",
  description:
    "Convierte PPT a PDF en segundos con PDF.it. Transforma tus diapositivas PPT/PPTX en un PDF limpio y fácil de compartir — rápido, simple y desde el navegador.",
  alternates: {
    canonical: "https://pdf.it.com/es/powerpoint-a-pdf",
    languages: {
      "en": "https://pdf.it.com/powerpoint-to-pdf",
      "es": "https://pdf.it.com/es/powerpoint-a-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿PDF.it puede convertir tanto PPT como PPTX a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it soporta ambos formatos de archivo .ppt y .pptx." }
    },
    {
      "@type": "Question",
      "name": "¿El PDF mantiene el diseño y la disposición de mis diapositivas?",
      "acceptedAnswer": { "@type": "Answer", "text": "En la mayoría de los casos, sí. Diapositivas muy complejas, fuentes poco comunes o efectos especiales pueden renderizarse ligeramente diferente dependiendo del archivo fuente." }
    },
    {
      "@type": "Question",
      "name": "¿Las animaciones y transiciones se pasan al PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Un PDF es un formato estático, así que las animaciones y transiciones no se reproducen — las diapositivas se exportan como páginas fijas." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo convertir PowerPoint a PDF desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en navegadores móviles — sube tu presentación y descarga el PDF." }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro subir mi archivo de PowerPoint?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos." }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el tamaño máximo de archivo que puedo convertir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Las cuentas Pro y Business pueden subir archivos de hasta 200MB." }
    }
  ]
}

export default function PowerPointAPDFPage() {
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
                <Presentation className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir PPT a PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convierte PPT/PPTX a PDF con PDF.it — ideal para compartir diapositivas, enviar presentaciones por correo e imprimir materiales.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-orange-500" /><span>Diapositivas Preservadas</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Después de la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>PPT y PPTX Soportados</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".ppt,.pptx"
          toolName="PowerPoint to PDF"
          outputFormat="PDF"
          processingMessage="Convirtiendo tu presentación..."
          successMessage="¡Tu PDF está listo!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa el convertidor de PPT a PDF de PDF.it para transformar un PowerPoint (PPT/PPTX) en un PDF en segundos. Exporta tus diapositivas a un formato fácil de ver en cualquier lugar — perfecto para correo electrónico, impresión y subir a portales.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convierte PowerPoint a PDF en línea en segundos</li>
              <li>✓ Soporta archivos .ppt y .pptx</li>
              <li>✓ Crea PDFs compartibles y listos para presentar</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — funciona desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Convierte Diapositivas PPTX a un PDF Compartible</h2>
              <p className="text-slate-600">
                Los PDFs se abren de forma consistente en todos los dispositivos y no requieren PowerPoint. Convierte tu presentación a PDF para que cualquiera pueda verla en un navegador o lector de PDF.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Ideal para Imprimir y Repartir</h2>
              <p className="text-slate-600">
                ¿Necesitas una versión imprimible de tus diapositivas? Convierte PPT a PDF para imprimir rápidamente, copias de revisión, o entregas de clases y trabajo.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Mantén el Diseño de tus Diapositivas</h2>
              <p className="text-slate-600">
                PDF.it convierte las diapositivas en páginas PDF para que tu texto, imágenes y gráficos sean fáciles de leer y compartir. Nota: las animaciones y transiciones se vuelven estáticas en formato PDF.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Convertir PPT a PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra y suelta tu archivo PPT/PPTX en PDF.it.",
                "Haz clic en Convertir PPT a PDF.",
                "Descarga tu PDF.",
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
                { name: "Office a PDF", href: "/es/office-a-pdf", desc: "Convierte archivos de Office a PDF" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño de tu PDF" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina múltiples PDFs" },
                { name: "Proteger PDF", href: "/es/proteger-pdf", desc: "Protege tu PDF con contraseña" },
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
                  q: "¿PDF.it puede convertir tanto PPT como PPTX a PDF?",
                  a: "Sí. PDF.it soporta ambos formatos de archivo .ppt y .pptx.",
                },
                {
                  q: "¿El PDF mantiene el diseño y la disposición de mis diapositivas?",
                  a: "En la mayoría de los casos, sí. Diapositivas muy complejas, fuentes poco comunes o efectos especiales pueden renderizarse ligeramente diferente dependiendo del archivo fuente.",
                },
                {
                  q: "¿Las animaciones y transiciones se pasan al PDF?",
                  a: "No. Un PDF es un formato estático, así que las animaciones y transiciones no se reproducen — las diapositivas se exportan como páginas fijas.",
                },
                {
                  q: "¿Puedo convertir PowerPoint a PDF desde mi celular?",
                  a: "Sí. PDF.it funciona en navegadores móviles — sube tu presentación y descarga el PDF.",
                },
                {
                  q: "¿Es seguro subir mi archivo de PowerPoint?",
                  a: "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos.",
                },
                {
                  q: "¿Cuál es el tamaño máximo de archivo que puedo convertir?",
                  a: "Las cuentas Pro y Business pueden subir archivos de hasta 200MB.",
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
