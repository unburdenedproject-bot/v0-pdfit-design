import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Tipos de Código QR Explicados (URL, Texto, WiFi, vCard y Mas) | PDF.it",
  description:
    "Aprende sobre los diferentes tipos de códigos QR — URL, texto plano, WiFi, vCard, correo, teléfono y SMS. Entiende cuando usar cada tipo y cómo funcionan.",
  keywords: "tipos de código qr, tipos de códigos qr, formatos código qr, código qr url vs texto",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Cuales son los principales tipos de códigos QR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los tipos más comunes son URL (abre un sitio web), texto plano (muestra un mensaje), WiFi (conecta a una red), vCard (guarda información de contacto), correo (abre un email pre-llenado), teléfono (inicia una llamada) y SMS (abre un mensaje de texto pre-llenado)." }
    },
    {
      "@type": "Question",
      "name": "Cual es la diferencia entre un código QR estático y dinámico?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un código QR estático tiene datos codificados directamente en su patron — una vez creado, no se puede cambiar. Un código QR dinámico apunta a una URL de redireccion que se puede actualizar en cualquier momento. PDF.it genera códigos QR estaticos, que nunca expiran y funcionan sin conexión." }
    },
    {
      "@type": "Question",
      "name": "Que tipo de código QR es el más común?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los códigos QR de URL son por mucho los más comunes. Enlazan a sitios web, páginas de destino, perfiles de redes sociales, menus en línea, documentos y cualquier otro contenido web." }
    },
    {
      "@type": "Question",
      "name": "Puede un código QR contener múltiples tipos de datos?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Cada código QR codifica un tipo de dato. Sin embargo, puedes crear un código QR de URL que enlace a una página web que contenga múltiples piezas de información — enlaces, datos de contacto, menus y archivos todo en una página." }
    },
    {
      "@type": "Question",
      "name": "Todos los teléfonos soportan todos los tipos de códigos QR?",
      "acceptedAnswer": { "@type": "Answer", "text": "La mayoría de los smartphones modernos soportan códigos QR de URL, texto, WiFi y vCard de forma nativa a traves de su camara integrada. Algunos teléfonos más antiguos pueden no soportar la conexión WiFi automática o el guardado de vCard y simplemente mostraran el texto codificado." }
    },
    {
      "@type": "Question",
      "name": "El generador de Código QR es gratuito?",
      "acceptedAnswer": { "@type": "Answer", "text": "La herramienta de Código QR de PDF.it es una función Pro a $3.99/mes. Los usuarios Pro obtienen generación ilimitada de todos los tipos de códigos QR más acceso a todas las herramientas premium de PDF." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Elegir el Tipo de Código QR Correcto",
  "description": "Selecciona y crea el tipo de código QR correcto para tus necesidades en 3 simples pasos usando PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Identifica tu objetivo",
      "text": "Determina que quieres que suceda cuando alguien escanee: abrir un sitio web (URL), guardar información de contacto (vCard), conectarse al WiFi o mostrar texto."
    },
    {
      "@type": "HowToStep",
      "name": "Selecciona el tipo correspondiente",
      "text": "Abre la herramienta de Código QR de PDF.it y seleccióna el tipo que coincida con tu objetivo. Ingresa los datos requeridos — URL, datos de contacto, credenciales WiFi o texto."
    },
    {
      "@type": "HowToStep",
      "name": "Genera y prueba",
      "text": "Haz clic en Generar y descarga tu código QR. Prueba con tu teléfono para confirmar que activa la accion correcta — abriendo la página correcta, guardando el contacto o conectando al WiFi."
    }
  ]
}

export default function TiposCodigoQRExplicadosPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Tipos de Código QR Explicados (URL, Texto, WiFi, vCard y Mas)</h1>
              <p className="text-xl text-slate-300">
                No todos los códigos QR son iguales. El tipo que elijas determina que sucede cuando alguien lo escanea — abrir un sitio web, guardar un contacto, conectarse al WiFi o mostrar un mensaje. Aqui tienes una guia completa de cada tipo.
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
              <p className="text-slate-700 font-semibold">Sabes que tipo necesitas? Crea tu código QR ahora.</p>
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

            {/* URL QR codes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Códigos QR de URL (El Tipo Mas Común)</h2>
              <p className="text-slate-600 mb-4">
                Un código QR de URL abre un sitio web o página web cuando se escanea. Este es el tipo de código QR más ampliamente usado y cubre la mayoría de los casos de uso:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Enlaces a sitios web.</strong> Enlaza a tu página principal, página de destino, página de producto o cualquier URL. El teléfono del escáner abre la página en su navegador predeterminado.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Perfiles de redes sociales.</strong> Enlaza a tu Instagram, LinkedIn, Twitter o canal de YouTube. Genial para <Link href="/es/aprender/codigo-qr-para-tarjeta-de-presentacion" className="text-[#14D8C4] hover:underline">tarjetas de presentación</Link> y materiales de marketing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Documentos PDF.</strong> Enlaza a un <Link href="/es/aprender/codigo-qr-para-pdf" className="text-[#14D8C4] hover:underline">archivo PDF alojado</Link> — menus, folletos, manuales o volantes. El PDF se abre directamente en el navegador del teléfono.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Enlaces de descarga de apps.</strong> Enlaza a tu app en la App Store o Google Play. Los usuarios escanean y van directamente a la página de descarga.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">5.</span>
                  <span><strong>Ubicaciones de Google Maps.</strong> Comparte un enlace de Google Maps para que las personas obtengan direcciones a tu negocio, lugar de evento o punto de encuentro.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                <strong>Mejor práctica:</strong> Manten las URLs cortas. Las URLs largas crean códigos QR más densos que son más difíciles de escanear en tamaños pequeños. Usa un acortador de URL si es necesario. Aprende más en nuestra guia de <Link href="/es/aprender/como-crear-codigo-qr" className="text-[#14D8C4] hover:underline">como crear un código QR</Link>.
              </p>
            </section>

            {/* vCard QR codes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Códigos QR de vCard (Guarda Información de Contacto al Instante)</h2>
              <p className="text-slate-600 mb-4">
                Un código QR de vCard codifica información de contacto — nombre, número de teléfono, correo, empresa, título de trabajo y dirección. Cuando alguien lo escanea, su teléfono le pide guardar el contacto directamente en su libreta de direcciones.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Que Datos Puede Incluir una vCard?</h3>
                  <p className="text-slate-600">
                    Nombre completo, número de teléfono (movil, trabajo, casa), dirección de correo, nombre de empresa, título de trabajo, URL de sitio web, dirección fisica e incluso una nota. Cuantos más datos incluyas, más denso se vuelve el código QR, así que incluye solo lo esencial.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Mejores Casos de Uso</h3>
                  <p className="text-slate-600">
                    Las tarjetas de presentación son el caso de uso más común. En lugar de esperar que alguien escriba manualmente tu número de teléfono de una tarjeta, escanean y guardan. También genial para credenciales de conferencias, gafetes y eventos de networking. Lee nuestra guia completa sobre <Link href="/es/aprender/codigo-qr-para-tarjeta-de-presentacion" className="text-[#14D8C4] hover:underline">códigos QR para tarjetas de presentación</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* WiFi QR codes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Códigos QR de WiFi (Conecta Sin Escribir Contraseñas)</h2>
              <p className="text-slate-600 mb-4">
                Un código QR de WiFi codifica el nombre de tu red (SSID), contraseña y tipo de encriptación. Cuando se escanea, el teléfono se conecta automáticamente a la red WiFi — sin ingresar contraseña manualmente.
              </p>
              <p className="text-slate-600 mb-4">
                Este tipo es perfecto para restaurantes, cafeterias, hoteles, Airbnbs, oficinas y hogares. En lugar de escribir la contraseña WiFi en un pizarron o repetirla a cada invitado, exhibe un código QR y deja que las personas se conecten con un escaneo.
              </p>
              <p className="text-slate-600">
                <strong>Importante:</strong> La contraseña esta codificada en el código QR, así que usa una red de invitados para espacios públicos. Lee nuestra guia detallada sobre <Link href="/es/aprender/codigo-qr-para-wifi" className="text-[#14D8C4] hover:underline">crear códigos QR de WiFi</Link> para consejos de seguridad e instrucciones de configuración.
              </p>
            </section>

            {/* Text, Email, Phone, SMS */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Códigos QR de Texto, Correo, Teléfono y SMS</h2>
              <p className="text-slate-600 mb-4">
                Estos tipos son menos comunes pero útiles en situaciones específicas:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Texto Plano</h3>
                  <p className="text-slate-600">
                    Muestra un mensaje de texto en pantalla cuando se escanea. No se requiere conexión a internet — el texto esta almacenado en el propio código QR. Casos de uso: números de serie de productos, instrucciones cortas, códigos promocionales o mensajes. La desventaja es que los códigos QR de texto no pueden actualizarse después de su creación y la longitud de datos es limitada.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Correo Electrónico</h3>
                  <p className="text-slate-600">
                    Abre la app de correo del escáner con un destinatario, asunto y opcionalmente texto del cuerpo pre-llenados. Genial para recolectar retroalimentacion — imprime un código QR en recibos o empaques que abra un correo pre-dirigido "Como fue tu experiencia?".
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Número de Teléfono</h3>
                  <p className="text-slate-600">
                    Inicia una llamada telefonica a un número pre-establecido cuando se escanea. Útil para líneas de servicio al cliente, contactos de emergencia o letreros de "Llamanos". El teléfono muestra el número y pide confirmacion antes de marcar.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">SMS</h3>
                  <p className="text-slate-600">
                    Abre la app de mensajeria con un número de teléfono y opcionalmente un mensaje pre-llenados. Usado para marketing de opt-in ("Escanea para enviar UNIRSE al 12345") o líneas de soporte al cliente por texto.
                  </p>
                </div>
              </div>
            </section>

            {/* Static vs Dynamic */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Códigos QR Estaticos vs. Dinamicos</h2>
              <p className="text-slate-600 mb-4">
                Mas alla del tipo de dato, los códigos QR también se categorizan como estaticos o dinamicos:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Códigos QR estaticos</strong> codifican datos directamente en el patron QR. Una vez creados, los datos no pueden cambiarse. Funcionan para siempre, no requieren internet para decodificarse (excepto tipos URL que enlazan a un sitio web) y son completamente gratuitos de usar. PDF.it genera códigos QR estaticos.</li>
                <li>&#10003; <strong>Códigos QR dinamicos</strong> codifican una URL de redireccion que apunta a un servidor. El propietario del servidor puede cambiar a donde redirige en cualquier momento. Esto te permite actualizar el destino sin reimprimir el código QR. La desventaja: requieren un servicio de terceros (a menudo pago) y dejan de funcionar si ese servicio cae.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Para la mayoría de los casos de uso, los códigos QR estaticos son la mejor opción. Son más simples, más confiables y no dependen de ningun servicio de terceros. Si necesitas la capacidad de actualizar, usa un acortador de URL (como Bitly) como tu propia capa de redireccion — el código QR apunta a la URL corta, y cambias a donde redirige.
              </p>
            </section>

            {/* Choosing the right type */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Como Elegir el Tipo de Código QR Correcto</h2>
              <p className="text-slate-600 mb-4">
                Haz coincidir tu objetivo con el tipo correcto:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Quieres que la gente visite un sitio web?</strong> Usa tipo URL.</li>
                <li>&#10003; <strong>Quieres que la gente guarde tu información de contacto?</strong> Usa tipo vCard. Mejor para <Link href="/es/aprender/codigo-qr-para-tarjeta-de-presentacion" className="text-[#14D8C4] hover:underline">tarjetas de presentación</Link>.</li>
                <li>&#10003; <strong>Quieres que la gente se conecte al WiFi?</strong> Usa tipo <Link href="/es/aprender/codigo-qr-para-wifi" className="text-[#14D8C4] hover:underline">WiFi</Link>.</li>
                <li>&#10003; <strong>Quieres compartir un PDF?</strong> Usa tipo URL enlazando a un <Link href="/es/aprender/codigo-qr-para-pdf" className="text-[#14D8C4] hover:underline">PDF alojado</Link>.</li>
                <li>&#10003; <strong>Quieres que la gente te llame?</strong> Usa tipo Teléfono.</li>
                <li>&#10003; <strong>Quieres mostrar un código o mensaje?</strong> Usa tipo Texto.</li>
                <li>&#10003; <strong>Quieres retroalimentacion por correo?</strong> Usa tipo Correo.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Sin importar que tipo elijas, sigue nuestras <Link href="/es/aprender/mejores-prácticas-codigo-qr" className="text-[#14D8C4] hover:underline">mejores prácticas de código QR</Link> para tamaño, contraste y pruebas para asegurar un escaneo confiable.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Crea Cualquier Tipo de Código QR</h2>
            <p className="text-slate-300 mb-6">Genera códigos QR de tipo URL, vCard, WiFi, texto y más en segundos. Función Pro — actualiza para códigos QR ilimitados.</p>
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
                { title: "Código QR para Tarjetas de Presentación (Enlaza a Tu Sitio Web o vCard)", href: "/es/aprender/codigo-qr-para-tarjeta-de-presentacion" },
                { title: "Código QR para Menus de Restaurante (Crea un Enlace Escaneable)", href: "/es/aprender/codigo-qr-para-menu-de-restaurante" },
                { title: "Crear un Código QR que Enlace a un Documento PDF", href: "/es/aprender/codigo-qr-para-pdf" },
                { title: "Mejores Prácticas de Código QR (Tamaño, Ubicacion y Pruebas)", href: "/es/aprender/mejores-prácticas-codigo-qr" },
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
                { q: "Cuales son los principales tipos de códigos QR?", a: "Los tipos más comunes son URL (abre un sitio web), texto plano (muestra un mensaje), WiFi (conecta a una red), vCard (guarda información de contacto), correo (abre un email pre-llenado), teléfono (inicia una llamada) y SMS (abre un mensaje de texto pre-llenado)." },
                { q: "Cual es la diferencia entre un código QR estático y dinámico?", a: "Un código QR estático tiene datos codificados directamente en su patron — una vez creado, no se puede cambiar. Un código QR dinámico apunta a una URL de redireccion que se puede actualizar en cualquier momento. PDF.it genera códigos QR estaticos, que nunca expiran y funcionan sin conexión." },
                { q: "Que tipo de código QR es el más común?", a: "Los códigos QR de URL son por mucho los más comunes. Enlazan a sitios web, páginas de destino, perfiles de redes sociales, menus en línea, documentos y cualquier otro contenido web." },
                { q: "Puede un código QR contener múltiples tipos de datos?", a: "No. Cada código QR codifica un tipo de dato. Sin embargo, puedes crear un código QR de URL que enlace a una página web que contenga múltiples piezas de información." },
                { q: "Todos los teléfonos soportan todos los tipos de códigos QR?", a: "La mayoría de los smartphones modernos soportan códigos QR de URL, texto, WiFi y vCard de forma nativa a traves de su camara integrada. Algunos teléfonos más antiguos pueden no soportar la conexión WiFi automática o el guardado de vCard." },
                { q: "El generador de Código QR es gratuito?", a: "La herramienta de Código QR de PDF.it es una función Pro a $3.99/mes. Los usuarios Pro obtienen generación ilimitada de todos los tipos de códigos QR más acceso a todas las herramientas premium de PDF." },
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
