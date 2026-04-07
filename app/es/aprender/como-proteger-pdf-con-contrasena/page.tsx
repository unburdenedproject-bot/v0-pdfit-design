import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Lock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Proteger un PDF con Contrasena Online (Paso a Paso) | PDF.it",
  description:
    "Aprende como agregar proteccion con contrasena a cualquier PDF en linea. Guia paso a paso que cubre contrasenas de apertura, contrasenas de permisos y niveles de encriptacion — gratis, sin software.",
  keywords: "proteger pdf con contrasena, agregar contrasena a pdf, bloquear pdf con contrasena, asegurar pdf online",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Como protejo un PDF con contrasena gratis?", "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a la herramienta Proteger PDF de PDF.it, ingresa una contrasena, elige tu nivel de encriptacion y haz clic en Proteger. Descarga el archivo bloqueado — no se requiere registro para tus primeros 3 archivos." } },
    { "@type": "Question", "name": "Cual es la diferencia entre una contrasena de apertura y una contrasena de permisos?", "acceptedAnswer": { "@type": "Answer", "text": "Una contrasena de apertura (contrasena de usuario) impide que cualquiera abra el PDF sin la contrasena. Una contrasena de permisos (contrasena de propietario) permite que las personas abran el archivo pero restringe acciones como imprimir, copiar o editar." } },
    { "@type": "Question", "name": "Puedo quitar la contrasena de un PDF protegido despues?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Si conoces la contrasena, puedes usar la herramienta Desbloquear PDF de PDF.it para quitar la contrasena y crear una copia sin proteccion del archivo." } },
    { "@type": "Question", "name": "Que nivel de encriptacion debo elegir?", "acceptedAnswer": { "@type": "Answer", "text": "Para la mayoria de propositos, la encriptacion AES de 128 bits es suficiente. Para documentos altamente sensibles como archivos legales o financieros, elige encriptacion AES de 256 bits para maxima seguridad." } },
    { "@type": "Question", "name": "Proteger un PDF con contrasena cambiara su contenido?", "acceptedAnswer": { "@type": "Answer", "text": "No. La proteccion con contrasena agrega una capa de encriptacion alrededor del archivo pero no altera el contenido, formato o diseno de tu PDF de ninguna manera." } },
    { "@type": "Question", "name": "Puedo proteger un PDF con contrasena en mi telefono?", "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it funciona en cualquier navegador movil. Sube tu PDF, establece una contrasena y descarga el archivo protegido directamente en tu telefono — no necesitas app." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Proteger un PDF con Contrasena Online",
  "description": "Agrega proteccion con contrasena a cualquier PDF en 3 simples pasos usando PDF.it.",
  "step": [
    { "@type": "HowToStep", "name": "Sube tu PDF", "text": "Ve a la herramienta Proteger PDF de PDF.it y sube el archivo que quieres proteger haciendo clic o arrastrandolo al area de carga." },
    { "@type": "HowToStep", "name": "Establece tu contrasena y opciones", "text": "Ingresa una contrasena fuerte y elige tu nivel de encriptacion. Opcionalmente establece una contrasena de permisos para restringir la impresion, copia o edicion." },
    { "@type": "HowToStep", "name": "Descarga el PDF protegido", "text": "Haz clic en Proteger PDF y descarga tu archivo bloqueado con contrasena. Compartelo de forma segura — solo las personas con la contrasena podran abrirlo." }
  ]
}

export default function ComoProtegerPDFConContrasenaPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
            <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Proteger PDF</p>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Como Proteger un PDF con Contrasena Online (Paso a Paso)</h1>
            <p className="text-xl text-slate-300">Necesitas bloquear un PDF para que solo personas autorizadas puedan abrirlo? Ya sea que estes compartiendo contratos, registros financieros o documentos personales — aqui te mostramos como agregar proteccion con contrasena en segundos.</p>
          </div></div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><Lock className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Listo para proteger? Salta la guia y ve directo a la herramienta.</p>
            </div>
            <Link href="/es/proteger-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Proteger PDF Ahora <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Deberias Proteger Tus PDFs con Contrasena</h2>
              <p className="text-slate-600 mb-4">Los PDFs son el formato estandar para compartir documentos importantes, pero enviarlos sin proteccion es como enviar una carta sin sellar. Estas son situaciones comunes donde la proteccion con contrasena es esencial:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Contratos y documentos legales.</strong> Protege acuerdos firmados de acceso no autorizado. Una contrasena asegura que solo las partes interesadas puedan ver el documento.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Registros financieros.</strong> Declaraciones de impuestos, facturas y estados de cuenta bancarios contienen datos sensibles que nunca deben compartirse sin encriptacion.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Documentos medicos.</strong> Registros de pacientes y reclamos de seguros estan protegidos por regulaciones de privacidad. Agregar una contrasena ayuda a mantener el cumplimiento.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Archivos de empleados y documentos de RRHH.</strong> Cartas de oferta, evaluaciones de desempeno e informacion de nomina deben bloquearse antes de enviarlas internamente.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">5.</span><span><strong>Propiedad intelectual.</strong> Manuscritos en borrador, planes de negocio y especificaciones de diseno necesitan proteccion cuando se comparten con revisores externos.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Proteger un PDF con Contrasena (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  { title: "Sube tu archivo PDF", desc: "Ve a la herramienta Proteger PDF y arrastra tu archivo al area de carga, o haz clic para buscar. Archivos de hasta 25MB son gratis — los usuarios Pro pueden subir archivos de hasta 200MB." },
                  { title: "Establece tu contrasena y opciones de encriptacion", desc: "Ingresa una contrasena fuerte. Elige entre una contrasena de apertura (requerida para abrir el archivo) o una contrasena de permisos (restringe imprimir, copiar y editar). Selecciona tu nivel de encriptacion preferido — AES de 128 bits o 256 bits." },
                  { title: "Descarga el PDF protegido", desc: "Haz clic en Proteger PDF y tu archivo encriptado estara listo para descargar en segundos. Comparte la contrasena por separado con el destinatario — nunca incluyas la contrasena en el mismo correo que el archivo." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Contrasena de Apertura vs. Contrasena de Permisos</h2>
              <p className="text-slate-600 mb-4">La seguridad de PDF soporta dos tipos distintos de contrasenas, y entender la diferencia es critico para elegir la proteccion correcta:</p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Contrasena de Apertura (Contrasena de Usuario)</h3>
                  <p className="text-slate-600">Este es el tipo mas comun. Una contrasena de apertura bloquea completamente el PDF — nadie puede ver una sola pagina sin ingresar la contrasena correcta primero. Usa esto cuando el contenido del documento es confidencial y solo personas especificas deben verlo.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Contrasena de Permisos (Contrasena de Propietario)</h3>
                  <p className="text-slate-600">Una contrasena de permisos permite que cualquiera abra y lea el PDF, pero restringe lo que pueden hacer con el. Puedes prevenir la impresion, copia de texto, edicion o extraccion de paginas. Esto es ideal cuando quieres que las personas lean un documento pero no lo modifiquen o redistribuyan.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Usar Ambas Juntas</h3>
                  <p className="text-slate-600">Para maxima seguridad, puedes establecer tanto una contrasena de apertura como una de permisos. El visor necesita la contrasena de apertura para acceder al archivo, y aun asi no puede imprimir ni copiar texto a menos que tambien tenga la contrasena de permisos. La herramienta <Link href="/es/proteger-pdf" className="text-[#14D8C4] hover:underline">Proteger PDF</Link> de PDF.it soporta ambas opciones.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Entendiendo los Niveles de Encriptacion</h2>
              <p className="text-slate-600 mb-4">Cuando proteges un PDF, el nivel de encriptacion determina que tan fuerte es el bloqueo. Esto es lo que significa cada nivel:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>AES de 128 bits.</strong> Encriptacion fuerte adecuada para la mayoria de documentos de negocio y personales. Procesamiento rapido y compatible con todos los lectores de PDF modernos.</li>
                <li>&#10003; <strong>AES de 256 bits.</strong> La encriptacion mas fuerte disponible. Usa esto para archivos altamente sensibles como contratos legales, registros financieros o datos medicos. Tarda ligeramente mas en procesar pero proporciona seguridad de grado militar.</li>
                <li>&#10003; <strong>RC4 de 40 bits (legado).</strong> Un estandar mas antiguo que algunas herramientas aun ofrecen. No recomendado — puede ser descifrado con hardware moderno. Siempre elige encriptacion AES en su lugar.</li>
              </ul>
              <p className="text-slate-600 mt-4">Para mas informacion sobre elegir contrasenas fuertes y establecer los permisos correctos, lee nuestra guia sobre <Link href="/es/aprender/mejores-practicas-contrasena-pdf" className="text-[#14D8C4] hover:underline">mejores practicas de contrasena para PDF</Link>.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Que Hacer Despues de Proteger Tu PDF</h2>
              <p className="text-slate-600 mb-4">Una vez que tu PDF esta bloqueado, aqui hay algunos pasos adicionales para asegurar que todo funcione bien:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Prueba la contrasena.</strong> Abre el archivo protegido tu mismo e ingresa la contrasena para confirmar que funciona correctamente antes de enviar.</li>
                <li>&#10003; <strong>Comparte la contrasena por separado.</strong> Envia el PDF por correo electronico y la contrasena por mensaje de texto o llamada telefonica. Nunca pongas ambos en el mismo mensaje.</li>
                <li>&#10003; <strong>Comprime si es necesario.</strong> La encriptacion agrega una carga minima, pero si el archivo ya era grande, usa <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> antes o despues de proteger.</li>
                <li>&#10003; <strong>Aplana primero para seguridad extra.</strong> Si tu PDF tiene campos de formulario o anotaciones, <Link href="/es/aplanar-pdf" className="text-[#14D8C4] hover:underline">aplana el PDF</Link> antes de proteger para evitar que se extraigan datos ocultos.</li>
                <li>&#10003; <strong>Necesitas quitar la contrasena despues?</strong> Usa <Link href="/es/desbloquear-pdf" className="text-[#14D8C4] hover:underline">Desbloquear PDF</Link> para crear una copia sin proteccion cuando necesites compartir el archivo mas ampliamente.</li>
              </ul>
            </section>
          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Listo para Bloquear Tu PDF?</h2>
            <p className="text-slate-300 mb-6">Sube tu archivo y agrega proteccion con contrasena en segundos — gratis, sin registro.</p>
            <Link href="/es/proteger-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><Lock className="h-5 w-5" /> Proteger PDF Ahora</Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Mejores Practicas de Contrasena para PDF (Contrasenas Fuertes y Permisos)", href: "/es/aprender/mejores-practicas-contrasena-pdf" },
                { title: "Como Proteger un PDF Antes de Enviar por Correo", href: "/es/aprender/proteger-pdf-antes-de-enviar" },
                { title: "Proteger un PDF con Contrasena en Tu Telefono (iPhone y Android)", href: "/es/aprender/proteger-pdf-en-movil" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group">
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "Como protejo un PDF con contrasena gratis?", a: "Sube tu PDF a la herramienta Proteger PDF de PDF.it, ingresa una contrasena, elige tu nivel de encriptacion y haz clic en Proteger. Descarga el archivo bloqueado — no se requiere registro para tus primeros 3 archivos." },
                { q: "Cual es la diferencia entre una contrasena de apertura y una contrasena de permisos?", a: "Una contrasena de apertura (contrasena de usuario) impide que cualquiera abra el PDF sin la contrasena. Una contrasena de permisos (contrasena de propietario) permite que las personas abran el archivo pero restringe acciones como imprimir, copiar o editar." },
                { q: "Puedo quitar la contrasena de un PDF protegido despues?", a: "Si. Si conoces la contrasena, puedes usar la herramienta Desbloquear PDF de PDF.it para quitar la contrasena y crear una copia sin proteccion del archivo." },
                { q: "Que nivel de encriptacion debo elegir?", a: "Para la mayoria de propositos, la encriptacion AES de 128 bits es suficiente. Para documentos altamente sensibles como archivos legales o financieros, elige encriptacion AES de 256 bits para maxima seguridad." },
                { q: "Proteger un PDF con contrasena cambiara su contenido?", a: "No. La proteccion con contrasena agrega una capa de encriptacion alrededor del archivo pero no altera el contenido, formato o diseno de tu PDF de ninguna manera." },
                { q: "Puedo proteger un PDF con contrasena en mi telefono?", a: "Si. PDF.it funciona en cualquier navegador movil. Sube tu PDF, establece una contrasena y descarga el archivo protegido directamente en tu telefono — no necesitas app." },
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
