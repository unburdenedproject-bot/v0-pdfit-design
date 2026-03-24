import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { ArrowUpDown, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Reordenar PDF — Cambia el Orden de las Páginas de tu PDF | PDF.it",
  description:
    "Reordena las páginas de tu PDF con PDF.it. Cambia el orden, mueve páginas y reorganiza tu documento — rápido, gratis y en tu navegador.",
  alternates: {
    languages: {
      en: "/reorder-pdf",
      es: "/es/reordenar-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo reordeno las páginas de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a PDF.it, usa la función de arrastrar y soltar para mover las páginas al orden deseado, y descarga el PDF con el nuevo orden de páginas." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo mover una página a cualquier posición?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Puedes mover cualquier página a cualquier posición dentro del documento. Simplemente arrastra la página a su nueva ubicación." }
    },
    {
      "@type": "Question",
      "name": "¿Se mantiene la calidad al reordenar?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Reordenar páginas no afecta la calidad del contenido — texto, imágenes y formato se mantienen exactamente como en el original." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo reordenar un PDF desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en navegadores móviles — sube tu PDF, reordena las páginas y descarga el resultado desde iPhone o Android." }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro subir mi PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos." }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis reordenar un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Puedes reordenar PDFs de hasta 25MB gratis. Para archivos más grandes y procesamiento por lotes, actualiza a Pro." }
    }
  ]
}

export default function ReordenarPDFPage() {
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
                <ArrowUpDown className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Reordenar PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Cambia el orden de las páginas de tu PDF en segundos. Arrastra y suelta para mover páginas, corregir el orden de escaneo o reorganizar secciones completas.
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
          processingMessage="Reordenando tu PDF..."
          successMessage="¡Tu PDF reordenado está listo!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              La herramienta Reordenar PDF de PDF.it te permite cambiar el orden de las páginas de cualquier documento PDF. Usa arrastrar y soltar para mover páginas individuales o secciones completas — perfecto para corregir documentos escaneados, reorganizar capítulos o preparar archivos para impresión.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Cambia el orden de las páginas con arrastrar y soltar</li>
              <li>✓ Vista previa de miniaturas para cada página</li>
              <li>✓ Sin pérdida de calidad — el contenido no se modifica</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — reordena PDFs desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Corregir Orden de Escaneo</h2>
              <p className="text-slate-600">
                Los escáneres a menudo guardan las páginas en orden incorrecto. Reordena rápidamente las páginas escaneadas para que sigan la secuencia correcta de lectura.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Reorganizar Capítulos</h2>
              <p className="text-slate-600">
                Mueve capítulos, secciones o bloques de contenido a nuevas posiciones dentro del documento. Ideal para reestructurar libros, manuales o reportes.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Mover Secciones</h2>
              <p className="text-slate-600">
                Coloca el resumen ejecutivo al inicio, mueve los anexos al final o reorganiza las secciones de un documento para un flujo de lectura más lógico.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Preparar para Impresión</h2>
              <p className="text-slate-600">
                Reordena las páginas en la secuencia correcta para impresión a doble cara, encuadernación o producción. Asegura que cada página esté en la posición correcta antes de imprimir.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Reordenar un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Arrastra y suelta las páginas para cambiar su orden.",
                "Haz clic en Reordenar PDF y descarga tu documento con el nuevo orden.",
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
                { name: "Organizar PDF", href: "/es/organizar-pdf", desc: "Gestiona páginas de tu PDF" },
                { name: "Reordenar Páginas", href: "/es/reordenar-paginas-pdf", desc: "Arrastra y suelta páginas" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Separa páginas de un PDF" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina varios PDFs" },
                { name: "Eliminar Páginas", href: "/es/eliminar-paginas-de-pdf", desc: "Quita páginas no deseadas" },
                { name: "Rotar PDF", href: "/es/rotar-pdf", desc: "Corrige la orientación" },
                { name: "Extraer Páginas", href: "/es/extraer-paginas-de-pdf", desc: "Saca páginas específicas" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño del archivo" },
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
                { q: "¿Cómo reordeno las páginas de un PDF?", a: "Sube tu PDF a PDF.it, usa la función de arrastrar y soltar para mover las páginas al orden deseado, y descarga el PDF con el nuevo orden de páginas." },
                { q: "¿Puedo mover una página a cualquier posición?", a: "Sí. Puedes mover cualquier página a cualquier posición dentro del documento. Simplemente arrastra la página a su nueva ubicación." },
                { q: "¿Se mantiene la calidad al reordenar?", a: "Sí. Reordenar páginas no afecta la calidad del contenido — texto, imágenes y formato se mantienen exactamente como en el original." },
                { q: "¿Puedo reordenar un PDF desde mi celular?", a: "Sí. PDF.it funciona en navegadores móviles — sube tu PDF, reordena las páginas y descarga el resultado desde iPhone o Android." },
                { q: "¿Es seguro subir mi PDF?", a: "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos." },
                { q: "¿Es gratis reordenar un PDF?", a: "Sí. Puedes reordenar PDFs de hasta 25MB gratis. Para archivos más grandes y procesamiento por lotes, actualiza a Pro." },
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
