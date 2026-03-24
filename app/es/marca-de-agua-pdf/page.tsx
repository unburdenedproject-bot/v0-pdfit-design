import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { WatermarkPdfInterface } from "@/components/watermark-pdf-interface"
import { TrustBadges } from "@/components/trust-badges"
import { Droplets, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Agregar Marca de Agua a PDF Online | PDF.it",
  description:
    "Agrega una marca de agua a un PDF con PDF.it. Aplica marcas de agua de texto o imagen como CONFIDENCIAL, ajusta la opacidad y descarga al instante.",
  alternates: {
    canonical: "https://pdf.it.com/es/marca-de-agua-pdf",
    languages: {
      "en": "https://pdf.it.com/watermark-pdf",
      "es": "https://pdf.it.com/es/marca-de-agua-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Puedo agregar una marca de agua de texto como CONFIDENCIAL o BORRADOR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it puede aplicar una marca de agua de texto en todas las páginas de tu PDF para indicar claramente el estado del documento." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo agregar un logo como marca de agua a un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Sube una imagen y colócala como marca de agua en las páginas de tu PDF." }
    },
    {
      "@type": "Question",
      "name": "¿La marca de agua aparece en todas las páginas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. La marca de agua se aplica a todas las páginas del PDF por defecto." }
    },
    {
      "@type": "Question",
      "name": "¿La marca de agua afecta el contenido de mi PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Agregar una marca de agua solo superpone el texto o imagen seleccionado en tus páginas. Todo el contenido existente permanece intacto." }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro subir mi PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos." }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el tamaño máximo de archivo al que puedo agregar marca de agua?",
      "acceptedAnswer": { "@type": "Answer", "text": "Las cuentas Pro y Business pueden subir archivos de hasta 200MB. Esta herramienta está disponible para usuarios Pro y Business." }
    }
  ]
}

export default function MarcaDeAguaPDFPage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Droplets className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Agregar Marca de Agua a un PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Agrega una marca de agua de texto o imagen con PDF.it — marca tus PDFs como CONFIDENCIAL, BORRADOR, o agrega tu logo para branding y protección. Disponible para usuarios Pro y Business.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Marcas de Agua de Texto e Imagen</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Después de la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Descarga Instantánea</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Watermark Interface */}
        <WatermarkPdfInterface />
        <TrustBadges />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa la herramienta Marca de Agua PDF de PDF.it para agregar una marca de agua a un PDF en segundos. Aplica una marca de agua de texto (CONFIDENCIAL, BORRADOR, MUESTRA) o una marca de agua de imagen, personaliza la ubicación y transparencia, y descarga un PDF con marca de agua listo para compartir. Esta herramienta está disponible para usuarios Pro y Business.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Agrega marcas de agua de texto o imagen a PDFs</li>
              <li>✓ Marca documentos como Confidencial, Borrador o Uso Interno</li>
              <li>✓ Agrega marcas de agua con logo para branding</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — agrega marcas de agua desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Agrega Marcas de Agua de Texto (CONFIDENCIAL, BORRADOR, MUESTRA)</h2>
              <p className="text-slate-600">
                Inserta una marca de agua de texto clara en todas las páginas de tu PDF para comunicar el estado del documento y reducir el intercambio accidental de versiones sensibles.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Agrega una Marca de Agua con Imagen o Logo</h2>
              <p className="text-slate-600">
                Sube un logo o imagen de sello y colócalo en tu PDF para darle branding a propuestas, facturas y documentos de marketing.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Personaliza Ubicación, Opacidad y Rotación</h2>
              <p className="text-slate-600">
                Controla cómo se ve tu marca de agua — mantenla visible sin bloquear el contenido ajustando la transparencia, tamaño, ángulo y posición.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Agregar una Marca de Agua a un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube tu PDF a PDF.it.",
                "Elige marca de agua de Texto o Imagen y personaliza los ajustes: opacidad, tamaño, posición y rotación.",
                "Haz clic en Agregar Marca de Agua y descarga tu PDF con marca de agua.",
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
                { name: "Proteger PDF", href: "/es/proteger-pdf", desc: "Agregar protección con contraseña" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reducir tamaño después de la marca de agua" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combinar documentos con marca de agua" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Agregar marca de agua solo a secciones" },
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
                  q: "¿Puedo agregar una marca de agua de texto como CONFIDENCIAL o BORRADOR?",
                  a: "Sí. PDF.it puede aplicar una marca de agua de texto en todas las páginas de tu PDF para indicar claramente el estado del documento.",
                },
                {
                  q: "¿Puedo agregar un logo como marca de agua a un PDF?",
                  a: "Sí. Sube una imagen y colócala como marca de agua en las páginas de tu PDF.",
                },
                {
                  q: "¿La marca de agua aparece en todas las páginas?",
                  a: "Sí. La marca de agua se aplica a todas las páginas del PDF por defecto.",
                },
                {
                  q: "¿La marca de agua afecta el contenido de mi PDF?",
                  a: "No. Agregar una marca de agua solo superpone el texto o imagen seleccionado en tus páginas. Todo el contenido existente permanece intacto.",
                },
                {
                  q: "¿Es seguro subir mi PDF?",
                  a: "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos.",
                },
                {
                  q: "¿Cuál es el tamaño máximo de archivo al que puedo agregar marca de agua?",
                  a: "Las cuentas Pro y Business pueden subir archivos de hasta 200MB. Esta herramienta está disponible para usuarios Pro y Business.",
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
