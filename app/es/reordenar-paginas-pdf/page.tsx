import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { GripVertical, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Reordenar Páginas de PDF — Arrastra y Suelta para Reorganizar | OmnisPDF",
  description:
    "Reordena las páginas de tu PDF con arrastrar y soltar en OmnisPDF. Mueve, reorganiza y cambia el orden de páginas de cualquier documento — rápido, gratis y en tu navegador.",
  alternates: {
    languages: {
      en: "/reorder-pdf-pages",
      es: "/es/reordenar-paginas-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo reordeno páginas específicas de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a OmnisPDF y verás miniaturas de cada página. Arrastra y suelta las páginas para moverlas a la posición deseada. Descarga el PDF con el nuevo orden cuando estés satisfecho." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo reordenar solo algunas páginas y dejar el resto igual?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Solo mueve las páginas que necesitas cambiar — el resto permanecerá en su posición original. No es necesario reorganizar todo el documento." }
    },
    {
      "@type": "Question",
      "name": "¿Se mantiene la calidad al mover páginas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Mover páginas no afecta la calidad del contenido — texto, imágenes, gráficos y formato se mantienen exactamente como en el original." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo reordenar páginas de un PDF escaneado?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. La herramienta funciona con cualquier tipo de PDF, incluyendo documentos escaneados. Las miniaturas te ayudan a identificar cada página para reorganizarlas correctamente." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo reordenar páginas desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. OmnisPDF funciona en navegadores móviles con soporte táctil — arrastra y suelta páginas desde tu iPhone o Android." }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis reordenar páginas de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Puedes reordenar páginas de PDFs de hasta 25MB gratis. Para archivos más grandes y procesamiento por lotes, actualiza a Pro." }
    }
  ]
}

export default function ReordenarPaginasPDFPage() {
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
                <GripVertical className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Reordenar Páginas de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Arrastra y suelta para reorganizar las páginas de tu PDF. Mueve páginas individuales, cambia el orden de secciones y descarga tu documento con la estructura perfecta.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Arrastrar y Soltar</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Organize PDF"
          outputFormat="PDF"
          processingMessage="Reordenando páginas de tu PDF..."
          successMessage="¡Las páginas han sido reordenadas!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              La herramienta Reordenar Páginas de OmnisPDF te permite cambiar el orden de páginas específicas dentro de cualquier PDF. Con una interfaz visual de arrastrar y soltar, puedes ver miniaturas de cada página y moverlas exactamente donde las necesitas — sin necesidad de software especializado.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Interfaz visual de arrastrar y soltar</li>
              <li>✓ Miniaturas de cada página para fácil identificación</li>
              <li>✓ Mueve páginas individuales o grupos de páginas</li>
              <li>✓ Sin pérdida de calidad — el contenido no se modifica</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Manuales Técnicos</h2>
              <p className="text-slate-600">
                Reorganiza las secciones de manuales técnicos para que sigan un orden lógico. Mueve instrucciones, diagramas y especificaciones a las posiciones correctas.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Álbumes de Fotos en PDF</h2>
              <p className="text-slate-600">
                Reordena las páginas de un álbum de fotos PDF para crear una narrativa visual. Mueve las mejores fotos al frente o agrupa imágenes por tema o fecha.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Informes Anuales</h2>
              <p className="text-slate-600">
                Estructura informes anuales con el orden correcto — carta del director, resumen financiero, resultados por división y proyecciones. Cada sección en su lugar.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Documentos de Capacitación</h2>
              <p className="text-slate-600">
                Organiza materiales de capacitación en la secuencia pedagógica correcta. Mueve lecciones, ejercicios y evaluaciones para un aprendizaje progresivo.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Reordenar Páginas de un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a OmnisPDF.",
                "Visualiza las miniaturas y arrastra las páginas a su nueva posición.",
                "Haz clic en Reordenar y descarga tu PDF con las páginas en el nuevo orden.",
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
                { name: "Reordenar PDF", href: "/es/reordenar-pdf", desc: "Cambia el orden de páginas" },
                { name: "Organizar PDF", href: "/es/organizar-pdf", desc: "Gestiona páginas de tu PDF" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Separa páginas de un PDF" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina varios PDFs" },
                { name: "Eliminar Páginas", href: "/es/eliminar-paginas-de-pdf", desc: "Quita páginas no deseadas" },
                { name: "Rotar PDF", href: "/es/rotar-pdf", desc: "Corrige la orientación" },
                { name: "Extraer Páginas", href: "/es/extraer-paginas-de-pdf", desc: "Saca páginas específicas" },
                { name: "Agregar Página", href: "/es/agregar-pagina-a-pdf", desc: "Inserta páginas nuevas" },
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
                { q: "¿Cómo reordeno páginas específicas de un PDF?", a: "Sube tu PDF a OmnisPDF y verás miniaturas de cada página. Arrastra y suelta las páginas para moverlas a la posición deseada. Descarga el PDF con el nuevo orden cuando estés satisfecho." },
                { q: "¿Puedo reordenar solo algunas páginas y dejar el resto igual?", a: "Sí. Solo mueve las páginas que necesitas cambiar — el resto permanecerá en su posición original. No es necesario reorganizar todo el documento." },
                { q: "¿Se mantiene la calidad al mover páginas?", a: "Sí. Mover páginas no afecta la calidad del contenido — texto, imágenes, gráficos y formato se mantienen exactamente como en el original." },
                { q: "¿Puedo reordenar páginas de un PDF escaneado?", a: "Sí. La herramienta funciona con cualquier tipo de PDF, incluyendo documentos escaneados. Las miniaturas te ayudan a identificar cada página para reorganizarlas correctamente." },
                { q: "¿Puedo reordenar páginas desde mi celular?", a: "Sí. OmnisPDF funciona en navegadores móviles con soporte táctil — arrastra y suelta páginas desde tu iPhone o Android." },
                { q: "¿Es gratis reordenar páginas de un PDF?", a: "Sí. Puedes reordenar páginas de PDFs de hasta 25MB gratis. Para archivos más grandes y procesamiento por lotes, actualiza a Pro." },
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
