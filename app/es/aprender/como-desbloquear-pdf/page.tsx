import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Unlock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Desbloquear un PDF en Linea (Quitar Restricciones) | PDF.it",
  description:
    "Aprende como desbloquear un PDF y quitar restricciones de impresion, copia y edicion. Guia paso a paso para eliminar contrasenas de PDF en linea — rapido y gratis.",
  keywords: "desbloquear pdf en linea, quitar restricciones pdf, desbloquear pdf para editar, eliminar contrasena pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como puedo desbloquear un PDF en linea gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF bloqueado a la herramienta Desbloquear PDF de PDF.it, ingresa la contrasena si se te solicita, y descarga la version sin restricciones. No necesitas instalar software — funciona directamente en tu navegador." }
    },
    {
      "@type": "Question",
      "name": "Que restricciones de PDF se pueden eliminar?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it puede eliminar restricciones de permisos que impiden imprimir, copiar texto, editar y anotar. Si el PDF tiene una contrasena de apertura (necesaria para ver el archivo), deberas ingresarla primero." }
    },
    {
      "@type": "Question",
      "name": "Es legal desbloquear un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si eres el propietario del documento o tienes autorizacion para acceder a el, eliminar las restricciones es perfectamente legal. PDF.it esta disenado para usuarios que necesitan desbloquear sus propios archivos — por ejemplo, cuando estableciste una contrasena y luego necesitas eliminarla." }
    },
    {
      "@type": "Question",
      "name": "Desbloquear un PDF cambia su contenido?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Desbloquear un PDF solo elimina las restricciones de seguridad. El contenido, el diseno, las imagenes y el formato permanecen exactamente iguales. Tu documento se vera identico — simplemente ya no tendra restricciones." }
    },
    {
      "@type": "Question",
      "name": "Puedo desbloquear un PDF sin la contrasena?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si el PDF solo tiene restricciones de permisos (sin contrasena de apertura), PDF.it puede eliminar esas restricciones sin necesitar una contrasena. Si el PDF requiere una contrasena para abrirse, deberas proporcionarla." }
    },
    {
      "@type": "Question",
      "name": "El desbloqueo funciona en todos los archivos PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it funciona con cifrado PDF estandar (40 bits, 128 bits y AES de 256 bits). Maneja la mayoria de los PDF creados por Adobe Acrobat, Microsoft Office, escaneres y otras herramientas comunes." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Desbloquear un PDF en Linea",
  "description": "Elimina las restricciones de PDF en 3 simples pasos con PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Sube tu PDF bloqueado",
      "text": "Ve a la herramienta Desbloquear PDF de PDF.it y sube el archivo PDF que tiene restricciones que deseas eliminar."
    },
    {
      "@type": "HowToStep",
      "name": "Ingresa la contrasena si es necesario",
      "text": "Si el PDF tiene una contrasena de apertura, ingresala cuando se te solicite. Si solo tiene restricciones de permisos, PDF.it lo manejara automaticamente."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga el PDF desbloqueado",
      "text": "Haz clic en Desbloquear y descarga tu PDF sin restricciones. Ahora puedes imprimir, copiar, editar y anotar el documento libremente."
    }
  ]
}

export default function ComoDesbloquearPDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <HeaderEs />
      <main>
        {/* Hero */}
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Desbloquear PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Como Desbloquear un PDF en Linea (Quitar Restricciones)</h1>
              <p className="text-xl text-slate-300">
                Tienes un PDF que no puedes imprimir, copiar o editar? Aqui te explicamos como eliminar las restricciones de PDF en segundos — sin necesidad de software.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <Unlock className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Listo para desbloquear? Salta la guia y ve directo a la herramienta.</p>
            </div>
            <Link
              href="/es/desbloquear-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Desbloquear PDF Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Que son las restricciones */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Que Son las Restricciones de PDF?</h2>
              <p className="text-slate-600 mb-4">
                Los archivos PDF pueden tener dos tipos de proteccion con contrasena. Entender la diferencia es clave para desbloquear tu documento:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Contrasena de apertura (contrasena de usuario).</strong> Esta impide que cualquier persona abra el PDF sin ingresar la contrasena correcta. Debes conocer esta contrasena para ver el archivo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Contrasena de permisos (contrasena de propietario).</strong> Esta te permite ver el PDF pero bloquea acciones especificas como imprimir, copiar texto, editar o anotar. Este es el tipo mas comun de restriccion que la gente necesita eliminar.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                La mayoria de los PDF bloqueados que encuentras tienen restricciones de permisos — puedes abrirlos y leerlos, pero no puedes imprimir o copiar texto. La herramienta <Link href="/es/desbloquear-pdf" className="text-[#14D8C4] hover:underline">Desbloquear PDF</Link> de PDF.it maneja ambos tipos.
              </p>
            </section>

            {/* Paso a paso */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Desbloquear un PDF (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Sube tu PDF bloqueado",
                    desc: "Ve a la herramienta Desbloquear PDF y arrastra tu archivo al area de carga, o haz clic para buscar. Los archivos de hasta 25MB son gratis — los usuarios Pro pueden subir archivos de hasta 200MB.",
                  },
                  {
                    title: "Ingresa la contrasena si es necesario",
                    desc: "Si el PDF tiene una contrasena de apertura, se te pedira que la ingreses. Si el archivo solo tiene restricciones de permisos (puedes verlo pero no puedes imprimir o copiar), PDF.it las elimina automaticamente — no necesitas ingresar contrasena.",
                  },
                  {
                    title: "Descarga el PDF desbloqueado",
                    desc: "Haz clic en Desbloquear y descarga tu archivo sin restricciones. Ahora puedes imprimir, copiar texto, editar, completar formularios y hacer lo que necesites con el documento.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Razones comunes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Razones Comunes para Desbloquear PDF</h2>
              <p className="text-slate-600 mb-4">
                Las restricciones de PDF se agregan frecuentemente con buenas intenciones, pero pueden convertirse en un obstaculo cuando legitimamente necesitas trabajar con el archivo:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Imprimir para una reunion.</strong> Tu colega envio un informe como PDF restringido y necesitas imprimir copias para una presentacion. Usa PDF.it para eliminar la restriccion de impresion.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Copiar texto para investigacion.</strong> Los trabajos academicos o documentos gubernamentales a veces tienen restricciones de copia. Desbloquea el PDF, luego copia el texto que necesitas para citas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Editar un documento que creaste.</strong> Pusiste una contrasena a un PDF hace meses y ahora necesitas hacer cambios. Subelo a la herramienta <Link href="/es/desbloquear-pdf" className="text-[#14D8C4] hover:underline">Desbloquear PDF</Link>, ingresa tu contrasena y obtiene una version editable.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Completar formularios.</strong> Algunos formularios PDF estan bloqueados, impidiendo que escribas en los campos. Desbloquear el PDF te permite completar el formulario y guardar tus cambios.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">5.</span>
                  <span><strong>Convertir a otro formato.</strong> Si necesitas convertir un PDF bloqueado a Word o Excel, desbloquealo primero con PDF.it.</span>
                </li>
              </ul>
            </section>

            {/* Que hacer despues */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Que Hacer Despues de Desbloquear Tu PDF</h2>
              <p className="text-slate-600 mb-4">
                Una vez que tu PDF esta desbloqueado, tienes control total. Aqui hay algunos pasos utiles:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Comprimir el archivo.</strong> Si el PDF desbloqueado es demasiado grande para email, usa <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> para reducir el tamano del archivo.</li>
                <li>&#10003; <strong>Agregar nueva proteccion.</strong> Necesitas volver a proteger el archivo con una contrasena diferente? Usa <Link href="/es/proteger-pdf" className="text-[#14D8C4] hover:underline">Proteger PDF</Link> para establecer tus propios permisos.</li>
                <li>&#10003; <strong>Aplanar el archivo.</strong> Si el PDF tiene campos de formulario o anotaciones, usa <Link href="/es/aplanar-pdf" className="text-[#14D8C4] hover:underline">Aplanar PDF</Link> para fijar esos elementos antes de compartir.</li>
              </ul>
            </section>

            {/* Seguridad */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Es Seguro Desbloquear PDF en Linea?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Tus Archivos Se Procesan de Forma Segura</h3>
                  <p className="text-slate-600">
                    PDF.it procesa tus archivos a traves de una conexion cifrada (HTTPS) y los elimina automaticamente del servidor despues del procesamiento. Tus documentos nunca se almacenan permanentemente ni se comparten con nadie.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Consideraciones Legales</h3>
                  <p className="text-slate-600">
                    Desbloquear PDF que posees o para los que tienes autorizacion de acceso es completamente legal. PDF.it esta disenado para casos de uso legitimos — eliminar restricciones de tus propios archivos, acceder a documentos compartidos por colegas, o recuperar acceso a archivos donde olvidaste la contrasena.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Cuando Usar Proteger en Su Lugar</h3>
                  <p className="text-slate-600">
                    Si estas creando PDF y quieres controlar quien puede imprimir o editarlos, usa <Link href="/es/proteger-pdf" className="text-[#14D8C4] hover:underline">Proteger PDF</Link> para agregar tu propia contrasena y permisos. Esto te da control total sobre la seguridad de tu documento.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Listo para Desbloquear Tu PDF?</h2>
            <p className="text-slate-300 mb-6">Elimina las restricciones y obtiene acceso completo a tu documento en segundos — gratis, sin necesidad de registro.</p>
            <Link
              href="/es/desbloquear-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Unlock className="h-5 w-5" /> Desbloquear PDF Ahora
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Desbloquear un PDF para Imprimir (Quitar Restricciones de Impresion)", href: "/es/aprender/desbloquear-pdf-para-imprimir" },
                { title: "Olvidaste Tu Contrasena de PDF? Esto Es Lo Que Puedes Hacer", href: "/es/aprender/desbloquear-pdf-contrasena-olvidada" },
                { title: "Desbloquear un PDF en Tu Telefono (iPhone y Android)", href: "/es/aprender/desbloquear-pdf-en-movil" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "Como puedo desbloquear un PDF en linea gratis?", a: "Sube tu PDF bloqueado a la herramienta Desbloquear PDF de PDF.it, ingresa la contrasena si se te solicita, y descarga la version sin restricciones. No necesitas instalar software — funciona directamente en tu navegador." },
                { q: "Que restricciones de PDF se pueden eliminar?", a: "PDF.it puede eliminar restricciones de permisos que impiden imprimir, copiar texto, editar y anotar. Si el PDF tiene una contrasena de apertura (necesaria para ver el archivo), deberas ingresarla primero." },
                { q: "Es legal desbloquear un PDF?", a: "Si eres el propietario del documento o tienes autorizacion para acceder a el, eliminar las restricciones es perfectamente legal. PDF.it esta disenado para usuarios que necesitan desbloquear sus propios archivos." },
                { q: "Desbloquear un PDF cambia su contenido?", a: "No. Desbloquear un PDF solo elimina las restricciones de seguridad. El contenido, el diseno, las imagenes y el formato permanecen exactamente iguales." },
                { q: "Puedo desbloquear un PDF sin la contrasena?", a: "Si el PDF solo tiene restricciones de permisos (sin contrasena de apertura), PDF.it puede eliminar esas restricciones sin necesitar una contrasena. Si el PDF requiere una contrasena para abrirse, deberas proporcionarla." },
                { q: "El desbloqueo funciona en todos los archivos PDF?", a: "PDF.it funciona con cifrado PDF estandar (40 bits, 128 bits y AES de 256 bits). Maneja la mayoria de los PDF creados por Adobe Acrobat, Microsoft Office, escaneres y otras herramientas comunes." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
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
