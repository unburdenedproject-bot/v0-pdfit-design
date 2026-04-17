import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { FileText, Shield } from "lucide-react"

export const metadata = {
  title: "Términos y Condiciones — PDF.it",
  description: "Términos y condiciones para usar las herramientas y servicios de PDF.it.",
}

export default function TermsConditionsPageEs() {
  return (
    <div className="min-h-screen bg-[#0E0F1E]">
      <HeaderEs />
      <main>
        {/* Hero */}
        <section className="relative bg-[#0E0F1E] text-white py-16 overflow-hidden">
          {/* Radial gradients */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(20,216,196,0.08),transparent_70%)]" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(107,124,255,0.06),transparent_70%)]" />
          </div>
          {/* Grain overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none">
            <filter id="grain-terms-es">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain-terms-es)" />
          </svg>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-b from-[#14D8C4]/20 to-[#14D8C4]/5 border border-[#14D8C4]/20">
                <FileText className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Términos y Condiciones</h1>
              <p className="text-xl text-slate-300">
                Los términos de servicio para usar las herramientas y servicios de PDF.it.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-[#F3F4FF] py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Dark container with radial gradients */}
              <div className="relative bg-[#0E0F1E] rounded-3xl overflow-hidden">
                {/* Radial gradients inside container */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(20,216,196,0.05),transparent_70%)]" />
                  <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(107,124,255,0.04),transparent_70%)]" />
                </div>

                {/* Metallic gradient border card */}
                <div className="relative m-6 lg:m-8 rounded-2xl p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-white/10">
                  <div className="bg-white/[0.07] backdrop-blur-xl rounded-2xl p-8 lg:p-12">

                    <div className="space-y-2 mb-8">
                      <h2 className="text-2xl font-bold text-white">Términos y Condiciones — PDF.it</h2>
                      <p className="text-slate-500 text-sm"><strong>Fecha de vigencia:</strong> 1 de enero de 2024</p>
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-10">
                      Bienvenido a PDF.it ("nosotros", "nos", "nuestro"). Al acceder o usar nuestro sitio web y herramientas (el "Servicio"), aceptas estos Términos y Condiciones ("Términos"). Si no estás de acuerdo, no uses el Servicio.
                    </p>

                    <div className="space-y-10">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">1. Uso del Servicio</h3>
                        <p className="text-slate-400 mb-4">PDF.it proporciona herramientas en línea para convertir, comprimir y procesar documentos. Aceptas usar el Servicio solo para propósitos legales y de acuerdo con estos Términos.</p>
                        <p className="text-slate-300 font-semibold mb-2">No debes:</p>
                        <ul className="space-y-2 text-slate-400">
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 flex-shrink-0">&#9679;</span>Usar el Servicio para violar cualquier ley o regulación</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 flex-shrink-0">&#9679;</span>Subir o procesar contenido sobre el cual no tengas los derechos o permisos necesarios</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 flex-shrink-0">&#9679;</span>Intentar interrumpir, abusar, sobrecargar o hacer ingeniería inversa del Servicio</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 flex-shrink-0">&#9679;</span>Usar scraping automatizado o solicitudes automatizadas excesivas sin permiso</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">2. Cuentas, Planes y Límites</h3>
                        <p className="text-slate-400">Algunas funciones están disponibles bajo planes gratuitos y de pago. El uso gratuito incluye límites de conversiónes por día (10/día) y tamaño de archivo (25MB). Los planes de pago proporcionan límites más altos y funciones adicionales (200MB, conversiónes ilimitadas). Los detalles del plan y precios pueden cambiar de vez en cuando y se publicarán en el sitio web.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">3. Tu Contenido y Archivos</h3>
                        <p className="text-slate-400 mb-4">Conservas todos los derechos sobre los archivos y contenido que subes o procesas ("Contenido del Usuario"). Declaras y garantizas que tienes todos los derechos necesarios para usar tu Contenido del Usuario con el Servicio.</p>
                        <p className="text-slate-400">Los archivos subidos a PDF.it se procesan de forma segura y se eliminan automáticamente después de que tu sesión termina. No almacenamos, revisamos ni compartimos el contenido de tus archivos. Consulta nuestra <a href="/es/politica-de-privacidad" className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium">Política de Privacidad</a> para más detalles.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">4. Propiedad Intelectual</h3>
                        <p className="text-slate-400 mb-4">El Servicio (incluyendo el sitio web, software, diseño, logos y marca) es propiedad de PDF.it y está protegido por leyes de propiedad intelectual. No puedes copiar, modificar, distribuir, vender o licenciar ninguna parte del Servicio sin nuestro permiso por escrito.</p>
                        <p className="text-slate-400">Tus resultados: Eres propietario de los documentos que subes y los archivos que descargas, sujeto a los derechos que ya posees sobre el contenido original.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">5. Descargo de Responsabilidad</h3>
                        <p className="text-slate-400">El Servicio se proporciona "tal cual" y "según disponibilidad". No garantizamos que el Servicio será ininterrumpido, libre de errores, o que los resultados serán perfectamente precisos o adecuados para todo propósito. Eres responsable de revisar los resultados antes de usarlos para propósitos importantes, legales o profesionales.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">6. Limitación de Responsabilidad</h3>
                        <p className="text-slate-400">En la máxima medida permitida por la ley, PDF.it no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos, ni por cualquier pérdida de datos, ganancias, ingresos o negocios que surjan de tu uso (o incapacidad de usar) el Servicio.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">7. Reembolsos</h3>
                        <p className="text-slate-400">Ofrecemos reembolsos completos dentro de los 7 días posteriores a la compra, sin preguntas. Para solicitar un reembolso, contáctanos en{" "}
                          <a href="mailto:contact@pdf.it.com" className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium">
                            contact@pdf.it.com
                          </a>.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">8. Terminación</h3>
                        <p className="text-slate-400">Podemos suspender o terminar el acceso al Servicio si creemos que has violado estos Términos, abusado del Servicio, o creado riesgo para PDF.it u otros usuarios.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">9. Servicios y Enlaces de Terceros</h3>
                        <p className="text-slate-400">El Servicio puede incluir servicios de terceros (como analíticas o publicidad) y enlaces a sitios web de terceros. No somos responsables del contenido, políticas o prácticas de terceros.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">10. Cambios a Estos Términos</h3>
                        <p className="text-slate-400">Podemos actualizar estos Términos de vez en cuando. Los cambios entran en vigor cuando se publican. El uso continuado del Servicio después de que los cambios entren en vigor constituye aceptación de los Términos revisados.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">11. Contacto</h3>
                        <p className="text-slate-400">
                          ¿Preguntas sobre estos Términos? Contáctanos en{" "}
                          <a href="mailto:contact@pdf.it.com" className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium">
                            contact@pdf.it.com
                          </a>.
                        </p>
                      </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10">
                      <div className="bg-[#14D8C4]/5 border border-[#14D8C4]/20 rounded-xl p-6">
                        <div className="flex items-start gap-3">
                          <FileText className="h-6 w-6 text-[#14D8C4] mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-white mb-2">Gratis y Accesible</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                              Comienza gratis con herramientas esenciales de PDF. Actualiza en cualquier momento para obtener límites más altos, funciones avanzadas y soporte prioritario.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy footer */}
        <section className="bg-[#0E0F1E] py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2">
              <Shield className="h-4 w-4 text-slate-500" />
              <p className="text-slate-500 text-xs">Archivos eliminados inmediatamente después de la descarga.</p>
            </div>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
