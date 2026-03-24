import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Stamp, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Mejores Practicas de Marca de Agua en PDF (Tamano, Opacidad y Ubicacion) | PDF.it",
  description:
    "Aprende las mejores practicas para agregar marcas de agua a PDF — opacidad optima, tamano de fuente, ubicacion, color, y cuando usar marcas de agua diagonales vs centradas. Consejos profesionales de PDF.it.",
  keywords: "mejores practicas marca de agua pdf, opacidad marca de agua, ubicacion marca de agua, marca de agua pdf profesional",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Que opacidad debo usar para una marca de agua en PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Para la mayoria de los documentos, 15-25% de opacidad es ideal. Esto hace que la marca de agua sea claramente visible sin dificultar la lectura del texto subyacente. Usa menor opacidad (10-15%) para marcas sutiles y mayor opacidad (30-40%) para sellos de seguridad como CONFIDENCIAL." }
    },
    {
      "@type": "Question",
      "name": "Debo usar una marca de agua diagonal o centrada?",
      "acceptedAnswer": { "@type": "Answer", "text": "Las marcas de agua diagonales (45 grados) son ideales para sellos de seguridad como BORRADOR o CONFIDENCIAL — son dificiles de recortar. Las marcas de agua centradas a baja opacidad funcionan mejor para logos de marca. La ubicacion en esquina es ideal para marcas sutiles y profesionales." }
    },
    {
      "@type": "Question",
      "name": "Que tamano de fuente funciona mejor para marcas de agua de texto?",
      "acceptedAnswer": { "@type": "Answer", "text": "Para marcas de agua diagonales que abarcan la pagina, usa una fuente grande (60-100pt) para que el texto se extienda de esquina a esquina. Para sellos de esquina, usa una fuente mas pequena (24-36pt). El objetivo es legibilidad sin abrumar el contenido del documento." }
    },
    {
      "@type": "Question",
      "name": "Que color debe tener mi marca de agua?",
      "acceptedAnswer": { "@type": "Answer", "text": "El gris es la opcion mas profesional y versatil para marcas de agua de texto. El rojo funciona bien para sellos CONFIDENCIAL o urgentes. Para marcas de agua con logo, usa los colores de tu marca a opacidad reducida. Evita colores que choquen con el contenido del documento." }
    },
    {
      "@type": "Question",
      "name": "Como hago una marca de agua que no se pueda eliminar?",
      "acceptedAnswer": { "@type": "Answer", "text": "Despues de agregar tu marca de agua, aplana el PDF usando la herramienta Aplanar PDF de PDF.it. Esto fusiona la marca de agua con el contenido de la pagina de forma permanente. Luego protege el archivo con contrasena para prevenir mas ediciones." }
    },
    {
      "@type": "Question",
      "name": "La herramienta Marca de Agua PDF es gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Marca de Agua PDF esta disponible para usuarios Pro ($7.99/mes) y Business ($13.99/mes). Ambos niveles incluyen marcas de agua ilimitadas, procesamiento por lotes y archivos de hasta 200MB." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Crear una Marca de Agua Profesional en PDF",
  "description": "Sigue estas mejores practicas para agregar una marca de agua limpia y profesional a cualquier PDF con PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Elige tu tipo de marca de agua",
      "text": "Decide entre una marca de agua de texto (BORRADOR, CONFIDENCIAL) o una marca de agua de imagen (logo de empresa). El texto es mas rapido de configurar; las imagenes agregan una marca mas fuerte."
    },
    {
      "@type": "HowToStep",
      "name": "Establece opacidad y ubicacion optimas",
      "text": "Usa 15-25% de opacidad para legibilidad. Coloca sellos de seguridad en diagonal, logos de marca en el centro, y marcas sutiles en una esquina. Prueba en una pagina primero."
    },
    {
      "@type": "HowToStep",
      "name": "Aplica, aplana y protege",
      "text": "Aplica la marca de agua a todas las paginas. Para marcas de agua permanentes, aplana el PDF y agrega proteccion con contrasena para prevenir la eliminacion."
    }
  ]
}

export default function MarcaDeAguaPDFMejoresPracticasPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Marca de Agua PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Mejores Practicas de Marca de Agua en PDF (Tamano, Opacidad y Ubicacion)</h1>
              <p className="text-xl text-slate-300">
                Una buena marca de agua protege tu documento sin arruinar la legibilidad. Aqui estan las mejores practicas para opacidad, tamano de fuente, ubicacion y color — para que tus marcas de agua se vean profesionales siempre.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Stamp className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Listo para marcar? Salta la guia y ve directo a la herramienta.</p>
            </div>
            <Link
              href="/es/marca-de-agua-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Marca de Agua PDF Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Opacidad */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Elegir la Opacidad Correcta</h2>
              <p className="text-slate-600 mb-4">
                La opacidad es la configuracion mas importante de una marca de agua. Si es demasiado alta, bloquea el contenido; si es demasiado baja, nadie la nota. Aqui estan los rangos recomendados:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>10-15% de opacidad — Marca sutil.</strong> Ideal para marcas de agua con logo en documentos para clientes como propuestas y facturas. El logo es visible pero no compite con el texto. Los lectores pueden leer comodamente el documento sin notar la marca de agua a primera vista.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>15-25% de opacidad — Proteccion estandar.</strong> El punto ideal para la mayoria de las marcas de agua. Los sellos CONFIDENCIAL, BORRADOR y NO COPIAR son claramente legibles en este rango mientras mantienen el contenido del documento completamente legible. Este es el rango que recomendamos para la mayoria de los usuarios.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>30-40% de opacidad — Disuasion fuerte.</strong> Usa esto para documentos donde la marca de agua es el mensaje principal — copias de revision, documentos vencidos o muestras de vista previa. La marca de agua domina la pagina y deja muy claro que el documento tiene restricciones.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>50%+ de opacidad — Evitar en la mayoria de los casos.</strong> A este nivel, la marca de agua hace que el documento sea dificil de leer. Solo usa esto para documentos que deben ser visibles pero intencionalmente dificiles de usar, como certificados vencidos o contratos anulados.</span>
                </li>
              </ul>
            </section>

            {/* Ubicacion */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Ubicacion de la Marca de Agua: Donde en la Pagina?</h2>
              <p className="text-slate-600 mb-4">
                La posicion de tu marca de agua afecta tanto su visibilidad como cuanto interfiere con la lectura. Aqui estan las tres principales estrategias de ubicacion:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Diagonal (45 Grados)</h3>
                  <p className="text-slate-600">
                    La posicion clasica de marca de agua. El texto o imagen se extiende diagonalmente de una esquina a la otra. Esta es la ubicacion mas dificil de recortar, haciendola ideal para marcas de agua de seguridad como CONFIDENCIAL, BORRADOR y NO COPIAR. Usa un tamano de fuente grande (60-100pt para texto) para que la marca de agua abarque toda la pagina. Lee nuestra guia sobre <Link href="/es/aprender/marca-de-agua-pdf-confidencial" className="text-orange-600 hover:underline">agregar marcas de agua confidenciales</Link> para configuraciones especificas.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Centro (Sin Rotacion)</h3>
                  <p className="text-slate-600">
                    Coloca la marca de agua en el centro de la pagina sin rotacion. Esto funciona mejor para marcas de agua con logo a baja opacidad — crea una presencia de marca de fondo limpia y simetrica. Escala el logo al 30-50% del ancho de la pagina.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Esquina (Inferior Derecha o Inferior Izquierda)</h3>
                  <p className="text-slate-600">
                    La ubicacion mas discreta. Un logo o sello de texto pequeno en una esquina funciona como un pie de pagina o membrete. Usa opacidad ligeramente mayor (20-30%) ya que la marca es pequena. Esto es profesional y no intrusivo, ideal para facturas, informes y correspondencia formal.
                  </p>
                </div>
              </div>
            </section>

            {/* Tamano y color */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Guia de Tamano de Fuente y Color</h2>
              <p className="text-slate-600 mb-4">
                Para marcas de agua de texto, la combinacion de tamano de fuente y color determina como se siente la marca de agua en la pagina:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Texto diagonal grande (60-100pt):</strong> Usa para sellos de pagina completa como CONFIDENCIAL o BORRADOR. El texto debe extenderse de esquina a esquina. Combina con color gris o rojo claro a 15-25% de opacidad.</li>
                <li>&#10003; <strong>Texto mediano (36-48pt):</strong> Bueno para marcas de agua centradas o patrones repetidos. Funciona bien para nombres de empresa o etiquetas de estado del documento.</li>
                <li>&#10003; <strong>Texto pequeno (24-36pt):</strong> Ideal para sellos de esquina o etiquetas sutiles. Usa opacidad ligeramente mayor (20-30%) ya que el texto es mas pequeno y necesita mantenerse legible.</li>
                <li>&#10003; <strong>Color gris:</strong> La opcion mas profesional y versatil. Funciona en cualquier tipo de documento y no choca con los colores del contenido. Recomendado para la mayoria de las marcas de agua.</li>
                <li>&#10003; <strong>Color rojo:</strong> Transmite urgencia e importancia. Ideal para sellos CONFIDENCIAL, NO COPIAR y relacionados con seguridad. Usar con moderacion — el rojo puede sentirse agresivo.</li>
                <li>&#10003; <strong>Colores de marca:</strong> Si usas el nombre de tu empresa como marca de agua de texto, combina los colores de tu marca a baja opacidad. Esto refuerza la identidad de marca sin chocar.</li>
              </ul>
            </section>

            {/* Referencia rapida */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Referencia Rapida: Que Configuracion para Que Proposito?</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Documento borrador para revision interna",
                    desc: "Texto: BORRADOR | Color: Gris | Opacidad: 20% | Posicion: Diagonal | Fuente: 80pt. Esto marca claramente el documento como no terminado sin dificultar el proceso de revision.",
                  },
                  {
                    title: "Informe financiero confidencial",
                    desc: "Texto: CONFIDENCIAL | Color: Rojo | Opacidad: 20-25% | Posicion: Diagonal | Fuente: 72pt. Fuerte visibilidad para seguridad. Aplana y protege con contrasena despues de marcar.",
                  },
                  {
                    title: "Propuesta de cliente con marca empresarial",
                    desc: "Imagen: Logo de empresa (PNG) | Opacidad: 10-15% | Posicion: Centro | Escala: 40% del ancho de pagina. Marca sutil y profesional que no distrae del contenido.",
                  },
                  {
                    title: "Factura o contrato",
                    desc: "Imagen: Logo de empresa (PNG) | Opacidad: 20-25% | Posicion: Esquina inferior derecha | Escala: 15% del ancho de pagina. Marca de empresa discreta pero visible, similar a un membrete.",
                  },
                  {
                    title: "Copia de vista previa o muestra",
                    desc: "Texto: MUESTRA | Color: Gris | Opacidad: 30-35% | Posicion: Diagonal | Fuente: 90pt. Marca claramente el documento como una vista previa para prevenir el uso no autorizado del contenido.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Hacer permanente */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Hacer Tu Marca de Agua Permanente y Segura</h2>
              <p className="text-slate-600 mb-4">
                Incluso la mejor marca de agua es inutil si alguien puede eliminarla facilmente. Sigue estos pasos despues de marcar para fijarla:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Aplana el PDF.</strong> Usa <Link href="/es/aplanar-pdf" className="text-orange-600 hover:underline">Aplanar PDF</Link> para fusionar la marca de agua permanentemente en el contenido de la pagina. Una vez aplanada, la marca de agua se convierte en parte de la imagen de la pagina y no puede seleccionarse ni eliminarse por separado.</li>
                <li>&#10003; <strong>Agrega proteccion con contrasena.</strong> Usa <Link href="/es/proteger-pdf" className="text-orange-600 hover:underline">Proteger PDF</Link> para restringir la edicion, copia e impresion. Esto previene que alguien abra el archivo en un editor e intente eliminar la marca de agua.</li>
                <li>&#10003; <strong>Comprime el archivo final.</strong> Aplanar y agregar marca de agua puede aumentar el tamano del archivo. Ejecuta el resultado final a traves de <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> para mantenerlo manejable para correo electronico o carga.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Marca de Agua PDF esta disponible para usuarios Pro y Business. <Link href="/es/precios" className="text-orange-600 hover:underline">Ver precios</Link> para mas detalles.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Listo para Agregar una Marca de Agua Profesional?</h2>
            <p className="text-slate-300 mb-6">Sube tu PDF, configura tu marca de agua con las mejores opciones, y descarga el resultado en segundos. Disponible para usuarios Pro y Business.</p>
            <Link
              href="/es/marca-de-agua-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Stamp className="h-5 w-5" /> Marca de Agua PDF Ahora
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Agregar una Marca de Agua a un PDF en Linea", href: "/es/aprender/como-agregar-marca-de-agua-a-pdf" },
                { title: "Agregar una Marca de Agua 'Confidencial' a un PDF (Guia Rapida)", href: "/es/aprender/marca-de-agua-pdf-confidencial" },
                { title: "Agregar una Marca de Agua a un PDF en Tu Telefono (iPhone y Android)", href: "/es/aprender/marca-de-agua-pdf-en-movil" },
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
                { q: "Que opacidad debo usar para una marca de agua en PDF?", a: "Para la mayoria de los documentos, 15-25% de opacidad es ideal. Esto hace que la marca de agua sea claramente visible sin dificultar la lectura del texto subyacente. Usa menor opacidad (10-15%) para marcas sutiles y mayor opacidad (30-40%) para sellos de seguridad como CONFIDENCIAL." },
                { q: "Debo usar una marca de agua diagonal o centrada?", a: "Las marcas de agua diagonales (45 grados) son ideales para sellos de seguridad como BORRADOR o CONFIDENCIAL — son dificiles de recortar. Las marcas de agua centradas a baja opacidad funcionan mejor para logos de marca. La ubicacion en esquina es ideal para marcas sutiles y profesionales." },
                { q: "Que tamano de fuente funciona mejor para marcas de agua de texto?", a: "Para marcas de agua diagonales que abarcan la pagina, usa una fuente grande (60-100pt) para que el texto se extienda de esquina a esquina. Para sellos de esquina, usa una fuente mas pequena (24-36pt). El objetivo es legibilidad sin abrumar el contenido del documento." },
                { q: "Que color debe tener mi marca de agua?", a: "El gris es la opcion mas profesional y versatil para marcas de agua de texto. El rojo funciona bien para sellos CONFIDENCIAL o urgentes. Para marcas de agua con logo, usa los colores de tu marca a opacidad reducida. Evita colores que choquen con el contenido del documento." },
                { q: "Como hago una marca de agua que no se pueda eliminar?", a: "Despues de agregar tu marca de agua, aplana el PDF usando la herramienta Aplanar PDF de PDF.it. Esto fusiona la marca de agua con el contenido de la pagina de forma permanente. Luego protege el archivo con contrasena para prevenir mas ediciones." },
                { q: "La herramienta Marca de Agua PDF es gratis?", a: "Marca de Agua PDF esta disponible para usuarios Pro ($7.99/mes) y Business ($13.99/mes). Ambos niveles incluyen marcas de agua ilimitadas, procesamiento por lotes y archivos de hasta 200MB." },
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
