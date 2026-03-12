"use client"

import type React from "react"
import { useState } from "react"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, CheckCircle, AlertCircle, Send, Clock } from "lucide-react"

export default function ContatoPage() {
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
      await new Promise((resolve) => setTimeout(resolve, 2000))
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
      <HeaderBr />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Fale Conosco</h1>
              <p className="text-xl text-slate-300">
                Tem perguntas? Estamos aqui para ajudar!
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
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Informacoes de Contato</h2>

                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-6 mb-6">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-orange-900 mb-1">Suporte por Email</h3>
                          <a
                            href="mailto:suporte@omnispdf.com"
                            className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors"
                          >
                            suporte@omnispdf.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-orange-800">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm font-medium">Respondemos em menos de 24 horas</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">Como podemos ajudar?</h3>
                        <ul className="space-y-2 text-slate-600">
                          <li>&#8226; Suporte tecnico com ferramentas PDF</li>
                          <li>&#8226; Perguntas sobre funcoes Pro</li>
                          <li>&#8226; Reportar erros e dar feedback</li>
                          <li>&#8226; Parcerias comerciais</li>
                          <li>&#8226; Consultas gerais</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-bold text-blue-900 mb-2">Dicas para uma Resposta Rapida</h4>
                        <p className="text-blue-800 text-sm">
                          Para suporte mais rapido, inclua detalhes sobre seu navegador, tipo de arquivo e qualquer mensagem de erro que tenha encontrado.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Envie uma Mensagem</h2>

                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Mensagem Enviada!</h3>
                        <p className="text-slate-600 mb-4">
                          Obrigado por entrar em contato. Responderemos em menos de 24 horas.
                        </p>
                        <p className="text-sm text-slate-500 mb-6">
                          Voce tambem pode escrever diretamente para{" "}
                          <a href="mailto:suporte@omnispdf.com" className="text-orange-500 hover:text-orange-600 font-medium">
                            suporte@omnispdf.com
                          </a>
                        </p>
                        <Button onClick={() => setIsSubmitted(false)} variant="outline" className="bg-white text-slate-800 border-slate-300">
                          Enviar Outra Mensagem
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2">
                              Seu Nome <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                              placeholder="Digite seu nome completo"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">
                              Seu Email <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                              placeholder="Digite seu email"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-sm font-bold text-slate-900 mb-2">
                            Assunto <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                          >
                            <option value="">Selecione um assunto</option>
                            <option value="technical-support">Suporte Tecnico</option>
                            <option value="pro-features">Pergunta sobre Pro</option>
                            <option value="bug-report">Reportar Erro</option>
                            <option value="feature-request">Sugestao de Funcao</option>
                            <option value="business-inquiry">Consulta Comercial</option>
                            <option value="other">Outro</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-2">
                            Mensagem <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-vertical"
                            placeholder="Conte-nos sobre sua pergunta, comentario ou problema..."
                          />
                        </div>

                        {hasError && (
                          <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
                            <AlertCircle className="h-5 w-5 flex-shrink-0" />
                            <span className="text-sm">
                              Ocorreu um erro ao enviar sua mensagem. Tente novamente ou escreva diretamente para{" "}
                              <a href="mailto:suporte@omnispdf.com" className="underline">suporte@omnispdf.com</a>
                            </span>
                          </div>
                        )}

                        <Button
                          type="submit"
                          disabled={isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message}
                          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <><Send className="h-4 w-4 mr-2 animate-pulse" /> Enviando Mensagem...</>
                          ) : (
                            <><Send className="h-4 w-4 mr-2" /> Enviar Mensagem</>
                          )}
                        </Button>

                        <p className="text-center text-sm text-slate-500">
                          Ou escreva diretamente para{" "}
                          <a href="mailto:suporte@omnispdf.com" className="text-orange-500 hover:text-orange-600 font-medium">
                            suporte@omnispdf.com
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
      <FooterBr />
    </div>
  )
}
