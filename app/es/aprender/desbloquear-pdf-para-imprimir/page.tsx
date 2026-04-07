import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Unlock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Desbloquear un PDF para Imprimir (Quitar Restricciones de Impresion) | PDF.it",
  description:
    "No puedes imprimir un PDF? Aprende como eliminar las restricciones de impresion de un archivo PDF en linea. Guia paso a paso para desbloquear PDF para imprimir — rapido, gratis, sin software.",
  keywords: "desbloquear pdf para imprimir, pdf no imprime, quitar restriccion impresion pdf, habilitar impresion pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Por que no puedo imprimir mi PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Tu PDF probablemente tiene una restriccion de permisos establecida por el creador que desactiva la impresion. Esto se hace a traves de la configuracion de seguridad del PDF e impide que todos los usuarios impriman el documento, aunque puedan verlo en pantalla." }
    },
    {
      "@type": "Question",
      "name": "Como elimino las restricciones de impresion de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube el PDF a la herramienta Desbloquear PDF de PDF.it. Detectara y eliminara automaticamente la restriccion de impresion. Descarga el archivo desbloqueado e imprimelo normalmente desde cualquier lector de PDF." }
    },
    {
      "@type": "Question",
      "name": "Necesito la contrasena para desbloquear un PDF para imprimir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si el PDF solo tiene restricciones de permisos (puedes ver pero no imprimir), PDF.it puede frecuentemente eliminar la restriccion de impresion sin necesitar una contrasena. Si el PDF requiere una contrasena para abrirse, necesitaras esa contrasena primero." }
    },
    {
      "@type": "Question",
      "name": "La calidad de impresion cambia despues de desbloquear?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Desbloquear un PDF solo elimina la restriccion de seguridad — no cambia el contenido, la resolucion ni la calidad. Tu documento impreso se vera exactamente como el creador lo diseno." }
    },
    {
      "@type": "Question",
      "name": "Puedo desbloquear un PDF para imprimir desde mi telefono?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it funciona en cualquier navegador movil. Sube el PDF, desbloquealo y descarga la version imprimible. Luego puedes imprimirlo usando la funcion de impresion integrada de tu telefono o transferirlo a una computadora." }
    },
    {
      "@type": "Question",
      "name": "Es legal eliminar restricciones de impresion de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si tienes acceso legitimo al documento y necesitas imprimirlo para uso personal, educativo o empresarial, eliminar la restriccion de impresion es legal. PDF.it esta disenado para usuarios que necesitan imprimir sus propios documentos o archivos compartidos con ellos." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Desbloquear un PDF para Imprimir",
  "description": "Elimina las restricciones de impresion de un PDF en 3 simples pasos con PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Sube el PDF restringido",
      "text": "Ve a la herramienta Desbloquear PDF de PDF.it y sube el archivo PDF que no te permite imprimir."
    },
    {
      "@type": "HowToStep",
      "name": "Elimina la restriccion de impresion",
      "text": "PDF.it detecta automaticamente la restriccion de impresion y la elimina. Si el archivo tiene una contrasena de apertura, ingresala cuando se te solicite."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga e imprime",
      "text": "Descarga el PDF desbloqueado y abrelo en cualquier lector de PDF. Ahora puedes imprimirlo normalmente usando Ctrl+P o Archivo > Imprimir."
    }
  ]
}

export default function DesbloquearPDFParaImprimirPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Desbloquear un PDF para Imprimir (Quitar Restricciones de Impresion)</h1>
              <p className="text-xl text-slate-300">
                Presionaste &quot;Imprimir&quot; y no paso nada? Tu PDF probablemente tiene una restriccion de impresion. Aqui te explicamos como eliminarla en menos de un minuto.
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
              <p className="text-slate-700 font-semibold">Necesitas imprimir ahora? Salta la guia y desbloquea tu PDF.</p>
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

            {/* Por que no imprime */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Tu PDF No Se Imprime</h2>
              <p className="text-slate-600 mb-4">
                Cuando intentas imprimir un PDF y no sucede nada — o la opcion de imprimir esta desactivada — es porque el creador del PDF agrego una restriccion de permisos. Esta es una funcion de seguridad integrada en el formato PDF que permite a los autores controlar lo que los lectores pueden hacer con el archivo.
              </p>
              <p className="text-slate-600 mb-4">
                Sintomas comunes de un PDF con restriccion de impresion:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>El boton de imprimir esta desactivado</strong> en Adobe Reader, el visor de PDF de Chrome o Vista Previa en Mac.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Aparece un mensaje de error</strong> diciendo &quot;La impresion no esta permitida&quot; o &quot;Este documento tiene restricciones que impiden la impresion.&quot;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Ctrl+P o Cmd+P no hace nada</strong> cuando el PDF esta abierto en tu visor.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Puedes ver y desplazarte</strong> por el documento normalmente, pero cualquier intento de imprimir falla.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                La buena noticia: esta es una restriccion de software, no un problema de hardware. PDF.it puede eliminarla en segundos.
              </p>
            </section>

            {/* Paso a paso */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Desbloquear un PDF para Imprimir (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Sube el PDF restringido",
                    desc: "Ve a la herramienta Desbloquear PDF de PDF.it y arrastra tu archivo al area de carga. La herramienta acepta archivos de hasta 25MB gratis — los usuarios Pro pueden subir archivos de hasta 200MB.",
                  },
                  {
                    title: "Deja que PDF.it elimine la restriccion",
                    desc: "PDF.it detecta automaticamente la restriccion de impresion y la elimina. Si el PDF tambien requiere una contrasena para abrirse (no solo para imprimir), deberas ingresar esa contrasena. La mayoria de los PDF con restriccion de impresion no requieren contrasena de apertura.",
                  },
                  {
                    title: "Descarga e imprime",
                    desc: "Descarga el PDF desbloqueado y abrelo en cualquier lector de PDF — Adobe Reader, Chrome, Vista Previa o cualquier otra aplicacion. Usa Ctrl+P (Windows) o Cmd+P (Mac) para imprimir normalmente. El boton de imprimir ya no estara desactivado.",
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

            {/* Quien lo necesita */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Quien Necesita Desbloquear PDF para Imprimir?</h2>
              <p className="text-slate-600 mb-4">
                Las restricciones de impresion son mas comunes de lo que imaginas. Aqui hay escenarios reales donde la gente encuentra este problema:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Estudiantes imprimiendo apuntes.</strong> Los profesores a veces distribuyen PDF con restricciones de impresion para desalentar la redistribucion. Si necesitas una copia fisica para estudiar, desbloquea el PDF primero.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Empleados imprimiendo informes.</strong> Los informes de la empresa, documentos de recursos humanos o manuales de capacitacion pueden tener restricciones de impresion que hacen imposible repartir copias fisicas en reuniones.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Personas imprimiendo formularios gubernamentales.</strong> Algunas agencias gubernamentales distribuyen formularios PDF que deben completarse y enviarse en papel, pero accidentalmente dejan habilitadas las restricciones de impresion.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Cualquiera imprimiendo recibos o boletos.</strong> Los boletos electronicos, confirmaciones de reserva y facturas a veces vienen como PDF con restriccion de impresion, haciendo imposible producir una copia fisica.</span>
                </li>
              </ul>
            </section>

            {/* Consejos para imprimir */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos para Imprimir Tu PDF Desbloqueado</h2>
              <p className="text-slate-600 mb-4">
                Una vez que hayas eliminado la restriccion de impresion, aqui hay algunos consejos para obtener los mejores resultados:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Verifica el tamano de pagina.</strong> Asegurate de que tu impresora este configurada con el mismo tamano de pagina que el PDF (generalmente A4 o Carta). Tamanos no coincidentes pueden cortar contenido o agregar margenes no deseados.</li>
                <li>&#10003; <strong>Usa &quot;Ajustar a pagina&quot; en la configuracion de impresion.</strong> Esto asegura que todo el contenido de la pagina se imprima sin cortarse, incluso si las dimensiones del PDF no coinciden exactamente con el tamano de tu papel.</li>
                <li>&#10003; <strong>Imprime una pagina de prueba primero.</strong> Antes de imprimir un documento de 50 paginas, imprime la pagina 1 para verificar que todo se ve correcto.</li>
                <li>&#10003; <strong>Comprime antes de imprimir archivos grandes.</strong> Si el PDF es muy grande (50MB+), puede tardar mucho tiempo en enviarse a la impresora. Usa <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> para reducir el tamano primero — esto no afectara la calidad de impresion.</li>
                <li>&#10003; <strong>Aplana formularios antes de imprimir.</strong> Si el PDF tiene campos de formulario, usa <Link href="/es/aplanar-pdf" className="text-[#14D8C4] hover:underline">Aplanar PDF</Link> para asegurar que todos los datos completados se impriman correctamente.</li>
              </ul>
            </section>

            {/* Alternativas */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Otras Formas de Manejar PDF con Restriccion de Impresion</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Convertir a Imagen</h3>
                  <p className="text-slate-600">
                    Si solo necesitas imprimir unas pocas paginas, puedes convertir el PDF a imagenes usando <Link href="/es/pdf-a-jpg" className="text-[#14D8C4] hover:underline">PDF a JPG</Link>, luego imprimir las imagenes. Esto funciona como solucion alternativa pero la calidad puede ser ligeramente menor que imprimir el PDF directamente.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Pedir al Remitente una Version Desbloqueada</h3>
                  <p className="text-slate-600">
                    Si el PDF vino de un colega, cliente u organizacion, puedes pedirles que reenvien el archivo sin restricciones de impresion. Muchas personas agregan restricciones por defecto sin darse cuenta.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Listo para Imprimir Tu PDF?</h2>
            <p className="text-slate-300 mb-6">Elimina la restriccion de impresion y ten tu documento impreso en segundos — gratis, sin necesidad de registro.</p>
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
                { title: "Como Desbloquear un PDF en Linea (Quitar Restricciones)", href: "/es/aprender/como-desbloquear-pdf" },
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
                { q: "Por que no puedo imprimir mi PDF?", a: "Tu PDF probablemente tiene una restriccion de permisos establecida por el creador que desactiva la impresion. Esto se hace a traves de la configuracion de seguridad del PDF e impide que todos los usuarios impriman el documento, aunque puedan verlo en pantalla." },
                { q: "Como elimino las restricciones de impresion de un PDF?", a: "Sube el PDF a la herramienta Desbloquear PDF de PDF.it. Detectara y eliminara automaticamente la restriccion de impresion. Descarga el archivo desbloqueado e imprimelo normalmente desde cualquier lector de PDF." },
                { q: "Necesito la contrasena para desbloquear un PDF para imprimir?", a: "Si el PDF solo tiene restricciones de permisos (puedes ver pero no imprimir), PDF.it puede frecuentemente eliminar la restriccion de impresion sin necesitar una contrasena. Si el PDF requiere una contrasena para abrirse, necesitaras esa contrasena primero." },
                { q: "La calidad de impresion cambia despues de desbloquear?", a: "No. Desbloquear un PDF solo elimina la restriccion de seguridad — no cambia el contenido, la resolucion ni la calidad. Tu documento impreso se vera exactamente como el creador lo diseno." },
                { q: "Puedo desbloquear un PDF para imprimir desde mi telefono?", a: "Si. PDF.it funciona en cualquier navegador movil. Sube el PDF, desbloquealo y descarga la version imprimible. Luego puedes imprimirlo usando la funcion de impresion integrada de tu telefono o transferirlo a una computadora." },
                { q: "Es legal eliminar restricciones de impresion de un PDF?", a: "Si tienes acceso legitimo al documento y necesitas imprimirlo para uso personal, educativo o empresarial, eliminar la restriccion de impresion es legal. PDF.it esta disenado para usuarios que necesitan imprimir sus propios documentos o archivos compartidos con ellos." },
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
