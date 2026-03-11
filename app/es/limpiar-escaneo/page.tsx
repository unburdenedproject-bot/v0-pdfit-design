import Script from "next/script"
import Link from "next/link"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { PhoneScanCleanupInterface } from "@/components/phone-scan-cleanup-interface"
import { Camera, Zap, Shield, ScanLine, FileText, Merge, RotateCw, Scissors, Lock } from "lucide-react"

export const metadata = {
  title: "Limpiar Escaneo de Celular — Mejorar Fotos de Documentos | OmnisPDF",
  description:
    "Sube una foto de un documento tomada con tu celular y obtén un PDF limpio y profesional. Endereza, elimina sombras y mejora el contraste. Herramienta online gratis.",
  alternates: {
    languages: {
      en: "/phone-scan-cleanup",
      es: "/es/limpiar-escaneo",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es Limpiar Escaneo de Celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Limpiar Escaneo de Celular toma fotos de documentos capturadas con la cámara de tu celular y las transforma en PDFs limpios y profesionales. Elimina sombras, corrige iluminación desigual, endereza la imagen y mejora el texto para un resultado de calidad escáner." }
    },
    {
      "@type": "Question",
      "name": "¿Qué formatos de imagen se aceptan?",
      "acceptedAnswer": { "@type": "Answer", "text": "Se aceptan imágenes JPG, PNG y WEBP. Estos son los formatos estándar que usan las cámaras de celulares tanto en iPhone como en dispositivos Android." }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es la diferencia entre Blanco y Negro y Limpieza a Color?",
      "acceptedAnswer": { "@type": "Answer", "text": "El modo Blanco y Negro convierte la imagen a texto negro nítido sobre fondo blanco puro, como un escáner profesional. Es ideal para documentos de texto, contratos y formularios. Limpieza a Color mantiene los colores originales mientras elimina sombras y mejora el contraste, ideal para recibos, formularios a color y documentos con logos." }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis Limpiar Escaneo de Celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Puedes limpiar algunos escaneos gratis. Para uso ilimitado, actualiza al plan Pro a $7.99/mes que incluye todas las herramientas PDF, procesamiento por lotes y soporte para archivos más grandes." }
    },
    {
      "@type": "Question",
      "name": "¿Funciona con cualquier cámara de celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Funciona con fotos de cualquier cámara de celular, incluyendo iPhone, Samsung, Google Pixel y cualquier dispositivo Android. Solo toma una foto de tu documento, súbela y la herramienta se encarga del resto." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo hacer que el texto sea buscable después de la limpieza?",
      "acceptedAnswer": { "@type": "Answer", "text": "Limpiar Escaneo de Celular crea un PDF limpio a partir de tu foto. Para hacer el texto buscable y copiable, pasa el resultado por nuestra herramienta Escáner OCR, que extrae texto de documentos escaneados." }
    }
  ]
}

export default function LimpiarEscaneoPage() {
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
                <Camera className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Limpiar Escaneo de Celular</h1>
              <p className="text-xl text-slate-300 mb-4">
                Convierte fotos de documentos tomadas con tu celular en PDFs limpios y profesionales. Elimina sombras, corrige la iluminación, mejora el texto y obtén resultados de calidad escáner desde cualquier cámara de celular.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                Sin escáner. Sin app que instalar. Solo sube y descarga.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><ScanLine className="h-4 w-4 text-orange-500" /><span>Elimina Sombras</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Contraste Automático</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>PDF Instantáneo</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Interface */}
        <PhoneScanCleanupInterface />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Cómo Funciona</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Toma una Foto", desc: "Usa la cámara de tu celular para fotografiar cualquier documento — contratos, recibos, notas, formularios. No necesitas ninguna app especial." },
                { step: "2", title: "Sube y Elige Modo", desc: "Sube la foto y selecciona Blanco y Negro para documentos de texto o Limpieza a Color para recibos y formularios con color." },
                { step: "3", title: "Descarga el PDF Limpio", desc: "Obtén un PDF profesional, sin sombras, con texto nítido e iluminación uniforme. Listo para compartir, imprimir o archivar." },
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

        {/* Why Use This Tool */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4 text-center">¿Por Qué Limpiar Escaneos del Celular?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-600 text-center">
                Las fotos de documentos tomadas con el celular tienen sombras, iluminación desigual, ángulos torcidos y texto borroso. Enviarlas directamente se ve poco profesional y puede ser difícil de leer.
              </p>
              <p className="text-slate-600 text-center">
                Limpiar Escaneo de Celular transforma fotos desordenadas en PDFs limpios y de alto contraste que parecen salidos de un escáner profesional. Perfecto para enviar documentos, archivar papeles o compartir con colegas.
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
                <h3 className="text-xl font-black text-slate-900 mb-3">Contratos y Documentos Legales</h3>
                <p className="text-slate-600">
                  ¿Necesitas enviar un contrato firmado pero solo tienes tu celular? Toma una foto, límpiala y envía un PDF profesional en vez de una foto oscura y con sombras.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Recibos y Reportes de Gastos</h3>
                <p className="text-slate-600">
                  Captura recibos con tu celular para reportes de gastos. El modo Limpieza a Color preserva logos y colores mientras elimina las sombras y el brillo de tu foto.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Notas y Pizarrones</h3>
                <p className="text-slate-600">
                  Fotografía notas escritas a mano o sesiones de pizarrón y conviértelas en PDFs limpios y legibles. El modo Blanco y Negro hace que la escritura a mano resalte claramente.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Copias de Identificación y Pasaportes</h3>
                <p className="text-slate-600">
                  Crea copias limpias de identificaciones, pasaportes o licencias de conducir para trámites y registros. La limpieza asegura que todo el texto sea legible.
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
                { q: "¿Qué es Limpiar Escaneo de Celular?", a: "Toma fotos de documentos de la cámara de tu celular y las transforma en PDFs limpios y profesionales. Elimina sombras, corrige la iluminación y mejora el texto para resultados de calidad escáner." },
                { q: "¿Qué formatos de imagen se aceptan?", a: "JPG, PNG y WEBP. Estos son los formatos estándar que usan las cámaras de celulares tanto en iPhone como en Android." },
                { q: "¿Cuál es la diferencia entre Blanco y Negro y Limpieza a Color?", a: "Blanco y Negro convierte a texto negro nítido sobre fondo blanco, como un escáner. Limpieza a Color mantiene los colores mientras elimina sombras y mejora el contraste." },
                { q: "¿Es gratis Limpiar Escaneo de Celular?", a: "Puedes limpiar algunos escaneos gratis. Para uso ilimitado, actualiza al plan Pro a $7.99/mes." },
                { q: "¿Funciona con cualquier cámara de celular?", a: "Sí. Funciona con fotos de cualquier celular — iPhone, Samsung, Google Pixel o cualquier dispositivo Android." },
                { q: "¿Puedo hacer que el texto sea buscable?", a: "Esta herramienta crea un PDF limpio a partir de tu foto. Para hacer el texto buscable, pasa el resultado por nuestra herramienta Escáner OCR." },
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
            <h2 className="text-2xl font-black mb-4">Olvídate del Escáner</h2>
            <p className="text-slate-300 text-lg mb-8">
              La cámara de tu celular es todo lo que necesitas. Sube una foto y obtén un PDF profesional en segundos.
            </p>
            <Link
              href="/es/limpiar-escaneo"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Limpiar un Escaneo Ahora
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Más Herramientas PDF</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Escáner OCR", desc: "Haz PDFs escaneados buscables.", href: "/ocr-scanner", icon: ScanLine },
                { name: "Comprimir PDF", desc: "Reduce el tamaño sin perder calidad.", href: "/es/comprimir-pdf", icon: FileText },
                { name: "Unir PDF", desc: "Combina varios PDFs en uno.", href: "/es/unir-pdf", icon: Merge },
                { name: "Rotar PDF", desc: "Corrige páginas de lado o al revés.", href: "/es/rotar-pdf", icon: RotateCw },
                { name: "Dividir PDF", desc: "Divide un PDF en archivos separados.", href: "/es/dividir-pdf", icon: Scissors },
                { name: "Proteger PDF", desc: "Agrega protección con contraseña.", href: "/es/proteger-pdf", icon: Lock },
                { name: "Aplanar PDF", desc: "Aplana campos y anotaciones.", href: "/es/aplanar-pdf", icon: FileText },
                { name: "PDF a JPG", desc: "Convierte páginas PDF a imágenes.", href: "/es/pdf-a-jpg", icon: FileText },
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
