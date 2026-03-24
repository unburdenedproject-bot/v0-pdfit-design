import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, Scissors, Settings } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF sin Perder Calidad — Compresion Inteligente | PDF.it",
  description:
    "Comprime PDFs sin perder calidad visible. Compresion inteligente que reduce el tamano manteniendo texto nitido e imagenes claras.",
  alternates: {
    languages: {
      en: "/compress-pdf-without-losing-quality",
      es: "/es/comprimir-pdf-sin-perder-calidad",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo comprime PDF.it sin perder calidad?",
      "acceptedAnswer": { "@type": "Answer", "text": "La compresión inteligente de PDF.it elimina metadatos innecesarios, optimiza fuentes incrustadas, reestructura datos internos del PDF y aplica compresión ligera de imágenes. Esto reduce el tamaño del archivo mientras preserva la calidad visual — texto nítido, imágenes claras y formato intacto." }
    },
    {
      "@type": "Question",
      "name": "¿Las imágenes se verán diferentes después de la compresión?",
      "acceptedAnswer": { "@type": "Answer", "text": "Con la compresión recomendada, las imágenes se optimizan de forma inteligente. La diferencia es prácticamente imperceptible para la mayoría de los documentos. El texto, gráficos y diagramas permanecen nítidos y claros." }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto más pequeño será mi PDF sin perder calidad?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los resultados dependen del contenido de tu PDF. Los documentos con fuentes incrustadas, metadatos excesivos y estructuras sin optimizar típicamente ven una reducción del 20-50%. Los archivos que ya están optimizados pueden ver reducciones menores." }
    },
    {
      "@type": "Question",
      "name": "¿Qué hace la compresión inteligente exactamente?",
      "acceptedAnswer": { "@type": "Answer", "text": "La compresión inteligente realiza cuatro optimizaciones principales: elimina metadatos innecesarios y datos ocultos, optimiza y reduce fuentes incrustadas, reestructura los datos internos del PDF para mayor eficiencia, y aplica compresión ligera de imágenes que preserva la calidad visual." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo comprimir documentos profesionales sin perder calidad?",
      "acceptedAnswer": { "@type": "Answer", "text": "Absolutamente. La compresión recomendada está diseñada específicamente para documentos donde la calidad importa — informes profesionales, portafolios de diseño, documentos legales y material de marketing. Tu documento mantendrá su aspecto profesional." }
    },
    {
      "@type": "Question",
      "name": "¿Hay un límite en el tamaño o número de páginas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios gratuitos pueden comprimir PDFs de hasta 25MB. Los usuarios Pro pueden procesar archivos de hasta 200MB con procesamiento por lotes. No hay límite en el número de páginas." }
    }
  ]
}

export default function ComprimirPDFSinPerderCalidadPageEs() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema-comprimir-pdf-calidad-es"
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF sin Perder Calidad</h1>
              <p className="text-xl text-slate-300 mb-8">
                La compresion inteligente de PDF.it reduce el tamano de tu PDF sin sacrificar la calidad visual. Elimina metadatos innecesarios, optimiza fuentes, reestructura datos internos y comprime imagenes de forma ligera — manteniendo texto nitido e imagenes claras.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Compresion Inteligente</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Calidad Preservada</span></div>
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
          processingMessage="Comprimiendo tu PDF sin perder calidad..."
          successMessage="¡Tu PDF comprimido con calidad preservada esta listo!"
          compressionLevel="recommended"
        />

        {/* How Smart Compression Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">¿Como Funciona la Compresion Inteligente?</h2>
            <p className="text-lg text-slate-600 mb-8">
              No toda la compresion es igual. La compresion inteligente se enfoca en optimizar la estructura interna de tu PDF en lugar de degradar el contenido visible. El resultado es un archivo notablemente mas pequeno que se ve practicamente identico al original.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="h-5 w-5 text-orange-500" />
                  <h3 className="font-bold text-slate-900">Elimina Metadatos</h3>
                </div>
                <p className="text-slate-600 text-sm">Remueve datos ocultos, miniaturas incrustadas, historial de edicion y metadatos innecesarios que inflan el tamano del archivo sin aportar valor.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="h-5 w-5 text-orange-500" />
                  <h3 className="font-bold text-slate-900">Optimiza Fuentes</h3>
                </div>
                <p className="text-slate-600 text-sm">Reduce las fuentes incrustadas eliminando caracteres no utilizados y optimizando las tablas de fuentes, sin afectar como se ve el texto.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="h-5 w-5 text-orange-500" />
                  <h3 className="font-bold text-slate-900">Reestructura Datos</h3>
                </div>
                <p className="text-slate-600 text-sm">Reorganiza las estructuras internas del PDF, elimina objetos duplicados y optimiza los flujos de datos para mayor eficiencia.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="h-5 w-5 text-orange-500" />
                  <h3 className="font-bold text-slate-900">Compresion Ligera de Imagenes</h3>
                </div>
                <p className="text-slate-600 text-sm">Aplica optimizacion ligera a las imagenes incrustadas — lo suficiente para reducir el tamano sin diferencias visibles a simple vista.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comunes</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Documentos Profesionales</h3>
                <p className="text-slate-600">
                  Los informes anuales, resumenes financieros y analisis empresariales necesitan verse pulidos. La compresion inteligente reduce el tamano del archivo para compartir facilmente mientras mantiene graficos, tablas y formato impecables.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Portafolios de Diseno</h3>
                <p className="text-slate-600">
                  Los portafolios creativos dependen de la calidad de imagen para causar una impresion. La compresion que preserva la calidad te permite compartir tu trabajo por correo o portales de carga sin degradar tus disenos.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Documentos Legales</h3>
                <p className="text-slate-600">
                  Contratos, acuerdos y documentos legales deben permanecer completamente legibles. La compresion inteligente optimiza el tamano del archivo asegurando que cada palabra, firma y sello se mantenga nitido y legible.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Material de Marketing</h3>
                <p className="text-slate-600">
                  Folletos, catalogos y presentaciones con graficos de marca necesitan verse profesionales. Comprime para compartir por correo o web sin comprometer la imagen de tu marca.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Comprimir PDF Sin Perder Calidad</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra y suelta tu PDF en PDF.it.",
                "Haz clic en Comprimir PDF — la compresion inteligente se aplica para optimizar tu archivo preservando la calidad.",
                "Descarga tu PDF optimizado. Si necesitas archivos aun mas pequenos, prueba la compresion extrema — pero ten en cuenta que puede reducir el detalle de las imagenes.",
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
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Comprimir PDF", desc: "Compresion estandar.", href: "/es/comprimir-pdf", icon: Compress },
                { name: "PDF con Imagenes", desc: "Comprime imagenes.", href: "/es/comprimir-pdf-imagenes", icon: Compress },
                { name: "Compresion Rapida", desc: "Comprime al instante.", href: "/es/comprimir-pdf-rapido", icon: Compress },
                { name: "Aplanar PDF", desc: "Elimina capas y campos.", href: "/es/aplanar-pdf", icon: FileText },
                { name: "Reducir Tamano", desc: "Reduce tamano general.", href: "/es/reducir-tamano-pdf", icon: Compress },
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
                { q: "¿Como comprime PDF.it sin perder calidad?", a: "La compresion inteligente de PDF.it elimina metadatos innecesarios, optimiza fuentes incrustadas, reestructura datos internos del PDF y aplica compresion ligera de imagenes. Esto reduce el tamano del archivo mientras preserva la calidad visual — texto nitido, imagenes claras y formato intacto." },
                { q: "¿Las imagenes se veran diferentes despues de la compresion?", a: "Con la compresion recomendada, las imagenes se optimizan de forma inteligente. La diferencia es practicamente imperceptible para la mayoria de los documentos. El texto, graficos y diagramas permanecen nitidos y claros." },
                { q: "¿Cuanto mas pequeno sera mi PDF sin perder calidad?", a: "Los resultados dependen del contenido de tu PDF. Los documentos con fuentes incrustadas, metadatos excesivos y estructuras sin optimizar tipicamente ven una reduccion del 20-50%. Los archivos que ya estan optimizados pueden ver reducciones menores." },
                { q: "¿Que hace la compresion inteligente exactamente?", a: "La compresion inteligente realiza cuatro optimizaciones principales: elimina metadatos innecesarios y datos ocultos, optimiza y reduce fuentes incrustadas, reestructura los datos internos del PDF para mayor eficiencia, y aplica compresion ligera de imagenes que preserva la calidad visual." },
                { q: "¿Puedo comprimir documentos profesionales sin perder calidad?", a: "Absolutamente. La compresion recomendada esta disenada especificamente para documentos donde la calidad importa — informes profesionales, portafolios de diseno, documentos legales y material de marketing. Tu documento mantendra su aspecto profesional." },
                { q: "¿Hay un limite en el tamano o numero de paginas?", a: "Los usuarios gratuitos pueden comprimir PDFs de hasta 25MB. Los usuarios Pro pueden procesar archivos de hasta 200MB con procesamiento por lotes. No hay limite en el numero de paginas." },
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
            <h2 className="text-2xl font-black mb-4">Comprime Tu PDF — Manten la Calidad</h2>
            <p className="text-slate-300 text-lg mb-8">
              La compresion inteligente reduce el tamano del archivo sin sacrificar la legibilidad. Sin registro, sin instalacion, sin esperas.
            </p>
            <Link
              href="/es/comprimir-pdf-sin-perder-calidad"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Comprimir Sin Perder Calidad
            </Link>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
