import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Image, Merge, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF con Imagenes — Reduce PDFs con Fotos e Imagenes | PDF.it",
  description:
    "Comprime PDFs que contienen imagenes y fotos. Reduce significativamente el tamano sin perder la calidad visual del documento.",
  alternates: {
    languages: {
      en: "/compress-pdf-images",
      es: "/es/comprimir-pdf-imagenes",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo comprime PDF.it las imágenes dentro de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it analiza cada imagen incrustada en tu PDF y aplica compresión inteligente que reduce la resolución y optimiza el formato de cada imagen. El texto, las fuentes y el formato del documento permanecen intactos." }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto se puede reducir un PDF con muchas imágenes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los PDFs con muchas imágenes suelen ver las mayores reducciones — típicamente entre un 50-80%. Los resultados exactos dependen de la resolución, cantidad y tipo de imágenes en tu documento." }
    },
    {
      "@type": "Question",
      "name": "¿Se pierde calidad visible en las imágenes después de comprimir?",
      "acceptedAnswer": { "@type": "Answer", "text": "La compresión recomendada de PDF.it está diseñada para preservar la calidad visual. Las imágenes se optimizan de forma inteligente — la diferencia es prácticamente imperceptible para la mayoría de los documentos, incluidos portafolios y catálogos." }
    },
    {
      "@type": "Question",
      "name": "¿Qué tipos de imágenes se comprimen dentro del PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it comprime todos los tipos de imágenes incrustadas: fotografías JPEG, gráficos PNG, ilustraciones vectoriales rasterizadas y cualquier otro formato de imagen que contenga tu PDF." }
    },
    {
      "@type": "Question",
      "name": "¿La compresión afecta el texto o las fuentes del PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. El texto en los PDFs se almacena como datos vectoriales, completamente separado de las imágenes. La compresión se enfoca exclusivamente en las imágenes incrustadas — el texto, las fuentes y el formato permanecen 100% intactos y nítidos." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo comprimir un PDF con cientos de imágenes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it procesa todas las imágenes incrustadas en tu PDF sin importar cuántas haya. Los documentos con muchas imágenes — catálogos, portafolios, presentaciones — típicamente ven las mayores reducciones de tamaño." }
    }
  ]
}

export default function ComprimirPDFImagenesPageEs() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema-comprimir-pdf-imagenes-es"
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
                <Compress className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF con Imagenes</h1>
              <p className="text-xl text-slate-300 mb-8">
                Los PDFs con muchas imagenes — portafolios fotograficos, catalogos de productos, presentaciones y documentos escaneados — suelen ser los archivos mas grandes con los que trabajas. PDF.it comprime las imagenes incrustadas de forma inteligente, reduciendo significativamente el tamano sin perder la calidad visual del documento.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Compresion Inteligente de Imagenes</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Despues de la Sesion</span></div>
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
          processingMessage="Comprimiendo tu PDF con imagenes..."
          successMessage="¡Tu PDF comprimido esta listo!"
          compressionLevel="recommended"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">¿Por Que Comprimir PDFs con Imagenes?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Las imagenes son casi siempre el componente mas grande en un PDF. Una sola foto de alta resolucion puede agregar varios megabytes. Cuando tu PDF contiene docenas o cientos de imagenes — fotos de productos, ilustraciones, graficos — el tamano del archivo puede inflarse a 50MB o mas. La compresion inteligente de PDF.it se enfoca en estas imagenes incrustadas, reduciendolas significativamente mientras preserva la calidad visual.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Se enfoca en imagenes incrustadas para maxima reduccion de tamano</li>
              <li>&#10003; Preserva la calidad visual de fotos e ilustraciones</li>
              <li>&#10003; El texto y el formato permanecen intactos y nitidos</li>
              <li>&#10003; Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>&#10003; Sin instalacion — comprime en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comunes</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Portafolios Fotograficos</h3>
                <p className="text-slate-600">
                  Los portafolios de fotografia exportados como PDFs pueden superar facilmente los 100MB. Comprime las imagenes incrustadas para crear una version compartible que se descargue rapidamente sin dejar de mostrar tu trabajo con calidad profesional.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Catalogos de Productos</h3>
                <p className="text-slate-600">
                  Los catalogos de comercio electronico con fotos de productos en cada pagina crean PDFs enormes. Comprime las imagenes para que tu catalogo sea facil de enviar por correo, descargar desde tu sitio web o compartir con distribuidores.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Presentaciones con Imagenes</h3>
                <p className="text-slate-600">
                  Las presentaciones exportadas a PDF con graficos, fotos y diagramas pueden ser muy pesadas. Comprime las imagenes para compartir tus presentaciones por correo, subirlas a plataformas o enviarlas a clientes sin problemas de tamano.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Documentos Escaneados</h3>
                <p className="text-slate-600">
                  Los documentos escaneados son esencialmente imagenes de pagina completa, lo que los hace extremadamente grandes. Comprime las imagenes incrustadas para reducir drasticamente el tamano mientras mantienes el contenido legible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Comprimir PDF con Imagenes</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra y suelta tu PDF con imagenes en PDF.it.",
                "Haz clic en Comprimir PDF — la compresion inteligente se aplica automaticamente a todas las imagenes incrustadas.",
                "Descarga tu PDF mas pequeno. Si aun es muy grande, intenta dividir el archivo primero y luego comprime cada parte.",
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
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Comprimir PDF", desc: "Compresion estandar.", href: "/es/comprimir-pdf", icon: Compress },
                { name: "Sin Perder Calidad", desc: "Compresion inteligente.", href: "/es/comprimir-pdf-sin-perder-calidad", icon: Compress },
                { name: "PDF Escaneado", desc: "Comprime escaneos.", href: "/es/comprimir-pdf-escaneado", icon: Compress },
                { name: "PDF a JPG", desc: "Convierte a imagenes.", href: "/es/pdf-a-jpg", icon: Image },
                { name: "Extraer Imagenes", desc: "Extrae imagenes de PDFs.", href: "/es/extraer-imagenes-de-pdf", icon: Image },
                { name: "Para Email", desc: "Comprime para correo.", href: "/es/comprimir-pdf-para-email", icon: Compress },
                { name: "Dividir PDF", desc: "Divide documentos.", href: "/es/dividir-pdf", icon: Scissors },
                { name: "Unir PDF", desc: "Combina varios PDFs.", href: "/es/unir-pdf", icon: Merge },
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
                { q: "¿Como comprime PDF.it las imagenes dentro de un PDF?", a: "PDF.it analiza cada imagen incrustada en tu PDF y aplica compresion inteligente que reduce la resolucion y optimiza el formato de cada imagen. El texto, las fuentes y el formato del documento permanecen intactos." },
                { q: "¿Cuanto se puede reducir un PDF con muchas imagenes?", a: "Los PDFs con muchas imagenes suelen ver las mayores reducciones — tipicamente entre un 50-80%. Los resultados exactos dependen de la resolucion, cantidad y tipo de imagenes en tu documento." },
                { q: "¿Se pierde calidad visible en las imagenes despues de comprimir?", a: "La compresion recomendada de PDF.it esta disenada para preservar la calidad visual. Las imagenes se optimizan de forma inteligente — la diferencia es practicamente imperceptible para la mayoria de los documentos, incluidos portafolios y catalogos." },
                { q: "¿Que tipos de imagenes se comprimen dentro del PDF?", a: "PDF.it comprime todos los tipos de imagenes incrustadas: fotografias JPEG, graficos PNG, ilustraciones vectoriales rasterizadas y cualquier otro formato de imagen que contenga tu PDF." },
                { q: "¿La compresion afecta el texto o las fuentes del PDF?", a: "No. El texto en los PDFs se almacena como datos vectoriales, completamente separado de las imagenes. La compresion se enfoca exclusivamente en las imagenes incrustadas — el texto, las fuentes y el formato permanecen 100% intactos y nitidos." },
                { q: "¿Puedo comprimir un PDF con cientos de imagenes?", a: "Si. PDF.it procesa todas las imagenes incrustadas en tu PDF sin importar cuantas haya. Los documentos con muchas imagenes — catalogos, portafolios, presentaciones — tipicamente ven las mayores reducciones de tamano." },
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
        <section className="py-16 bg-[#191B4D] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Comprime Tus PDFs con Imagenes Ahora</h2>
            <p className="text-slate-300 text-lg mb-8">
              Reduce PDFs sobredimensionados llenos de imagenes en segundos. Sin registro, sin instalacion, sin esperas.
            </p>
            <Link
              href="/es/comprimir-pdf-imagenes"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Comprimir PDF con Imagenes
            </Link>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
