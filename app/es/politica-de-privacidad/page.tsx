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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Política de Privacidad</h1>
              <p className="text-xl text-slate-300">
                Tu privacidad importa. Así es exactamente como manejamos tus datos.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 lg:p-12">
                <div className="space-y-2 mb-8">
                  <h2 className="text-2xl font-bold text-slate-900">Política de Privacidad — PDF.it</h2>
                  <p className="text-slate-500 text-sm"><strong>Fecha de vigencia:</strong> 1 de enero de 2024</p>
                </div>

                <p className="text-slate-700 leading-relaxed mb-10">
                  PDF.it ("nosotros", "nos", "nuestro") valora tu privacidad. Esta Política de Privacidad explica qué información recopilamos, cómo la usamos y las opciones que tienes.
                </p>

                <div className="space-y-10">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">1. Información que Recopilamos</h3>
                    <p className="text-slate-700 font-semibold mb-2">A. Datos de uso del sitio (recopilados automáticamente)</p>
                    <p className="text-slate-700 mb-4">Cuando visitas PDF.it, nosotros y nuestros proveedores de servicios podemos recopilar información básica de uso como dirección IP (usada para aproximar ubicación), tipo de dispositivo y navegador, sistema operativo, páginas visitadas, URL de referencia y marcas de tiempo de sesión.</p>
                    <p className="text-slate-700 font-semibold mb-2">B. Información que proporcionas</p>
                    <p className="text-slate-700 mb-4">Si nos contactas, podemos recopilar tu dirección de correo electrónico y el contenido de tu mensaje.</p>
                    <p className="text-slate-700 font-semibold mb-2">C. Tus archivos</p>
                    <p className="text-slate-700">Los archivos que subes son transmitidos de forma segura a nuestros servidores de procesamiento para realizar la conversión u operación solicitada. Los archivos se eliminan automáticamente de nuestros servidores después de que tu sesión termina. No almacenamos, revisamos ni compartimos el contenido de tus archivos.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">2. Cómo Usamos la Información</h3>
                    <ul className="space-y-2 text-slate-700 list-disc list-inside">
                      <li>Operar y mantener el sitio web y las herramientas</li>
                      <li>Mejorar el rendimiento, la confiabilidad y la experiencia del usuario</li>
                      <li>Comprender patrones de uso y resolver problemas</li>
                      <li>Responder a consultas y solicitudes de soporte</li>
                      <li>Prevenir fraude, abuso e incidentes de seguridad</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">3. Cookies, Analíticas y Publicidad</h3>
                    <p className="text-slate-700 mb-4">Usamos cookies y tecnologías similares para funcionalidad esencial del sitio, analíticas (comprensión del tráfico y uso de funciones) y publicidad a través de Google AdSense.</p>
                    <p className="text-slate-700">Puedes controlar las cookies a través de la configuración de tu navegador. Dependiendo de tu ubicación, podrás ver un banner de consentimiento de cookies para gestionar tus preferencias.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">4. Servicios de Terceros</h3>
                    <p className="text-slate-700 mb-2">Usamos servicios de terceros incluyendo:</p>
                    <ul className="space-y-2 text-slate-700 list-disc list-inside">
                      <li>Google Analytics — analíticas del sitio</li>
                      <li>Google AdSense — publicidad</li>
                    </ul>
                    <p className="text-slate-700 mt-4">Estos proveedores pueden establecer cookies y recopilar información bajo sus propias políticas de privacidad. Puedes revisar y gestionar tus preferencias a través de la <a href="https://myaccount.google.com/data-and-privacy" className="text-orange-500 hover:text-orange-600">configuración de privacidad y anuncios de Google</a>.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">5. Retención de Datos</h3>
                    <p className="text-slate-700 mb-2">Los archivos subidos para procesamiento se eliminan automáticamente de nuestros servidores después de que tu sesión termina.</p>
                    <p className="text-slate-700">Los datos de uso del sitio se conservan el tiempo necesario para operar y mejorar PDF.it. Los mensajes de soporte se conservan según sea necesario para responder y mantener el historial de soporte.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">6. Seguridad de Datos</h3>
                    <p className="text-slate-700">Todas las transferencias de archivos usan cifrado SSL. Aplicamos medidas administrativas, técnicas y organizacionales razonables para proteger la información. Sin embargo, ningún método de transmisión o almacenamiento es 100% seguro.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">7. Privacidad de Menores</h3>
                    <p className="text-slate-700">PDF.it no está destinado para menores de 13 años. No recopilamos intencionalmente información personal de menores.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">8. Tus Derechos y Opciones</h3>
                    <p className="text-slate-700 mb-2">Dependiendo de dónde vivas, puedes tener derechos para acceder, eliminar o corregir cierta información personal. También puedes:</p>
                    <ul className="space-y-2 text-slate-700 list-disc list-inside">
                      <li>Gestionar cookies en tu navegador</li>
                      <li>Ajustar la personalización de anuncios en la configuración de anuncios de Google</li>
                      <li>Contactarnos para solicitar la eliminación de mensajes de soporte que nos hayas enviado</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">9. Cambios a Esta Política</h3>
                    <p className="text-slate-700">Podemos actualizar esta política de vez en cuando. Las actualizaciones se publicarán aquí con una Fecha de vigencia revisada.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">10. Contáctanos</h3>
                    <p className="text-slate-700">
                      Si tienes preguntas sobre esta Política de Privacidad, contáctanos en{" "}
                      <a href="mailto:contact@pdf.it.com" className="text-orange-500 hover:text-orange-600 font-medium">
                        contact@pdf.it.com
                      </a>.
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-blue-900 mb-2">Tus Archivos se Eliminan Después de Cada Sesión</h4>
                        <p className="text-blue-800 text-sm leading-relaxed">
                          Los archivos subidos a PDF.it se procesan de forma segura y se eliminan automáticamente después de que tu sesión termina. No almacenamos, revisamos ni compartimos tus documentos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
