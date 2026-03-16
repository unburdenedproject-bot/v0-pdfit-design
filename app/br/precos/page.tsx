"use client"

import { useState } from "react"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { Button } from "@/components/ui/button"
import { Check, Star, Crown } from "lucide-react"
import Link from "next/link"

export default function PrecosPage() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly")

  return (
    <div className="min-h-screen bg-white">
      <HeaderBr />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Escolha Seu Plano</h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                Comece gratis, atualize quando precisar de mais.
              </p>

              {/* Billing Toggle */}
              <div className="inline-flex items-center bg-slate-700 rounded-full p-1">
                <button
                  type="button"
                  onClick={() => setBilling("monthly")}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    billing === "monthly"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  Mensal
                </button>
                <button
                  type="button"
                  onClick={() => setBilling("annual")}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                    billing === "annual"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  Anual
                  <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    Economize 2 meses
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                {/* Free Plan */}
                <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-black text-gray-600 mb-2">Gratis</h2>
                    <p className="text-sm text-gray-500 mb-4">Comece com ferramentas PDF essenciais</p>
                    <div className="mb-2">
                      <span className="text-5xl font-black text-gray-700">$0</span>
                      <span className="text-lg text-gray-500">/mes</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8 flex-grow">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700">10 conversoes por dia</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700">Arquivos ate 25MB</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700">Ferramentas PDF basicas (comprimir, unir, dividir, girar, converter)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700">Processamento de arquivo unico</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700">Velocidade padrao</span>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <Link href="/br/painel">Comecar Gratis</Link>
                  </Button>
                </div>

                {/* Pro Plan */}
                <div className="bg-white rounded-2xl border-2 border-orange-500 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative flex flex-col">
                  {/* Most Popular Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-orange-500 text-white px-5 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg whitespace-nowrap">
                      <Star className="h-4 w-4 fill-current" />
                      Mais Popular
                    </div>
                  </div>

                  <div className="text-center mb-6 mt-4">
                    <h2 className="text-2xl font-black text-slate-900 mb-2">Pro</h2>
                    <p className="text-sm text-slate-500 mb-4">Desbloqueie todas as ferramentas sem limites diarios</p>
                    <div className="mb-2">
                      <span className="text-5xl font-black text-orange-500">
                        {billing === "monthly" ? "$7.99" : "$79.90"}
                      </span>
                      <span className="text-lg text-slate-600">
                        {billing === "monthly" ? "/mes" : "/ano"}
                      </span>
                    </div>
                    {billing === "annual" && (
                      <p className="text-sm text-slate-500">
                        Equivale a $6.66/mes cobrado anualmente
                      </p>
                    )}
                  </div>

                  <div className="space-y-3 mb-8 flex-grow">
                    <p className="text-sm text-slate-500 font-medium">Tudo no Gratis, mais:</p>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 font-medium">Conversoes ilimitadas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 font-medium">Arquivos ate 200MB</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 font-medium">Todas as ferramentas PDF (OCR, QR code, PDF para Word/Excel/PowerPoint)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 font-medium">Processamento em lote (varios arquivos)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 font-medium">Velocidade de processamento prioritaria</span>
                    </div>
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

                {/* Business Plan */}
                <div className="bg-white rounded-2xl border-2 border-indigo-400 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative flex flex-col">
                  {/* Best for Teams Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-indigo-600 text-white px-5 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg whitespace-nowrap">
                      Ideal para Equipes
                    </div>
                  </div>

                  <div className="text-center mb-6 mt-4">
                    <h2 className="text-2xl font-black text-slate-900 mb-2">Business</h2>
                    <p className="text-sm text-slate-500 mb-4">Ferramentas avancadas para profissionais e equipes</p>
                    <div className="mb-2">
                      <span className="text-5xl font-black text-indigo-600">
                        {billing === "monthly" ? "$13.99" : "$139.90"}
                      </span>
                      <span className="text-lg text-slate-600">
                        {billing === "monthly" ? "/mes" : "/ano"}
                      </span>
                    </div>
                    {billing === "annual" && (
                      <p className="text-sm text-slate-500">
                        Equivale a $11.66/mes cobrado anualmente
                      </p>
                    )}
                  </div>

                  <div className="space-y-3 mb-8 flex-grow">
                    <p className="text-sm text-slate-500 font-medium">Tudo no Pro, mais:</p>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 font-medium">Arquivos ate 1GB</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 font-medium">Extracao de tabelas para Excel (200 paginas/mes)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 font-medium">Automacao de fluxos de trabalho (encadear ferramentas)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 font-medium">Comparacao de PDFs (diferenca lado a lado)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 font-medium">Assinatura eletronica de documentos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 font-medium">Redacao de PDFs (remocao permanente)</span>
                    </div>
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

                {/* Enterprise Plan */}
                <div className="bg-slate-900 rounded-2xl border-2 border-amber-500 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative flex flex-col">
                  {/* Best Value Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-amber-500 text-slate-900 px-5 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg whitespace-nowrap">
                      <Crown className="h-4 w-4 fill-current" />
                      Melhor Valor
                    </div>
                  </div>

                  <div className="text-center mb-6 mt-4">
                    <h2 className="text-2xl font-black text-white mb-2">Enterprise</h2>
                    <p className="text-sm text-slate-400 mb-4">Feito para escritorios de advocacia, contadores e laboratorios</p>
                    <div className="mb-2">
                      <span className="text-5xl font-black text-amber-500">
                        {billing === "monthly" ? "$49.99" : "$499.90"}
                      </span>
                      <span className="text-lg text-slate-400">
                        {billing === "monthly" ? "/mes" : "/ano"}
                      </span>
                    </div>
                    {billing === "annual" && (
                      <p className="text-sm text-slate-400">
                        Equivale a $41.66/mes cobrado anualmente
                      </p>
                    )}
                  </div>

                  <div className="space-y-3 mb-8 flex-grow">
                    <p className="text-sm text-slate-400 font-medium">Tudo no Business, mais:</p>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-amber-500" />
                      </div>
                      <span className="text-slate-200 font-medium">Extracao de tabelas para Excel (2.000 paginas/mes)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-amber-500" />
                      </div>
                      <span className="text-slate-200 font-medium">Fila de processamento prioritario</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-amber-500" />
                      </div>
                      <span className="text-slate-200 font-medium">Suporte dedicado por email (resposta em 24h)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-amber-500" />
                      </div>
                      <span className="text-slate-200 font-medium">Acesso antecipado a novos recursos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-amber-500" />
                      </div>
                      <span className="text-slate-200 font-medium">Modelos de fluxo de trabalho personalizados</span>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <Link href={billing === "monthly" ? "/upgrade?plan=enterprise" : "/upgrade?plan=enterprise&billing=annual"}>
                      {billing === "monthly" ? "Atualizar para Enterprise" : "Atualizar Anual (economize 2 meses)"}
                    </Link>
                  </Button>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-black text-slate-900 text-center mb-12">Compare Todas as Funcoes</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="text-left py-4 px-4 text-slate-900 font-bold text-lg">Funcao</th>
                      <th className="text-center py-4 px-4 text-gray-600 font-bold text-lg">Gratis</th>
                      <th className="text-center py-4 px-4 text-orange-500 font-bold text-lg">Pro</th>
                      <th className="text-center py-4 px-4 text-indigo-600 font-bold text-lg">Business</th>
                      <th className="text-center py-4 px-4 text-amber-500 font-bold text-lg">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">Conversoes por dia</td>
                      <td className="py-4 px-4 text-center text-slate-700">10</td>
                      <td className="py-4 px-4 text-center text-slate-700">Ilimitado</td>
                      <td className="py-4 px-4 text-center text-slate-700">Ilimitado</td>
                      <td className="py-4 px-4 text-center text-slate-700">Ilimitado</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <td className="py-4 px-4 text-slate-700 font-medium">Tamanho maximo de arquivo</td>
                      <td className="py-4 px-4 text-center text-slate-700">25MB</td>
                      <td className="py-4 px-4 text-center text-slate-700">200MB</td>
                      <td className="py-4 px-4 text-center text-slate-700">1GB</td>
                      <td className="py-4 px-4 text-center text-slate-700">1GB</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">Ferramentas PDF basicas</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <td className="py-4 px-4 text-slate-700 font-medium">PDF para Word/Excel/PowerPoint</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">Scanner OCR</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <td className="py-4 px-4 text-slate-700 font-medium">Gerador de codigos QR</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">Processamento em lote</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <td className="py-4 px-4 text-slate-700 font-medium">Automacao de fluxos</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">Extracao de tabelas</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-700">200 paginas/mes</td>
                      <td className="py-4 px-4 text-center text-slate-700">2.000 paginas/mes</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <td className="py-4 px-4 text-slate-700 font-medium">Comparacao de PDFs</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">Assinatura eletronica</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <td className="py-4 px-4 text-slate-700 font-medium">Redacao de PDFs</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">Processamento prioritario</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <td className="py-4 px-4 text-slate-700 font-medium">Suporte dedicado</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">Acesso antecipado</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-white">
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
                  <Link href="/br">Experimentar Ferramentas Gratis</Link>
                </Button>
                <Button
                  variant="outline"
                  className="bg-white text-slate-800 border-slate-300 hover:bg-slate-50 font-bold py-3 px-8 text-lg rounded-xl"
                  asChild
                >
                  <Link href="/br/contato">Contatar Vendas</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
