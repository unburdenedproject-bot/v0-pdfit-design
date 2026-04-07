import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Stamp, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Agregar Tu Logo como Marca de Agua en un PDF | PDF.it",
  description:
    "Aprende cómo agregar el logo de tu empresa como marca de agua de imagen en un PDF. Personaliza propuestas, facturas e informes con una marca de agua profesional usando PDF.it.",
  keywords: "marca de agua logo pdf, agregar logo a pdf, personalizar pdf con logo, marca de agua imagen pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo agrego mi logo como marca de agua en un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a la herramienta Marca de Agua PDF de PDF.it, selecciona Marca de Agua de Imagen, sube tu archivo de logo (PNG o JPG), ajusta el tamaño y la opacidad, y haz clic en Aplicar. Tu logo aparecerá en cada página." }
    },
    {
      "@type": "Question",
      "name": "¿En qué formato de imagen debe estar mi logo?",
      "acceptedAnswer": { "@type": "Answer", "text": "PNG con fondo transparente funciona mejor. Esto asegura que solo aparezca la forma de tu logo en la página sin un rectángulo blanco alrededor. Los logos JPG funcionarán pero pueden tener un fondo visible." }
    },
    {
      "@type": "Question",
      "name": "¿Qué tamaño y opacidad funcionan mejor para una marca de agua con logo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Para una marca de agua sutil de fondo, usa 10-20% de opacidad y escala el logo a aproximadamente 30-50% del ancho de la página. Para un sello más visible, aumenta la opacidad a 25-35%. Colócalo en el centro para marca de fondo o en una esquina para una marca sutil." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo poner marca de agua con mi logo en varios PDFs a la vez?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Los usuarios Pro y Business pueden usar el procesamiento por lotes para aplicar la misma marca de agua con logo a múltiples PDFs simultáneamente. Sube todos tus archivos, configura la marca de agua una vez y aplícala a todos." }
    },
    {
      "@type": "Question",
      "name": "¿Agregar una marca de agua con logo aumentará el tamaño del archivo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Ligeramente. La imagen del logo se incrusta en cada página, lo que añade algo de tamaño al archivo. Si el resultado es demasiado grande, usa la herramienta Comprimir PDF de PDF.it después de aplicar la marca de agua para reducir el tamaño." }
    },
    {
      "@type": "Question",
      "name": "¿La herramienta Marca de Agua PDF es gratuita?",
      "acceptedAnswer": { "@type": "Answer", "text": "Marca de Agua PDF está disponible para usuarios Pro ($3.99/mes) y Business ($13.99/mes). Ambos niveles incluyen marcas de agua ilimitadas, procesamiento por lotes y archivos de hasta 200MB." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Agregar una Marca de Agua con Logo a un PDF",
  "description": "Personaliza cualquier PDF con el logo de tu empresa en 3 simples pasos usando PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Sube tu PDF",
      "text": "Ve a la herramienta Marca de Agua PDF de PDF.it y sube el documento que quieres personalizar con tu logo."
    },
    {
      "@type": "HowToStep",
      "name": "Sube tu logo y ajusta la configuración",
      "text": "Selecciona Marca de Agua de Imagen, sube tu logo como PNG (se recomienda fondo transparente) y ajusta la opacidad a 10-20% para un aspecto sutil. Posiciónalo en el centro o en una esquina."
    },
    {
      "@type": "HowToStep",
      "name": "Aplica y descarga",
      "text": "Haz clic en Aplicar Marca de Agua. Tu logo aparece en cada página del PDF. Descarga el documento con marca."
    }
  ]
}

export default function MarcaDeAguaPDFConLogoPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Agregar Tu Logo como Marca de Agua en un PDF</h1>
              <p className="text-xl text-slate-300">
                ¿Quieres personalizar tus propuestas, facturas o informes con el logo de tu empresa? Aquí te explicamos cómo agregar una marca de agua profesional con logo a cualquier PDF — sin software de diseño.
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
              <p className="text-slate-700 font-semibold">¿Listo para personalizar tu PDF? Salta la guía y ve directo a la herramienta.</p>
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

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Por Qué Personalizar Tus PDFs con una Marca de Agua con Logo?</h2>
              <p className="text-slate-600 mb-4">
                Una marca de agua con logo convierte un documento ordinario en un activo de marca. Estas son las razones por las que empresas y freelancers agregan logos a sus PDFs:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Apariencia profesional.</strong> Las propuestas, cotizaciones e informes con una marca de agua sutil con logo lucen pulidos y establecen credibilidad con los clientes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Reconocimiento de marca.</strong> Cada vez que alguien abre tu documento, ve tu marca. Con el tiempo, esto construye reconocimiento y confianza.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Protección de propiedad intelectual.</strong> Arquitectos, diseñadores y fotógrafos aplican marcas de agua a planos y portafolios para reclamar autoría y desalentar el uso no autorizado.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Rastreo de origen del documento.</strong> Si un documento se reenvía más allá de su audiencia prevista, el logo deja claro de dónde proviene.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Agregar una Marca de Agua con Logo (Paso a Paso)</h2>
              <p className="text-slate-600 mb-4">
                Marca de Agua PDF está disponible para usuarios Pro y Business. <Link href="/es/precios" className="text-[#14D8C4] hover:underline">Ver precios</Link> para más detalles.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Sube tu PDF",
                    desc: "Abre la herramienta Marca de Agua PDF y sube el documento que deseas personalizar. Los usuarios Pro pueden subir archivos de hasta 200MB y usar procesamiento por lotes para múltiples archivos a la vez.",
                  },
                  {
                    title: "Sube tu logo y configúralo",
                    desc: "Selecciona Marca de Agua de Imagen y sube tu archivo de logo. Para mejor resultado, usa un PNG con fondo transparente. Ajusta la opacidad (10-20% para sutil, 25-35% para prominente), escala el logo a aproximadamente 30-50% del ancho de la página, y elige ubicación central para marca de fondo o una esquina para un sello sutil.",
                  },
                  {
                    title: "Aplica y descarga",
                    desc: "Haz clic en Aplicar Marca de Agua. Tu logo aparece en cada página del PDF. Descarga el documento con marca y compártelo con clientes, socios o interesados.",
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

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Preparar Tu Logo para la Marca de Agua</h2>
              <p className="text-slate-600 mb-4">
                La calidad de tu marca de agua con logo depende en gran medida del archivo de imagen que subas. Aquí algunos consejos:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Usa PNG con fondo transparente.</strong> Este es el consejo más importante. Un PNG transparente asegura que solo la forma de tu logo aparezca en la página, sin un rectángulo blanco o de color detrás.</li>
                <li>&#10003; <strong>Usa alta resolución.</strong> Un mínimo de 300 DPI o 1000px de ancho asegura que tu logo se vea nítido cuando se escale en la página. Los logos de baja resolución se verán borrosos.</li>
                <li>&#10003; <strong>Usa una versión de un solo color o simplificada.</strong> Los logos multicolor complejos pueden distraer como marcas de agua. Si tienes una versión simplificada o monocromática de tu logo, úsala.</li>
                <li>&#10003; <strong>Prueba con una página de muestra primero.</strong> Antes de aplicar marca de agua a una propuesta de 50 páginas, prueba tu configuración de logo en una sola página para asegurarte de que el tamaño, la opacidad y la posición se vean bien.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Estrategias de Ubicación del Logo</h2>
              <p className="text-slate-600 mb-4">
                Dónde coloques tu marca de agua con logo depende del propósito. Para una guía más detallada, consulta nuestra <Link href="/es/aprender/marca-de-agua-pdf-mejores-practicas" className="text-[#14D8C4] hover:underline">guía de mejores prácticas de marcas de agua</Link>.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Centro — Marca de Fondo</h3>
                  <p className="text-slate-600">
                    Coloca el logo en el centro de la página con baja opacidad (10-15%). Esto crea una presencia de marca sutil en el fondo sin distraer del contenido. Ideal para propuestas, informes y entregables de clientes.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Esquina Inferior — Sello Sutil</h3>
                  <p className="text-slate-600">
                    Coloca un logo pequeño en la esquina inferior derecha o izquierda con opacidad ligeramente mayor (20-30%). Funciona como un pie de página de membrete y es menos intrusivo. Bueno para facturas, contratos y correspondencia formal.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Diagonal — Máxima Visibilidad</h3>
                  <p className="text-slate-600">
                    Rota el logo 45 grados y estíralo a través de la página. Este es el enfoque de marca más fuerte y también funciona como disuasivo contra la copia no autorizada. Úsalo para portafolios, trabajo de diseño y documentos de previsualización.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Después de Aplicar la Marca de Agua: Siguientes Pasos</h2>
              <p className="text-slate-600 mb-4">
                Una vez que tu PDF tiene marca con tu logo, considera estos pasos adicionales:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Aplana para hacerlo permanente.</strong> Usa <Link href="/es/aplanar-pdf" className="text-[#14D8C4] hover:underline">Aplanar PDF</Link> para fusionar la marca de agua en la página para que no pueda ser eliminada por alguien que edite el archivo.</li>
                <li>&#10003; <strong>Comprime para reducir el tamaño.</strong> Las imágenes de logo añaden algo de peso al PDF. Pásalo por <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> para reducirlo, especialmente si planeas enviarlo por email.</li>
                <li>&#10003; <strong>Protege con contraseña.</strong> Para documentos con marca sensibles, agrega una contraseña usando <Link href="/es/proteger-pdf" className="text-[#14D8C4] hover:underline">Proteger PDF</Link> para restringir la edición e impresión.</li>
                <li>&#10003; <strong>Combina múltiples documentos.</strong> Si tienes varios PDFs con marca que necesitan ir juntos, usa <Link href="/es/unir-pdf" className="text-[#14D8C4] hover:underline">Unir PDF</Link> para combinarlos en un solo paquete profesional.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Personaliza Tus PDFs con Tu Logo</h2>
            <p className="text-slate-300 mb-6">Sube tu PDF y logo, ajusta la opacidad y posición, y descarga tu documento con marca en segundos. Disponible para usuarios Pro y Business.</p>
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
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Cómo Agregar una Marca de Agua a un PDF en Línea", href: "/es/aprender/como-agregar-marca-de-agua-a-pdf" },
                { title: "Agregar una Marca de Agua 'Confidencial' a un PDF (Guía Rápida)", href: "/es/aprender/marca-de-agua-pdf-confidencial" },
                { title: "Mejores Prácticas de Marca de Agua en PDF (Tamaño, Opacidad y Ubicación)", href: "/es/aprender/marca-de-agua-pdf-mejores-practicas" },
                { title: "Agregar Marca de Agua a un PDF en tu Teléfono (iPhone y Android)", href: "/es/aprender/marca-de-agua-pdf-en-movil" },
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
                { q: "¿Cómo agrego mi logo como marca de agua en un PDF?", a: "Sube tu PDF a la herramienta Marca de Agua PDF de PDF.it, selecciona Marca de Agua de Imagen, sube tu archivo de logo (PNG o JPG), ajusta el tamaño y la opacidad, y haz clic en Aplicar. Tu logo aparecerá en cada página." },
                { q: "¿En qué formato de imagen debe estar mi logo?", a: "PNG con fondo transparente funciona mejor. Esto asegura que solo tu logo aparezca en la página sin un rectángulo blanco alrededor. Los logos JPG funcionarán pero pueden tener un fondo visible." },
                { q: "¿Qué tamaño y opacidad funcionan mejor para una marca de agua con logo?", a: "Para una marca de agua sutil de fondo, usa 10-20% de opacidad y escala el logo a aproximadamente 30-50% del ancho de la página. Para un sello más visible, aumenta la opacidad a 25-35%." },
                { q: "¿Puedo poner marca de agua con mi logo en varios PDFs a la vez?", a: "Sí. Los usuarios Pro y Business pueden usar el procesamiento por lotes para aplicar la misma marca de agua con logo a múltiples PDFs simultáneamente." },
                { q: "¿Agregar una marca de agua con logo aumentará el tamaño del archivo?", a: "Ligeramente. La imagen del logo se incrusta en cada página, lo que añade algo de tamaño. Si el resultado es demasiado grande, usa la herramienta Comprimir PDF de PDF.it después de aplicar la marca de agua." },
                { q: "¿La herramienta Marca de Agua PDF es gratuita?", a: "Marca de Agua PDF está disponible para usuarios Pro ($3.99/mes) y Business ($13.99/mes). Ambos niveles incluyen marcas de agua ilimitadas, procesamiento por lotes y archivos de hasta 200MB." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}">
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
