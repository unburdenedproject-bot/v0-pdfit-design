import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Merge, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Unir Documentos en Línea — Combina Archivos en Un Solo PDF | PDF.it",
  description:
    "Une documentos en línea con PDF.it. Combina múltiples archivos en un solo PDF para compartir, imprimir o archivar — rápido, gratis y desde tu navegador.",
  alternates: {
    languages: {
      en: "/merge-documents-online",
      es: "/es/unir-documentos-en-linea",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo puedo unir documentos en línea?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tus documentos PDF a PDF.it, ordénalos como prefieras y haz clic en Unir. Tu documento combinado estará listo para descargar en segundos — sin necesidad de software." }
    },
    {
      "@type": "Question",
      "name": "¿Qué tipos de documentos puedo unir?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it une archivos PDF directamente. Si tienes archivos Word, Excel o PowerPoint, usa las herramientas de conversión de PDF.it para convertirlos a PDF primero y luego únalos en un solo documento." }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro unir documentos en línea?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it usa conexiones encriptadas y elimina todos los archivos subidos después de tu sesión. Tus documentos nunca se almacenan permanentemente en nuestros servidores." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo unir documentos sin instalar software?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it es 100% basado en navegador. Sin descargas, sin plugins, sin software de escritorio — solo sube, une y descarga." }
    },
    {
      "@type": "Question",
      "name": "¿Hay un límite de tamaño de archivo para unir documentos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios gratuitos pueden subir archivos de hasta 25MB cada uno. Los usuarios Pro tienen un límite de 200MB por archivo para manejar documentos grandes como presentaciones, informes y manuales." }
    },
    {
      "@type": "Question",
      "name": "¿Por qué debería unir documentos en línea en vez de usar software de escritorio?",
      "acceptedAnswer": { "@type": "Answer", "text": "Unir en línea es más rápido, no requiere instalación y funciona en cualquier dispositivo. Puedes unir documentos desde tu teléfono, tablet o cualquier computadora con un navegador — sin necesidad de Adobe Acrobat ni software de pago." }
    }
  ]
}

export default function UnirDocumentosEnLineaPage() {
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
                <Merge className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Unir Documentos en Línea</h1>
              <p className="text-xl text-slate-300 mb-8">
                Combina múltiples documentos en un solo PDF para compartir, imprimir o archivar. Sin software que instalar — une documentos directamente en tu navegador, rápido y gratis.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Unión Instantánea</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Merge PDF"
          outputFormat="PDF"
          processingMessage="Uniendo tus documentos..."
          successMessage="¡Tu documento combinado está listo!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Deja de manejar múltiples archivos. PDF.it te permite unir documentos en línea en un solo PDF — perfecto para combinar reportes, contratos, presentaciones y materiales de referencia en un solo archivo profesional. Sin software de escritorio, sin suscripciones, sin complicaciones.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Une cualquier documento PDF en un solo archivo</li>
              <li>✓ Convierte Word, Excel o PowerPoint a PDF primero y luego únelos</li>
              <li>✓ Sin pérdida de calidad — formato y diseño preservados</li>
              <li>✓ Funciona en cualquier dispositivo con un navegador moderno</li>
              <li>✓ Sin instalación de software ni cuenta requerida</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Combina Reportes de Trabajo en Un Solo Documento</h2>
              <p className="text-slate-600">
                ¿Armando un informe trimestral, actualización de proyecto o trabajo de investigación con varios archivos? Sube cada sección, ordénalas y únelas en un documento limpio listo para distribución.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Une Documentos Legales y Contratos</h2>
              <p className="text-slate-600">
                Combina acuerdos firmados, addendums, anexos y documentos de soporte en un solo PDF para registros legales. Un solo archivo significa menos confusión y archivado más fácil.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Crea Paquetes de Solicitudes y Portafolios</h2>
              <p className="text-slate-600">
                ¿Enviando múltiples archivos a un cliente o colega? Une todo en un solo PDF — más fácil de compartir por email, subir a portales o imprimir como un solo paquete.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Unir Documentos en Línea</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tus documentos PDF a PDF.it.",
                "Ordena los documentos en tu secuencia preferida.",
                "Haz clic en Unir y descarga tu documento PDF combinado.",
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
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina PDFs en uno" },
                { name: "Unir Múltiples PDFs", href: "/es/unir-multiples-pdfs", desc: "Une varios PDFs a la vez" },
                { name: "Combinar Archivos PDF", href: "/es/combinar-archivos-pdf", desc: "Une archivos PDF" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Separa páginas" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce tamaño" },
                { name: "Rotar PDF", href: "/es/rotar-pdf", desc: "Corrige orientación" },
                { name: "Aplanar PDF", href: "/es/aplanar-pdf", desc: "Aplana campos" },
                { name: "PDF a JPG", href: "/es/pdf-a-jpg", desc: "Convierte a imágenes" },
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
                { q: "¿Cómo puedo unir documentos en línea?", a: "Sube tus documentos PDF a PDF.it, ordénalos como prefieras y haz clic en Unir. Tu documento combinado estará listo para descargar en segundos — sin necesidad de software." },
                { q: "¿Qué tipos de documentos puedo unir?", a: "PDF.it une archivos PDF directamente. Si tienes archivos Word, Excel o PowerPoint, usa las herramientas de conversión de PDF.it para convertirlos a PDF primero y luego únelos en un solo documento." },
                { q: "¿Es seguro unir documentos en línea?", a: "Sí. PDF.it usa conexiones encriptadas y elimina todos los archivos subidos después de tu sesión. Tus documentos nunca se almacenan permanentemente en nuestros servidores." },
                { q: "¿Puedo unir documentos sin instalar software?", a: "Sí. PDF.it es 100% basado en navegador. Sin descargas, sin plugins, sin software de escritorio — solo sube, une y descarga." },
                { q: "¿Hay un límite de tamaño de archivo para unir documentos?", a: "Los usuarios gratuitos pueden subir archivos de hasta 25MB cada uno. Los usuarios Pro tienen un límite de 200MB por archivo para manejar documentos grandes como presentaciones, informes y manuales." },
                { q: "¿Por qué debería unir documentos en línea en vez de usar software de escritorio?", a: "Unir en línea es más rápido, no requiere instalación y funciona en cualquier dispositivo. Puedes unir documentos desde tu teléfono, tablet o cualquier computadora con un navegador — sin necesidad de Adobe Acrobat ni software de pago." },
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
