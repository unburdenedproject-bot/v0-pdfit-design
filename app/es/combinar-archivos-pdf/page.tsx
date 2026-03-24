import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Merge, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Combinar Archivos PDF — Une PDFs en Un Solo Documento | PDF.it",
  description:
    "Combina múltiples archivos PDF en un solo documento con PDF.it. Sube tus PDFs, ordénalos y descarga un archivo combinado — rápido, gratis y desde tu navegador.",
  alternates: {
    languages: {
      en: "/combine-pdf-files",
      es: "/es/combinar-archivos-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo combino archivos PDF en línea?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tus archivos PDF a PDF.it, ordénalos como prefieras y haz clic en Combinar. Tu PDF combinado estará listo para descargar en segundos — sin necesidad de instalar software." }
    },
    {
      "@type": "Question",
      "name": "¿Hay un límite de cuántos PDFs puedo combinar?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios gratuitos pueden combinar archivos uno a la vez. Los usuarios Pro obtienen procesamiento por lotes para combinar múltiples PDFs a la vez, con archivos de hasta 200MB cada uno." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo controlar el orden de los PDFs combinados?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Después de subir tus archivos, puedes arrastrar y soltar para ordenarlos como quieras. El PDF final sigue la secuencia exacta que tú estableces." }
    },
    {
      "@type": "Question",
      "name": "¿Combinar PDFs reduce la calidad?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it combina tus PDFs sin recomprimir ni alterar el contenido. Cada página conserva su calidad original, fuentes y formato." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo combinar PDFs desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en cualquier navegador móvil — sube tus PDFs, combínalos y descarga el resultado en iPhone o Android." }
    },
    {
      "@type": "Question",
      "name": "¿Necesito crear una cuenta para combinar PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "No se necesita cuenta para uso básico. Los usuarios gratuitos obtienen hasta 3 conversiones anónimas por día, luego una cuenta gratuita desbloquea hasta 10 conversiones diarias." }
    }
  ]
}

export default function CombinarArchivosPDFPage() {
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
                <Merge className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Combinar Archivos PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Combina múltiples archivos PDF en un solo documento. Sube tus PDFs, ordénalos y descarga un archivo combinado — rápido, gratis y desde tu navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Combinación Instantánea</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Merge PDF"
          outputFormat="PDF"
          processingMessage="Combinando tus archivos PDF..."
          successMessage="¡Tus archivos PDF han sido combinados!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              ¿Necesitas combinar múltiples archivos PDF en uno solo? PDF.it lo hace simple. Sube tus documentos, ordénalos correctamente y descarga un solo PDF combinado — perfecto para presentaciones, documentos de trabajo, solicitudes y más.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Combina cualquier cantidad de archivos PDF en un documento</li>
              <li>✓ Arrastra y suelta para ordenar las páginas</li>
              <li>✓ Sin pérdida de calidad — formato original preservado</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — combina PDFs directamente en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Combina Presentaciones y Propuestas</h2>
              <p className="text-slate-600">
                ¿Armando una propuesta para un cliente o informe trimestral con múltiples archivos? Sube cada sección como un PDF separado, ordénalos y combínalos en un documento profesional listo para compartir o imprimir.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Une Documentos de Trabajo y Solicitudes</h2>
              <p className="text-slate-600">
                Solicitudes universitarias, trámites de visa y solicitudes de empleo frecuentemente requieren un solo PDF con múltiples documentos. Combina tu currículum, carta de presentación, transcripciones y referencias en un solo archivo que cumpla los requisitos de envío.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Combina y Comprime Paquetes de Envío</h2>
              <p className="text-slate-600">
                Después de combinar tus PDFs, el archivo resultante puede ser muy grande para email o portales de carga. Usa la herramienta Comprimir PDF de PDF.it para reducir el tamaño del archivo combinado sin perder calidad.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Combinar Archivos PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tus archivos PDF a PDF.it.",
                "Ordena los archivos en tu secuencia preferida.",
                "Haz clic en Combinar y descarga tu PDF unido.",
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
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina PDFs estándar" },
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
                { q: "¿Cómo combino archivos PDF en línea?", a: "Sube tus archivos PDF a PDF.it, ordénalos como prefieras y haz clic en Combinar. Tu PDF combinado estará listo para descargar en segundos — sin necesidad de instalar software." },
                { q: "¿Hay un límite de cuántos PDFs puedo combinar?", a: "Los usuarios gratuitos pueden combinar archivos uno a la vez. Los usuarios Pro obtienen procesamiento por lotes para combinar múltiples PDFs a la vez, con archivos de hasta 200MB cada uno." },
                { q: "¿Puedo controlar el orden de los PDFs combinados?", a: "Sí. Después de subir tus archivos, puedes arrastrar y soltar para ordenarlos como quieras. El PDF final sigue la secuencia exacta que tú estableces." },
                { q: "¿Combinar PDFs reduce la calidad?", a: "No. PDF.it combina tus PDFs sin recomprimir ni alterar el contenido. Cada página conserva su calidad original, fuentes y formato." },
                { q: "¿Puedo combinar PDFs desde mi celular?", a: "Sí. PDF.it funciona en cualquier navegador móvil — sube tus PDFs, combínalos y descarga el resultado en iPhone o Android." },
                { q: "¿Necesito crear una cuenta para combinar PDFs?", a: "No se necesita cuenta para uso básico. Los usuarios gratuitos obtienen hasta 3 conversiones anónimas por día, luego una cuenta gratuita desbloquea hasta 10 conversiones diarias." },
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
