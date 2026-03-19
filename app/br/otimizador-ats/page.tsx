import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { AtsOptimizerInterface } from "@/components/ats-optimizer-interface"
import { Target, Zap, Shield, FileText, Merge, Lock, Scan, Type } from "lucide-react"

export const metadata = {
  title: "Otimizador ATS de Curriculo — Pontue seu Curriculo para Compatibilidade ATS | OmnisPDF",
  description:
    "Envie seu curriculo e receba uma pontuacao de compatibilidade ATS instantanea. O Otimizador ATS do OmnisPDF analisa formatacao, palavras-chave, secoes e estrutura — e diz exatamente o que corrigir.",
  alternates: {
    languages: {
      en: "/ats-optimizer",
      es: "/es/optimizador-ats",
      pt: "/br/otimizador-ats",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que e um ATS e por que ele importa para meu curriculo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Um Sistema de Rastreamento de Candidatos (ATS) e um software usado por empregadores para filtrar e classificar curriculos antes que um humano os veja. Se seu curriculo nao e compativel com ATS, ele pode ser rejeitado automaticamente — mesmo que voce seja qualificado para a vaga."
      }
    },
    {
      "@type": "Question",
      "name": "Como funciona a pontuacao ATS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nossa IA analisa seu curriculo em multiplas dimensoes: compatibilidade de formatacao, relevancia de palavras-chave, estrutura de secoes e legibilidade. Voce recebe uma pontuacao de 0 a 100 junto com recomendacoes especificas para melhorar cada area."
      }
    },
    {
      "@type": "Question",
      "name": "O que e uma boa pontuacao ATS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uma pontuacao de 80 ou mais e considerada forte. Pontuacoes entre 60–79 sao medianas e podem passar em alguns sistemas. Abaixo de 60 significa que seu curriculo provavelmente precisa de melhorias significativas para passar nos filtros ATS."
      }
    },
    {
      "@type": "Question",
      "name": "O otimizador ATS funciona para curriculos em varios idiomas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Nossa IA pode analisar curriculos escritos em ingles, espanhol, portugues e muitos outros idiomas. Os criterios de pontuacao sao universais em todos os idiomas."
      }
    },
    {
      "@type": "Question",
      "name": "Meu curriculo e armazenado apos a analise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nao. Seu curriculo e processado em tempo real e excluido de nossos servidores imediatamente apos a analise. Nunca armazenamos, compartilhamos ou vendemos seus dados pessoais."
      }
    }
  ]
}

export default function OtimizadorAtsPageBr() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderBr />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-white" />
              </div>
              <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4">PRO</span>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Otimizador ATS de Curriculo</h1>
              <p className="text-xl text-slate-300 mb-8">
                Envie seu curriculo e receba uma pontuacao de compatibilidade ATS instantanea. Nossa IA analisa formatacao, palavras-chave, secoes e estrutura — e diz exatamente o que corrigir.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Analise com IA</span></div>
                <div className="flex items-center gap-2"><Target className="h-4 w-4 text-orange-500" /><span>Pontuacao ATS 0-100</span></div>
                <div className="flex items-center gap-2"><Scan className="h-4 w-4 text-orange-500" /><span>Analise de Palavras-Chave</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* ATS Optimizer Interface */}
        <AtsOptimizerInterface />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Funciona</h2>
            <div className="space-y-4">
              {[
                { title: "Envie seu Curriculo", desc: "Envie seu curriculo em formato PDF. Arraste e solte ou clique para procurar." },
                { title: "A IA Analisa", desc: "Nossa IA escaneia seu curriculo para compatibilidade ATS — verificando formatacao, palavras-chave, secoes e estrutura." },
                { title: "Receba Resultados", desc: "Receba uma pontuacao ATS detalhada de 0 a 100 com recomendacoes praticas para melhorar seu curriculo." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{step.title}</h3>
                    <p className="text-slate-700 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why ATS Matters */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Por Que a Compatibilidade ATS Importa</h2>
            <div className="space-y-4 text-slate-600 text-lg">
              <p>
                Mais de 75% dos curriculos sao rejeitados por Sistemas de Rastreamento de Candidatos antes que um recrutador humano os veja. Esses filtros automaticos procuram palavras-chave especificas, padroes de formatacao e cabecalhos de secoes — e se seu curriculo nao corresponde, ele e descartado independentemente das suas qualificacoes.
              </p>
              <p>
                Isso significa que ate candidatos altamente qualificados podem perder entrevistas simplesmente porque seu curriculo nao estava formatado para software ATS. Nosso Otimizador ATS de Curriculo ajuda voce a identificar e corrigir esses problemas para que seu CV chegue a mesa do gerente de contratacao.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Para Quem E Isso?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Candidatos a Emprego", desc: "Otimize seu curriculo antes de se candidatar para maximizar suas chances de passar nos filtros ATS e conseguir entrevistas." },
                { title: "Mudanca de Carreira", desc: "Garanta que seu curriculo destaque habilidades transferiveis e use as palavras-chave certas para sua nova industria." },
                { title: "Recem-Formados", desc: "Acerte seu primeiro curriculo. Aprenda o que os sistemas ATS procuram e estruture seu CV para se destacar." },
                { title: "Recrutadores", desc: "Avalie rapidamente se os curriculos dos candidatos estao otimizados para ATS antes de envia-los as empresas clientes." },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-slate-600 text-sm">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                {
                  q: "O que e um ATS e por que ele importa para meu curriculo?",
                  a: "Um Sistema de Rastreamento de Candidatos (ATS) e um software usado por empregadores para filtrar e classificar curriculos antes que um humano os veja. Se seu curriculo nao e compativel com ATS, ele pode ser rejeitado automaticamente — mesmo que voce seja qualificado para a vaga.",
                },
                {
                  q: "Como funciona a pontuacao ATS?",
                  a: "Nossa IA analisa seu curriculo em multiplas dimensoes: compatibilidade de formatacao, relevancia de palavras-chave, estrutura de secoes e legibilidade. Voce recebe uma pontuacao de 0 a 100 junto com recomendacoes especificas para melhorar cada area.",
                },
                {
                  q: "O que e uma boa pontuacao ATS?",
                  a: "Uma pontuacao de 80 ou mais e considerada forte. Pontuacoes entre 60–79 sao medianas e podem passar em alguns sistemas. Abaixo de 60 significa que seu curriculo provavelmente precisa de melhorias significativas para passar nos filtros ATS.",
                },
                {
                  q: "O otimizador ATS funciona para curriculos em varios idiomas?",
                  a: "Sim. Nossa IA pode analisar curriculos escritos em ingles, espanhol, portugues e muitos outros idiomas. Os criterios de pontuacao sao universais em todos os idiomas.",
                },
                {
                  q: "Meu curriculo e armazenado apos a analise?",
                  a: "Nao. Seu curriculo e processado em tempo real e excluido de nossos servidores imediatamente apos a analise. Nunca armazenamos, compartilhamos ou vendemos seus dados pessoais.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl font-black mb-4">Pronto para Vencer o ATS?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Envie seu curriculo agora e receba uma pontuacao de compatibilidade ATS instantanea com recomendacoes praticas.
            </p>
            <Link
              href="#"
              onClick={undefined}
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              Otimize seu Curriculo
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "PDF para Word", href: "/br/pdf-para-word", icon: FileText, desc: "Converta PDF para Word editavel" },
                { name: "Unir PDF", href: "/br/unir-pdf", icon: Merge, desc: "Combine varios PDFs" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", icon: Zap, desc: "Reduza o tamanho do PDF" },
                { name: "Scanner OCR", href: "/br/scanner-ocr", icon: Scan, desc: "Extraia texto de digitalizacoes" },
                { name: "Word para PDF", href: "/br/word-para-pdf", icon: Type, desc: "Converta Word para PDF" },
                { name: "Proteger PDF", href: "/br/proteger-pdf", icon: Lock, desc: "Proteja seu PDF com senha" },
                { name: "URL para PDF", href: "/br/url-para-pdf", icon: Shield, desc: "Salve qualquer pagina como PDF" },
                { name: "Achatar PDF", href: "/br/achatar-pdf", icon: FileText, desc: "Achate campos de formulario" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="border border-orange-200 bg-orange-50 rounded-xl p-4 hover:border-orange-400 hover:bg-orange-100 transition-all text-center flex flex-col justify-center min-h-[80px]"
                >
                  <div className="font-bold text-orange-600 text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-500">{tool.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
