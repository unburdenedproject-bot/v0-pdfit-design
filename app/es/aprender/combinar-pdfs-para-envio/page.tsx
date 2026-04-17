import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Merge, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Combinar PDFs para Envíos (Escuela, Visa, Portales de Empleo) | PDF.it",
  description:
    "Aprende cómo combinar múltiples PDFs en un solo archivo para envíos escolares, de visa y portales de empleo. Cumple con límites de tamaño, aplana para compatibilidad y protege documentos sensibles.",
  keywords: "combinar pdfs para envío, unir pdf para visa, combinar pdf para solicitud de empleo, unir documentos para subir",
}

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Cómo combino múltiples PDFs en uno para un envío?", "acceptedAnswer": { "@type": "Answer", "text": "Sube todos tus documentos (identificación, certificado, carta de presentación, etc.) a la herramienta Unir PDF de PDF.it. Ordénalos según las pautas de envío, haz clic en Unir, y descarga el archivo combinado. Si el archivo es muy grande, comprímelo después." } },
    { "@type": "Question", "name": "¿En qué orden debo organizar los documentos para un envío?", "acceptedAnswer": { "@type": "Answer", "text": "Siempre sigue el orden especificado en las pautas de envío. Si no se indica un orden, una organización común es: formulario de solicitud o carta de presentación primero, luego documentos de identificación, luego documentos de respaldo (certificados, constancias, cartas), luego materiales adicionales." } },
    { "@type": "Question", "name": "Mi PDF combinado es muy grande para el portal de carga. ¿Qué hago?", "acceptedAnswer": { "@type": "Answer", "text": "Usa la herramienta Comprimir PDF de PDF.it después de unir. Para límites estrictos como 2MB o 5MB, usa las herramientas dedicadas Comprimir a 2MB o Comprimir a 5MB. Si la compresión no es suficiente, intenta aplanar el PDF primero para eliminar campos de formulario y anotaciones, luego comprime de nuevo." } },
    { "@type": "Question", "name": "¿Debo aplanar mi PDF antes de enviarlo?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, especialmente si tu PDF contiene campos de formulario editables, firmas o anotaciones. Aplanar bloquea todo en su lugar para que el documento se vea igual en cualquier dispositivo o lector de PDF. También reduce el tamaño del archivo." } },
    { "@type": "Question", "name": "¿Puedo proteger con contraseña mi envío combinado?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Usa la herramienta Proteger PDF de PDF.it para agregar una contraseña después de unir. Sin embargo, solo agrega una contraseña si las pautas de envío lo permiten — algunos portales no pueden abrir archivos protegidos con contraseña." } },
    { "@type": "Question", "name": "¿Cómo combino PDFs para una solicitud de visa?", "acceptedAnswer": { "@type": "Answer", "text": "Sigue la lista de verificación de la embajada exactamente. Generalmente: formulario de solicitud, copia de pasaporte, fotos, documentos financieros (estados de cuenta bancarios), y cartas de respaldo. Únelos en ese orden, comprime para cumplir con los límites de tamaño, y aplana antes de subir." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo", "name": "Cómo Combinar PDFs para Envíos",
  "description": "Une múltiples documentos en un PDF para envíos escolares, de visa o de empleo usando PDF.it.",
  "step": [
    { "@type": "HowToStep", "name": "Reúne y prepara tus documentos", "text": "Recopila todos los documentos requeridos como archivos PDF. Verifica las pautas de envío para el orden requerido y los límites de tamaño de archivo. Escanea cualquier documento en papel a PDF si es necesario." },
    { "@type": "HowToStep", "name": "Une documentos en el orden requerido", "text": "Sube todos los PDFs a la herramienta Unir de PDF.it, ordénalos según las pautas de envío, y haz clic en Unir para combinarlos en un archivo." },
    { "@type": "HowToStep", "name": "Comprime, aplana y verifica", "text": "Si el archivo excede el límite de tamaño, comprímelo. Aplana el PDF para bloquear campos de formulario y anotaciones. Abre el archivo final y revisa cada página para confirmar que todo está correcto antes de enviar." }
  ]
}

export default function CombinarPDFsParaEnvioPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
            <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Unir PDF</p>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Combinar PDFs para Envíos (Escuela, Visa, Portales de Empleo)</h1>
            <p className="text-xl text-slate-300">Los portales de carga quieren un solo PDF con todos tus documentos. Aquí te explicamos cómo armar, combinar, comprimir y enviar — sin ser rechazado por problemas de formato o tamaño.</p>
          </div></div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><Merge className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">¿Listo para combinar tus documentos? Ve directo a la herramienta.</p>
            </div>
            <Link href="/es/unir-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Unir PDFs Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Requisitos Comunes de Envío</h2>
              <p className="text-slate-600 mb-4">Ya sea que estés aplicando para un empleo, un programa universitario o una visa, la mayoría de los portales de envío comparten las mismas restricciones:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Carga de un solo archivo.</strong> La mayoría de los portales solo aceptan un archivo PDF — no múltiples adjuntos. Necesitas combinar todos tus documentos en uno.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Límites de tamaño de archivo.</strong> Los límites comunes son 2MB, 5MB, 10MB o 25MB. Los portales gubernamentales tienden a tener los límites más estrictos (frecuentemente 2-5MB).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Orden específico de documentos.</strong> Muchas solicitudes indican el orden exacto en que quieren los documentos. No seguir este orden puede resultar en retrasos o rechazo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Solo formato PDF.</strong> La mayoría de los portales requieren PDF específicamente (no Word, JPG, ni PNG). Asegúrate de que todos tus documentos estén en formato PDF antes de combinar.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Armar Tus Documentos</h2>
              <div className="space-y-4">
                {[
                  { title: "Recopila todos los documentos requeridos como PDFs", desc: "Reúne cada documento listado en los requisitos de envío. Si algún documento está en formato Word, conviértelo usando Word a PDF. Si tienes documentos en papel, escanéalos a PDF usando tu teléfono o escáner." },
                  { title: "Sube y ordena en el orden requerido", desc: "Sube todos los PDFs a la herramienta Unir de PDF.it. Arrastra y suelta en el orden especificado por las pautas de envío. Si no se específica un orden, usa: solicitud/carta de presentación primero, luego identificación, luego documentos de respaldo." },
                  { title: "Une, comprime y verifica", desc: "Haz clic en Unir para combinar. Si el archivo excede el límite de tamaño, comprímelo. Abre el PDF unido y revisa cada página para confirmar que todos los documentos están presentes y en el orden correcto." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cumplir con Límites de Tamaño de Archivo</h2>
              <p className="text-slate-600 mb-4">Después de unir, tu PDF combinado podría ser demasiado grande para el portal de envío. Así puedes reducirlo bajo el límite:</p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Comprime el archivo unido</strong> usando <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link>. La compresión media funciona para la mayoría de los portales.</li>
                <li>✓ <strong>Para límites de 2MB,</strong> usa la herramienta dedicada <Link href="/es/comprimir-pdf-a-2mb" className="text-[#14D8C4] hover:underline">Comprimir a 2MB</Link> que apunta a ese tamaño específico.</li>
                <li>✓ <strong>Aplana antes de comprimir.</strong> Usa <Link href="/es/aplanar-pdf" className="text-[#14D8C4] hover:underline">Aplanar PDF</Link> para eliminar campos de formulario y anotaciones, lo que reduce el tamaño del archivo y hace la compresión más efectiva.</li>
                <li>✓ <strong>Si la compresión no es suficiente,</strong> verifica si las páginas escaneadas son las culpables. Una página escaneada puede ser 2-5MB. Re-escanea a una resolución menor o usa Limpieza de Escaneo de Teléfono para optimizar.</li>
              </ul>
              <div className="bg-[#F0FDFA] border border-[#14D8C4]/20 rounded-xl p-5 mt-4">
                <p className="text-slate-700 text-sm"><strong>Consejo pro:</strong> Muchos portales gubernamentales y de visa tienen un límite de 2MB o 5MB. Siempre verifica el límite <em>antes</em> de escanear y armar tus documentos. Si el límite es muy estricto, escanea a 150 DPI en vez de 300 DPI para mantener los tamaños manejables.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Aplanar Tu PDF para Máxima Compatibilidad</h2>
              <p className="text-slate-600 mb-4">Aplanar es uno de los pasos más pasados por alto al preparar envíos. Por qué importa:</p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Bloquea campos de formulario y firmas.</strong> Si alguno de tus documentos tiene campos editables o firmas digitales, aplanar asegura que se muestren correctamente en cualquier dispositivo.</li>
                <li>✓ <strong>Previene edición.</strong> Una vez aplanado, el texto en campos de formulario no puede ser modificado accidentalmente por el destinatario.</li>
                <li>✓ <strong>Reduce tamaño de archivo.</strong> Los campos de formulario, anotaciones y capas agregan datos ocultos. Aplanar los elimina, haciendo el archivo más pequeño.</li>
                <li>✓ <strong>Mejora compatibilidad.</strong> Algunos lectores PDF antiguos no muestran campos de formulario o anotaciones correctamente. Un PDF aplanado se ve igual en todas partes.</li>
              </ul>
              <p className="text-slate-600 mt-4">Usa <Link href="/es/aplanar-pdf" className="text-[#14D8C4] hover:underline">Aplanar PDF</Link> después de unir y antes de comprimir para mejores resultados.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Deberías Proteger con Contraseña Tu Envío?</h2>
              <p className="text-slate-600 mb-4">Si tu PDF unido contiene información sensible (copias de pasaporte, estados de cuenta bancarios, registros médicos), podrías querer agregar una contraseña:</p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Usa <Link href="/es/proteger-pdf" className="text-[#14D8C4] hover:underline">Proteger PDF</Link></strong> para agregar una contraseña a tu archivo unido.</li>
                <li>✓ <strong>Pero verifica los requisitos de envío primero.</strong> Muchos portales de carga no pueden abrir PDFs protegidos con contraseña. Si el portal no menciona protección con contraseña, no la agregues.</li>
                <li>✓ <strong>Para envíos por email,</strong> la protección con contraseña es más apropiada. Envía el PDF en un email y la contraseña en un mensaje separado.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos por Tipo de Envío</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Envíos Universitarios y Escolares</h3>
                  <p className="text-slate-600">Orden común: formulario de solicitud, ensayo personal o declaración, certificado de calificaciones, cartas de recomendación, copia de identificación o pasaporte. Muchas universidades tienen un límite de 10MB. Usa compresión media después de unir.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Solicitudes de Visa e Inmigración</h3>
                  <p className="text-slate-600">Sigue la lista de verificación de la embajada exactamente. Orden típico: formulario de solicitud completado, página biográfica del pasaporte, foto tamaño pasaporte, documentos financieros (estados de cuenta bancarios de 3-6 meses), carta de empleo, reservas de hotel, itinerario de vuelo. Los portales gubernamentales frecuentemente tienen límites de tamaño muy estrictos (2-5MB).</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Portales de Solicitud de Empleo</h3>
                  <p className="text-slate-600">Orden estándar: carta de presentación, currículum/CV, portafolio o muestras de trabajo, referencias, certificaciones. La mayoría de los portales de empleo aceptan hasta 10-25MB. Si el portal acepta múltiples archivos, generalmente es mejor subir el currículum y la carta de presentación por separado.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">¿Listo para Combinar Tus Documentos?</h2>
            <p className="text-slate-300 mb-6">Sube todos tus archivos, únelos en un PDF, y envía con confianza — gratis, sin registro.</p>
            <Link href="/es/unir-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">
              <Merge className="h-5 w-5" /> Unir PDFs Ahora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Cómo Unir Archivos PDF en Línea (Combinar PDFs en Uno)", href: "/es/aprender/como-unir-archivos-pdf" },
                { title: "Unir PDFs en el Orden Correcto (Sin Errores de Páginas)", href: "/es/aprender/unir-pdfs-en-orden" },
                { title: "Cómo Unir PDFs Escaneados (Y Mantenerlos Legibles)", href: "/es/aprender/unir-pdfs-escaneados" },
                { title: "Unir Archivos PDF en iPhone (Método Rápido por Navegador)", href: "/es/aprender/unir-pdf-en-iphone" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group">
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "¿Cómo combino múltiples PDFs en uno para un envío?", a: "Sube todos tus documentos (identificación, certificado, carta de presentación, etc.) a la herramienta Unir PDF de PDF.it. Ordénalos según las pautas de envío, haz clic en Unir, y descarga el archivo combinado. Si el archivo es muy grande, comprímelo después." },
                { q: "¿En qué orden debo organizar los documentos para un envío?", a: "Siempre sigue el orden especificado en las pautas de envío. Si no se indica un orden, una organización común es: formulario de solicitud o carta de presentación primero, luego documentos de identificación, luego documentos de respaldo (certificados, constancias, cartas), luego materiales adicionales." },
                { q: "Mi PDF combinado es muy grande para el portal de carga. ¿Qué hago?", a: "Usa la herramienta Comprimir PDF de PDF.it después de unir. Para límites estrictos como 2MB o 5MB, usa las herramientas dedicadas Comprimir a 2MB o Comprimir a 5MB. Si la compresión no es suficiente, intenta aplanar el PDF primero para eliminar campos de formulario y anotaciones, luego comprime de nuevo." },
                { q: "¿Debo aplanar mi PDF antes de enviarlo?", a: "Sí, especialmente si tu PDF contiene campos de formulario editables, firmas o anotaciones. Aplanar bloquea todo en su lugar para que el documento se vea igual en cualquier dispositivo o lector de PDF. También reduce el tamaño del archivo." },
                { q: "¿Puedo proteger con contraseña mi envío combinado?", a: "Sí. Usa la herramienta Proteger PDF de PDF.it para agregar una contraseña después de unir. Sin embargo, solo agrega una contraseña si las pautas de envío lo permiten — algunos portales no pueden abrir archivos protegidos con contraseña." },
                { q: "¿Cómo combino PDFs para una solicitud de visa?", a: "Sigue la lista de verificación de la embajada exactamente. Generalmente: formulario de solicitud, copia de pasaporte, fotos, documentos financieros (estados de cuenta bancarios), y cartas de respaldo. Únelos en ese orden, comprime para cumplir con los límites de tamaño, y aplana antes de subir." },
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
