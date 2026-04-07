import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, Scissors, HardDrive } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Reducir Tamano de PDF — Haz tu PDF Mas Pequeno | PDF.it",
  description:
    "Reduce el tamano de cualquier archivo PDF en linea. Compresion rapida y facil para hacer tus PDFs mas pequenos sin perder calidad.",
  alternates: {
    languages: {
      en: "/reduce-pdf-size",
      es: "/es/reducir-tamano-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo reduzco el tamaño de un archivo PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a PDF.it y haz clic en Comprimir. La herramienta analiza tu documento y aplica compresión inteligente — optimizando imágenes, fuentes y estructuras internas para reducir el tamaño del archivo de forma significativa." }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto se puede reducir el tamaño de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los resultados dependen del contenido de tu PDF. Los documentos con muchas imágenes típicamente ven reducciones del 50-80%. Los PDFs con más texto suelen reducirse entre un 20-40%. Cada documento es diferente." }
    },
    {
      "@type": "Question",
      "name": "¿Reducir el tamaño del PDF afecta la calidad?",
      "acceptedAnswer": { "@type": "Answer", "text": "La compresión recomendada de PDF.it está diseñada para preservar la calidad visual. El texto permanece nítido y completamente legible. Las imágenes se optimizan de forma inteligente con diferencias prácticamente imperceptibles." }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro reducir el tamaño de mi PDF en línea?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it procesa tu archivo en el navegador y elimina todos los archivos después de la sesión. No almacenamos ni accedemos al contenido de tus documentos. Tu privacidad está protegida." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo reducir el tamaño de un PDF desde mi teléfono?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en cualquier navegador móvil — iPhone, Android, iPad. Sube tu PDF, reduce su tamaño y descarga el archivo más pequeño directamente en tu dispositivo." }
    },
    {
      "@type": "Question",
      "name": "¿Qué hago si mi PDF sigue siendo muy grande después de reducirlo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Prueba dividir el PDF en secciones más pequeñas con nuestra herramienta Dividir PDF y comprime cada parte. También puedes aplanar el PDF para eliminar capas ocultas, o eliminar páginas innecesarias para reducir aún más el tamaño." }
    }
  ]
}

export default function ReducirTamanoPDFPageEs() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema-reducir-tamano-pdf-es"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderEs />
      <main>
        {/* Hero */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a1f5e] to-[#252A6A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Compress className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Reducir Tamano de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                ¿Tu PDF es demasiado grande para compartir, subir o almacenar? PDF.it reduce el tamano de cualquier archivo PDF de forma rapida y facil — optimizando imagenes, fuentes y estructuras internas para hacer tu documento mas pequeno sin perder calidad visible.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Reduccion Rapida</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Despues de la Sesion</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Compress PDF"
          outputFormat="PDF"
          processingMessage="Reduciendo el tamano de tu PDF..."
          successMessage="¡Tu PDF reducido esta listo!"
          compressionLevel="recommended"
        />

        {/* Why PDFs Get Large */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">¿Por Que los PDFs Se Hacen Tan Grandes?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Los PDFs pueden crecer por muchas razones. Entender por que tu archivo es grande te ayuda a elegir la mejor estrategia para reducirlo. PDF.it analiza y optimiza todos estos componentes automaticamente.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <HardDrive className="h-5 w-5 text-[#14D8C4]" />
                  <h3 className="font-bold text-slate-900">Imagenes de Alta Resolucion</h3>
                </div>
                <p className="text-slate-600 text-sm">Las fotos, graficos e ilustraciones en alta resolucion son la principal causa de PDFs grandes. Una sola imagen puede agregar varios megabytes al archivo.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <HardDrive className="h-5 w-5 text-[#14D8C4]" />
                  <h3 className="font-bold text-slate-900">Fuentes Incrustadas</h3>
                </div>
                <p className="text-slate-600 text-sm">Los PDFs incrustan fuentes completas para garantizar que el documento se vea igual en cualquier dispositivo. Multiples fuentes pueden agregar megabytes innecesarios.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <HardDrive className="h-5 w-5 text-[#14D8C4]" />
                  <h3 className="font-bold text-slate-900">Metadatos y Datos Ocultos</h3>
                </div>
                <p className="text-slate-600 text-sm">Historial de edicion, miniaturas incrustadas, comentarios y metadatos acumulados pueden inflar significativamente el tamano del archivo sin que lo notes.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <HardDrive className="h-5 w-5 text-[#14D8C4]" />
                  <h3 className="font-bold text-slate-900">Capas y Formularios</h3>
                </div>
                <p className="text-slate-600 text-sm">Los campos de formulario, anotaciones, capas de dibujo y elementos interactivos agregan datos adicionales que aumentan el tamano del PDF.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comunes</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Almacenamiento en la Nube</h3>
                <p className="text-slate-600">
                  Ahorra espacio en Google Drive, Dropbox, OneDrive o iCloud reduciendo el tamano de tus PDFs archivados. Los archivos mas pequenos tambien se sincronizan mas rapido entre dispositivos.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Compartir por Email</h3>
                <p className="text-slate-600">
                  La mayoria de los proveedores de correo limitan los adjuntos a 10-25MB. Reduce el tamano de tu PDF para que quepa dentro de los limites de correo y se descargue rapidamente para tus destinatarios.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Subir a Portales</h3>
                <p className="text-slate-600">
                  Solicitudes de empleo, formularios gubernamentales, plataformas educativas y portales de clientes frecuentemente tienen limites de tamano estrictos. Reduce tu PDF para cumplir con los requisitos de carga.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Ahorrar Espacio en Disco</h3>
                <p className="text-slate-600">
                  Si trabajas con muchos PDFs diariamente, los archivos grandes se acumulan rapidamente. Reduce el tamano de tus documentos para liberar espacio en tu disco duro o SSD.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Reducir el Tamano de un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra y suelta tu PDF en PDF.it.",
                "Haz clic en Comprimir PDF — la compresion inteligente se aplica automaticamente para reducir el tamano.",
                "Descarga tu PDF reducido. Si aun es muy grande, intenta dividir el archivo primero y luego comprime cada parte.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Comprimir PDF", desc: "Compresion estandar.", href: "/es/comprimir-pdf", icon: Compress },
                { name: "Compresion Rapida", desc: "Comprime al instante.", href: "/es/comprimir-pdf-rapido", icon: Compress },
                { name: "Para Email", desc: "Comprime para correo.", href: "/es/comprimir-pdf-para-email", icon: Compress },
                { name: "Sin Perder Calidad", desc: "Compresion inteligente.", href: "/es/comprimir-pdf-sin-perder-calidad", icon: Compress },
                { name: "PDF con Imagenes", desc: "Comprime imagenes.", href: "/es/comprimir-pdf-imagenes", icon: Compress },
                { name: "Dividir PDF", desc: "Divide documentos.", href: "/es/dividir-pdf", icon: Scissors },
                { name: "Unir PDF", desc: "Combina varios PDFs.", href: "/es/unir-pdf", icon: Merge },
                { name: "Aplanar PDF", desc: "Elimina capas y campos.", href: "/es/aplanar-pdf", icon: FileText },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col items-center text-center rounded-xl border border-gray-200 bg-white p-4 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#14D8C4] to-[#0FBFB0] rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    <tool.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#14D8C4] transition-colors mb-1">
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
                { q: "¿Como reduzco el tamano de un archivo PDF?", a: "Sube tu PDF a PDF.it y haz clic en Comprimir. La herramienta analiza tu documento y aplica compresion inteligente — optimizando imagenes, fuentes y estructuras internas para reducir el tamano del archivo de forma significativa." },
                { q: "¿Cuanto se puede reducir el tamano de un PDF?", a: "Los resultados dependen del contenido de tu PDF. Los documentos con muchas imagenes tipicamente ven reducciones del 50-80%. Los PDFs con mas texto suelen reducirse entre un 20-40%. Cada documento es diferente." },
                { q: "¿Reducir el tamano del PDF afecta la calidad?", a: "La compresion recomendada de PDF.it esta disenada para preservar la calidad visual. El texto permanece nitido y completamente legible. Las imagenes se optimizan de forma inteligente con diferencias practicamente imperceptibles." },
                { q: "¿Es seguro reducir el tamano de mi PDF en linea?", a: "Si. PDF.it procesa tu archivo en el navegador y elimina todos los archivos despues de la sesion. No almacenamos ni accedemos al contenido de tus documentos. Tu privacidad esta protegida." },
                { q: "¿Puedo reducir el tamano de un PDF desde mi telefono?", a: "Si. PDF.it funciona en cualquier navegador movil — iPhone, Android, iPad. Sube tu PDF, reduce su tamano y descarga el archivo mas pequeno directamente en tu dispositivo." },
                { q: "¿Que hago si mi PDF sigue siendo muy grande despues de reducirlo?", a: "Prueba dividir el PDF en secciones mas pequenas con nuestra herramienta Dividir PDF y comprime cada parte. Tambien puedes aplanar el PDF para eliminar capas ocultas, o eliminar paginas innecesarias para reducir aun mas el tamano." },
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
            <h2 className="text-2xl font-black mb-4">Reduce el Tamano de Tu PDF Ahora</h2>
            <p className="text-slate-300 text-lg mb-8">
              Haz tu PDF mas pequeno en segundos. Sin registro, sin instalacion, sin esperas.
            </p>
            <Link
              href="/es/reducir-tamano-pdf"
              className="inline-block bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Reducir Tamano de PDF
            </Link>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
