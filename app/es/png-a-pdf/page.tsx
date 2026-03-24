import Script from "next/script"
import Link from "next/link"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ImageToPdfInterface } from "@/components/image-to-pdf-interface"
import { Image as ImageIcon, Zap, Shield, Upload, FileText, Merge, RotateCw, Lock, ScanLine, Camera } from "lucide-react"

export const metadata = {
  title: "PNG a PDF — Convierte Imágenes PNG a PDF en Línea | PDF.it",
  description:
    "Convierte imágenes PNG a documentos PDF en línea gratis. Sube una o varias imágenes y obtén un PDF profesional al instante. Sin software que instalar.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo convierto un PNG a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu imagen PNG a PDF.it, haz clic en Convertir a PDF y descarga el resultado. Puedes subir varias imágenes PNG a la vez y cada una se convertirá en su propio archivo PDF." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo convertir varias imágenes PNG a PDF a la vez?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Selecciona varios archivos PNG al subirlos y cada imagen se convertirá en un PDF separado. Puedes descargarlos individualmente o como un archivo ZIP." }
    },
    {
      "@type": "Question",
      "name": "¿El convertidor de PNG a PDF es gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Puedes convertir varias imágenes PNG a PDF gratis cada día. Para conversiones ilimitadas y archivos más grandes, actualiza al plan Pro por $7.99/mes." }
    },
    {
      "@type": "Question",
      "name": "¿Convertir PNG a PDF reduce la calidad de la imagen?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it preserva la resolución, transparencia y calidad original de tu imagen PNG al convertirla a PDF." }
    },
    {
      "@type": "Question",
      "name": "¿Se preserva la transparencia del PNG?",
      "acceptedAnswer": { "@type": "Answer", "text": "Las imágenes PNG con fondo transparente se convierten a PDF con un fondo blanco, ya que el formato PDF no soporta transparencia de la misma manera que PNG." }
    },
  ]
}

export default function PngToPdfPageEs() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema-es"
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
                <ImageIcon className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir PNG a PDF</h1>
              <p className="text-xl text-slate-300 mb-4">
                Convierte imágenes PNG a documentos PDF. Sube una o varias imágenes y obtén un PDF profesional al instante.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                Sin software que instalar. Sin registro necesario. Solo sube y convierte.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Upload className="h-4 w-4 text-orange-500" /><span>Múltiples Imágenes</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Conversión Instantánea</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Calidad Completa</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Interface */}
        <ImageToPdfInterface
          acceptedTypes={["image/png"]}
          acceptedExtensions=".png"
          formatLabel="PNG"
        />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Cómo Funciona</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Sube tus Imágenes PNG", desc: "Arrastra y suelta tus archivos PNG, o haz clic para seleccionar. Puedes elegir una o varias imágenes a la vez." },
                { step: "2", title: "Convierte a PDF", desc: "Haz clic en el botón Convertir y cada imagen se transforma en un documento PDF de alta calidad en segundos." },
                { step: "3", title: "Descarga tus PDFs", desc: "Descarga cada PDF individualmente, o descárgalos todos como un archivo ZIP. La calidad original de tu imagen se preserva." },
              ].map((item) => (
                <div key={item.step} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-2">{item.title}</div>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Convert PNG to PDF */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4 text-center">¿Por Qué Convertir PNG a PDF?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-600 text-center">
                El formato PNG es excelente para imágenes con alta calidad y transparencia, pero no es ideal para compartir documentos. Convertir PNG a PDF te permite compartir imágenes en un formato profesional y universalmente compatible.
              </p>
              <p className="text-slate-600 text-center">
                Los PDFs son perfectos para enviar capturas de pantalla, diseños, infografías, o cualquier imagen que necesites presentar como un documento formal.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comunes</h2>
            <div className="space-y-10">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Capturas de Pantalla como PDF</h3>
                <p className="text-slate-600">
                  Convierte capturas de pantalla PNG en documentos PDF profesionales. Ideal para documentación técnica, reportes de errores, o evidencia visual.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Diseños e Infografías</h3>
                <p className="text-slate-600">
                  Transforma diseños gráficos, infografías y material visual PNG en PDFs listos para imprimir o compartir por correo electrónico.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Documentos Escaneados</h3>
                <p className="text-slate-600">
                  Muchos escáneres guardan archivos como PNG. Conviértelos a PDF para crear documentos digitales organizados y fáciles de archivar.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Presentaciones y Portafolios</h3>
                <p className="text-slate-600">
                  Convierte imágenes PNG de tu trabajo en PDFs individuales, luego combínalos con nuestra herramienta Unir PDF para crear un portafolio profesional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "¿Cómo convierto un PNG a PDF?", a: "Sube tu imagen PNG, haz clic en Convertir a PDF y descarga. Puedes subir varias imágenes y cada una se convertirá en su propio PDF." },
                { q: "¿Puedo convertir varias imágenes PNG a la vez?", a: "Sí. Selecciona varios archivos PNG y cada uno se convertirá en un PDF separado. Descárgalos individualmente o como un archivo ZIP." },
                { q: "¿Es gratis?", a: "Puedes convertir varias imágenes gratis cada día. Para conversiones ilimitadas y archivos más grandes, actualiza a Pro por $7.99/mes." },
                { q: "¿La conversión reduce la calidad?", a: "No. PDF.it preserva la resolución y calidad completa de tu imagen PNG en el PDF resultante." },
                { q: "¿Se mantiene la transparencia?", a: "Las imágenes PNG con fondo transparente se convierten a PDF con fondo blanco, ya que PDF no soporta transparencia de la misma manera que PNG." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#191B4D] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Convierte tus Imágenes PNG Ahora</h2>
            <p className="text-slate-300 text-lg mb-8">
              Rápido, gratis y seguro. Convierte cualquier imagen PNG en un PDF profesional en segundos.
            </p>
            <Link
              href="/es/png-a-pdf"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Convertir PNG a PDF
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Más Herramientas PDF</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "JPG a PDF", desc: "Convierte imágenes JPG a PDF.", href: "/es/jpg-a-pdf", icon: ImageIcon },
                { name: "PDF a PNG", desc: "Convierte páginas PDF a imágenes PNG.", href: "/es/pdf-a-png", icon: FileText },
                { name: "Unir PDF", desc: "Combina varios PDFs en uno solo.", href: "/es/unir-pdf", icon: Merge },
                { name: "Comprimir PDF", desc: "Reduce el tamaño del archivo PDF.", href: "/es/comprimir-pdf", icon: FileText },
                { name: "Limpiar Escaneo", desc: "Convierte fotos del teléfono en PDFs limpios.", href: "/es/limpiar-escaneo", icon: Camera },
                { name: "Escáner OCR", desc: "Haz PDFs escaneados buscables.", href: "/es/escaner-ocr", icon: ScanLine },
                { name: "Rotar PDF", desc: "Corrige páginas al revés o de lado.", href: "/es/rotar-pdf", icon: RotateCw },
                { name: "Proteger PDF", desc: "Agrega protección con contraseña.", href: "/es/proteger-pdf", icon: Lock },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col items-center text-center rounded-xl border border-gray-200 bg-white p-4 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    <tool.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-1">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{tool.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
