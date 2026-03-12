import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Unlock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Desbloquear un PDF en Tu Telefono (iPhone y Android) | OmnisPDF",
  description:
    "Aprende como desbloquear un PDF en tu telefono — iPhone o Android. Elimina restricciones y contrasenas de PDF desde tu navegador movil. Sin necesidad de instalar aplicaciones.",
  keywords: "desbloquear pdf en telefono, desbloquear pdf iphone, eliminar contrasena pdf android, desbloquear pdf movil",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Puedo desbloquear un PDF en mi iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. Abre Safari o Chrome en tu iPhone, ve a la herramienta Desbloquear PDF de OmnisPDF, sube tu archivo y descarga la version desbloqueada. No necesitas instalar ninguna aplicacion — funciona completamente en el navegador." }
    },
    {
      "@type": "Question",
      "name": "Puedo desbloquear un PDF en Android?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. Abre Chrome, Firefox o cualquier navegador en tu telefono Android, ve a la herramienta Desbloquear PDF de OmnisPDF, toca para subir tu PDF y descarga el archivo desbloqueado. Funciona en todos los dispositivos Android." }
    },
    {
      "@type": "Question",
      "name": "Necesito instalar una aplicacion para desbloquear PDF en mi telefono?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. OmnisPDF es una herramienta basada en web que funciona en cualquier navegador movil. No necesitas descargar ni instalar ninguna aplicacion. Solo visita omnispdf.com, sube tu PDF y desbloquealo." }
    },
    {
      "@type": "Question",
      "name": "Donde se guarda el PDF desbloqueado en mi telefono?",
      "acceptedAnswer": { "@type": "Answer", "text": "En iPhone, el archivo se guarda en la carpeta Descargas en la aplicacion Archivos. En Android, se guarda en la carpeta Descargas. Tambien puedes encontrarlo en el historial de descargas de tu navegador." }
    },
    {
      "@type": "Question",
      "name": "Hay limite de tamano de archivo en movil?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios gratuitos pueden subir PDF de hasta 25MB, lo que cubre la mayoria de los documentos que tendrias en tu telefono. Los usuarios Pro pueden subir archivos de hasta 200MB. La velocidad de datos moviles o Wi-Fi puede afectar el tiempo de carga para archivos mas grandes." }
    },
    {
      "@type": "Question",
      "name": "Puedo imprimir el PDF desbloqueado desde mi telefono?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. Despues de descargar el PDF desbloqueado, abrelo en tu telefono y usa el boton de compartir para imprimir. En iPhone, usa AirPrint para enviarlo a una impresora cercana. En Android, usa la opcion de impresion integrada o Google Cloud Print." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Desbloquear un PDF en Tu Telefono",
  "description": "Elimina las restricciones de PDF en iPhone o Android en 3 simples pasos con OmnisPDF.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Abre OmnisPDF en tu navegador movil",
      "text": "Abre Safari (iPhone) o Chrome (Android) y ve a omnispdf.com. Toca la herramienta Desbloquear PDF."
    },
    {
      "@type": "HowToStep",
      "name": "Sube tu PDF bloqueado",
      "text": "Toca el area de carga para seleccionar tu PDF desde Archivos (iPhone) o tu gestor de archivos (Android). Ingresa la contrasena si el PDF requiere una para abrirse."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga el PDF desbloqueado",
      "text": "Toca Desbloquear y descarga el PDF sin restricciones. El archivo se guarda en tu carpeta Descargas, listo para imprimir, compartir o editar."
    }
  ]
}

export default function DesbloquearPDFEnMovilPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Desbloquear PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Desbloquear un PDF en Tu Telefono (iPhone y Android)</h1>
              <p className="text-xl text-slate-300">
                Necesitas desbloquear un PDF pero solo tienes tu telefono? No hay problema. Aqui te explicamos como eliminar las restricciones de PDF directamente desde tu navegador movil — sin necesidad de aplicaciones.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Unlock className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">En tu telefono ahora mismo? Desbloquea tu PDF en segundos.</p>
            </div>
            <Link
              href="/es/desbloquear-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Desbloquear PDF Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Por que en movil */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Podrias Necesitar Desbloquear un PDF en Tu Telefono</h2>
              <p className="text-slate-600 mb-4">
                Cada vez mas personas manejan documentos completamente desde sus telefonos. Recibes un PDF por WhatsApp, correo electronico o una aplicacion de mensajeria, y necesitas hacer algo con el ahora mismo — pero el archivo esta bloqueado. Escenarios comunes:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Alguien te envio un PDF restringido</strong> y necesitas copiar una seccion de texto para una respuesta rapida. Estas en el metro con solo tu telefono.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Recibiste un PDF que necesitas imprimir</strong> en una tienda de impresion cercana, pero la restriccion de impresion te lo impide. No tienes laptop disponible.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Necesitas reenviar una version desbloqueada</strong> de un documento a un colega o cliente, y tu laptop no esta accesible.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Estas viajando</strong> y necesitas acceder a un documento protegido con contrasena para una reunion o cita. Tu telefono es tu unico dispositivo.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                OmnisPDF funciona en cualquier navegador movil — sin descarga de aplicacion, sin cuenta requerida para uso basico. Solo sube, desbloquea y descarga.
              </p>
            </section>

            {/* Paso a paso — iPhone */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Desbloquear un PDF en iPhone (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Abre Safari y ve a OmnisPDF",
                    desc: "Abre Safari (o Chrome) en tu iPhone y navega a omnispdf.com. Toca \"Desbloquear PDF\" en el menu de herramientas, o ve directamente a omnispdf.com/es/desbloquear-pdf.",
                  },
                  {
                    title: "Sube tu PDF bloqueado",
                    desc: "Toca el area de carga. Tu iPhone te mostrara opciones para buscar en Archivos, iCloud Drive o descargas recientes. Selecciona el PDF bloqueado. Si el PDF fue compartido via correo electronico o WhatsApp, guardalo en Archivos primero, luego subelo desde alli.",
                  },
                  {
                    title: "Descarga el archivo desbloqueado",
                    desc: "Toca Desbloquear y espera unos segundos. Cuando la descarga este lista, toca Descargar. El archivo se guarda en tu carpeta Descargas en la aplicacion Archivos. Abrelo para verificar — ahora puedes imprimir, copiar y compartir libremente.",
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

            {/* Paso a paso — Android */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Desbloquear un PDF en Android (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Abre Chrome y ve a OmnisPDF",
                    desc: "Abre Chrome (o Firefox, Samsung Internet o cualquier navegador) en tu telefono Android. Ve a omnispdf.com y toca \"Desbloquear PDF\" en la lista de herramientas.",
                  },
                  {
                    title: "Sube tu PDF bloqueado",
                    desc: "Toca el area de carga. Android abrira tu selector de archivos — navega a Descargas, Google Drive o donde sea que este almacenado el PDF. Selecciona el archivo. Si el PDF requiere una contrasena de apertura, ingresala cuando se te solicite.",
                  },
                  {
                    title: "Descarga el archivo desbloqueado",
                    desc: "Toca Desbloquear y espera el procesamiento. El PDF desbloqueado se descarga en tu carpeta Descargas. Puedes encontrarlo en la barra de notificaciones o en la aplicacion Archivos/Mis Archivos de tu telefono.",
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

            {/* Consejos para movil */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos para Trabajar con PDF en Tu Telefono</h2>
              <p className="text-slate-600 mb-4">
                Una vez que tu PDF este desbloqueado, aqui hay algunas cosas utiles que puedes hacer con el en tu dispositivo movil:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Imprimir desde tu telefono.</strong> En iPhone, usa AirPrint (toca Compartir, luego Imprimir). En Android, usa la opcion de impresion integrada en tu visor de PDF o el menu Compartir.</li>
                <li>&#10003; <strong>Copiar texto.</strong> Abre el PDF desbloqueado, mantien presionado el texto que quieres copiar y pegalo en cualquier aplicacion — correo, notas, mensajes.</li>
                <li>&#10003; <strong>Compartir por mensajeria.</strong> Toca el boton de compartir para enviar el PDF desbloqueado a traves de WhatsApp, Telegram, correo electronico o cualquier aplicacion de mensajeria.</li>
                <li>&#10003; <strong>Comprimir para compartir facilmente.</strong> Si el PDF es demasiado grande para enviar por correo, usa <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> desde tu telefono para reducir el tamano del archivo.</li>
              </ul>
            </section>

            {/* Otras herramientas moviles */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Otras Herramientas de PDF que Funcionan en Tu Telefono</h2>
              <p className="text-slate-600 mb-4">
                OmnisPDF es completamente responsivo — todas las herramientas funcionan en movil. Aqui estan las mas utiles para usuarios de telefono:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Comprimir PDF</h3>
                  <p className="text-slate-600">
                    Las fotos y escaneos de telefono crean PDF grandes. Usa <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> para reducir el tamano del archivo antes de compartir por correo o aplicaciones de mensajeria. Tambien puedes apuntar a tamanos especificos como <Link href="/es/comprimir-pdf-a-5mb" className="text-orange-600 hover:underline">5MB</Link> o <Link href="/es/comprimir-pdf-a-2mb" className="text-orange-600 hover:underline">2MB</Link>.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Limpieza de Escaneo de Telefono</h3>
                  <p className="text-slate-600">
                    Tomaste una foto de un documento con la camara de tu telefono? Usa <Link href="/es/limpiar-escaneo" className="text-orange-600 hover:underline">Limpieza de Escaneo de Telefono</Link> para enderezar, mejorar y convertirla en un PDF limpio y profesional.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Proteger PDF</h3>
                  <p className="text-slate-600">
                    Necesitas agregar una contrasena a un PDF antes de compartirlo desde tu telefono? Usa <Link href="/es/proteger-pdf" className="text-orange-600 hover:underline">Proteger PDF</Link> para establecer una contrasena de apertura o restricciones de permisos — todo desde tu navegador movil.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Unir PDF</h3>
                  <p className="text-slate-600">
                    Necesitas combinar multiples PDF en tu telefono? Usa <Link href="/es/unir-pdf" className="text-orange-600 hover:underline">Unir PDF</Link> para juntar documentos. Ideal para combinar recibos, boletos o paginas de documentos en un solo archivo.
                  </p>
                </div>
              </div>
            </section>

            {/* No necesitas app */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que No Necesitas una Aplicacion de PDF</h2>
              <p className="text-slate-600 mb-4">
                La App Store y Google Play estan llenas de aplicaciones de PDF que ocupan almacenamiento, muestran anuncios y a menudo requieren suscripciones de pago. OmnisPDF funciona de manera diferente:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Sin descarga requerida.</strong> OmnisPDF funciona completamente en tu navegador. No se usa espacio de almacenamiento en tu telefono.</li>
                <li>&#10003; <strong>Sin cuenta necesaria para uso basico.</strong> Desbloquea hasta 3 PDF sin crear una cuenta. Inicia sesion para hasta 10 desbloqueos gratis por dia.</li>
                <li>&#10003; <strong>Funciona en cualquier telefono.</strong> iPhone, Android, Samsung, Google Pixel, OnePlus — si tiene un navegador, OmnisPDF funciona en el.</li>
                <li>&#10003; <strong>Siempre actualizado.</strong> Sin actualizaciones de aplicacion que instalar. OmnisPDF siempre es la version mas reciente cuando visitas el sitio.</li>
                <li>&#10003; <strong>Procesamiento seguro.</strong> Tus archivos se procesan a traves de HTTPS y se eliminan automaticamente despues del procesamiento. Nada se almacena en nuestros servidores.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Desbloquea Tu PDF Ahora Mismo</h2>
            <p className="text-slate-300 mb-6">Funciona en iPhone, Android y cualquier dispositivo con navegador. Sin necesidad de aplicacion — solo sube, desbloquea y descarga.</p>
            <Link
              href="/es/desbloquear-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Unlock className="h-5 w-5" /> Desbloquear PDF Ahora
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Desbloquear un PDF en Linea (Quitar Restricciones)", href: "/es/aprender/como-desbloquear-pdf" },
                { title: "Desbloquear un PDF para Imprimir (Quitar Restricciones de Impresion)", href: "/es/aprender/desbloquear-pdf-para-imprimir" },
                { title: "Olvidaste Tu Contrasena de PDF? Esto Es Lo Que Puedes Hacer", href: "/es/aprender/desbloquear-pdf-contrasena-olvidada" },
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
                { q: "Puedo desbloquear un PDF en mi iPhone?", a: "Si. Abre Safari o Chrome en tu iPhone, ve a la herramienta Desbloquear PDF de OmnisPDF, sube tu archivo y descarga la version desbloqueada. No necesitas instalar ninguna aplicacion — funciona completamente en el navegador." },
                { q: "Puedo desbloquear un PDF en Android?", a: "Si. Abre Chrome, Firefox o cualquier navegador en tu telefono Android, ve a la herramienta Desbloquear PDF de OmnisPDF, toca para subir tu PDF y descarga el archivo desbloqueado. Funciona en todos los dispositivos Android." },
                { q: "Necesito instalar una aplicacion para desbloquear PDF en mi telefono?", a: "No. OmnisPDF es una herramienta basada en web que funciona en cualquier navegador movil. No necesitas descargar ni instalar ninguna aplicacion. Solo visita omnispdf.com, sube tu PDF y desbloquealo." },
                { q: "Donde se guarda el PDF desbloqueado en mi telefono?", a: "En iPhone, el archivo se guarda en la carpeta Descargas en la aplicacion Archivos. En Android, se guarda en la carpeta Descargas. Tambien puedes encontrarlo en el historial de descargas de tu navegador." },
                { q: "Hay limite de tamano de archivo en movil?", a: "Los usuarios gratuitos pueden subir PDF de hasta 25MB, lo que cubre la mayoria de los documentos que tendrias en tu telefono. Los usuarios Pro pueden subir archivos de hasta 200MB. La velocidad de datos moviles o Wi-Fi puede afectar el tiempo de carga para archivos mas grandes." },
                { q: "Puedo imprimir el PDF desbloqueado desde mi telefono?", a: "Si. Despues de descargar el PDF desbloqueado, abrelo en tu telefono y usa el boton de compartir para imprimir. En iPhone, usa AirPrint para enviarlo a una impresora cercana. En Android, usa la opcion de impresion integrada o Google Cloud Print." },
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
