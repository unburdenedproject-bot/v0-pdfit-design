import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Layers, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Organizar PDF por Lotes — Organiza Múltiples PDFs a la Vez | PDF.it",
  description:
    "Organiza múltiples PDFs a la vez con PDF.it. Reordena páginas y estructura documentos por lotes — ideal para equipos, departamentos legales y archivos corporativos.",
  alternates: {
    languages: {
      en: "/batch-organize-pdf",
      es: "/es/organizar-pdf-por-lotes",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es la organización por lotes de PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "La organización por lotes te permite reorganizar las páginas de múltiples archivos PDF simultáneamente. En vez de procesar cada documento individualmente, sube varios PDFs y PDF.it los organiza todos a la vez." }
    },
    {
      "@type": "Question",
      "name": "¿Cuántos PDFs puedo organizar a la vez?",
      "acceptedAnswer": { "@type": "Answer", "text": "Las cuentas Pro y Business pueden procesar múltiples archivos por lotes. El límite depende del tamaño total de los archivos — hasta 200MB por sesión." }
    },
    {
      "@type": "Question",
      "name": "¿La organización por lotes es una función Pro?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. El procesamiento por lotes está disponible para cuentas Pro ($7.99/mes) y Business ($13.99/mes). Las cuentas gratuitas pueden organizar un PDF a la vez." }
    },
    {
      "@type": "Question",
      "name": "¿Se mantiene la calidad de los documentos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. La reorganización de páginas no afecta la calidad del contenido — texto, imágenes y formato se mantienen exactamente como en los originales." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo descargar todos los PDFs organizados a la vez?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Después de organizar por lotes, puedes descargar todos los archivos procesados en un solo archivo ZIP." }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro subir múltiples PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos." }
    }
  ]
}

export default function OrganizarPDFPorLotesPage() {
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
                <Layers className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Organizar PDF por Lotes</h1>
              <p className="text-xl text-slate-300 mb-8">
                Organiza múltiples documentos PDF a la vez. Reordena páginas, estructura documentos y descarga todos tus PDFs organizados en un solo clic — función Pro.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Procesamiento Múltiple</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Descarga ZIP</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Organize PDF"
          outputFormat="PDF"
          processingMessage="Organizando tus PDFs por lotes..."
          successMessage="¡Tus PDFs han sido organizados!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              La organización por lotes de PDF.it te permite procesar múltiples documentos PDF simultáneamente. Sube varios archivos, reorganiza las páginas de cada uno y descarga todos los documentos organizados en un archivo ZIP — ahorrando tiempo en flujos de trabajo con muchos documentos.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Organiza múltiples PDFs en una sola sesión</li>
              <li>✓ Descarga todos los archivos procesados como ZIP</li>
              <li>✓ Progreso individual por archivo</li>
              <li>✓ Sin pérdida de calidad en ningún documento</li>
              <li>✓ Función disponible para cuentas Pro y Business</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Departamentos Legales</h2>
              <p className="text-slate-600">
                Organiza expedientes legales, contratos y documentación judicial en lotes. Estructura múltiples documentos según los estándares del departamento sin procesar uno por uno.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Equipos de Marketing</h2>
              <p className="text-slate-600">
                Reorganiza presentaciones, propuestas y materiales de marketing en lotes. Prepara múltiples documentos para clientes con la estructura correcta de una sola vez.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Archivos Corporativos</h2>
              <p className="text-slate-600">
                Organiza documentación corporativa por lotes para archivado. Estructura reportes anuales, actas, manuales y políticas de forma eficiente.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Flujos de Trabajo Automatizados</h2>
              <p className="text-slate-600">
                Integra la organización por lotes en tus flujos de trabajo documentales. Procesa documentos entrantes, aplica estructura estándar y distribuye resultados automáticamente.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Organizar PDFs por Lotes</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra múltiples archivos PDF a PDF.it.",
                "Reorganiza las páginas de cada documento según tus necesidades.",
                "Haz clic en Organizar Todo y descarga tus PDFs organizados como ZIP.",
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
                { name: "Organizar PDF", href: "/es/organizar-pdf", desc: "Organiza un solo PDF" },
                { name: "Reordenar PDF", href: "/es/reordenar-pdf", desc: "Cambia el orden de páginas" },
                { name: "Unir por Lotes", href: "/es/unir-pdf-por-lotes", desc: "Combina múltiples PDFs" },
                { name: "Dividir por Lotes", href: "/es/dividir-pdf-por-lotes", desc: "Separa múltiples PDFs" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño del archivo" },
                { name: "Eliminar Páginas", href: "/es/eliminar-paginas-de-pdf", desc: "Quita páginas no deseadas" },
                { name: "Rotar PDF", href: "/es/rotar-pdf", desc: "Corrige la orientación" },
                { name: "Aplanar PDF", href: "/es/aplanar-pdf", desc: "Bloquea formularios y capas" },
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
                { q: "¿Qué es la organización por lotes de PDFs?", a: "La organización por lotes te permite reorganizar las páginas de múltiples archivos PDF simultáneamente. En vez de procesar cada documento individualmente, sube varios PDFs y PDF.it los organiza todos a la vez." },
                { q: "¿Cuántos PDFs puedo organizar a la vez?", a: "Las cuentas Pro y Business pueden procesar múltiples archivos por lotes. El límite depende del tamaño total de los archivos — hasta 200MB por sesión." },
                { q: "¿La organización por lotes es una función Pro?", a: "Sí. El procesamiento por lotes está disponible para cuentas Pro ($7.99/mes) y Business ($13.99/mes). Las cuentas gratuitas pueden organizar un PDF a la vez." },
                { q: "¿Se mantiene la calidad de los documentos?", a: "Sí. La reorganización de páginas no afecta la calidad del contenido — texto, imágenes y formato se mantienen exactamente como en los originales." },
                { q: "¿Puedo descargar todos los PDFs organizados a la vez?", a: "Sí. Después de organizar por lotes, puedes descargar todos los archivos procesados en un solo archivo ZIP." },
                { q: "¿Es seguro subir múltiples PDFs?", a: "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos." },
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
