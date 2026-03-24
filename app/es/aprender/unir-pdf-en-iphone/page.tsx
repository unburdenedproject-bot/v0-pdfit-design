import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Merge, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Cómo Unir PDFs en iPhone (Método Rápido por Navegador) | PDF.it",
  description: "Aprende cómo unir PDFs en iPhone usando Safari o Chrome — sin app necesaria. Guía paso a paso para combinar PDFs en tu teléfono gratis.",
  keywords: "unir pdf en iphone, combinar pdfs iphone, unir pdf ios, unir pdf en teléfono gratis",
}

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Puedo unir PDFs en mi iPhone sin una app?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona directamente en Safari o Chrome en tu iPhone. Ve a pdf.it.com/merge-pdf, sube tus archivos, ordénalos y descarga el PDF unido — sin necesidad de instalar ninguna app." } },
    { "@type": "Question", "name": "¿Dónde encuentro los PDFs en mi iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "Los PDFs en iPhone típicamente están en la app Archivos (bajo 'En Mi iPhone' o iCloud Drive), en adjuntos de email, en apps de mensajería (WhatsApp, iMessage) o en la carpeta Descargas de Safari. Usa la app Archivos para explorar todas las ubicaciones." } },
    { "@type": "Question", "name": "¿Cómo subo PDFs desde mi iPhone a PDF.it?", "acceptedAnswer": { "@type": "Answer", "text": "Cuando tocas el área de carga en PDF.it, tu iPhone mostrará un selector de archivos. Puedes explorar la app Archivos, descargas recientes, iCloud Drive u otro almacenamiento en la nube. Selecciona los PDFs que quieres unir y se subirán automáticamente." } },
    { "@type": "Question", "name": "¿Dónde se descarga el PDF unido en iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "El PDF unido se descarga a la carpeta Descargas de tu iPhone, accesible a través de la app Archivos. En Safari, también puedes encontrar descargas recientes tocando el icono de flecha de descarga en la barra de dirección." } },
    { "@type": "Question", "name": "¿Puedo compartir el PDF unido directamente desde mi iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Después de descargar, abre el PDF unido desde la app Archivos, toca el botón compartir y envíalo por email, AirDrop, WhatsApp, iMessage o cualquier otra opción de compartir en tu iPhone." } },
    { "@type": "Question", "name": "¿Hay un límite de tamaño al unir PDFs en iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios gratuitos pueden subir archivos de hasta 25MB cada uno. Los usuarios Pro pueden subir archivos de hasta 200MB. Si tu archivo unido es muy grande, usa la herramienta Comprimir PDF de PDF.it para reducir el tamaño antes de compartir." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo", "name": "Cómo Unir Archivos PDF en iPhone",
  "description": "Combina múltiples PDFs en un solo archivo en tu iPhone usando Safari y PDF.it.",
  "step": [
    { "@type": "HowToStep", "name": "Abre PDF.it en Safari", "text": "Abre Safari en tu iPhone y ve a pdf.it.com/merge-pdf. Toca el área de carga para abrir el selector de archivos." },
    { "@type": "HowToStep", "name": "Sube y ordena tus PDFs", "text": "Selecciona los archivos PDF que quieres unir desde la app Archivos, iCloud Drive o tu carpeta de Descargas. Ordénalos correctamente arrastrando." },
    { "@type": "HowToStep", "name": "Une y descarga", "text": "Toca Unir PDF y espera unos segundos. Descarga el archivo unido — se guarda en tu carpeta de Descargas en la app Archivos. Compártelo por email, AirDrop o cualquier app de mensajería." }
  ]
}

export default function UnirPDFEnIPhonePage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
            <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Unir PDF</p>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Unir Archivos PDF en iPhone (Método Rápido por Navegador)</h1>
            <p className="text-xl text-slate-300">Sin app necesaria. Abre Safari, sube tus PDFs, combínalos y descarga el archivo unido — todo en menos de un minuto, directamente desde tu iPhone.</p>
          </div></div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><Merge className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">¿En tu iPhone ahora mismo? Ve directo a la herramienta.</p>
            </div>
            <Link href="/es/unir-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Unir PDFs Ahora <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Por Qué Usar un Navegador en Vez de una App?</h2>
              <p className="text-slate-600 mb-4">Podrías descargar una app de PDF del App Store, pero hay buenas razones para no hacerlo:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Sin instalación necesaria.</strong> La mayoría de apps de PDF pesan 50-200MB y requieren crear otra cuenta más. PDF.it funciona instantáneamente en Safari.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Sin espacio desperdiciado.</strong> El almacenamiento de tu iPhone se mantiene limpio. La herramienta del navegador no ocupa espacio en tu dispositivo.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Sin trampas de suscripción.</strong> Muchas apps &quot;gratuitas&quot; de PDF bloquean funciones básicas detrás de suscripciones semanales. PDF.it te permite unir archivos gratis sin costos ocultos.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Funciona en cualquier dispositivo.</strong> La misma herramienta funciona en tu iPhone, iPad, teléfono Android o computadora — sin cambiar entre apps.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dónde Encontrar Tus PDFs en iPhone</h2>
              <p className="text-slate-600 mb-4">Antes de poder unir PDFs, necesitas saber dónde están en tu iPhone. Las ubicaciones más comunes:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>App Archivos.</strong> Abre la app Archivos y revisa &quot;En Mi iPhone&quot; e &quot;iCloud Drive&quot;. Este es el lugar principal donde Apple almacena documentos descargados.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Descargas de Safari.</strong> Si descargaste un PDF de un sitio web, toca el icono de flecha de descarga (junto a la barra de dirección en Safari) para ver descargas recientes.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Adjuntos de email.</strong> Los PDFs recibidos por email pueden guardarse en la app Archivos. Abre el email, mantén presionado el adjunto y toca &quot;Guardar en Archivos&quot;.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Apps de mensajería.</strong> Los PDFs compartidos por WhatsApp, iMessage o Telegram se almacenan en esas apps. Guárdalos primero en la app Archivos para acceso fácil.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">5.</span><span><strong>Almacenamiento en la nube.</strong> Google Drive, Dropbox y OneDrive son accesibles a través de la app Archivos si has conectado esos servicios.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Unir PDFs en iPhone (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  { title: "Abre Safari y ve a PDF.it", desc: "Abre Safari en tu iPhone y navega a pdf.it.com/merge-pdf. La página está completamente optimizada para móvil — funciona perfectamente en cualquier tamaño de pantalla de iPhone." },
                  { title: "Sube tus archivos PDF", desc: "Toca el área de carga. Tu iPhone mostrará un selector de archivos donde puedes explorar la app Archivos, iCloud Drive o descargas recientes. Selecciona todos los PDFs que quieres unir. Puedes subirlos uno a la vez o seleccionar múltiples archivos." },
                  { title: "Ordena los archivos y toca Unir", desc: "Arrastra los archivos al orden correcto. El primer archivo en la lista se convierte en las primeras páginas del documento unido. Cuando el orden esté correcto, toca Unir PDF. El archivo unido se descargará a tu carpeta de Descargas en la app Archivos." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Encontrando Tu Archivo Unido Después de Descargar</h2>
              <p className="text-slate-600 mb-4">Después de tocar Descargar, tu PDF unido se guarda en tu iPhone. Dónde encontrarlo:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Indicador de descarga de Safari.</strong> Busca el icono de flecha azul de descarga junto a la barra de dirección de Safari. Tócalo para ver tus descargas recientes y abrir el archivo.</li>
                <li>&#10003; <strong>App Archivos.</strong> Abre la app Archivos y navega a &quot;En Mi iPhone&quot; luego &quot;Descargas&quot;. Tu PDF unido estará ahí.</li>
                <li>&#10003; <strong>iCloud Drive.</strong> Si tu carpeta de Descargas se sincroniza con iCloud, el archivo también será accesible en tu iPad, Mac o icloud.com.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Compartiendo Tu PDF Unido</h2>
              <p className="text-slate-600 mb-4">Una vez que tengas el archivo unido, compartirlo desde tu iPhone es fácil:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Email.</strong> Abre la app Archivos, encuentra tu PDF unido, toca el botón compartir y selecciona Mail. El PDF se adjuntará a un nuevo email.</li>
                <li>&#10003; <strong>AirDrop.</strong> Usa el botón compartir para enviar el archivo por AirDrop a un Mac, iPad u otro iPhone cercano.</li>
                <li>&#10003; <strong>WhatsApp o iMessage.</strong> Comparte directamente a cualquier app de mensajería usando la hoja de compartir de iOS.</li>
                <li>&#10003; <strong>Subir a un portal.</strong> Si necesitas enviar el archivo a un sitio web, abre el portal en Safari y sube el PDF unido desde tu carpeta de Descargas.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿El Archivo Unido Es Muy Grande para Compartir?</h2>
              <p className="text-slate-600 mb-4">Los adjuntos de email y portales de carga tienen límites de tamaño. Si tu PDF unido es muy grande:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Comprímelo.</strong> Ve a <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> en Safari y sube el archivo unido. La compresión puede reducir el tamaño en 50-80%.</li>
                <li>&#10003; <strong>Divídelo si es necesario.</strong> Si la compresión no es suficiente, usa <Link href="/es/dividir-pdf" className="text-orange-600 hover:underline">Dividir PDF</Link> para separar el documento en partes más pequeñas.</li>
                <li>&#10003; <strong>Todo desde tu iPhone.</strong> Cada herramienta de PDF.it funciona en Safari — no necesitas cambiar a una computadora.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos Específicos para iPhone</h2>
              <div className="space-y-6">
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Guarda Primero los Adjuntos de Email</h3><p className="text-slate-600">Si tus PDFs están en el email, guárdalos en la app Archivos antes de unir. Abre el email, mantén presionado el adjunto PDF y toca &quot;Guardar en Archivos&quot;. Elige una carpeta que recuerdes (como Descargas). Luego podrás encontrarlos fácilmente al subir a PDF.it.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Usa Modo Horizontal para Mejor Control</h3><p className="text-slate-600">Al ordenar archivos en la herramienta de unir, girar tu iPhone de lado te da más espacio en pantalla para ver los nombres de archivo y arrastrarlos al orden correcto.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Verifica Tu Trabajo en la App Archivos</h3><p className="text-slate-600">Después de descargar el PDF unido, ábrelo en la app Archivos y desplázate por cada página. El visor de PDF integrado del iPhone muestra una tira de miniaturas de páginas que facilita verificar que el orden sea correcto.</p></div>
              </div>
            </section>
          </div>
        </article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">¿Listo para Unir PDFs en Tu iPhone?</h2>
            <p className="text-slate-300 mb-6">Abre la herramienta en Safari y combina tus archivos en menos de un minuto — gratis, sin app necesaria.</p>
            <Link href="/es/unir-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><Merge className="h-5 w-5" /> Unir PDFs Ahora</Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Cómo Unir Archivos PDF en Línea (Combinar PDFs en Uno)", href: "/es/aprender/como-unir-archivos-pdf" },
                { title: "Unir PDFs en el Orden Correcto (Sin Errores de Página)", href: "/es/aprender/unir-pdfs-en-orden" },
                { title: "Cómo Unir PDFs Escaneados (Y Mantenerlos Legibles)", href: "/es/aprender/unir-pdfs-escaneados" },
                { title: "Combinar PDFs para Envíos (Escuela, Visa, Portales de Empleo)", href: "/es/aprender/combinar-pdfs-para-envio" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group">
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "¿Puedo unir PDFs en mi iPhone sin una app?", a: "Sí. PDF.it funciona directamente en Safari o Chrome en tu iPhone. Ve a pdf.it.com/merge-pdf, sube tus archivos, ordénalos y descarga el PDF unido — sin necesidad de instalar ninguna app." },
                { q: "¿Dónde encuentro los PDFs en mi iPhone?", a: "Los PDFs en iPhone típicamente están en la app Archivos (bajo 'En Mi iPhone' o iCloud Drive), en adjuntos de email, en apps de mensajería (WhatsApp, iMessage) o en la carpeta Descargas de Safari." },
                { q: "¿Cómo subo PDFs desde mi iPhone a PDF.it?", a: "Cuando tocas el área de carga en PDF.it, tu iPhone mostrará un selector de archivos. Puedes explorar la app Archivos, descargas recientes, iCloud Drive u otro almacenamiento en la nube." },
                { q: "¿Dónde se descarga el PDF unido en iPhone?", a: "El PDF unido se descarga a la carpeta Descargas de tu iPhone, accesible a través de la app Archivos. En Safari, también puedes encontrar descargas recientes tocando el icono de flecha de descarga." },
                { q: "¿Puedo compartir el PDF unido directamente desde mi iPhone?", a: "Sí. Después de descargar, abre el PDF unido desde la app Archivos, toca el botón compartir y envíalo por email, AirDrop, WhatsApp, iMessage o cualquier otra opción." },
                { q: "¿Hay un límite de tamaño al unir PDFs en iPhone?", a: "Los usuarios gratuitos pueden subir archivos de hasta 25MB cada uno. Los usuarios Pro pueden subir archivos de hasta 200MB. Si tu archivo unido es muy grande, usa la herramienta Comprimir PDF para reducir el tamaño." },
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
