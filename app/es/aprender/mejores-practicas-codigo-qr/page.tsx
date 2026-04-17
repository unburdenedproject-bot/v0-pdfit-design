import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Mejores Prácticas de Código QR (Tamaño, Ubicacion y Pruebas) | PDF.it",
  description:
    "Aprende las mejores prácticas de códigos QR para tamaño, contraste, ubicacion, corrección de errores y pruebas. Asegurate de que tus códigos QR se escaneen de manera confiable cada vez con estos consejos esenciales.",
  keywords: "mejores prácticas código qr, tamaño código qr, ubicacion código qr, consejos diseño código qr",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Cual es el tamaño mínimo para un código QR?",
      "acceptedAnswer": { "@type": "Answer", "text": "El mínimo absoluto es 2cm x 2cm (0.8 x 0.8 pulgadas) para escaneo de corto alcance como tarjetas de presentación. Para posters y letreros escaneados desde la distancia, usa la regla 10:1 — el código QR debe ser 1/10 de la distancia de escaneo esperada. Un letrero escaneado desde 1 metro necesita un código QR de 10cm." }
    },
    {
      "@type": "Question",
      "name": "Que colores funcionan mejor para códigos QR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Primer plano oscuro sobre fondo claro. Negro sobre blanco es el estándar de oro. Puedes usar colores, pero manten al menos un 70% de contraste entre primer plano y fondo. Nunca uses primer plano claro sobre fondo oscuro — la mayoría de los escáneres tienen problemas con códigos QR invertidos." }
    },
    {
      "@type": "Question",
      "name": "Cuanto espacio blanco necesita un código QR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un código QR necesita una 'zona tranquila' de al menos 4 modulos (los pequeños cuadrados que componen el código) en todos los lados. En términos practicos, deja aproximadamente 3-5mm de espacio en blanco alrededor del código QR. Esto ayuda a los escáneres a distinguir el código de los elementos de diseño circundantes." }
    },
    {
      "@type": "Question",
      "name": "Qué es la corrección de errores en códigos QR?",
      "acceptedAnswer": { "@type": "Answer", "text": "La corrección de errores permite que un código QR permanezca escaneable incluso si parte de el esta danado u oculto. Hay cuatro niveles: L (7%), M (15%), Q (25%) y H (30%). Mayor corrección de errores significa que el código soporta más dano pero también lo hace más denso y difícil de escanear en tamaños pequeños." }
    },
    {
      "@type": "Question",
      "name": "Como debo probar un código QR antes de imprimir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Prueba con al menos 3 teléfonos diferentes (iPhone y Android), en diferentes condiciones de iluminacion (brillante y tenue), y desde la distancia de escaneo esperada. Imprime una copia de prueba primero antes de hacer una tirada masiva. Verifica que la URL de destino cargue correctamente." }
    },
    {
      "@type": "Question",
      "name": "Puedo agregar un logo dentro de un código QR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si, pero solo si usas alta corrección de errores (nivel H, 30%). El logo cubre parte de los datos del código QR, y la corrección de errores compensa. Manten el logo pequeño — no más del 10-15% del area del código QR — y siempre prueba exhaustivamente." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Crear un Código QR Confiable",
  "description": "Sigue estos 3 pasos para crear un código QR que se escanee perfectamente cada vez usando PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Manten los datos minimos y usa alto contraste",
      "text": "Usa URLs cortas para mantener el código QR simple. Elige primer plano oscuro sobre fondo claro con al menos 70% de relación de contraste."
    },
    {
      "@type": "HowToStep",
      "name": "Dimensiona apropiadamente para la distancia de escaneo",
      "text": "Usa la regla 10:1 — el ancho del código QR debe ser al menos 1/10 de la distancia de escaneo esperada. Mínimo 2cm para escaneo de corto alcance."
    },
    {
      "@type": "HowToStep",
      "name": "Prueba antes de distribuir",
      "text": "Escanea con múltiples teléfonos en diferentes condiciones de iluminacion. Imprime una copia de prueba y escanea desde la distancia esperada. Verifica que el destino cargue correctamente."
    }
  ]
}

export default function MejoresPracticasCodigoQRPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Mejores Prácticas de Código QR (Tamaño, Ubicacion y Pruebas)</h1>
              <p className="text-xl text-slate-300">
                Un código QR que no se escanea es peor que no tener código QR. Sigue estas mejores prácticas para asegurarte de que tus códigos QR funcionen perfectamente cada vez — en impresión, en pantalla y en cualquier condicion de iluminacion.
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
              <p className="text-slate-700 font-semibold">Necesitas crear un código QR? Usa nuestra herramienta generadora.</p>
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

            {/* Size guidelines */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tamaño: Que Tan Grande Debe Ser Tu Código QR?</h2>
              <p className="text-slate-600 mb-4">
                La razon más común por la que los códigos QR fallan es que son muy pequeños. Un código QR diminuto en un poster al otro lado de la habitacion es imposible de escanear. Usa estas guias:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>La regla 10:1.</strong> El código QR debe ser al menos 1/10 de la distancia de escaneo esperada. Si alguien escaneara desde 1 metro, el código QR necesita ser al menos 10cm de ancho. Desde 30cm (una mesa), al menos 3cm.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Tarjetas de presentación:</strong> Mínimo 2cm x 2cm. Idealmente 2.5cm. Consulta nuestra <Link href="/es/aprender/codigo-qr-para-tarjeta-de-presentacion" className="text-[#14D8C4] hover:underline">guia de código QR para tarjetas de presentación</Link> para consejos de ubicacion.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Carpas de mesa y stickers:</strong> Al menos 3cm x 3cm. Los <Link href="/es/aprender/codigo-qr-para-menu-de-restaurante" className="text-[#14D8C4] hover:underline">códigos QR de menu</Link> de restaurante deben ser fáciles de escanear incluso con poca luz.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Posters y vallas publicitarias:</strong> Aumenta significativamente. Un poster en una pared debe tener un código QR de al menos 15-20cm de ancho. Las vallas publicitarias necesitan códigos aun más grandes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">5.</span>
                  <span><strong>Pantallas digitales:</strong> En sitios web y presentaciones, asegurate de que el código QR sea al menos 200x200 pixeles. En teléfonos, debe ser lo suficientemente grande para que la camara de otro teléfono lo lea.</span>
                </li>
              </ul>
            </section>

            {/* Contrast and color */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Contraste y Color: Que Funciona y Que Falla</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Oscuro sobre claro es la regla",
                    desc: "Los escáneres de códigos QR buscan modulos oscuros sobre un fondo claro. Negro sobre blanco es la combinación más confiable. Puedes usar colores de marca, pero manten al menos un 70% de contraste entre el primer plano y el fondo.",
                  },
                  {
                    title: "Nunca inviertas los colores",
                    desc: "Primer plano claro sobre fondo oscuro (código QR blanco sobre fondo negro) falla en muchos escáneres. Si tu diseño tiene un fondo oscuro, coloca el código QR dentro de un cuadro blanco con relleno.",
                  },
                  {
                    title: "Evita degradados y patrones",
                    desc: "El fondo detrás del código QR debe ser solido y uniforme. Los degradados, texturas y fondos fotograficos hacen que el escaneo sea poco confiable. Si tu diseño tiene un fondo ocupado, agrega un rectangulo blanco detrás del código QR.",
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

            {/* Placement */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Ubicacion: Donde Colocar Tu Código QR</h2>
              <p className="text-slate-600 mb-4">
                Incluso un código QR perfectamente diseñado es inutil si las personas no pueden alcanzarlo con la camara de su teléfono. Sigue estas guias de ubicacion:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Nivel de ojos a pecho.</strong> En paredes y letreros, coloca los códigos QR entre 1 y 1.5 metros del suelo. Por encima de la cabeza o por debajo de las rodillas hace que el escaneo sea incomodo.</li>
                <li>&#10003; <strong>Superficies planas.</strong> Los códigos QR en superficies curvas (botellas, pilares) se distorsionan y se vuelven más difíciles de escanear. Si debes usar una superficie curva, aumenta el tamaño del código QR para compensar.</li>
                <li>&#10003; <strong>Areas bien iluminadas.</strong> Las camaras de teléfono necesitan luz para leer códigos QR. Evita colocarlos en esquinas oscuras, debajo de mesas o en areas con sombras fuertes.</li>
                <li>&#10003; <strong>Lejos de materiales reflectantes.</strong> La laminacion brillante, el vidrio y las superficies metalicas crean reflejos que interfieren con el escaneo. Usa acabados mate cuando sea posible.</li>
                <li>&#10003; <strong>Agrega un llamado a la accion.</strong> Siempre incluye texto como "Escanea para ver el Menu," "Escanea para Guardar Contacto" o "Escanea para Detalles." Las personas necesitan saber que esperar antes de apuntar su camara.</li>
              </ul>
            </section>

            {/* Error correction */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Corrección de Errores: Construyendo Redundancia</h2>
              <p className="text-slate-600 mb-4">
                Los códigos QR tienen corrección de errores incorporada que les permite permanecer escaneables incluso cuando están parcialmente danados. Hay cuatro niveles:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Nivel L (Bajo) - 7% de Recuperacion</h3>
                  <p className="text-slate-600">
                    El código soporta 7% de dano. Produce el código QR más simple y pequeño. Mejor para uso digital donde el código no se danara — sitios web, correos y pantallas de apps.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Nivel M (Medio) - 15% de Recuperacion</h3>
                  <p className="text-slate-600">
                    El predeterminado para la mayoría de los generadores. Buen equilibrio entre densidad y confiabilidad. Funciona para la mayoría de aplicaciónes de impresión — volantes, folletos y empaques de productos.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Nivel Q (Cuartil) - 25% de Recuperacion</h3>
                  <p className="text-slate-600">
                    Mejor para ambientes exteriores o de alto desgaste donde el código QR podría rayarse, mancharse o cubrirse parcialmente. Usa para letreros exteriores, rotulacion de vehiculos y stickers en areas de alto tráfico.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Nivel H (Alto) - 30% de Recuperacion</h3>
                  <p className="text-slate-600">
                    Máxima redundancia. Requerido si quieres superponer un logo en el código QR — el logo cubre algunos modulos, y la corrección de errores compensa. La desventaja es un código más denso y complejo que necesita imprimirse más grande.
                  </p>
                </div>
              </div>
            </section>

            {/* Testing checklist */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Lista de Verificación de Pruebas Antes de Imprimir</h2>
              <p className="text-slate-600 mb-4">
                Nunca te saltes las pruebas. Imprime una muestra y verifica que todo funcione antes de hacer una tirada masiva. Aqui esta tu lista de verificación:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Escanea con un iPhone.</strong> Usa la app de camara integrada (sin app de QR de terceros).</li>
                <li>&#10003; <strong>Escanea con un teléfono Android.</strong> Usa la camara predeterminada o Google Lens.</li>
                <li>&#10003; <strong>Escanea con luz brillante.</strong> Prueba en iluminacion interior normal.</li>
                <li>&#10003; <strong>Escanea con poca luz.</strong> Prueba en el ambiente real — un restaurante con poca luz, un stand oscuro de feria comercial, etc.</li>
                <li>&#10003; <strong>Escanea desde la distancia esperada.</strong> Parate tan lejos como lo haría una persona real e intenta escanear.</li>
                <li>&#10003; <strong>Verifica el destino.</strong> Asegurate de que la URL cargue correctamente, el <Link href="/es/aprender/codigo-qr-para-pdf" className="text-[#14D8C4] hover:underline">PDF se abra</Link>, o la vCard se guarde correctamente.</li>
                <li>&#10003; <strong>Revisa la calidad de impresión.</strong> Asegurate de que la impresora no haya difuminado o distorsionado los modulos del código QR. Las impresoras inkjet a baja resolución pueden hacer que los códigos QR sean imposibles de escanear.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Crea un Código QR Confiable</h2>
            <p className="text-slate-300 mb-6">Genera códigos QR con la configuración correcta para tu caso de uso. Función Pro — actualiza para códigos QR ilimitados y todas las herramientas PDF.</p>
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
                { title: "Tipos de Código QR Explicados (URL, Texto, WiFi, vCard y Mas)", href: "/es/aprender/tipos-de-codigo-qr-explicados" },
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
                { q: "Cual es el tamaño mínimo para un código QR?", a: "El mínimo absoluto es 2cm x 2cm (0.8 x 0.8 pulgadas) para escaneo de corto alcance como tarjetas de presentación. Para posters y letreros escaneados desde la distancia, usa la regla 10:1 — el código QR debe ser 1/10 de la distancia de escaneo esperada." },
                { q: "Que colores funcionan mejor para códigos QR?", a: "Primer plano oscuro sobre fondo claro. Negro sobre blanco es el estándar de oro. Puedes usar colores, pero manten al menos un 70% de contraste entre primer plano y fondo. Nunca uses primer plano claro sobre fondo oscuro." },
                { q: "Cuanto espacio blanco necesita un código QR?", a: "Un código QR necesita una 'zona tranquila' de al menos 4 modulos en todos los lados. En términos practicos, deja aproximadamente 3-5mm de espacio en blanco alrededor del código QR." },
                { q: "Qué es la corrección de errores en códigos QR?", a: "La corrección de errores permite que un código QR permanezca escaneable incluso si parte de el esta danado. Hay cuatro niveles: L (7%), M (15%), Q (25%) y H (30%). Mayor corrección significa más resistencia pero un código más denso." },
                { q: "Como debo probar un código QR antes de imprimir?", a: "Prueba con al menos 3 teléfonos diferentes (iPhone y Android), en diferentes condiciones de iluminacion, y desde la distancia de escaneo esperada. Imprime una copia de prueba primero antes de hacer una tirada masiva." },
                { q: "Puedo agregar un logo dentro de un código QR?", a: "Si, pero solo con alta corrección de errores (nivel H, 30%). Manten el logo pequeño — no más del 10-15% del area del código QR — y siempre prueba exhaustivamente después de agregarlo." },
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
