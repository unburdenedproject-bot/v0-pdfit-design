"use client"

import type React from "react"
import { useState } from "react"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, CheckCircle, AlertCircle, Send, Clock, Shield, Lock } from "lucide-react"

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
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        {/* Hero Section — Dark Cinematic */}
        <section className="relative bg-[#0E0F1E] text-white py-20 overflow-hidden">
          {/* Radial gradients */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#0A4A5C] rounded-full opacity-20 blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#1E6FD9] rounded-full opacity-15 blur-[100px]" />
          </div>
          {/* Grain SVG overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`, backgroundRepeat: "repeat" }} />

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              {/* Icon with teal glow */}
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-[#13152A] to-[#0E0F1E] border border-[#14D8C4]/30 shadow-[0_0_30px_rgba(20,216,196,0.15)]">
                <MessageSquare className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Entre em Contato</h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Tem perguntas? Estamos aqui para ajudar. Entre em contato com nossa equipe de suporte e responderemos rapidamente.
              </p>
              {/* 3 badges */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="flex items-center gap-2 bg-[#13152A]/80 border border-white/10 rounded-full px-4 py-2 text-sm">
                  <Clock className="h-4 w-4 text-[#14D8C4]" />
                  <span className="text-slate-300">Resposta em 24h</span>
                </div>
                <div className="flex items-center gap-2 bg-[#13152A]/80 border border-white/10 rounded-full px-4 py-2 text-sm">
                  <Lock className="h-4 w-4 text-[#14D8C4]" />
                  <span className="text-slate-300">Criptografia SSL</span>
                </div>
                <div className="flex items-center gap-2 bg-[#13152A]/80 border border-white/10 rounded-full px-4 py-2 text-sm">
                  <Shield className="h-4 w-4 text-[#14D8C4]" />
                  <span className="text-slate-300">Privacidade em Primeiro</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="bg-[#F3F4FF] py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column — Contact Info (dark glassmorphism) */}
                <div>
                  <div className="bg-[#0E0F1E]/95 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-2xl">
                    <h2 className="text-2xl font-bold text-white mb-6">Informa&#231;&#245;es de Contato</h2>

                    {/* Email support */}
                    <div className="bg-[#13152A] border border-white/10 rounded-xl p-6 mb-6">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#13152A] to-[#0E0F1E] border border-[#14D8C4]/30 shadow-[0_0_20px_rgba(20,216,196,0.15)]">
                          <Mail className="h-6 w-6 text-[#14D8C4]" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1">Suporte por Email</h3>
                          <a
                            href="mailto:contact@pdf.it.com"
                            className="text-lg sm:text-2xl font-bold text-[#14D8C4] hover:text-[#2EE6D6] transition-colors break-all"
                          >
                            contact@pdf.it.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm font-medium">Respondemos em menos de 24 horas</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-3">Como podemos ajudar?</h3>
                        <ul className="space-y-2 text-slate-300">
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4]">-</span> Suporte t&#233;cnico com ferramentas PDF</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4]">-</span> Perguntas sobre fun&#231;&#245;es Pro</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4]">-</span> Reportar erros e dar feedback</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4]">-</span> Parcerias comerciais</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4]">-</span> Consultas gerais</li>
                        </ul>
                      </div>

                      {/* Privacy note */}
                      <div className="bg-[#13152A] border border-white/10 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Shield className="h-5 w-5 text-[#14D8C4] flex-shrink-0 mt-0.5" />
                          <p className="text-slate-300 text-sm">
                            Suas mensagens s&#227;o privadas. Nunca compartilhamos suas informa&#231;&#245;es de contato. Os arquivos s&#227;o exclu&#237;dos imediatamente ap&#243;s o processamento.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column — Contact Form (white card) */}
                <div>
                  <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
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
                          Voc&#234; tamb&#233;m pode escrever diretamente para{" "}
                          <a href="mailto:contact@pdf.it.com" className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium">
                            contact@pdf.it.com
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
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14D8C4] focus:border-[#14D8C4] transition-colors"
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
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14D8C4] focus:border-[#14D8C4] transition-colors"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14D8C4] focus:border-[#14D8C4] transition-colors"
                          >
                            <option value="">Selecione um assunto</option>
                            <option value="technical-support">Suporte T&#233;cnico</option>
                            <option value="pro-features">Pergunta sobre Pro</option>
                            <option value="bug-report">Reportar Erro</option>
                            <option value="feature-request">Sugest&#227;o de Fun&#231;&#227;o</option>
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14D8C4] focus:border-[#14D8C4] transition-colors resize-vertical"
                            placeholder="Conte-nos sobre sua pergunta, coment&#225;rio ou problema..."
                          />
                        </div>

                        {hasError && (
                          <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
                            <AlertCircle className="h-5 w-5 flex-shrink-0" />
                            <span className="text-sm">
                              Ocorreu um erro ao enviar sua mensagem. Tente novamente ou escreva diretamente para{" "}
                              <a href="mailto:contact@pdf.it.com" className="underline">contact@pdf.it.com</a>
                            </span>
                          </div>
                        )}

                        <Button
                          type="submit"
                          disabled={isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message}
                          className="w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-6 rounded-lg text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <><Send className="h-4 w-4 mr-2 animate-pulse" /> Enviando Mensagem...</>
                          ) : (
                            <><Send className="h-4 w-4 mr-2" /> Enviar Mensagem</>
                          )}
                        </Button>

                        <p className="text-center text-sm text-slate-500">
                          Ou escreva diretamente para{" "}
                          <a href="mailto:contact@pdf.it.com" className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium">
                            contact@pdf.it.com
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

        {/* Privacy Note Section — Dark Cinematic */}
        <section className="relative bg-[#0E0F1E] py-12 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#0A4A5C] rounded-full opacity-10 blur-[100px]" />
            <div className="absolute bottom-0 right-1/3 w-[400px] h-[200px] bg-[#E8813A] rounded-full opacity-5 blur-[80px]" />
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <Shield className="h-8 w-8 text-[#14D8C4] mx-auto mb-4" />
              <p className="text-slate-300 text-sm">
                Todas as comunica&#231;&#245;es s&#227;o criptografadas. Nunca compartilhamos suas informa&#231;&#245;es pessoais.
              </p>
            </div>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
