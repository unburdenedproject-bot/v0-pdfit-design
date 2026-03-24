import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, CheckCircle, Zap, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Convertir Word a PDF Online — DOCX a PDF Gratis | PDF.it",
  description:
    "Convierte Word a PDF en segundos con PDF.it. Transforma archivos DOC o DOCX en un PDF limpio y listo para compartir — rapido, facil y sin instalar nada.",
  alternates: {
    canonical: "https://pdf.it.com/es/word-a-pdf",
    languages: {
      en: "https://pdf.it.com/word-to-pdf",
      es: "https://pdf.it.com/es/word-a-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Puedo convertir tanto DOC como DOCX a PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. PDF.it soporta ambos formatos de archivo .doc y .docx.",
      },
    },
    {
      "@type": "Question",
      name: "¿El PDF mantendra el formato de mi archivo Word?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En la mayoria de los casos, si — PDF.it preserva el diseno, fuentes y espaciado. Documentos complejos con fuentes personalizadas o tablas inusuales pueden variar ligeramente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo convertir Word a PDF en mi celular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. PDF.it funciona en navegadores moviles — sube tu archivo Word y descarga el PDF.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es seguro subir mi documento Word?",
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
        text: "Las cuentas Pro y Business pueden subir archivos de hasta 200MB.",
      },
    },
    {
      "@type": "Question",
      name: "Mi PDF se ve diferente a mi archivo Word — ¿por que?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las diferencias pueden ocurrir por fuentes incrustadas o formato complejo. Intenta simplificar el espaciado, usar fuentes estandar o exportar de nuevo.",
      },
    },
  ],
}

export default function WordaPDFPage() {
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
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir Word a PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convierte DOC/DOCX a PDF con PDF.it — rapido, sencillo y perfecto para documentos limpios y listos para compartir.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-500" />
                  <span>Formato Preservado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>Archivos Eliminados Tras la Sesion</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>DOC y DOCX Soportados</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".doc,.docx"
          toolName="Word to PDF"
          outputFormat="PDF"
          processingMessage="Converting your Word document..."
          successMessage="Your PDF is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa el convertidor de Word a PDF de PDF.it para transformar un DOC o DOCX en un PDF en segundos. Perfecto para curriculos, reportes, contratos y documentos escolares — convierte, descarga y comparte un PDF que funciona en todas partes.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convierte Word a PDF online en segundos</li>
              <li>✓ Soporta archivos DOC y DOCX</li>
              <li>✓ Crea PDFs listos para compartir por correo, imprimir y subir</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalacion — conversion desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Convierte DOCX a PDF Manteniendo el Diseno</h2>
              <p className="text-slate-600">
                PDF.it convierte documentos Word en PDFs disenados para verse consistentes en todos los dispositivos. Ideal para enviar archivos donde el formato debe mantenerse estable.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Haz que tus Documentos Word Sean Faciles de Compartir e Imprimir</h2>
              <p className="text-slate-600">
                Los PDFs son el estandar para entregas, impresion y documentos oficiales. Convierte tu archivo Word a PDF para que los destinatarios vean el mismo diseno — sin importar que software usen.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Conversion Rapida Online — Sin Apps</h2>
              <p className="text-slate-600">
                Sube un archivo Word, convierte a PDF y descarga de inmediato — sin descargas, sin instalaciones y sin pasos complicados.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Convertir Word a PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu archivo DOC/DOCX a PDF.it.",
                "Haz clic en Convertir Word a PDF.",
                "Descarga tu nuevo PDF.",
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
                { name: "Excel a PDF", href: "/es/excel-a-pdf", desc: "Convierte hojas de calculo a PDF" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamano del PDF" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina varios PDFs en uno" },
                { name: "PDF a JPG", href: "/es/pdf-a-jpg", desc: "Extrae paginas como imagenes" },
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
                  q: "¿Puedo convertir tanto DOC como DOCX a PDF?",
                  a: "Si. PDF.it soporta ambos formatos de archivo .doc y .docx.",
                },
                {
                  q: "¿El PDF mantendra el formato de mi archivo Word?",
                  a: "En la mayoria de los casos, si — PDF.it preserva el diseno, fuentes y espaciado. Documentos complejos con fuentes personalizadas o tablas inusuales pueden variar ligeramente.",
                },
                {
                  q: "¿Puedo convertir Word a PDF en mi celular?",
                  a: "Si. PDF.it funciona en navegadores moviles — sube tu archivo Word y descarga el PDF.",
                },
                {
                  q: "¿Es seguro subir mi documento Word?",
                  a: "Si. Todas las transferencias estan cifradas con SSL y tus archivos se eliminan inmediatamente despues de tu sesion. Nunca almacenamos ni compartimos tus documentos.",
                },
                {
                  q: "¿Cual es el tamano maximo de archivo que puedo convertir?",
                  a: "Las cuentas Pro y Business pueden subir archivos de hasta 200MB.",
                },
                {
                  q: "Mi PDF se ve diferente a mi archivo Word — ¿por que?",
                  a: "Las diferencias pueden ocurrir por fuentes incrustadas o formato complejo. Intenta simplificar el espaciado, usar fuentes estandar o exportar de nuevo.",
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
