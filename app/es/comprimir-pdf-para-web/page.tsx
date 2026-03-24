import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF para Web — Optimiza PDFs para tu Sitio Web | PDF.it",
  description:
    "Optimiza PDFs para tu sitio web. Reduce el tamaño para cargas más rápidas y mejor experiencia de usuario.",
  alternates: {
    languages: {
      en: "/compress-pdf-for-website",
      es: "/es/comprimir-pdf-para-web",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo optimizo un PDF para mi sitio web?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a PDF.it y haz clic en Comprimir. La compresión recomendada equilibra calidad y tamaño de archivo, produciendo un PDF que carga rápidamente en páginas web mientras mantiene el texto y las imágenes con buena apariencia." }
    },
    {
      "@type": "Question",
      "name": "¿Los PDFs optimizados para web se verán bien al descargarlos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. La compresión recomendada reduce el tamaño del archivo preservando la calidad visual. El texto se mantiene nítido y las imágenes conservan buen detalle — los visitantes pueden descargar y leer el PDF sin problemas." }
    },
    {
      "@type": "Question",
      "name": "¿Por qué debería comprimir los PDFs antes de subirlos a mi sitio web?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los PDFs grandes ralentizan los tiempos de carga, perjudican el posicionamiento SEO y frustran a los visitantes en dispositivos móviles. Comprimir los PDFs asegura descargas más rápidas, menores costos de ancho de banda y una mejor experiencia de usuario." }
    },
    {
      "@type": "Question",
      "name": "¿El tamaño del PDF afecta el SEO del sitio web?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Google considera la velocidad de carga como un factor de posicionamiento. Si un PDF tarda demasiado en cargar, puede afectar negativamente tu posicionamiento en búsquedas. Los PDFs más pequeños cargan más rápido y contribuyen a mejores puntuaciones de Core Web Vitals." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo comprimir varios PDFs para mi sitio web a la vez?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios Pro pueden comprimir múltiples PDFs en lote. Sube todos tus archivos, comprímelos juntos y descarga todo como ZIP — perfecto para optimizar toda una biblioteca de recursos web." }
    },
    {
      "@type": "Question",
      "name": "¿Qué nivel de compresión debo usar para PDFs web?",
      "acceptedAnswer": { "@type": "Answer", "text": "La compresión recomendada es ideal para uso web. Reduce significativamente el tamaño del archivo mientras mantiene las imágenes y el texto con apariencia profesional. Usa compresión extrema solo si necesitas el archivo más pequeño posible y puedes aceptar algo de pérdida de calidad." }
    }
  ]
}

export default function ComprimirPDFParaWebPageEs() {
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
                <Compress className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para Web</h1>
              <p className="text-xl text-slate-300 mb-8">
                Optimiza tus PDFs para tu sitio web. Reduce el tamaño del archivo para cargas más rápidas, mejor experiencia de usuario y mejor posicionamiento SEO — todo desde tu navegador, gratis.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Compresión Inteligente</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Después de la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Compress PDF"
          outputFormat="PDF"
          processingMessage="Optimizando tu PDF para web..."
          successMessage="¡Tu PDF optimizado para web está listo!"
          compressionLevel="recommended"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">¿Por Qué Optimizar PDFs para tu Sitio Web?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Los PDFs alojados en tu sitio web son descargados por visitantes, indexados por motores de búsqueda y afectan tu velocidad de carga. Los PDFs grandes ralentizan todo — aumentan las tasas de rebote, perjudican el SEO y cuestan más ancho de banda. Comprimir tus PDFs antes de subirlos a tu sitio mantiene las descargas rápidas y a tus visitantes satisfechos.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; La compresión recomendada equilibra calidad y tamaño de archivo</li>
              <li>&#10003; Descargas más rápidas mejoran la experiencia de usuario y reducen el rebote</li>
              <li>&#10003; Archivos más pequeños ahorran ancho de banda y costos de alojamiento</li>
              <li>&#10003; Mejor velocidad de carga ayuda a tu posicionamiento SEO</li>
              <li>&#10003; Sin instalación — optimiza PDFs directamente en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comunes</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Catálogos de Productos</h3>
                <p className="text-slate-600">
                  Los sitios de comercio electrónico y fabricantes suelen alojar catálogos de productos como PDFs descargables. Comprimirlos asegura que los clientes puedan descargar rápidamente sin esperar, especialmente en dispositivos móviles.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Menús de Restaurantes</h3>
                <p className="text-slate-600">
                  Los restaurantes que enlazan a menús PDF en su sitio web necesitan archivos de carga rápida. Un visitante en su celular debería poder ver tu menú en segundos, no esperar a que un archivo grande se descargue.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Documentación Técnica</h3>
                <p className="text-slate-600">
                  Los manuales de usuario, guías de instalación y documentación técnica alojados en tu sitio deben cargar rápidamente. Los usuarios técnicos esperan acceso inmediato a la información — los PDFs optimizados lo hacen posible.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Recursos Descargables</h3>
                <p className="text-slate-600">
                  Los whitepapers, ebooks, casos de estudio y guías usados para marketing de contenidos deben cargar rápidamente. Comprimir estos recursos significa que los visitantes tienen más probabilidades de completar la descarga e interactuar con tu contenido.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Optimizar un PDF para tu Sitio Web</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra y suelta tu PDF en PDF.it.",
                "Haz clic en Comprimir PDF — se aplica compresión recomendada para equilibrar calidad y tamaño.",
                "Descarga tu PDF optimizado y súbelo a tu sitio web. Tus visitantes disfrutarán de descargas más rápidas.",
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
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Más Herramientas PDF</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Comprimir PDF", desc: "Compresión estándar.", href: "/es/comprimir-pdf", icon: Compress },
                { name: "Comprimir a 1MB", desc: "Para límites de 1MB.", href: "/es/comprimir-pdf-a-1mb", icon: Compress },
                { name: "Comprimir a 2MB", desc: "Para límites de 2MB.", href: "/es/comprimir-pdf-a-2mb", icon: Compress },
                { name: "Comprimir para Email", desc: "Para adjuntos de email.", href: "/es/comprimir-pdf-para-email", icon: Compress },
                { name: "Dividir PDF", desc: "Divide PDFs grandes.", href: "/es/dividir-pdf", icon: Scissors },
                { name: "Unir PDF", desc: "Combina varios PDFs.", href: "/es/unir-pdf", icon: Merge },
                { name: "Aplanar PDF", desc: "Elimina campos y anotaciones.", href: "/es/aplanar-pdf", icon: FileText },
                { name: "Rotar PDF", desc: "Corrige la orientación.", href: "/es/rotar-pdf", icon: RotateCw },
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

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "¿Cómo optimizo un PDF para mi sitio web?", a: "Sube tu PDF a PDF.it y haz clic en Comprimir. La compresión recomendada equilibra calidad y tamaño de archivo, produciendo un PDF que carga rápidamente en páginas web mientras mantiene el texto y las imágenes con buena apariencia." },
                { q: "¿Los PDFs optimizados para web se verán bien al descargarlos?", a: "Sí. La compresión recomendada reduce el tamaño del archivo preservando la calidad visual. El texto se mantiene nítido y las imágenes conservan buen detalle — los visitantes pueden descargar y leer el PDF sin problemas." },
                { q: "¿Por qué debería comprimir los PDFs antes de subirlos a mi sitio web?", a: "Los PDFs grandes ralentizan los tiempos de carga, perjudican el posicionamiento SEO y frustran a los visitantes en dispositivos móviles. Comprimir los PDFs asegura descargas más rápidas, menores costos de ancho de banda y una mejor experiencia de usuario." },
                { q: "¿El tamaño del PDF afecta el SEO del sitio web?", a: "Sí. Google considera la velocidad de carga como un factor de posicionamiento. Si un PDF tarda demasiado en cargar, puede afectar negativamente tu posicionamiento en búsquedas. Los PDFs más pequeños cargan más rápido y contribuyen a mejores puntuaciones de Core Web Vitals." },
                { q: "¿Puedo comprimir varios PDFs para mi sitio web a la vez?", a: "Los usuarios Pro pueden comprimir múltiples PDFs en lote. Sube todos tus archivos, comprímelos juntos y descarga todo como ZIP — perfecto para optimizar toda una biblioteca de recursos web." },
                { q: "¿Qué nivel de compresión debo usar para PDFs web?", a: "La compresión recomendada es ideal para uso web. Reduce significativamente el tamaño del archivo mientras mantiene las imágenes y el texto con apariencia profesional. Usa compresión extrema solo si necesitas el archivo más pequeño posible y puedes aceptar algo de pérdida de calidad." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
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
            <h2 className="text-2xl font-black mb-4">Optimiza los PDFs de tu Sitio Web</h2>
            <p className="text-slate-300 text-lg mb-8">
              Comprime tus PDFs para cargas más rápidas y visitantes más satisfechos. Sin registro, sin instalación, sin esperas.
            </p>
            <Link
              href="/es/comprimir-pdf-para-web"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Optimizar PDF para Web Ahora
            </Link>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
