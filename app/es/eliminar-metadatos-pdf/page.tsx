import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { ShieldOff, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Eliminar Metadatos de PDF — Quita Información Oculta del PDF | PDF.it",
  description:
    "Elimina los metadatos ocultos de un PDF con PDF.it. Quita autor, título, historial de edición y datos sensibles antes de compartir — rápido, gratis y en tu navegador.",
  alternates: {
    languages: {
      en: "/remove-pdf-metadata",
      es: "/es/eliminar-metadatos-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué metadatos ocultos contiene un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un PDF puede contener información oculta como el nombre del autor, software utilizado, fecha de creación, historial de edición, ubicación GPS y comentarios internos. Esta información puede comprometer tu privacidad si no se elimina antes de compartir." }
    },
    {
      "@type": "Question",
      "name": "¿Por qué debería eliminar los metadatos de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Eliminar metadatos protege tu privacidad al quitar información personal como tu nombre, el software que usas, fechas de edición y otros datos que podrían revelar información sensible sobre ti o tu organización." }
    },
    {
      "@type": "Question",
      "name": "¿Eliminar metadatos cambia el contenido del PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Eliminar metadatos solo quita la información descriptiva oculta. El contenido visible del PDF — texto, imágenes, formato — permanece exactamente igual." }
    },
    {
      "@type": "Question",
      "name": "¿Qué metadatos se eliminan?",
      "acceptedAnswer": { "@type": "Answer", "text": "Se eliminan todos los campos de metadatos estándar: título, autor, tema, palabras clave, creador, productor, fechas de creación y modificación, y cualquier metadato personalizado." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo eliminar metadatos desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en navegadores móviles — sube tu PDF, elimina los metadatos y descarga el resultado desde iPhone o Android." }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis eliminar metadatos de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Puedes eliminar metadatos de PDFs de hasta 25MB gratis. Para archivos más grandes y procesamiento por lotes, actualiza a Pro." }
    }
  ]
}

export default function EliminarMetadatosPDFPage() {
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
                <ShieldOff className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Eliminar Metadatos de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Quita toda la información oculta de tu PDF antes de compartirlo. Elimina autor, título, historial de edición y datos sensibles para proteger tu privacidad.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Limpieza Completa</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Remove Metadata"
          outputFormat="PDF"
          processingMessage="Eliminando metadatos de tu PDF..."
          successMessage="¡Los metadatos han sido eliminados!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Los archivos PDF contienen información oculta que puede revelar datos personales o corporativos. Con PDF.it puedes eliminar todos los metadatos de un PDF — nombre del autor, software utilizado, fechas de edición y más — antes de compartir documentos de forma segura.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Elimina autor, título, tema y palabras clave</li>
              <li>✓ Quita fechas de creación y modificación</li>
              <li>✓ Borra información del software creador</li>
              <li>✓ El contenido visible del PDF no se modifica</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Protección de Privacidad</h2>
              <p className="text-slate-600">
                Antes de compartir un PDF en línea o enviarlo a terceros, elimina los metadatos para que no revelen tu nombre, ubicación o el software que utilizas.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Compartir Documentos de Forma Segura</h2>
              <p className="text-slate-600">
                Al enviar documentos a clientes, socios o al público, los metadatos pueden exponer información interna. Limpia los metadatos antes de distribuir cualquier documento.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Cumplimiento Regulatorio</h2>
              <p className="text-slate-600">
                Regulaciones como GDPR y CCPA requieren la protección de datos personales. Eliminar metadatos ayuda a cumplir con estas normativas al quitar información identificable de documentos compartidos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Publicación de Documentos</h2>
              <p className="text-slate-600">
                Antes de publicar PDFs en sitios web o repositorios públicos, elimina los metadatos para presentar documentos limpios y profesionales sin información interna expuesta.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Eliminar Metadatos de un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Haz clic en Eliminar Metadatos — toda la información oculta se elimina automáticamente.",
                "Descarga tu PDF limpio sin metadatos.",
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
                { name: "Editar Metadatos", href: "/es/editar-metadatos-pdf", desc: "Cambia propiedades del PDF" },
                { name: "Redactar PDF", href: "/es/redactar-pdf", desc: "Oculta información sensible" },
                { name: "Proteger PDF", href: "/es/proteger-pdf", desc: "Agrega contraseña" },
                { name: "Aplanar PDF", href: "/es/aplanar-pdf", desc: "Bloquea formularios y capas" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño del archivo" },
                { name: "Desbloquear PDF", href: "/es/desbloquear-pdf", desc: "Quita restricciones" },
                { name: "Marca de Agua", href: "/es/marca-de-agua-pdf", desc: "Agrega marca de agua" },
                { name: "Encriptar PDF", href: "/es/encriptar-pdf", desc: "Cifra tu documento" },
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
                { q: "¿Qué metadatos ocultos contiene un PDF?", a: "Un PDF puede contener información oculta como el nombre del autor, software utilizado, fecha de creación, historial de edición, ubicación GPS y comentarios internos. Esta información puede comprometer tu privacidad si no se elimina antes de compartir." },
                { q: "¿Por qué debería eliminar los metadatos de un PDF?", a: "Eliminar metadatos protege tu privacidad al quitar información personal como tu nombre, el software que usas, fechas de edición y otros datos que podrían revelar información sensible sobre ti o tu organización." },
                { q: "¿Eliminar metadatos cambia el contenido del PDF?", a: "No. Eliminar metadatos solo quita la información descriptiva oculta. El contenido visible del PDF — texto, imágenes, formato — permanece exactamente igual." },
                { q: "¿Qué metadatos se eliminan?", a: "Se eliminan todos los campos de metadatos estándar: título, autor, tema, palabras clave, creador, productor, fechas de creación y modificación, y cualquier metadato personalizado." },
                { q: "¿Puedo eliminar metadatos desde mi celular?", a: "Sí. PDF.it funciona en navegadores móviles — sube tu PDF, elimina los metadatos y descarga el resultado desde iPhone o Android." },
                { q: "¿Es gratis eliminar metadatos de un PDF?", a: "Sí. Puedes eliminar metadatos de PDFs de hasta 25MB gratis. Para archivos más grandes y procesamiento por lotes, actualiza a Pro." },
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
