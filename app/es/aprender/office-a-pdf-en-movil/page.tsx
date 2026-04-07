import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convertir archivos Office a PDF en movil (iPhone y Android) | PDF.it",
  description: "Aprende como convertir archivos Word, Excel y PowerPoint a PDF en tu iPhone o telefono Android. Sin app necesaria — usa PDF.it en cualquier navegador movil.",
  keywords: "convertir office a pdf en telefono, word a pdf iphone, excel a pdf android, office a pdf movil, convertir a pdf en telefono",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Puedo convertir un archivo Word a PDF en mi iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Abre Safari o Chrome, ve a la herramienta Office a PDF de PDF.it, sube tu archivo .docx y descarga el PDF convertido. No se requiere instalacion de app." } },
  { "@type": "Question", "name": "Necesito instalar una app para convertir archivos Office a PDF en mi telefono?", "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it funciona completamente en tu navegador movil — Safari, Chrome o Firefox. Sube tu archivo, conviertelo y descarga el PDF sin instalar nada." } },
  { "@type": "Question", "name": "Puedo convertir archivos Excel a PDF en Android?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Abre cualquier navegador en tu telefono Android, ve a PDF.it, sube tu archivo .xlsx y obtiene un PDF en segundos. La herramienta preserva tu formato de tabla y diseno." } },
  { "@type": "Question", "name": "Donde se guarda el PDF convertido en mi telefono?", "acceptedAnswer": { "@type": "Answer", "text": "En iPhone, el PDF se descarga a tu app Archivos o la carpeta Descargas en Safari. En Android, va a tu carpeta Descargas. Tambien puedes compartirlo directamente desde el navegador por email o apps de mensajeria." } },
  { "@type": "Question", "name": "La calidad es la misma que convertir en una computadora?", "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it procesa archivos en el servidor, no en tu dispositivo. La calidad de conversion es identica ya sea que subas desde un telefono, tablet o computadora de escritorio." } },
  { "@type": "Question", "name": "Puedo convertir multiples archivos a PDF en mi telefono?", "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios gratuitos pueden convertir un archivo a la vez en movil. Los usuarios Pro obtienen procesamiento por lotes, que permite convertir multiples archivos Office a PDF en una sola operacion incluso en un telefono." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como convertir archivos Office a PDF en movil", "description": "Convierte archivos Word, Excel o PowerPoint a PDF en tu telefono en 3 simples pasos.", "step": [
  { "@type": "HowToStep", "name": "Abre PDF.it en tu navegador movil", "text": "Abre Safari (iPhone) o Chrome (Android) y ve a pdf.it.com. Navega a la herramienta Office a PDF." },
  { "@type": "HowToStep", "name": "Sube tu archivo Office", "text": "Toca el area de carga y selecciona tu archivo .docx, .xlsx o .pptx desde el navegador de archivos de tu telefono, almacenamiento en la nube o adjuntos de email." },
  { "@type": "HowToStep", "name": "Descarga el PDF", "text": "Toca Convertir, espera unos segundos y descarga tu PDF. Se guardara en tu carpeta Descargas o app Archivos." }
] }

export default function OfficeAPdfEnMovilPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Office a PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir archivos Office a PDF en movil (iPhone y Android)</h1>
          <p className="text-xl text-slate-300">Estas en tu telefono, alguien acaba de pedir una version PDF de tu documento, y no tienes una computadora cerca. No hay problema — aqui te mostramos como convertir cualquier archivo Office a PDF directamente desde tu telefono.</p>
        </div></div></section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><FileText className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">En tu telefono ahora mismo? Convierte directamente en tu navegador.</p></div>
          <Link href="/es/office-a-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Convertir a PDF Ahora <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por que podrias necesitar convertir en tu telefono</h2>
            <p className="text-slate-600 mb-4">Cada vez mas trabajo sucede en dispositivos moviles. Estas son las situaciones mas comunes donde necesitas convertir un archivo Office a PDF en tu telefono:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Solicitudes urgentes por email.</strong> Tu jefe o cliente necesita una version PDF de un reporte ahora mismo, y solo tienes tu telefono. Convierte y responde en menos de un minuto.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Solicitudes de empleo sobre la marcha.</strong> Encontraste una oferta de trabajo con fecha limite ajustada y necesitas enviar tu curriculo Word como PDF. Conviertelo desde tu telefono sin esperar a llegar a casa.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Subidas a portales.</strong> Portales de gobierno, universidad y seguros a menudo requieren subidas en PDF. Si el archivo esta en tu telefono, conviertelo ahi mismo en lugar de transferirlo a una computadora primero.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Compartir via apps de mensajeria.</strong> Los PDFs son mas faciles de ver en WhatsApp, Telegram e iMessage que archivos Office sin procesar. Convierte antes de compartir para una mejor experiencia.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como convertir archivos Office a PDF en tu telefono (paso a paso)</h2>
            <div className="space-y-4">
              {[
                { title: "Abre PDF.it en tu navegador movil", desc: "Abre Safari (iPhone), Chrome (Android) o cualquier navegador movil y ve a pdf.it.com. Toca el menu para encontrar la herramienta Office a PDF, o ve directamente a pdf.it.com/es/office-a-pdf." },
                { title: "Sube tu archivo", desc: "Toca el area de carga. Tu telefono te permitira elegir un archivo desde tu almacenamiento, iCloud Drive, Google Drive, Dropbox o adjuntos de email recientes. Selecciona tu archivo .docx, .xlsx o .pptx." },
                { title: "Descarga el PDF convertido", desc: "Toca Convertir y espera unos segundos. El PDF se descargara a tu carpeta Descargas (Android) o app Archivos (iPhone). Tambien puedes compartirlo directamente por email, WhatsApp o cualquier otra app." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos especificos para iPhone</h2>
            <div className="space-y-6">
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Encontrando tu PDF descargado</h3><p className="text-slate-600">Despues de descargar, el PDF puede no aparecer automaticamente. Abre la app Archivos y revisa la carpeta "Descargas" en "En mi iPhone" o tu iCloud Drive. En Safari, tambien puedes tocar el icono de descarga (flecha) en la barra de herramientas para ver descargas recientes.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Subiendo desde iCloud Drive</h3><p className="text-slate-600">Cuando toques el area de carga, selecciona "Explorar" y navega a tu carpeta de iCloud Drive. Esto es especialmente util si tus archivos Office se sincronizan desde tu Mac. Tambien puedes acceder a Google Drive y Dropbox si esas apps estan instaladas.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Compartiendo directamente desde Safari</h3><p className="text-slate-600">Despues de descargar el PDF, puedes tocar "Abrir en..." para compartirlo directamente via Mail, WhatsApp o AirDrop sin necesidad de encontrarlo primero en la app Archivos.</p></div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos especificos para Android</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Revisa tu carpeta Descargas.</strong> Despues de convertir, el PDF va a tu carpeta Descargas por defecto. Desliza hacia abajo la barra de notificaciones para ver la notificacion de descarga y toca para abrir.</li>
              <li>&#10003; <strong>Sube desde Google Drive.</strong> Cuando toques el area de carga en Chrome, puedes explorar Google Drive directamente. Esta es la forma mas rapida de convertir un archivo almacenado en la nube.</li>
              <li>&#10003; <strong>Usa "Compartir" desde otras apps.</strong> Si recibes un archivo Office en Gmail o WhatsApp, mantiene presionado el adjunto, toca "Compartir," luego "Abrir en Chrome" para navegar a PDF.it y subirlo.</li>
              <li>&#10003; <strong>Usuarios Samsung:</strong> El navegador Samsung Internet funciona igual de bien que Chrome para subir y convertir archivos en PDF.it.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Que hacer despues de convertir en movil</h2>
            <p className="text-slate-600 mb-4">Una vez que tienes tu PDF en tu telefono, puede que necesites algunos pasos adicionales:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Comprime el PDF</strong> si es muy grande para email o un portal. Usa <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> — tambien funciona en movil.</li>
              <li>&#10003; <strong>Une multiples PDFs</strong> en un documento usando <Link href="/es/unir-pdf" className="text-[#14D8C4] hover:underline">Unir PDF</Link>. Esto funciona en movil tambien — sube todos tus archivos y combinalos.</li>
              <li>&#10003; <strong>Agrega proteccion con contrasena</strong> con <Link href="/es/proteger-pdf" className="text-[#14D8C4] hover:underline">Proteger PDF</Link> antes de compartir documentos sensibles.</li>
              <li>&#10003; <strong>Verifica el formato.</strong> Abre el PDF en tu telefono para asegurarte de que todo se vea bien. Si ves problemas de formato, lee nuestra guia sobre <Link href="/es/aprender/office-a-pdf-mantener-formato" className="text-[#14D8C4] hover:underline">como mantener el formato al convertir a PDF</Link>.</li>
            </ul>
          </section>
        </div></article>

        <section className="py-12" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Convierte archivos Office en tu telefono</h2>
          <p className="text-slate-300 mb-6">Sin app necesaria. Abre PDF.it en tu navegador movil, sube tu archivo y obtiene un PDF en segundos.</p>
          <Link href="/es/office-a-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><FileText className="h-5 w-5" /> Convertir a PDF Ahora</Link>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Office a PDF convertidor: DOCX, XLSX, PPTX a PDF", href: "/es/aprender/office-a-pdf-convertidor" },
              { title: "Convertir DOCX, XLSX y PPTX a PDF — Todos los formatos Office", href: "/es/aprender/convertir-docx-xlsx-pptx-a-pdf" },
              { title: "Como mantener el formato al convertir Office a PDF", href: "/es/aprender/office-a-pdf-mantener-formato" },
            ].map((a) => (<Link key={a.href} href={a.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group"><span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{a.title}</span><ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" /></Link>))}
          </div>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {(faqSchema.mainEntity as Array<{name: string; acceptedAnswer: {text: string}}>).map((faq, i) => (
              <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><h3 className="font-bold text-slate-900 mb-2">{faq.name}</h3><p className="text-slate-600 text-sm">{faq.acceptedAnswer.text}</p></div>
            ))}
          </div>
        </div></section>
      </main>
      <FooterEs />
    </div>
  )
}
