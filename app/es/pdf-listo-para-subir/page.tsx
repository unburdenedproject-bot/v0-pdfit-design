import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Upload, Zap, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "PDF Listo para Subir — Optimizar PDF para Portales | OmnisPDF",
  description:
    "Prepara tu PDF para subir con un clic. OmnisPDF aplana formularios, comprime el tamaño y corrige errores comunes — funciona con cualquier portal, sin registro.",
  alternates: {
    languages: {
      en: "/upload-ready-pdf",
      es: "/es/pdf-listo-para-subir",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué hace PDF Listo para Subir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Automáticamente aplana campos de formulario y anotaciones, comprime el tamaño del archivo y optimiza la estructura del PDF — todo en un clic. El resultado es un PDF limpio que funciona con cualquier portal de carga." }
    },
    {
      "@type": "Question",
      "name": "¿Por qué mi PDF es rechazado cuando lo subo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Las razones más comunes son: archivo muy grande, campos de formulario interactivos que no se muestran correctamente, funciones PDF no compatibles o estructura corrupta. PDF Listo para Subir corrige todo esto automáticamente." }
    },
    {
      "@type": "Question",
      "name": "¿Con qué portales funciona?",
      "acceptedAnswer": { "@type": "Answer", "text": "Con cualquier portal — formularios del gobierno, aplicaciones universitarias, sitios de empleo, solicitudes de visa, reclamos de seguro, trámites judiciales y más. El resultado es un PDF universalmente compatible." }
    },
    {
      "@type": "Question",
      "name": "¿Se preservan los datos de mi formulario?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Todos tus datos ingresados, firmas y anotaciones se fusionan permanentemente en el PDF. No se pierde nada — simplemente se vuelve no editable." }
    },
    {
      "@type": "Question",
      "name": "¿Es diferente a solo comprimir un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. La compresión solo reduce el tamaño del archivo. PDF Listo para Subir también aplana formularios, fusiona anotaciones y optimiza la estructura del PDF para prevenir rechazos causados por elementos interactivos." }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Las cuentas gratuitas tienen 10 conversiones por día con optimización automática. Las cuentas Pro tienen conversiones ilimitadas con controles avanzados como tamaño objetivo y nivel de compresión." }
    }
  ]
}

export default function PDFListoParaSubirPage() {
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
                <Upload className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PDF Listo para Subir</h1>
              <p className="text-xl text-slate-300 mb-8">
                Un clic para arreglar y optimizar tu PDF para cualquier portal de carga. Aplana formularios, comprime el tamaño y corrige errores comunes de rechazo — automáticamente.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Optimización en Un Clic</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-orange-500" /><span>Funciona con Cualquier Portal</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Upload Ready PDF"
          outputFormat="PDF"
          processingMessage="Making your PDF upload-ready..."
          successMessage="Your upload-ready PDF is ready!"
        />

        {/* What It Does */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Qué Pasa Cuando Haces Clic en PDF Listo para Subir</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Aplanar", desc: "Los campos de formulario, anotaciones y capas se fusionan en la página para que nada aparezca en blanco." },
                { step: "2", title: "Comprimir", desc: "El tamaño del archivo se reduce para cumplir con los límites de carga, manteniendo el texto nítido y legible." },
                { step: "3", title: "Optimizar", desc: "La estructura del PDF se limpia para máxima compatibilidad con portales de carga." },
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

        {/* About */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              ¿Cansado de que los portales rechacen tu PDF? La herramienta PDF Listo para Subir de OmnisPDF corrige los problemas más comunes en un clic — archivos demasiado grandes, campos de formulario en blanco, anotaciones no compatibles y funciones PDF incompatibles. El resultado es un PDF limpio y universalmente compatible que funciona en todas partes.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Aplana automáticamente campos de formulario para que los datos se muestren correctamente</li>
              <li>✓ Comprime el tamaño del archivo para portales con límites de carga</li>
              <li>✓ Corrige campos en blanco que aparecen en algunos visores PDF</li>
              <li>✓ Funciona con portales del gobierno, universidades, empleo y visas</li>
              <li>✓ Sin instalación — optimiza PDFs en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Trámites de Gobierno y Visas</h2>
              <p className="text-slate-600">
                Los portales del gobierno son estrictos con el formato y tamaño del PDF. PDF Listo para Subir asegura que tus formularios estén aplanados, comprimidos y compatibles — sin más envíos rechazados.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Solicitudes de Empleo y Trámites Universitarios</h2>
              <p className="text-slate-600">
                Los portales de recursos humanos y sistemas universitarios frecuentemente rechazan PDFs con campos de formulario interactivos o archivos muy grandes. Un clic hace que tu currículum, expediente o ensayo esté listo para subir.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Seguros, Trámites Legales y Judiciales</h2>
              <p className="text-slate-600">
                Los portales legales requieren PDFs planos y no editables con todas las firmas y anotaciones permanentemente incrustadas. PDF Listo para Subir maneja esto automáticamente.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Preparar un PDF para Subir</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a OmnisPDF.",
                "Haz clic en PDF Listo para Subir — el aplanado y la compresión se aplican automáticamente.",
                "Descarga tu PDF optimizado y súbelo a cualquier portal.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Comprimir a 5MB", href: "/es/comprimir-pdf-a-5mb", desc: "Cumple límites de 5MB" },
                { name: "Comprimir a 2MB", href: "/compress-pdf-to-2mb", desc: "Cumple límites de 2MB" },
                { name: "Aplanar PDF", href: "/es/aplanar-pdf", desc: "Solo aplanar formularios" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Solo reducir tamaño" },
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "¿Qué hace PDF Listo para Subir?", a: "Automáticamente aplana campos de formulario y anotaciones, comprime el tamaño del archivo y optimiza la estructura del PDF — todo en un clic. El resultado es un PDF limpio que funciona con cualquier portal de carga." },
                { q: "¿Por qué mi PDF es rechazado cuando lo subo?", a: "Las razones más comunes son: archivo muy grande, campos de formulario interactivos que no se muestran correctamente, funciones PDF no compatibles o estructura corrupta. PDF Listo para Subir corrige todo esto automáticamente." },
                { q: "¿Con qué portales funciona?", a: "Con cualquier portal — formularios del gobierno, aplicaciones universitarias, sitios de empleo, solicitudes de visa, reclamos de seguro, trámites judiciales y más. El resultado es un PDF universalmente compatible." },
                { q: "¿Se preservan los datos de mi formulario?", a: "Sí. Todos tus datos ingresados, firmas y anotaciones se fusionan permanentemente en el PDF. No se pierde nada — simplemente se vuelve no editable." },
                { q: "¿Es diferente a solo comprimir un PDF?", a: "Sí. La compresión solo reduce el tamaño del archivo. PDF Listo para Subir también aplana formularios, fusiona anotaciones y optimiza la estructura del PDF para prevenir rechazos causados por elementos interactivos." },
                { q: "¿Es gratis?", a: "Sí. Las cuentas gratuitas tienen 10 conversiones por día con optimización automática. Las cuentas Pro tienen conversiones ilimitadas con controles avanzados como tamaño objetivo y nivel de compresión." },
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
