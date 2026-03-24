import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ImageToPdfInterface } from "@/components/image-to-pdf-interface"
import { Image, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Combinar Imágenes en PDF — Convierte Múltiples Imágenes a Un PDF | PDF.it",
  description:
    "Combina múltiples imágenes en un solo PDF con PDF.it. Sube JPG, PNG u otras imágenes y crea un documento PDF — rápido, gratis y desde tu navegador.",
  alternates: {
    languages: {
      en: "/combine-images-into-pdf",
      es: "/es/combinar-imagenes-en-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué formatos de imagen puedo combinar en un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it soporta imágenes JPG, JPEG, PNG y WebP. Sube cualquier combinación de estos formatos y todas se combinarán en un solo documento PDF." }
    },
    {
      "@type": "Question",
      "name": "¿Combinar imágenes en un PDF reduce la calidad de imagen?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Tus imágenes se incrustan en el PDF a su resolución original. La calidad de cada imagen permanece igual que el archivo original que subiste." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo elegir el orden de las páginas de las imágenes en el PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Las imágenes se agregan al PDF en el orden que las subes. Ordena tus archivos en la secuencia deseada antes de subir para controlar el orden de páginas." }
    },
    {
      "@type": "Question",
      "name": "¿Cuántas imágenes puedo combinar en un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios gratuitos pueden combinar imágenes de una sola carga. Los usuarios Pro obtienen procesamiento por lotes para combinar grandes conjuntos de imágenes en un PDF sin límite práctico de cantidad." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo combinar imágenes en un PDF desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en navegadores móviles — sube fotos de tu galería en iPhone o Android y descarga el PDF combinado al instante." }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis combinar imágenes en un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it te permite combinar imágenes en un PDF gratis sin registro. Los usuarios Pro obtienen funciones adicionales como procesamiento por lotes y límites de tamaño más grandes." }
    }
  ]
}

export default function CombinarImagenesEnPDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
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
                <Image className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Combinar Imágenes en PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Sube múltiples fotos o imágenes y combínalas en un solo documento PDF. Perfecto para crear álbumes de fotos, colecciones de recibos o páginas escaneadas organizadas.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>JPG, PNG, WebP Soportados</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Interface */}
        <ImageToPdfInterface
          acceptedTypes={["image/jpeg", "image/png", "image/webp"]}
          acceptedExtensions=".jpg,.jpeg,.png,.webp"
          formatLabel="Imágenes"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              ¿Necesitas convertir una carpeta de fotos en un solo documento? PDF.it combina múltiples imágenes — JPG, PNG o WebP — en un PDF organizado. Cada imagen se convierte en su propia página, facilitando compartir, imprimir o archivar colecciones de fotos, recibos o documentos escaneados.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Soporta formatos de imagen JPG, JPEG, PNG y WebP</li>
              <li>✓ Cada imagen se convierte en una página completa del PDF</li>
              <li>✓ Calidad de imagen original preservada</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — combina imágenes en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Crea Portafolios Fotográficos en PDF</h2>
              <p className="text-slate-600">
                ¿Enviando un lote de fotos? En vez de adjuntar docenas de archivos de imagen, combínalos en un solo PDF. Los destinatarios reciben un documento único y fácil de ver que pueden recorrer, imprimir o guardar.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Combina Documentos de Identidad y Recibos Digitales</h2>
              <p className="text-slate-600">
                Informes de gastos, declaraciones de impuestos y solicitudes de reembolso frecuentemente requieren recibos en formato PDF. Fotografía o escanea tus recibos, sube las imágenes a PDF.it y descarga un solo PDF con todos los recibos organizados en orden.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Organiza Fotos en Álbumes PDF</h2>
              <p className="text-slate-600">
                Documentos escaneados, fotos de pizarra y notas manuscritas frecuentemente quedan como archivos de imagen individuales. Combínalos en un PDF limpio para archivar, enviar por email o subir a sistemas de gestión de documentos.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Combinar Imágenes en un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tus imágenes (JPG, PNG o WebP) a PDF.it.",
                "Ordena las imágenes en el orden que quieras que aparezcan en el PDF.",
                "Haz clic en Convertir y descarga tu documento PDF combinado.",
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "JPG a PDF", href: "/es/jpg-a-pdf", desc: "Convierte JPG a PDF" },
                { name: "PNG a PDF", href: "/es/png-a-pdf", desc: "Convierte PNG a PDF" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina PDFs en uno" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce tamaño de PDF" },
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
                { q: "¿Qué formatos de imagen puedo combinar en un PDF?", a: "PDF.it soporta imágenes JPG, JPEG, PNG y WebP. Sube cualquier combinación de estos formatos y todas se combinarán en un solo documento PDF." },
                { q: "¿Combinar imágenes en un PDF reduce la calidad de imagen?", a: "No. Tus imágenes se incrustan en el PDF a su resolución original. La calidad de cada imagen permanece igual que el archivo original que subiste." },
                { q: "¿Puedo elegir el orden de las páginas de las imágenes en el PDF?", a: "Sí. Las imágenes se agregan al PDF en el orden que las subes. Ordena tus archivos en la secuencia deseada antes de subir para controlar el orden de páginas." },
                { q: "¿Cuántas imágenes puedo combinar en un PDF?", a: "Los usuarios gratuitos pueden combinar imágenes de una sola carga. Los usuarios Pro obtienen procesamiento por lotes para combinar grandes conjuntos de imágenes en un PDF sin límite práctico de cantidad." },
                { q: "¿Puedo combinar imágenes en un PDF desde mi celular?", a: "Sí. PDF.it funciona en navegadores móviles — sube fotos de tu galería en iPhone o Android y descarga el PDF combinado al instante." },
                { q: "¿Es gratis combinar imágenes en un PDF?", a: "Sí. PDF.it te permite combinar imágenes en un PDF gratis sin registro. Los usuarios Pro obtienen funciones adicionales como procesamiento por lotes y límites de tamaño más grandes." },
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
