import Script from "next/script"
import Link from "next/link"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download } from "lucide-react"

export const metadata = {
  title: "PDF a Google Docs — Convierte PDF para Editar en Google Docs | PDF.it",
  description:
    "Convierte PDF a Google Docs con PDF.it. Transforma tu PDF en un archivo DOCX que puedes subir a Google Drive y editar en Google Docs — rapido y seguro.",
  alternates: {
    canonical: "https://pdf.it.com/es/pdf-a-google-docs",
    languages: {
      en: "https://pdf.it.com/pdf-to-google-docs",
      es: "https://pdf.it.com/es/pdf-a-google-docs",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Como abro un PDF en Google Docs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Convierte tu PDF a DOCX con PDF.it, luego sube el archivo .docx a Google Drive. Haz clic derecho en el archivo y selecciona 'Abrir con Google Docs' para editarlo directamente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se mantiene el formato al abrir en Google Docs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PDF.it preserva el diseno, fuentes y estructura lo mejor posible en el archivo DOCX. Google Docs mantiene la mayoria del formato, aunque elementos complejos como tablas avanzadas pueden variar ligeramente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo colaborar en el documento con mi equipo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. Una vez que el archivo esta en Google Docs, puedes compartirlo con tu equipo y editar en tiempo real, agregar comentarios y sugerencias como cualquier otro documento de Google.",
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
      name: "¿Funciona con PDFs escaneados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los PDFs escaneados requieren OCR para extraer el texto primero. Usa la herramienta de Escaner OCR de PDF.it antes de convertir a DOCX para Google Docs.",
      },
    },
  ],
}

export default function PDFaGoogleDocsPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PDF a Google Docs</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convierte tu PDF en un archivo listo para editar en Google Docs. Colabora con tu equipo en tiempo real.
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
                  <span>Listo para Google Docs</span>
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
          processingMessage="Convirtiendo tu PDF para Google Docs..."
          successMessage="¡Tu archivo listo para Google Docs está listo!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa PDF.it para convertir tu PDF en un archivo DOCX compatible con Google Docs. Simplemente convierte, descarga el .docx y subelo a Google Drive para editarlo con tu equipo. Google Docs abre archivos DOCX de forma nativa, manteniendo el formato y estructura del documento original.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convierte PDF a DOCX compatible con Google Docs</li>
              <li>✓ Sube el archivo a Google Drive y edita directamente</li>
              <li>✓ Colabora en tiempo real con tu equipo</li>
              <li>✓ Preserva el formato, fuentes e imagenes</li>
              <li>✓ Sin instalacion — convierte desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Colaboracion en Equipo Sin Barreras</h2>
              <p className="text-slate-600">
                Convierte PDFs a formato Google Docs para que todo tu equipo pueda editar, comentar y sugerir cambios en tiempo real. Ideal para proyectos colaborativos y revisiones de documentos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Edicion Compartida en la Nube</h2>
              <p className="text-slate-600">
                Una vez en Google Docs, comparte el documento con quien necesites. Controla permisos de edicion, visualizacion y comentarios. Perfecto para trabajo remoto y equipos distribuidos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Trabajo Remoto Simplificado</h2>
              <p className="text-slate-600">
                Convierte documentos PDF recibidos por email en archivos editables en Google Docs. Accede desde cualquier dispositivo con conexion a internet — sin necesidad de instalar Word.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Documentos Academicos y de Investigacion</h2>
              <p className="text-slate-600">
                Convierte articulos, tesis y materiales academicos en PDF a Google Docs para agregar notas, resaltar texto y colaborar con companeros de estudio o colegas de investigacion.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Convertir PDF para Google Docs</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Haz clic en Convertir para obtener un archivo DOCX.",
                "Descarga el .docx y subelo a Google Drive.",
                "Haz clic derecho en el archivo y selecciona 'Abrir con Google Docs'.",
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
                { name: "PDF a Word", href: "/es/pdf-a-word", desc: "Convierte PDF a documento Word" },
                { name: "PDF a DOCX", href: "/es/pdf-a-docx", desc: "Convierte PDF a formato DOCX" },
                { name: "PDF a Texto", href: "/es/pdf-a-texto", desc: "Extrae texto plano del PDF" },
                { name: "Word a PDF", href: "/es/word-a-pdf", desc: "Convierte Word a PDF" },
                { name: "PDF a Google Sheets", href: "/es/pdf-a-google-sheets", desc: "Tablas PDF para Google Sheets" },
                { name: "Escaner OCR", href: "/es/escaner-ocr", desc: "Extrae texto de PDFs escaneados" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamano del archivo" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina varios PDFs en uno" },
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
                { q: "¿Como abro un PDF en Google Docs?", a: "Convierte tu PDF a DOCX con PDF.it, luego sube el archivo .docx a Google Drive. Haz clic derecho en el archivo y selecciona 'Abrir con Google Docs' para editarlo directamente." },
                { q: "¿Se mantiene el formato al abrir en Google Docs?", a: "PDF.it preserva el diseno, fuentes y estructura lo mejor posible en el archivo DOCX. Google Docs mantiene la mayoria del formato, aunque elementos complejos como tablas avanzadas pueden variar ligeramente." },
                { q: "¿Puedo colaborar en el documento con mi equipo?", a: "Si. Una vez que el archivo esta en Google Docs, puedes compartirlo con tu equipo y editar en tiempo real, agregar comentarios y sugerencias como cualquier otro documento de Google." },
                { q: "¿Es seguro subir mi PDF?", a: "Si. Todas las transferencias estan cifradas con SSL y tus archivos se eliminan inmediatamente despues de tu sesion. Nunca almacenamos ni compartimos tus documentos." },
                { q: "¿Funciona con PDFs escaneados?", a: "Los PDFs escaneados requieren OCR para extraer el texto primero. Usa la herramienta de Escaner OCR de PDF.it antes de convertir a DOCX para Google Docs." },
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
