import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Shield, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Proteger un PDF con Contrasena en Tu Telefono (iPhone y Android) | PDF.it",
  description: "Aprende como proteger un PDF con contrasena en tu iPhone o Android. Sin app requerida — agrega encriptacion a cualquier PDF directamente en tu navegador movil con PDF.it.",
  keywords: "proteger pdf en telefono, proteger pdf iphone, bloquear pdf android, asegurar pdf movil",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Puedo proteger un PDF con contrasena en mi iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Abre Safari o Chrome, ve a la herramienta Proteger PDF de PDF.it, sube tu PDF desde Archivos o iCloud Drive, establece una contrasena y descarga el archivo protegido. No necesitas instalar ninguna app." } },
  { "@type": "Question", "name": "Puedo proteger un PDF con contrasena en Android?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Abre Chrome o cualquier navegador movil, ve a la herramienta Proteger PDF de PDF.it, sube tu PDF desde tu dispositivo o Google Drive, establece una contrasena y descarga el archivo encriptado." } },
  { "@type": "Question", "name": "Necesito instalar una app para proteger un PDF en mi telefono?", "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it funciona completamente en tu navegador movil. No hay nada que instalar, no se requiere cuenta para uso basico, y tus archivos se procesan de forma segura y se eliminan despues del procesamiento." } },
  { "@type": "Question", "name": "Donde se guardan los PDFs protegidos en mi telefono?", "acceptedAnswer": { "@type": "Answer", "text": "En iPhone, los archivos descargados van a la app Archivos en la carpeta Descargas. En Android, van a la carpeta Descargas accesible desde la app Archivos o la barra de notificaciones." } },
  { "@type": "Question", "name": "Puedo proteger un PDF que recibi por WhatsApp o correo?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Guarda el PDF en tu telefono primero (mantiene presionado el archivo, luego guarda en Archivos o Descargas), luego subelo a la herramienta Proteger PDF de PDF.it en tu navegador." } },
  { "@type": "Question", "name": "La version movil de PDF.it es gratis?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Obtienes 3 conversiones gratis sin registrarte, y 10 por dia con una cuenta gratuita. Se soportan archivos de hasta 25MB en el nivel gratuito. Los usuarios Pro obtienen conversiones ilimitadas y archivos de hasta 200MB." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como Proteger un PDF con Contrasena en Tu Telefono", "description": "Agrega proteccion con contrasena a un PDF en iPhone o Android en 3 pasos usando PDF.it.", "step": [
  { "@type": "HowToStep", "name": "Abre PDF.it en tu navegador movil", "text": "Abre Safari (iPhone) o Chrome (Android) y ve a pdf.it.com/protect-pdf. La herramienta funciona completamente en tu navegador movil — no necesitas app." },
  { "@type": "HowToStep", "name": "Sube tu PDF y establece una contrasena", "text": "Toca el area de carga y selecciona tu PDF de Archivos, iCloud Drive, Google Drive o tu carpeta Descargas. Ingresa una contrasena fuerte y elige tu nivel de encriptacion." },
  { "@type": "HowToStep", "name": "Descarga el archivo protegido", "text": "Toca Proteger PDF y descarga el archivo encriptado. En iPhone se guarda en Archivos > Descargas. En Android va a tu carpeta Descargas." }
] }

export default function ProtegerPDFEnMovilPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Proteger PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Proteger un PDF con Contrasena en Tu Telefono (iPhone y Android)</h1>
          <p className="text-xl text-slate-300">Necesitas bloquear un PDF directamente desde tu telefono? Ya sea que estes en un iPhone o Android, puedes agregar proteccion con contrasena en menos de un minuto — sin app requerida.</p>
        </div></div></section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><Shield className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Estas en tu telefono ahora? Ve directo a la herramienta.</p></div>
          <Link href="/es/proteger-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Proteger PDF Ahora <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Necesitarias Proteger un PDF en Tu Telefono</h2>
            <p className="text-slate-600 mb-4">Cada vez mas trabajo sucede en dispositivos moviles. Puedes recibir un contrato mientras viajas, recibir una notificacion de documento fiscal estando fuera de tu escritorio, o necesitar enviar archivos sensibles mientras viajas. Estos son escenarios comunes:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Compartir documentos sobre la marcha.</strong> Recibes un PDF por WhatsApp o correo y necesitas reenviarlo de forma segura a alguien mas — agregando una contrasena antes de compartir.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Proteger escaneos del telefono.</strong> Acabas de escanear un documento con la camara de tu telefono y necesitas bloquearlo antes de subirlo a un portal o enviarlo por correo.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Tareas de negocio rapidas.</strong> Un cliente pide una version protegida de una propuesta mientras estas lejos de tu computadora. Manejalo en 60 segundos desde tu telefono.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Documentos de viaje.</strong> Protege copias de pasaporte, pases de abordar con informacion personal y confirmaciones de hotel antes de almacenarlas en tu dispositivo.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como Proteger un PDF en Tu Telefono (Paso a Paso)</h2>
            <div className="space-y-4">
              {[
                { title: "Abre PDF.it en tu navegador movil", desc: "Abre Safari en iPhone o Chrome en Android y navega a pdf.it.com/protect-pdf. La herramienta es completamente responsiva y funciona exactamente igual que en escritorio — no necesitas descargar app." },
                { title: "Sube tu PDF y establece una contrasena", desc: "Toca el area de carga para abrir tu selector de archivos. Selecciona tu PDF de Archivos (iPhone), Google Drive, iCloud Drive o tu carpeta Descargas. Ingresa una contrasena fuerte — al menos 12 caracteres con una mezcla de letras, numeros y simbolos." },
                { title: "Descarga el archivo protegido", desc: "Toca Proteger PDF. Tu archivo encriptado se descargara en segundos. En iPhone, encuentralo en Archivos > Descargas. En Android, revisa tu carpeta Descargas o la notificacion de descarga. Ahora puedes compartir el PDF protegido por correo, WhatsApp o cualquier otra app." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos Especificos para iPhone</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Usa Safari para la mejor experiencia.</strong> Safari se integra con la app Archivos, facilitando subir PDFs desde iCloud Drive, En Mi iPhone o almacenamiento en la nube de terceros.</li>
              <li>&#10003; <strong>Encuentra tus descargas.</strong> Despues de descargar el PDF protegido, abre la app Archivos y ve a "En Mi iPhone" &gt; "Descargas" para encontrarlo.</li>
              <li>&#10003; <strong>Comparte directamente desde Archivos.</strong> Toca el PDF protegido en Archivos, luego usa el boton de compartir para enviarlo por Mail, Mensajes, WhatsApp o AirDrop.</li>
              <li>&#10003; <strong>Protege documentos escaneados.</strong> Si escaneaste un documento usando la camara del iPhone o la app Notas, guardalo como PDF primero, luego subelo a PDF.it. Para mejor calidad de escaneo, prueba <Link href="/es/limpiar-escaneo" className="text-[#14D8C4] hover:underline">Limpieza de Escaneo de Telefono</Link> antes de proteger.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos Especificos para Android</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Usa Chrome para fiabilidad.</strong> Chrome es el navegador predeterminado en la mayoria de dispositivos Android y maneja cargas y descargas de archivos sin problemas con PDF.it.</li>
              <li>&#10003; <strong>Sube desde Google Drive.</strong> Cuando se abre el selector de archivos, puedes navegar Google Drive directamente sin descargar el archivo a tu telefono primero.</li>
              <li>&#10003; <strong>Revisa las notificaciones para descargas.</strong> Despues de que el PDF protegido se descargue, veras una notificacion en la barra. Tocala para abrir el archivo o encuentralo en tu carpeta Descargas.</li>
              <li>&#10003; <strong>Comparte por cualquier app.</strong> Abre tu app Archivos, presiona prolongadamente el PDF protegido y toca Compartir. Android te permite enviar archivos a traves de Gmail, WhatsApp, Telegram, Slack y docenas de otras apps.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Otras Herramientas PDF que Funcionan en Movil</h2>
            <div className="space-y-6">
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Comprimir Antes de Proteger</h3><p className="text-slate-600">Las apps de correo movil a menudo tienen limites de adjuntos mas estrictos. Usa <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> para reducir tu archivo antes de agregar proteccion con contrasena. O ve directamente a <Link href="/es/comprimir-pdf-para-email" className="text-[#14D8C4] hover:underline">Comprimir PDF para Email</Link> para optimizacion automatica.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Limpiar Escaneos de Telefono</h3><p className="text-slate-600">Las fotos de documentos tomadas con la camara de tu telefono a menudo se ven poco profesionales. Usa <Link href="/es/limpiar-escaneo" className="text-[#14D8C4] hover:underline">Limpieza de Escaneo de Telefono</Link> para enderezar, aclarar y mejorar el escaneo, luego protege la version limpia.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Unir y Luego Proteger</h3><p className="text-slate-600">Necesitas enviar multiples documentos de forma segura? Usa <Link href="/es/unir-pdf" className="text-[#14D8C4] hover:underline">Unir PDF</Link> para combinarlos en un solo archivo, luego <Link href="/es/proteger-pdf" className="text-[#14D8C4] hover:underline">protege el resultado unido</Link>. Una contrasena cubre todos los documentos.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Desbloquear un PDF Protegido</h3><p className="text-slate-600">Recibiste un PDF bloqueado y tienes la contrasena? Usa <Link href="/es/desbloquear-pdf" className="text-[#14D8C4] hover:underline">Desbloquear PDF</Link> en tu telefono para quitar la contrasena y guardar una copia sin proteccion.</p></div>
            </div>
          </section>
        </div></article>

        <section className="py-12" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Protege Tu PDF Ahora Mismo</h2>
          <p className="text-slate-300 mb-6">Funciona en cualquier telefono — iPhone, Android o tablet. No necesitas app, solo tu navegador.</p>
          <Link href="/es/proteger-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><Shield className="h-5 w-5" /> Proteger PDF Ahora</Link>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos Relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Como Proteger un PDF con Contrasena Online (Paso a Paso)", href: "/es/aprender/como-proteger-pdf-con-contrasena" },
              { title: "Mejores Practicas de Contrasena para PDF (Contrasenas Fuertes y Permisos)", href: "/es/aprender/mejores-practicas-contrasena-pdf" },
              { title: "Como Proteger un PDF Antes de Enviar por Correo", href: "/es/aprender/proteger-pdf-antes-de-enviar" },
            ].map((article) => (
              <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group">
                <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
              </Link>
            ))}
          </div>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            {[
              { q: "Puedo proteger un PDF con contrasena en mi iPhone?", a: "Si. Abre Safari o Chrome, ve a la herramienta Proteger PDF de PDF.it, sube tu PDF desde Archivos o iCloud Drive, establece una contrasena y descarga el archivo protegido. No necesitas instalar ninguna app." },
              { q: "Puedo proteger un PDF con contrasena en Android?", a: "Si. Abre Chrome o cualquier navegador movil, ve a la herramienta Proteger PDF de PDF.it, sube tu PDF desde tu dispositivo o Google Drive, establece una contrasena y descarga el archivo encriptado." },
              { q: "Necesito instalar una app para proteger un PDF en mi telefono?", a: "No. PDF.it funciona completamente en tu navegador movil. No hay nada que instalar, no se requiere cuenta para uso basico, y tus archivos se procesan de forma segura y se eliminan despues del procesamiento." },
              { q: "Donde se guardan los PDFs protegidos en mi telefono?", a: "En iPhone, los archivos descargados van a la app Archivos en la carpeta Descargas. En Android, van a la carpeta Descargas accesible desde la app Archivos o la barra de notificaciones." },
              { q: "Puedo proteger un PDF que recibi por WhatsApp o correo?", a: "Si. Guarda el PDF en tu telefono primero (mantiene presionado el archivo, luego guarda en Archivos o Descargas), luego subelo a la herramienta Proteger PDF de PDF.it en tu navegador." },
              { q: "La version movil de PDF.it es gratis?", a: "Si. Obtienes 3 conversiones gratis sin registrarte, y 10 por dia con una cuenta gratuita. Se soportan archivos de hasta 25MB en el nivel gratuito. Los usuarios Pro obtienen conversiones ilimitadas y archivos de hasta 200MB." },
            ].map((faq, i) => (
              <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3><p className="text-slate-600 text-sm">{faq.a}</p></div>
            ))}
          </div>
        </div></section>
      </main>
      <FooterEs />
    </div>
  )
}
