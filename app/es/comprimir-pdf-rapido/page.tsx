import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF Rápido — Compresión Instantánea en Línea | OmnisPDF",
  description:
    "Comprime archivos PDF al instante en línea. Sin software, sin cuentas. Sube, comprime, descarga — listo en segundos.",
  alternates: {
    languages: {
      en: "/compress-pdf-fast",
      es: "/es/comprimir-pdf-rapido",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué tan rápida es la compresión de OmnisPDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "La mayoría de los PDFs se comprimen en solo unos segundos. El tiempo de procesamiento depende del tamaño y la complejidad del archivo, pero los documentos típicos están listos para descargar casi inmediatamente después de hacer clic en Comprimir." }
    },
    {
      "@type": "Question",
      "name": "¿Necesito crear una cuenta para comprimir un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Puedes comprimir PDFs inmediatamente sin registrarte ni iniciar sesión. Solo sube tu archivo, haz clic en Comprimir y descarga el resultado. Los usuarios gratuitos tienen hasta 10 compresiones por día." }
    },
    {
      "@type": "Question",
      "name": "¿Necesito instalar algún software?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. OmnisPDF funciona completamente en tu navegador. No hay nada que descargar o instalar. Funciona en cualquier dispositivo — Mac, Windows, iPhone, Android, Linux, Chromebook." }
    },
    {
      "@type": "Question",
      "name": "¿Mi PDF está seguro cuando lo comprimo en línea?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Tus archivos se procesan de forma segura y se eliminan automáticamente al finalizar tu sesión. OmnisPDF no almacena ni comparte tus documentos." }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto se comprimirá mi PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los resultados dependen del contenido de tu PDF. Los documentos con imágenes y estructuras no optimizadas suelen ver reducciones significativas de tamaño. Los PDFs ya optimizados pueden ver reducciones menores." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo comprimir PDFs desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. OmnisPDF funciona en cualquier navegador móvil — Safari, Chrome, Firefox o Samsung Internet. Sube desde tu galería o administrador de archivos, comprime y descarga el archivo más pequeño al instante." }
    }
  ]
}

export default function ComprimirPDFRapidoPageEs() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF Rápido</h1>
              <p className="text-xl text-slate-300 mb-8">
                Sin software que instalar, sin cuentas que crear. Sube tu PDF, haz clic en Comprimir y descarga el archivo más pequeño — listo en segundos. Funciona en cualquier dispositivo, cualquier navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Compresión Instantánea</span></div>
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
          processingMessage="Comprimiendo tu PDF..."
          successMessage="¡Tu PDF comprimido está listo!"
          compressionLevel="recommended"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">¿Por Qué Usar OmnisPDF para Compresión Rápida?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Cuando necesitas un PDF más pequeño ahora mismo, lo último que quieres es descargar software, crear una cuenta o esperar en una cola. OmnisPDF es una herramienta basada en el navegador que comprime tu PDF en segundos — sin instalación, sin registro, sin complicaciones. Solo sube, comprime y descarga.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Comprime PDFs en segundos — sin esperas</li>
              <li>&#10003; Sin software que instalar o actualizar</li>
              <li>&#10003; Sin cuenta requerida para compresión básica</li>
              <li>&#10003; Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>&#10003; Los archivos se eliminan automáticamente después de tu sesión</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comunes</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Adjuntos de Último Minuto</h3>
                <p className="text-slate-600">
                  Tu PDF es demasiado grande para adjuntarlo y el email necesita enviarse ya. Comprímelo en segundos y adjunta la versión más pequeña — sin necesidad de instalar nada ni crear una cuenta.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Compartir Archivos Rápido</h3>
                <p className="text-slate-600">
                  ¿Necesitas compartir un PDF por Slack, Teams o una app de mensajería? Comprímelo rápidamente para que se suba y descargue más rápido para todos los involucrados.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Entregas con Fecha Límite</h3>
                <p className="text-slate-600">
                  ¿Los portales de subida fallan porque tu archivo es demasiado grande? Comprime tu PDF en segundos para cumplir con la fecha límite sin buscar software de escritorio.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Compresión Desde el Móvil</h3>
                <p className="text-slate-600">
                  ¿Lejos de tu computadora? Comprime PDFs directamente desde tu celular o tablet usando cualquier navegador móvil. No necesitas descargar ninguna app — solo abre OmnisPDF y listo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Comprimir un PDF Rápido</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra y suelta tu PDF en OmnisPDF — toma solo un segundo.",
                "Haz clic en Comprimir PDF — tu archivo se procesa en segundos.",
                "Descarga tu PDF más pequeño al instante. Si necesitas aún más compresión, prueba el modo extremo o divide el archivo primero.",
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
                { name: "Comprimir a 5MB", desc: "Para límites de 5MB.", href: "/es/comprimir-pdf-a-5mb", icon: Compress },
                { name: "Comprimir para Email", desc: "Para límites de adjuntos.", href: "/es/comprimir-pdf-para-email", icon: Compress },
                { name: "Dividir PDF", desc: "Divide documentos grandes.", href: "/es/dividir-pdf", icon: Scissors },
                { name: "Unir PDF", desc: "Combina varios PDFs.", href: "/es/unir-pdf", icon: Merge },
                { name: "Aplanar PDF", desc: "Elimina campos de formulario.", href: "/es/aplanar-pdf", icon: FileText },
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
                { q: "¿Qué tan rápida es la compresión de OmnisPDF?", a: "La mayoría de los PDFs se comprimen en solo unos segundos. El tiempo de procesamiento depende del tamaño y la complejidad del archivo, pero los documentos típicos están listos para descargar casi inmediatamente después de hacer clic en Comprimir." },
                { q: "¿Necesito crear una cuenta para comprimir un PDF?", a: "No. Puedes comprimir PDFs inmediatamente sin registrarte ni iniciar sesión. Solo sube tu archivo, haz clic en Comprimir y descarga el resultado. Los usuarios gratuitos tienen hasta 10 compresiones por día." },
                { q: "¿Necesito instalar algún software?", a: "No. OmnisPDF funciona completamente en tu navegador. No hay nada que descargar o instalar. Funciona en cualquier dispositivo — Mac, Windows, iPhone, Android, Linux, Chromebook." },
                { q: "¿Mi PDF está seguro cuando lo comprimo en línea?", a: "Sí. Tus archivos se procesan de forma segura y se eliminan automáticamente al finalizar tu sesión. OmnisPDF no almacena ni comparte tus documentos." },
                { q: "¿Cuánto se comprimirá mi PDF?", a: "Los resultados dependen del contenido de tu PDF. Los documentos con imágenes y estructuras no optimizadas suelen ver reducciones significativas de tamaño. Los PDFs ya optimizados pueden ver reducciones menores." },
                { q: "¿Puedo comprimir PDFs desde mi celular?", a: "Sí. OmnisPDF funciona en cualquier navegador móvil — Safari, Chrome, Firefox o Samsung Internet. Sube desde tu galería o administrador de archivos, comprime y descarga el archivo más pequeño al instante." },
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
            <h2 className="text-2xl font-black mb-4">¿Necesitas Comprimir un PDF Ahora Mismo?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Sube, comprime, descarga — listo en segundos. Sin registro, sin instalación, sin esperas.
            </p>
            <Link
              href="/es/comprimir-pdf-rapido"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Comprimir PDF Ahora
            </Link>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
