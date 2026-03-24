import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Lock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Proteger un PDF Antes de Enviar por Correo | PDF.it",
  description: "Aprende como asegurar un PDF antes de enviarlo por correo electronico. Guia paso a paso que cubre proteccion con contrasena, aplanamiento, eliminacion de metadatos y compresion para compartir de forma segura.",
  keywords: "proteger pdf antes de enviar, asegurar pdf para correo, bloquear pdf antes de compartir, seguridad pdf para email",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Como protejo un PDF antes de enviarlo por correo?", "acceptedAnswer": { "@type": "Answer", "text": "Usa la herramienta Proteger PDF de PDF.it para agregar una contrasena, aplana cualquier campo de formulario o anotacion, y comprime el archivo para cumplir con los limites de tamano del correo. Comparte la contrasena por separado por mensaje de texto o llamada." } },
  { "@type": "Question", "name": "Debo aplanar mi PDF antes de enviarlo?", "acceptedAnswer": { "@type": "Answer", "text": "Si. El aplanamiento elimina campos de formulario interactivos, anotaciones y capas, integrando todo en la pagina. Esto evita que los destinatarios editen o extraigan datos ocultos de tu documento." } },
  { "@type": "Question", "name": "Los adjuntos de correo pueden ser interceptados?", "acceptedAnswer": { "@type": "Answer", "text": "Si. El correo estandar no esta encriptado de extremo a extremo. Los adjuntos pueden ser interceptados durante la transmision o accedidos si la cuenta de correo del destinatario esta comprometida. Proteger tu PDF con contrasena agrega una capa esencial de seguridad." } },
  { "@type": "Question", "name": "Cual es el tamano maximo de PDF que puedo enviar por correo?", "acceptedAnswer": { "@type": "Answer", "text": "La mayoria de los proveedores de correo limitan los adjuntos a 25MB (Gmail, Outlook, Yahoo). Si tu PDF es mas grande, usa la herramienta Comprimir PDF de PDF.it para reducir el tamano antes de enviar." } },
  { "@type": "Question", "name": "Como debo compartir la contrasena con el destinatario?", "acceptedAnswer": { "@type": "Answer", "text": "Nunca incluyas la contrasena en el mismo correo que el PDF. Enviala por un canal diferente — un mensaje de texto, llamada telefonica o app de mensajeria encriptada como Signal o WhatsApp." } },
  { "@type": "Question", "name": "PDF.it elimina los metadatos de los PDFs?", "acceptedAnswer": { "@type": "Answer", "text": "Aplanar un PDF con PDF.it elimina elementos interactivos y datos embebidos. Para limpieza adicional de metadatos, aplana el archivo y luego vuelve a protegerlo para crear una version limpia y segura." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como Proteger un PDF Antes de Enviar por Correo", "description": "Asegura tu PDF para compartir por correo en 3 pasos usando PDF.it.", "step": [
  { "@type": "HowToStep", "name": "Aplana y limpia el PDF", "text": "Sube tu PDF a la herramienta Aplanar PDF de PDF.it para eliminar campos de formulario, anotaciones y capas. Esto evita que se extraigan datos ocultos." },
  { "@type": "HowToStep", "name": "Agrega proteccion con contrasena", "text": "Sube el archivo aplanado a la herramienta Proteger PDF de PDF.it. Establece una contrasena fuerte de apertura y elige encriptacion AES de 256 bits para maxima seguridad." },
  { "@type": "HowToStep", "name": "Comprime y envia", "text": "Si el archivo excede 25MB, comprimelo usando la herramienta Comprimir PDF. Adjunta el PDF protegido a tu correo y envia la contrasena por separado por texto o llamada." }
] }

export default function ProtegerPDFAntesDeEnviarPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="bg-[#191B4D] text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Proteger PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Como Proteger un PDF Antes de Enviar por Correo</h1>
          <p className="text-xl text-slate-300">El correo electronico no es tan seguro como la mayoria de las personas piensa. Antes de enviar ese contrato, declaracion de impuestos o informe confidencial — aqui te mostramos como asegurar correctamente tu PDF.</p>
        </div></div></section>

        <section className="py-8 bg-orange-50 border-b border-orange-100"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><Lock className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Listo para proteger? Salta la guia y ve directo a la herramienta.</p></div>
          <Link href="/es/proteger-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Proteger PDF Ahora <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que el Correo No Es Suficientemente Seguro para PDFs Sensibles</h2>
            <p className="text-slate-600 mb-4">La mayoria de las personas asumen que el correo es privado, pero los protocolos estandar de correo no encriptan tus adjuntos de extremo a extremo. Esto es lo que puede salir mal:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Intercepcion durante el transito.</strong> Los correos pasan por multiples servidores antes de llegar al destinatario. Sin encriptacion, los adjuntos pueden ser leidos en cualquier punto del camino.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Cuentas comprometidas.</strong> Si la cuenta de correo del destinatario es hackeada, cada adjunto sin proteccion que haya recibido queda expuesto.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Destinatario equivocado.</strong> Sucede mas a menudo de lo que piensas. El autocompletado llena la direccion de correo incorrecta y tu documento confidencial llega a la bandeja de entrada de un extrano.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Reenvio.</strong> Incluso si envias el archivo a la persona correcta, podria reenviarlo a alguien mas. Una contrasena asegura que solo personas autorizadas puedan abrirlo.</span></li>
            </ul>
            <p className="text-slate-600 mt-4">Proteger tu PDF con contrasena antes de enviarlo por correo es la forma mas simple y efectiva de mantener tus documentos seguros.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como Asegurar un PDF Antes de Enviar (Paso a Paso)</h2>
            <div className="space-y-4">
              {[
                { title: "Aplana tu PDF primero", desc: "Antes de agregar una contrasena, elimina cualquier elemento interactivo que pueda filtrar datos. Usa la herramienta Aplanar PDF de PDF.it para integrar campos de formulario, comentarios y anotaciones en la pagina. Esto evita que alguien extraiga informacion oculta." },
                { title: "Agrega proteccion con contrasena", desc: "Sube el archivo aplanado a la herramienta Proteger PDF. Establece una contrasena fuerte de apertura (al menos 12 caracteres con mayusculas, minusculas, numeros y simbolos). Elige encriptacion AES de 256 bits para maxima seguridad. Opcionalmente restringe la impresion y copia." },
                { title: "Comprime para correo y envia", desc: "La mayoria de los proveedores de correo limitan los adjuntos a 25MB. Si tu PDF protegido es muy grande, usa Comprimir PDF para reducirlo. Adjunta el archivo a tu correo, luego envia la contrasena por separado por mensaje de texto o llamada." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Deberias Aplanar Antes de Proteger</h2>
            <p className="text-slate-600 mb-4">Muchas personas se saltan este paso, pero el aplanamiento es critico para la verdadera seguridad del documento:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Elimina campos de formulario.</strong> Los datos de formularios rellenados a veces pueden extraerse incluso de PDFs protegidos con contrasena. <Link href="/es/aplanar-pdf" className="text-orange-600 hover:underline">Aplanar</Link> convierte los datos del formulario en contenido estatico de la pagina.</li>
              <li>&#10003; <strong>Integra las anotaciones.</strong> Los comentarios, resaltados y notas adhesivas se eliminan como objetos separados y se renderizan directamente en la pagina.</li>
              <li>&#10003; <strong>Elimina capas.</strong> Los PDFs multicapa (comunes de software de diseno) pueden contener contenido oculto. El aplanamiento fusiona todo en una sola capa.</li>
              <li>&#10003; <strong>Reduce el tamano del archivo.</strong> Eliminar elementos interactivos a menudo hace el archivo mas pequeno, lo que ayuda con los limites de adjuntos de correo.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Ajustar Tu PDF Bajo los Limites de Tamano del Correo</h2>
            <p className="text-slate-600 mb-4">Los limites de adjuntos de correo pueden bloquear la entrega de tu PDF protegido. Estos son los limites comunes:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Gmail:</strong> 25MB por adjunto</li>
              <li>&#10003; <strong>Outlook / Office 365:</strong> 25MB (algunas cuentas corporativas limitan a 10MB)</li>
              <li>&#10003; <strong>Yahoo Mail:</strong> 25MB por adjunto</li>
              <li>&#10003; <strong>Correo corporativo:</strong> A menudo 5MB a 10MB por razones de seguridad</li>
            </ul>
            <p className="text-slate-600 mt-4">Si tu archivo excede estos limites, usa <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> para reducirlo. Para objetivos especificos, prueba <Link href="/es/comprimir-pdf-a-5mb" className="text-orange-600 hover:underline">Comprimir PDF a 5MB</Link> o <Link href="/es/comprimir-pdf-a-2mb" className="text-orange-600 hover:underline">Comprimir PDF a 2MB</Link>. Tambien puedes usar <Link href="/es/comprimir-pdf-para-email" className="text-orange-600 hover:underline">Comprimir PDF para Email</Link> para optimizacion automatica.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Lista de Verificacion de Seguridad Antes de Enviar</h2>
            <p className="text-slate-600 mb-4">Antes de adjuntar ese PDF a tu correo, revisa esta lista rapida:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Aplanado?</strong> Elimina campos de formulario, anotaciones y capas con <Link href="/es/aplanar-pdf" className="text-orange-600 hover:underline">Aplanar PDF</Link>.</li>
              <li>&#10003; <strong>Redactado?</strong> Si el documento contiene informacion que no debe compartirse, usa <Link href="/es/redaccion-pdf" className="text-orange-600 hover:underline">Redaccion PDF</Link> para eliminarla permanentemente antes de proteger.</li>
              <li>&#10003; <strong>Protegido con contrasena?</strong> Agrega una contrasena fuerte de apertura con <Link href="/es/proteger-pdf" className="text-orange-600 hover:underline">Proteger PDF</Link>. Usa encriptacion AES de 256 bits.</li>
              <li>&#10003; <strong>Bajo el limite de tamano?</strong> Usa <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> si el archivo excede el limite de adjuntos de tu proveedor de correo.</li>
              <li>&#10003; <strong>Probado?</strong> Abre el archivo protegido tu mismo e ingresa la contrasena para confirmar que funciona.</li>
              <li>&#10003; <strong>Contrasena compartida por separado?</strong> Envia la contrasena por texto, llamada o mensajeria segura — nunca en el mismo correo.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Medidas de Seguridad Adicionales</h2>
            <div className="space-y-6">
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Agrega una Marca de Agua</h3><p className="text-slate-600">Si estas compartiendo documentos confidenciales que podrian ser redistribuidos, agrega una marca de agua con el nombre del destinatario o "CONFIDENCIAL" usando <Link href="/es/marca-de-agua-pdf" className="text-orange-600 hover:underline">Marca de Agua PDF</Link>. Esto desalienta el compartir no autorizado y ayuda a rastrear filtraciones.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Une Antes de Proteger</h3><p className="text-slate-600">Enviando multiples documentos? Usa <Link href="/es/unir-pdf" className="text-orange-600 hover:underline">Unir PDF</Link> para combinarlos en un solo archivo primero, luego protege el resultado unido. Esto es mas facil para el destinatario y requiere solo una contrasena para todos los documentos.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Usa PDF Listo para Subir para Envios</h3><p className="text-slate-600">Si estas enviando un PDF para un envio formal (visa, solicitud de empleo, portal universitario), usa <Link href="/es/pdf-listo-para-subir" className="text-orange-600 hover:underline">PDF Listo para Subir</Link> para aplanar y comprimir en un solo paso antes de agregar proteccion con contrasena.</p></div>
            </div>
          </section>
        </div></article>

        <section className="py-12 bg-[#191B4D]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Asegura Tu PDF Antes de Enviar</h2>
          <p className="text-slate-300 mb-6">Aplana, protege y comprime tu PDF para compartir de forma segura por correo — todo en un solo lugar.</p>
          <Link href="/es/proteger-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><Lock className="h-5 w-5" /> Proteger PDF Ahora</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos Relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Como Proteger un PDF con Contrasena Online (Paso a Paso)", href: "/es/aprender/como-proteger-pdf-con-contrasena" },
              { title: "Mejores Practicas de Contrasena para PDF (Contrasenas Fuertes y Permisos)", href: "/es/aprender/mejores-practicas-contrasena-pdf" },
              { title: "Proteger un PDF con Contrasena en Tu Telefono (iPhone y Android)", href: "/es/aprender/proteger-pdf-en-movil" },
            ].map((article) => (
              <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group">
                <span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{article.title}</span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" />
              </Link>
            ))}
          </div>
        </div></section>

        <section className="py-16 bg-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            {[
              { q: "Como protejo un PDF antes de enviarlo por correo?", a: "Usa la herramienta Proteger PDF de PDF.it para agregar una contrasena, aplana cualquier campo de formulario o anotacion, y comprime el archivo para cumplir con los limites de tamano del correo. Comparte la contrasena por separado por mensaje de texto o llamada." },
              { q: "Debo aplanar mi PDF antes de enviarlo?", a: "Si. El aplanamiento elimina campos de formulario interactivos, anotaciones y capas, integrando todo en la pagina. Esto evita que los destinatarios editen o extraigan datos ocultos de tu documento." },
              { q: "Los adjuntos de correo pueden ser interceptados?", a: "Si. El correo estandar no esta encriptado de extremo a extremo. Los adjuntos pueden ser interceptados durante la transmision o accedidos si la cuenta del destinatario esta comprometida. Proteger tu PDF con contrasena agrega una capa esencial de seguridad." },
              { q: "Cual es el tamano maximo de PDF que puedo enviar por correo?", a: "La mayoria de los proveedores de correo limitan los adjuntos a 25MB (Gmail, Outlook, Yahoo). Si tu PDF es mas grande, usa la herramienta Comprimir PDF de PDF.it para reducir el tamano antes de enviar." },
              { q: "Como debo compartir la contrasena con el destinatario?", a: "Nunca incluyas la contrasena en el mismo correo que el PDF. Enviala por un canal diferente — un mensaje de texto, llamada telefonica o app de mensajeria encriptada como Signal o WhatsApp." },
              { q: "PDF.it elimina los metadatos de los PDFs?", a: "Aplanar un PDF con PDF.it elimina elementos interactivos y datos embebidos. Para limpieza adicional de metadatos, aplana el archivo y luego vuelve a protegerlo para crear una version limpia y segura." },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200"><h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3><p className="text-slate-600 text-sm">{faq.a}</p></div>
            ))}
          </div>
        </div></section>
      </main>
      <FooterEs />
    </div>
  )
}
