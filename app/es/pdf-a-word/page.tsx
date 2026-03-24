import Script from "next/script"
import Link from "next/link"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download, Crown } from "lucide-react"

export const metadata = {
  title: "Convertir PDF a Word Online — PDF a DOCX Editable | PDF.it",
  description:
    "Convierte PDF a Word editable con PDF.it. Transforma tus archivos PDF en documentos DOCX que puedes editar al instante — rapido, seguro y desde tu navegador.",
  alternates: {
    canonical: "https://pdf.it.com/es/pdf-a-word",
    languages: {
      en: "https://pdf.it.com/pdf-to-word",
      es: "https://pdf.it.com/es/pdf-a-word",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Como convierto un PDF a Word?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sube tu PDF a PDF.it, haz clic en Convertir y descarga tu documento Word editable.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se mantiene el formato despues de la conversion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PDF.it preserva el diseno, fuentes y estructura lo mejor posible. Formatos complejos pueden variar dependiendo del PDF original.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo convertir un PDF escaneado a Word?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los PDFs escaneados requieren OCR para extraer el texto. Usa primero la herramienta de Escaner OCR de PDF.it y luego convierte a Word.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo convertir PDF a Word desde mi celular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. PDF.it funciona en navegadores moviles — sube, convierte y descarga desde iPhone o Android.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es seguro subir mi PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. Todas las transferencias estan cifradas con SSL y tus archivos se eliminan inmediatamente despues de tu sesion. Nunca almacenamos ni compartimos tus documentos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cual es el tamano maximo de archivo que puedo convertir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las cuentas gratuitas pueden subir archivos de hasta 25MB. Las cuentas Pro y Business pueden subir archivos de hasta 200MB.",
      },
    },
  ],
}

export default function PDFaWordPage() {
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
                <FileText className="h-10 w-10 text-white" />
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl lg:text-5xl font-black">Convertir PDF a Word</h1>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <p className="text-xl text-slate-300 mb-8">
                Convierte tus archivos PDF en documentos Word editables al instante. Formato perfecto garantizado.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>Conversion Rapida</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>100% Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>Calidad Perfecta</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to Word"
          outputFormat="DOCX"
          processingMessage="Converting your PDF to Word..."
          successMessage="Your Word document is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa la herramienta de PDF a Word de PDF.it para convertir archivos PDF en documentos Word editables en segundos. Sube tu PDF, convierte y descarga un archivo .docx listo para editar — sin necesidad de instalar software.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convierte PDF a documentos Word editables online</li>
              <li>✓ Preserva el diseno, fuentes y estructura</li>
              <li>✓ Ideal para contratos, reportes, formularios y cartas</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalacion — convierte PDFs desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Edita Cualquier PDF como Documento Word</h2>
              <p className="text-slate-600">
                Convierte tus PDFs en archivos DOCX completamente editables. Modifica texto, tablas y formato directamente en Word, Google Docs o cualquier procesador de texto.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Formato Preservado con Precision</h2>
              <p className="text-slate-600">
                PDF.it mantiene el diseno, fuentes e imagenes del PDF original para que tu documento Word se vea profesional desde el primer momento.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Herramienta Pro para Profesionales</h2>
              <p className="text-slate-600">
                PDF a Word es una funcion Pro. Actualiza tu plan para acceder a conversiones ilimitadas, archivos de hasta 200MB y procesamiento prioritario.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Convertir PDF a Word</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Haz clic en Convertir PDF a Word.",
                "Descarga tu archivo .docx editable y abrelo en Word o Google Docs.",
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
                { name: "PDF a Excel", href: "/es/pdf-a-excel", desc: "Extrae tablas a hoja de calculo" },
                { name: "PDF a JPG", href: "/es/pdf-a-jpg", desc: "Convierte paginas a imagenes" },
                { name: "Escaner OCR", href: "/es/escaner-ocr", desc: "Extrae texto de PDFs escaneados" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamano antes de convertir" },
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
                { q: "¿Como convierto un PDF a Word?", a: "Sube tu PDF a PDF.it, haz clic en Convertir y descarga tu documento Word editable." },
                { q: "¿Se mantiene el formato despues de la conversion?", a: "PDF.it preserva el diseno, fuentes y estructura lo mejor posible. Formatos complejos pueden variar dependiendo del PDF original." },
                { q: "¿Puedo convertir un PDF escaneado a Word?", a: "Los PDFs escaneados requieren OCR para extraer el texto. Usa primero la herramienta de Escaner OCR de PDF.it y luego convierte a Word." },
                { q: "¿Puedo convertir PDF a Word desde mi celular?", a: "Si. PDF.it funciona en navegadores moviles — sube, convierte y descarga desde iPhone o Android." },
                { q: "¿Es seguro subir mi PDF?", a: "Si. Todas las transferencias estan cifradas con SSL y tus archivos se eliminan inmediatamente despues de tu sesion. Nunca almacenamos ni compartimos tus documentos." },
                { q: "¿Cual es el tamano maximo de archivo que puedo convertir?", a: "Las cuentas gratuitas pueden subir archivos de hasta 25MB. Las cuentas Pro y Business pueden subir archivos de hasta 200MB." },
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
