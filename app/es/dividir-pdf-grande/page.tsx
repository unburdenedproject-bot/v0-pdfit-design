import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { SplitPdfInterface } from "@/components/split-pdf-interface"
import { Scissors, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Dividir PDF Grande — Separa PDFs Pesados en Partes Manejables | PDF.it",
  description:
    "Divide un PDF grande en archivos más pequeños y manejables con PDF.it. Separa manuales, reportes y libros digitales en partes — rápido, gratis y en tu navegador.",
  alternates: {
    languages: {
      en: "/split-large-pdf",
      es: "/es/dividir-pdf-grande",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuál es el tamaño máximo de PDF que puedo dividir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Las cuentas gratuitas pueden dividir PDFs de hasta 25MB. Las cuentas Pro pueden dividir archivos de hasta 200MB — ideal para escaneos pesados, libros de texto y reportes extensos." }
    },
    {
      "@type": "Question",
      "name": "¿Dividir un PDF reduce la calidad?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. La división extrae páginas del PDF original sin recodificar. El texto, las imágenes y el formato se mantienen exactamente como en el archivo original." }
    },
    {
      "@type": "Question",
      "name": "¿Qué tan rápido es dividir un PDF grande?",
      "acceptedAnswer": { "@type": "Answer", "text": "La mayoría de los PDFs se dividen en segundos. Archivos muy grandes (100+ páginas) pueden tomar un poco más, pero el proceso es significativamente más rápido que con software de escritorio." }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis dividir PDFs grandes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Puedes dividir PDFs de hasta 25MB gratis. Para archivos más grandes (hasta 200MB) y procesamiento por lotes, actualiza a Pro." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo dividir un PDF grande desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en navegadores móviles — sube, divide y descarga desde iPhone o Android. No necesitas instalar ninguna app." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo divido un PDF grande para enviarlo por email?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF grande, divídelo en partes más pequeñas que cumplan con el límite de tu proveedor de email (generalmente 25MB) y adjunta cada parte. También puedes comprimir cada parte después de dividir." }
    }
  ]
}

export default function DividirPDFGrandePage() {
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
                <Scissors className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Dividir PDF Grande</h1>
              <p className="text-xl text-slate-300 mb-8">
                Separa PDFs pesados en archivos más pequeños y manejables. Perfecto para enviar documentos grandes por email, cumplir límites de carga o dividir libros en capítulos.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>División por Rangos</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Interface */}
        <SplitPdfInterface />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Los PDFs grandes — reportes de 100+ páginas, escaneos pesados, libros de texto y manuales — son difíciles de enviar por email, subir y compartir. PDF.it los divide en archivos más pequeños por rango de páginas o páginas individuales, para que cada parte cumpla con los límites de tamaño.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Divide PDFs de 100+ páginas en partes manejables</li>
              <li>✓ Elige rangos personalizados o divide en partes iguales</li>
              <li>✓ Sin pérdida de calidad — las páginas se extraen, no se recodifican</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — divide PDFs directamente en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Manuales Técnicos</h2>
              <p className="text-slate-600">
                Los manuales técnicos suelen tener cientos de páginas. Divídelos en secciones o capítulos para compartir solo la parte relevante con tu equipo o clientes.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Reportes Anuales</h2>
              <p className="text-slate-600">
                Separa reportes anuales extensos en secciones — resumen ejecutivo, estados financieros, análisis de mercado — para distribuir a diferentes departamentos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Libros Digitales</h2>
              <p className="text-slate-600">
                Divide libros digitales en capítulos individuales para lectura más fácil, impresión selectiva o para compartir secciones específicas.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Presentaciones Largas</h2>
              <p className="text-slate-600">
                Las presentaciones extensas en PDF pueden ser difíciles de manejar. Sepáralas en bloques temáticos para enviar o presentar por partes.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Dividir un PDF Grande</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF grande a PDF.it.",
                "Elige cómo dividir — por rango de páginas, páginas individuales o partes iguales.",
                "Haz clic en Dividir PDF y descarga tus archivos más pequeños.",
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
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Herramienta estándar de división" },
                { name: "Dividir por Páginas", href: "/es/dividir-pdf-por-paginas", desc: "Elige qué páginas separar" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño del archivo" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina PDFs en uno" },
                { name: "Extraer Páginas", href: "/es/extraer-paginas-de-pdf", desc: "Saca páginas específicas" },
                { name: "Eliminar Páginas", href: "/es/eliminar-paginas-de-pdf", desc: "Quita páginas no deseadas" },
                { name: "Rotar PDF", href: "/es/rotar-pdf", desc: "Corrige la orientación" },
                { name: "Aplanar PDF", href: "/es/aplanar-pdf", desc: "Aplana formularios y capas" },
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
                { q: "¿Cuál es el tamaño máximo de PDF que puedo dividir?", a: "Las cuentas gratuitas pueden dividir PDFs de hasta 25MB. Las cuentas Pro pueden dividir archivos de hasta 200MB — ideal para escaneos pesados, libros de texto y reportes extensos." },
                { q: "¿Dividir un PDF reduce la calidad?", a: "No. La división extrae páginas del PDF original sin recodificar. El texto, las imágenes y el formato se mantienen exactamente como en el archivo original." },
                { q: "¿Qué tan rápido es dividir un PDF grande?", a: "La mayoría de los PDFs se dividen en segundos. Archivos muy grandes (100+ páginas) pueden tomar un poco más, pero el proceso es significativamente más rápido que con software de escritorio." },
                { q: "¿Es gratis dividir PDFs grandes?", a: "Sí. Puedes dividir PDFs de hasta 25MB gratis. Para archivos más grandes (hasta 200MB) y procesamiento por lotes, actualiza a Pro." },
                { q: "¿Puedo dividir un PDF grande desde mi celular?", a: "Sí. PDF.it funciona en navegadores móviles — sube, divide y descarga desde iPhone o Android. No necesitas instalar ninguna app." },
                { q: "¿Cómo divido un PDF grande para enviarlo por email?", a: "Sube tu PDF grande, divídelo en partes más pequeñas que cumplan con el límite de tu proveedor de email (generalmente 25MB) y adjunta cada parte. También puedes comprimir cada parte después de dividir." },
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
