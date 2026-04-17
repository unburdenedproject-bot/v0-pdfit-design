import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Crear un Código QR en Línea (Generador Gratuito) | PDF.it",
  description:
    "Aprende como crear un código QR en línea para URLs, texto, WiFi e información de contacto. Guia paso a paso para generar códigos QR al instante con la herramienta gratuita de PDF.it.",
  keywords: "crear código qr, generador código qr, hacer código qr en línea, código qr gratis",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como creo un código QR en línea gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Ve al generador de Código QR de PDF.it, ingresa tu URL, texto u otros datos, personaliza el estilo si deseas, y descarga tu código QR como imagen PNG o SVG. Los usuarios gratuitos obtienen hasta 10 códigos QR por día." }
    },
    {
      "@type": "Question",
      "name": "Que tipos de códigos QR puedo crear?",
      "acceptedAnswer": { "@type": "Answer", "text": "Puedes crear códigos QR para URLs, texto plano, credenciales WiFi, información de contacto vCard, direcciones de correo electrónico, números de teléfono y más. Cada tipo codifica diferentes datos que teléfonos y escáneres pueden leer." }
    },
    {
      "@type": "Question",
      "name": "Los códigos QR expiran?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los códigos QR estaticos nunca expiran — los datos están codificados directamente en el patron. Sin embargo, si tu código QR enlaza a una URL y esa URL deja de funcionar, el código QR seguira funcionando pero el destino no cargara." }
    },
    {
      "@type": "Question",
      "name": "Puedo personalizar el color de mi código QR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. La herramienta de Código QR de PDF.it te permite cambiar los colores de primer plano y fondo. Solo asegurate de que haya suficiente contraste entre ellos — primer plano oscuro sobre fondo claro funciona mejor para un escaneo confiable." }
    },
    {
      "@type": "Question",
      "name": "En que formato de archivo debo descargar mi código QR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usa PNG para uso digital (sitios web, correos electrónicos, redes sociales). Usa SVG si necesitas imprimir el código QR en tamaños grandes sin perder calidad — SVG escala infinitamente sin pixelacion." }
    },
    {
      "@type": "Question",
      "name": "La herramienta de Código QR es gratuita en PDF.it?",
      "acceptedAnswer": { "@type": "Answer", "text": "El generador de Código QR es una función Pro en PDF.it. Los usuarios Pro ($3.99/mes) obtienen generación ilimitada de códigos QR junto con todas las demás herramientas premium de PDF." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Crear un Código QR en Línea",
  "description": "Genera un código QR para cualquier URL, texto o dato en 3 simples pasos usando PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Elige tu tipo de código QR",
      "text": "Ve a la herramienta de Código QR de PDF.it y seleccióna el tipo de código QR que quieres — URL, texto, WiFi, vCard u otros formatos soportados."
    },
    {
      "@type": "HowToStep",
      "name": "Ingresa tus datos",
      "text": "Escribe o pega la URL, texto, credenciales WiFi o información de contacto que deseas codificar en tu código QR."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga tu código QR",
      "text": "Haz clic en Generar y descarga tu código QR como archivo PNG o SVG. Pruebalo con la camara de tu teléfono antes de imprimir o compartir."
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
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Código QR</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Como Crear un Código QR en Línea (Generador Gratuito)</h1>
              <p className="text-xl text-slate-300">
                Los códigos QR están en todas partes — menus, tarjetas de presentación, boletos de eventos, empaques de productos. Aqui te explicamos como crear tu propio código QR en segundos para cualquier propósito.
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
              <p className="text-slate-700 font-semibold">Listo para generar? Salta la guia y ve directo a la herramienta.</p>
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

            {/* What is a QR code */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Que Es un Código QR y Por Que Necesitas Uno?</h2>
              <p className="text-slate-600 mb-4">
                Un código QR (código de Respuesta Rápida) es un código de barras bidimensional que almacena datos — una URL, texto, detalles de contacto o credenciales WiFi. Cuando alguien lo escanea con la camara de su teléfono, los datos se decodifican al instante. Sin escribir, sin buscar, sin errores.
              </p>
              <p className="text-slate-600 mb-4">
                Los códigos QR se usan en todas partes hoy en día. Los restaurantes los usan para menus digitales. Los negocios los ponen en tarjetas y volantes. Los organizadores de eventos los usan para boletos. Los profesionales de marketing los integran en anuncios impresos para conectar experiencias fisicas y digitales.
              </p>
              <p className="text-slate-600">
                La mejor parte? Crear un código QR toma menos de 30 segundos con la herramienta correcta. El <Link href="/es/codigo-qr" className="text-[#14D8C4] hover:underline">generador de Código QR</Link> de PDF.it (función Pro) te permite crear códigos QR para URLs, texto, WiFi, vCards y más — luego descargarlos como archivos PNG o SVG de alta calidad listos para imprimir o uso digital.
              </p>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Crear un Código QR (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Elige tu tipo de código QR",
                    desc: "Abre la herramienta de Código QR y seleccióna que tipo de datos quieres codificar. URL es el más común — envia a los escáneres directamente a un sitio web. También puedes elegir texto, WiFi, vCard (info de contacto), correo electrónico o número de teléfono.",
                  },
                  {
                    title: "Ingresa tus datos y personaliza",
                    desc: "Escribe o pega tu URL, contraseña WiFi o detalles de contacto. Opcionalmente ajusta colores y tamaño. Manten el primer plano oscuro y el fondo claro para la mejor confiabilidad de escaneo.",
                  },
                  {
                    title: "Genera y descarga",
                    desc: "Haz clic en Generar para crear tu código QR. Descargalo como PNG para uso digital o SVG para impresión. Siempre prueba el código QR con la camara de tu teléfono antes de distribuirlo.",
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

            {/* Common use cases */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Casos de Uso Comunes de Códigos QR</h2>
              <p className="text-slate-600 mb-4">
                Los códigos QR son increiblemente versatiles. Estas son las formas más populares en que la gente los usa:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Enlaces a sitios web.</strong> El caso de uso más común. Codifica cualquier URL para que las personas visiten tu sitio, página de destino o perfil de redes sociales escaneando.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Acceso WiFi.</strong> Crea un <Link href="/es/aprender/codigo-qr-para-wifi" className="text-[#14D8C4] hover:underline">código QR de WiFi</Link> para que los invitados se conecten a tu red al instante sin escribir contraseñas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Tarjetas de presentación.</strong> Agrega un código QR a tu <Link href="/es/aprender/codigo-qr-para-tarjeta-de-presentacion" className="text-[#14D8C4] hover:underline">tarjeta de presentación</Link> que enlace a tu sitio web, perfil de LinkedIn o vCard con todos tus datos de contacto.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Menus de restaurante.</strong> Reemplaza los menus fisicos con un <Link href="/es/aprender/codigo-qr-para-menu-de-restaurante" className="text-[#14D8C4] hover:underline">código QR escaneable</Link> que abre tu menu como PDF o página web.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">5.</span>
                  <span><strong>Documentos PDF.</strong> Comparte un <Link href="/es/aprender/codigo-qr-para-pdf" className="text-[#14D8C4] hover:underline">código QR que enlace a un PDF</Link> — perfecto para folletos, manuales y volantes.</span>
                </li>
              </ul>
            </section>

            {/* Tips for better QR codes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos para Crear Mejores Códigos QR</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Manten los Datos Cortos</h3>
                  <p className="text-slate-600">
                    Cuantos más datos contiene un código QR, más denso y difícil de escanear se vuelve. Para URLs, usa un enlace corto cuando sea posible. Para texto, mantenlo conciso. Si necesitas compartir un documento grande, alojalo en línea y enlaza a la URL en lugar de codificar el contenido directamente.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Usa Colores de Alto Contraste</h3>
                  <p className="text-slate-600">
                    Los modulos oscuros sobre fondo claro se escanean de manera más confiable. Negro sobre blanco es el estándar de oro. Si personalizas los colores, siempre prueba con múltiples teléfonos. Evita combinaciones claro-sobre-claro u oscuro-sobre-oscuro. Consulta nuestra <Link href="/es/aprender/mejores-prácticas-codigo-qr" className="text-[#14D8C4] hover:underline">guia de mejores prácticas de código QR</Link> para más consejos de diseño.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Siempre Prueba Antes de Imprimir</h3>
                  <p className="text-slate-600">
                    Escanea tu código QR con al menos dos teléfonos diferentes antes de imprimirlo en 500 tarjetas de presentación o una carpa de mesa de restaurante. Prueba en diferentes condiciones de iluminacion y desde diferentes distancias. Un código QR que no se escanea es peor que no tener código QR.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Elige el Formato de Archivo Correcto</h3>
                  <p className="text-slate-600">
                    Descarga PNG para pantallas y medios digitales. Descarga SVG para materiales impresos — SVG es un formato vectorial que escala a cualquier tamaño sin pixelacion. Si necesitas convertir tu imagen de código QR más tarde, PDF.it también ofrece herramientas como <Link href="/es/pdf-a-png" className="text-[#14D8C4] hover:underline">PDF a PNG</Link> y <Link href="/es/pdf-a-jpg" className="text-[#14D8C4] hover:underline">PDF a JPG</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* QR code types overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Entendiendo los Tipos de Códigos QR</h2>
              <p className="text-slate-600 mb-4">
                No todos los códigos QR son iguales. El tipo que elijas determina que sucede cuando alguien lo escanea:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Códigos QR de URL</strong> abren un sitio web o página web en el navegador del escáner.</li>
                <li>&#10003; <strong>Códigos QR de texto</strong> muestran un mensaje de texto plano en pantalla.</li>
                <li>&#10003; <strong>Códigos QR de WiFi</strong> conectan automáticamente el escáner a una red WiFi.</li>
                <li>&#10003; <strong>Códigos QR de vCard</strong> agregan un contacto al teléfono del escáner con nombre, correo, teléfono y dirección.</li>
                <li>&#10003; <strong>Códigos QR de correo</strong> abren un borrador de correo pre-llenado con destinatario y asunto.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Aprende más sobre cada tipo en nuestra guia detallada: <Link href="/es/aprender/tipos-de-codigo-qr-explicados" className="text-[#14D8C4] hover:underline">Tipos de Código QR Explicados</Link>.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Listo para Crear Tu Código QR?</h2>
            <p className="text-slate-300 mb-6">Genera un código QR para cualquier URL, texto o dato en segundos. Función Pro — actualiza para desbloquear códigos QR ilimitados.</p>
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
                { title: "Código QR para Tarjetas de Presentación (Enlaza a Tu Sitio Web o vCard)", href: "/es/aprender/codigo-qr-para-tarjeta-de-presentacion" },
                { title: "Código QR para Menus de Restaurante (Crea un Enlace Escaneable)", href: "/es/aprender/codigo-qr-para-menu-de-restaurante" },
                { title: "Crear un Código QR que Enlace a un Documento PDF", href: "/es/aprender/codigo-qr-para-pdf" },
                { title: "Mejores Prácticas de Código QR (Tamaño, Ubicacion y Pruebas)", href: "/es/aprender/mejores-prácticas-codigo-qr" },
                { title: "Crear un Código QR para WiFi (Los Invitados se Conectan al Instante)", href: "/es/aprender/codigo-qr-para-wifi" },
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
                { q: "Como creo un código QR en línea gratis?", a: "Ve al generador de Código QR de PDF.it, ingresa tu URL, texto u otros datos, personaliza el estilo si deseas, y descarga tu código QR como imagen PNG o SVG. Los usuarios gratuitos obtienen hasta 10 códigos QR por día." },
                { q: "Que tipos de códigos QR puedo crear?", a: "Puedes crear códigos QR para URLs, texto plano, credenciales WiFi, información de contacto vCard, direcciones de correo electrónico, números de teléfono y más. Cada tipo codifica diferentes datos que teléfonos y escáneres pueden leer." },
                { q: "Los códigos QR expiran?", a: "Los códigos QR estaticos nunca expiran — los datos están codificados directamente en el patron. Sin embargo, si tu código QR enlaza a una URL y esa URL deja de funcionar, el código QR seguira funcionando pero el destino no cargara." },
                { q: "Puedo personalizar el color de mi código QR?", a: "Si. La herramienta de Código QR de PDF.it te permite cambiar los colores de primer plano y fondo. Solo asegurate de que haya suficiente contraste entre ellos — primer plano oscuro sobre fondo claro funciona mejor." },
                { q: "En que formato de archivo debo descargar mi código QR?", a: "Usa PNG para uso digital (sitios web, correos, redes sociales). Usa SVG si necesitas imprimir el código QR en tamaños grandes sin perder calidad — SVG escala infinitamente sin pixelacion." },
                { q: "La herramienta de Código QR es gratuita en PDF.it?", a: "El generador de Código QR es una función Pro en PDF.it. Los usuarios Pro ($3.99/mes) obtienen generación ilimitada de códigos QR junto con todas las demás herramientas premium de PDF." },
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
