"use client"

import type React from "react"
import { useState } from "react"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, CheckCircle, AlertCircle, Send, Clock } from "lucide-react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setHasError(false)

    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) }); if (!response.ok) throw new Error("Failed")
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setHasError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <HeaderEs />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Contáctanos</h1>
              <p className="text-xl text-slate-300">
                ¿Tienes preguntas? ¡Estamos aquí para ayudarte!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Información de Contacto</h2>

                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-6 mb-6">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-orange-900 mb-1">Soporte por Email</h3>
                          <a
                            href="mailto:contact@omnispdf.com"
                            className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors"
                          >
                            contact@omnispdf.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-orange-800">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm font-medium">Respondemos en menos de 24 horas</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">¿En qué podemos ayudarte?</h3>
                        <ul className="space-y-2 text-slate-600">
                          <li>• Soporte técnico con herramientas PDF</li>
                          <li>• Preguntas sobre funciones Pro</li>
                          <li>• Reportar errores y dar retroalimentación</li>
                          <li>• Alianzas comerciales</li>
                          <li>• Consultas generales</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-bold text-blue-900 mb-2">Tips para una Respuesta Rápida</h4>
                        <p className="text-blue-800 text-sm">
                          Para soporte más rápido, incluye detalles sobre tu navegador, tipo de archivo y cualquier mensaje de error que hayas encontrado.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Envíanos un Mensaje</h2>

                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">¡Mensaje Enviado!</h3>
                        <p className="text-slate-600 mb-4">
                          Gracias por contactarnos. Te responderemos en menos de 24 horas.
                        </p>
                        <p className="text-sm text-slate-500 mb-6">
                          También puedes escribirnos directamente a{" "}
                          <a href="mailto:contact@omnispdf.com" className="text-orange-500 hover:text-orange-600 font-medium">
                            contact@omnispdf.com
                          </a>
                        </p>
                        <Button onClick={() => setIsSubmitted(false)} variant="outline" className="bg-white text-slate-800 border-slate-300">
                          Enviar Otro Mensaje
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2">
                              Tu Nombre <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                              placeholder="Ingresa tu nombre completo"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">
                              Tu Email <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                              placeholder="Ingresa tu correo electrónico"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-sm font-bold text-slate-900 mb-2">
                            Asunto <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                          >
                            <option value="">Selecciona un tema</option>
                            <option value="technical-support">Soporte Técnico</option>
                            <option value="pro-features">Pregunta sobre Pro</option>
                            <option value="bug-report">Reportar Error</option>
                            <option value="feature-request">Sugerencia de Función</option>
                            <option value="business-inquiry">Consulta Comercial</option>
                            <option value="other">Otro</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-2">
                            Mensaje <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-vertical"
                            placeholder="Cuéntanos sobre tu pregunta, comentario o problema..."
                          />
                        </div>

                        {hasError && (
                          <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
                            <AlertCircle className="h-5 w-5 flex-shrink-0" />
                            <span className="text-sm">
                              Hubo un error al enviar tu mensaje. Intenta de nuevo o escríbenos directamente a{" "}
                              <a href="mailto:contact@omnispdf.com" className="underline">contact@omnispdf.com</a>
                            </span>
                          </div>
                        )}

                        <Button
                          type="submit"
                          disabled={isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message}
                          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <><Send className="h-4 w-4 mr-2 animate-pulse" /> Enviando Mensaje...</>
                          ) : (
                            <><Send className="h-4 w-4 mr-2" /> Enviar Mensaje</>
                          )}
                        </Button>

                        <p className="text-center text-sm text-slate-500">
                          O escríbenos directamente a{" "}
                          <a href="mailto:contact@omnispdf.com" className="text-orange-500 hover:text-orange-600 font-medium">
                            contact@omnispdf.com
                          </a>
                        </p>
                      </form>
                    )}
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
