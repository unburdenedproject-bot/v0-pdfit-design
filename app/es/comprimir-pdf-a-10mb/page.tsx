import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, Scissors, Upload } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF a 10MB — Reduce tu PDF a Menos de 10MB | PDF.it",
  description:
    "Comprime tu PDF a menos de 10MB. Ideal para portales de carga, formularios en linea y sistemas con limite de 10MB.",
  alternates: {
    languages: {
      en: "/compress-pdf-to-10mb",
      es: "/es/comprimir-pdf-a-10mb",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo comprimo un PDF a menos de 10MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a PDF.it y haz clic en Comprimir. La herramienta aplica compresión inteligente que optimiza imágenes, fuentes y estructuras internas para reducir el tamaño del archivo. La mayoría de los documentos se comprimen fácilmente por debajo de 10MB." }
    },
    {
      "@type": "Question",
      "name": "¿PDF.it garantiza que mi PDF quedará por debajo de 10MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "La compresión reduce drásticamente el tamaño del archivo, pero los resultados dependen del contenido del PDF. La mayoría de los documentos se comprimen muy por debajo de 10MB. Si tu archivo sigue siendo grande, prueba dividirlo primero y comprime cada parte por separado." }
    },
    {
      "@type": "Question",
      "name": "¿Qué plataformas tienen un límite de carga de 10MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Muchos portales de empleo, sistemas de gestión documental, plataformas educativas, formularios gubernamentales y servicios para compartir archivos establecen un límite de 10MB para la carga de documentos." }
    },
    {
      "@type": "Question",
      "name": "¿La compresión a 10MB afecta la calidad del documento?",
      "acceptedAnswer": { "@type": "Answer", "text": "La compresión recomendada de PDF.it está diseñada para preservar la calidad. El texto permanece nítido y completamente legible. Las imágenes se optimizan de forma inteligente con diferencias prácticamente imperceptibles." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo comprimir un PDF a 10MB desde mi teléfono?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en cualquier navegador móvil. Sube tu PDF, comprímelo y descarga el archivo más pequeño directamente en iPhone o Android." }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si mi PDF sigue superando los 10MB después de la compresión?",
      "acceptedAnswer": { "@type": "Answer", "text": "Intenta dividir el PDF en partes más pequeñas con nuestra herramienta Dividir PDF, luego comprime cada parte individualmente. También puedes eliminar páginas innecesarias o aplanar el PDF para reducir aún más el tamaño." }
    }
  ]
}

export default function ComprimirPDFA10MBPageEs() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema-comprimir-pdf-10mb-es"
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF a 10MB</h1>
              <p className="text-xl text-slate-300 mb-8">
                ¿Necesitas que tu PDF pese menos de 10MB? Muchos portales de empleo, plataformas educativas y sistemas de gestion tienen un limite de 10MB para la carga de archivos. PDF.it comprime tu PDF de forma inteligente para que cumpla con estos requisitos sin perder calidad.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Compresion Inteligente</span></div>
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
          processingMessage="Comprimiendo tu PDF a 10MB..."
          successMessage="¡Tu PDF de menos de 10MB esta listo!"
          compressionLevel="recommended"
        />

        {/* Common 10MB Limits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Plataformas con Limite de 10MB</h2>
            <p className="text-lg text-slate-600 mb-8">
              Muchas plataformas establecen un limite de 10MB para la carga de archivos. Si tu PDF supera este limite, no podras completar tu envio. PDF.it te ayuda a reducir el tamano de tu documento para cumplir con estos requisitos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <Upload className="h-5 w-5 text-orange-500" />
                  <h3 className="font-bold text-slate-900">Portales de Empleo</h3>
                </div>
                <p className="text-slate-600 text-sm">LinkedIn, Indeed, Glassdoor y portales de empleo locales frecuentemente limitan los CVs y documentos adjuntos a 10MB.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <Upload className="h-5 w-5 text-orange-500" />
                  <h3 className="font-bold text-slate-900">Sistemas de Gestion</h3>
                </div>
                <p className="text-slate-600 text-sm">Los sistemas de gestion documental, CRMs y plataformas empresariales suelen tener limites de 10MB por archivo.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <Upload className="h-5 w-5 text-orange-500" />
                  <h3 className="font-bold text-slate-900">Plataformas Educativas</h3>
                </div>
                <p className="text-slate-600 text-sm">Moodle, Canvas, Blackboard y otras plataformas LMS a menudo restringen las cargas de archivos a 10MB.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <Upload className="h-5 w-5 text-orange-500" />
                  <h3 className="font-bold text-slate-900">Formularios Gubernamentales</h3>
                </div>
                <p className="text-slate-600 text-sm">Tramites, solicitudes y formularios oficiales en linea frecuentemente establecen un limite de 10MB para documentos adjuntos.</p>
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
                <h3 className="text-xl font-black text-slate-900 mb-3">Solicitudes de Empleo</h3>
                <p className="text-slate-600">
                  Tu CV, carta de presentacion y documentos de respaldo necesitan caber dentro del limite de 10MB de los portales de empleo. Comprime tus PDFs para enviar solicitudes sin problemas.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Documentos Legales</h3>
                <p className="text-slate-600">
                  Contratos, acuerdos y documentos notariales con firmas e imagenes escaneadas pueden superar los 10MB. Comprímelos para subirlos a plataformas legales o enviarlos por correo.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Formularios Gubernamentales</h3>
                <p className="text-slate-600">
                  Los tramites en linea — impuestos, permisos, solicitudes de visa — frecuentemente requieren documentos de menos de 10MB. Comprime tus PDFs para completar tus envios exitosamente.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Envios Academicos</h3>
                <p className="text-slate-600">
                  Tesis, trabajos de investigacion y tareas academicas con graficos e imagenes pueden ser muy pesados. Comprimelos para subirlos a plataformas educativas dentro del limite de 10MB.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Comprimir un PDF a 10MB</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra y suelta tu PDF en PDF.it.",
                "Haz clic en Comprimir PDF — la compresion inteligente se aplica automaticamente.",
                "Descarga tu PDF mas pequeno. Si aun supera los 10MB, intenta dividir el archivo primero y luego comprime cada parte.",
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
                { name: "Comprimir a 5MB", desc: "Para limites de 5MB.", href: "/es/comprimir-pdf-a-5mb", icon: Compress },
                { name: "Comprimir a 2MB", desc: "Para limites de 2MB.", href: "/es/comprimir-pdf-a-2mb", icon: Compress },
                { name: "Comprimir a 1MB", desc: "Para limites de 1MB.", href: "/es/comprimir-pdf-a-1mb", icon: Compress },
                { name: "Comprimir PDF", desc: "Compresion estandar.", href: "/es/comprimir-pdf", icon: Compress },
                { name: "Dividir PDF", desc: "Divide si aun es grande.", href: "/es/dividir-pdf", icon: Scissors },
                { name: "Unir PDF", desc: "Combina varios PDFs.", href: "/es/unir-pdf", icon: Merge },
                { name: "Para Subir", desc: "Optimiza para carga.", href: "/es/comprimir-pdf-para-subir", icon: Compress },
                { name: "Compresion Rapida", desc: "Comprime al instante.", href: "/es/comprimir-pdf-rapido", icon: Compress },
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
                { q: "¿Como comprimo un PDF a menos de 10MB?", a: "Sube tu PDF a PDF.it y haz clic en Comprimir. La herramienta aplica compresion inteligente que optimiza imagenes, fuentes y estructuras internas para reducir el tamano del archivo. La mayoria de los documentos se comprimen facilmente por debajo de 10MB." },
                { q: "¿PDF.it garantiza que mi PDF quedara por debajo de 10MB?", a: "La compresion reduce drasticamente el tamano del archivo, pero los resultados dependen del contenido del PDF. La mayoria de los documentos se comprimen muy por debajo de 10MB. Si tu archivo sigue siendo grande, prueba dividirlo primero y comprime cada parte por separado." },
                { q: "¿Que plataformas tienen un limite de carga de 10MB?", a: "Muchos portales de empleo, sistemas de gestion documental, plataformas educativas, formularios gubernamentales y servicios para compartir archivos establecen un limite de 10MB para la carga de documentos." },
                { q: "¿La compresion a 10MB afecta la calidad del documento?", a: "La compresion recomendada de PDF.it esta disenada para preservar la calidad. El texto permanece nitido y completamente legible. Las imagenes se optimizan de forma inteligente con diferencias practicamente imperceptibles." },
                { q: "¿Puedo comprimir un PDF a 10MB desde mi telefono?", a: "Si. PDF.it funciona en cualquier navegador movil. Sube tu PDF, comprimelo y descarga el archivo mas pequeno directamente en iPhone o Android." },
                { q: "¿Que pasa si mi PDF sigue superando los 10MB despues de la compresion?", a: "Intenta dividir el PDF en partes mas pequenas con nuestra herramienta Dividir PDF, luego comprime cada parte individualmente. Tambien puedes eliminar paginas innecesarias o aplanar el PDF para reducir aun mas el tamano." },
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
            <h2 className="text-2xl font-black mb-4">Comprime Tu PDF a Menos de 10MB</h2>
            <p className="text-slate-300 text-lg mb-8">
              Reduce tu PDF para cumplir con limites de carga en segundos. Sin registro, sin instalacion, sin esperas.
            </p>
            <Link
              href="/es/comprimir-pdf-a-10mb"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Comprimir PDF a 10MB Ahora
            </Link>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
