import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { SplitPdfInterface } from "@/components/split-pdf-interface"
import { Scissors, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Eliminar Páginas de PDF — Quita Páginas No Deseadas | PDF.it",
  description:
    "Elimina páginas no deseadas de un PDF con PDF.it. Quita páginas en blanco, duplicados, portadas o secciones irrelevantes — rápido, gratis y en tu navegador.",
  alternates: {
    languages: {
      en: "/delete-pdf-pages",
      es: "/es/eliminar-paginas-de-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Eliminar páginas es permanente?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it crea un nuevo PDF sin las páginas seleccionadas. Tu archivo original no se modifica — siempre puedes volver a subir el original si necesitas las páginas eliminadas." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo deshacer la eliminación de páginas?",
      "acceptedAnswer": { "@type": "Answer", "text": "El archivo descargado no incluirá las páginas eliminadas, pero tu archivo original no se toca. Si necesitas recuperar páginas, simplemente vuelve a subir el archivo original." }
    },
    {
      "@type": "Question",
      "name": "¿Se mantiene la calidad al eliminar páginas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Las páginas restantes se mantienen exactamente como en el original — sin recodificación, sin pérdida de calidad en texto, imágenes o formato." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo sé qué páginas eliminar?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it te muestra una vista previa de cada página de tu PDF. Puedes navegar por las miniaturas y seleccionar las páginas que deseas eliminar antes de procesar." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo eliminar páginas de un PDF desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en navegadores móviles — sube tu PDF, selecciona las páginas a eliminar y descarga el resultado desde iPhone o Android." }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis eliminar páginas de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Puedes eliminar páginas de PDFs de hasta 25MB gratis. Para archivos más grandes y procesamiento por lotes, actualiza a Pro." }
    }
  ]
}

export default function EliminarPaginasDePDFPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Eliminar Páginas de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Quita páginas no deseadas de cualquier PDF — páginas en blanco, duplicados, portadas innecesarias o secciones irrelevantes. Descarga un PDF limpio al instante.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Eliminación Selectiva</span></div>
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
              La herramienta Eliminar Páginas de PDF.it te permite quitar páginas específicas de un PDF sin afectar el resto del documento. Perfecto para limpiar documentos antes de compartirlos — elimina portadas, páginas en blanco, publicidad o cualquier contenido que no necesites.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Elimina páginas específicas de cualquier PDF</li>
              <li>✓ El archivo original no se modifica</li>
              <li>✓ Vista previa para identificar las páginas a eliminar</li>
              <li>✓ Sin pérdida de calidad — las páginas restantes son idénticas al original</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Eliminar Portadas</h2>
              <p className="text-slate-600">
                Quita portadas, contraportadas o páginas de título innecesarias de un documento antes de compartirlo o imprimirlo.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Quitar Páginas en Blanco</h2>
              <p className="text-slate-600">
                Los PDFs escaneados a menudo incluyen páginas en blanco. Elimínalas para reducir el tamaño del archivo y crear un documento más limpio.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Remover Publicidad</h2>
              <p className="text-slate-600">
                Algunos PDFs incluyen páginas de publicidad o promociones. Quítalas para crear un documento más profesional y enfocado en el contenido.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Limpiar Borradores</h2>
              <p className="text-slate-600">
                Elimina páginas con notas, borradores o versiones anteriores de un documento antes de enviarlo como versión final.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Eliminar Páginas de un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Selecciona las páginas que deseas eliminar.",
                "Haz clic en Eliminar Páginas y descarga tu PDF limpio.",
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
                { name: "Extraer Páginas", href: "/es/extraer-paginas-de-pdf", desc: "Saca páginas específicas" },
                { name: "Dividir por Páginas", href: "/es/dividir-pdf-por-paginas", desc: "Elige qué páginas separar" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño del archivo" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina PDFs en uno" },
                { name: "Rotar PDF", href: "/es/rotar-pdf", desc: "Corrige la orientación" },
                { name: "Aplanar PDF", href: "/es/aplanar-pdf", desc: "Aplana formularios y capas" },
                { name: "Dividir PDF Grande", href: "/es/dividir-pdf-grande", desc: "Separa PDFs pesados" },
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
                { q: "¿Eliminar páginas es permanente?", a: "PDF.it crea un nuevo PDF sin las páginas seleccionadas. Tu archivo original no se modifica — siempre puedes volver a subir el original si necesitas las páginas eliminadas." },
                { q: "¿Puedo deshacer la eliminación de páginas?", a: "El archivo descargado no incluirá las páginas eliminadas, pero tu archivo original no se toca. Si necesitas recuperar páginas, simplemente vuelve a subir el archivo original." },
                { q: "¿Se mantiene la calidad al eliminar páginas?", a: "Sí. Las páginas restantes se mantienen exactamente como en el original — sin recodificación, sin pérdida de calidad en texto, imágenes o formato." },
                { q: "¿Cómo sé qué páginas eliminar?", a: "PDF.it te muestra una vista previa de cada página de tu PDF. Puedes navegar por las miniaturas y seleccionar las páginas que deseas eliminar antes de procesar." },
                { q: "¿Puedo eliminar páginas de un PDF desde mi celular?", a: "Sí. PDF.it funciona en navegadores móviles — sube tu PDF, selecciona las páginas a eliminar y descarga el resultado desde iPhone o Android." },
                { q: "¿Es gratis eliminar páginas de un PDF?", a: "Sí. Puedes eliminar páginas de PDFs de hasta 25MB gratis. Para archivos más grandes y procesamiento por lotes, actualiza a Pro." },
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
