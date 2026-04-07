import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FilePlus, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Agregar Página a PDF — Inserta Páginas en tu Documento PDF | PDF.it",
  description:
    "Agrega páginas a un PDF existente con PDF.it. Inserta portadas, apéndices, firmas o páginas adicionales a cualquier documento PDF — rápido, gratis y en tu navegador.",
  alternates: {
    languages: {
      en: "/merge-pdf",
      es: "/es/agregar-pagina-a-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo agrego una página a un PDF existente?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF original y el archivo con las páginas que deseas agregar. PDF.it los combina en un solo documento, insertando las nuevas páginas donde las necesites." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo insertar una página en una posición específica?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Puedes elegir dónde insertar las nuevas páginas — al inicio, al final, o entre páginas específicas de tu documento PDF." }
    },
    {
      "@type": "Question",
      "name": "¿Se mantiene la calidad del PDF original?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Las páginas originales se mantienen exactamente como están — sin recodificación, sin pérdida de calidad en texto, imágenes o formato." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo agregar páginas desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en navegadores móviles — sube tus PDFs, agrega páginas y descarga el resultado desde iPhone o Android." }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro subir mi PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos." }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis agregar páginas a un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Puedes agregar páginas a PDFs de hasta 25MB gratis. Para archivos más grandes y procesamiento por lotes, actualiza a Pro." }
    }
  ]
}

export default function AgregarPaginaAPDFPage() {
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
                <FilePlus className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Agregar Página a PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Inserta páginas adicionales a cualquier documento PDF — agrega portadas, apéndices, firmas o formularios completados. Descarga tu PDF actualizado al instante.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Inserción Rápida</span></div>
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
          processingMessage="Agregando páginas a tu PDF..."
          successMessage="¡Tu PDF con páginas agregadas está listo!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              La herramienta Agregar Página de PDF.it te permite insertar páginas adicionales en un documento PDF existente. Combina múltiples archivos PDF en uno solo, agregando portadas, apéndices, páginas de firmas o cualquier contenido adicional que necesites.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Inserta páginas en cualquier posición del documento</li>
              <li>✓ Combina múltiples PDFs en un solo archivo</li>
              <li>✓ Sin pérdida de calidad — las páginas originales no se modifican</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — agrega páginas desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Agregar Portada a un PDF</h2>
              <p className="text-slate-600">
                Inserta una portada profesional al inicio de tu documento PDF. Perfecto para reportes, propuestas y presentaciones que necesitan una página de título.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Insertar Apéndice</h2>
              <p className="text-slate-600">
                Agrega apéndices, anexos o documentos de referencia al final de tu PDF. Ideal para informes académicos, técnicos o legales que requieren documentación adicional.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Añadir Páginas de Firmas</h2>
              <p className="text-slate-600">
                Incorpora páginas con firmas, acuerdos o declaraciones a un contrato o documento legal existente sin necesidad de recrear todo el archivo.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Completar Formularios</h2>
              <p className="text-slate-600">
                Agrega formularios completados, hojas de datos o páginas de información adicional a un documento principal para crear un expediente completo.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Agregar Páginas a un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF original a PDF.it.",
                "Agrega el archivo PDF con las páginas que deseas insertar.",
                "Haz clic en Unir PDF y descarga tu documento actualizado.",
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
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina varios PDFs en uno" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Separa páginas de un PDF" },
                { name: "Rotar PDF", href: "/es/rotar-pdf", desc: "Corrige la orientación" },
                { name: "Eliminar Páginas", href: "/es/eliminar-paginas-de-pdf", desc: "Quita páginas no deseadas" },
                { name: "Reordenar PDF", href: "/es/reordenar-pdf", desc: "Cambia el orden de páginas" },
                { name: "Aplanar PDF", href: "/es/aplanar-pdf", desc: "Bloquea formularios y capas" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño del archivo" },
                { name: "Extraer Páginas", href: "/es/extraer-paginas-de-pdf", desc: "Saca páginas específicas" },
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
                { q: "¿Cómo agrego una página a un PDF existente?", a: "Sube tu PDF original y el archivo con las páginas que deseas agregar. PDF.it los combina en un solo documento, insertando las nuevas páginas donde las necesites." },
                { q: "¿Puedo insertar una página en una posición específica?", a: "Sí. Puedes elegir dónde insertar las nuevas páginas — al inicio, al final, o entre páginas específicas de tu documento PDF." },
                { q: "¿Se mantiene la calidad del PDF original?", a: "Sí. Las páginas originales se mantienen exactamente como están — sin recodificación, sin pérdida de calidad en texto, imágenes o formato." },
                { q: "¿Puedo agregar páginas desde mi celular?", a: "Sí. PDF.it funciona en navegadores móviles — sube tus PDFs, agrega páginas y descarga el resultado desde iPhone o Android." },
                { q: "¿Es seguro subir mi PDF?", a: "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos." },
                { q: "¿Es gratis agregar páginas a un PDF?", a: "Sí. Puedes agregar páginas a PDFs de hasta 25MB gratis. Para archivos más grandes y procesamiento por lotes, actualiza a Pro." },
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
