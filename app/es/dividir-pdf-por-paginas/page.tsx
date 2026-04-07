import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { SplitPdfInterface } from "@/components/split-pdf-interface"
import { Scissors, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Dividir PDF por Páginas — Elige Qué Páginas Separar | PDF.it",
  description:
    "Divide un PDF por páginas específicas con PDF.it. Elige exactamente qué páginas extraer en archivos separados — rápido, gratis y en tu navegador.",
  alternates: {
    languages: {
      en: "/split-pdf-by-pages",
      es: "/es/dividir-pdf-por-paginas",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Puedo elegir rangos personalizados de páginas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Puedes especificar rangos como 1-5, 8-12, 15-20 y PDF.it creará un PDF separado para cada rango que definas." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo extraer una sola página de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Simplemente selecciona el número de página que necesitas y PDF.it creará un nuevo PDF con solo esa página." }
    },
    {
      "@type": "Question",
      "name": "¿Se mantiene la calidad al dividir por páginas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Las páginas se extraen directamente del PDF original sin recodificar. El texto, las imágenes y el formato permanecen intactos." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo dividir un PDF por páginas desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en navegadores móviles — sube tu PDF, selecciona las páginas y descarga los archivos desde iPhone o Android." }
    },
    {
      "@type": "Question",
      "name": "¿Cuántas páginas puedo seleccionar?",
      "acceptedAnswer": { "@type": "Answer", "text": "No hay límite en la cantidad de páginas o rangos que puedes seleccionar. Puedes extraer tantas páginas como necesites en archivos separados." }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis dividir PDFs por páginas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Puedes dividir PDFs de hasta 25MB gratis. Para archivos más grandes y procesamiento por lotes, actualiza a Pro." }
    }
  ]
}

export default function DividirPDFPorPaginasPage() {
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
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a1f5e] to-[#252A6A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Scissors className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Dividir PDF por Páginas</h1>
              <p className="text-xl text-slate-300 mb-8">
                Elige exactamente qué páginas extraer de tu PDF en archivos separados. Selecciona páginas individuales o rangos personalizados y descarga al instante.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Selección Precisa de Páginas</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sin Registro</span></div>
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
              Con la herramienta de Dividir PDF por Páginas de PDF.it, tienes control total sobre qué páginas extraer. Selecciona páginas individuales, define rangos personalizados o combina ambos métodos para crear los archivos PDF exactos que necesitas.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Selecciona páginas individuales o rangos personalizados</li>
              <li>✓ Crea un PDF nuevo con solo las páginas que elijas</li>
              <li>✓ Sin pérdida de calidad — extracción directa del original</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — divide en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extraer Capítulos</h2>
              <p className="text-slate-600">
                Selecciona el rango de páginas de un capítulo específico y créalo como un PDF independiente. Ideal para libros de texto, manuales y documentos extensos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Separar Formularios</h2>
              <p className="text-slate-600">
                Si tu PDF contiene múltiples formularios, extrae cada uno por separado para enviarlos individualmente o llenarlos de forma independiente.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Enviar Páginas Específicas</h2>
              <p className="text-slate-600">
                En vez de enviar un documento completo, extrae solo las páginas relevantes. Perfecto para compartir secciones de contratos, reportes o presentaciones.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Crear Resúmenes</h2>
              <p className="text-slate-600">
                Extrae las páginas clave de un documento largo para crear un resumen compacto que puedas compartir rápidamente con tu equipo.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Dividir un PDF por Páginas</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Selecciona las páginas o rangos que quieres extraer.",
                "Haz clic en Dividir PDF y descarga tus nuevos archivos.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Herramienta estándar de división" },
                { name: "Dividir PDF Grande", href: "/es/dividir-pdf-grande", desc: "Separa PDFs pesados" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño del archivo" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina PDFs en uno" },
                { name: "Extraer Páginas", href: "/es/extraer-paginas-de-pdf", desc: "Saca páginas específicas" },
                { name: "Eliminar Páginas", href: "/es/eliminar-paginas-de-pdf", desc: "Quita páginas no deseadas" },
                { name: "Rotar PDF", href: "/es/rotar-pdf", desc: "Corrige la orientación" },
                { name: "Aplanar PDF", href: "/es/aplanar-pdf", desc: "Aplana formularios y capas" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="rounded-xl p-4 transition-all text-center flex flex-col justify-center min-h-[80px] hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(20,216,196,0.25)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.2)" }}
                >
                  <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-400">{tool.desc}</div>
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
                { q: "¿Puedo elegir rangos personalizados de páginas?", a: "Sí. Puedes especificar rangos como 1-5, 8-12, 15-20 y PDF.it creará un PDF separado para cada rango que definas." },
                { q: "¿Puedo extraer una sola página de un PDF?", a: "Sí. Simplemente selecciona el número de página que necesitas y PDF.it creará un nuevo PDF con solo esa página." },
                { q: "¿Se mantiene la calidad al dividir por páginas?", a: "Sí. Las páginas se extraen directamente del PDF original sin recodificar. El texto, las imágenes y el formato permanecen intactos." },
                { q: "¿Puedo dividir un PDF por páginas desde mi celular?", a: "Sí. PDF.it funciona en navegadores móviles — sube tu PDF, selecciona las páginas y descarga los archivos desde iPhone o Android." },
                { q: "¿Cuántas páginas puedo seleccionar?", a: "No hay límite en la cantidad de páginas o rangos que puedes seleccionar. Puedes extraer tantas páginas como necesites en archivos separados." },
                { q: "¿Es gratis dividir PDFs por páginas?", a: "Sí. Puedes dividir PDFs de hasta 25MB gratis. Para archivos más grandes y procesamiento por lotes, actualiza a Pro." },
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
