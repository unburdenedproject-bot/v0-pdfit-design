import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { SplitPdfInterface } from "@/components/split-pdf-interface"
import { Scissors, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Dividir PDF por Lotes — Divide Múltiples PDFs a la Vez | PDF.it",
  description:
    "Divide múltiples PDFs a la vez con PDF.it Pro. Procesamiento por lotes para equipos legales, RRHH y archivos digitales — rápido, seguro y en tu navegador.",
  alternates: {
    languages: {
      en: "/batch-split-pdf",
      es: "/es/dividir-pdf-por-lotes",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Es la división por lotes una función Pro?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. La división por lotes es una función exclusiva de los planes Pro y Business. Las cuentas gratuitas pueden dividir un PDF a la vez." }
    },
    {
      "@type": "Question",
      "name": "¿Cuántos PDFs puedo dividir a la vez?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios Pro pueden procesar hasta 20 PDFs a la vez. Los usuarios Business pueden procesar hasta 50 PDFs simultáneamente." }
    },
    {
      "@type": "Question",
      "name": "¿Qué tan rápido es el procesamiento por lotes?",
      "acceptedAnswer": { "@type": "Answer", "text": "El procesamiento por lotes es significativamente más rápido que dividir archivos uno por uno. Los usuarios Pro y Business tienen prioridad en la cola de procesamiento." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo aplicar la misma configuración a todos los archivos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Puedes definir una configuración de división (por ejemplo, dividir cada PDF en 3 partes) y aplicarla a todos los archivos del lote." }
    },
    {
      "@type": "Question",
      "name": "¿Se mantiene la calidad en el procesamiento por lotes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Cada PDF se procesa individualmente y las páginas se extraen sin recodificar. La calidad es idéntica a la división de un solo archivo." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo descargo los archivos resultantes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Todos los archivos divididos se empaquetan en un archivo ZIP que puedes descargar con un solo clic. Cada archivo mantiene su nombre original con un sufijo de parte." }
    }
  ]
}

export default function DividirPDFPorLotesPage() {
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
                <Scissors className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Dividir PDF por Lotes</h1>
              <p className="text-xl text-slate-300 mb-8">
                Divide múltiples PDFs a la vez con el procesamiento por lotes de PDF.it Pro. Sube varios archivos, aplica la configuración de división y descarga todos los resultados en un ZIP.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Procesamiento Masivo</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Descarga en ZIP</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Interface */}
        <SplitPdfInterface />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              La división por lotes de PDF.it te permite procesar múltiples PDFs simultáneamente. En lugar de dividir archivos uno por uno, sube un lote completo, define la configuración de división y descarga todos los resultados en un archivo ZIP. Función exclusiva para usuarios Pro y Business.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Divide múltiples PDFs en una sola operación</li>
              <li>✓ Aplica la misma configuración a todos los archivos</li>
              <li>✓ Descarga todos los resultados en un ZIP</li>
              <li>✓ Cola de procesamiento prioritaria para Pro/Business</li>
              <li>✓ Sin pérdida de calidad — extracción directa del original</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Procesamiento Masivo</h2>
              <p className="text-slate-600">
                Cuando tienes docenas de PDFs que necesitan dividirse de la misma manera, el procesamiento por lotes te ahorra horas de trabajo manual. Sube todos los archivos y aplica la misma configuración.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Equipos Legales</h2>
              <p className="text-slate-600">
                Los despachos legales manejan grandes volúmenes de documentos. Divide contratos, expedientes y escrituras en partes específicas para distribuir a diferentes abogados o departamentos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Departamentos de RRHH</h2>
              <p className="text-slate-600">
                Procesa múltiples expedientes de empleados, políticas y manuales de capacitación simultáneamente. Divide cada documento en las secciones que necesitas sin procesar uno por uno.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Archivos Digitales</h2>
              <p className="text-slate-600">
                Organiza archivos digitales dividiendo documentos extensos en secciones catalogables. Ideal para bibliotecas, archivos históricos y bases de datos documentales.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Dividir PDFs por Lotes</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra múltiples PDFs a PDF.it.",
                "Define la configuración de división para el lote.",
                "Haz clic en Dividir PDFs y descarga el archivo ZIP con todos los resultados.",
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Herramienta estándar de división" },
                { name: "Dividir PDF Grande", href: "/es/dividir-pdf-grande", desc: "Separa PDFs pesados" },
                { name: "Dividir por Páginas", href: "/es/dividir-pdf-por-paginas", desc: "Elige qué páginas separar" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño del archivo" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina PDFs en uno" },
                { name: "Extraer Páginas", href: "/es/extraer-paginas-de-pdf", desc: "Saca páginas específicas" },
                { name: "Eliminar Páginas", href: "/es/eliminar-paginas-de-pdf", desc: "Quita páginas no deseadas" },
                { name: "Aplanar PDF", href: "/es/aplanar-pdf", desc: "Aplana formularios y capas" },
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
                { q: "¿Es la división por lotes una función Pro?", a: "Sí. La división por lotes es una función exclusiva de los planes Pro y Business. Las cuentas gratuitas pueden dividir un PDF a la vez." },
                { q: "¿Cuántos PDFs puedo dividir a la vez?", a: "Los usuarios Pro pueden procesar hasta 20 PDFs a la vez. Los usuarios Business pueden procesar hasta 50 PDFs simultáneamente." },
                { q: "¿Qué tan rápido es el procesamiento por lotes?", a: "El procesamiento por lotes es significativamente más rápido que dividir archivos uno por uno. Los usuarios Pro y Business tienen prioridad en la cola de procesamiento." },
                { q: "¿Puedo aplicar la misma configuración a todos los archivos?", a: "Sí. Puedes definir una configuración de división (por ejemplo, dividir cada PDF en 3 partes) y aplicarla a todos los archivos del lote." },
                { q: "¿Se mantiene la calidad en el procesamiento por lotes?", a: "Sí. Cada PDF se procesa individualmente y las páginas se extraen sin recodificar. La calidad es idéntica a la división de un solo archivo." },
                { q: "¿Cómo descargo los archivos resultantes?", a: "Todos los archivos divididos se empaquetan en un archivo ZIP que puedes descargar con un solo clic. Cada archivo mantiene su nombre original con un sufijo de parte." },
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
