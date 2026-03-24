import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Layers, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Aplanar PDF Online — Bloquear Formularios y Anotaciones | PDF.it",
  description:
    "Aplana archivos PDF con PDF.it. Bloquea campos de formulario, anotaciones y capas en un PDF plano y no editable — rápido, desde tu navegador, sin registro.",
  alternates: {
    languages: {
      en: "/flatten-pdf",
      es: "/es/aplanar-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué significa aplanar un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Aplanar un PDF fusiona todos los elementos interactivos — campos de formulario, anotaciones, comentarios y capas — en el contenido de la página. El resultado es un PDF estático y no editable que se ve igual en todas partes." }
    },
    {
      "@type": "Question",
      "name": "¿Cuándo debo aplanar un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Aplana un PDF antes de enviar formularios, compartir documentos firmados, archivar registros, o cuando el destinatario ve campos en blanco. Aplanar asegura que el contenido quede bloqueado y visible." }
    },
    {
      "@type": "Question",
      "name": "¿Aplanar cambiará cómo se ve mi PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. La apariencia visual se mantiene igual. Aplanar solo elimina la capacidad de editar campos de formulario, anotaciones y elementos interactivos." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo aplanar un PDF con campos de formulario llenos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Todos los datos ingresados se preservan y se convierten en parte del contenido de la página. Los campos simplemente ya no se pueden editar." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo aplanar un PDF desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en navegadores móviles — sube, aplana y descarga desde tu iPhone o Android." }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis aplanar un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Las cuentas gratuitas tienen 10 conversiones por día. Las cuentas Pro tienen uso ilimitado." }
    }
  ]
}

export default function AplanarPDFPage() {
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
                <Layers className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Aplanar PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Bloquea campos de formulario, anotaciones y capas en un PDF plano y no editable. Perfecto para envíos, archivado y compartir documentos finales.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Aplanado Instantáneo</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Flatten PDF"
          outputFormat="PDF"
          processingMessage="Flattening your PDF..."
          successMessage="Your flattened PDF is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Aplanar un PDF fusiona todos los campos de formulario, anotaciones, comentarios y capas interactivas en la página misma. El resultado es un PDF limpio y estático que se muestra de forma consistente en todos los dispositivos y visores — sin datos faltantes ni campos en blanco.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Bloquea campos de formulario llenos para que no se puedan editar</li>
              <li>✓ Fusiona anotaciones y comentarios en la página</li>
              <li>✓ Corrige campos en blanco que aparecen en algunos visores PDF</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — aplana PDFs en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Envía Formularios Sin Campos en Blanco</h2>
              <p className="text-slate-600">
                ¿Llenaste un formulario PDF pero el destinatario ve campos vacíos? Esto pasa cuando los datos del formulario no están incrustados en la página. Aplanar bloquea todo en su lugar para que se muestre correctamente en todas partes.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Finaliza Documentos Firmados</h2>
              <p className="text-slate-600">
                Después de firmar un PDF, aplánalo para evitar más ediciones. Las firmas, datos de formulario y anotaciones se convierten en partes permanentes del documento — perfecto para contratos y trámites legales.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Archiva PDFs para Almacenamiento a Largo Plazo</h2>
              <p className="text-slate-600">
                Los PDFs aplanados se convierten a formato PDF/A, el estándar internacional para archivado de documentos a largo plazo. Esto asegura que tus documentos sigan siendo legibles con el paso de los años.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Aplanar un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Haz clic en Aplanar PDF — todos los campos y anotaciones se fusionan en la página.",
                "Descarga tu PDF aplanado y no editable.",
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
                { name: "Proteger PDF", href: "/es/proteger-pdf", desc: "Agrega contraseña" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño del archivo" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina varios PDFs" },
                { name: "PDF a JPG", href: "/es/pdf-a-jpg", desc: "Convierte páginas a imágenes" },
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
                { q: "¿Qué significa aplanar un PDF?", a: "Aplanar un PDF fusiona todos los elementos interactivos — campos de formulario, anotaciones, comentarios y capas — en el contenido de la página. El resultado es un PDF estático y no editable que se ve igual en todas partes." },
                { q: "¿Cuándo debo aplanar un PDF?", a: "Aplana un PDF antes de enviar formularios, compartir documentos firmados, archivar registros, o cuando el destinatario ve campos en blanco. Aplanar asegura que el contenido quede bloqueado y visible." },
                { q: "¿Aplanar cambiará cómo se ve mi PDF?", a: "No. La apariencia visual se mantiene igual. Aplanar solo elimina la capacidad de editar campos de formulario, anotaciones y elementos interactivos." },
                { q: "¿Puedo aplanar un PDF con campos de formulario llenos?", a: "Sí. Todos los datos ingresados se preservan y se convierten en parte del contenido de la página. Los campos simplemente ya no se pueden editar." },
                { q: "¿Puedo aplanar un PDF desde mi celular?", a: "Sí. PDF.it funciona en navegadores móviles — sube, aplana y descarga desde tu iPhone o Android." },
                { q: "¿Es gratis aplanar un PDF?", a: "Sí. Las cuentas gratuitas tienen 10 conversiones por día. Las cuentas Pro tienen uso ilimitado." },
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
