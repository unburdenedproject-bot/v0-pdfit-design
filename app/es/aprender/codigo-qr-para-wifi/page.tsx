import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Crear un Código QR para WiFi (Los Invitados se Conectan al Instante) | PDF.it",
  description:
    "Aprende como crear un código QR de WiFi para que invitados, clientes y visitantes se conecten a tu red al instante escaneando — sin escribir contraseñas. Guia paso a paso.",
  keywords: "código qr wifi, generador código qr wifi, compartir wifi código qr, contraseña wifi código qr",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Cómo funciona un código QR de WiFi?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un código QR de WiFi codifica el nombre de tu red (SSID), contraseña y tipo de encriptación. Cuando alguien lo escanea con la camara de su teléfono, el teléfono se conecta automáticamente a la red WiFi sin que el usuario necesite escribir nada." }
    },
    {
      "@type": "Question",
      "name": "Es seguro compartir WiFi por código QR?",
      "acceptedAnswer": { "@type": "Answer", "text": "El código QR contiene tu contraseña WiFi, así que cualquiera que lo escanee obtiene acceso. Esto esta bien para redes de invitados. Para redes sensibles, crea una red WiFi de invitados separada con su propia contraseña y código QR, manteniendo tu red principal privada." }
    },
    {
      "@type": "Question",
      "name": "Funciona tanto en iPhone como en Android?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. Los iPhones con iOS 11 o posterior y los teléfonos Android con Android 10 o posterior pueden escanear códigos QR de WiFi con su app de camara integrada y conectarse automáticamente. Los teléfonos más antiguos pueden necesitar una app de lectura de QR de terceros." }
    },
    {
      "@type": "Question",
      "name": "Que información necesito para crear un código QR de WiFi?",
      "acceptedAnswer": { "@type": "Answer", "text": "Necesitas tres cosas: el nombre de tu red (SSID), tu contraseña WiFi y el tipo de encriptación (generalmente WPA/WPA2 para routers modernos). Puedes encontrar todo esto en la configuración de tu router o en la etiqueta en la parte inferior de tu router." }
    },
    {
      "@type": "Question",
      "name": "Necesito actualizar el código QR si cambio mi contraseña WiFi?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. Los códigos QR de WiFi son estaticos — la contraseña esta codificada directamente en el patron del código QR. Si cambias tu contraseña WiFi, necesitas generar un nuevo código QR y reemplazar el antiguo." }
    },
    {
      "@type": "Question",
      "name": "Esta herramienta es gratuita?",
      "acceptedAnswer": { "@type": "Answer", "text": "El generador de Código QR de PDF.it es una función Pro a $3.99/mes. Los usuarios Pro obtienen generación ilimitada de códigos QR incluyendo WiFi, URL, vCard y todos los demás tipos." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Crear un Código QR de WiFi",
  "description": "Deja que los invitados se conecten a tu WiFi al instante escaneando un código QR. Crealo en 3 pasos con PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Reune los datos de tu WiFi",
      "text": "Encuentra el nombre de tu red (SSID), contraseña y tipo de encriptación (WPA/WPA2 o WEP). Revisa la configuración de tu router o la etiqueta en tu router."
    },
    {
      "@type": "HowToStep",
      "name": "Genera el código QR de WiFi",
      "text": "Abre la herramienta de Código QR de PDF.it, seleccióna tipo WiFi e ingresa el nombre de tu red, contraseña y tipo de encriptación. Haz clic en Generar."
    },
    {
      "@type": "HowToStep",
      "name": "Imprime y exhibe",
      "text": "Descarga el código QR e imprimelo. Colocalo cerca de la entrada, en la mesita de noche de la habitacion de invitados o junto a la caja registradora con el texto 'Escanea para Conectarte al WiFi'."
    }
  ]
}

export default function CodigoQRParaWiFiPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Crear un Código QR para WiFi (Los Invitados se Conectan al Instante)</h1>
              <p className="text-xl text-slate-300">
                Deja de deletrear tu contraseña WiFi a cada invitado, cliente o visitante de Airbnb. Crea un código QR de WiFi y se conectan con un solo escaneo — sin escribir nada.
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
              <p className="text-slate-700 font-semibold">Tienes los datos de tu WiFi? Genera tu código QR ahora.</p>
            </div>
            <Link
              href="/es/codigo-qr"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Crear Código QR WiFi <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why WiFi QR codes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Usar un Código QR de WiFi?</h2>
              <p className="text-slate-600 mb-4">
                Compartir WiFi a la antigua es doloroso. Deletreas la contraseña letra por letra, el invitado la escribe mal, la repites, intentan de nuevo. Un código QR de WiFi elimina toda esta friccion:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Conexión instantanea.</strong> Los invitados escanean el código QR con la camara de su teléfono y se conectan al WiFi automáticamente. Sin escribir, sin errores, sin frustracion.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Perfecto para negocios.</strong> Cafeterias, restaurantes, hoteles, espacios de coworking y salones pueden exhibir un código QR de WiFi para que los clientes se conecten sin pedir la contraseña al personal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Genial para anfitriones de Airbnb.</strong> Imprime el código QR de WiFi y colocalo en la guia del huesped o en la mesita de noche. Los huespedes se conectan en el momento que llegan sin enviarte mensaje.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Funciona en casa también.</strong> Cuando amigos y familiares visitan, un código QR de WiFi enmarcado en la pared o el refrigerador te ahorra de dictar contraseñas cada vez.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Crear un Código QR de WiFi (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Encuentra los datos de tu WiFi",
                    desc: "Necesitas tres datos: el nombre de tu red (SSID — el nombre que aparece en tu lista de WiFi), tu contraseña y el tipo de encriptación (WPA/WPA2 para la mayoría de routers modernos, o WEP para los más antiguos). Revisa la etiqueta en la parte inferior de tu router o la página de administración de tu router.",
                  },
                  {
                    title: "Genera el código QR",
                    desc: "Abre la herramienta de Código QR de PDF.it (función Pro), seleccióna el tipo WiFi e ingresa tu SSID, contraseña y tipo de encriptación. Si el nombre de tu red tiene espacios o caracteres especiales, ingresalo exactamente como aparece en la lista de configuración WiFi.",
                  },
                  {
                    title: "Imprime y exhibe",
                    desc: "Descarga el código QR como PNG o SVG. Imprimelo y exhibelo donde los invitados puedan verlo y escanearlo fácilmente — cerca de la entrada, en una mesa de cafe, en la recepcion o en el refrigerador. Agrega el texto 'Escanea para Conectarte al WiFi' para que la gente sepa que hace.",
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

            {/* Where to display */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Donde Exhibir Tu Código QR de WiFi</h2>
              <p className="text-slate-600 mb-4">
                El código QR necesita ser visible y accesible en el lugar donde las personas querran conectarse. Estos son los mejores lugares para diferentes entornos:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Restaurantes y Cafeterias</h3>
                  <p className="text-slate-600">
                    Coloca los códigos QR de WiFi en carpas de mesa, junto al <Link href="/es/aprender/codigo-qr-para-menu-de-restaurante" className="text-[#14D8C4] hover:underline">código QR del menu</Link>, o en un letrero cerca de la entrada. Algunos restaurantes combinan sus códigos QR de menu y WiFi en la misma tarjeta — dos códigos, claramente etiquetados.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Hoteles y Airbnbs</h3>
                  <p className="text-slate-600">
                    Imprime el código QR en una tarjeta pequeña y colocala en la mesita de noche, dentro de la carpeta de bienvenida o en el escritorio de la habitacion. Para Airbnbs, incluyelo en tu guia de casa impresa junto con otras instrucciones.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Oficinas y Espacios de Coworking</h3>
                  <p className="text-slate-600">
                    Exhibelo en el area de recepcion, salas de reuniones y areas comunes. Si tienes redes separadas para personal y visitantes, crea dos códigos QR y etiquetalos claramente.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Hogar</h3>
                  <p className="text-slate-600">
                    Enmarcalo y cualgalo en la sala de estar o pegalo en el refrigerador. También puedes incluirlo en un pequeño letrero cerca de la habitacion de invitados. Algunas personas incluso lo ponen dentro de un marco decorativo como pieza de conversacion.
                  </p>
                </div>
              </div>
            </section>

            {/* Security tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos de Seguridad para Códigos QR de WiFi</h2>
              <p className="text-slate-600 mb-4">
                Un código QR de WiFi contiene tu contraseña en texto plano (codificada en el patron QR). Cualquiera que lo escanee obtiene tu contraseña WiFi. Asi es como mantenerte seguro:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Usa una red de invitados.</strong> La mayoría de los routers modernos soportan una red de invitados separada. Crea una con su propia contraseña y haz el código QR solo para esa red. Tu red principal permanece privada.</li>
                <li>&#10003; <strong>Cambia la contraseña de invitados regularmente.</strong> Especialmente para negocios. Actualizala mensualmente y genera un nuevo código QR. La herramienta de <Link href="/es/codigo-qr" className="text-[#14D8C4] hover:underline">Código QR</Link> de PDF.it hace esto rápido.</li>
                <li>&#10003; <strong>Limita el acceso de la red de invitados.</strong> Configura tu router para evitar que los usuarios de la red de invitados accedan a dispositivos en tu red principal (impresoras, NAS, dispositivos inteligentes del hogar).</li>
                <li>&#10003; <strong>Establece límites de ancho de banda.</strong> Si manejas un negocio, limita el ancho de banda de la red de invitados para que una persona viendo video en 4K no ralentice a todos los demás.</li>
                <li>&#10003; <strong>No lo publiques afuera.</strong> Manten los códigos QR de WiFi dentro de tus instalaciones donde solo invitados y clientes reales puedan escanearlos.</li>
              </ul>
            </section>

            {/* Troubleshooting */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Solución de Problemas: El Código QR de WiFi No Funciona?</h2>
              <p className="text-slate-600 mb-4">
                Si alguien escanea tu código QR de WiFi pero no puede conectarse, revisa estos problemas comunes:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Ortografia del SSID.</strong> El nombre de la red en el código QR debe coincidir exactamente con tu router — incluyendo mayusculas, espacios y caracteres especiales.</li>
                <li>&#10003; <strong>Precisión de la contraseña.</strong> Verifica dos veces la contraseña. Un carácter incorrecto y no funcionará.</li>
                <li>&#10003; <strong>Tipo de encriptación.</strong> Asegurate de que selecciónaste el tipo correcto (WPA/WPA2 vs WEP). La mayoría de los routers modernos usan WPA2 o WPA3.</li>
                <li>&#10003; <strong>Compatibilidad del teléfono.</strong> Los iPhones necesitan iOS 11+ y los teléfonos Android necesitan Android 10+ para conexión automática por código QR WiFi. Los teléfonos más antiguos pueden reconocer el código QR pero no auto-conectarse.</li>
                <li>&#10003; <strong>Calidad del código QR.</strong> Si el código QR impreso es muy pequeño, borroso o danado, el escáner puede leerlo mal. Sigue nuestras <Link href="/es/aprender/mejores-prácticas-codigo-qr" className="text-[#14D8C4] hover:underline">mejores prácticas de código QR</Link> para impresión confiable.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Crea Tu Código QR de WiFi</h2>
            <p className="text-slate-300 mb-6">Deja que los invitados se conecten a tu WiFi con un solo escaneo. Función Pro — actualiza para códigos QR ilimitados y todas las herramientas PDF.</p>
            <Link
              href="/es/codigo-qr"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <QrCode className="h-5 w-5" /> Crear Código QR WiFi
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
                { title: "Código QR para Tarjetas de Presentación (Enlaza a Tu Sitio Web o vCard)", href: "/es/aprender/codigo-qr-para-tarjeta-de-presentacion" },
                { title: "Código QR para Menus de Restaurante (Crea un Enlace Escaneable)", href: "/es/aprender/codigo-qr-para-menu-de-restaurante" },
                { title: "Crear un Código QR que Enlace a un Documento PDF", href: "/es/aprender/codigo-qr-para-pdf" },
                { title: "Mejores Prácticas de Código QR (Tamaño, Ubicacion y Pruebas)", href: "/es/aprender/mejores-prácticas-codigo-qr" },
                { title: "Tipos de Código QR Explicados (URL, Texto, WiFi, vCard y Mas)", href: "/es/aprender/tipos-de-codigo-qr-explicados" },
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
                { q: "Cómo funciona un código QR de WiFi?", a: "Un código QR de WiFi codifica el nombre de tu red (SSID), contraseña y tipo de encriptación. Cuando alguien lo escanea con la camara de su teléfono, el teléfono se conecta automáticamente a la red WiFi sin que el usuario necesite escribir nada." },
                { q: "Es seguro compartir WiFi por código QR?", a: "El código QR contiene tu contraseña WiFi, así que cualquiera que lo escanee obtiene acceso. Esto esta bien para redes de invitados. Para redes sensibles, crea una red WiFi de invitados separada con su propia contraseña y código QR." },
                { q: "Funciona tanto en iPhone como en Android?", a: "Si. Los iPhones con iOS 11 o posterior y los teléfonos Android con Android 10 o posterior pueden escanear códigos QR de WiFi con su app de camara integrada y conectarse automáticamente." },
                { q: "Que información necesito para crear un código QR de WiFi?", a: "Necesitas tres cosas: el nombre de tu red (SSID), tu contraseña WiFi y el tipo de encriptación (generalmente WPA/WPA2 para routers modernos). Revisa la configuración de tu router o la etiqueta en tu router." },
                { q: "Necesito actualizar el código QR si cambio mi contraseña WiFi?", a: "Si. Los códigos QR de WiFi son estaticos — la contraseña esta codificada directamente en el patron del código QR. Si cambias tu contraseña WiFi, necesitas generar un nuevo código QR." },
                { q: "Esta herramienta es gratuita?", a: "El generador de Código QR de PDF.it es una función Pro a $3.99/mes. Los usuarios Pro obtienen generación ilimitada de códigos QR incluyendo WiFi, URL, vCard y todos los demás tipos." },
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
