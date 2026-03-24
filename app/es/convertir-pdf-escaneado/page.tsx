import Script from "next/script"
import Link from "next/link"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Scan, Zap, Shield, Download } from "lucide-react"

export const metadata = {
  title: "Convertir PDF Escaneado — Transforma PDFs Escaneados a Texto Editable | PDF.it",
  description:
    "Convierte PDFs escaneados a texto editable con PDF.it. Usa OCR para transformar documentos escaneados en texto que puedes copiar, buscar y editar — rapido y seguro.",
  alternates: {
    canonical: "https://pdf.it.com/es/convertir-pdf-escaneado",
    languages: {
      en: "https://pdf.it.com/convert-scanned-pdf",
      es: "https://pdf.it.com/es/convertir-pdf-escaneado",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Como convierto un PDF escaneado a texto editable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sube tu PDF escaneado a PDF.it, selecciona el idioma del documento y haz clic en Convertir. El OCR extraera el texto y podras descargarlo como archivo de texto editable.",
      },
    },
    {
      "@type": "Question",
      name: "¿Que es OCR y por que lo necesito para PDFs escaneados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OCR (Reconocimiento Optico de Caracteres) es una tecnologia que detecta texto dentro de imagenes. Los PDFs escaneados son esencialmente imagenes, por lo que necesitas OCR para extraer el texto y hacerlo editable.",
      },
    },
    {
      "@type": "Question",
      name: "¿Que tan preciso es el reconocimiento de texto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La precision depende de la calidad del escaneo. Documentos escaneados con buena resolucion y texto claro producen los mejores resultados. Escaneos borrosos, torcidos o con manchas reducen la precision.",
      },
    },
    {
      "@type": "Question",
      name: "¿Que idiomas soporta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El OCR de PDF.it soporta mas de 16 idiomas incluyendo espanol, ingles, frances, aleman, portugues, italiano y mas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es seguro subir documentos escaneados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. Todas las transferencias estan cifradas con SSL y tus archivos se eliminan inmediatamente despues de tu sesion. Nunca almacenamos ni compartimos tus documentos.",
      },
    },
  ],
}

export default function ConvertirPDFEscaneadoPage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Scan className="h-10 w-10 text-white" />
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl lg:text-5xl font-black">Convertir PDF Escaneado</h1>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <p className="text-xl text-slate-300 mb-8">
                Transforma PDFs escaneados en texto editable con tecnologia OCR. Digitaliza documentos en papel al instante.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>OCR Avanzado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>16+ Idiomas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>Texto Editable</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="OCR Scanner"
          outputFormat="TXT"
          processingMessage="Convirtiendo tu PDF escaneado..."
          successMessage="¡Tu PDF escaneado ha sido convertido!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa PDF.it para convertir PDFs escaneados en texto editable. La tecnologia OCR (Reconocimiento Optico de Caracteres) analiza las imagenes del escaneo, detecta letras y palabras, y genera texto que puedes copiar, buscar y editar. Perfecto para digitalizar documentos en papel.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convierte PDFs escaneados en texto editable con OCR</li>
              <li>✓ Soporta mas de 16 idiomas incluyendo espanol</li>
              <li>✓ Ideal para facturas, contratos, formularios y archivos</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalacion — el OCR se ejecuta desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Digitaliza Archivos y Documentos Antiguos</h2>
              <p className="text-slate-600">
                Convierte documentos fisicos escaneados en texto digital. Perfecto para archivos historicos, registros antiguos y documentos que solo existen en papel. Haz que sean buscables y faciles de almacenar.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Procesa Facturas Escaneadas</h2>
              <p className="text-slate-600">
                Extrae texto de facturas y recibos escaneados para digitalizar tus registros contables. Copia montos, fechas y detalles sin necesidad de transcribir manualmente.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Recupera Texto de Documentos Antiguos</h2>
              <p className="text-slate-600">
                Convierte documentos historicos, cartas antiguas y archivos escaneados en texto editable. Ideal para investigadores, archivistas y genealogistas.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Convierte Formularios en Papel a Digital</h2>
              <p className="text-slate-600">
                Transforma formularios impresos y rellenados a mano en texto digital. Extrae la informacion para ingresarla en bases de datos o sistemas digitales.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Convertir un PDF Escaneado</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF escaneado a PDF.it.",
                "Selecciona el idioma del documento si es necesario.",
                "Haz clic en Convertir para ejecutar el OCR.",
                "Descarga tu archivo de texto editable.",
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
                { name: "Escaner OCR", href: "/es/escaner-ocr", desc: "OCR completo para PDFs" },
                { name: "Limpiar Escaneo", href: "/es/limpiar-escaneo", desc: "Mejora calidad de escaneos" },
                { name: "PDF a Texto", href: "/es/pdf-a-texto", desc: "Extrae texto de PDFs digitales" },
                { name: "Escanear PDF a Texto", href: "/es/escanear-pdf-a-texto", desc: "Escaneo directo a texto" },
                { name: "Comprimir PDF Escaneado", href: "/es/comprimir-pdf-escaneado", desc: "Reduce tamano de escaneos" },
                { name: "OCR PDF", href: "/es/ocr-pdf", desc: "OCR para documentos PDF" },
                { name: "Rotar PDF", href: "/es/rotar-pdf", desc: "Corrige orientacion de escaneos" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina varios escaneos en uno" },
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
                { q: "¿Como convierto un PDF escaneado a texto editable?", a: "Sube tu PDF escaneado a PDF.it, selecciona el idioma del documento y haz clic en Convertir. El OCR extraera el texto y podras descargarlo como archivo de texto editable." },
                { q: "¿Que es OCR y por que lo necesito para PDFs escaneados?", a: "OCR (Reconocimiento Optico de Caracteres) es una tecnologia que detecta texto dentro de imagenes. Los PDFs escaneados son esencialmente imagenes, por lo que necesitas OCR para extraer el texto y hacerlo editable." },
                { q: "¿Que tan preciso es el reconocimiento de texto?", a: "La precision depende de la calidad del escaneo. Documentos escaneados con buena resolucion y texto claro producen los mejores resultados. Escaneos borrosos, torcidos o con manchas reducen la precision." },
                { q: "¿Que idiomas soporta?", a: "El OCR de PDF.it soporta mas de 16 idiomas incluyendo espanol, ingles, frances, aleman, portugues, italiano y mas." },
                { q: "¿Es seguro subir documentos escaneados?", a: "Si. Todas las transferencias estan cifradas con SSL y tus archivos se eliminan inmediatamente despues de tu sesion. Nunca almacenamos ni compartimos tus documentos." },
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
