import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { LayoutGrid, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Organizar PDF — Reordena y Gestiona Páginas de tu PDF | PDF.it",
  description:
    "Organiza las páginas de tu PDF con PDF.it. Reordena, mueve y gestiona páginas para crear documentos bien estructurados — rápido, gratis y en tu navegador.",
  alternates: {
    languages: {
      en: "/organize-pdf",
      es: "/es/organizar-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué significa organizar un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Organizar un PDF te permite reordenar las páginas, mover secciones, eliminar páginas no deseadas y reorganizar el contenido de tu documento para crear una estructura lógica y profesional." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo mover páginas a cualquier posición?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it te permite arrastrar y soltar páginas para moverlas a cualquier posición dentro del documento. Puedes reorganizar todo el PDF según tus necesidades." }
    },
    {
      "@type": "Question",
      "name": "¿Se mantiene la calidad al reorganizar?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Reorganizar páginas no afecta la calidad del contenido — texto, imágenes y formato se mantienen exactamente como en el original." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo organizar un PDF desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en navegadores móviles — sube tu PDF, reorganiza las páginas y descarga el resultado desde iPhone o Android." }
    },
    {
      "@type": "Question",
      "name": "¿Hay un límite de páginas para organizar?",
      "acceptedAnswer": { "@type": "Answer", "text": "Las cuentas gratuitas pueden organizar PDFs de hasta 25MB. Las cuentas Pro y Business permiten archivos de hasta 200MB sin límite de páginas." }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis organizar un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Puedes organizar PDFs de hasta 25MB gratis. Para archivos más grandes y procesamiento por lotes, actualiza a Pro." }
    }
  ]
}

export default function OrganizarPDFPage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <LayoutGrid className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Organizar PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Reordena, mueve y gestiona las páginas de tu PDF para crear documentos bien estructurados. Arrastra y suelta para reorganizar el contenido al instante.
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
          processingMessage="Organizando tu PDF..."
          successMessage="¡Tu PDF organizado está listo!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              La herramienta Organizar PDF de PDF.it te permite reorganizar las páginas de cualquier documento PDF. Arrastra y suelta páginas para cambiar su orden, mueve secciones completas y crea un documento con la estructura perfecta para tus necesidades.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Reordena páginas con arrastrar y soltar</li>
              <li>✓ Vista previa de miniaturas para identificar cada página</li>
              <li>✓ Sin pérdida de calidad — el contenido no se modifica</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — organiza PDFs desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Organizar Presentaciones</h2>
              <p className="text-slate-600">
                Reordena las diapositivas de una presentación PDF para que sigan un flujo lógico. Mueve secciones, reorganiza temas y crea una narrativa coherente.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Estructurar Reportes</h2>
              <p className="text-slate-600">
                Organiza las secciones de un reporte — mueve el resumen ejecutivo al inicio, reordena capítulos y coloca los anexos al final del documento.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Gestionar Documentación</h2>
              <p className="text-slate-600">
                Reorganiza manuales, guías y documentación técnica para que las secciones sigan un orden lógico y sean fáciles de navegar.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Crear Portafolios</h2>
              <p className="text-slate-600">
                Organiza las páginas de tu portafolio profesional en el orden perfecto. Mueve tus mejores trabajos al frente y agrupa proyectos por categoría.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Organizar un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Arrastra y suelta las páginas para reorganizarlas en el orden deseado.",
                "Haz clic en Organizar PDF y descarga tu documento reorganizado.",
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
                { name: "Reordenar Páginas", href: "/es/reordenar-paginas-pdf", desc: "Arrastra y suelta páginas" },
                { name: "Organizar por Lotes", href: "/es/organizar-pdf-por-lotes", desc: "Organiza múltiples PDFs" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Separa páginas de un PDF" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina varios PDFs" },
                { name: "Eliminar Páginas", href: "/es/eliminar-paginas-de-pdf", desc: "Quita páginas no deseadas" },
                { name: "Rotar PDF", href: "/es/rotar-pdf", desc: "Corrige la orientación" },
                { name: "Extraer Páginas", href: "/es/extraer-paginas-de-pdf", desc: "Saca páginas específicas" },
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
                { q: "¿Qué significa organizar un PDF?", a: "Organizar un PDF te permite reordenar las páginas, mover secciones, eliminar páginas no deseadas y reorganizar el contenido de tu documento para crear una estructura lógica y profesional." },
                { q: "¿Puedo mover páginas a cualquier posición?", a: "Sí. PDF.it te permite arrastrar y soltar páginas para moverlas a cualquier posición dentro del documento. Puedes reorganizar todo el PDF según tus necesidades." },
                { q: "¿Se mantiene la calidad al reorganizar?", a: "Sí. Reorganizar páginas no afecta la calidad del contenido — texto, imágenes y formato se mantienen exactamente como en el original." },
                { q: "¿Puedo organizar un PDF desde mi celular?", a: "Sí. PDF.it funciona en navegadores móviles — sube tu PDF, reorganiza las páginas y descarga el resultado desde iPhone o Android." },
                { q: "¿Hay un límite de páginas para organizar?", a: "Las cuentas gratuitas pueden organizar PDFs de hasta 25MB. Las cuentas Pro y Business permiten archivos de hasta 200MB sin límite de páginas." },
                { q: "¿Es gratis organizar un PDF?", a: "Sí. Puedes organizar PDFs de hasta 25MB gratis. Para archivos más grandes y procesamiento por lotes, actualiza a Pro." },
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
