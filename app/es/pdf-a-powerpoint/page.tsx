import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Presentation, Zap, Shield, Download, Crown } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Convertir PDF a PowerPoint Online — PDF a PPTX | PDF.it",
  description:
    "Convierte archivos PDF a presentaciones PowerPoint editables con PDF.it. Transforma documentos estaticos en diapositivas que puedes editar, presentar y compartir.",
  alternates: {
    canonical: "https://pdf.it.com/es/pdf-a-powerpoint",
    languages: {
      en: "https://pdf.it.com/pdf-to-powerpoint",
      es: "https://pdf.it.com/es/pdf-a-powerpoint",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Como convierto un PDF a PowerPoint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sube tu PDF a PDF.it, haz clic en Convertir y descarga el archivo PowerPoint editable. La conversion preserva el diseno, texto e imagenes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se mantiene el formato despues de la conversion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PDF.it preserva texto, imagenes y diseno lo mejor posible. Disenos complejos pueden necesitar ajustes menores en PowerPoint.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo editar las diapositivas despues de la conversion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. El resultado es un archivo .pptx completamente editable que puedes abrir en PowerPoint, Google Slides o Keynote.",
      },
    },
    {
      "@type": "Question",
      name: "¿PDF a PowerPoint es gratis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PDF a PowerPoint es una funcion Pro. Los usuarios gratuitos pueden probar otras herramientas como PDF a JPG o PDF a PNG.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo convertir PDF a PowerPoint desde mi celular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. PDF.it funciona en navegadores moviles — sube, convierte y descarga desde iPhone o Android.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cual es el tamano maximo de archivo que puedo convertir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las cuentas Pro y Business pueden subir archivos de hasta 200MB.",
      },
    },
  ],
}

export default function PDFaPowerPointPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderEs />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Presentation className="h-10 w-10 text-white" />
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl lg:text-5xl font-black">Convertir PDF a PowerPoint</h1>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <p className="text-xl text-slate-300 mb-8">
                Convierte archivos PDF en presentaciones PowerPoint editables. Transforma documentos estaticos en diapositivas que puedes personalizar, presentar y compartir.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>Diapositivas Editables</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>Diseno Preservado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>Calidad Profesional</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to PowerPoint"
          outputFormat="PPTX"
          processingMessage="Converting your PDF to PowerPoint..."
          successMessage="Your PowerPoint presentation is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa PDF.it para convertir archivos PDF en presentaciones PowerPoint editables. Perfecto para reutilizar reportes, propuestas y documentos en diapositivas que puedes presentar y personalizar.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convierte paginas PDF a diapositivas PowerPoint editables</li>
              <li>✓ Preserva texto, imagenes y diseno</li>
              <li>✓ Compatible con PowerPoint, Google Slides y Keynote</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalacion — convierte desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Convierte Reportes en Presentaciones</h2>
              <p className="text-slate-600">
                Transforma reportes PDF, propuestas y documentos en diapositivas editables. Agrega tu propio formato, animaciones y notas del orador despues de la conversion.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Preserva Diseno e Imagenes</h2>
              <p className="text-slate-600">
                PDF.it mantiene texto, imagenes y estructura de pagina intactos para que tus diapositivas se vean profesionales desde el inicio. Disenos complejos pueden necesitar ajustes menores.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Compatible con Google Slides y Keynote</h2>
              <p className="text-slate-600">
                El archivo .pptx es compatible con Microsoft PowerPoint, Google Slides, Apple Keynote y otros programas de presentaciones.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Convertir PDF a PowerPoint</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Haz clic en Convertir PDF a PowerPoint.",
                "Descarga tu archivo .pptx editable y abrelo en PowerPoint o Google Slides.",
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
                { name: "PDF a Word", href: "/es/pdf-a-word", desc: "Edita texto en Word" },
                { name: "PDF a Excel", href: "/es/pdf-a-excel", desc: "Extrae tablas" },
                { name: "PowerPoint a PDF", href: "/es/powerpoint-a-pdf", desc: "Convierte de vuelta a PDF" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamano primero" },
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
                { q: "¿Como convierto un PDF a PowerPoint?", a: "Sube tu PDF a PDF.it, haz clic en Convertir y descarga el archivo PowerPoint editable. La conversion preserva el diseno, texto e imagenes." },
                { q: "¿Se mantiene el formato despues de la conversion?", a: "PDF.it preserva texto, imagenes y diseno lo mejor posible. Disenos complejos pueden necesitar ajustes menores en PowerPoint." },
                { q: "¿Puedo editar las diapositivas despues de la conversion?", a: "Si. El resultado es un archivo .pptx completamente editable que puedes abrir en PowerPoint, Google Slides o Keynote." },
                { q: "¿PDF a PowerPoint es gratis?", a: "PDF a PowerPoint es una funcion Pro. Los usuarios gratuitos pueden probar otras herramientas como PDF a JPG o PDF a PNG." },
                { q: "¿Puedo convertir PDF a PowerPoint desde mi celular?", a: "Si. PDF.it funciona en navegadores moviles — sube, convierte y descarga desde iPhone o Android." },
                { q: "¿Cual es el tamano maximo de archivo que puedo convertir?", a: "Las cuentas Pro y Business pueden subir archivos de hasta 200MB." },
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
