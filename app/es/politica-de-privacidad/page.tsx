import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { Shield } from "lucide-react"

export const metadata = {
  title: "Política de Privacidad — PDF.it",
  description: "Conoce cómo PDF.it recopila, usa y protege tus datos.",
}

export default function PrivacyPolicyPageEs() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        {/* Hero */}
        <section className="relative bg-[#0E0F1E] text-white py-16 overflow-hidden">
          {/* Radial gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(20,216,196,0.12)_0%,_transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(107,124,255,0.08)_0%,_transparent_50%)]" />
          {/* Grain */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
            <filter id="heroGrainEs">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#heroGrainEs)" />
          </svg>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-[#14D8C4]/20 to-[#0E0F1E] border border-[#14D8C4]/20 shadow-[0_0_30px_rgba(20,216,196,0.15)]">
                <Shield className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4 text-white">Política de Privacidad</h1>
              <p className="text-xl text-slate-300">
                Tu privacidad importa. Así es exactamente como manejamos tus datos.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-[#F3F4FF] py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Dark sub-section container */}
              <div className="relative bg-[#0E0F1E] rounded-3xl p-6 lg:p-10 overflow-hidden">
                {/* Radial gradients */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(20,216,196,0.06)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(107,124,255,0.06)_0%,_transparent_50%)]" />

                {/* Metallic gradient border wrapper */}
                <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10">
                  {/* Glassmorphism inner card */}
                  <div className="rounded-2xl bg-white/[0.07] backdrop-blur-xl p-8 lg:p-12">
                    <div className="space-y-2 mb-8">
                      <h2 className="text-2xl font-bold text-white">Política de Privacidad — PDF.it</h2>
                      <p className="text-slate-500 text-sm"><strong>Fecha de vigencia:</strong> 1 de enero de 2024</p>
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-10">
                      PDF.it ("nosotros", "nos", "nuestro") valora tu privacidad. Esta Política de Privacidad explica qué información recopilamos, cómo la usamos y las opciones que tienes.
                    </p>

                    <div className="space-y-10">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">1. Información que Recopilamos</h3>
                        <p className="text-slate-300 font-semibold mb-2">A. Datos de uso del sitio (recopilados automáticamente)</p>
                        <p className="text-slate-400 mb-4">Cuando visitas PDF.it, nosotros y nuestros proveedores de servicios podemos recopilar información básica de uso como dirección IP (usada para aproximar ubicación), tipo de dispositivo y navegador, sistema operativo, páginas visitadas, URL de referencia y marcas de tiempo de sesión.</p>
                        <p className="text-slate-300 font-semibold mb-2">B. Información que proporcionas</p>
                        <p className="text-slate-400 mb-4">Si nos contactas, podemos recopilar tu dirección de correo electrónico y el contenido de tu mensaje.</p>
                        <p className="text-slate-300 font-semibold mb-2">C. Tus archivos</p>
                        <p className="text-slate-400">Los archivos que subes son transmitidos de forma segura a nuestros servidores de procesamiento para realizar la conversión u operación solicitada. Los archivos se eliminan automáticamente de nuestros servidores después de que tu sesión termina. No almacenamos, revisamos ni compartimos el contenido de tus archivos.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">2. Cómo Usamos la Información</h3>
                        <ul className="space-y-2 text-slate-400">
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Operar y mantener el sitio web y las herramientas</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Mejorar el rendimiento, la confiabilidad y la experiencia del usuario</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Comprender patrones de uso y resolver problemas</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Responder a consultas y solicitudes de soporte</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Prevenir fraude, abuso e incidentes de seguridad</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">3. Cookies, Analíticas y Publicidad</h3>
                        <p className="text-slate-400 mb-4">Usamos cookies y tecnologías similares para funcionalidad esencial del sitio, analíticas (comprensión del tráfico y uso de funciones) y publicidad a través de Google AdSense.</p>
                        <p className="text-slate-400">Puedes controlar las cookies a través de la configuración de tu navegador. Dependiendo de tu ubicación, podrás ver un banner de consentimiento de cookies para gestionar tus preferencias.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">4. Servicios de Terceros</h3>
                        <p className="text-slate-400 mb-2">Usamos servicios de terceros incluyendo:</p>
                        <ul className="space-y-2 text-slate-400">
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Google Analytics — analíticas del sitio</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Google AdSense — publicidad</li>
                        </ul>
                        <p className="text-slate-400 mt-4">Estos proveedores pueden establecer cookies y recopilar información bajo sus propias políticas de privacidad. Puedes revisar y gestionar tus preferencias a través de la <a href="https://myaccount.google.com/data-and-privacy" className="text-[#14D8C4] hover:text-[#2EE6D6]">configuración de privacidad y anuncios de Google</a>.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">5. Retención de Datos</h3>
                        <p className="text-slate-400 mb-2">Los archivos subidos para procesamiento se eliminan automáticamente de nuestros servidores después de que tu sesión termina.</p>
                        <p className="text-slate-400">Los datos de uso del sitio se conservan el tiempo necesario para operar y mejorar PDF.it. Los mensajes de soporte se conservan según sea necesario para responder y mantener el historial de soporte.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">6. Seguridad de Datos</h3>
                        <p className="text-slate-400">Todas las transferencias de archivos usan cifrado SSL. Aplicamos medidas administrativas, técnicas y organizacionales razonables para proteger la información. Sin embargo, ningún método de transmisión o almacenamiento es 100% seguro.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">7. Privacidad de Menores</h3>
                        <p className="text-slate-400">PDF.it no está destinado para menores de 13 años. No recopilamos intencionalmente información personal de menores.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">8. Tus Derechos y Opciones</h3>
                        <p className="text-slate-400 mb-2">Dependiendo de dónde vivas, puedes tener derechos para acceder, eliminar o corregir cierta información personal. También puedes:</p>
                        <ul className="space-y-2 text-slate-400">
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Gestionar cookies en tu navegador</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Ajustar la personalización de anuncios en la configuración de anuncios de Google</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Contactarnos para solicitar la eliminación de mensajes de soporte que nos hayas enviado</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">9. Cambios a Esta Política</h3>
                        <p className="text-slate-400">Podemos actualizar esta política de vez en cuando. Las actualizaciones se publicarán aquí con una Fecha de vigencia revisada.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">10. Contáctanos</h3>
                        <p className="text-slate-400">
                          Si tienes preguntas sobre esta Política de Privacidad, contáctanos en{" "}
                          <a href="mailto:contact@pdf.it.com" className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium">
                            contact@pdf.it.com
                          </a>.
                        </p>
                      </div>
                    </div>

                    {/* Privacy callout */}
                    <div className="mt-12 pt-8 border-t border-white/10">
                      <div className="bg-[#14D8C4]/5 border border-[#14D8C4]/20 rounded-xl p-6">
                        <div className="flex items-start gap-3">
                          <Shield className="h-6 w-6 text-[#14D8C4] mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-white mb-2">Tus Archivos se Eliminan Después de Cada Sesión</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                              Los archivos subidos a PDF.it se procesan de forma segura y se eliminan automáticamente después de que tu sesión termina. No almacenamos, revisamos ni compartimos tus documentos.
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

        {/* Privacy footer section */}
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
