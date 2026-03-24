import Script from "next/script"
import Link from "next/link"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { EsignInterface } from "@/components/esign-interface"
import { PenTool, Zap, Eye, Shield, FileText, Lock, Layers, Repeat, ArrowLeftRight, Merge } from "lucide-react"

export const metadata = {
  title: "Firma Electrónica de PDFs en Línea — Agrega Firmas a Documentos PDF | PDF.it",
  description:
    "Firma documentos PDF en línea con un editor visual. Dibuja, escribe o sube tu firma y colócala en cualquier parte de cualquier página. Descarga tu PDF firmado al instante. Función Business de PDF.it.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es la Firma Electrónica?",
      "acceptedAnswer": { "@type": "Answer", "text": "La Firma Electrónica te permite agregar firmas electrónicas a documentos PDF. Puedes dibujar tu firma, escribir tu nombre en una fuente de firma, o subir una imagen de tu firma. Luego colócala en cualquier parte del documento y descarga el PDF firmado." }
    },
    {
      "@type": "Question",
      "name": "¿La firma queda incrustada en el PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. La firma se incrusta permanentemente en el PDF como parte del documento. Aparece en la página y se incluye cuando el PDF se imprime o comparte." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo firmar múltiples páginas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Puedes navegar por todas las páginas de tu PDF y colocar firmas en cualquier página. También puedes colocar múltiples firmas en una sola página." }
    },
    {
      "@type": "Question",
      "name": "¿Qué opciones de firma están disponibles?",
      "acceptedAnswer": { "@type": "Answer", "text": "Puedes dibujar tu firma a mano alzada usando el mouse o trackpad, escribir tu nombre y elegir entre diferentes fuentes de firma, o subir una imagen de tu firma manuscrita." }
    },
    {
      "@type": "Question",
      "name": "¿La Firma Electrónica es gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "La Firma Electrónica está disponible como función del plan Business por $13.99/mes. Incluye el editor de firmas junto con otras herramientas Business como Automatización de Flujos, Redacción de PDF, Comparar PDF y Extracción de Tablas." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo agrego una firma a un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF, crea tu firma dibujando, escribiendo o subiendo una imagen. Luego haz clic en Colocar en PDF y haz clic en el lugar del documento donde quieres que aparezca la firma. Cuando termines, haz clic en Aplicar firmas para incrustarlas y descargar tu PDF firmado." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo quitar una firma colocada antes de aplicar?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Antes de aplicar las firmas, puedes eliminar cualquier firma colocada desde la lista lateral. Una vez aplicadas y descargadas, las firmas quedan incrustadas permanentemente." }
    },
  ]
}

export default function EsignPageEs() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <PenTool className="h-10 w-10 text-white" />
              </div>
              <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                Business
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Firma Electrónica de PDFs</h1>
              <p className="text-xl text-slate-300 mb-4">
                Agrega firmas electrónicas a cualquier documento PDF. Dibuja tu firma, escribe tu nombre en una fuente de firma, o sube una imagen de tu firma manuscrita. Colócala exactamente donde la necesites y descarga el PDF firmado al instante.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                Firma contratos, acuerdos, formularios, cartas y cualquier otro documento PDF sin imprimir, escanear o enviar por correo.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><PenTool className="h-4 w-4 text-indigo-400" /><span>Dibuja, Escribe o Sube</span></div>
                <div className="flex items-center gap-2"><Eye className="h-4 w-4 text-indigo-400" /><span>Colocación Visual</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-indigo-400" /><span>Soporte Multi-Página</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* eSign Interface */}
        <EsignInterface locale="es" />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Cómo Funciona</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Sube tu PDF", desc: "Arrastra y suelta tu PDF en el área de carga. El documento se abre en el editor de firmas para que puedas ver cada página." },
                { step: "2", title: "Crea tu Firma", desc: "Dibuja tu firma a mano alzada, escribe tu nombre y elige un estilo de fuente, o sube una imagen de tu firma manuscrita." },
                { step: "3", title: "Coloca y Aplica", desc: "Haz clic en Colocar en PDF, luego haz clic en el documento donde quieres la firma. Aplica todas las firmas y descarga tu PDF firmado." },
              ].map((item) => (
                <div key={item.step} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                  <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-2">{item.title}</div>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Sign PDFs Online */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4 text-center">¿Por Qué Firmar PDFs en Línea?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-600 text-center">
                Firmar documentos ya no requiere imprimir, firmar a mano, escanear y enviar por correo. Con una herramienta de firma electrónica en línea, puedes agregar tu firma directamente al PDF en segundos y enviarlo inmediatamente.
              </p>
              <p className="text-slate-600 text-center">
                Esto ahorra tiempo, reduce el desperdicio de papel y te permite firmar documentos desde cualquier lugar — ya sea en tu escritorio, en movimiento o trabajando remotamente.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comunes</h2>
            <div className="space-y-10">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Contratos y Acuerdos</h3>
                <p className="text-slate-600">
                  Firma contratos comerciales, acuerdos de freelance, contratos con proveedores y documentos de asociación. Coloca tu firma en la línea designada y devuelve el PDF firmado sin demoras.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Formularios de Recursos Humanos</h3>
                <p className="text-slate-600">
                  Firma cartas de oferta, formularios de incorporación, acuerdos de confidencialidad, formularios fiscales y reconocimientos de políticas. Nuevos empleados y gerentes pueden firmar y devolver documentos rápidamente sin imprimir.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Bienes Raíces y Arrendamientos</h3>
                <p className="text-slate-600">
                  Firma contratos de alquiler, renovaciones de arrendamiento, divulgaciones de propiedades y documentos de cierre. Agrega tu firma en cada página requerida y envía el PDF completado a tu agente o arrendador.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Formularios Escolares y Gubernamentales</h3>
                <p className="text-slate-600">
                  Firma permisos, formularios de inscripción, documentos de ayuda financiera, solicitudes gubernamentales y formularios de consentimiento. Completa y devuelve formularios firmados sin visitar una oficina.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "¿Qué es la Firma Electrónica?", a: "Te permite agregar firmas electrónicas a documentos PDF. Puedes dibujar, escribir o subir tu firma, colocarla en el documento y descargar el PDF firmado." },
                { q: "¿La firma queda incrustada en el PDF?", a: "Sí. La firma se incrusta permanentemente en el PDF. Aparece en la página y se incluye al imprimir o compartir." },
                { q: "¿Puedo firmar múltiples páginas?", a: "Sí. Puedes navegar por todas las páginas y colocar firmas en cualquier página. También puedes colocar múltiples firmas en una sola página." },
                { q: "¿Qué opciones de firma hay?", a: "Puedes dibujar a mano alzada, escribir tu nombre y elegir una fuente, o subir una imagen de tu firma manuscrita." },
                { q: "¿Es gratis?", a: "La Firma Electrónica está disponible como función del plan Business por $13.99/mes." },
                { q: "¿Cómo agrego una firma a un PDF?", a: "Sube tu PDF, crea tu firma dibujando, escribiendo o subiendo una imagen. Haz clic en Colocar en PDF y luego en el lugar donde quieres la firma. Cuando termines, haz clic en Aplicar firmas para incrustarlas y descargar el PDF firmado." },
                { q: "¿Puedo quitar una firma colocada antes de aplicar?", a: "Sí. Antes de aplicar las firmas, puedes quitar cualquier firma colocada desde la lista lateral. Una vez aplicadas y descargadas, las firmas quedan incrustadas permanentemente." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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
            <h2 className="text-2xl font-black mb-4">Firma PDFs en Segundos</h2>
            <p className="text-slate-300 text-lg mb-8">
              Deja de imprimir, escanear y enviar documentos solo para agregar una firma. Sube tu PDF, coloca tu firma y descarga el archivo firmado — todo desde tu navegador.
            </p>
            <Link
              href="/es/firma-electronica"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Empezar a Firmar
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Más Herramientas PDF</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Redacción PDF", desc: "Elimina permanentemente texto sensible de PDFs.", href: "/es/redaccion-pdf", icon: Shield },
                { name: "Proteger PDF", desc: "Agrega protección con contraseña.", href: "/es/proteger-pdf", icon: Lock },
                { name: "Aplanar PDF", desc: "Bloquea campos de formulario y anotaciones.", href: "/es/aplanar-pdf", icon: Layers },
                { name: "Unir PDF", desc: "Combina varios PDFs en uno solo.", href: "/es/unir-pdf", icon: Merge },
                { name: "Automatización", desc: "Encadena herramientas PDF en un flujo.", href: "/es/automatizacion", icon: Repeat },
                { name: "Comparar PDF", desc: "Compara dos PDFs lado a lado.", href: "/es/comparar-pdf", icon: ArrowLeftRight },
                { name: "Comprimir PDF", desc: "Reduce el tamaño sin perder calidad.", href: "/es/comprimir-pdf", icon: FileText },
                { name: "Dividir PDF", desc: "Divide un PDF en archivos separados.", href: "/es/dividir-pdf", icon: FileText },
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
      </main>
      <FooterEs />
    </div>
  )
}
