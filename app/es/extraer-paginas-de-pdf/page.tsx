import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { SplitPdfInterface } from "@/components/split-pdf-interface"
import { Scissors, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extraer Páginas de PDF — Saca Páginas Específicas de un PDF | PDF.it",
  description:
    "Extrae páginas específicas de un PDF con PDF.it. Selecciona las páginas que necesitas y crea un nuevo archivo PDF — rápido, gratis y en tu navegador.",
  alternates: {
    languages: {
      en: "/extract-pdf-pages",
      es: "/es/extraer-paginas-de-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Puedo extraer una sola página o varias a la vez?",
      "acceptedAnswer": { "@type": "Answer", "text": "Ambas opciones. Puedes extraer una sola página o seleccionar múltiples páginas y rangos para crear un nuevo PDF con todas ellas." }
    },
    {
      "@type": "Question",
      "name": "¿Las páginas extraídas mantienen el orden original?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Las páginas se incluyen en el nuevo PDF en el mismo orden en que aparecen en el documento original. También puedes reordenarlas si lo necesitas." }
    },
    {
      "@type": "Question",
      "name": "¿Se mantiene la calidad al extraer páginas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Las páginas se extraen directamente del PDF original sin recodificar. El texto, las imágenes, los enlaces y el formato permanecen intactos." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo extraer páginas de un PDF desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en navegadores móviles — sube tu PDF, selecciona las páginas y descarga el nuevo archivo desde iPhone o Android." }
    },
    {
      "@type": "Question",
      "name": "¿El PDF original se modifica?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it crea un nuevo PDF con las páginas seleccionadas. El archivo original permanece intacto y sin cambios." }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis extraer páginas de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Puedes extraer páginas de PDFs de hasta 25MB gratis. Para archivos más grandes y procesamiento por lotes, actualiza a Pro." }
    }
  ]
}

export default function ExtraerPaginasDePDFPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extraer Páginas de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Saca páginas específicas de cualquier PDF y crea un nuevo archivo con solo lo que necesitas. Selecciona páginas individuales o rangos y descarga al instante.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Selección Precisa</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sin Registro</span></div>
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
              La herramienta Extraer Páginas de PDF.it te permite sacar páginas específicas de un PDF y guardarlas como un nuevo archivo. No necesitas enviar un documento completo cuando solo necesitas ciertas páginas — extrae exactamente lo que necesitas.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Extrae una o múltiples páginas de cualquier PDF</li>
              <li>✓ Crea un nuevo PDF con solo las páginas seleccionadas</li>
              <li>✓ El archivo original no se modifica</li>
              <li>✓ Sin pérdida de calidad — extracción directa</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Páginas de un Contrato</h2>
              <p className="text-slate-600">
                Extrae las páginas de firma, los términos específicos o las cláusulas relevantes de un contrato largo sin enviar el documento completo.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Secciones de un Manual</h2>
              <p className="text-slate-600">
                Saca la sección que necesitas de un manual técnico extenso — instrucciones de instalación, especificaciones o guía de solución de problemas.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Formularios Individuales</h2>
              <p className="text-slate-600">
                Si un PDF contiene múltiples formularios, extrae cada uno por separado para llenarlo, firmarlo o enviarlo de forma independiente.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Evidencia Específica</h2>
              <p className="text-slate-600">
                Extrae las páginas relevantes de un documento extenso como evidencia para un caso legal, una auditoría o un proceso de cumplimiento.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Extraer Páginas de un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Selecciona las páginas que quieres extraer.",
                "Haz clic en Extraer Páginas y descarga tu nuevo PDF.",
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
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Herramienta estándar de división" },
                { name: "Dividir PDF Grande", href: "/es/dividir-pdf-grande", desc: "Separa PDFs pesados" },
                { name: "Dividir por Páginas", href: "/es/dividir-pdf-por-paginas", desc: "Elige qué páginas separar" },
                { name: "Eliminar Páginas", href: "/es/eliminar-paginas-de-pdf", desc: "Quita páginas no deseadas" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño del archivo" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina PDFs en uno" },
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
                { q: "¿Puedo extraer una sola página o varias a la vez?", a: "Ambas opciones. Puedes extraer una sola página o seleccionar múltiples páginas y rangos para crear un nuevo PDF con todas ellas." },
                { q: "¿Las páginas extraídas mantienen el orden original?", a: "Sí. Las páginas se incluyen en el nuevo PDF en el mismo orden en que aparecen en el documento original. También puedes reordenarlas si lo necesitas." },
                { q: "¿Se mantiene la calidad al extraer páginas?", a: "Sí. Las páginas se extraen directamente del PDF original sin recodificar. El texto, las imágenes, los enlaces y el formato permanecen intactos." },
                { q: "¿Puedo extraer páginas de un PDF desde mi celular?", a: "Sí. PDF.it funciona en navegadores móviles — sube tu PDF, selecciona las páginas y descarga el nuevo archivo desde iPhone o Android." },
                { q: "¿El PDF original se modifica?", a: "No. PDF.it crea un nuevo PDF con las páginas seleccionadas. El archivo original permanece intacto y sin cambios." },
                { q: "¿Es gratis extraer páginas de un PDF?", a: "Sí. Puedes extraer páginas de PDFs de hasta 25MB gratis. Para archivos más grandes y procesamiento por lotes, actualiza a Pro." },
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
