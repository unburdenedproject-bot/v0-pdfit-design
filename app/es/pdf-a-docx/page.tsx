import Script from "next/script"
import Link from "next/link"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download } from "lucide-react"

export const metadata = {
  title: "PDF a DOCX — Convierte PDF a Documento Word Editable | OmnisPDF",
  description:
    "Convierte PDF a DOCX con OmnisPDF. Transforma tus archivos PDF en documentos Word .docx editables al instante — rapido, seguro y desde tu navegador.",
  alternates: {
    canonical: "https://omnispdf.com/es/pdf-a-docx",
    languages: {
      en: "https://omnispdf.com/pdf-to-docx",
      es: "https://omnispdf.com/es/pdf-a-docx",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cual es la diferencia entre PDF a Word y PDF a DOCX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Son lo mismo. DOCX es el formato nativo de Microsoft Word. Al convertir PDF a DOCX obtienes un archivo .docx que puedes abrir y editar en Word, Google Docs o cualquier procesador de texto compatible.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se mantiene el formato del PDF al convertir a DOCX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OmnisPDF preserva el diseno, fuentes, imagenes y estructura lo mejor posible. Formatos complejos pueden variar dependiendo del PDF original.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo editar el archivo DOCX en Google Docs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. Descarga el archivo .docx, subelo a Google Drive y abrelo con Google Docs para editarlo directamente en tu navegador.",
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

export default function PDFaDOCXPage() {
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
                <h1 className="text-4xl lg:text-5xl font-black">PDF a DOCX</h1>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <p className="text-xl text-slate-300 mb-8">
                Convierte tus archivos PDF en documentos DOCX editables al instante. Abre y edita en Word, Google Docs o cualquier procesador de texto.
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
                  <span>Formato DOCX</span>
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
          processingMessage="Convirtiendo tu PDF a DOCX..."
          successMessage="¡Tu archivo DOCX está listo!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa la herramienta de PDF a DOCX de OmnisPDF para convertir archivos PDF en documentos Word editables en segundos. El formato DOCX es el estandar de Microsoft Word — compatible con Word, Google Docs, LibreOffice y mas. Sube tu PDF, convierte y descarga un archivo .docx listo para editar.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convierte PDF a formato DOCX editable</li>
              <li>✓ Preserva el diseno, fuentes, imagenes y estructura</li>
              <li>✓ Compatible con Word, Google Docs y LibreOffice</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalacion — convierte PDFs desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Edita Contratos y Documentos Legales</h2>
              <p className="text-slate-600">
                Convierte contratos en PDF a DOCX para modificar clausulas, actualizar fechas o agregar informacion sin necesidad de recrear el documento desde cero.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Modifica Reportes y Presentaciones</h2>
              <p className="text-slate-600">
                Transforma reportes empresariales en documentos editables. Actualiza datos, agrega secciones y personaliza el contenido directamente en Word.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Actualiza Curriculos y Documentos Personales</h2>
              <p className="text-slate-600">
                Convierte tu curriculo en PDF a DOCX para actualizarlo facilmente. Agrega nueva experiencia, cambia el formato o adapta el contenido para diferentes ofertas de trabajo.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Colabora en Documentos de Equipo</h2>
              <p className="text-slate-600">
                Convierte PDFs a DOCX para compartir y colaborar. Sube el archivo DOCX a Google Docs o OneDrive y trabaja con tu equipo en tiempo real.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Convertir PDF a DOCX</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a OmnisPDF.",
                "Haz clic en Convertir PDF a DOCX.",
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
                { name: "PDF a Word", href: "/es/pdf-a-word", desc: "Convierte PDF a documento Word" },
                { name: "PDF a Excel", href: "/es/pdf-a-excel", desc: "Extrae tablas a hoja de calculo" },
                { name: "PDF a PowerPoint", href: "/es/pdf-a-powerpoint", desc: "Convierte PDF a presentacion" },
                { name: "PDF a Texto", href: "/es/pdf-a-texto", desc: "Extrae texto plano del PDF" },
                { name: "Word a PDF", href: "/es/word-a-pdf", desc: "Convierte Word a PDF" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamano del archivo" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina varios PDFs en uno" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Separa paginas del PDF" },
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
                { q: "¿Cual es la diferencia entre PDF a Word y PDF a DOCX?", a: "Son lo mismo. DOCX es el formato nativo de Microsoft Word. Al convertir PDF a DOCX obtienes un archivo .docx que puedes abrir y editar en Word, Google Docs o cualquier procesador de texto compatible." },
                { q: "¿Se mantiene el formato del PDF al convertir a DOCX?", a: "OmnisPDF preserva el diseno, fuentes, imagenes y estructura lo mejor posible. Formatos complejos pueden variar dependiendo del PDF original." },
                { q: "¿Puedo editar el archivo DOCX en Google Docs?", a: "Si. Descarga el archivo .docx, subelo a Google Drive y abrelo con Google Docs para editarlo directamente en tu navegador." },
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
