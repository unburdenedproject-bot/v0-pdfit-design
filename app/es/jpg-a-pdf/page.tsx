import Script from "next/script"
import Link from "next/link"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ImageToPdfInterface } from "@/components/image-to-pdf-interface"
import { Image as ImageIcon, Zap, Shield, Upload, FileText, Merge, RotateCw, Lock, ScanLine, Camera } from "lucide-react"

export const metadata = {
  title: "JPG a PDF — Convierte Imágenes JPG a PDF en Línea | PDF.it",
  description:
    "Convierte imágenes JPG y JPEG a documentos PDF en línea gratis. Sube una o varias imágenes y obtén un PDF profesional al instante. Sin software que instalar.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo convierto un JPG a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu imagen JPG a PDF.it, haz clic en Convertir a PDF y descarga el resultado. Puedes subir varias imágenes JPG a la vez y cada una se convertirá en su propio archivo PDF." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo convertir varias imágenes JPG a PDF a la vez?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Selecciona varios archivos JPG al subirlos y cada imagen se convertirá en un PDF separado. Puedes descargarlos individualmente o usar el botón Descargar Todo como ZIP para obtenerlos en un solo archivo." }
    },
    {
      "@type": "Question",
      "name": "¿El convertidor de JPG a PDF es gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Puedes convertir varias imágenes JPG a PDF gratis cada día. Para conversiones ilimitadas, procesamiento por lotes y archivos más grandes, actualiza al plan Pro por $7.99/mes." }
    },
    {
      "@type": "Question",
      "name": "¿Convertir JPG a PDF reduce la calidad de la imagen?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it preserva la resolución y calidad original de tu imagen JPG al convertirla a PDF. El PDF resultante contiene la imagen en calidad completa." }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el tamaño máximo de archivo para la conversión de JPG a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios gratuitos pueden subir imágenes JPG de hasta 25MB cada una. Los suscriptores Pro y Business pueden subir imágenes de hasta 200MB cada una." }
    },
    {
      "@type": "Question",
      "name": "¿También puedo convertir archivos JPEG, o solo JPG?",
      "acceptedAnswer": { "@type": "Answer", "text": "JPG y JPEG son el mismo formato de imagen con diferentes extensiones de archivo. Esta herramienta acepta tanto archivos .jpg como .jpeg." }
    },
  ]
}

export default function JpgToPdfPageEs() {
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
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ImageIcon className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir JPG a PDF</h1>
              <p className="text-xl text-slate-300 mb-4">
                Convierte imágenes JPG y JPEG a documentos PDF. Sube una o varias imágenes y obtén un PDF profesional al instante.
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
          acceptedTypes={["image/jpeg"]}
          acceptedExtensions=".jpg,.jpeg"
          formatLabel="JPG"
        />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Cómo Funciona</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Sube tus Imágenes JPG", desc: "Arrastra y suelta tus archivos JPG o JPEG, o haz clic para seleccionar. Puedes elegir una o varias imágenes a la vez." },
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

        {/* Why Convert JPG to PDF */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4 text-center">¿Por Qué Convertir JPG a PDF?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-600 text-center">
                PDF es el formato de documento universal. Convertir tus imágenes JPG a PDF las hace más fáciles de compartir, imprimir y archivar. Los PDFs mantienen un formato consistente en todos los dispositivos y sistemas operativos.
              </p>
              <p className="text-slate-600 text-center">
                Ya sea que necesites enviar fotos como documentos, crear colecciones de imágenes para imprimir, o simplemente compartir imágenes en un formato profesional, la conversión de JPG a PDF es la solución.
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
                <h3 className="text-xl font-black text-slate-900 mb-3">Convertir Fotos a PDF</h3>
                <p className="text-slate-600">
                  Convierte fotos del teléfono o cámara en documentos PDF para compartir fácilmente por correo o apps de mensajería. Los PDFs se ven igual en todos los dispositivos.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Crear Álbumes de Fotos</h3>
                <p className="text-slate-600">
                  Convierte varias fotos JPG en PDFs individuales, luego usa nuestra herramienta Unir PDF para combinarlas en un solo documento. Perfecto para crear álbumes digitales o portafolios de imágenes.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Digitalizar Fotos Impresas</h3>
                <p className="text-slate-600">
                  Las fotos impresas escaneadas o fotografiadas guardadas como JPG se pueden convertir a PDF para archivo digital a largo plazo. PDF es un formato estable y ampliamente compatible que seguirá siendo legible por décadas.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Enviar Documentos con Imágenes</h3>
                <p className="text-slate-600">
                  Muchas aplicaciones, portales e instituciones requieren documentos en formato PDF. Convierte tus imágenes JPG de identificaciones, certificados, recibos o formularios en PDFs para enviarlos fácilmente.
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
                { q: "¿Cómo convierto un JPG a PDF?", a: "Sube tu imagen JPG, haz clic en Convertir a PDF y descarga. Puedes subir varias imágenes y cada una se convertirá en su propio PDF." },
                { q: "¿Puedo convertir varias imágenes JPG a la vez?", a: "Sí. Selecciona varios archivos JPG y cada uno se convertirá en un PDF separado. Descárgalos individualmente o como un archivo ZIP." },
                { q: "¿El convertidor de JPG a PDF es gratis?", a: "Puedes convertir varias imágenes gratis cada día. Para conversiones ilimitadas y archivos más grandes, actualiza a Pro por $7.99/mes." },
                { q: "¿La conversión reduce la calidad de la imagen?", a: "No. PDF.it preserva la resolución y calidad completa de tu imagen JPG en el PDF resultante." },
                { q: "¿Cuál es el tamaño máximo de archivo?", a: "Los usuarios gratuitos pueden subir hasta 25MB por imagen. Los suscriptores Pro y Business pueden subir hasta 200MB por imagen." },
                { q: "¿También puedo convertir archivos JPEG?", a: "Sí. JPG y JPEG son el mismo formato con diferentes extensiones. Esta herramienta acepta tanto archivos .jpg como .jpeg." },
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
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Convierte tus Imágenes JPG Ahora</h2>
            <p className="text-slate-300 text-lg mb-8">
              Rápido, gratis y seguro. Convierte cualquier imagen JPG en un PDF profesional en segundos.
            </p>
            <Link
              href="/es/jpg-a-pdf"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Convertir JPG a PDF
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Más Herramientas PDF</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "PNG a PDF", desc: "Convierte imágenes PNG a PDF.", href: "/es/png-a-pdf", icon: ImageIcon },
                { name: "PDF a JPG", desc: "Convierte páginas PDF a imágenes JPG.", href: "/es/pdf-a-jpg", icon: FileText },
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
