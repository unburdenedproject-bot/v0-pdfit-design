import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Stamp, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Agregar una Marca de Agua 'Confidencial' a un PDF (Guia Rapida) | PDF.it",
  description:
    "Aprende como agregar una marca de agua CONFIDENCIAL, BORRADOR o NO COPIAR a un PDF en linea. Protege documentos sensibles en segundos con PDF.it.",
  keywords: "marca de agua confidencial pdf, marca de agua borrador pdf, marca de agua no copiar, estampar pdf confidencial",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como agrego una marca de agua Confidencial a un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a la herramienta Marca de Agua PDF de PDF.it, escribe CONFIDENCIAL como tu texto de marca de agua, ajusta la opacidad y el angulo, luego haz clic en Aplicar. La marca de agua aparece en todas las paginas del documento." }
    },
    {
      "@type": "Question",
      "name": "Puedo agregar una marca de agua BORRADOR en lugar de CONFIDENCIAL?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. Puedes escribir cualquier texto que desees — BORRADOR, CONFIDENCIAL, NO COPIAR, MUESTRA, SOLO USO INTERNO o cualquier frase personalizada. PDF.it te permite personalizar el texto, color, tamano y angulo." }
    },
    {
      "@type": "Question",
      "name": "La marca de agua Confidencial es permanente?",
      "acceptedAnswer": { "@type": "Answer", "text": "Por defecto, las marcas de agua se agregan como superposiciones. Para hacerla permanente, aplana el PDF despues de agregar la marca de agua usando la herramienta Aplanar PDF de PDF.it. Esto integra la marca de agua en la pagina para que no pueda eliminarse." }
    },
    {
      "@type": "Question",
      "name": "Puedo agregar marca de agua a multiples PDF a la vez?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. Los usuarios Pro y Business pueden usar procesamiento por lotes para agregar marca de agua a multiples PDF de una vez. Sube todos tus archivos, configura la marca de agua una vez, y aplicala a todos los documentos simultaneamente." }
    },
    {
      "@type": "Question",
      "name": "Que opacidad debo usar para una marca de agua Confidencial?",
      "acceptedAnswer": { "@type": "Answer", "text": "Para la mayoria de los documentos, 15-25% de opacidad funciona bien. Hace que la marca de agua sea claramente visible sin dificultar la lectura del texto subyacente. Para mayor disuasion, sube hasta 30-40%." }
    },
    {
      "@type": "Question",
      "name": "La herramienta Marca de Agua PDF es gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Marca de Agua PDF esta disponible para usuarios Pro ($3.99/mes) y Business ($13.99/mes). Ambos niveles incluyen marcas de agua ilimitadas, procesamiento por lotes y archivos de hasta 200MB." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Agregar una Marca de Agua Confidencial a un PDF",
  "description": "Estampa cualquier PDF con una marca de agua CONFIDENCIAL en 3 simples pasos con PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Sube tu PDF",
      "text": "Ve a la herramienta Marca de Agua PDF de PDF.it y sube el documento que necesitas marcar como confidencial."
    },
    {
      "@type": "HowToStep",
      "name": "Escribe CONFIDENCIAL como tu marca de agua",
      "text": "Ingresa CONFIDENCIAL en el campo de texto. Establece la opacidad al 15-25%, elige un color rojo o gris, y angulala diagonalmente a traves de la pagina."
    },
    {
      "@type": "HowToStep",
      "name": "Aplica y descarga",
      "text": "Haz clic en Aplicar Marca de Agua. Cada pagina de tu PDF ahora muestra el sello CONFIDENCIAL. Descarga el archivo y compartelo de forma segura."
    }
  ]
}

export default function MarcaDeAguaPDFConfidencialPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Agregar una Marca de Agua &quot;Confidencial&quot; a un PDF (Guia Rapida)</h1>
              <p className="text-xl text-slate-300">
                Necesitas marcar un documento como CONFIDENCIAL, BORRADOR o NO COPIAR antes de compartirlo? Aqui te explicamos como estampar cualquier PDF con una marca de agua de seguridad en segundos.
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
              <p className="text-slate-700 font-semibold">Listo para estampar tu PDF? Salta la guia y ve directo a la herramienta.</p>
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

            {/* Cuando usar */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cuando Necesitas una Marca de Agua Confidencial?</h2>
              <p className="text-slate-600 mb-4">
                Agregar una marca de agua CONFIDENCIAL es practica estandar en muchas industrias. Aqui estan los escenarios mas comunes:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Contratos y acuerdos legales.</strong> Las firmas de abogados marcan contratos, acuerdos de confidencialidad y documentos de acuerdos como CONFIDENCIAL antes de enviarlos a clientes o a la parte contraria.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Informes financieros.</strong> Los estados financieros internos, informes de auditoria y previsiones presupuestarias a menudo se estampan como CONFIDENCIAL para prevenir la distribucion no autorizada dentro o fuera de la organizacion.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Documentos de recursos humanos.</strong> Los registros de empleados, hojas de salario y evaluaciones de desempeno contienen informacion sensible que debe marcarse claramente como restringida.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Propuestas e informes en borrador.</strong> Al circular un documento no terminado para revision, una marca de agua BORRADOR les dice a los lectores que el contenido no es final y no debe citarse ni reenviarse.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">5.</span>
                  <span><strong>Examenes y evaluaciones.</strong> Las instituciones educativas estampan materiales de examen con NO COPIAR para prevenir la distribucion no autorizada entre estudiantes.</span>
                </li>
              </ul>
            </section>

            {/* Paso a paso */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Agregar una Marca de Agua Confidencial (Paso a Paso)</h2>
              <p className="text-slate-600 mb-4">
                Marca de Agua PDF esta disponible para usuarios Pro y Business. <Link href="/es/precios" className="text-[#14D8C4] hover:underline">Ver precios</Link> para mas detalles.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Sube tu PDF",
                    desc: "Abre la herramienta Marca de Agua PDF y sube el documento que necesitas marcar. Los usuarios Pro pueden subir archivos de hasta 200MB y usar procesamiento por lotes para multiples archivos.",
                  },
                  {
                    title: "Escribe tu texto de marca de agua",
                    desc: "Ingresa CONFIDENCIAL (o BORRADOR, NO COPIAR, SOLO USO INTERNO — lo que se ajuste a tu caso de uso). Elige un color rojo o gris oscuro para maxima visibilidad. Establece la opacidad al 15-25% para que el texto sea legible pero la marca de agua sea inconfundible. Angulala diagonalmente a 45 grados para el aspecto clasico.",
                  },
                  {
                    title: "Aplica y descarga",
                    desc: "Haz clic en Aplicar Marca de Agua. El sello aparece en cada pagina de tu documento. Descarga el PDF marcado y compartelo con confianza.",
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

            {/* Etiquetas populares */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Etiquetas de Marca de Agua Populares y Cuando Usarlas</h2>
              <p className="text-slate-600 mb-4">
                Diferentes etiquetas sirven para diferentes propositos. Aqui tienes una referencia rapida:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">CONFIDENCIAL</h3>
                  <p className="text-slate-600">
                    La etiqueta mas comun. Usala para cualquier documento que contenga informacion sensible — contratos, datos financieros, registros personales. Senala que el documento no debe compartirse fuera de su audiencia prevista.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">BORRADOR</h3>
                  <p className="text-slate-600">
                    Usa para documentos aun en revision. Una marca de agua BORRADOR impide que los destinatarios traten el contenido como final u oficial. Comun para informes, propuestas y documentos de politicas que se circulan para retroalimentacion.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">NO COPIAR</h3>
                  <p className="text-slate-600">
                    Mas fuerte que CONFIDENCIAL. Usa cuando quieras explicitamente prevenir que los destinatarios reproduzcan el documento. Comun para investigacion propietaria, secretos comerciales y examenes.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">MUESTRA / SOLO PARA REVISION</h3>
                  <p className="text-slate-600">
                    Usa para copias de vista previa. Los editores marcan muestras de libros, y las empresas de software marcan vistas previas de documentacion. Esto previene la distribucion gratuita de contenido de pago.
                  </p>
                </div>
              </div>
            </section>

            {/* Hacerla permanente */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Haz Tu Marca de Agua Confidencial Permanente</h2>
              <p className="text-slate-600 mb-4">
                Una superposicion de marca de agua a veces puede ser eliminada por alguien con las herramientas adecuadas. Para prevenir esto, toma estos pasos extra despues de marcar:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Aplana el PDF.</strong> Usa <Link href="/es/aplanar-pdf" className="text-[#14D8C4] hover:underline">Aplanar PDF</Link> para fusionar la marca de agua permanentemente en el contenido de la pagina. Despues de aplanar, la marca de agua no puede separarse del documento original.</li>
                <li>&#10003; <strong>Protege el archivo con contrasena.</strong> Usa <Link href="/es/proteger-pdf" className="text-[#14D8C4] hover:underline">Proteger PDF</Link> para agregar una contrasena que restrinja la edicion e impresion. Esto agrega otra barrera contra la manipulacion.</li>
                <li>&#10003; <strong>Comprime antes de compartir.</strong> Despues de agregar la marca de agua y aplanar, usa <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> para mantener el tamano del archivo manejable, especialmente si lo vas a enviar por correo.</li>
              </ul>
            </section>

            {/* Procesamiento por lotes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Marca de Agua por Lotes para Multiples Documentos</h2>
              <p className="text-slate-600 mb-4">
                Si necesitas agregar una marca de agua CONFIDENCIAL a toda una carpeta de documentos — como todos los archivos de un caso legal o un paquete financiero trimestral — el procesamiento por lotes ahorra tiempo significativo.
              </p>
              <p className="text-slate-600 mb-4">
                Los usuarios Pro y Business pueden subir multiples PDF a la vez, configurar las opciones de marca de agua una sola vez, y aplicar la misma marca de agua a cada archivo simultaneamente. Cada archivo se procesa individualmente y esta disponible para descarga individual o masiva como archivo ZIP.
              </p>
              <p className="text-slate-600">
                Esto es especialmente util para equipos legales preparando documentos de descubrimiento, firmas de contabilidad distribuyendo informes confidenciales, o departamentos de recursos humanos procesando registros de empleados. En lugar de marcar archivos uno por uno, hazlos todos en un solo lote. Despues de marcar, puedes <Link href="/es/unir-pdf" className="text-[#14D8C4] hover:underline">unirlos en un solo documento</Link> si es necesario.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Estampa Tus Documentos como Confidencial</h2>
            <p className="text-slate-300 mb-6">Sube tu PDF y agrega una marca de agua CONFIDENCIAL, BORRADOR o personalizada en segundos. Disponible para usuarios Pro y Business.</p>
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
                { title: "Como Agregar una Marca de Agua a un PDF en Linea", href: "/es/aprender/como-agregar-marca-de-agua-a-pdf" },
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
                { q: "Como agrego una marca de agua Confidencial a un PDF?", a: "Sube tu PDF a la herramienta Marca de Agua PDF de PDF.it, escribe CONFIDENCIAL como tu texto de marca de agua, ajusta la opacidad y el angulo, luego haz clic en Aplicar. La marca de agua aparece en todas las paginas del documento." },
                { q: "Puedo agregar una marca de agua BORRADOR en lugar de CONFIDENCIAL?", a: "Si. Puedes escribir cualquier texto que desees — BORRADOR, CONFIDENCIAL, NO COPIAR, MUESTRA, SOLO USO INTERNO o cualquier frase personalizada. PDF.it te permite personalizar el texto, color, tamano y angulo." },
                { q: "La marca de agua Confidencial es permanente?", a: "Por defecto, las marcas de agua se agregan como superposiciones. Para hacerla permanente, aplana el PDF despues de agregar la marca de agua usando la herramienta Aplanar PDF de PDF.it. Esto integra la marca de agua en la pagina para que no pueda eliminarse." },
                { q: "Puedo agregar marca de agua a multiples PDF a la vez?", a: "Si. Los usuarios Pro y Business pueden usar procesamiento por lotes para agregar marca de agua a multiples PDF de una vez. Sube todos tus archivos, configura la marca de agua una vez, y aplicala a todos los documentos simultaneamente." },
                { q: "Que opacidad debo usar para una marca de agua Confidencial?", a: "Para la mayoria de los documentos, 15-25% de opacidad funciona bien. Hace que la marca de agua sea claramente visible sin dificultar la lectura del texto subyacente. Para mayor disuasion, sube hasta 30-40%." },
                { q: "La herramienta Marca de Agua PDF es gratis?", a: "Marca de Agua PDF esta disponible para usuarios Pro ($3.99/mes) y Business ($13.99/mes). Ambos niveles incluyen marcas de agua ilimitadas, procesamiento por lotes y archivos de hasta 200MB." },
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
