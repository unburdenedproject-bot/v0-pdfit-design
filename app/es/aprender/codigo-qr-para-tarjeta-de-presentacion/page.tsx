import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Codigo QR para Tarjetas de Presentacion (Enlaza a Tu Sitio Web o vCard) | OmnisPDF",
  description:
    "Aprende como agregar un codigo QR a tu tarjeta de presentacion que enlace a tu sitio web, LinkedIn o informacion de contacto vCard. Genera codigos QR para tarjetas con OmnisPDF.",
  keywords: "codigo qr tarjeta de presentacion, codigo qr para contacto, generador codigo qr tarjeta, codigo qr vcard",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "A que debe enlazar un codigo QR de tarjeta de presentacion?",
      "acceptedAnswer": { "@type": "Answer", "text": "Las opciones mas comunes son tu sitio web, perfil de LinkedIn o un archivo vCard que guarda tu informacion de contacto directamente en el telefono de alguien. Elige segun tu objetivo — sitio web para portafolio o ventas, vCard para networking." }
    },
    {
      "@type": "Question",
      "name": "Que es un codigo QR de vCard?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un codigo QR de vCard codifica tus datos de contacto (nombre, telefono, correo, empresa, direccion) para que cuando se escanee, el telefono de la persona le pida guardar tu contacto. Es el tipo de codigo QR mas practico para tarjetas de presentacion." }
    },
    {
      "@type": "Question",
      "name": "Que tamano debe tener un codigo QR en una tarjeta de presentacion?",
      "acceptedAnswer": { "@type": "Answer", "text": "Al menos 2cm x 2cm (aproximadamente 0.8 x 0.8 pulgadas). Los codigos QR mas pequenos son mas dificiles de leer para las camaras de telefono, especialmente con poca luz. Si el diseno de tu tarjeta lo permite, hazlo mas grande — 2.5cm es ideal." }
    },
    {
      "@type": "Question",
      "name": "Donde debo colocar el codigo QR en mi tarjeta de presentacion?",
      "acceptedAnswer": { "@type": "Answer", "text": "Colocalo en la parte trasera de la tarjeta para mantener el frente limpio y profesional. Si va en el frente, ponlo en una esquina con suficiente espacio blanco alrededor. Nunca dejes que texto o graficos se superpongan al codigo QR." }
    },
    {
      "@type": "Question",
      "name": "Puedo actualizar el destino del codigo QR mas tarde?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los codigos QR estaticos no se pueden actualizar — la URL o datos estan integrados en el patron. Si crees que podrias cambiar la URL de tu sitio web, usa un servicio de enlaces cortos que te permita redirigir el destino sin cambiar el codigo QR." }
    },
    {
      "@type": "Question",
      "name": "El generador de Codigo QR es una funcion Pro?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. La herramienta de Codigo QR de OmnisPDF es una funcion Pro disponible por $7.99/mes. Los usuarios Pro obtienen generacion ilimitada de codigos QR mas todas las herramientas premium de PDF." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Crear un Codigo QR para Tu Tarjeta de Presentacion",
  "description": "Genera un codigo QR profesional para tu tarjeta de presentacion en 3 simples pasos usando OmnisPDF.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Elige tipo vCard o URL",
      "text": "Abre la herramienta de Codigo QR de OmnisPDF y selecciona vCard (para codificar tu informacion de contacto completa) o URL (para enlazar a tu sitio web o perfil de LinkedIn)."
    },
    {
      "@type": "HowToStep",
      "name": "Ingresa tus datos",
      "text": "Llena tu nombre, telefono, correo y empresa para vCard — o pega la URL de tu sitio web. Manten los datos concisos para asegurar que el codigo QR sea escaneable."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga y agrega a tu diseno de tarjeta",
      "text": "Descarga el codigo QR como SVG para calidad de impresion. Importalo en tu herramienta de diseno de tarjetas y colocalo con espacio blanco adecuado alrededor."
    }
  ]
}

export default function CodigoQRParaTarjetaPresentacionPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Codigo QR</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Codigo QR para Tarjetas de Presentacion (Enlaza a Tu Sitio Web o vCard)</h1>
              <p className="text-xl text-slate-300">
                Un codigo QR en tu tarjeta de presentacion conecta el mundo fisico con el digital. Un escaneo y tu nuevo contacto tiene tu sitio web, LinkedIn o todos tus datos de contacto guardados en su telefono.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <QrCode className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Listo para crear el codigo QR de tu tarjeta? Ve directo a la herramienta.</p>
            </div>
            <Link
              href="/es/codigo-qr"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Crear Codigo QR <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why add QR to business card */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Agregar un Codigo QR a Tu Tarjeta de Presentacion?</h2>
              <p className="text-slate-600 mb-4">
                Las tarjetas de presentacion tienen un problema: las personas las coleccionan en eventos y conferencias, las tiran en un cajon y nunca las vuelven a ver. Un codigo QR resuelve esto al hacer que sea facilisimo para alguien guardar tu informacion de contacto o visitar tu sitio web en el momento que recibe tu tarjeta.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Guardado instantaneo de contacto.</strong> Un codigo QR de vCard permite que las personas guarden tu nombre, correo, telefono y empresa en sus contactos con un solo escaneo. Sin escribir manualmente, sin errores tipograficos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Genera trafico a tu sitio web.</strong> Enlaza a tu portafolio, tienda en linea o sitio web de tu empresa. Las personas son mucho mas propensas a visitar cuando pueden escanear en lugar de escribir una URL.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Impresion profesional.</strong> Un codigo QR senala que eres experto en tecnologia y atento al hacer las cosas faciles para tus contactos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Eficiencia de espacio.</strong> En lugar de amontonar tu URL de LinkedIn, sitio web y perfiles sociales en una tarjeta diminuta, pon todo detras de un solo codigo QR.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Crear un Codigo QR para Tarjeta de Presentacion (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Decide a que enlazar",
                    desc: "Elige entre una vCard (guarda tu informacion de contacto completa en el telefono del escaner), la URL de tu sitio web, tu perfil de LinkedIn o una pagina de destino con todos tus enlaces. vCard es mejor para networking; URL es mejor para generar trafico.",
                  },
                  {
                    title: "Genera el codigo QR",
                    desc: "Abre la herramienta de Codigo QR de OmnisPDF (funcion Pro), selecciona tu tipo e ingresa tus datos. Para vCard, llena tu nombre, titulo, empresa, telefono, correo y direccion. Para URL, pega tu enlace. Manten los datos minimos para un codigo mas limpio y escaneable.",
                  },
                  {
                    title: "Descarga como SVG y agrega a tu tarjeta",
                    desc: "Descarga el codigo QR como archivo SVG — este formato vectorial se imprime en cualquier tamano sin pixelacion. Importalo en tu diseno de tarjeta de presentacion en Canva, Illustrator o cualquier herramienta que uses. Colocalo con al menos 3mm de espacio blanco en todos los lados.",
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

            {/* vCard vs URL */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Codigo QR vCard vs. Codigo QR de URL: Cual Elegir?</h2>
              <p className="text-slate-600 mb-4">
                Esta es la decision mas importante al agregar un codigo QR a tu tarjeta de presentacion. Asi es como elegir:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Elige vCard Si...</h3>
                  <p className="text-slate-600">
                    Tu objetivo principal es el networking. Los codigos QR de vCard guardan tu nombre, numero de telefono, correo, nombre de empresa, titulo de trabajo e incluso tu direccion directamente en los contactos del telefono del escaner. Esta es la opcion mas practica para conferencias, ferias comerciales y eventos de networking donde las personas conocen docenas de contactos y necesitan guardar informacion rapidamente.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Elige URL Si...</h3>
                  <p className="text-slate-600">
                    Quieres generar trafico a tu sitio web, portafolio o una pagina de destino. Esto funciona bien para freelancers, disenadores y vendedores que quieren que los prospectos vean su trabajo u ofertas. Tambien puedes enlazar a una pagina de "enlace en bio" que contenga todos tus perfiles sociales en un solo lugar.
                  </p>
                </div>
              </div>
              <p className="text-slate-600 mt-4">
                Aprende mas sobre los diferentes tipos en nuestra guia <Link href="/es/aprender/tipos-de-codigo-qr-explicados" className="text-orange-600 hover:underline">Tipos de Codigo QR Explicados</Link>.
              </p>
            </section>

            {/* Design tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos de Diseno para Codigos QR en Tarjetas de Presentacion</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Tamano minimo: 2cm x 2cm.</strong> Cualquier cosa mas pequena se vuelve poco confiable para escanear, especialmente con poca luz. Apunta a 2.5cm si el diseno de tu tarjeta lo permite.</li>
                <li>&#10003; <strong>Usa alto contraste.</strong> Codigo QR oscuro sobre fondo claro. Negro sobre blanco es lo mas seguro. Evita colocar codigos QR en fondos ocupados u oscuros.</li>
                <li>&#10003; <strong>Deja espacio blanco.</strong> El codigo QR necesita una "zona tranquila" — al menos 3mm de espacio en blanco alrededor de todos los lados. Esto ayuda a los escaneres a distinguir el codigo de los elementos de diseno circundantes.</li>
                <li>&#10003; <strong>La parte trasera de la tarjeta es ideal.</strong> Manten el frente limpio con tu nombre, titulo e informacion clave. El codigo QR en la parte trasera obtiene su propio espacio y atencion.</li>
                <li>&#10003; <strong>Agrega un llamado a la accion.</strong> Imprime "Escanea para guardar mi contacto" o "Escanea para ver mi portafolio" junto al codigo QR para que las personas sepan que esperar.</li>
                <li>&#10003; <strong>Prueba antes de imprimir en masa.</strong> Imprime una tarjeta y escanea el codigo QR con al menos dos telefonos diferentes. Consulta nuestras <Link href="/es/aprender/mejores-practicas-codigo-qr" className="text-orange-600 hover:underline">mejores practicas de codigo QR</Link> para mas consejos.</li>
              </ul>
            </section>

            {/* Printing considerations */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consideraciones de Impresion y Formato de Archivo</h2>
              <p className="text-slate-600 mb-4">
                El formato de archivo que descargues importa para la calidad de impresion. Esto es lo que debes usar:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>SVG para impresion.</strong> SVG es un formato vectorial que escala perfectamente a cualquier tamano. Usa esto cuando envies tu diseno de tarjeta a una imprenta. Se mantendra nitido en cualquier resolucion.</li>
                <li>&#10003; <strong>PNG para digital.</strong> Usa PNG si compartes tu codigo QR digitalmente — en firmas de correo, sitios web o presentaciones.</li>
                <li>&#10003; <strong>Evita JPEG.</strong> La compresion JPEG puede difuminar los detalles finos de los codigos QR, haciendolos mas dificiles de escanear. Quedate con PNG o SVG.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Si necesitas incrustar tu codigo QR en una version PDF de tu tarjeta, puedes usar <Link href="/es/word-a-pdf" className="text-orange-600 hover:underline">Word a PDF</Link> o disenar tu tarjeta y convertirla. Necesitas comprimir el archivo final? Usa <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> para mantenerlo amigable para correo.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Crea Tu Codigo QR para Tarjeta de Presentacion</h2>
            <p className="text-slate-300 mb-6">Genera un codigo QR de vCard o URL en segundos. Funcion Pro — actualiza para codigos QR ilimitados y todas las herramientas premium.</p>
            <Link
              href="/es/codigo-qr"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <QrCode className="h-5 w-5" /> Crear Codigo QR Ahora
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Crear un Codigo QR en Linea (Generador Gratuito)", href: "/es/aprender/como-crear-codigo-qr" },
                { title: "Mejores Practicas de Codigo QR (Tamano, Ubicacion y Pruebas)", href: "/es/aprender/mejores-practicas-codigo-qr" },
                { title: "Tipos de Codigo QR Explicados (URL, Texto, WiFi, vCard y Mas)", href: "/es/aprender/tipos-de-codigo-qr-explicados" },
                { title: "Crear un Codigo QR que Enlace a un Documento PDF", href: "/es/aprender/codigo-qr-para-pdf" },
                { title: "Codigo QR para Menus de Restaurante (Crea un Enlace Escaneable)", href: "/es/aprender/codigo-qr-para-menu-de-restaurante" },
                { title: "Crear un Codigo QR para WiFi (Los Invitados se Conectan al Instante)", href: "/es/aprender/codigo-qr-para-wifi" },
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
                { q: "A que debe enlazar un codigo QR de tarjeta de presentacion?", a: "Las opciones mas comunes son tu sitio web, perfil de LinkedIn o un archivo vCard que guarda tu informacion de contacto directamente en el telefono de alguien. Elige segun tu objetivo — sitio web para portafolio o ventas, vCard para networking." },
                { q: "Que es un codigo QR de vCard?", a: "Un codigo QR de vCard codifica tus datos de contacto (nombre, telefono, correo, empresa, direccion) para que cuando se escanee, el telefono de la persona le pida guardar tu contacto. Es el tipo de codigo QR mas practico para tarjetas de presentacion." },
                { q: "Que tamano debe tener un codigo QR en una tarjeta de presentacion?", a: "Al menos 2cm x 2cm (aproximadamente 0.8 x 0.8 pulgadas). Los codigos QR mas pequenos son mas dificiles de leer para las camaras, especialmente con poca luz. Si el diseno de tu tarjeta lo permite, hazlo mas grande — 2.5cm es ideal." },
                { q: "Donde debo colocar el codigo QR en mi tarjeta?", a: "Colocalo en la parte trasera de la tarjeta para mantener el frente limpio y profesional. Si va en el frente, ponlo en una esquina con suficiente espacio blanco alrededor. Nunca dejes que texto o graficos se superpongan al codigo QR." },
                { q: "Puedo actualizar el destino del codigo QR mas tarde?", a: "Los codigos QR estaticos no se pueden actualizar — la URL o datos estan integrados en el patron. Si crees que podrias cambiar la URL de tu sitio web, usa un servicio de enlaces cortos que te permita redirigir el destino sin cambiar el codigo QR." },
                { q: "El generador de Codigo QR es una funcion Pro?", a: "Si. La herramienta de Codigo QR de OmnisPDF es una funcion Pro disponible por $7.99/mes. Los usuarios Pro obtienen generacion ilimitada de codigos QR mas todas las herramientas premium de PDF." },
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
