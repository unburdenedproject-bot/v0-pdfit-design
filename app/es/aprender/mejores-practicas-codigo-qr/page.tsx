import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Mejores Practicas de Codigo QR (Tamano, Ubicacion y Pruebas) | PDF.it",
  description:
    "Aprende las mejores practicas de codigos QR para tamano, contraste, ubicacion, correccion de errores y pruebas. Asegurate de que tus codigos QR se escaneen de manera confiable cada vez con estos consejos esenciales.",
  keywords: "mejores practicas codigo qr, tamano codigo qr, ubicacion codigo qr, consejos diseno codigo qr",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Cual es el tamano minimo para un codigo QR?",
      "acceptedAnswer": { "@type": "Answer", "text": "El minimo absoluto es 2cm x 2cm (0.8 x 0.8 pulgadas) para escaneo de corto alcance como tarjetas de presentacion. Para posters y letreros escaneados desde la distancia, usa la regla 10:1 — el codigo QR debe ser 1/10 de la distancia de escaneo esperada. Un letrero escaneado desde 1 metro necesita un codigo QR de 10cm." }
    },
    {
      "@type": "Question",
      "name": "Que colores funcionan mejor para codigos QR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Primer plano oscuro sobre fondo claro. Negro sobre blanco es el estandar de oro. Puedes usar colores, pero manten al menos un 70% de contraste entre primer plano y fondo. Nunca uses primer plano claro sobre fondo oscuro — la mayoria de los escaneres tienen problemas con codigos QR invertidos." }
    },
    {
      "@type": "Question",
      "name": "Cuanto espacio blanco necesita un codigo QR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un codigo QR necesita una 'zona tranquila' de al menos 4 modulos (los pequenos cuadrados que componen el codigo) en todos los lados. En terminos practicos, deja aproximadamente 3-5mm de espacio en blanco alrededor del codigo QR. Esto ayuda a los escaneres a distinguir el codigo de los elementos de diseno circundantes." }
    },
    {
      "@type": "Question",
      "name": "Que es la correccion de errores en codigos QR?",
      "acceptedAnswer": { "@type": "Answer", "text": "La correccion de errores permite que un codigo QR permanezca escaneable incluso si parte de el esta danado u oculto. Hay cuatro niveles: L (7%), M (15%), Q (25%) y H (30%). Mayor correccion de errores significa que el codigo soporta mas dano pero tambien lo hace mas denso y dificil de escanear en tamanos pequenos." }
    },
    {
      "@type": "Question",
      "name": "Como debo probar un codigo QR antes de imprimir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Prueba con al menos 3 telefonos diferentes (iPhone y Android), en diferentes condiciones de iluminacion (brillante y tenue), y desde la distancia de escaneo esperada. Imprime una copia de prueba primero antes de hacer una tirada masiva. Verifica que la URL de destino cargue correctamente." }
    },
    {
      "@type": "Question",
      "name": "Puedo agregar un logo dentro de un codigo QR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si, pero solo si usas alta correccion de errores (nivel H, 30%). El logo cubre parte de los datos del codigo QR, y la correccion de errores compensa. Manten el logo pequeno — no mas del 10-15% del area del codigo QR — y siempre prueba exhaustivamente." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Crear un Codigo QR Confiable",
  "description": "Sigue estos 3 pasos para crear un codigo QR que se escanee perfectamente cada vez usando PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Manten los datos minimos y usa alto contraste",
      "text": "Usa URLs cortas para mantener el codigo QR simple. Elige primer plano oscuro sobre fondo claro con al menos 70% de relacion de contraste."
    },
    {
      "@type": "HowToStep",
      "name": "Dimensiona apropiadamente para la distancia de escaneo",
      "text": "Usa la regla 10:1 — el ancho del codigo QR debe ser al menos 1/10 de la distancia de escaneo esperada. Minimo 2cm para escaneo de corto alcance."
    },
    {
      "@type": "HowToStep",
      "name": "Prueba antes de distribuir",
      "text": "Escanea con multiples telefonos en diferentes condiciones de iluminacion. Imprime una copia de prueba y escanea desde la distancia esperada. Verifica que el destino cargue correctamente."
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
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Codigo QR</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Mejores Practicas de Codigo QR (Tamano, Ubicacion y Pruebas)</h1>
              <p className="text-xl text-slate-300">
                Un codigo QR que no se escanea es peor que no tener codigo QR. Sigue estas mejores practicas para asegurarte de que tus codigos QR funcionen perfectamente cada vez — en impresion, en pantalla y en cualquier condicion de iluminacion.
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
              <p className="text-slate-700 font-semibold">Necesitas crear un codigo QR? Usa nuestra herramienta generadora.</p>
            </div>
            <Link
              href="/es/codigo-qr"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Crear Codigo QR <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Size guidelines */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tamano: Que Tan Grande Debe Ser Tu Codigo QR?</h2>
              <p className="text-slate-600 mb-4">
                La razon mas comun por la que los codigos QR fallan es que son muy pequenos. Un codigo QR diminuto en un poster al otro lado de la habitacion es imposible de escanear. Usa estas guias:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>La regla 10:1.</strong> El codigo QR debe ser al menos 1/10 de la distancia de escaneo esperada. Si alguien escaneara desde 1 metro, el codigo QR necesita ser al menos 10cm de ancho. Desde 30cm (una mesa), al menos 3cm.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Tarjetas de presentacion:</strong> Minimo 2cm x 2cm. Idealmente 2.5cm. Consulta nuestra <Link href="/es/aprender/codigo-qr-para-tarjeta-de-presentacion" className="text-[#14D8C4] hover:underline">guia de codigo QR para tarjetas de presentacion</Link> para consejos de ubicacion.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Carpas de mesa y stickers:</strong> Al menos 3cm x 3cm. Los <Link href="/es/aprender/codigo-qr-para-menu-de-restaurante" className="text-[#14D8C4] hover:underline">codigos QR de menu</Link> de restaurante deben ser faciles de escanear incluso con poca luz.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Posters y vallas publicitarias:</strong> Aumenta significativamente. Un poster en una pared debe tener un codigo QR de al menos 15-20cm de ancho. Las vallas publicitarias necesitan codigos aun mas grandes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">5.</span>
                  <span><strong>Pantallas digitales:</strong> En sitios web y presentaciones, asegurate de que el codigo QR sea al menos 200x200 pixeles. En telefonos, debe ser lo suficientemente grande para que la camara de otro telefono lo lea.</span>
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
                    desc: "Los escaneres de codigos QR buscan modulos oscuros sobre un fondo claro. Negro sobre blanco es la combinacion mas confiable. Puedes usar colores de marca, pero manten al menos un 70% de contraste entre el primer plano y el fondo.",
                  },
                  {
                    title: "Nunca inviertas los colores",
                    desc: "Primer plano claro sobre fondo oscuro (codigo QR blanco sobre fondo negro) falla en muchos escaneres. Si tu diseno tiene un fondo oscuro, coloca el codigo QR dentro de un cuadro blanco con relleno.",
                  },
                  {
                    title: "Evita degradados y patrones",
                    desc: "El fondo detras del codigo QR debe ser solido y uniforme. Los degradados, texturas y fondos fotograficos hacen que el escaneo sea poco confiable. Si tu diseno tiene un fondo ocupado, agrega un rectangulo blanco detras del codigo QR.",
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Ubicacion: Donde Colocar Tu Codigo QR</h2>
              <p className="text-slate-600 mb-4">
                Incluso un codigo QR perfectamente disenado es inutil si las personas no pueden alcanzarlo con la camara de su telefono. Sigue estas guias de ubicacion:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Nivel de ojos a pecho.</strong> En paredes y letreros, coloca los codigos QR entre 1 y 1.5 metros del suelo. Por encima de la cabeza o por debajo de las rodillas hace que el escaneo sea incomodo.</li>
                <li>&#10003; <strong>Superficies planas.</strong> Los codigos QR en superficies curvas (botellas, pilares) se distorsionan y se vuelven mas dificiles de escanear. Si debes usar una superficie curva, aumenta el tamano del codigo QR para compensar.</li>
                <li>&#10003; <strong>Areas bien iluminadas.</strong> Las camaras de telefono necesitan luz para leer codigos QR. Evita colocarlos en esquinas oscuras, debajo de mesas o en areas con sombras fuertes.</li>
                <li>&#10003; <strong>Lejos de materiales reflectantes.</strong> La laminacion brillante, el vidrio y las superficies metalicas crean reflejos que interfieren con el escaneo. Usa acabados mate cuando sea posible.</li>
                <li>&#10003; <strong>Agrega un llamado a la accion.</strong> Siempre incluye texto como "Escanea para ver el Menu," "Escanea para Guardar Contacto" o "Escanea para Detalles." Las personas necesitan saber que esperar antes de apuntar su camara.</li>
              </ul>
            </section>

            {/* Error correction */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Correccion de Errores: Construyendo Redundancia</h2>
              <p className="text-slate-600 mb-4">
                Los codigos QR tienen correccion de errores incorporada que les permite permanecer escaneables incluso cuando estan parcialmente danados. Hay cuatro niveles:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Nivel L (Bajo) - 7% de Recuperacion</h3>
                  <p className="text-slate-600">
                    El codigo soporta 7% de dano. Produce el codigo QR mas simple y pequeno. Mejor para uso digital donde el codigo no se danara — sitios web, correos y pantallas de apps.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Nivel M (Medio) - 15% de Recuperacion</h3>
                  <p className="text-slate-600">
                    El predeterminado para la mayoria de los generadores. Buen equilibrio entre densidad y confiabilidad. Funciona para la mayoria de aplicaciones de impresion — volantes, folletos y empaques de productos.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Nivel Q (Cuartil) - 25% de Recuperacion</h3>
                  <p className="text-slate-600">
                    Mejor para ambientes exteriores o de alto desgaste donde el codigo QR podria rayarse, mancharse o cubrirse parcialmente. Usa para letreros exteriores, rotulacion de vehiculos y stickers en areas de alto trafico.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Nivel H (Alto) - 30% de Recuperacion</h3>
                  <p className="text-slate-600">
                    Maxima redundancia. Requerido si quieres superponer un logo en el codigo QR — el logo cubre algunos modulos, y la correccion de errores compensa. La desventaja es un codigo mas denso y complejo que necesita imprimirse mas grande.
                  </p>
                </div>
              </div>
            </section>

            {/* Testing checklist */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Lista de Verificacion de Pruebas Antes de Imprimir</h2>
              <p className="text-slate-600 mb-4">
                Nunca te saltes las pruebas. Imprime una muestra y verifica que todo funcione antes de hacer una tirada masiva. Aqui esta tu lista de verificacion:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Escanea con un iPhone.</strong> Usa la app de camara integrada (sin app de QR de terceros).</li>
                <li>&#10003; <strong>Escanea con un telefono Android.</strong> Usa la camara predeterminada o Google Lens.</li>
                <li>&#10003; <strong>Escanea con luz brillante.</strong> Prueba en iluminacion interior normal.</li>
                <li>&#10003; <strong>Escanea con poca luz.</strong> Prueba en el ambiente real — un restaurante con poca luz, un stand oscuro de feria comercial, etc.</li>
                <li>&#10003; <strong>Escanea desde la distancia esperada.</strong> Parate tan lejos como lo haria una persona real e intenta escanear.</li>
                <li>&#10003; <strong>Verifica el destino.</strong> Asegurate de que la URL cargue correctamente, el <Link href="/es/aprender/codigo-qr-para-pdf" className="text-[#14D8C4] hover:underline">PDF se abra</Link>, o la vCard se guarde correctamente.</li>
                <li>&#10003; <strong>Revisa la calidad de impresion.</strong> Asegurate de que la impresora no haya difuminado o distorsionado los modulos del codigo QR. Las impresoras inkjet a baja resolucion pueden hacer que los codigos QR sean imposibles de escanear.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Crea un Codigo QR Confiable</h2>
            <p className="text-slate-300 mb-6">Genera codigos QR con la configuracion correcta para tu caso de uso. Funcion Pro — actualiza para codigos QR ilimitados y todas las herramientas PDF.</p>
            <Link
              href="/es/codigo-qr"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <QrCode className="h-5 w-5" /> Crear Codigo QR Ahora
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Crear un Codigo QR en Linea (Generador Gratuito)", href: "/es/aprender/como-crear-codigo-qr" },
                { title: "Codigo QR para Tarjetas de Presentacion (Enlaza a Tu Sitio Web o vCard)", href: "/es/aprender/codigo-qr-para-tarjeta-de-presentacion" },
                { title: "Codigo QR para Menus de Restaurante (Crea un Enlace Escaneable)", href: "/es/aprender/codigo-qr-para-menu-de-restaurante" },
                { title: "Crear un Codigo QR que Enlace a un Documento PDF", href: "/es/aprender/codigo-qr-para-pdf" },
                { title: "Tipos de Codigo QR Explicados (URL, Texto, WiFi, vCard y Mas)", href: "/es/aprender/tipos-de-codigo-qr-explicados" },
                { title: "Crear un Codigo QR para WiFi (Los Invitados se Conectan al Instante)", href: "/es/aprender/codigo-qr-para-wifi" },
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
                { q: "Cual es el tamano minimo para un codigo QR?", a: "El minimo absoluto es 2cm x 2cm (0.8 x 0.8 pulgadas) para escaneo de corto alcance como tarjetas de presentacion. Para posters y letreros escaneados desde la distancia, usa la regla 10:1 — el codigo QR debe ser 1/10 de la distancia de escaneo esperada." },
                { q: "Que colores funcionan mejor para codigos QR?", a: "Primer plano oscuro sobre fondo claro. Negro sobre blanco es el estandar de oro. Puedes usar colores, pero manten al menos un 70% de contraste entre primer plano y fondo. Nunca uses primer plano claro sobre fondo oscuro." },
                { q: "Cuanto espacio blanco necesita un codigo QR?", a: "Un codigo QR necesita una 'zona tranquila' de al menos 4 modulos en todos los lados. En terminos practicos, deja aproximadamente 3-5mm de espacio en blanco alrededor del codigo QR." },
                { q: "Que es la correccion de errores en codigos QR?", a: "La correccion de errores permite que un codigo QR permanezca escaneable incluso si parte de el esta danado. Hay cuatro niveles: L (7%), M (15%), Q (25%) y H (30%). Mayor correccion significa mas resistencia pero un codigo mas denso." },
                { q: "Como debo probar un codigo QR antes de imprimir?", a: "Prueba con al menos 3 telefonos diferentes (iPhone y Android), en diferentes condiciones de iluminacion, y desde la distancia de escaneo esperada. Imprime una copia de prueba primero antes de hacer una tirada masiva." },
                { q: "Puedo agregar un logo dentro de un codigo QR?", a: "Si, pero solo con alta correccion de errores (nivel H, 30%). Manten el logo pequeno — no mas del 10-15% del area del codigo QR — y siempre prueba exhaustivamente despues de agregarlo." },
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
