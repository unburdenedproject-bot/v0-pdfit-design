import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Código QR para Tarjetas de Presentación (Enlaza a Tu Sitio Web o vCard) | PDF.it",
  description:
    "Aprende como agregar un código QR a tu tarjeta de presentación que enlace a tu sitio web, LinkedIn o información de contacto vCard. Genera códigos QR para tarjetas con PDF.it.",
  keywords: "código qr tarjeta de presentación, código qr para contacto, generador código qr tarjeta, código qr vcard",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "A que debe enlazar un código QR de tarjeta de presentación?",
      "acceptedAnswer": { "@type": "Answer", "text": "Las opciones más comunes son tu sitio web, perfil de LinkedIn o un archivo vCard que guarda tu información de contacto directamente en el teléfono de alguien. Elige segun tu objetivo — sitio web para portafolio o ventas, vCard para networking." }
    },
    {
      "@type": "Question",
      "name": "Qué es un código QR de vCard?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un código QR de vCard codifica tus datos de contacto (nombre, teléfono, correo, empresa, dirección) para que cuando se escanee, el teléfono de la persona le pida guardar tu contacto. Es el tipo de código QR más práctico para tarjetas de presentación." }
    },
    {
      "@type": "Question",
      "name": "Que tamaño debe tener un código QR en una tarjeta de presentación?",
      "acceptedAnswer": { "@type": "Answer", "text": "Al menos 2cm x 2cm (aproximadamente 0.8 x 0.8 pulgadas). Los códigos QR más pequeños son más difíciles de leer para las camaras de teléfono, especialmente con poca luz. Si el diseño de tu tarjeta lo permite, hazlo más grande — 2.5cm es ideal." }
    },
    {
      "@type": "Question",
      "name": "Donde debo colocar el código QR en mi tarjeta de presentación?",
      "acceptedAnswer": { "@type": "Answer", "text": "Colocalo en la parte trasera de la tarjeta para mantener el frente limpio y profesional. Si va en el frente, ponlo en una esquina con suficiente espacio blanco alrededor. Nunca dejes que texto o gráficos se superpongan al código QR." }
    },
    {
      "@type": "Question",
      "name": "Puedo actualizar el destino del código QR más tarde?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los códigos QR estaticos no se pueden actualizar — la URL o datos están integrados en el patron. Si crees que podrias cambiar la URL de tu sitio web, usa un servicio de enlaces cortos que te permita redirigir el destino sin cambiar el código QR." }
    },
    {
      "@type": "Question",
      "name": "El generador de Código QR es una función Pro?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. La herramienta de Código QR de PDF.it es una función Pro disponible por $3.99/mes. Los usuarios Pro obtienen generación ilimitada de códigos QR más todas las herramientas premium de PDF." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Crear un Código QR para Tu Tarjeta de Presentación",
  "description": "Genera un código QR profesional para tu tarjeta de presentación en 3 simples pasos usando PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Elige tipo vCard o URL",
      "text": "Abre la herramienta de Código QR de PDF.it y seleccióna vCard (para codificar tu información de contacto completa) o URL (para enlazar a tu sitio web o perfil de LinkedIn)."
    },
    {
      "@type": "HowToStep",
      "name": "Ingresa tus datos",
      "text": "Llena tu nombre, teléfono, correo y empresa para vCard — o pega la URL de tu sitio web. Manten los datos concisos para asegurar que el código QR sea escaneable."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga y agrega a tu diseño de tarjeta",
      "text": "Descarga el código QR como SVG para calidad de impresión. Importalo en tu herramienta de diseño de tarjetas y colocalo con espacio blanco adecuado alrededor."
    }
  ]
}

export default function CodigoQRParaTarjetaPresentacionPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
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
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Código QR</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Código QR para Tarjetas de Presentación (Enlaza a Tu Sitio Web o vCard)</h1>
              <p className="text-xl text-slate-300">
                Un código QR en tu tarjeta de presentación conecta el mundo fisico con el digital. Un escaneo y tu nuevo contacto tiene tu sitio web, LinkedIn o todos tus datos de contacto guardados en su teléfono.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <QrCode className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Listo para crear el código QR de tu tarjeta? Ve directo a la herramienta.</p>
            </div>
            <Link
              href="/es/codigo-qr"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Crear Código QR <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why add QR to business card */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Agregar un Código QR a Tu Tarjeta de Presentación?</h2>
              <p className="text-slate-600 mb-4">
                Las tarjetas de presentación tienen un problema: las personas las coleccionan en eventos y conferencias, las tiran en un cajon y nunca las vuelven a ver. Un código QR resuelve esto al hacer que sea fácilisimo para alguien guardar tu información de contacto o visitar tu sitio web en el momento que recibe tu tarjeta.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Guardado instantaneo de contacto.</strong> Un código QR de vCard permite que las personas guarden tu nombre, correo, teléfono y empresa en sus contactos con un solo escaneo. Sin escribir manualmente, sin errores tipograficos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Genera tráfico a tu sitio web.</strong> Enlaza a tu portafolio, tienda en línea o sitio web de tu empresa. Las personas son mucho más propensas a visitar cuando pueden escanear en lugar de escribir una URL.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Impresión profesional.</strong> Un código QR senala que eres experto en tecnologia y atento al hacer las cosas fáciles para tus contactos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Eficiencia de espacio.</strong> En lugar de amontonar tu URL de LinkedIn, sitio web y perfiles sociales en una tarjeta diminuta, pon todo detrás de un solo código QR.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Crear un Código QR para Tarjeta de Presentación (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Decide a que enlazar",
                    desc: "Elige entre una vCard (guarda tu información de contacto completa en el teléfono del escáner), la URL de tu sitio web, tu perfil de LinkedIn o una página de destino con todos tus enlaces. vCard es mejor para networking; URL es mejor para generar tráfico.",
                  },
                  {
                    title: "Genera el código QR",
                    desc: "Abre la herramienta de Código QR de PDF.it (función Pro), seleccióna tu tipo e ingresa tus datos. Para vCard, llena tu nombre, título, empresa, teléfono, correo y dirección. Para URL, pega tu enlace. Manten los datos minimos para un código más limpio y escaneable.",
                  },
                  {
                    title: "Descarga como SVG y agrega a tu tarjeta",
                    desc: "Descarga el código QR como archivo SVG — este formato vectorial se imprime en cualquier tamaño sin pixelacion. Importalo en tu diseño de tarjeta de presentación en Canva, Illustrator o cualquier herramienta que uses. Colocalo con al menos 3mm de espacio blanco en todos los lados.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Código QR vCard vs. Código QR de URL: Cual Elegir?</h2>
              <p className="text-slate-600 mb-4">
                Esta es la decision más importante al agregar un código QR a tu tarjeta de presentación. Asi es como elegir:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Elige vCard Si...</h3>
                  <p className="text-slate-600">
                    Tu objetivo principal es el networking. Los códigos QR de vCard guardan tu nombre, número de teléfono, correo, nombre de empresa, título de trabajo e incluso tu dirección directamente en los contactos del teléfono del escáner. Esta es la opción más práctica para conferencias, ferias comerciales y eventos de networking donde las personas conocen docenas de contactos y necesitan guardar información rápidamente.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Elige URL Si...</h3>
                  <p className="text-slate-600">
                    Quieres generar tráfico a tu sitio web, portafolio o una página de destino. Esto funciona bien para freelancers, disenadores y vendedores que quieren que los prospectos vean su trabajo u ofertas. También puedes enlazar a una página de "enlace en bio" que contenga todos tus perfiles sociales en un solo lugar.
                  </p>
                </div>
              </div>
              <p className="text-slate-600 mt-4">
                Aprende más sobre los diferentes tipos en nuestra guia <Link href="/es/aprender/tipos-de-codigo-qr-explicados" className="text-[#14D8C4] hover:underline">Tipos de Código QR Explicados</Link>.
              </p>
            </section>

            {/* Design tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos de Diseño para Códigos QR en Tarjetas de Presentación</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Tamaño mínimo: 2cm x 2cm.</strong> Cualquier cosa más pequeña se vuelve poco confiable para escanear, especialmente con poca luz. Apunta a 2.5cm si el diseño de tu tarjeta lo permite.</li>
                <li>&#10003; <strong>Usa alto contraste.</strong> Código QR oscuro sobre fondo claro. Negro sobre blanco es lo más seguro. Evita colocar códigos QR en fondos ocupados u oscuros.</li>
                <li>&#10003; <strong>Deja espacio blanco.</strong> El código QR necesita una "zona tranquila" — al menos 3mm de espacio en blanco alrededor de todos los lados. Esto ayuda a los escáneres a distinguir el código de los elementos de diseño circundantes.</li>
                <li>&#10003; <strong>La parte trasera de la tarjeta es ideal.</strong> Manten el frente limpio con tu nombre, título e información clave. El código QR en la parte trasera obtiene su propio espacio y atencion.</li>
                <li>&#10003; <strong>Agrega un llamado a la accion.</strong> Imprime "Escanea para guardar mi contacto" o "Escanea para ver mi portafolio" junto al código QR para que las personas sepan que esperar.</li>
                <li>&#10003; <strong>Prueba antes de imprimir en masa.</strong> Imprime una tarjeta y escanea el código QR con al menos dos teléfonos diferentes. Consulta nuestras <Link href="/es/aprender/mejores-prácticas-codigo-qr" className="text-[#14D8C4] hover:underline">mejores prácticas de código QR</Link> para más consejos.</li>
              </ul>
            </section>

            {/* Printing considerations */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consideraciones de Impresión y Formato de Archivo</h2>
              <p className="text-slate-600 mb-4">
                El formato de archivo que descargues importa para la calidad de impresión. Esto es lo que debes usar:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>SVG para impresión.</strong> SVG es un formato vectorial que escala perfectamente a cualquier tamaño. Usa esto cuando envies tu diseño de tarjeta a una imprenta. Se mantendrá nitido en cualquier resolución.</li>
                <li>&#10003; <strong>PNG para digital.</strong> Usa PNG si compartes tu código QR digitalmente — en firmas de correo, sitios web o presentaciones.</li>
                <li>&#10003; <strong>Evita JPEG.</strong> La compresión JPEG puede difuminar los detalles finos de los códigos QR, haciendolos más difíciles de escanear. Quedate con PNG o SVG.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Si necesitas incrustar tu código QR en una version PDF de tu tarjeta, puedes usar <Link href="/es/word-a-pdf" className="text-[#14D8C4] hover:underline">Word a PDF</Link> o disenar tu tarjeta y convertirla. Necesitas comprimir el archivo final? Usa <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> para mantenerlo amigable para correo.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Crea Tu Código QR para Tarjeta de Presentación</h2>
            <p className="text-slate-300 mb-6">Genera un código QR de vCard o URL en segundos. Función Pro — actualiza para códigos QR ilimitados y todas las herramientas premium.</p>
            <Link
              href="/es/codigo-qr"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <QrCode className="h-5 w-5" /> Crear Código QR Ahora
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Crear un Código QR en Línea (Generador Gratuito)", href: "/es/aprender/como-crear-codigo-qr" },
                { title: "Mejores Prácticas de Código QR (Tamaño, Ubicacion y Pruebas)", href: "/es/aprender/mejores-prácticas-codigo-qr" },
                { title: "Tipos de Código QR Explicados (URL, Texto, WiFi, vCard y Mas)", href: "/es/aprender/tipos-de-codigo-qr-explicados" },
                { title: "Crear un Código QR que Enlace a un Documento PDF", href: "/es/aprender/codigo-qr-para-pdf" },
                { title: "Código QR para Menus de Restaurante (Crea un Enlace Escaneable)", href: "/es/aprender/codigo-qr-para-menu-de-restaurante" },
                { title: "Crear un Código QR para WiFi (Los Invitados se Conectan al Instante)", href: "/es/aprender/codigo-qr-para-wifi" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "A que debe enlazar un código QR de tarjeta de presentación?", a: "Las opciones más comunes son tu sitio web, perfil de LinkedIn o un archivo vCard que guarda tu información de contacto directamente en el teléfono de alguien. Elige segun tu objetivo — sitio web para portafolio o ventas, vCard para networking." },
                { q: "Qué es un código QR de vCard?", a: "Un código QR de vCard codifica tus datos de contacto (nombre, teléfono, correo, empresa, dirección) para que cuando se escanee, el teléfono de la persona le pida guardar tu contacto. Es el tipo de código QR más práctico para tarjetas de presentación." },
                { q: "Que tamaño debe tener un código QR en una tarjeta de presentación?", a: "Al menos 2cm x 2cm (aproximadamente 0.8 x 0.8 pulgadas). Los códigos QR más pequeños son más difíciles de leer para las camaras, especialmente con poca luz. Si el diseño de tu tarjeta lo permite, hazlo más grande — 2.5cm es ideal." },
                { q: "Donde debo colocar el código QR en mi tarjeta?", a: "Colocalo en la parte trasera de la tarjeta para mantener el frente limpio y profesional. Si va en el frente, ponlo en una esquina con suficiente espacio blanco alrededor. Nunca dejes que texto o gráficos se superpongan al código QR." },
                { q: "Puedo actualizar el destino del código QR más tarde?", a: "Los códigos QR estaticos no se pueden actualizar — la URL o datos están integrados en el patron. Si crees que podrias cambiar la URL de tu sitio web, usa un servicio de enlaces cortos que te permita redirigir el destino sin cambiar el código QR." },
                { q: "El generador de Código QR es una función Pro?", a: "Si. La herramienta de Código QR de PDF.it es una función Pro disponible por $3.99/mes. Los usuarios Pro obtienen generación ilimitada de códigos QR más todas las herramientas premium de PDF." },
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
