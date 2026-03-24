import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Eraser, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Eliminar Marca de Agua de PDF — Quita Marcas de Agua de PDFs | PDF.it",
  description:
    "Elimina marcas de agua de archivos PDF con PDF.it. Quita marcas de agua de texto e imagen de tus documentos PDF y descarga un archivo limpio en segundos.",
  alternates: {
    languages: {
      en: "/remove-watermark",
      es: "/es/eliminar-marca-de-agua-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué tipos de marcas de agua puede eliminar PDF.it?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it puede eliminar marcas de agua de texto (como CONFIDENCIAL, BORRADOR, MUESTRA) y marcas de agua de imagen (logos, sellos) que fueron agregadas como capas superpuestas al PDF." }
    },
    {
      "@type": "Question",
      "name": "¿Eliminar la marca de agua afecta la calidad del PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. El proceso de eliminación de marca de agua quita solo la capa superpuesta. El contenido original del PDF — texto, imágenes, formato y estructura — se mantiene intacto y con la misma calidad." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo eliminar marcas de agua de todas las páginas a la vez?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it elimina la marca de agua de todas las páginas del PDF de forma automática en un solo proceso." }
    },
    {
      "@type": "Question",
      "name": "¿Es legal eliminar marcas de agua de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Solo debes eliminar marcas de agua de documentos propios o con autorización del propietario. Por ejemplo, borradores aprobados, versiones de prueba compradas o documentos internos de tu organización." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo eliminar marcas de agua de un PDF desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en navegadores móviles — sube tu PDF, elimina la marca de agua y descarga el archivo limpio desde cualquier dispositivo." }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro subir mi PDF para eliminar la marca de agua?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos." }
    }
  ]
}

export default function EliminarMarcaDeAguaPDFPage() {
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
                <Eraser className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Eliminar Marca de Agua de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Quita marcas de agua de texto e imagen de tus archivos PDF con PDF.it. Obtén un documento limpio y profesional listo para presentaciones, envíos y uso final — rápido, seguro y desde tu navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Eliminación Automática</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Después de la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Remove Watermark"
          outputFormat="PDF"
          processingMessage="Eliminando marca de agua..."
          successMessage="¡Tu PDF sin marca de agua está listo!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa la herramienta Eliminar Marca de Agua de PDF de PDF.it para quitar marcas de agua de texto e imagen de tus documentos PDF. Ideal para documentos finales aprobados, versiones de prueba compradas, borradores que pasaron a versión final, y presentaciones que necesitan verse limpias y profesionales.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Elimina marcas de agua de texto como CONFIDENCIAL, BORRADOR o MUESTRA</li>
              <li>✓ Quita marcas de agua de imagen y logos superpuestos</li>
              <li>✓ El contenido original del PDF se mantiene intacto</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — elimina marcas de agua desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Obtén Documentos Finales Limpios</h2>
              <p className="text-slate-600">
                Cuando un borrador con marca de agua es aprobado y necesitas la versión final, elimina la marca de agua para obtener un documento limpio y profesional listo para distribución o archivado.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Limpia Versiones de Prueba</h2>
              <p className="text-slate-600">
                Las versiones de prueba o demos de documentos a menudo incluyen marcas de agua. Una vez que tienes la versión autorizada, elimina la marca de agua para un uso más cómodo y presentable.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Prepara Presentaciones Profesionales</h2>
              <p className="text-slate-600">
                Las marcas de agua pueden distraer en presentaciones, propuestas o informes. Elimínalas para que tus documentos se vean limpios, claros y profesionales ante clientes o socios.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Eliminar la Marca de Agua de un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube tu PDF con marca de agua a PDF.it.",
                "PDF.it detecta y elimina la marca de agua automáticamente.",
                "Descarga tu PDF limpio sin marca de agua.",
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
                { name: "Marca de Agua PDF", href: "/es/marca-de-agua-pdf", desc: "Agrega marcas de agua a un PDF" },
                { name: "Proteger PDF", href: "/es/proteger-pdf", desc: "Agrega contraseña a tu PDF" },
                { name: "Aplanar PDF", href: "/es/aplanar-pdf", desc: "Bloquea formularios y capas" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño del archivo" },
                { name: "Redacción PDF", href: "/es/redaccion-pdf", desc: "Oculta información sensible" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina varios PDFs en uno" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Separa páginas de un PDF" },
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
                {
                  q: "¿Qué tipos de marcas de agua puede eliminar PDF.it?",
                  a: "PDF.it puede eliminar marcas de agua de texto (como CONFIDENCIAL, BORRADOR, MUESTRA) y marcas de agua de imagen (logos, sellos) que fueron agregadas como capas superpuestas al PDF.",
                },
                {
                  q: "¿Eliminar la marca de agua afecta la calidad del PDF?",
                  a: "No. El proceso de eliminación quita solo la capa superpuesta. El contenido original del PDF — texto, imágenes, formato y estructura — se mantiene intacto y con la misma calidad.",
                },
                {
                  q: "¿Puedo eliminar marcas de agua de todas las páginas a la vez?",
                  a: "Sí. PDF.it elimina la marca de agua de todas las páginas del PDF de forma automática en un solo proceso.",
                },
                {
                  q: "¿Es legal eliminar marcas de agua de un PDF?",
                  a: "Solo debes eliminar marcas de agua de documentos propios o con autorización del propietario. Por ejemplo, borradores aprobados, versiones de prueba compradas o documentos internos.",
                },
                {
                  q: "¿Puedo eliminar marcas de agua desde mi celular?",
                  a: "Sí. PDF.it funciona en navegadores móviles — sube tu PDF, elimina la marca de agua y descarga el archivo limpio desde cualquier dispositivo.",
                },
                {
                  q: "¿Es seguro subir mi PDF para eliminar la marca de agua?",
                  a: "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos.",
                },
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
