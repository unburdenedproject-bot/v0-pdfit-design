import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Tipos de Codigo QR Explicados (URL, Texto, WiFi, vCard y Mas) | OmnisPDF",
  description:
    "Aprende sobre los diferentes tipos de codigos QR — URL, texto plano, WiFi, vCard, correo, telefono y SMS. Entiende cuando usar cada tipo y como funcionan.",
  keywords: "tipos de codigo qr, tipos de codigos qr, formatos codigo qr, codigo qr url vs texto",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Cuales son los principales tipos de codigos QR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los tipos mas comunes son URL (abre un sitio web), texto plano (muestra un mensaje), WiFi (conecta a una red), vCard (guarda informacion de contacto), correo (abre un email pre-llenado), telefono (inicia una llamada) y SMS (abre un mensaje de texto pre-llenado)." }
    },
    {
      "@type": "Question",
      "name": "Cual es la diferencia entre un codigo QR estatico y dinamico?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un codigo QR estatico tiene datos codificados directamente en su patron — una vez creado, no se puede cambiar. Un codigo QR dinamico apunta a una URL de redireccion que se puede actualizar en cualquier momento. OmnisPDF genera codigos QR estaticos, que nunca expiran y funcionan sin conexion." }
    },
    {
      "@type": "Question",
      "name": "Que tipo de codigo QR es el mas comun?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los codigos QR de URL son por mucho los mas comunes. Enlazan a sitios web, paginas de destino, perfiles de redes sociales, menus en linea, documentos y cualquier otro contenido web." }
    },
    {
      "@type": "Question",
      "name": "Puede un codigo QR contener multiples tipos de datos?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Cada codigo QR codifica un tipo de dato. Sin embargo, puedes crear un codigo QR de URL que enlace a una pagina web que contenga multiples piezas de informacion — enlaces, datos de contacto, menus y archivos todo en una pagina." }
    },
    {
      "@type": "Question",
      "name": "Todos los telefonos soportan todos los tipos de codigos QR?",
      "acceptedAnswer": { "@type": "Answer", "text": "La mayoria de los smartphones modernos soportan codigos QR de URL, texto, WiFi y vCard de forma nativa a traves de su camara integrada. Algunos telefonos mas antiguos pueden no soportar la conexion WiFi automatica o el guardado de vCard y simplemente mostraran el texto codificado." }
    },
    {
      "@type": "Question",
      "name": "El generador de Codigo QR es gratuito?",
      "acceptedAnswer": { "@type": "Answer", "text": "La herramienta de Codigo QR de OmnisPDF es una funcion Pro a $7.99/mes. Los usuarios Pro obtienen generacion ilimitada de todos los tipos de codigos QR mas acceso a todas las herramientas premium de PDF." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Elegir el Tipo de Codigo QR Correcto",
  "description": "Selecciona y crea el tipo de codigo QR correcto para tus necesidades en 3 simples pasos usando OmnisPDF.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Identifica tu objetivo",
      "text": "Determina que quieres que suceda cuando alguien escanee: abrir un sitio web (URL), guardar informacion de contacto (vCard), conectarse al WiFi o mostrar texto."
    },
    {
      "@type": "HowToStep",
      "name": "Selecciona el tipo correspondiente",
      "text": "Abre la herramienta de Codigo QR de OmnisPDF y selecciona el tipo que coincida con tu objetivo. Ingresa los datos requeridos — URL, datos de contacto, credenciales WiFi o texto."
    },
    {
      "@type": "HowToStep",
      "name": "Genera y prueba",
      "text": "Haz clic en Generar y descarga tu codigo QR. Prueba con tu telefono para confirmar que activa la accion correcta — abriendo la pagina correcta, guardando el contacto o conectando al WiFi."
    }
  ]
}

export default function TiposCodigoQRExplicadosPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Tipos de Codigo QR Explicados (URL, Texto, WiFi, vCard y Mas)</h1>
              <p className="text-xl text-slate-300">
                No todos los codigos QR son iguales. El tipo que elijas determina que sucede cuando alguien lo escanea — abrir un sitio web, guardar un contacto, conectarse al WiFi o mostrar un mensaje. Aqui tienes una guia completa de cada tipo.
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
              <p className="text-slate-700 font-semibold">Sabes que tipo necesitas? Crea tu codigo QR ahora.</p>
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

            {/* URL QR codes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Codigos QR de URL (El Tipo Mas Comun)</h2>
              <p className="text-slate-600 mb-4">
                Un codigo QR de URL abre un sitio web o pagina web cuando se escanea. Este es el tipo de codigo QR mas ampliamente usado y cubre la mayoria de los casos de uso:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Enlaces a sitios web.</strong> Enlaza a tu pagina principal, pagina de destino, pagina de producto o cualquier URL. El telefono del escaner abre la pagina en su navegador predeterminado.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Perfiles de redes sociales.</strong> Enlaza a tu Instagram, LinkedIn, Twitter o canal de YouTube. Genial para <Link href="/es/aprender/codigo-qr-para-tarjeta-de-presentacion" className="text-orange-600 hover:underline">tarjetas de presentacion</Link> y materiales de marketing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Documentos PDF.</strong> Enlaza a un <Link href="/es/aprender/codigo-qr-para-pdf" className="text-orange-600 hover:underline">archivo PDF alojado</Link> — menus, folletos, manuales o volantes. El PDF se abre directamente en el navegador del telefono.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Enlaces de descarga de apps.</strong> Enlaza a tu app en la App Store o Google Play. Los usuarios escanean y van directamente a la pagina de descarga.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Ubicaciones de Google Maps.</strong> Comparte un enlace de Google Maps para que las personas obtengan direcciones a tu negocio, lugar de evento o punto de encuentro.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                <strong>Mejor practica:</strong> Manten las URLs cortas. Las URLs largas crean codigos QR mas densos que son mas dificiles de escanear en tamanos pequenos. Usa un acortador de URL si es necesario. Aprende mas en nuestra guia de <Link href="/es/aprender/como-crear-codigo-qr" className="text-orange-600 hover:underline">como crear un codigo QR</Link>.
              </p>
            </section>

            {/* vCard QR codes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Codigos QR de vCard (Guarda Informacion de Contacto al Instante)</h2>
              <p className="text-slate-600 mb-4">
                Un codigo QR de vCard codifica informacion de contacto — nombre, numero de telefono, correo, empresa, titulo de trabajo y direccion. Cuando alguien lo escanea, su telefono le pide guardar el contacto directamente en su libreta de direcciones.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Que Datos Puede Incluir una vCard?</h3>
                  <p className="text-slate-600">
                    Nombre completo, numero de telefono (movil, trabajo, casa), direccion de correo, nombre de empresa, titulo de trabajo, URL de sitio web, direccion fisica e incluso una nota. Cuantos mas datos incluyas, mas denso se vuelve el codigo QR, asi que incluye solo lo esencial.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Mejores Casos de Uso</h3>
                  <p className="text-slate-600">
                    Las tarjetas de presentacion son el caso de uso mas comun. En lugar de esperar que alguien escriba manualmente tu numero de telefono de una tarjeta, escanean y guardan. Tambien genial para credenciales de conferencias, gafetes y eventos de networking. Lee nuestra guia completa sobre <Link href="/es/aprender/codigo-qr-para-tarjeta-de-presentacion" className="text-orange-600 hover:underline">codigos QR para tarjetas de presentacion</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* WiFi QR codes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Codigos QR de WiFi (Conecta Sin Escribir Contrasenas)</h2>
              <p className="text-slate-600 mb-4">
                Un codigo QR de WiFi codifica el nombre de tu red (SSID), contrasena y tipo de encriptacion. Cuando se escanea, el telefono se conecta automaticamente a la red WiFi — sin ingresar contrasena manualmente.
              </p>
              <p className="text-slate-600 mb-4">
                Este tipo es perfecto para restaurantes, cafeterias, hoteles, Airbnbs, oficinas y hogares. En lugar de escribir la contrasena WiFi en un pizarron o repetirla a cada invitado, exhibe un codigo QR y deja que las personas se conecten con un escaneo.
              </p>
              <p className="text-slate-600">
                <strong>Importante:</strong> La contrasena esta codificada en el codigo QR, asi que usa una red de invitados para espacios publicos. Lee nuestra guia detallada sobre <Link href="/es/aprender/codigo-qr-para-wifi" className="text-orange-600 hover:underline">crear codigos QR de WiFi</Link> para consejos de seguridad e instrucciones de configuracion.
              </p>
            </section>

            {/* Text, Email, Phone, SMS */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Codigos QR de Texto, Correo, Telefono y SMS</h2>
              <p className="text-slate-600 mb-4">
                Estos tipos son menos comunes pero utiles en situaciones especificas:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Texto Plano</h3>
                  <p className="text-slate-600">
                    Muestra un mensaje de texto en pantalla cuando se escanea. No se requiere conexion a internet — el texto esta almacenado en el propio codigo QR. Casos de uso: numeros de serie de productos, instrucciones cortas, codigos promocionales o mensajes. La desventaja es que los codigos QR de texto no pueden actualizarse despues de su creacion y la longitud de datos es limitada.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Correo Electronico</h3>
                  <p className="text-slate-600">
                    Abre la app de correo del escaner con un destinatario, asunto y opcionalmente texto del cuerpo pre-llenados. Genial para recolectar retroalimentacion — imprime un codigo QR en recibos o empaques que abra un correo pre-dirigido "Como fue tu experiencia?".
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Numero de Telefono</h3>
                  <p className="text-slate-600">
                    Inicia una llamada telefonica a un numero pre-establecido cuando se escanea. Util para lineas de servicio al cliente, contactos de emergencia o letreros de "Llamanos". El telefono muestra el numero y pide confirmacion antes de marcar.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">SMS</h3>
                  <p className="text-slate-600">
                    Abre la app de mensajeria con un numero de telefono y opcionalmente un mensaje pre-llenados. Usado para marketing de opt-in ("Escanea para enviar UNIRSE al 12345") o lineas de soporte al cliente por texto.
                  </p>
                </div>
              </div>
            </section>

            {/* Static vs Dynamic */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Codigos QR Estaticos vs. Dinamicos</h2>
              <p className="text-slate-600 mb-4">
                Mas alla del tipo de dato, los codigos QR tambien se categorizan como estaticos o dinamicos:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Codigos QR estaticos</strong> codifican datos directamente en el patron QR. Una vez creados, los datos no pueden cambiarse. Funcionan para siempre, no requieren internet para decodificarse (excepto tipos URL que enlazan a un sitio web) y son completamente gratuitos de usar. OmnisPDF genera codigos QR estaticos.</li>
                <li>&#10003; <strong>Codigos QR dinamicos</strong> codifican una URL de redireccion que apunta a un servidor. El propietario del servidor puede cambiar a donde redirige en cualquier momento. Esto te permite actualizar el destino sin reimprimir el codigo QR. La desventaja: requieren un servicio de terceros (a menudo pago) y dejan de funcionar si ese servicio cae.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Para la mayoria de los casos de uso, los codigos QR estaticos son la mejor opcion. Son mas simples, mas confiables y no dependen de ningun servicio de terceros. Si necesitas la capacidad de actualizar, usa un acortador de URL (como Bitly) como tu propia capa de redireccion — el codigo QR apunta a la URL corta, y cambias a donde redirige.
              </p>
            </section>

            {/* Choosing the right type */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Como Elegir el Tipo de Codigo QR Correcto</h2>
              <p className="text-slate-600 mb-4">
                Haz coincidir tu objetivo con el tipo correcto:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Quieres que la gente visite un sitio web?</strong> Usa tipo URL.</li>
                <li>&#10003; <strong>Quieres que la gente guarde tu informacion de contacto?</strong> Usa tipo vCard. Mejor para <Link href="/es/aprender/codigo-qr-para-tarjeta-de-presentacion" className="text-orange-600 hover:underline">tarjetas de presentacion</Link>.</li>
                <li>&#10003; <strong>Quieres que la gente se conecte al WiFi?</strong> Usa tipo <Link href="/es/aprender/codigo-qr-para-wifi" className="text-orange-600 hover:underline">WiFi</Link>.</li>
                <li>&#10003; <strong>Quieres compartir un PDF?</strong> Usa tipo URL enlazando a un <Link href="/es/aprender/codigo-qr-para-pdf" className="text-orange-600 hover:underline">PDF alojado</Link>.</li>
                <li>&#10003; <strong>Quieres que la gente te llame?</strong> Usa tipo Telefono.</li>
                <li>&#10003; <strong>Quieres mostrar un codigo o mensaje?</strong> Usa tipo Texto.</li>
                <li>&#10003; <strong>Quieres retroalimentacion por correo?</strong> Usa tipo Correo.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Sin importar que tipo elijas, sigue nuestras <Link href="/es/aprender/mejores-practicas-codigo-qr" className="text-orange-600 hover:underline">mejores practicas de codigo QR</Link> para tamano, contraste y pruebas para asegurar un escaneo confiable.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Crea Cualquier Tipo de Codigo QR</h2>
            <p className="text-slate-300 mb-6">Genera codigos QR de tipo URL, vCard, WiFi, texto y mas en segundos. Funcion Pro — actualiza para codigos QR ilimitados.</p>
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
                { title: "Codigo QR para Tarjetas de Presentacion (Enlaza a Tu Sitio Web o vCard)", href: "/es/aprender/codigo-qr-para-tarjeta-de-presentacion" },
                { title: "Codigo QR para Menus de Restaurante (Crea un Enlace Escaneable)", href: "/es/aprender/codigo-qr-para-menu-de-restaurante" },
                { title: "Crear un Codigo QR que Enlace a un Documento PDF", href: "/es/aprender/codigo-qr-para-pdf" },
                { title: "Mejores Practicas de Codigo QR (Tamano, Ubicacion y Pruebas)", href: "/es/aprender/mejores-practicas-codigo-qr" },
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
                { q: "Cuales son los principales tipos de codigos QR?", a: "Los tipos mas comunes son URL (abre un sitio web), texto plano (muestra un mensaje), WiFi (conecta a una red), vCard (guarda informacion de contacto), correo (abre un email pre-llenado), telefono (inicia una llamada) y SMS (abre un mensaje de texto pre-llenado)." },
                { q: "Cual es la diferencia entre un codigo QR estatico y dinamico?", a: "Un codigo QR estatico tiene datos codificados directamente en su patron — una vez creado, no se puede cambiar. Un codigo QR dinamico apunta a una URL de redireccion que se puede actualizar en cualquier momento. OmnisPDF genera codigos QR estaticos, que nunca expiran y funcionan sin conexion." },
                { q: "Que tipo de codigo QR es el mas comun?", a: "Los codigos QR de URL son por mucho los mas comunes. Enlazan a sitios web, paginas de destino, perfiles de redes sociales, menus en linea, documentos y cualquier otro contenido web." },
                { q: "Puede un codigo QR contener multiples tipos de datos?", a: "No. Cada codigo QR codifica un tipo de dato. Sin embargo, puedes crear un codigo QR de URL que enlace a una pagina web que contenga multiples piezas de informacion." },
                { q: "Todos los telefonos soportan todos los tipos de codigos QR?", a: "La mayoria de los smartphones modernos soportan codigos QR de URL, texto, WiFi y vCard de forma nativa a traves de su camara integrada. Algunos telefonos mas antiguos pueden no soportar la conexion WiFi automatica o el guardado de vCard." },
                { q: "El generador de Codigo QR es gratuito?", a: "La herramienta de Codigo QR de OmnisPDF es una funcion Pro a $7.99/mes. Los usuarios Pro obtienen generacion ilimitada de todos los tipos de codigos QR mas acceso a todas las herramientas premium de PDF." },
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
