import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, Scissors, ScanLine } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF Escaneado — Reduce el Tamano de Documentos Escaneados | PDF.it",
  description:
    "Comprime documentos PDF escaneados. Los escaneos suelen ser archivos grandes — reduce su tamano significativamente manteniendo la legibilidad.",
  alternates: {
    languages: {
      en: "/compress-scanned-pdf",
      es: "/es/comprimir-pdf-escaneado",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Por qué los PDFs escaneados son tan grandes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los PDFs escaneados contienen imágenes de página completa en alta resolución en lugar de texto vectorial. Cada página es esencialmente una fotografía, por lo que un documento de 10 páginas puede pesar 30-50MB fácilmente. La compresión se enfoca en optimizar estas imágenes para reducir drásticamente el tamaño." }
    },
    {
      "@type": "Question",
      "name": "¿La compresión hará que mi documento escaneado sea ilegible?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. La compresión recomendada de PDF.it está diseñada para preservar la legibilidad. El texto impreso se mantiene nítido y claro. Las imágenes se optimizan de forma inteligente sin degradar la calidad visible del documento." }
    },
    {
      "@type": "Question",
      "name": "¿Comprimir un PDF escaneado afecta el texto OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si tu PDF escaneado ya tiene una capa de texto OCR, la compresión la preserva completamente. La capa de texto es independiente de la capa de imagen, por lo que puedes seguir buscando y copiando texto después de la compresión." }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto se puede comprimir un PDF escaneado?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los PDFs escaneados típicamente se comprimen muy bien debido a que están compuestos principalmente de imágenes. Reducciones del 50-80% son comunes, aunque los resultados exactos dependen de la resolución del escaneo y el número de páginas." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo comprimir un PDF escaneado de muchas páginas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it comprime todas las páginas de tu PDF escaneado a la vez. Los escaneos de muchas páginas a menudo ven las mayores reducciones porque cada página contiene una imagen completa que puede optimizarse." }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si mi PDF escaneado sigue siendo muy grande después de la compresión?",
      "acceptedAnswer": { "@type": "Answer", "text": "Intenta dividir el PDF en secciones más pequeñas con nuestra herramienta Dividir PDF, luego comprime cada parte individualmente. También puedes eliminar páginas innecesarias antes de comprimir o usar el Escáner OCR para convertir las imágenes en texto buscable y más ligero." }
    }
  ]
}

export default function ComprimirPDFEscaneadoPageEs() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema-comprimir-pdf-escaneado-es"
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF Escaneado</h1>
              <p className="text-xl text-slate-300 mb-8">
                Los documentos escaneados son notoriamente pesados — cada pagina es una imagen de alta resolucion que puede pesar varios megabytes. PDF.it comprime las imagenes incrustadas de forma inteligente, reduciendo significativamente el tamano de tus escaneos mientras mantiene el contenido legible.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Compresion Inteligente</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Legibilidad Preservada</span></div>
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
          processingMessage="Comprimiendo tu PDF escaneado..."
          successMessage="¡Tu PDF escaneado comprimido esta listo!"
          compressionLevel="recommended"
        />

        {/* Why Scanned PDFs Are Large */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">¿Por Que los PDFs Escaneados Son Tan Grandes?</h2>
            <p className="text-lg text-slate-600 mb-8">
              A diferencia de los PDFs nativos que almacenan texto como datos vectoriales ligeros, los PDFs escaneados almacenan cada pagina como una imagen de alta resolucion. Un escaneo tipico a 300 DPI puede generar imagenes de 3-5MB por pagina. Un documento de 20 paginas puede facilmente alcanzar 60-100MB.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <ScanLine className="h-5 w-5 text-orange-500" />
                  <h3 className="font-bold text-slate-900">Imagenes de Alta Resolucion</h3>
                </div>
                <p className="text-slate-600 text-sm">Los escaneres capturan cada pagina como imagen de alta resolucion (300-600 DPI), generando archivos muy grandes incluso para documentos simples de texto.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <ScanLine className="h-5 w-5 text-orange-500" />
                  <h3 className="font-bold text-slate-900">Sin Optimizacion</h3>
                </div>
                <p className="text-slate-600 text-sm">Los escaneres raramente optimizan las imagenes. Guardan cada pagina en la maxima calidad posible, incluyendo areas en blanco que podrian comprimirse significativamente.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <ScanLine className="h-5 w-5 text-orange-500" />
                  <h3 className="font-bold text-slate-900">Color Innecesario</h3>
                </div>
                <p className="text-slate-600 text-sm">Muchos documentos de texto se escanean en color aunque son en blanco y negro, triplicando el tamano del archivo sin necesidad.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <ScanLine className="h-5 w-5 text-orange-500" />
                  <h3 className="font-bold text-slate-900">Multiples Paginas</h3>
                </div>
                <p className="text-slate-600 text-sm">El problema se multiplica con cada pagina. Un contrato de 50 paginas escaneado puede facilmente superar los 100MB.</p>
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
                <h3 className="text-xl font-black text-slate-900 mb-3">Documentos Legales Escaneados</h3>
                <p className="text-slate-600">
                  Contratos firmados, escrituras, poderes notariales y documentos legales escaneados en alta resolucion pueden ser enormes. Comprimelos a un tamano manejable para adjuntos de correo, almacenamiento en la nube o carga en sistemas de gestion documental.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Recibos y Facturas</h3>
                <p className="text-slate-600">
                  Los reportes de gastos y registros contables a menudo incluyen recibos y facturas escaneados. Comprimelos para reducir costos de almacenamiento y facilitar compartirlos con tu contador.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Registros Medicos</h3>
                <p className="text-slate-600">
                  Los registros medicos escaneados — resultados de laboratorio, recetas, historial clinico — necesitan ser almacenados y compartidos de forma eficiente. Comprime tus documentos medicos para facilitar su gestion digital.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Archivos Historicos</h3>
                <p className="text-slate-600">
                  Digitalizar archivos en papel crea PDFs masivos. Comprime tus archivos escaneados para ahorrar espacio de almacenamiento mientras mantienes los documentos accesibles y buscables.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Comprimir un PDF Escaneado</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra y suelta tu PDF escaneado en PDF.it.",
                "Haz clic en Comprimir PDF — la compresion inteligente se aplica automaticamente a las imagenes incrustadas.",
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Comprimir PDF", desc: "Compresion estandar.", href: "/es/comprimir-pdf", icon: Compress },
                { name: "PDF con Imagenes", desc: "Comprime imagenes.", href: "/es/comprimir-pdf-imagenes", icon: Compress },
                { name: "Escaner OCR", desc: "Haz escaneos buscables.", href: "/es/escaner-ocr", icon: FileText },
                { name: "Limpiar Escaneo", desc: "Limpia escaneos de telefono.", href: "/es/limpiar-escaneo", icon: ScanLine },
                { name: "Sin Perder Calidad", desc: "Compresion inteligente.", href: "/es/comprimir-pdf-sin-perder-calidad", icon: Compress },
                { name: "Reducir Tamano", desc: "Reduce tamano general.", href: "/es/reducir-tamano-pdf", icon: Compress },
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
                { q: "¿Por que los PDFs escaneados son tan grandes?", a: "Los PDFs escaneados contienen imagenes de pagina completa en alta resolucion en lugar de texto vectorial. Cada pagina es esencialmente una fotografia, por lo que un documento de 10 paginas puede pesar 30-50MB facilmente. La compresion se enfoca en optimizar estas imagenes para reducir drasticamente el tamano." },
                { q: "¿La compresion hara que mi documento escaneado sea ilegible?", a: "No. La compresion recomendada de PDF.it esta disenada para preservar la legibilidad. El texto impreso se mantiene nitido y claro. Las imagenes se optimizan de forma inteligente sin degradar la calidad visible del documento." },
                { q: "¿Comprimir un PDF escaneado afecta el texto OCR?", a: "Si tu PDF escaneado ya tiene una capa de texto OCR, la compresion la preserva completamente. La capa de texto es independiente de la capa de imagen, por lo que puedes seguir buscando y copiando texto despues de la compresion." },
                { q: "¿Cuanto se puede comprimir un PDF escaneado?", a: "Los PDFs escaneados tipicamente se comprimen muy bien debido a que estan compuestos principalmente de imagenes. Reducciones del 50-80% son comunes, aunque los resultados exactos dependen de la resolucion del escaneo y el numero de paginas." },
                { q: "¿Puedo comprimir un PDF escaneado de muchas paginas?", a: "Si. PDF.it comprime todas las paginas de tu PDF escaneado a la vez. Los escaneos de muchas paginas a menudo ven las mayores reducciones porque cada pagina contiene una imagen completa que puede optimizarse." },
                { q: "¿Que pasa si mi PDF escaneado sigue siendo muy grande despues de la compresion?", a: "Intenta dividir el PDF en secciones mas pequenas con nuestra herramienta Dividir PDF, luego comprime cada parte individualmente. Tambien puedes eliminar paginas innecesarias antes de comprimir o usar el Escaner OCR para convertir las imagenes en texto buscable y mas ligero." },
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
            <h2 className="text-2xl font-black mb-4">Comprime Tus PDFs Escaneados Ahora</h2>
            <p className="text-slate-300 text-lg mb-8">
              Reduce documentos escaneados sobredimensionados en segundos. Sin registro, sin instalacion, sin esperas.
            </p>
            <Link
              href="/es/comprimir-pdf-escaneado"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Comprimir PDF Escaneado
            </Link>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
