import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Stamp, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Agregar una Marca de Agua a un PDF en Tu Telefono (iPhone y Android) | OmnisPDF",
  description:
    "Aprende como agregar una marca de agua a un PDF desde tu iPhone o telefono Android. Sin necesidad de aplicacion — usa OmnisPDF en tu navegador movil para estampar PDF donde estes.",
  keywords: "marca de agua pdf en telefono, agregar marca de agua pdf iphone, marca de agua pdf android, marca de agua pdf movil",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Puedo agregar una marca de agua a un PDF en mi telefono?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. OmnisPDF funciona en cualquier navegador movil — Safari en iPhone, Chrome en Android o cualquier otro navegador. Sube tu PDF, agrega una marca de agua de texto o imagen, y descarga el resultado directamente en tu telefono." }
    },
    {
      "@type": "Question",
      "name": "Necesito descargar una aplicacion para agregar marca de agua a un PDF en movil?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. OmnisPDF es una herramienta basada en web que funciona completamente en tu navegador. Sin instalacion de aplicacion, sin cuenta requerida para funciones basicas. Solo abre omnispdf.com en tu telefono y comienza a agregar marcas de agua." }
    },
    {
      "@type": "Question",
      "name": "Funciona igual en iPhone y Android?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. OmnisPDF es completamente responsivo y funciona de manera identica en iPhone (Safari, Chrome) y Android (Chrome, Firefox, Samsung Internet). La interfaz se adapta automaticamente al tamano de tu pantalla." }
    },
    {
      "@type": "Question",
      "name": "Puedo subir un logo como marca de agua desde la galeria de mi telefono?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. Cuando seleccionas Marca de Agua de Imagen en OmnisPDF, tu telefono te permitira explorar tu galeria o archivos. Selecciona tu imagen de logo (PNG recomendado para mejores resultados) y se usara como marca de agua." }
    },
    {
      "@type": "Question",
      "name": "Donde se guarda el PDF con marca de agua en mi telefono?",
      "acceptedAnswer": { "@type": "Answer", "text": "El PDF con marca de agua se descarga en la ubicacion de descarga predeterminada de tu telefono. En iPhone, revisa la aplicacion Archivos en Descargas. En Android, revisa la carpeta Descargas o el gestor de descargas de tu navegador." }
    },
    {
      "@type": "Question",
      "name": "La herramienta Marca de Agua PDF es gratis en movil?",
      "acceptedAnswer": { "@type": "Answer", "text": "Marca de Agua PDF esta disponible para usuarios Pro ($7.99/mes) y Business ($13.99/mes) en todos los dispositivos, incluyendo movil. Ambos niveles incluyen marcas de agua ilimitadas y archivos de hasta 200MB." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Agregar una Marca de Agua a un PDF en Tu Telefono",
  "description": "Agrega una marca de agua a cualquier PDF desde tu iPhone o Android en 3 simples pasos usando OmnisPDF en tu navegador movil.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Abre OmnisPDF en tu telefono",
      "text": "Abre Safari, Chrome o cualquier navegador en tu telefono y ve a omnispdf.com. Toca la herramienta Marca de Agua PDF."
    },
    {
      "@type": "HowToStep",
      "name": "Sube tu PDF y agrega una marca de agua",
      "text": "Toca el area de carga para seleccionar un PDF de tus archivos. Elige una marca de agua de texto (escribe cualquier frase) o de imagen (selecciona un logo de tu galeria). Ajusta la opacidad y posicion."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga el PDF con marca de agua",
      "text": "Toca Aplicar Marca de Agua y descarga el resultado. Encuentralo en tu carpeta Descargas o aplicacion Archivos."
    }
  ]
}

export default function MarcaDeAguaPDFEnMovilPage() {
  return (
    <div className="min-h-screen bg-white">
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
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Marca de Agua PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Agregar una Marca de Agua a un PDF en Tu Telefono (iPhone y Android)</h1>
              <p className="text-xl text-slate-300">
                Necesitas agregar una marca de agua a un PDF pero no tienes tu computadora? OmnisPDF funciona en cualquier navegador movil — sin necesidad de descargar aplicaciones. Aqui te explicamos como estampar un PDF desde tu telefono en menos de un minuto.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Stamp className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">En tu telefono ahora mismo? Ve directo a la herramienta.</p>
            </div>
            <Link
              href="/es/marca-de-agua-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Marca de Agua PDF Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Por que en movil */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cuando Necesitarias Agregar una Marca de Agua a un PDF desde Tu Telefono?</h2>
              <p className="text-slate-600 mb-4">
                Cada vez mas trabajo se realiza desde dispositivos moviles. Aqui hay situaciones comunes donde podrias necesitar agregar una marca de agua a un PDF desde tu telefono:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Correo electronico urgente mientras viajas.</strong> Un cliente necesita una propuesta marcada como BORRADOR antes de una reunion, y estas en un tren o en un aeropuerto. Agrega la marca de agua desde tu telefono y enviala inmediatamente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Marcar documentos en un sitio de trabajo.</strong> Gerentes de construccion, agentes inmobiliarios e ingenieros de campo a menudo necesitan estampar documentos como CONFIDENCIAL o agregar un logo de empresa mientras estan en el lugar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Requisitos de envio de ultimo minuto.</strong> Te diste cuenta de que un documento necesita una marca de agua justo antes de una fecha limite, y tu laptop no esta disponible. El navegador de tu telefono es todo lo que necesitas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Trabajar desde una tablet.</strong> iPads y tablets Android funcionan igual de bien. La interfaz responsiva se adapta a pantallas mas grandes, dandote una experiencia cercana al escritorio.</span>
                </li>
              </ul>
            </section>

            {/* Paso a paso */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Agregar una Marca de Agua a un PDF en Tu Telefono (Paso a Paso)</h2>
              <p className="text-slate-600 mb-4">
                Marca de Agua PDF esta disponible para usuarios Pro y Business. <Link href="/es/precios" className="text-orange-600 hover:underline">Ver precios</Link> para mas detalles.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Abre OmnisPDF en tu navegador movil",
                    desc: "Abre Safari (iPhone), Chrome (Android) o cualquier navegador movil y navega a omnispdf.com. Toca la herramienta Marca de Agua PDF desde la pagina principal o el menu de herramientas. La interfaz es completamente responsiva y disenada para pantallas tactiles.",
                  },
                  {
                    title: "Sube tu PDF y configura la marca de agua",
                    desc: "Toca el area de carga para seleccionar un PDF desde la aplicacion Archivos de tu telefono, Google Drive, iCloud u otro almacenamiento. Elige entre una marca de agua de texto (escribe BORRADOR, CONFIDENCIAL o cualquier frase) o una marca de agua de imagen (selecciona un logo de tu galeria). Ajusta la opacidad, tamano y posicion usando los controles tactiles.",
                  },
                  {
                    title: "Aplica y descarga el PDF con marca de agua",
                    desc: "Toca Aplicar Marca de Agua y espera unos segundos para el procesamiento. Descarga el resultado en tu telefono. En iPhone, encuentralo en la aplicacion Archivos en Descargas. En Android, revisa la carpeta Descargas o el gestor de descargas de tu navegador.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
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

            {/* Consejos para iPhone */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos para Usuarios de iPhone</h2>
              <p className="text-slate-600 mb-4">
                Safari en iPhone maneja las cargas y descargas de PDF sin problemas, pero hay algunas cosas que debes saber:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Sube desde Archivos o iCloud.</strong> Cuando toques el area de carga, elige &quot;Explorar&quot; para acceder a tu aplicacion Archivos. Puedes subir PDF almacenados localmente, en iCloud Drive, Google Drive, Dropbox o cualquier otro proveedor de archivos conectado a tu iPhone.</li>
                <li>&#10003; <strong>Encuentra tu descarga.</strong> Despues de que el PDF con marca de agua este listo, Safari mostrara un icono de descarga en la esquina superior derecha. Tocalo para ver y abrir tu archivo. Se guarda en la carpeta Descargas en la aplicacion Archivos por defecto.</li>
                <li>&#10003; <strong>Comparte directamente desde Safari.</strong> Despues de descargar, puedes tocar el boton de compartir para enviar el PDF con marca de agua por correo electronico, Mensajes, AirDrop o cualquier otra aplicacion sin salir de Safari.</li>
                <li>&#10003; <strong>Usa un logo desde tus Fotos.</strong> Si eliges una marca de agua de imagen, tu iPhone te permitira seleccionar una imagen de tu biblioteca de Fotos. Asegurate de que tu logo este guardado como foto o en tu aplicacion Archivos.</li>
              </ul>
            </section>

            {/* Consejos para Android */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos para Usuarios de Android</h2>
              <p className="text-slate-600 mb-4">
                Chrome en Android proporciona una experiencia fluida para agregar marcas de agua a PDF:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Sube desde cualquier lugar.</strong> Tocar el area de carga abre tu selector de archivos, que te da acceso al almacenamiento local, Google Drive, OneDrive y otros proveedores de nube. Selecciona tu PDF desde cualquier ubicacion.</li>
                <li>&#10003; <strong>Revisa la barra de notificaciones.</strong> Despues de que el PDF con marca de agua sea procesado, Chrome mostrara una notificacion de descarga. Tocala para abrir el archivo directamente, o encuentralo en tu carpeta Descargas.</li>
                <li>&#10003; <strong>Comparte por cualquier aplicacion.</strong> Abre el archivo descargado y usa el menu de compartir de Android para enviarlo a traves de Gmail, WhatsApp, Slack o cualquier aplicacion instalada.</li>
                <li>&#10003; <strong>Funciona en Samsung Internet tambien.</strong> Si usas el navegador predeterminado de Samsung en lugar de Chrome, OmnisPDF funciona igual. La herramienta es compatible con todos los navegadores moviles modernos.</li>
              </ul>
            </section>

            {/* Otras herramientas moviles */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Otras Herramientas de PDF que Puedes Usar en Movil</h2>
              <p className="text-slate-600 mb-4">
                OmnisPDF esta disenado para funcionar completamente en movil con todas sus herramientas, no solo marcas de agua. Aqui hay algunas herramientas que combinan bien con marcas de agua en tu telefono:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Aplana tu marca de agua.</strong> Despues de agregar la marca de agua, usa <Link href="/es/aplanar-pdf" className="text-orange-600 hover:underline">Aplanar PDF</Link> en tu telefono para hacer la marca de agua permanente — todo desde la misma sesion del navegador.</li>
                <li>&#10003; <strong>Comprime antes de enviar por correo.</strong> Los PDF grandes pueden ser lentos de enviar desde movil. Usa <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> para reducir el tamano del archivo antes de adjuntarlo a un correo.</li>
                <li>&#10003; <strong>Protege con contrasena.</strong> Agrega una capa extra de seguridad con <Link href="/es/proteger-pdf" className="text-orange-600 hover:underline">Proteger PDF</Link> — establece una contrasena de apertura o restringe la edicion e impresion.</li>
                <li>&#10003; <strong>Une documentos.</strong> Necesitas combinar un documento marcado con otros archivos? Usa <Link href="/es/unir-pdf" className="text-orange-600 hover:underline">Unir PDF</Link> directamente desde tu telefono.</li>
                <li>&#10003; <strong>Limpia escaneos de telefono.</strong> Si escaneaste un documento con la camara de tu telefono, usa <Link href="/es/limpieza-escaneo-telefono" className="text-orange-600 hover:underline">Limpieza de Escaneo de Telefono</Link> para mejorar la calidad de imagen antes de agregar la marca de agua.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Para las mejores practicas sobre configuraciones de marca de agua como opacidad y ubicacion, consulta nuestra <Link href="/es/aprender/marca-de-agua-pdf-mejores-practicas" className="text-orange-600 hover:underline">guia de mejores practicas de marcas de agua</Link>.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Agrega una Marca de Agua a un PDF Desde Tu Telefono</h2>
            <p className="text-slate-300 mb-6">Abre OmnisPDF en tu navegador movil, sube tu PDF y agrega una marca de agua en segundos. Sin necesidad de descargar aplicaciones. Disponible para usuarios Pro y Business.</p>
            <Link
              href="/es/marca-de-agua-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Stamp className="h-5 w-5" /> Marca de Agua PDF Ahora
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Agregar una Marca de Agua a un PDF en Linea", href: "/es/aprender/como-agregar-marca-de-agua-a-pdf" },
                { title: "Agregar una Marca de Agua 'Confidencial' a un PDF (Guia Rapida)", href: "/es/aprender/marca-de-agua-pdf-confidencial" },
                { title: "Mejores Practicas de Marca de Agua en PDF (Tamano, Opacidad y Ubicacion)", href: "/es/aprender/marca-de-agua-pdf-mejores-practicas" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "Puedo agregar una marca de agua a un PDF en mi telefono?", a: "Si. OmnisPDF funciona en cualquier navegador movil — Safari en iPhone, Chrome en Android o cualquier otro navegador. Sube tu PDF, agrega una marca de agua de texto o imagen, y descarga el resultado directamente en tu telefono." },
                { q: "Necesito descargar una aplicacion para agregar marca de agua a un PDF en movil?", a: "No. OmnisPDF es una herramienta basada en web que funciona completamente en tu navegador. Sin instalacion de aplicacion, sin cuenta requerida para funciones basicas. Solo abre omnispdf.com en tu telefono y comienza a agregar marcas de agua." },
                { q: "Funciona igual en iPhone y Android?", a: "Si. OmnisPDF es completamente responsivo y funciona de manera identica en iPhone (Safari, Chrome) y Android (Chrome, Firefox, Samsung Internet). La interfaz se adapta automaticamente al tamano de tu pantalla." },
                { q: "Puedo subir un logo como marca de agua desde la galeria de mi telefono?", a: "Si. Cuando seleccionas Marca de Agua de Imagen en OmnisPDF, tu telefono te permitira explorar tu galeria o archivos. Selecciona tu imagen de logo (PNG recomendado para mejores resultados) y se usara como marca de agua." },
                { q: "Donde se guarda el PDF con marca de agua en mi telefono?", a: "El PDF con marca de agua se descarga en la ubicacion de descarga predeterminada de tu telefono. En iPhone, revisa la aplicacion Archivos en Descargas. En Android, revisa la carpeta Descargas o el gestor de descargas de tu navegador." },
                { q: "La herramienta Marca de Agua PDF es gratis en movil?", a: "Marca de Agua PDF esta disponible para usuarios Pro ($7.99/mes) y Business ($13.99/mes) en todos los dispositivos, incluyendo movil. Ambos niveles incluyen marcas de agua ilimitadas y archivos de hasta 200MB." },
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
