import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Scissors, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Cómo Dividir un PDF en tu Teléfono (iPhone y Android) | PDF.it",
  description:
    "Aprende cómo dividir un PDF en tu teléfono usando solo tu navegador. Funciona en iPhone y Android — sin necesidad de descargar app. Guía paso a paso gratuita, rápida y fácil.",
  keywords: "dividir pdf en teléfono, dividir pdf iphone, dividir pdf android, dividir pdf móvil gratis",
}

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Puedo dividir un PDF en mi teléfono sin una app?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona completamente en el navegador de tu teléfono — Safari en iPhone, Chrome en Android, o cualquier otro navegador móvil. No se necesita instalar ninguna app." } },
    { "@type": "Question", "name": "¿Cómo divido un PDF en iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "Abre Safari, ve a pdf.it.com/es/dividir-pdf, toca para subir tu PDF desde Archivos o iCloud Drive, selecciona las páginas que quieres, y descarga los archivos divididos." } },
    { "@type": "Question", "name": "¿Cómo divido un PDF en Android?", "acceptedAnswer": { "@type": "Answer", "text": "Abre Chrome o tu navegador preferido, ve a pdf.it.com/es/dividir-pdf, toca para subir tu PDF desde el almacenamiento de tu dispositivo o Google Drive, selecciona páginas, y descarga." } },
    { "@type": "Question", "name": "¿Es gratis dividir un PDF en móvil?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it ofrece división de PDF gratuita con archivos de hasta 25MB. Obtienes 3 operaciones gratuitas sin cuenta, y 10 por día con una cuenta gratuita." } },
    { "@type": "Question", "name": "¿Dónde se descarga el PDF dividido en mi teléfono?", "acceptedAnswer": { "@type": "Answer", "text": "En iPhone, los archivos divididos se descargan a tu app Archivos (generalmente en la carpeta Descargas). En Android, los archivos van a tu carpeta Descargas, accesible a través de la app Archivos o la barra de notificaciones." } },
    { "@type": "Question", "name": "¿Puedo dividir un PDF grande en móvil?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Los usuarios gratuitos pueden dividir PDFs de hasta 25MB en móvil. Los usuarios Pro pueden manejar archivos de hasta 200MB. El procesamiento ocurre en los servidores de PDF.it, así que el almacenamiento y velocidad de tu teléfono no afectan el resultado." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo", "name": "Cómo Dividir un PDF en tu Teléfono",
  "description": "Divide un PDF en archivos separados en iPhone o Android en 3 simples pasos usando PDF.it en tu navegador móvil.",
  "step": [
    { "@type": "HowToStep", "name": "Abre PDF.it en tu navegador móvil", "text": "Abre Safari (iPhone) o Chrome (Android) y ve a pdf.it.com/es/dividir-pdf. La herramienta funciona igual en móvil que en escritorio." },
    { "@type": "HowToStep", "name": "Sube y selecciona páginas", "text": "Toca el área de carga para seleccionar un PDF de tu teléfono. Elige páginas de Archivos, iCloud Drive, Google Drive, o el almacenamiento de tu dispositivo. Luego selecciona qué páginas extraer o cómo dividir." },
    { "@type": "HowToStep", "name": "Descarga los archivos divididos", "text": "Toca Dividir PDF y descarga el resultado. Los archivos se guardan en tu carpeta Descargas donde puedes compartirlos por email, apps de mensajería o almacenamiento en la nube." }
  ]
}

export default function DividirPDFEnMovilPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
            <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Dividir PDF</p>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Cómo Dividir un PDF en tu Teléfono (iPhone y Android)</h1>
            <p className="text-xl text-slate-300">¿Necesitas dividir un PDF pero solo tienes tu teléfono? No hay problema. PDF.it funciona directamente en tu navegador móvil — sin descargar app, sin cuenta requerida.</p>
          </div></div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><Scissors className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">¿Estás en tu teléfono ahora? Abre la herramienta directamente.</p>
            </div>
            <Link href="/es/dividir-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Dividir PDF Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cuándo Necesitas Dividir un PDF en tu Teléfono</h2>
              <p className="text-slate-600 mb-4">Estás lejos de tu computadora, pero necesitas dividir un PDF ahora mismo. Escenarios móviles comunes incluyen:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Reenviar una página específica de un adjunto de email.</strong> Tu jefe te envía un informe de 20 páginas y te pide que reenvíes solo la página 5 a un cliente. Divídelo en tu teléfono y responde en segundos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Subir un documento a un formulario móvil.</strong> Un portal gubernamental o app de seguros pide una sola página de tu documento de múltiples páginas. Extrae solo esa página.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Enviar un archivo por WhatsApp o Telegram.</strong> Las apps de mensajería tienen límites de tamaño de archivo. Divide un PDF grande en partes más pequeñas para compartirlas por chat.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Ediciones rápidas mientras viajas.</strong> Estás en el aeropuerto y necesitas enviar solo ciertas páginas de un contrato antes de tu vuelo. Tu teléfono es todo lo que tienes.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Dividir un PDF en iPhone (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  { title: "Abre Safari y ve a pdf.it.com/es/dividir-pdf", desc: "Escribe pdf.it.com/es/dividir-pdf en la barra de direcciones de Safari. La página carga la misma herramienta completa de división que verías en una computadora. No se necesita app." },
                  { title: "Toca para subir tu PDF", desc: "Toca el área de carga. iOS te permitirá elegir de Archivos, iCloud Drive, o descargas recientes. Encuentra tu PDF y toca para subirlo. Verás una vista previa de páginas una vez cargado." },
                  { title: "Selecciona páginas y descarga", desc: "Elige las páginas o rangos de páginas que quieres conservar. Toca Dividir PDF. El resultado se descarga a tu app Archivos (carpeta Descargas). Luego puedes compartirlo por Mail, AirDrop, Mensajes, o cualquier otra app." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Dividir un PDF en Android (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  { title: "Abre Chrome y ve a pdf.it.com/es/dividir-pdf", desc: "Abre Chrome (o tu navegador preferido) y navega a pdf.it.com/es/dividir-pdf. La herramienta carga al instante — sin necesidad de descargar app ni visitar Google Play Store." },
                  { title: "Toca para subir tu PDF", desc: "Toca el área de carga. Android mostrará opciones para buscar en el almacenamiento de tu dispositivo, Google Drive, o archivos recientes. Selecciona tu PDF y espera a que se suba." },
                  { title: "Selecciona páginas y descarga", desc: "Elige qué páginas extraer o cómo dividir el archivo. Toca Dividir PDF. El archivo se descarga a tu carpeta Descargas. Revisa la barra de notificaciones para la confirmación de descarga, luego abre o comparte el archivo." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos para Dividir PDFs en Móvil</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Usa una conexión estable.</strong> Subir y descargar funcionan mejor con Wi-Fi. Los datos celulares también funcionan, pero archivos grandes pueden tardar más en conexiones lentas.</li>
                <li>&#10003; <strong>Revisa tu carpeta Descargas.</strong> En iPhone, los archivos van a la app Archivos. En Android, revisa tu carpeta Descargas o la barra de notificaciones.</li>
                <li>&#10003; <strong>Agrega la herramienta a favoritos.</strong> Agrega pdf.it.com/es/dividir-pdf a tu pantalla de inicio para acceso instantáneo. En iPhone, toca Compartir y luego &quot;Agregar a pantalla de inicio&quot;. En Android, toca el menú del navegador y &quot;Agregar a pantalla de inicio&quot;.</li>
                <li>&#10003; <strong>Comprime si sigue siendo muy grande.</strong> Después de dividir, si las partes individuales siguen siendo grandes, usa <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> desde tu teléfono para reducirlas más.</li>
                <li>&#10003; <strong>Funciona con almacenamiento en la nube.</strong> Puedes subir PDFs directamente desde iCloud Drive, Google Drive, Dropbox, o OneDrive — sin necesidad de descargar a tu teléfono primero.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Otras Herramientas PDF que Puedes Usar en tu Teléfono</h2>
              <p className="text-slate-600 mb-4">PDF.it es completamente compatible con móviles. Cada herramienta funciona en el navegador de tu teléfono, igual que la herramienta de división. Aquí hay algunas que podrías necesitar después de dividir:</p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Unir archivos divididos de nuevo</h3>
                  <p className="text-slate-600">¿Necesitas recombinar partes de PDF? Usa <Link href="/es/unir-pdf" className="text-[#14D8C4] hover:underline">Unir PDF</Link> para juntar múltiples archivos en uno — funciona perfecto en móvil para reensamblar documentos.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Comprimir para compartir</h3>
                  <p className="text-slate-600">Antes de compartir por WhatsApp o email, usa <Link href="/es/comprimir-pdf-para-email" className="text-[#14D8C4] hover:underline">Comprimir PDF para Email</Link> para asegurarte de que tu archivo sea lo suficientemente pequeño para enviar.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Convertir páginas a imágenes</h3>
                  <p className="text-slate-600">¿Necesitas compartir una página como foto? Conviértela a <Link href="/es/pdf-a-jpg" className="text-[#14D8C4] hover:underline">JPG</Link> o <Link href="/es/pdf-a-png" className="text-[#14D8C4] hover:underline">PNG</Link> directamente desde tu teléfono — mucho más fácil de compartir en apps de mensajería que un PDF.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Corregir páginas rotadas</h3>
                  <p className="text-slate-600">Los PDFs escaneados frecuentemente tienen páginas rotadas de lado. Usa <Link href="/es/rotar-pdf" className="text-[#14D8C4] hover:underline">Rotar PDF</Link> en tu teléfono para corregir la orientación antes de compartir.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Divide un PDF Directamente desde tu Teléfono</h2>
            <p className="text-slate-300 mb-6">Funciona en iPhone y Android — sin app necesaria, sin registro requerido.</p>
            <Link href="/es/dividir-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">
              <Scissors className="h-5 w-5" /> Dividir PDF Ahora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Cómo Dividir un PDF (Guía Paso a Paso)", href: "/es/aprender/como-dividir-pdf" },
                { title: "Cómo Extraer Páginas de un PDF (Conserva Solo Lo Que Necesitas)", href: "/es/aprender/extraer-paginas-de-pdf-guia" },
                { title: "Dividir un PDF para Email (Bajo Límites de Adjuntos)", href: "/es/aprender/dividir-pdf-para-email" },
                { title: "Dividir PDF en Páginas Individuales (Un Archivo por Página)", href: "/es/aprender/dividir-pdf-en-paginas-individuales" },
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
                { q: "¿Puedo dividir un PDF en mi teléfono sin una app?", a: "Sí. PDF.it funciona completamente en el navegador de tu teléfono — Safari en iPhone, Chrome en Android, o cualquier otro navegador móvil. No se necesita instalar ninguna app." },
                { q: "¿Cómo divido un PDF en iPhone?", a: "Abre Safari, ve a pdf.it.com/es/dividir-pdf, toca para subir tu PDF desde Archivos o iCloud Drive, selecciona las páginas que quieres, y descarga los archivos divididos." },
                { q: "¿Cómo divido un PDF en Android?", a: "Abre Chrome o tu navegador preferido, ve a pdf.it.com/es/dividir-pdf, toca para subir tu PDF desde el almacenamiento de tu dispositivo o Google Drive, selecciona páginas, y descarga." },
                { q: "¿Es gratis dividir un PDF en móvil?", a: "Sí. PDF.it ofrece división de PDF gratuita con archivos de hasta 25MB. Obtienes 3 operaciones gratuitas sin cuenta, y 10 por día con una cuenta gratuita." },
                { q: "¿Dónde se descarga el PDF dividido en mi teléfono?", a: "En iPhone, los archivos divididos se descargan a tu app Archivos (generalmente en la carpeta Descargas). En Android, los archivos van a tu carpeta Descargas, accesible a través de la app Archivos o la barra de notificaciones." },
                { q: "¿Puedo dividir un PDF grande en móvil?", a: "Sí. Los usuarios gratuitos pueden dividir PDFs de hasta 25MB en móvil. Los usuarios Pro pueden manejar archivos de hasta 200MB. El procesamiento ocurre en los servidores de PDF.it, así que el almacenamiento y velocidad de tu teléfono no afectan el resultado." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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
