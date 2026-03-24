import Script from "next/script"
import Link from "next/link"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { RedactionInterface } from "@/components/redaction-interface"
import { Shield, Zap, Eye, Lock, FileText, Merge, Layers, Repeat, ArrowLeftRight } from "lucide-react"

export const metadata = {
  title: "Redacción de PDFs en Línea — Elimina Información Sensible Permanentemente | PDF.it",
  description:
    "Redacta permanentemente texto sensible, números de seguro social, direcciones y datos confidenciales de PDFs. Editor visual de redacción — dibuja cajas directamente sobre tu documento. Función Business de PDF.it.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es la redacción de PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "La redacción de PDF es el proceso de eliminar permanentemente información sensible de un PDF. A diferencia de colocar una caja negra sobre el texto, la redacción verdadera elimina el contenido subyacente para que no pueda ser recuperado." }
    },
    {
      "@type": "Question",
      "name": "¿La redacción es permanente?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Después de aplicar las redacciones, el contenido original se elimina permanentemente del PDF. Las áreas redactadas aparecen como cajas negras sólidas y el texto oculto debajo se elimina." }
    },
    {
      "@type": "Question",
      "name": "¿Qué información debo redactar?",
      "acceptedAnswer": { "@type": "Answer", "text": "Debes redactar cualquier información sensible o confidencial, incluyendo números de seguro social, direcciones, números de teléfono, datos bancarios, números de cuenta, información médica, detalles de casos y otra información de identificación personal." }
    },
    {
      "@type": "Question",
      "name": "¿En qué se diferencia la redacción de cubrir texto con una caja negra?",
      "acceptedAnswer": { "@type": "Answer", "text": "Una simple caja negra puede solo ocultar el texto visualmente mientras deja el contenido original en el archivo. La redacción adecuada de PDF elimina los datos reales debajo, haciéndolos inaccesibles para herramientas de búsqueda, copia y extracción." }
    },
    {
      "@type": "Question",
      "name": "¿La Redacción de PDF es gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "La Redacción de PDF está disponible como función del plan Business por $13.99/mes. Incluye el editor visual de redacción junto con otras herramientas Business como Automatización de Flujos, Extracción de Tablas, Comparar PDF y Firma Electrónica." }
    },
  ]
}

export default function PdfRedactionPageEs() {
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
              <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                Business
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Redacción de PDFs en Línea</h1>
              <p className="text-xl text-slate-300 mb-4">
                Elimina permanentemente información sensible de documentos PDF con una herramienta visual de redacción simple. Sube tu archivo, dibuja cajas de redacción sobre contenido confidencial y aplica redacciones permanentes para que el texto subyacente no pueda ser copiado, buscado o recuperado.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                Protege datos personales, información comercial confidencial, detalles de casos legales, registros médicos y otro contenido privado antes de compartir o archivar tus PDFs.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Eye className="h-4 w-4 text-red-400" /><span>Editor Visual</span></div>
                <div className="flex items-center gap-2"><Lock className="h-4 w-4 text-red-400" /><span>Eliminación Permanente</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-red-400" /><span>Soporte Multi-Página</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Redaction Interface */}
        <RedactionInterface locale="es" />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Cómo Funciona</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Sube tu PDF", desc: "Arrastra y suelta tu PDF en el área de carga para abrirlo en el editor de redacción." },
                { step: "2", title: "Dibuja Redacciones", desc: "Haz clic y arrastra para colocar cajas de redacción negras sobre el texto o áreas que quieres eliminar. Revisa cada página y agrega redacciones donde aparezca información sensible." },
                { step: "3", title: "Aplica y Descarga", desc: "Haz clic en Aplicar Redacción para eliminar permanentemente el contenido subyacente del PDF. Luego descarga tu archivo redactado, listo para compartir de forma segura." },
              ].map((item) => (
                <div key={item.step} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-2">{item.title}</div>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Use PDF Redaction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4 text-center">¿Por Qué Usar Redacción de PDF?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-600 text-center">
                La redacción adecuada de PDF hace más que ocultar texto visualmente. Elimina permanentemente la información subyacente del documento para que no pueda ser seleccionada, copiada, buscada o recuperada después.
              </p>
              <p className="text-slate-600 text-center">
                Esto hace que la redacción de PDF sea esencial para compartir documentos que contienen información personal, financiera, legal, médica o comercial confidencial.
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
                <h3 className="text-xl font-black text-slate-900 mb-3">Documentos Legales y Judiciales</h3>
                <p className="text-slate-600">
                  Redacta nombres de testigos, números de caso, firmas, direcciones y otra información sensible antes de archivar o compartir documentos legales. La redacción adecuada ayuda a proteger detalles confidenciales y cumplir requisitos de privacidad.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Recursos Humanos y Registros de Empleados</h3>
                <p className="text-slate-600">
                  Elimina números de seguro social, detalles salariales, direcciones, información de contacto y otros datos de empleados antes de enviar registros a auditores, proveedores o socios externos.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Salud y Cumplimiento</h3>
                <p className="text-slate-600">
                  Redacta nombres de pacientes, números de historia clínica, detalles de tratamiento, fechas de nacimiento y otra información de salud protegida para cumplir con regulaciones de privacidad y proteger la privacidad del paciente.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Documentos Financieros y Comerciales</h3>
                <p className="text-slate-600">
                  Elimina números de cuenta bancaria, detalles de pago, identificaciones fiscales, facturas, datos de contratos y otra información comercial confidencial antes de compartir documentos interna o externamente.
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
                { q: "¿Qué es la redacción de PDF?", a: "Es el proceso de eliminar permanentemente información sensible de un PDF. A diferencia de una caja negra simple, la redacción verdadera elimina el contenido subyacente para que no pueda ser recuperado." },
                { q: "¿La redacción es permanente?", a: "Sí. Después de aplicar las redacciones, el contenido original se elimina permanentemente. Las áreas redactadas aparecen como cajas negras sólidas y el texto oculto se elimina." },
                { q: "¿Qué información debo redactar?", a: "Cualquier información sensible: números de seguro social, direcciones, números de teléfono, datos bancarios, información médica, detalles de casos y otra información de identificación personal." },
                { q: "¿En qué se diferencia de cubrir con una caja negra?", a: "Una caja negra simple solo oculta visualmente. La redacción adecuada elimina los datos reales, haciéndolos inaccesibles para herramientas de búsqueda, copia y extracción." },
                { q: "¿Puedo redactar múltiples páginas?", a: "Sí. Puedes moverte por el documento página por página y agregar redacciones donde aparezca contenido sensible antes de aplicar todas las redacciones a la vez." },
                { q: "¿Es gratis?", a: "La Redacción de PDF está disponible como función del plan Business por $13.99/mes." },
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
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Redacta Información Sensible con Confianza</h2>
            <p className="text-slate-300 text-lg mb-8">
              Usa Redacción de PDF para eliminar de forma segura contenido confidencial de tus documentos antes de compartirlos, archivarlos o almacenarlos.
            </p>
            <Link
              href="/es/redaccion-pdf"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Empezar a Redactar
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Más Herramientas PDF</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Proteger PDF", desc: "Agrega protección con contraseña.", href: "/es/proteger-pdf", icon: Lock },
                { name: "Aplanar PDF", desc: "Bloquea campos de formulario y anotaciones.", href: "/es/aplanar-pdf", icon: Layers },
                { name: "Unir PDF", desc: "Combina varios PDFs en uno solo.", href: "/es/unir-pdf", icon: Merge },
                { name: "Automatización", desc: "Encadena herramientas PDF en un flujo.", href: "/es/automatizacion", icon: Repeat },
                { name: "Comparar PDF", desc: "Compara dos PDFs lado a lado.", href: "/es/comparar-pdf", icon: ArrowLeftRight },
                { name: "PDF a JPG", desc: "Convierte páginas PDF a imágenes JPG.", href: "/es/pdf-a-jpg", icon: FileText },
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
