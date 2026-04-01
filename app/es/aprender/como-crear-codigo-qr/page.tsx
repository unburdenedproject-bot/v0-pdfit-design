import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Crear un Codigo QR en Linea (Generador Gratuito) | PDF.it",
  description:
    "Aprende como crear un codigo QR en linea para URLs, texto, WiFi e informacion de contacto. Guia paso a paso para generar codigos QR al instante con la herramienta gratuita de PDF.it.",
  keywords: "crear codigo qr, generador codigo qr, hacer codigo qr en linea, codigo qr gratis",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como creo un codigo QR en linea gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Ve al generador de Codigo QR de PDF.it, ingresa tu URL, texto u otros datos, personaliza el estilo si deseas, y descarga tu codigo QR como imagen PNG o SVG. Los usuarios gratuitos obtienen hasta 10 codigos QR por dia." }
    },
    {
      "@type": "Question",
      "name": "Que tipos de codigos QR puedo crear?",
      "acceptedAnswer": { "@type": "Answer", "text": "Puedes crear codigos QR para URLs, texto plano, credenciales WiFi, informacion de contacto vCard, direcciones de correo electronico, numeros de telefono y mas. Cada tipo codifica diferentes datos que telefonos y escaneres pueden leer." }
    },
    {
      "@type": "Question",
      "name": "Los codigos QR expiran?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los codigos QR estaticos nunca expiran — los datos estan codificados directamente en el patron. Sin embargo, si tu codigo QR enlaza a una URL y esa URL deja de funcionar, el codigo QR seguira funcionando pero el destino no cargara." }
    },
    {
      "@type": "Question",
      "name": "Puedo personalizar el color de mi codigo QR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. La herramienta de Codigo QR de PDF.it te permite cambiar los colores de primer plano y fondo. Solo asegurate de que haya suficiente contraste entre ellos — primer plano oscuro sobre fondo claro funciona mejor para un escaneo confiable." }
    },
    {
      "@type": "Question",
      "name": "En que formato de archivo debo descargar mi codigo QR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usa PNG para uso digital (sitios web, correos electronicos, redes sociales). Usa SVG si necesitas imprimir el codigo QR en tamanos grandes sin perder calidad — SVG escala infinitamente sin pixelacion." }
    },
    {
      "@type": "Question",
      "name": "La herramienta de Codigo QR es gratuita en PDF.it?",
      "acceptedAnswer": { "@type": "Answer", "text": "El generador de Codigo QR es una funcion Pro en PDF.it. Los usuarios Pro ($3.99/mes) obtienen generacion ilimitada de codigos QR junto con todas las demas herramientas premium de PDF." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Crear un Codigo QR en Linea",
  "description": "Genera un codigo QR para cualquier URL, texto o dato en 3 simples pasos usando PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Elige tu tipo de codigo QR",
      "text": "Ve a la herramienta de Codigo QR de PDF.it y selecciona el tipo de codigo QR que quieres — URL, texto, WiFi, vCard u otros formatos soportados."
    },
    {
      "@type": "HowToStep",
      "name": "Ingresa tus datos",
      "text": "Escribe o pega la URL, texto, credenciales WiFi o informacion de contacto que deseas codificar en tu codigo QR."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga tu codigo QR",
      "text": "Haz clic en Generar y descarga tu codigo QR como archivo PNG o SVG. Pruebalo con la camara de tu telefono antes de imprimir o compartir."
    }
  ]
}

export default function ComoCrearCodigoQRPage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Codigo QR</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Como Crear un Codigo QR en Linea (Generador Gratuito)</h1>
              <p className="text-xl text-slate-300">
                Los codigos QR estan en todas partes — menus, tarjetas de presentacion, boletos de eventos, empaques de productos. Aqui te explicamos como crear tu propio codigo QR en segundos para cualquier proposito.
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
              <p className="text-slate-700 font-semibold">Listo para generar? Salta la guia y ve directo a la herramienta.</p>
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

            {/* What is a QR code */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Que Es un Codigo QR y Por Que Necesitas Uno?</h2>
              <p className="text-slate-600 mb-4">
                Un codigo QR (codigo de Respuesta Rapida) es un codigo de barras bidimensional que almacena datos — una URL, texto, detalles de contacto o credenciales WiFi. Cuando alguien lo escanea con la camara de su telefono, los datos se decodifican al instante. Sin escribir, sin buscar, sin errores.
              </p>
              <p className="text-slate-600 mb-4">
                Los codigos QR se usan en todas partes hoy en dia. Los restaurantes los usan para menus digitales. Los negocios los ponen en tarjetas y volantes. Los organizadores de eventos los usan para boletos. Los profesionales de marketing los integran en anuncios impresos para conectar experiencias fisicas y digitales.
              </p>
              <p className="text-slate-600">
                La mejor parte? Crear un codigo QR toma menos de 30 segundos con la herramienta correcta. El <Link href="/es/codigo-qr" className="text-orange-600 hover:underline">generador de Codigo QR</Link> de PDF.it (funcion Pro) te permite crear codigos QR para URLs, texto, WiFi, vCards y mas — luego descargarlos como archivos PNG o SVG de alta calidad listos para imprimir o uso digital.
              </p>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Crear un Codigo QR (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Elige tu tipo de codigo QR",
                    desc: "Abre la herramienta de Codigo QR y selecciona que tipo de datos quieres codificar. URL es el mas comun — envia a los escaneres directamente a un sitio web. Tambien puedes elegir texto, WiFi, vCard (info de contacto), correo electronico o numero de telefono.",
                  },
                  {
                    title: "Ingresa tus datos y personaliza",
                    desc: "Escribe o pega tu URL, contrasena WiFi o detalles de contacto. Opcionalmente ajusta colores y tamano. Manten el primer plano oscuro y el fondo claro para la mejor confiabilidad de escaneo.",
                  },
                  {
                    title: "Genera y descarga",
                    desc: "Haz clic en Generar para crear tu codigo QR. Descargalo como PNG para uso digital o SVG para impresion. Siempre prueba el codigo QR con la camara de tu telefono antes de distribuirlo.",
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

            {/* Common use cases */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Casos de Uso Comunes de Codigos QR</h2>
              <p className="text-slate-600 mb-4">
                Los codigos QR son increiblemente versatiles. Estas son las formas mas populares en que la gente los usa:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Enlaces a sitios web.</strong> El caso de uso mas comun. Codifica cualquier URL para que las personas visiten tu sitio, pagina de destino o perfil de redes sociales escaneando.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Acceso WiFi.</strong> Crea un <Link href="/es/aprender/codigo-qr-para-wifi" className="text-orange-600 hover:underline">codigo QR de WiFi</Link> para que los invitados se conecten a tu red al instante sin escribir contrasenas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Tarjetas de presentacion.</strong> Agrega un codigo QR a tu <Link href="/es/aprender/codigo-qr-para-tarjeta-de-presentacion" className="text-orange-600 hover:underline">tarjeta de presentacion</Link> que enlace a tu sitio web, perfil de LinkedIn o vCard con todos tus datos de contacto.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Menus de restaurante.</strong> Reemplaza los menus fisicos con un <Link href="/es/aprender/codigo-qr-para-menu-de-restaurante" className="text-orange-600 hover:underline">codigo QR escaneable</Link> que abre tu menu como PDF o pagina web.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Documentos PDF.</strong> Comparte un <Link href="/es/aprender/codigo-qr-para-pdf" className="text-orange-600 hover:underline">codigo QR que enlace a un PDF</Link> — perfecto para folletos, manuales y volantes.</span>
                </li>
              </ul>
            </section>

            {/* Tips for better QR codes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos para Crear Mejores Codigos QR</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Manten los Datos Cortos</h3>
                  <p className="text-slate-600">
                    Cuantos mas datos contiene un codigo QR, mas denso y dificil de escanear se vuelve. Para URLs, usa un enlace corto cuando sea posible. Para texto, mantenlo conciso. Si necesitas compartir un documento grande, alojalo en linea y enlaza a la URL en lugar de codificar el contenido directamente.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Usa Colores de Alto Contraste</h3>
                  <p className="text-slate-600">
                    Los modulos oscuros sobre fondo claro se escanean de manera mas confiable. Negro sobre blanco es el estandar de oro. Si personalizas los colores, siempre prueba con multiples telefonos. Evita combinaciones claro-sobre-claro u oscuro-sobre-oscuro. Consulta nuestra <Link href="/es/aprender/mejores-practicas-codigo-qr" className="text-orange-600 hover:underline">guia de mejores practicas de codigo QR</Link> para mas consejos de diseno.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Siempre Prueba Antes de Imprimir</h3>
                  <p className="text-slate-600">
                    Escanea tu codigo QR con al menos dos telefonos diferentes antes de imprimirlo en 500 tarjetas de presentacion o una carpa de mesa de restaurante. Prueba en diferentes condiciones de iluminacion y desde diferentes distancias. Un codigo QR que no se escanea es peor que no tener codigo QR.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Elige el Formato de Archivo Correcto</h3>
                  <p className="text-slate-600">
                    Descarga PNG para pantallas y medios digitales. Descarga SVG para materiales impresos — SVG es un formato vectorial que escala a cualquier tamano sin pixelacion. Si necesitas convertir tu imagen de codigo QR mas tarde, PDF.it tambien ofrece herramientas como <Link href="/es/pdf-a-png" className="text-orange-600 hover:underline">PDF a PNG</Link> y <Link href="/es/pdf-a-jpg" className="text-orange-600 hover:underline">PDF a JPG</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* QR code types overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Entendiendo los Tipos de Codigos QR</h2>
              <p className="text-slate-600 mb-4">
                No todos los codigos QR son iguales. El tipo que elijas determina que sucede cuando alguien lo escanea:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Codigos QR de URL</strong> abren un sitio web o pagina web en el navegador del escaner.</li>
                <li>&#10003; <strong>Codigos QR de texto</strong> muestran un mensaje de texto plano en pantalla.</li>
                <li>&#10003; <strong>Codigos QR de WiFi</strong> conectan automaticamente el escaner a una red WiFi.</li>
                <li>&#10003; <strong>Codigos QR de vCard</strong> agregan un contacto al telefono del escaner con nombre, correo, telefono y direccion.</li>
                <li>&#10003; <strong>Codigos QR de correo</strong> abren un borrador de correo pre-llenado con destinatario y asunto.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Aprende mas sobre cada tipo en nuestra guia detallada: <Link href="/es/aprender/tipos-de-codigo-qr-explicados" className="text-orange-600 hover:underline">Tipos de Codigo QR Explicados</Link>.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Listo para Crear Tu Codigo QR?</h2>
            <p className="text-slate-300 mb-6">Genera un codigo QR para cualquier URL, texto o dato en segundos. Funcion Pro — actualiza para desbloquear codigos QR ilimitados.</p>
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
                { title: "Codigo QR para Tarjetas de Presentacion (Enlaza a Tu Sitio Web o vCard)", href: "/es/aprender/codigo-qr-para-tarjeta-de-presentacion" },
                { title: "Codigo QR para Menus de Restaurante (Crea un Enlace Escaneable)", href: "/es/aprender/codigo-qr-para-menu-de-restaurante" },
                { title: "Crear un Codigo QR que Enlace a un Documento PDF", href: "/es/aprender/codigo-qr-para-pdf" },
                { title: "Mejores Practicas de Codigo QR (Tamano, Ubicacion y Pruebas)", href: "/es/aprender/mejores-practicas-codigo-qr" },
                { title: "Crear un Codigo QR para WiFi (Los Invitados se Conectan al Instante)", href: "/es/aprender/codigo-qr-para-wifi" },
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "Como creo un codigo QR en linea gratis?", a: "Ve al generador de Codigo QR de PDF.it, ingresa tu URL, texto u otros datos, personaliza el estilo si deseas, y descarga tu codigo QR como imagen PNG o SVG. Los usuarios gratuitos obtienen hasta 10 codigos QR por dia." },
                { q: "Que tipos de codigos QR puedo crear?", a: "Puedes crear codigos QR para URLs, texto plano, credenciales WiFi, informacion de contacto vCard, direcciones de correo electronico, numeros de telefono y mas. Cada tipo codifica diferentes datos que telefonos y escaneres pueden leer." },
                { q: "Los codigos QR expiran?", a: "Los codigos QR estaticos nunca expiran — los datos estan codificados directamente en el patron. Sin embargo, si tu codigo QR enlaza a una URL y esa URL deja de funcionar, el codigo QR seguira funcionando pero el destino no cargara." },
                { q: "Puedo personalizar el color de mi codigo QR?", a: "Si. La herramienta de Codigo QR de PDF.it te permite cambiar los colores de primer plano y fondo. Solo asegurate de que haya suficiente contraste entre ellos — primer plano oscuro sobre fondo claro funciona mejor." },
                { q: "En que formato de archivo debo descargar mi codigo QR?", a: "Usa PNG para uso digital (sitios web, correos, redes sociales). Usa SVG si necesitas imprimir el codigo QR en tamanos grandes sin perder calidad — SVG escala infinitamente sin pixelacion." },
                { q: "La herramienta de Codigo QR es gratuita en PDF.it?", a: "El generador de Codigo QR es una funcion Pro en PDF.it. Los usuarios Pro ($3.99/mes) obtienen generacion ilimitada de codigos QR junto con todas las demas herramientas premium de PDF." },
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
