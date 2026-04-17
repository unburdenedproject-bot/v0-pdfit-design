import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Shield, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Mejores Prácticas de Contraseña para PDF (Contraseñas Fuertes y Permisos) | PDF.it",
  description: "Aprende como elegir contraseñas fuertes para tus PDFs, establecer los permisos correctos y evitar errores comunes de seguridad. Una guia completa de seguridad de contraseñas para PDF.",
  keywords: "mejores prácticas contraseña pdf, contraseña fuerte pdf, permisos pdf, configuración seguridad pdf",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Que hace una contraseña de PDF fuerte?", "acceptedAnswer": { "@type": "Answer", "text": "Una contraseña de PDF fuerte tiene al menos 12 caracteres, combina letras mayusculas y minusculas, números y caracteres especiales, y evita palabras del diccionario o información personal como cumpleanos." } },
  { "@type": "Question", "name": "Debo usar la misma contraseña para todos mis PDFs?", "acceptedAnswer": { "@type": "Answer", "text": "No. Usar la misma contraseña para cada PDF significa que si una contraseña es comprometida, todos tus documentos quedan expuestos. Usa una contraseña única para cada documento sensible y guardalas en un gestor de contraseñas." } },
  { "@type": "Question", "name": "Que permisos de PDF puedo restringir?", "acceptedAnswer": { "@type": "Answer", "text": "Puedes restringir la impresión, copia de texto, edición de contenido, extracción de páginas, agregar anotaciones y rellenar formularios. PDF.it te permite establecer todos estos permisos cuando proteges un PDF." } },
  { "@type": "Question", "name": "La encriptación de 128 bits es suficiente para la seguridad del PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Si, la encriptación AES de 128 bits es suficientemente fuerte para la mayoría de documentos de negocio y personales. Para archivos altamente confidenciales como contratos legales o registros médicos, AES de 256 bits proporciona una capa extra de seguridad." } },
  { "@type": "Question", "name": "Alguien puede eludir los permisos del PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Las contraseñas de permisos son menos seguras que las contraseñas de apertura — algunas herramientas pueden eludirlas. Para máxima seguridad, siempre establece una contraseña de apertura ademas de las restricciones de permisos." } },
  { "@type": "Question", "name": "Como debo compartir la contraseña con el destinatario?", "acceptedAnswer": { "@type": "Answer", "text": "Nunca envies la contraseña en el mismo correo que el PDF. Comparte la contraseña por un canal diferente — un mensaje de texto, llamada o app de mensajeria segura. Asi, incluso si el correo es interceptado, el archivo permanece bloqueado." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como Establecer Contraseñas y Permisos Fuertes para PDF", "description": "Asegura tus PDFs con contraseñas fuertes y la configuración de permisos correcta en 3 pasos usando PDF.it.", "step": [
  { "@type": "HowToStep", "name": "Elige una contraseña fuerte", "text": "Crea una contraseña de al menos 12 caracteres con una mezcla de mayusculas, minusculas, números y caracteres especiales. Evita palabras del diccionario y detalles personales." },
  { "@type": "HowToStep", "name": "Establece los permisos correctos", "text": "Decide que debe poder hacer el destinatario — solo ver, imprimir o editar. Establece una contraseña de permisos para restringir acciones como copiar, imprimir o modificar el documento." },
  { "@type": "HowToStep", "name": "Aplica la encriptación y descarga", "text": "Sube tu PDF a la herramienta Proteger PDF de PDF.it, ingresa tu contraseña y permisos, seleccióna encriptación AES de 256 bits y descarga el archivo asegurado." }
] }

export default function MejoresPracticasContrasenaPDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Proteger PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Mejores Prácticas de Contraseña para PDF (Contraseñas Fuertes y Permisos)</h1>
          <p className="text-xl text-slate-300">Una contraseña debil es casi tan mala como no tener contraseña. Aprende como elegir contraseñas fuertes, establecer los permisos correctos y evitar los errores de seguridad de PDF más comunes.</p>
        </div></div></section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><Shield className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Listo para asegurar tu PDF? Salta la guia y ve directo a la herramienta.</p></div>
          <Link href="/es/proteger-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Proteger PDF Ahora <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Tu Contraseña de PDF Importa Mas de Lo Que Piensas</h2>
            <p className="text-slate-600 mb-4">La mayoría de las personas eligen una contraseña en dos segundos — el nombre de su mascota, un cumpleanos o el clásico "1234". El problema es que las herramientas automatizadas pueden adivinar estas contraseñas en minutos. Un PDF con una contraseña debil te da una falsa sensacion de seguridad mientras deja tus datos expuestos.</p>
            <p className="text-slate-600 mb-4">Segun investigaciones de seguridad, las 10 contraseñas más comunes representan un porcentaje significativo de todas las brechas. Si tu PDF contiene contratos, datos financieros, registros médicos o información de empleados, una contraseña debil es un riesgo — no una protección.</p>
            <p className="text-slate-600">La buena noticia es que crear una contraseña fuerte para PDF solo toma unos segundos adicionales. Aqui esta todo lo que necesitas saber.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como Crear una Contraseña Fuerte para PDF</h2>
            <div className="space-y-4">
              {[
                { title: "Usa al menos 12 caracteres", desc: "Cada carácter adicional hace tu contraseña exponencialmente más difícil de descifrar. Una contraseña de 8 caracteres puede ser forzada en horas. Una de 12 caracteres toma años. Apunta a 12 a 16 caracteres mínimo." },
                { title: "Mezcla tipos de caracteres", desc: "Combina letras mayusculas (A-Z), minusculas (a-z), números (0-9) y caracteres especiales (!@#$%^&*). Una contraseña como 'Tr4v3l$afe!2024' es mucho más fuerte que 'travelsafe2024'." },
                { title: "Evita información personal", desc: "Nunca uses tu nombre, cumpleanos, nombre de empresa o el tema del documento como contraseña. Los atacantes que te conocen (o pueden encontrar información sobre ti en línea) probaran estos primero." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-[#F0FDFA] border border-[#14D8C4]/20 rounded-xl p-5">
              <p className="text-slate-700 text-sm"><strong>Consejo pro:</strong> Usa una frase de paso en lugar de una sola palabra. Por ejemplo, "CafeAzul$Lluvia42!" es fácil de recordar pero extremadamente difícil de descifrar. Mejor aun, usa un gestor de contraseñas para generar y almacenar contraseñas aleatorias.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Establecer los Permisos Correctos de PDF</h2>
            <p className="text-slate-600 mb-4">Mas alla de bloquear un archivo con contraseña, puedes controlar exactamente lo que las personas pueden hacer con tu PDF. La herramienta <Link href="/es/proteger-pdf" className="text-[#14D8C4] hover:underline">Proteger PDF</Link> de PDF.it te permite restringir las siguientes acciones:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Sin impresión.</strong> Evita que el destinatario imprima el documento. Útil para borradores de informes, memorandos confidenciales y materiales compartidos solo para revision.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Sin copiar texto.</strong> Bloquea la selección de texto y copiar-pegar. Esto protege propiedad intelectual, lenguaje legal y contenido original de ser copiado.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Sin edición.</strong> Evita modificaciones al contenido del documento. Esencial para contratos finalizados y registros oficiales.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Sin extracción de páginas.</strong> Evita que los usuarios saquen páginas individuales del documento usando herramientas PDF.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">5.</span><span><strong>Sin anotaciones.</strong> Evita agregar comentarios, resaltados o notas adhesivas. Usa esto cuando quieras que el documento permanezca limpio y sin modificaciones.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Errores Comunes de Contraseña de PDF a Evitar</h2>
            <div className="space-y-6">
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Enviar la Contraseña en el Mismo Correo</h3><p className="text-slate-600">Esto anula completamente el propósito de la encriptación. Si alguien intercepta tu correo, obtiene tanto el archivo como la contraseña. Siempre comparte la contraseña por un canal separado — mensaje de texto, llamada telefonica o una app de mensajeria segura como Signal.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Reutilizar la Misma Contraseña para Cada PDF</h3><p className="text-slate-600">Si una contraseña es comprometida, cada documento que use esa contraseña queda expuesto. Usa contraseñas unicas para cada documento sensible. Un gestor de contraseñas lo hace fácil.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Depender Solo de Permisos Sin Contraseña de Apertura</h3><p className="text-slate-600">Una contraseña de solo permisos puede ser eludida por algunas herramientas PDF. Para documentos realmente sensibles, siempre establece una contraseña de apertura (requerida para ver el archivo) ademas de cualquier restricción de permisos. Aprende como en nuestra <Link href="/es/aprender/como-proteger-pdf-con-contraseña" className="text-[#14D8C4] hover:underline">guia paso a paso de protección</Link>.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Olvidar Aplanar Antes de Proteger</h3><p className="text-slate-600">Los PDFs con campos de formulario, comentarios o capas pueden contener datos ocultos que una contraseña sola no puede proteger. <Link href="/es/aplanar-pdf" className="text-[#14D8C4] hover:underline">Aplana tu PDF</Link> antes de agregar una contraseña para asegurar que todo el contenido este integrado en las páginas y nada pueda extraerse por separado.</p></div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Que Nivel de Encriptación Deberias Usar?</h2>
            <p className="text-slate-600 mb-4">PDF.it ofrece múltiples niveles de encriptación. Aqui tienes una guia práctica para elegir el correcto:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>AES de 128 bits:</strong> Rápido, ampliamente compatible, suficientemente fuerte para la mayoría de documentos de negocio. Usa esto para informes internos, correspondencia general y archivos cotidianos.</li>
              <li>&#10003; <strong>AES de 256 bits:</strong> Máxima seguridad. Usa esto para contratos legales, registros financieros, datos médicos, documentos gubernamentales y cualquier cosa con requisitos de cumplimiento normativo.</li>
            </ul>
            <p className="text-slate-600 mt-4">Si no estas seguro, elige AES de 256 bits. La diferencia en tiempo de procesamiento es insignificante y obtienes la protección más fuerte disponible. Después de proteger tu PDF, también puedes <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">comprimirlo</Link> si el archivo es muy grande para enviar por correo.</p>
          </section>
        </div></article>

        <section className="py-12" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Asegura Tu PDF con una Contraseña Fuerte</h2>
          <p className="text-slate-300 mb-6">Sube tu archivo, establece una contraseña fuerte y permisos, y descarga el PDF protegido en segundos.</p>
          <Link href="/es/proteger-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><Shield className="h-5 w-5" /> Proteger PDF Ahora</Link>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Como Proteger un PDF con Contraseña Online (Paso a Paso)", href: "/es/aprender/como-proteger-pdf-con-contraseña" },
              { title: "Como Proteger un PDF Antes de Enviar por Correo", href: "/es/aprender/proteger-pdf-antes-de-enviar" },
              { title: "Proteger un PDF con Contraseña en Tu Teléfono (iPhone y Android)", href: "/es/aprender/proteger-pdf-en-movil" },
            ].map((article) => (
              <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group">
                <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
              </Link>
            ))}
          </div>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            {[
              { q: "Que hace una contraseña de PDF fuerte?", a: "Una contraseña de PDF fuerte tiene al menos 12 caracteres, combina letras mayusculas y minusculas, números y caracteres especiales, y evita palabras del diccionario o información personal como cumpleanos." },
              { q: "Debo usar la misma contraseña para todos mis PDFs?", a: "No. Usar la misma contraseña para cada PDF significa que si una contraseña es comprometida, todos tus documentos quedan expuestos. Usa una contraseña única para cada documento sensible y guardalas en un gestor de contraseñas." },
              { q: "Que permisos de PDF puedo restringir?", a: "Puedes restringir la impresión, copia de texto, edición de contenido, extracción de páginas, agregar anotaciones y rellenar formularios. PDF.it te permite establecer todos estos permisos cuando proteges un PDF." },
              { q: "La encriptación de 128 bits es suficiente para la seguridad del PDF?", a: "Si, la encriptación AES de 128 bits es suficientemente fuerte para la mayoría de documentos de negocio y personales. Para archivos altamente confidenciales como contratos legales o registros médicos, AES de 256 bits proporciona una capa extra de seguridad." },
              { q: "Alguien puede eludir los permisos del PDF?", a: "Las contraseñas de permisos son menos seguras que las contraseñas de apertura — algunas herramientas pueden eludirlas. Para máxima seguridad, siempre establece una contraseña de apertura ademas de las restricciones de permisos." },
              { q: "Como debo compartir la contraseña con el destinatario?", a: "Nunca envies la contraseña en el mismo correo que el PDF. Comparte la contraseña por un canal diferente — un mensaje de texto, llamada o app de mensajeria segura. Asi, incluso si el correo es interceptado, el archivo permanece bloqueado." },
            ].map((faq, i) => (
              <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3><p className="text-slate-600 text-sm">{faq.a}</p></div>
            ))}
          </div>
        </div></section>
      </main>
      <FooterEs />
    </div>
  )
}
