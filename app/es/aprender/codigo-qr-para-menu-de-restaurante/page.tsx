import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Codigo QR para Menus de Restaurante (Crea un Enlace Escaneable) | OmnisPDF",
  description:
    "Aprende como crear un codigo QR para el menu de tu restaurante. Enlaza a un menu PDF o sitio web para que los clientes escaneen y vean tu menu en su telefono al instante.",
  keywords: "codigo qr menu restaurante, menu codigo qr, menu escaneable, codigo qr para cafeteria",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como creo un codigo QR para el menu de mi restaurante?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu menu como PDF a un servicio de alojamiento o tu sitio web, copia la URL, luego usa la herramienta de Codigo QR de OmnisPDF para generar un codigo QR para esa URL. Imprime el codigo QR en carpas de mesa, stickers o letreros." }
    },
    {
      "@type": "Question",
      "name": "Debo enlazar a un menu PDF o una pagina web?",
      "acceptedAnswer": { "@type": "Answer", "text": "Una pagina web es mas facil de actualizar (cambiar precios, agregar platillos) sin reimprimir codigos QR. Un menu PDF es mas simple de crear y se ve exactamente como tu menu impreso. Elige segun la frecuencia con que cambia tu menu." }
    },
    {
      "@type": "Question",
      "name": "Que tamano debe tener un codigo QR de menu?",
      "acceptedAnswer": { "@type": "Answer", "text": "Al menos 3cm x 3cm para carpas de mesa y stickers. Para letreros de pared o posters, hazlo mas grande. La distancia de escaneo importa — los clientes deben poder escanear desde al menos 30cm en la iluminacion del restaurante." }
    },
    {
      "@type": "Question",
      "name": "Los clientes pueden escanear el codigo QR sin una app?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. Todos los smartphones modernos (iPhone y Android) pueden escanear codigos QR directamente con su app de camara integrada. No se necesita una app separada de lectura de QR." }
    },
    {
      "@type": "Question",
      "name": "Como actualizo mi menu sin reimprimir los codigos QR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usa un acortador de URL o servicio de redireccion. El codigo QR apunta a una URL corta, y cambias a donde redirige esa URL corta cada vez que actualizas tu menu. De esta manera el codigo QR sigue siendo el mismo." }
    },
    {
      "@type": "Question",
      "name": "Es una herramienta gratuita?",
      "acceptedAnswer": { "@type": "Answer", "text": "El generador de Codigo QR de OmnisPDF es una funcion Pro a $7.99/mes. Pro incluye codigos QR ilimitados mas todas las herramientas PDF — perfecto para restaurantes que tambien necesitan comprimir, convertir o gestionar menus en PDF." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Crear un Codigo QR para el Menu de Tu Restaurante",
  "description": "Configura un codigo QR escaneable para el menu de tu restaurante en 3 simples pasos usando OmnisPDF.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Aloja tu menu en linea",
      "text": "Sube tu menu PDF a tu sitio web, Google Drive o un servicio de alojamiento de archivos. Copia la URL publica donde los clientes pueden ver el menu."
    },
    {
      "@type": "HowToStep",
      "name": "Genera el codigo QR",
      "text": "Abre la herramienta de Codigo QR de OmnisPDF, selecciona tipo URL y pega el enlace de tu menu. Personaliza los colores para que coincidan con la marca de tu restaurante si lo deseas."
    },
    {
      "@type": "HowToStep",
      "name": "Imprime y coloca en las mesas",
      "text": "Descarga el codigo QR como SVG para calidad de impresion. Agregalo a carpas de mesa, stickers o letreros con el texto 'Escanea para ver el Menu'. Pruebalo antes de imprimir en masa."
    }
  ]
}

export default function CodigoQRParaMenuRestaurantePage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Codigo QR para Menus de Restaurante (Crea un Enlace Escaneable)</h1>
              <p className="text-xl text-slate-300">
                Deja que los clientes escaneen un codigo QR en la mesa y vean tu menu completo en su telefono. Sin descargar apps, sin menus fisicos que limpiar o reimprimir. Aqui te explicamos como configurarlo.
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
              <p className="text-slate-700 font-semibold">Listo para crear el codigo QR de tu menu? Ve directo a la herramienta.</p>
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

            {/* Why use QR menus */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que los Restaurantes Estan Cambiando a Menus con Codigo QR</h2>
              <p className="text-slate-600 mb-4">
                Los menus con codigo QR explotaron durante la pandemia, pero llegaron para quedarse. Restaurantes, cafeterias, bares y food trucks los mantienen porque los beneficios van mucho mas alla de la higiene:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Actualizaciones instantaneas.</strong> Cambia precios, agrega especiales de temporada o elimina platillos agotados sin reimprimir nada. Actualiza el menu en linea y cada codigo QR en tu restaurante refleja el cambio inmediatamente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Ahorro de costos.</strong> Los menus impresos son caros — especialmente cuando tienes multiples paginas, rotaciones de temporada o cambios frecuentes de precios. Un codigo QR no cuesta nada para actualizar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Rotacion de mesas mas rapida.</strong> Los clientes pueden ver el menu mientras esperan a un mesero. Pasan menos tiempo decidiendo y mas tiempo pidiendo, lo que aumenta la rotacion de mesas en horas pico.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Soporte multilingue.</strong> Enlaza a una pagina web con opciones de idioma o aloja multiples menus PDF (espanol, ingles, etc.) — los clientes eligen su idioma despues de escanear.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Configurar un Codigo QR para Menu (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Crea o digitaliza tu menu",
                    desc: "Si ya tienes un menu en PDF, estas listo. Si tu menu es solo impreso, fotografialo o recrealo en Word/Google Docs y exportalo como PDF. Usa la herramienta Word a PDF de OmnisPDF si es necesario. Asegurate de que el texto sea legible en la pantalla de un telefono.",
                  },
                  {
                    title: "Aloja tu menu en linea",
                    desc: "Sube el PDF a tu sitio web, Google Drive (configura compartir como 'Cualquiera con el enlace') o un servicio de alojamiento. Copia la URL publica. Si usas Google Drive, asegurate de que el enlace abra el PDF directamente, no la interfaz de Drive.",
                  },
                  {
                    title: "Genera e imprime el codigo QR",
                    desc: "Abre la herramienta de Codigo QR de OmnisPDF (funcion Pro), pega la URL de tu menu y genera el codigo. Descarga como SVG para impresion. Imprime en carpas de mesa, soportes acrilicos, letreros de pared o stickers. Agrega el texto 'Escanea para ver el Menu' para que los clientes sepan que hacer.",
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

            {/* PDF vs webpage */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Menu PDF vs. Menu en Pagina Web: Cual Es Mejor?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Menu PDF</h3>
                  <p className="text-slate-600">
                    Mejor para restaurantes con un menu estable que no cambia frecuentemente. Un PDF se ve exactamente como tu menu impreso, lo cual es familiar y facil de leer. Puedes crear uno en Word, Google Docs o Canva y convertirlo a PDF. Si el archivo es muy grande, usa <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> para reducir el tamano y que cargue rapidamente en telefonos.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Menu en Pagina Web</h3>
                  <p className="text-slate-600">
                    Mejor para restaurantes que actualizan su menu frecuentemente — especiales del dia, platillos de temporada, cambios de precios. Una pagina web es mas facil de actualizar (sin archivo que volver a subir) y puede incluir fotos, descripciones e incluso pedidos en linea. La desventaja es que necesitas un sitio web o un servicio de creacion de menus.
                  </p>
                </div>
              </div>
              <p className="text-slate-600 mt-4">
                De cualquier manera, el codigo QR funciona igual — enlaza a una URL. La unica diferencia es si esa URL abre un archivo PDF o una pagina web.
              </p>
            </section>

            {/* Placement tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Donde Colocar Tu Codigo QR de Menu</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Carpas de mesa.</strong> Pequenas tarjetas dobladas que se paran sobre la mesa. Imprime el codigo QR en ambos lados para que sea visible desde cualquier angulo.</li>
                <li>&#10003; <strong>Soportes acrilicos.</strong> Soportes transparentes de acrilico con el codigo QR impreso en una tarjeta adentro. Se ven profesionales y son faciles de limpiar.</li>
                <li>&#10003; <strong>Stickers en mesas.</strong> Stickers laminados aplicados directamente a la superficie de la mesa. Duraderos e imposibles de perder. Asegurate de que sean lo suficientemente grandes para escanear.</li>
                <li>&#10003; <strong>Posters en la pared cerca de la entrada.</strong> Deja que los clientes que esperan vean el menu mientras esperan mesa.</li>
                <li>&#10003; <strong>Calcomanias de ventana.</strong> Para restaurantes enfocados en comida para llevar, pon un codigo QR en la ventana para que los que pasen puedan escanear y ver tu menu desde afuera.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Para mas consejos sobre tamano y pruebas, consulta nuestra guia de <Link href="/es/aprender/mejores-practicas-codigo-qr" className="text-orange-600 hover:underline">Mejores Practicas de Codigo QR</Link>.
              </p>
            </section>

            {/* Keeping menu updated */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Como Actualizar Tu Menu Sin Reimprimir los Codigos QR</h2>
              <p className="text-slate-600 mb-4">
                El error mas grande que cometen los restaurantes es enlazar el codigo QR directamente a un archivo PDF. Cuando actualizas el menu, la URL cambia y el viejo codigo QR deja de funcionar. Asi es como evitar eso:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Usa una URL de redireccion.</strong> Servicios como Bitly o la funcion de redireccion de tu propio sitio web te permiten apuntar una URL corta permanente a cualquier destino. Cambia el destino en cualquier momento sin tocar el codigo QR.</li>
                <li>&#10003; <strong>Usa la pagina de tu propio sitio web.</strong> Crea una pagina /menu en tu sitio web que siempre muestre el menu actual. El codigo QR enlaza a turestaurante.com/menu, y actualizas esa pagina cuando cambie el menu.</li>
                <li>&#10003; <strong>Reemplaza el archivo, no el enlace.</strong> Si alojas el PDF en Google Drive, puedes reemplazar el archivo sin cambiar el enlace de compartir. Sube el nuevo PDF con el mismo nombre a la misma carpeta.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Necesitas convertir tu menu actualizado de Word o PowerPoint a PDF? Usa el convertidor <Link href="/es/word-a-pdf" className="text-orange-600 hover:underline">Word a PDF</Link> o <Link href="/es/powerpoint-a-pdf" className="text-orange-600 hover:underline">PowerPoint a PDF</Link> de OmnisPDF.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Crea el Codigo QR de Tu Menu de Restaurante</h2>
            <p className="text-slate-300 mb-6">Genera un codigo QR escaneable para tu menu en segundos. Funcion Pro — incluye todas las herramientas PDF para gestionar tus archivos de menu.</p>
            <Link
              href="/es/codigo-qr"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <QrCode className="h-5 w-5" /> Crear Codigo QR de Menu
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
                { title: "Codigo QR para Tarjetas de Presentacion (Enlaza a Tu Sitio Web o vCard)", href: "/es/aprender/codigo-qr-para-tarjeta-de-presentacion" },
                { title: "Mejores Practicas de Codigo QR (Tamano, Ubicacion y Pruebas)", href: "/es/aprender/mejores-practicas-codigo-qr" },
                { title: "Crear un Codigo QR que Enlace a un Documento PDF", href: "/es/aprender/codigo-qr-para-pdf" },
                { title: "Tipos de Codigo QR Explicados (URL, Texto, WiFi, vCard y Mas)", href: "/es/aprender/tipos-de-codigo-qr-explicados" },
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
                { q: "Como creo un codigo QR para el menu de mi restaurante?", a: "Sube tu menu como PDF a un servicio de alojamiento o tu sitio web, copia la URL, luego usa la herramienta de Codigo QR de OmnisPDF para generar un codigo QR para esa URL. Imprime el codigo QR en carpas de mesa, stickers o letreros." },
                { q: "Debo enlazar a un menu PDF o una pagina web?", a: "Una pagina web es mas facil de actualizar (cambiar precios, agregar platillos) sin reimprimir codigos QR. Un menu PDF es mas simple de crear y se ve exactamente como tu menu impreso. Elige segun la frecuencia con que cambia tu menu." },
                { q: "Que tamano debe tener un codigo QR de menu?", a: "Al menos 3cm x 3cm para carpas de mesa y stickers. Para letreros de pared o posters, hazlo mas grande. La distancia de escaneo importa — los clientes deben poder escanear desde al menos 30cm en la iluminacion del restaurante." },
                { q: "Los clientes pueden escanear el codigo QR sin una app?", a: "Si. Todos los smartphones modernos (iPhone y Android) pueden escanear codigos QR directamente con su app de camara integrada. No se necesita una app separada de lectura de QR." },
                { q: "Como actualizo mi menu sin reimprimir los codigos QR?", a: "Usa un acortador de URL o servicio de redireccion. El codigo QR apunta a una URL corta, y cambias a donde redirige esa URL corta cada vez que actualizas tu menu. De esta manera el codigo QR sigue siendo el mismo." },
                { q: "Es una herramienta gratuita?", a: "El generador de Codigo QR de OmnisPDF es una funcion Pro a $7.99/mes. Pro incluye codigos QR ilimitados mas todas las herramientas PDF — perfecto para restaurantes que tambien necesitan comprimir, convertir o gestionar menus en PDF." },
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
