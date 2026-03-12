import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Editar Metadatos de PDF — Cambia Título, Autor y Propiedades | OmnisPDF",
  description:
    "Edita los metadatos de un PDF con OmnisPDF. Cambia título, autor, tema y palabras clave de cualquier documento PDF — rápido, gratis y en tu navegador.",
  alternates: {
    languages: {
      en: "/edit-pdf-metadata",
      es: "/es/editar-metadatos-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué son los metadatos de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los metadatos son información oculta dentro del PDF como el título, autor, tema, palabras clave, fecha de creación y software utilizado. Esta información se usa para organización, búsqueda y catalogación de documentos." }
    },
    {
      "@type": "Question",
      "name": "¿Qué campos de metadatos puedo editar?",
      "acceptedAnswer": { "@type": "Answer", "text": "Puedes editar el título, autor, tema (subject), palabras clave (keywords) y otros campos estándar de metadatos PDF. Esto te permite personalizar la información del documento según tus necesidades." }
    },
    {
      "@type": "Question",
      "name": "¿Editar los metadatos cambia el contenido del PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Editar los metadatos solo modifica la información descriptiva del archivo. El contenido visible del PDF — texto, imágenes, formato — permanece exactamente igual." }
    },
    {
      "@type": "Question",
      "name": "¿Para qué sirve editar los metadatos de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Es útil para organización de archivos, SEO de documentos compartidos en línea, cumplimiento corporativo, archivado profesional y para que los documentos sean más fáciles de encontrar en búsquedas." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo editar metadatos desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. OmnisPDF funciona en navegadores móviles — sube tu PDF, edita los metadatos y descarga el resultado desde iPhone o Android." }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis editar metadatos de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Puedes editar metadatos de PDFs de hasta 25MB gratis. Para archivos más grandes y procesamiento por lotes, actualiza a Pro." }
    }
  ]
}

export default function EditarMetadatosPDFPage() {
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
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Editar Metadatos de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Cambia el título, autor, tema y palabras clave de cualquier PDF. Personaliza las propiedades de tu documento para mejor organización, SEO y cumplimiento corporativo.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Edición Instantánea</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Edit Metadata"
          outputFormat="PDF"
          processingMessage="Editando metadatos de tu PDF..."
          successMessage="¡Los metadatos han sido actualizados!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Los metadatos de un PDF contienen información descriptiva como el título, autor, tema y palabras clave. Con OmnisPDF puedes editar estos campos para organizar mejor tus documentos, mejorar su visibilidad en búsquedas y cumplir con estándares corporativos de documentación.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Edita título, autor, tema y palabras clave</li>
              <li>✓ El contenido visible del PDF no se modifica</li>
              <li>✓ Mejora la organización y búsqueda de documentos</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — edita metadatos desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Organización de Archivos</h2>
              <p className="text-slate-600">
                Agrega títulos descriptivos y nombres de autor a tus PDFs para facilitar la búsqueda y clasificación en sistemas de gestión documental y exploradores de archivos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">SEO de Documentos</h2>
              <p className="text-slate-600">
                Optimiza los metadatos de PDFs que compartes en línea. Los motores de búsqueda leen el título y las palabras clave de los metadatos para indexar documentos PDF.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Cumplimiento Corporativo</h2>
              <p className="text-slate-600">
                Muchas empresas requieren que los documentos tengan metadatos estandarizados — autor oficial, departamento, fecha y clasificación. Edita los metadatos para cumplir con estas políticas.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Archivado Profesional</h2>
              <p className="text-slate-600">
                Prepara documentos para archivado a largo plazo con metadatos completos y precisos. Facilita la recuperación futura de documentos con información descriptiva correcta.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Editar Metadatos de un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a OmnisPDF.",
                "Modifica los campos de metadatos: título, autor, tema y palabras clave.",
                "Haz clic en Guardar y descarga tu PDF con los metadatos actualizados.",
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
                { name: "Eliminar Metadatos", href: "/es/eliminar-metadatos-pdf", desc: "Quita información oculta" },
                { name: "Proteger PDF", href: "/es/proteger-pdf", desc: "Agrega contraseña" },
                { name: "Aplanar PDF", href: "/es/aplanar-pdf", desc: "Bloquea formularios y capas" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño del archivo" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina varios PDFs" },
                { name: "Marca de Agua", href: "/es/marca-de-agua-pdf", desc: "Agrega marca de agua" },
                { name: "Organizar PDF", href: "/es/organizar-pdf", desc: "Reordena y gestiona páginas" },
                { name: "Redactar PDF", href: "/es/redactar-pdf", desc: "Oculta información sensible" },
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
                { q: "¿Qué son los metadatos de un PDF?", a: "Los metadatos son información oculta dentro del PDF como el título, autor, tema, palabras clave, fecha de creación y software utilizado. Esta información se usa para organización, búsqueda y catalogación de documentos." },
                { q: "¿Qué campos de metadatos puedo editar?", a: "Puedes editar el título, autor, tema (subject), palabras clave (keywords) y otros campos estándar de metadatos PDF. Esto te permite personalizar la información del documento según tus necesidades." },
                { q: "¿Editar los metadatos cambia el contenido del PDF?", a: "No. Editar los metadatos solo modifica la información descriptiva del archivo. El contenido visible del PDF — texto, imágenes, formato — permanece exactamente igual." },
                { q: "¿Para qué sirve editar los metadatos de un PDF?", a: "Es útil para organización de archivos, SEO de documentos compartidos en línea, cumplimiento corporativo, archivado profesional y para que los documentos sean más fáciles de encontrar en búsquedas." },
                { q: "¿Puedo editar metadatos desde mi celular?", a: "Sí. OmnisPDF funciona en navegadores móviles — sube tu PDF, edita los metadatos y descarga el resultado desde iPhone o Android." },
                { q: "¿Es gratis editar metadatos de un PDF?", a: "Sí. Puedes editar metadatos de PDFs de hasta 25MB gratis. Para archivos más grandes y procesamiento por lotes, actualiza a Pro." },
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
