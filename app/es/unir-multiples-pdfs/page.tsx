import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Merge, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Unir Múltiples PDFs — Combina Varios PDFs en Uno | PDF.it",
  description:
    "Une múltiples archivos PDF en un solo documento con PDF.it. Combina 2, 5 o 10+ PDFs en un archivo — rápido, gratis y desde tu navegador.",
  alternates: {
    languages: {
      en: "/merge-multiple-pdfs",
      es: "/es/unir-multiples-pdfs",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuántos PDFs puedo unir a la vez?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios Pro pueden unir grandes lotes de PDFs con procesamiento por lotes. Los usuarios gratuitos pueden unir archivos uno a la vez y combinar los resultados." }
    },
    {
      "@type": "Question",
      "name": "¿Se mantiene el orden de los archivos al unirlos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it preserva el orden exacto que tú estableces. Arrastra y suelta tus archivos para reorganizarlos antes de unir." }
    },
    {
      "@type": "Question",
      "name": "¿Se pierde calidad al unir múltiples PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it une tus PDFs sin recomprimirlos. Cada página conserva su calidad original, fuentes y formato." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo unir PDFs en lote con el plan gratuito?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios gratuitos pueden unir archivos uno a la vez. El procesamiento por lotes — subir y unir múltiples archivos simultáneamente — es una función Pro disponible por $3.99/mes." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo unir PDFs desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it es completamente basado en navegador y funciona en iPhone, iPad, Android y cualquier dispositivo con un navegador moderno." }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el tamaño máximo por archivo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios gratuitos pueden subir archivos de hasta 25MB cada uno. Los usuarios Pro tienen un límite de 200MB por archivo, ideal para documentos grandes." }
    }
  ]
}

export default function UnirMultiplesPDFsPage() {
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
                <Merge className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Unir Múltiples PDFs</h1>
              <p className="text-xl text-slate-300 mb-8">
                Combina 2, 5 o 10+ archivos PDF en un solo documento. Sube tus archivos, establece el orden y descarga un solo PDF unido — rápido, gratis y desde tu navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Unión por Lotes (Pro)</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Merge PDF"
          outputFormat="PDF"
          processingMessage="Uniendo tus PDFs..."
          successMessage="¡Tus PDFs han sido unidos!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Ya sea que necesites unir dos contratos o combinar docenas de capítulos de un informe, PDF.it lo maneja todo. Sube tus archivos PDF, ordénalos correctamente y obtén un documento unido limpio. Los usuarios Pro desbloquean el procesamiento por lotes para unir grandes cantidades de archivos a la vez.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Une 2, 5, 10 o 50+ PDFs en un solo documento</li>
              <li>✓ Procesamiento por lotes disponible para usuarios Pro</li>
              <li>✓ Arrastra y suelta para controlar el orden de archivos</li>
              <li>✓ Sin pérdida de calidad — todas las páginas se mantienen exactamente igual</li>
              <li>✓ Funciona en cualquier dispositivo con un navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Une Informes Trimestrales en Un Solo Archivo</h2>
              <p className="text-slate-600">
                ¿Compilando informes de varios departamentos? Sube cada informe individual, ordénalos cronológicamente y únelos en un documento profesional completo listo para la junta directiva.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Combina Capítulos de Libros y Documentación de Proyectos</h2>
              <p className="text-slate-600">
                Después de subir tus archivos, arrastra y suelta para establecer la secuencia exacta. PDF.it preserva tu orden elegido para que cada capítulo, sección o apéndice aparezca exactamente donde debe.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Une y Comprime Facturas Mensuales</h2>
              <p className="text-slate-600">
                Unir muchos PDFs puede resultar en un archivo grande. Después de combinar, usa la herramienta Comprimir PDF de PDF.it para reducir el resultado para email, subidas o almacenamiento en la nube sin perder calidad.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Unir Múltiples PDFs</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra todos tus archivos PDF a PDF.it.",
                "Arrastra los archivos para reordenarlos en tu secuencia preferida.",
                "Haz clic en Unir y descarga tu PDF combinado.",
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
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina PDFs en uno" },
                { name: "Combinar Archivos PDF", href: "/es/combinar-archivos-pdf", desc: "Une archivos PDF" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Separa páginas" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce tamaño" },
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
                { q: "¿Cuántos PDFs puedo unir a la vez?", a: "Los usuarios Pro pueden unir grandes lotes de PDFs con procesamiento por lotes. Los usuarios gratuitos pueden unir archivos uno a la vez y combinar los resultados." },
                { q: "¿Se mantiene el orden de los archivos al unirlos?", a: "Sí. PDF.it preserva el orden exacto que tú estableces. Arrastra y suelta tus archivos para reorganizarlos antes de unir." },
                { q: "¿Se pierde calidad al unir múltiples PDFs?", a: "No. PDF.it une tus PDFs sin recomprimirlos. Cada página conserva su calidad original, fuentes y formato." },
                { q: "¿Puedo unir PDFs en lote con el plan gratuito?", a: "Los usuarios gratuitos pueden unir archivos uno a la vez. El procesamiento por lotes — subir y unir múltiples archivos simultáneamente — es una función Pro disponible por $3.99/mes." },
                { q: "¿Puedo unir PDFs desde mi celular?", a: "Sí. PDF.it es completamente basado en navegador y funciona en iPhone, iPad, Android y cualquier dispositivo con un navegador moderno." },
                { q: "¿Cuál es el tamaño máximo por archivo?", a: "Los usuarios gratuitos pueden subir archivos de hasta 25MB cada uno. Los usuarios Pro tienen un límite de 200MB por archivo, ideal para documentos grandes." },
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
