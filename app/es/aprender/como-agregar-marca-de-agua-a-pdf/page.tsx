import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Stamp, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Agregar una Marca de Agua a un PDF en Linea | PDF.it",
  description:
    "Aprende como agregar una marca de agua de texto o imagen a cualquier PDF en linea. Marca documentos como Borrador, Confidencial o estampa tu logo — guia paso a paso con PDF.it.",
  keywords: "agregar marca de agua a pdf, marca de agua pdf en linea, poner marca de agua en pdf, estampar pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como agrego una marca de agua a un PDF en linea?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a la herramienta Marca de Agua PDF de PDF.it, escribe tu texto de marca de agua o sube una imagen, ajusta la opacidad y posicion, luego haz clic en Aplicar. Descarga tu PDF con marca de agua en segundos." }
    },
    {
      "@type": "Question",
      "name": "Puedo agregar una marca de agua de imagen como un logo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it admite marcas de agua de texto e imagen. Sube un logo PNG o JPG, ajusta el tamano y la opacidad, y se colocara en cada pagina de tu PDF." }
    },
    {
      "@type": "Question",
      "name": "La herramienta Marca de Agua PDF es gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Marca de Agua PDF esta disponible para usuarios Pro y Business. Pro comienza en $3.99/mes e incluye marcas de agua ilimitadas, procesamiento por lotes y archivos de hasta 200MB." }
    },
    {
      "@type": "Question",
      "name": "La marca de agua aparecera en todas las paginas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. Por defecto, la marca de agua se aplica a todas las paginas de tu PDF. Esto asegura un marcado consistente de marca o seguridad en todo el documento." }
    },
    {
      "@type": "Question",
      "name": "Alguien puede quitar mi marca de agua?",
      "acceptedAnswer": { "@type": "Answer", "text": "Una marca de agua agregada como superposicion a veces puede eliminarse con herramientas avanzadas. Para mayor proteccion, combina la marca de agua con proteccion por contrasena usando la herramienta Proteger PDF de PDF.it, o aplana el PDF despues para integrar la marca de agua en el contenido de la pagina." }
    },
    {
      "@type": "Question",
      "name": "Puedo agregar una marca de agua a un PDF desde mi telefono?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it funciona en cualquier navegador movil. Sube tu PDF, agrega tu marca de agua de texto o imagen, y descarga el resultado — sin necesidad de aplicacion." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Agregar una Marca de Agua a un PDF en Linea",
  "description": "Agrega una marca de agua de texto o imagen a cualquier PDF en 3 simples pasos con PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Sube tu PDF",
      "text": "Ve a la herramienta Marca de Agua PDF de PDF.it y sube el archivo que deseas marcar haciendo clic o arrastandolo al area de carga."
    },
    {
      "@type": "HowToStep",
      "name": "Elige tu marca de agua",
      "text": "Escribe tu texto de marca de agua (ej., BORRADOR, CONFIDENCIAL) o sube una imagen como un logo de empresa. Ajusta la opacidad, tamano, rotacion y posicion."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga el PDF con marca de agua",
      "text": "Haz clic en Aplicar Marca de Agua y descarga tu PDF con la marca de agua integrada en cada pagina."
    }
  ]
}

export default function ComoAgregarMarcaDeAguaAPDFPage() {
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
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Marca de Agua PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Como Agregar una Marca de Agua a un PDF en Linea</h1>
              <p className="text-xl text-slate-300">
                Necesitas estampar un documento como Borrador, Confidencial o agregar el logo de tu empresa? Aqui te explicamos como agregar una marca de agua a cualquier PDF en segundos — sin necesidad de instalar software.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <Stamp className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Listo para marcar? Salta la guia y ve directo a la herramienta.</p>
            </div>
            <Link
              href="/es/marca-de-agua-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Marca de Agua PDF Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Por que marca de agua */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Agregar una Marca de Agua a un PDF?</h2>
              <p className="text-slate-600 mb-4">
                Una marca de agua es una superposicion visible en las paginas de tu documento. Puede ser texto, una imagen o un logo. La gente usa marcas de agua por muchas razones:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Marcar documentos como Borrador.</strong> Al compartir versiones tempranas de un informe o propuesta, una marca de agua BORRADOR les dice a los destinatarios que el contenido no es final y puede cambiar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Etiquetar archivos sensibles como Confidencial.</strong> Los contratos legales, informes financieros y documentos de recursos humanos a menudo necesitan un sello CONFIDENCIAL para desalentar el compartir no autorizado.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Marcar documentos con tu logo.</strong> Las propuestas, facturas y presentaciones se ven mas profesionales cuando llevan el logo de tu empresa como una marca de agua sutil de fondo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Desalentar la copia no autorizada.</strong> Una marca de agua NO COPIAR o MUESTRA deja claro que el documento no debe ser redistribuido.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">5.</span>
                  <span><strong>Rastrear destinatarios del documento.</strong> Algunos equipos agregan marcas de agua unicas por destinatario para que los documentos filtrados puedan rastrearse hasta la fuente.</span>
                </li>
              </ul>
            </section>

            {/* Paso a paso */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Agregar una Marca de Agua a un PDF (Paso a Paso)</h2>
              <p className="text-slate-600 mb-4">
                Marca de Agua PDF esta disponible para usuarios Pro y Business. <Link href="/es/precios" className="text-[#14D8C4] hover:underline">Ver precios</Link> para mas detalles.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Sube tu PDF",
                    desc: "Ve a la herramienta Marca de Agua PDF y arrastra tu archivo al area de carga, o haz clic para buscar. Los usuarios Pro pueden subir archivos de hasta 200MB y procesar multiples archivos en lote.",
                  },
                  {
                    title: "Configura tu marca de agua",
                    desc: "Elige entre una marca de agua de texto (escribe cualquier frase como BORRADOR, CONFIDENCIAL o el nombre de tu empresa) o una marca de agua de imagen (sube un logo PNG o JPG). Ajusta la opacidad, tamano de fuente, angulo de rotacion y posicion en la pagina.",
                  },
                  {
                    title: "Aplica y descarga",
                    desc: "Haz clic en Aplicar Marca de Agua. PDF.it estampa cada pagina de tu PDF con tu marca de agua elegida. Descarga el resultado inmediatamente.",
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

            {/* Texto vs imagen */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Marcas de Agua de Texto vs. Marcas de Agua de Imagen</h2>
              <p className="text-slate-600 mb-4">
                PDF.it admite ambos tipos. Aqui te explicamos cuando usar cada uno:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Marcas de Agua de Texto</h3>
                  <p className="text-slate-600">
                    Ideales para etiquetas de estado como BORRADOR, CONFIDENCIAL, NO COPIAR o MUESTRA. Las marcas de agua de texto son rapidas de configurar — solo escribe la frase, elige un color y ajusta la opacidad. Funcionan bien en un angulo diagonal a traves de la pagina para maxima visibilidad sin bloquear el contenido.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Marcas de Agua de Imagen</h3>
                  <p className="text-slate-600">
                    Ideales para marca empresarial. Sube el logo de tu empresa como PNG con fondo transparente para el aspecto mas limpio. Las marcas de agua de imagen son geniales en propuestas, facturas y documentos para clientes. Establece la opacidad al 10-20% para que el logo sea visible pero no interfiera con la lectura.
                  </p>
                </div>
              </div>
            </section>

            {/* Hacer mas segura la marca de agua */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Hacer Tu Marca de Agua Mas Dificil de Eliminar</h2>
              <p className="text-slate-600 mb-4">
                Una marca de agua estandar es una superposicion que se coloca encima del contenido de la pagina. Alguien con las herramientas adecuadas podria potencialmente eliminarla. Aqui te explicamos como hacer tu marca de agua mas permanente:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Aplana el PDF despues.</strong> Usa <Link href="/es/aplanar-pdf" className="text-[#14D8C4] hover:underline">Aplanar PDF</Link> despues de agregar la marca de agua. Esto integra la marca de agua en el contenido de la pagina para que no pueda separarse del texto e imagenes originales.</li>
                <li>&#10003; <strong>Agrega proteccion con contrasena.</strong> Usa <Link href="/es/proteger-pdf" className="text-[#14D8C4] hover:underline">Proteger PDF</Link> para restringir permisos de edicion. Esto impide que usuarios casuales modifiquen o eliminen la marca de agua.</li>
                <li>&#10003; <strong>Combina ambos enfoques.</strong> Aplana primero, luego protege con contrasena. Esto te da la proteccion mas fuerte contra la eliminacion no autorizada.</li>
              </ul>
            </section>

            {/* Casos de uso comunes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Casos de Uso Comunes de Marcas de Agua</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Documentos Legales y Financieros</h3>
                  <p className="text-slate-600">
                    Las firmas de abogados y departamentos de contabilidad agregan marcas de agua CONFIDENCIAL a contratos, informes de auditoria y declaraciones fiscales antes de compartirlos externamente. Lee nuestra guia dedicada sobre <Link href="/es/aprender/marca-de-agua-pdf-confidencial" className="text-[#14D8C4] hover:underline">agregar una marca de agua Confidencial</Link>.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Bienes Raices y Arquitectura</h3>
                  <p className="text-slate-600">
                    Los agentes y arquitectos marcan planos, listados de propiedades y dibujos de diseno con el logo de su empresa para proteger la propiedad intelectual y mantener la presencia de marca.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Educacion y Publicacion</h3>
                  <p className="text-slate-600">
                    Los profesores marcan examenes con MUESTRA para prevenir la redistribucion. Los editores marcan copias de revision con el nombre del revisor para responsabilidad. Despues de marcar, puedes <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">comprimir el PDF</Link> para mantener tamanos de archivo manejables para distribucion por correo.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Listo para Agregar Marca de Agua a Tu PDF?</h2>
            <p className="text-slate-300 mb-6">Sube tu archivo, agrega una marca de agua de texto o imagen, y descarga el resultado en segundos. Disponible para usuarios Pro y Business.</p>
            <Link
              href="/es/marca-de-agua-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Stamp className="h-5 w-5" /> Marca de Agua PDF Ahora
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Agregar una Marca de Agua 'Confidencial' a un PDF (Guia Rapida)", href: "/es/aprender/marca-de-agua-pdf-confidencial" },
                { title: "Mejores Practicas de Marca de Agua en PDF (Tamano, Opacidad y Ubicacion)", href: "/es/aprender/marca-de-agua-pdf-mejores-practicas" },
                { title: "Agregar una Marca de Agua a un PDF en Tu Telefono (iPhone y Android)", href: "/es/aprender/marca-de-agua-pdf-en-movil" },
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
                { q: "Como agrego una marca de agua a un PDF en linea?", a: "Sube tu PDF a la herramienta Marca de Agua PDF de PDF.it, escribe tu texto de marca de agua o sube una imagen, ajusta la opacidad y posicion, luego haz clic en Aplicar. Descarga tu PDF con marca de agua en segundos." },
                { q: "Puedo agregar una marca de agua de imagen como un logo?", a: "Si. PDF.it admite marcas de agua de texto e imagen. Sube un logo PNG o JPG, ajusta el tamano y la opacidad, y se colocara en cada pagina de tu PDF." },
                { q: "La herramienta Marca de Agua PDF es gratis?", a: "Marca de Agua PDF esta disponible para usuarios Pro y Business. Pro comienza en $3.99/mes e incluye marcas de agua ilimitadas, procesamiento por lotes y archivos de hasta 200MB." },
                { q: "La marca de agua aparecera en todas las paginas?", a: "Si. Por defecto, la marca de agua se aplica a todas las paginas de tu PDF. Esto asegura un marcado consistente de marca o seguridad en todo el documento." },
                { q: "Alguien puede quitar mi marca de agua?", a: "Una marca de agua agregada como superposicion a veces puede eliminarse con herramientas avanzadas. Para mayor proteccion, combina la marca de agua con proteccion por contrasena usando la herramienta Proteger PDF de PDF.it, o aplana el PDF despues para integrar la marca de agua en el contenido de la pagina." },
                { q: "Puedo agregar una marca de agua a un PDF desde mi telefono?", a: "Si. PDF.it funciona en cualquier navegador movil. Sube tu PDF, agrega tu marca de agua de texto o imagen, y descarga el resultado — sin necesidad de aplicacion." },
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
