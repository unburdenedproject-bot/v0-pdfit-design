import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { KeyRound, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Eliminar Contraseña de PDF — Quita la Contraseña de tu PDF | PDF.it",
  description:
    "Elimina la contraseña de un PDF con PDF.it. Quita la protección con contraseña de archivos PDF propios o autorizados y descarga un PDF sin contraseña en segundos.",
  alternates: {
    languages: {
      en: "/unlock-pdf",
      es: "/es/eliminar-contrasena-de-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Puedo eliminar la contraseña de un PDF sin conocerla?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it requiere que ingreses la contraseña correcta del PDF. No puede recuperar, adivinar ni omitir contraseñas desconocidas." }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa con el contenido del PDF al eliminar la contraseña?",
      "acceptedAnswer": { "@type": "Answer", "text": "El contenido se mantiene completamente intacto. Eliminar la contraseña solo quita la restricción de acceso — el texto, imágenes, formato y estructura del PDF permanecen exactamente iguales." }
    },
    {
      "@type": "Question",
      "name": "¿Es lo mismo eliminar contraseña que desbloquear un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Eliminar la contraseña, desbloquear y desencriptar un PDF son formas diferentes de describir el mismo proceso: quitar la protección con contraseña para obtener un PDF de libre acceso." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo agregar una nueva contraseña después de eliminarla?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Usa la herramienta Proteger PDF de PDF.it para agregar una nueva contraseña en cualquier momento." }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro subir mi PDF protegido a PDF.it?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos." }
    },
    {
      "@type": "Question",
      "name": "¿Funciona en celulares y tablets?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en cualquier navegador moderno — sube el PDF, ingresa la contraseña y descarga el archivo sin contraseña desde tu celular, tablet o computadora." }
    }
  ]
}

export default function EliminarContrasenaDePDFPage() {
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
                <KeyRound className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Eliminar Contraseña de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Quita la contraseña de tu PDF con PDF.it. Si conoces la contraseña, elimínala para obtener un PDF de libre acceso que puedes editar, imprimir y compartir sin restricciones.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Eliminación Instantánea</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Después de la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Unlock PDF"
          outputFormat="PDF"
          processingMessage="Eliminando contraseña de tu PDF..."
          successMessage="¡Tu PDF sin contraseña está listo!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa la herramienta Eliminar Contraseña de PDF de PDF.it para quitar la protección con contraseña de tus archivos PDF. Perfecta para documentos propios que ya no necesitan protección, PDFs recibidos con contraseña conocida que quieres simplificar, y archivos que necesitas archivar sin restricciones de acceso.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Elimina la contraseña de PDFs cuando la conoces</li>
              <li>✓ Obtén un PDF sin restricciones de acceso</li>
              <li>✓ Ideal para simplificar el acceso a documentos propios</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — elimina contraseñas desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Elimina la Contraseña de Documentos Propios</h2>
              <p className="text-slate-600">
                Si protegiste un PDF con contraseña pero ahora necesitas acceder a él sin restricciones, simplemente ingresa la contraseña original y PDF.it genera una copia limpia sin protección.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Simplifica el Acceso a PDFs Recibidos</h2>
              <p className="text-slate-600">
                Cuando recibes PDFs protegidos con contraseña — facturas, contratos, documentos de trabajo — y ya tienes la contraseña, elimínala para acceder al contenido de manera más rápida y cómoda.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Prepara PDFs para Archivado</h2>
              <p className="text-slate-600">
                Los PDFs archivados a largo plazo funcionan mejor sin contraseña para evitar problemas de acceso en el futuro. Elimina la contraseña antes de almacenar documentos en tu sistema de archivado.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Eliminar la Contraseña de un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube tu PDF protegido con contraseña a PDF.it.",
                "Ingresa la contraseña correcta del PDF.",
                "Haz clic en Eliminar Contraseña y descarga tu PDF sin restricciones.",
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
                { name: "Desbloquear PDF", href: "/es/desbloquear-pdf", desc: "Quita la protección de un PDF" },
                { name: "Desencriptar PDF", href: "/es/desencriptar-pdf", desc: "Quita la encriptación del PDF" },
                { name: "Proteger PDF", href: "/es/proteger-pdf", desc: "Agrega contraseña a tu PDF" },
                { name: "Encriptar PDF", href: "/es/encriptar-pdf", desc: "Cifra tu PDF con contraseña" },
                { name: "Aplanar PDF", href: "/es/aplanar-pdf", desc: "Bloquea formularios y capas" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño del archivo" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina varios PDFs en uno" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Separa páginas de un PDF" },
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
                  q: "¿Puedo eliminar la contraseña de un PDF sin conocerla?",
                  a: "No. PDF.it requiere que ingreses la contraseña correcta del PDF. No puede recuperar, adivinar ni omitir contraseñas desconocidas.",
                },
                {
                  q: "¿Qué pasa con el contenido del PDF al eliminar la contraseña?",
                  a: "El contenido se mantiene completamente intacto. Eliminar la contraseña solo quita la restricción de acceso — el texto, imágenes, formato y estructura del PDF permanecen exactamente iguales.",
                },
                {
                  q: "¿Es lo mismo eliminar contraseña que desbloquear un PDF?",
                  a: "Sí. Eliminar la contraseña, desbloquear y desencriptar un PDF son formas diferentes de describir el mismo proceso: quitar la protección con contraseña para obtener un PDF de libre acceso.",
                },
                {
                  q: "¿Puedo agregar una nueva contraseña después de eliminarla?",
                  a: "Sí. Usa la herramienta Proteger PDF de PDF.it para agregar una nueva contraseña en cualquier momento.",
                },
                {
                  q: "¿Es seguro subir mi PDF protegido a PDF.it?",
                  a: "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos.",
                },
                {
                  q: "¿Funciona en celulares y tablets?",
                  a: "Sí. PDF.it funciona en cualquier navegador moderno — sube el PDF, ingresa la contraseña y descarga el archivo sin contraseña desde tu celular, tablet o computadora.",
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
