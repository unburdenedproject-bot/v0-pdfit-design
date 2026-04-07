import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Smartphone, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convertir PPT a PDF en iPhone (metodo rapido) | PDF.it",
  description: "Aprende como convertir PowerPoint a PDF en iPhone usando Safari y PDF.it. Sin app necesaria — abre tu PPTX desde email o Archivos, convierte en linea y guarda o comparte el PDF.",
  keywords: "ppt a pdf iphone, convertir powerpoint a pdf en iphone, pptx a pdf iphone, powerpoint pdf ios, convertir ppt a pdf movil",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Puedo convertir PowerPoint a PDF en mi iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Abre Safari en tu iPhone, ve a la herramienta PowerPoint a PDF de PDF.it, sube tu archivo PPTX y descarga el PDF convertido. No necesitas instalar ninguna app — todo funciona en el navegador." } },
  { "@type": "Question", "name": "Necesito instalar una app para convertir PPT a PDF en iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it funciona directamente en Safari o cualquier navegador movil. No necesitas descargar ninguna app de la App Store. Solo visita el sitio web, sube tu archivo y convierte." } },
  { "@type": "Question", "name": "Como abro un archivo PPTX en iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "Puedes abrir archivos PPTX desde la app Archivos, adjuntos de email, iCloud Drive, Google Drive o Dropbox. Si recibes un PPTX por email, toca el adjunto para descargarlo, luego usa el boton compartir para guardarlo en Archivos para facil acceso." } },
  { "@type": "Question", "name": "Donde se guarda el PDF convertido en iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "Cuando tocas el boton de descarga en Safari, el PDF se guarda en tu carpeta Descargas en la app Archivos. Tambien puedes tocar la notificacion del archivo descargado en la barra de herramientas de Safari para abrirlo inmediatamente, luego compartir o guardar donde quieras." } },
  { "@type": "Question", "name": "Puedo compartir el PDF directamente desde mi iPhone despues de convertir?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Despues de descargar el PDF, abrelo desde la app Archivos y toca el boton compartir. Puedes enviarlo por email, iMessage, AirDrop, WhatsApp, Slack o cualquier otra app que acepte archivos." } },
  { "@type": "Question", "name": "Hay un limite de tamano de archivo para convertir en iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios gratuitos pueden convertir archivos hasta 25MB. Los usuarios Pro pueden subir archivos hasta 200MB. Si tu PPTX es muy grande y tienes conexion lenta, considera usar Wi-Fi para una subida mas rapida." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como convertir PPT a PDF en iPhone", "description": "Convierte un archivo PowerPoint a PDF directamente en tu iPhone usando Safari — sin app necesaria.", "step": [
  { "@type": "HowToStep", "name": "Abre PDF.it en Safari", "text": "Abre Safari en tu iPhone y ve a pdf.it.com/es/powerpoint-a-pdf. La herramienta funciona en cualquier iPhone con iOS 15 o posterior." },
  { "@type": "HowToStep", "name": "Sube tu archivo PPTX", "text": "Toca el area de carga y selecciona tu archivo PowerPoint desde Archivos, iCloud Drive, descargas de email o cualquier almacenamiento en la nube conectado." },
  { "@type": "HowToStep", "name": "Descarga y comparte el PDF", "text": "Toca Convertir, luego descarga el PDF. Se guarda en tu carpeta Descargas en Archivos. Abrelo y usa el boton compartir para enviar por email, iMessage, AirDrop o cualquier app." }
] }

export default function PptAPdfEnIphonePage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PowerPoint a PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir PPT a PDF en iPhone (metodo rapido)</h1>
          <p className="text-xl text-slate-300">Estas en tu telefono y necesitas enviar una presentacion como PDF — rapido. Aqui te mostramos como convertir PowerPoint a PDF en tu iPhone en menos de un minuto, sin app necesaria.</p>
        </div></div></section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><Smartphone className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">En tu iPhone ahora mismo? Ve directo a la herramienta.</p></div>
          <Link href="/es/powerpoint-a-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Convertir PPT a PDF <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Cuando necesitas convertir PPT a PDF en tu telefono</h2>
            <p className="text-slate-600 mb-4">Hay muchas situaciones donde necesitas convertir un PowerPoint sobre la marcha:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Un cliente o profesor lo necesita ahora.</strong> Recibiste la solicitud estando lejos de tu computadora. Convierte y envia desde tu telefono en menos de un minuto.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Recibiste un PPTX por email.</strong> Alguien te envio una presentacion, pero necesitas un PDF para reenviarlo a alguien que no tiene PowerPoint.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Un portal requiere PDF.</strong> Una solicitud de empleo o formulario solo acepta PDF, y la fecha limite es en minutos.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Quieres revisar diapositivas sobre la marcha.</strong> Los PDFs son mas faciles de leer en un telefono que los archivos PowerPoint — sin hacer zoom constantemente.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como convertir PPT a PDF en iPhone (paso a paso)</h2>
            <div className="space-y-4">
              {[
                { title: "Abre Safari y ve a PDF.it", desc: "Abre Safari (o Chrome) en tu iPhone y visita pdf.it.com/es/powerpoint-a-pdf. La pagina esta completamente optimizada para movil — todo funciona en la pantalla de tu telefono." },
                { title: "Sube tu archivo PowerPoint", desc: "Toca el area de carga. Tu iPhone mostrara opciones para seleccionar un archivo desde Archivos, iCloud Drive u otro almacenamiento conectado. Si el PPTX llego por email, guardalo primero en Archivos (toca el adjunto > compartir > Guardar en Archivos)." },
                { title: "Convierte y descarga el PDF", desc: "Toca Convertir. En unos segundos, tu PDF esta listo. Toca Descargar — el archivo se guarda en tu carpeta Descargas en la app Archivos. Puedes abrirlo inmediatamente desde el indicador de descarga de Safari." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Como obtener tu archivo PPTX en tu iPhone</h2>
            <p className="text-slate-600 mb-4">La parte mas dificil usualmente es encontrar tu archivo. Aqui te decimos donde buscar segun como lo recibiste:</p>
            <div className="space-y-6">
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Desde email (Gmail, Outlook, Apple Mail)</h3><p className="text-slate-600">Abre el email con el adjunto. Toca el archivo PPTX para previsualizarlo, luego toca el <strong>boton compartir</strong> y selecciona <strong>"Guardar en Archivos"</strong>. Elige una carpeta (Descargas esta bien). Ahora puedes subirlo a PDF.it.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Desde iCloud Drive</h3><p className="text-slate-600">Si el archivo esta en tu iCloud Drive, aparecera directamente cuando toques el area de carga en PDF.it. Selecciona "iCloud Drive" en el selector de archivos y navega a tu presentacion.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Desde Google Drive o Dropbox</h3><p className="text-slate-600">Si tienes la app de Google Drive o Dropbox instalada, aparecen como ubicaciones en la app Archivos del iPhone. Cuando PDF.it te pida elegir un archivo, navega a tu almacenamiento en la nube y selecciona el PPTX.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Desde WhatsApp o iMessage</h3><p className="text-slate-600">Si alguien envio el archivo por una app de mensajeria, mantiene presionado el archivo, luego selecciona <strong>"Compartir"</strong> y <strong>"Guardar en Archivos."</strong> Luego sube desde Archivos a PDF.it.</p></div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Compartiendo el PDF despues de la conversion</h2>
            <p className="text-slate-600 mb-4">Una vez que hayas descargado el PDF, compartirlo es sencillo:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Email:</strong> Abre Mail o Gmail, redacta un mensaje, toca el icono de adjunto y selecciona tu PDF desde la carpeta Descargas.</li>
              <li>&#10003; <strong>iMessage o WhatsApp:</strong> Abre la conversacion, toca el boton +, selecciona "Documento" y elige tu PDF.</li>
              <li>&#10003; <strong>AirDrop:</strong> Abre el PDF en Archivos, toca el boton compartir y selecciona el dispositivo Apple cercano.</li>
              <li>&#10003; <strong>Subir a un portal:</strong> Abre el sitio web en Safari, y cuando pida una carga de archivo, selecciona tu PDF desde Descargas.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos para los mejores resultados en iPhone</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Usa Wi-Fi para archivos grandes.</strong> Si tu PPTX es mayor a 10MB, Wi-Fi sera mucho mas rapido que datos celulares.</li>
              <li>&#10003; <strong>Revisa el PDF antes de enviar.</strong> Abrelo en la app Archivos y desplazate por las paginas para asegurarte de que todo se vea bien.</li>
              <li>&#10003; <strong>Comprime si es necesario.</strong> Si el PDF es muy grande para email (mas de 20MB), usa <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> — tambien funciona en tu iPhone.</li>
              <li>&#10003; <strong>Agrega PDF.it a favoritos.</strong> Agrega pdf.it.com a tu pantalla de inicio para acceso instantaneo: en Safari, toca el boton compartir y selecciona "Agregar a pantalla de inicio."</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Otras conversiones que puedes hacer en iPhone</h2>
            <p className="text-slate-600 mb-4">Toda la suite de PDF.it funciona en tu telefono. Estas son las conversiones moviles mas populares:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <Link href="/es/word-a-pdf" className="text-[#14D8C4] hover:underline">Word a PDF</Link> — Convierte archivos DOCX a PDF en tu telefono.</li>
              <li>&#10003; <Link href="/es/excel-a-pdf" className="text-[#14D8C4] hover:underline">Excel a PDF</Link> — Convierte hojas de calculo manteniendo disenos de tablas.</li>
              <li>&#10003; <Link href="/es/office-a-pdf" className="text-[#14D8C4] hover:underline">Office a PDF</Link> — Una herramienta para cualquier archivo de Microsoft Office.</li>
              <li>&#10003; <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> — Reduce el tamano del archivo PDF para email o subidas.</li>
            </ul>
          </section>
        </div></article>

        <section className="py-12" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Listo para convertir en tu iPhone?</h2>
          <p className="text-slate-300 mb-6">Abre la herramienta en Safari, sube tu PPTX y obtiene el PDF en segundos — sin app necesaria.</p>
          <Link href="/es/powerpoint-a-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><Smartphone className="h-5 w-5" /> Convertir PPT a PDF Ahora</Link>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Convertir PowerPoint a PDF en linea (PPTX a PDF)", href: "/es/aprender/convertir-ppt-a-pdf" },
              { title: "PPT a PDF para imprimir: mejores consejos de diseno y calidad", href: "/es/aprender/ppt-a-pdf-para-imprimir" },
              { title: "Las animaciones de PowerPoint funcionan en PDF?", href: "/es/aprender/ppt-a-pdf-animaciones" },
              { title: "PPTX a PDF fuentes faltantes? Soluciona incrustacion y sustituciones", href: "/es/aprender/pptx-a-pdf-fuentes-faltantes" },
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
