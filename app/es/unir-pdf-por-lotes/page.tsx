import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { Merge, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Unir PDF por Lotes — Combina PDFs en Masa | PDF.it",
  description:
    "Une múltiples archivos PDF a la vez con PDF.it Pro. Sube docenas de PDFs y combínalos en un solo documento en una sola operación — rápido y eficiente.",
  alternates: {
    languages: {
      en: "/batch-merge-pdf",
      es: "/es/unir-pdf-por-lotes",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuántos PDFs puedo unir por lotes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios Pro pueden subir y unir docenas de archivos PDF en una sola operación por lotes. No hay un límite fijo de archivos — la principal restricción es el tamaño total, que puede ser de hasta 200MB por archivo para usuarios Pro." }
    },
    {
      "@type": "Question",
      "name": "¿La unión por lotes está disponible en el plan gratuito?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios gratuitos pueden unir archivos uno a la vez con archivos de hasta 25MB. El procesamiento por lotes — subir y unir múltiples archivos simultáneamente — es una función Pro disponible por $7.99/mes." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo elegir el orden de los PDFs unidos por lotes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Cuando subes múltiples archivos para unión por lotes, puedes ordenarlos como prefieras antes de combinar. El PDF final seguirá la secuencia que establezcas." }
    },
    {
      "@type": "Question",
      "name": "¿Qué tan rápido es el procesamiento por lotes?",
      "acceptedAnswer": { "@type": "Answer", "text": "El procesamiento por lotes es significativamente más rápido que unir archivos uno por uno. PDF.it procesa todos los archivos en paralelo, ahorrándote horas de trabajo manual." }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el tamaño máximo de archivo para unir por lotes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios Pro pueden subir archivos de hasta 200MB cada uno. Los usuarios gratuitos están limitados a 25MB por archivo. Para documentos muy grandes, considera comprimirlos primero con la herramienta Comprimir PDF de PDF.it." }
    },
    {
      "@type": "Question",
      "name": "¿La unión por lotes afecta la calidad del PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. La unión por lotes preserva la calidad original de todos tus archivos PDF. Texto, imágenes, formato, fuentes y elementos interactivos permanecen sin cambios en el resultado final." }
    }
  ]
}

export default function UnirPDFPorLotesPage() {
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
                <Merge className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Unir PDF por Lotes</h1>
              <p className="text-xl text-slate-300 mb-8">
                Combina múltiples archivos PDF a la vez con PDF.it Pro. Sube docenas de documentos y únelos en un solo PDF en una sola operación — ahorra horas de trabajo manual.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Procesa Múltiples Archivos</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Descarga como ZIP</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Upsell CTA */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-4">El Procesamiento por Lotes Requiere Pro</h2>
            <p className="text-slate-600 mb-6">Los usuarios gratuitos pueden unir archivos uno a la vez. Actualiza a Pro para unión por lotes, archivos más grandes y conversiones ilimitadas.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/es/unir-pdf" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">
                Prueba Unir PDF Gratis
              </Link>
              <Link href="/es/precios" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-colors">
                Actualizar a Pro
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Cuando necesitas combinar docenas de archivos PDF en un solo documento, hacerlo uno a la vez es extremadamente lento. La función de unión por lotes de PDF.it Pro te permite subir múltiples archivos a la vez, ordenarlos y unirlos todos en una sola operación.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Sube y une múltiples PDFs simultáneamente</li>
              <li>✓ Ordena archivos en cualquier secuencia antes de unir</li>
              <li>✓ Archivos de hasta 200MB cada uno con Pro</li>
              <li>✓ Seguimiento de progreso por archivo y Descarga Todo como ZIP</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Ideal para Departamentos de Contabilidad</h2>
              <p className="text-slate-600">
                Contadores y tenedores de libros frecuentemente necesitan combinar meses de facturas o recibos en un solo PDF para archivos o auditorías. Con unión por lotes, sube todos tus PDFs de facturas a la vez y combínalos en un documento organizado en segundos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Perfecto para Equipos Legales</h2>
              <p className="text-slate-600">
                ¿Armando documentación para un caso legal? Sube todos los documentos individuales y únelos en un solo expediente completo. Perfecto para presentaciones en juzgados, documentación de proyectos e informes de múltiples autores.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Flujos de Recursos Humanos y Archivado de Documentos</h2>
              <p className="text-slate-600">
                Ya sea que estés combinando contratos de empleados, consolidando documentos de onboarding o archivando materiales de capacitación, la unión por lotes elimina el tedioso proceso de unir archivos uno por uno.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Unir PDFs por Lotes</h2>
            <div className="space-y-4">
              {[
                "Abre Unir PDF y selecciona múltiples archivos a la vez (función Pro).",
                "Ordena los archivos en tu secuencia preferida.",
                "Haz clic en Unir y descarga tu PDF combinado.",
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
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina PDFs" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Separa páginas" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce tamaño" },
                { name: "Rotar PDF", href: "/es/rotar-pdf", desc: "Corrige orientación" },
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
                { q: "¿Cuántos PDFs puedo unir por lotes?", a: "Los usuarios Pro pueden subir y unir docenas de archivos PDF en una sola operación por lotes. No hay un límite fijo de archivos — la principal restricción es el tamaño total, que puede ser de hasta 200MB por archivo para usuarios Pro." },
                { q: "¿La unión por lotes está disponible en el plan gratuito?", a: "Los usuarios gratuitos pueden unir archivos uno a la vez con archivos de hasta 25MB. El procesamiento por lotes — subir y unir múltiples archivos simultáneamente — es una función Pro disponible por $7.99/mes." },
                { q: "¿Puedo elegir el orden de los PDFs unidos por lotes?", a: "Sí. Cuando subes múltiples archivos para unión por lotes, puedes ordenarlos como prefieras antes de combinar. El PDF final seguirá la secuencia que establezcas." },
                { q: "¿Qué tan rápido es el procesamiento por lotes?", a: "El procesamiento por lotes es significativamente más rápido que unir archivos uno por uno. PDF.it procesa todos los archivos en paralelo, ahorrándote horas de trabajo manual." },
                { q: "¿Cuál es el tamaño máximo de archivo para unir por lotes?", a: "Los usuarios Pro pueden subir archivos de hasta 200MB cada uno. Los usuarios gratuitos están limitados a 25MB por archivo. Para documentos muy grandes, considera comprimirlos primero con la herramienta Comprimir PDF de PDF.it." },
                { q: "¿La unión por lotes afecta la calidad del PDF?", a: "No. La unión por lotes preserva la calidad original de todos tus archivos PDF. Texto, imágenes, formato, fuentes y elementos interactivos permanecen sin cambios en el resultado final." },
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
