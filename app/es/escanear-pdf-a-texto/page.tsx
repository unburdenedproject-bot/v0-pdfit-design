import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Scan, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Escanear PDF a Texto — Convierte PDFs Escaneados a Texto Editable | PDF.it",
  description:
    "Convierte PDFs escaneados a texto editable con OCR de PDF.it. Transforma documentos escaneados en texto que puedes copiar y editar — rápido, desde tu navegador, sin registro.",
  alternates: {
    canonical: "https://pdf.it.com/es/escanear-pdf-a-texto",
    languages: {
      en: "https://pdf.it.com/scan-pdf-to-text",
      es: "https://pdf.it.com/es/escanear-pdf-a-texto",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo convierto un PDF escaneado a texto?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF escaneado a PDF.it, haz clic en Escanear y la tecnología OCR convertirá las imágenes a texto editable que puedes descargar como archivo TXT." }
    },
    {
      "@type": "Question",
      "name": "¿Qué es OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "OCR (Reconocimiento Óptico de Caracteres) es la tecnología que lee texto en imágenes y lo convierte a texto digital editable. Funciona con documentos escaneados, fotos de documentos y PDFs basados en imágenes." }
    },
    {
      "@type": "Question",
      "name": "¿Qué idiomas soporta el OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "El OCR de PDF.it soporta múltiples idiomas, incluyendo español, inglés, francés, alemán, portugués, italiano y más." }
    },
    {
      "@type": "Question",
      "name": "¿Qué tan preciso es el OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "La precisión depende de la calidad del escaneo. Documentos con buena resolución y texto claro tienen una precisión superior al 95%. Para mejorar los resultados, usa nuestra herramienta de Limpiar Escaneo primero." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo escanear documentos manuscritos?",
      "acceptedAnswer": { "@type": "Answer", "text": "El OCR funciona mejor con texto impreso. Los documentos manuscritos pueden tener resultados variables dependiendo de la legibilidad de la escritura." }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis escanear PDFs a texto?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Las cuentas gratuitas tienen 10 escaneos por día. Las cuentas Pro tienen escaneos ilimitados." }
    }
  ]
}

export default function EscanearPDFaTextoPage() {
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
                <Scan className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Escanear PDF a Texto</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convierte PDFs escaneados a texto editable con tecnología OCR. Transforma documentos en papel digital en texto que puedes copiar, buscar y editar.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>OCR de Alta Precisión</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="OCR Scanner"
          outputFormat="TXT"
          processingMessage="Escaneando tu PDF..."
          successMessage="¡El texto de tu PDF escaneado está listo!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              ¿Tienes un PDF escaneado que no puedes copiar ni editar? El escáner OCR de PDF.it lee el texto en las imágenes de tu documento escaneado y lo convierte a texto digital editable — perfecto para digitalizar documentos en papel, facturas escaneadas y archivos históricos.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convierte PDFs escaneados a texto editable</li>
              <li>✓ Tecnología OCR de alta precisión</li>
              <li>✓ Soporta múltiples idiomas incluyendo español</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — escanea PDFs en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Digitalización de Documentos</h2>
              <p className="text-slate-600">
                Convierte documentos en papel escaneados a texto digital. Haz que tus archivos físicos sean buscables, editables y fáciles de compartir sin necesidad de reescribir todo manualmente.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Archivos Históricos y Facturas</h2>
              <p className="text-slate-600">
                ¿Tienes facturas, recibos o documentos históricos escaneados? Conviértelos a texto para archivarlos digitalmente, buscar información específica o importar datos a tu sistema contable.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Formularios en Papel</h2>
              <p className="text-slate-600">
                Digitaliza formularios, solicitudes y documentos completados a mano o impresos. Extrae el texto para procesarlo digitalmente sin tener que transcribir manualmente cada campo.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Escanear un PDF a Texto</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF escaneado a PDF.it.",
                "Haz clic en Escanear — el OCR procesa cada página automáticamente.",
                "Descarga el archivo TXT con el texto reconocido.",
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
                { name: "Escáner OCR", href: "/es/escaner-ocr", desc: "OCR completo para PDFs" },
                { name: "Limpiar Escaneo", href: "/es/limpiar-escaneo", desc: "Mejora calidad de escaneos" },
                { name: "PDF a Texto", href: "/es/pdf-a-texto", desc: "Convierte PDF a TXT" },
                { name: "Extraer Texto de PDF", href: "/es/extraer-texto-de-pdf", desc: "Copia todo el texto" },
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
                { q: "¿Cómo convierto un PDF escaneado a texto?", a: "Sube tu PDF escaneado a PDF.it, haz clic en Escanear y la tecnología OCR convertirá las imágenes a texto editable que puedes descargar como archivo TXT." },
                { q: "¿Qué es OCR?", a: "OCR (Reconocimiento Óptico de Caracteres) es la tecnología que lee texto en imágenes y lo convierte a texto digital editable. Funciona con documentos escaneados, fotos de documentos y PDFs basados en imágenes." },
                { q: "¿Qué idiomas soporta el OCR?", a: "El OCR de PDF.it soporta múltiples idiomas, incluyendo español, inglés, francés, alemán, portugués, italiano y más." },
                { q: "¿Qué tan preciso es el OCR?", a: "La precisión depende de la calidad del escaneo. Documentos con buena resolución y texto claro tienen una precisión superior al 95%. Para mejorar los resultados, usa nuestra herramienta de Limpiar Escaneo primero." },
                { q: "¿Puedo escanear documentos manuscritos?", a: "El OCR funciona mejor con texto impreso. Los documentos manuscritos pueden tener resultados variables dependiendo de la legibilidad de la escritura." },
                { q: "¿Es gratis escanear PDFs a texto?", a: "Sí. Las cuentas gratuitas tienen 10 escaneos por día. Las cuentas Pro tienen escaneos ilimitados." },
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
