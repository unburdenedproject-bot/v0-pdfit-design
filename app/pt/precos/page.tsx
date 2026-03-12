"use client"

import { useState } from "react"
import { HeaderPt } from "@/components/header-pt"
import { FooterPt } from "@/components/footer-pt"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import Link from "next/link"

export default function PrecosPage() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly")

  return (
    <div className="min-h-screen bg-white">
      <HeaderPt />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Escolha Seu Plano</h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Comece gratis, atualize quando precisar de mais.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Free */}
                <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-black text-slate-900 mb-4">Gratis</h2>
                    <div className="mb-6">
                      <span className="text-5xl font-black text-slate-900">$0</span>
                      <span className="text-xl text-slate-600">/mes</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {[
                      "10 conversoes por dia",
                      "Arquivos ate 25MB",
                      "Ferramentas PDF basicas",
                      "Processamento padrao",
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-slate-700 text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <Link href="/dashboard">Comecar Gratis</Link>
                  </Button>
                </div>

                {/* Pro */}
                <div className="bg-white rounded-2xl border-2 border-orange-500 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                      <Star className="h-4 w-4 fill-current" />
                      Mais Popular
                    </div>
                  </div>

                  <div className="text-center mb-6 mt-4">
                    <h2 className="text-3xl font-black text-slate-900 mb-4">Pro</h2>

                    <div className="inline-flex items-center bg-slate-100 rounded-full p-1 mb-6">
                      <button
                        type="button"
                        onClick={() => setBilling("monthly")}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                          billing === "monthly" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                        }`}
                      >
                        Mensal
                      </button>
                      <button
                        type="button"
                        onClick={() => setBilling("annual")}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                          billing === "annual" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                        }`}
                      >
                        Anual
                        <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-0.5 rounded-full">
                          Economize 2 meses
                        </span>
                      </button>
                    </div>

                    <div className="mb-2">
                      <span className="text-5xl font-black text-orange-500">
                        {billing === "monthly" ? "$7.99" : "$79.90"}
                      </span>
                      <span className="text-xl text-slate-600">
                        {billing === "monthly" ? "/mes" : "/ano"}
                      </span>
                    </div>
                    {billing === "annual" && (
                      <p className="text-sm text-slate-500">Equivale a $6.66/mes cobrado anualmente</p>
                    )}
                  </div>

                  <div className="space-y-4 mb-8">
                    <p className="text-sm text-slate-500 font-medium">Tudo no Gratis, mais:</p>
                    {[
                      "Conversoes ilimitadas",
                      "Arquivos ate 200MB",
                      "Todas as ferramentas PDF",
                      "Processamento em lote",
                      "Controles avancados",
                      "Suporte prioritario",
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-slate-700 text-lg font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <Link href={billing === "monthly" ? "/upgrade" : "/upgrade?billing=annual"}>
                      {billing === "monthly" ? "Atualizar para Pro" : "Atualizar Anual (economize 2 meses)"}
                    </Link>
                  </Button>
                </div>

                {/* Business */}
                <div className="bg-white rounded-2xl border-2 border-indigo-400 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                      Ideal para Equipes
                    </div>
                  </div>

                  <div className="text-center mb-6 mt-4">
                    <h2 className="text-3xl font-black text-slate-900 mb-4">Business</h2>

                    <div className="inline-flex items-center bg-slate-100 rounded-full p-1 mb-6">
                      <button
                        type="button"
                        onClick={() => setBilling("monthly")}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                          billing === "monthly" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                        }`}
                      >
                        Mensal
                      </button>
                      <button
                        type="button"
                        onClick={() => setBilling("annual")}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                          billing === "annual" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                        }`}
                      >
                        Anual
                        <span className="bg-indigo-100 text-indigo-600 text-xs font-bold px-2 py-0.5 rounded-full">
                          Economize 2 meses
                        </span>
                      </button>
                    </div>

                    <div className="mb-2">
                      <span className="text-5xl font-black text-indigo-600">
                        {billing === "monthly" ? "$13.99" : "$139.90"}
                      </span>
                      <span className="text-xl text-slate-600">
                        {billing === "monthly" ? "/mes" : "/ano"}
                      </span>
                    </div>
                    {billing === "annual" && (
                      <p className="text-sm text-slate-500">Equivale a $11.66/mes cobrado anualmente</p>
                    )}
                  </div>

                  <div className="space-y-4 mb-8">
                    <p className="text-sm text-slate-500 font-medium">Tudo no Pro, mais:</p>
                    {[
                      "Automacao de fluxos de trabalho",
                      "Extracao de tabelas para Excel",
                      "Comparacao de PDFs",
                      "Assinatura eletronica de documentos",
                      "Redacao de PDFs",
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-slate-700 text-lg font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <Link href={billing === "monthly" ? "/upgrade?plan=business" : "/upgrade?plan=business&billing=annual"}>
                      {billing === "monthly" ? "Atualizar para Business" : "Atualizar Anual (economize 2 meses)"}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Pronto para comecar?</h2>
              <p className="text-xl text-slate-600 mb-8">
                Comece com 10 conversoes gratis por dia. Sem cartao de credito.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 text-lg rounded-xl"
                  asChild
                >
                  <Link href="/pt">Experimentar Ferramentas Gratis</Link>
                </Button>
                <Button
                  variant="outline"
                  className="bg-white text-slate-800 border-slate-300 hover:bg-slate-50 font-bold py-3 px-8 text-lg rounded-xl"
                  asChild
                >
                  <Link href="/pt/contato">Contatar Vendas</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterPt />
    </div>
  )
}
