import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Crear un Codigo QR para WiFi (Los Invitados se Conectan al Instante) | PDF.it",
  description:
    "Aprende como crear un codigo QR de WiFi para que invitados, clientes y visitantes se conecten a tu red al instante escaneando — sin escribir contrasenas. Guia paso a paso.",
  keywords: "codigo qr wifi, generador codigo qr wifi, compartir wifi codigo qr, contrasena wifi codigo qr",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como funciona un codigo QR de WiFi?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un codigo QR de WiFi codifica el nombre de tu red (SSID), contrasena y tipo de encriptacion. Cuando alguien lo escanea con la camara de su telefono, el telefono se conecta automaticamente a la red WiFi sin que el usuario necesite escribir nada." }
    },
    {
      "@type": "Question",
      "name": "Es seguro compartir WiFi por codigo QR?",
      "acceptedAnswer": { "@type": "Answer", "text": "El codigo QR contiene tu contrasena WiFi, asi que cualquiera que lo escanee obtiene acceso. Esto esta bien para redes de invitados. Para redes sensibles, crea una red WiFi de invitados separada con su propia contrasena y codigo QR, manteniendo tu red principal privada." }
    },
    {
      "@type": "Question",
      "name": "Funciona tanto en iPhone como en Android?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. Los iPhones con iOS 11 o posterior y los telefonos Android con Android 10 o posterior pueden escanear codigos QR de WiFi con su app de camara integrada y conectarse automaticamente. Los telefonos mas antiguos pueden necesitar una app de lectura de QR de terceros." }
    },
    {
      "@type": "Question",
      "name": "Que informacion necesito para crear un codigo QR de WiFi?",
      "acceptedAnswer": { "@type": "Answer", "text": "Necesitas tres cosas: el nombre de tu red (SSID), tu contrasena WiFi y el tipo de encriptacion (generalmente WPA/WPA2 para routers modernos). Puedes encontrar todo esto en la configuracion de tu router o en la etiqueta en la parte inferior de tu router." }
    },
    {
      "@type": "Question",
      "name": "Necesito actualizar el codigo QR si cambio mi contrasena WiFi?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. Los codigos QR de WiFi son estaticos — la contrasena esta codificada directamente en el patron del codigo QR. Si cambias tu contrasena WiFi, necesitas generar un nuevo codigo QR y reemplazar el antiguo." }
    },
    {
      "@type": "Question",
      "name": "Esta herramienta es gratuita?",
      "acceptedAnswer": { "@type": "Answer", "text": "El generador de Codigo QR de PDF.it es una funcion Pro a $7.99/mes. Los usuarios Pro obtienen generacion ilimitada de codigos QR incluyendo WiFi, URL, vCard y todos los demas tipos." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Crear un Codigo QR de WiFi",
  "description": "Deja que los invitados se conecten a tu WiFi al instante escaneando un codigo QR. Crealo en 3 pasos con PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Reune los datos de tu WiFi",
      "text": "Encuentra el nombre de tu red (SSID), contrasena y tipo de encriptacion (WPA/WPA2 o WEP). Revisa la configuracion de tu router o la etiqueta en tu router."
    },
    {
      "@type": "HowToStep",
      "name": "Genera el codigo QR de WiFi",
      "text": "Abre la herramienta de Codigo QR de PDF.it, selecciona tipo WiFi e ingresa el nombre de tu red, contrasena y tipo de encriptacion. Haz clic en Generar."
    },
    {
      "@type": "HowToStep",
      "name": "Imprime y exhibe",
      "text": "Descarga el codigo QR e imprimelo. Colocalo cerca de la entrada, en la mesita de noche de la habitacion de invitados o junto a la caja registradora con el texto 'Escanea para Conectarte al WiFi'."
    }
  ]
}

export default function CodigoQRParaWiFiPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Crear un Codigo QR para WiFi (Los Invitados se Conectan al Instante)</h1>
              <p className="text-xl text-slate-300">
                Deja de deletrear tu contrasena WiFi a cada invitado, cliente o visitante de Airbnb. Crea un codigo QR de WiFi y se conectan con un solo escaneo — sin escribir nada.
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
              <p className="text-slate-700 font-semibold">Tienes los datos de tu WiFi? Genera tu codigo QR ahora.</p>
            </div>
            <Link
              href="/es/codigo-qr"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Crear Codigo QR WiFi <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why WiFi QR codes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Usar un Codigo QR de WiFi?</h2>
              <p className="text-slate-600 mb-4">
                Compartir WiFi a la antigua es doloroso. Deletreas la contrasena letra por letra, el invitado la escribe mal, la repites, intentan de nuevo. Un codigo QR de WiFi elimina toda esta friccion:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Conexion instantanea.</strong> Los invitados escanean el codigo QR con la camara de su telefono y se conectan al WiFi automaticamente. Sin escribir, sin errores, sin frustracion.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Perfecto para negocios.</strong> Cafeterias, restaurantes, hoteles, espacios de coworking y salones pueden exhibir un codigo QR de WiFi para que los clientes se conecten sin pedir la contrasena al personal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Genial para anfitriones de Airbnb.</strong> Imprime el codigo QR de WiFi y colocalo en la guia del huesped o en la mesita de noche. Los huespedes se conectan en el momento que llegan sin enviarte mensaje.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Funciona en casa tambien.</strong> Cuando amigos y familiares visitan, un codigo QR de WiFi enmarcado en la pared o el refrigerador te ahorra de dictar contrasenas cada vez.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Crear un Codigo QR de WiFi (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Encuentra los datos de tu WiFi",
                    desc: "Necesitas tres datos: el nombre de tu red (SSID — el nombre que aparece en tu lista de WiFi), tu contrasena y el tipo de encriptacion (WPA/WPA2 para la mayoria de routers modernos, o WEP para los mas antiguos). Revisa la etiqueta en la parte inferior de tu router o la pagina de administracion de tu router.",
                  },
                  {
                    title: "Genera el codigo QR",
                    desc: "Abre la herramienta de Codigo QR de PDF.it (funcion Pro), selecciona el tipo WiFi e ingresa tu SSID, contrasena y tipo de encriptacion. Si el nombre de tu red tiene espacios o caracteres especiales, ingresalo exactamente como aparece en la lista de configuracion WiFi.",
                  },
                  {
                    title: "Imprime y exhibe",
                    desc: "Descarga el codigo QR como PNG o SVG. Imprimelo y exhibelo donde los invitados puedan verlo y escanearlo facilmente — cerca de la entrada, en una mesa de cafe, en la recepcion o en el refrigerador. Agrega el texto 'Escanea para Conectarte al WiFi' para que la gente sepa que hace.",
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

            {/* Where to display */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Donde Exhibir Tu Codigo QR de WiFi</h2>
              <p className="text-slate-600 mb-4">
                El codigo QR necesita ser visible y accesible en el lugar donde las personas querran conectarse. Estos son los mejores lugares para diferentes entornos:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Restaurantes y Cafeterias</h3>
                  <p className="text-slate-600">
                    Coloca los codigos QR de WiFi en carpas de mesa, junto al <Link href="/es/aprender/codigo-qr-para-menu-de-restaurante" className="text-orange-600 hover:underline">codigo QR del menu</Link>, o en un letrero cerca de la entrada. Algunos restaurantes combinan sus codigos QR de menu y WiFi en la misma tarjeta — dos codigos, claramente etiquetados.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Hoteles y Airbnbs</h3>
                  <p className="text-slate-600">
                    Imprime el codigo QR en una tarjeta pequena y colocala en la mesita de noche, dentro de la carpeta de bienvenida o en el escritorio de la habitacion. Para Airbnbs, incluyelo en tu guia de casa impresa junto con otras instrucciones.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Oficinas y Espacios de Coworking</h3>
                  <p className="text-slate-600">
                    Exhibelo en el area de recepcion, salas de reuniones y areas comunes. Si tienes redes separadas para personal y visitantes, crea dos codigos QR y etiquetalos claramente.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Hogar</h3>
                  <p className="text-slate-600">
                    Enmarcalo y cualgalo en la sala de estar o pegalo en el refrigerador. Tambien puedes incluirlo en un pequeno letrero cerca de la habitacion de invitados. Algunas personas incluso lo ponen dentro de un marco decorativo como pieza de conversacion.
                  </p>
                </div>
              </div>
            </section>

            {/* Security tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos de Seguridad para Codigos QR de WiFi</h2>
              <p className="text-slate-600 mb-4">
                Un codigo QR de WiFi contiene tu contrasena en texto plano (codificada en el patron QR). Cualquiera que lo escanee obtiene tu contrasena WiFi. Asi es como mantenerte seguro:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Usa una red de invitados.</strong> La mayoria de los routers modernos soportan una red de invitados separada. Crea una con su propia contrasena y haz el codigo QR solo para esa red. Tu red principal permanece privada.</li>
                <li>&#10003; <strong>Cambia la contrasena de invitados regularmente.</strong> Especialmente para negocios. Actualizala mensualmente y genera un nuevo codigo QR. La herramienta de <Link href="/es/codigo-qr" className="text-orange-600 hover:underline">Codigo QR</Link> de PDF.it hace esto rapido.</li>
                <li>&#10003; <strong>Limita el acceso de la red de invitados.</strong> Configura tu router para evitar que los usuarios de la red de invitados accedan a dispositivos en tu red principal (impresoras, NAS, dispositivos inteligentes del hogar).</li>
                <li>&#10003; <strong>Establece limites de ancho de banda.</strong> Si manejas un negocio, limita el ancho de banda de la red de invitados para que una persona viendo video en 4K no ralentice a todos los demas.</li>
                <li>&#10003; <strong>No lo publiques afuera.</strong> Manten los codigos QR de WiFi dentro de tus instalaciones donde solo invitados y clientes reales puedan escanearlos.</li>
              </ul>
            </section>

            {/* Troubleshooting */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Solucion de Problemas: El Codigo QR de WiFi No Funciona?</h2>
              <p className="text-slate-600 mb-4">
                Si alguien escanea tu codigo QR de WiFi pero no puede conectarse, revisa estos problemas comunes:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Ortografia del SSID.</strong> El nombre de la red en el codigo QR debe coincidir exactamente con tu router — incluyendo mayusculas, espacios y caracteres especiales.</li>
                <li>&#10003; <strong>Precision de la contrasena.</strong> Verifica dos veces la contrasena. Un caracter incorrecto y no funcionara.</li>
                <li>&#10003; <strong>Tipo de encriptacion.</strong> Asegurate de que seleccionaste el tipo correcto (WPA/WPA2 vs WEP). La mayoria de los routers modernos usan WPA2 o WPA3.</li>
                <li>&#10003; <strong>Compatibilidad del telefono.</strong> Los iPhones necesitan iOS 11+ y los telefonos Android necesitan Android 10+ para conexion automatica por codigo QR WiFi. Los telefonos mas antiguos pueden reconocer el codigo QR pero no auto-conectarse.</li>
                <li>&#10003; <strong>Calidad del codigo QR.</strong> Si el codigo QR impreso es muy pequeno, borroso o danado, el escaner puede leerlo mal. Sigue nuestras <Link href="/es/aprender/mejores-practicas-codigo-qr" className="text-orange-600 hover:underline">mejores practicas de codigo QR</Link> para impresion confiable.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Crea Tu Codigo QR de WiFi</h2>
            <p className="text-slate-300 mb-6">Deja que los invitados se conecten a tu WiFi con un solo escaneo. Funcion Pro — actualiza para codigos QR ilimitados y todas las herramientas PDF.</p>
            <Link
              href="/es/codigo-qr"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <QrCode className="h-5 w-5" /> Crear Codigo QR WiFi
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
                { title: "Codigo QR para Menus de Restaurante (Crea un Enlace Escaneable)", href: "/es/aprender/codigo-qr-para-menu-de-restaurante" },
                { title: "Crear un Codigo QR que Enlace a un Documento PDF", href: "/es/aprender/codigo-qr-para-pdf" },
                { title: "Mejores Practicas de Codigo QR (Tamano, Ubicacion y Pruebas)", href: "/es/aprender/mejores-practicas-codigo-qr" },
                { title: "Tipos de Codigo QR Explicados (URL, Texto, WiFi, vCard y Mas)", href: "/es/aprender/tipos-de-codigo-qr-explicados" },
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
                { q: "Como funciona un codigo QR de WiFi?", a: "Un codigo QR de WiFi codifica el nombre de tu red (SSID), contrasena y tipo de encriptacion. Cuando alguien lo escanea con la camara de su telefono, el telefono se conecta automaticamente a la red WiFi sin que el usuario necesite escribir nada." },
                { q: "Es seguro compartir WiFi por codigo QR?", a: "El codigo QR contiene tu contrasena WiFi, asi que cualquiera que lo escanee obtiene acceso. Esto esta bien para redes de invitados. Para redes sensibles, crea una red WiFi de invitados separada con su propia contrasena y codigo QR." },
                { q: "Funciona tanto en iPhone como en Android?", a: "Si. Los iPhones con iOS 11 o posterior y los telefonos Android con Android 10 o posterior pueden escanear codigos QR de WiFi con su app de camara integrada y conectarse automaticamente." },
                { q: "Que informacion necesito para crear un codigo QR de WiFi?", a: "Necesitas tres cosas: el nombre de tu red (SSID), tu contrasena WiFi y el tipo de encriptacion (generalmente WPA/WPA2 para routers modernos). Revisa la configuracion de tu router o la etiqueta en tu router." },
                { q: "Necesito actualizar el codigo QR si cambio mi contrasena WiFi?", a: "Si. Los codigos QR de WiFi son estaticos — la contrasena esta codificada directamente en el patron del codigo QR. Si cambias tu contrasena WiFi, necesitas generar un nuevo codigo QR." },
                { q: "Esta herramienta es gratuita?", a: "El generador de Codigo QR de PDF.it es una funcion Pro a $7.99/mes. Los usuarios Pro obtienen generacion ilimitada de codigos QR incluyendo WiFi, URL, vCard y todos los demas tipos." },
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
