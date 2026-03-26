import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { AtsOptimizerInterface } from "@/components/ats-optimizer-interface"
import { Target, Zap, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Otimizador ATS de Currículo — Verifique sua Pontuação ATS e Corrija Problemas | PDF.it",
  description:
    "Envie seu currículo e receba uma pontuação de compatibilidade ATS instantânea. A IA do PDF.it analisa formatação, palavras-chave e estrutura — e mostra exatamente o que corrigir para que seu currículo passe nos sistemas de rastreamento de candidatos.",
  alternates: {
    languages: {
      en: "/ats-optimizer",
      es: "/es/optimizador-ats",
      pt: "/br/otimizador-ats",
    },
  },
}

const faqs = [
  {
    q: "O que é um ATS e por que ele importa?",
    a: "Um Sistema de Rastreamento de Candidatos (ATS) é um software que empregadores usam para filtrar currículos antes que um humano os veja. Mais de 75% dos currículos são rejeitados pelo ATS. Se seu currículo não tem a formatação correta ou faltam as palavras-chave certas, ele é descartado — mesmo que você seja qualificado.",
  },
  {
    q: "Como funciona a pontuação ATS?",
    a: "Nossa IA analisa seu currículo em compatibilidade de formatação, relevância de palavras-chave, estrutura de seções e legibilidade. Você recebe uma pontuação de 0 a 100 com recomendações específicas para melhorar cada área.",
  },
  {
    q: "O que é uma boa pontuação ATS?",
    a: "80+ é forte e provavelmente passará na maioria dos sistemas. 60-79 é médio e pode passar em alguns. Abaixo de 60 significa que melhorias significativas são necessárias para passar nos filtros ATS.",
  },
  {
    q: "Funciona com currículos em outros idiomas?",
    a: "Sim. Nossa IA analisa currículos em inglês, espanhol, português e muitos outros idiomas. Os critérios de pontuação são universais.",
  },
  {
    q: "Meu currículo é armazenado após a análise?",
    a: "Não. Seu currículo é processado em tempo real e excluído imediatamente após a análise. Nunca armazenamos, compartilhamos ou vendemos seus dados.",
  },
  {
    q: "O Otimizador ATS é gratuito?",
    a: "O Otimizador ATS é um recurso Pro a $7.99/mês. O Pro inclui análises ilimitadas de currículos mais todas as outras ferramentas PDF.",
  },
]

export default function OtimizadorAtsPageBr() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        {/* Hero */}
        <section
          className="text-white py-16 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%),
              #0E0F1E
            `,
          }}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
            <filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#heroGrain)" />
          </svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                  boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)",
                }}
              >
                <Target className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Otimizador ATS de Currículo</h1>
              <p className="text-xl text-slate-300 mb-8">
                Envie seu currículo e receba uma pontuação de compatibilidade ATS instantânea. Nossa IA analisa formatação, palavras-chave e estrutura — e mostra exatamente o que corrigir.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Análise com IA</span></div>
                <div className="flex items-center gap-2"><Target className="h-4 w-4 text-[#14D8C4]" /><span>Pontuação ATS 0-100</span></div>
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#14D8C4]" /><span>Correções Práticas</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Mais de 75% dos currículos são rejeitados por Sistemas de Rastreamento de Candidatos antes que um recrutador os veja. O Otimizador ATS do PDF.it envia seu currículo, executa análise com IA sobre formatação, palavras-chave e estrutura, e fornece uma pontuação prática de 0 a 100 com correções específicas.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Pontuação de compatibilidade ATS com IA</li>
              <li className="flex items-center gap-2">✓ Recomendações práticas para melhorar seu currículo</li>
              <li className="flex items-center gap-2">✓ Funciona com currículos em qualquer idioma</li>
              <li className="flex items-center gap-2">✓ Privacidade em primeiro lugar — arquivos excluídos após análise</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <AtsOptimizerInterface />

        {/* Feature Blocks */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Candidatos e Mudança de Carreira", desc: "Otimize seu currículo antes de se candidatar para maximizar suas chances. Seja mudando de setor ou mirando uma vaga específica, obtenha as palavras-chave e a formatação certas." },
                { title: "Análise com IA", desc: "Nossa IA verifica padrões de formatação, cabeçalhos de seções, densidade de palavras-chave e legibilidade — os mesmos critérios que o software ATS usa para filtrar candidatos." },
                { title: "Pontuação 0-100 com Correções", desc: "Receba uma pontuação clara com recomendações específicas e práticas. Saiba exatamente o que mudar para que seu currículo chegue à mesa do gerente de contratação." },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <div
                    className="rounded-[11px] p-6 h-full"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                        rgba(255, 255, 255, 0.07)
                      `,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Funciona</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Envie seu currículo", desc: "Arraste e solte seu currículo em PDF" },
                { num: "2", title: "A IA analisa seu currículo", desc: "Formatação, palavras-chave e estrutura verificados" },
                { num: "3", title: "Receba sua pontuação ATS", desc: "Pontuação 0-100 com correções práticas" },
              ].map((step) => (
                <div key={step.num} className="flex-1">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{
                      background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                      boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)",
                      border: "1px solid rgba(20,216,196,0.25)",
                    }}
                  >
                    <span className="text-[#14D8C4] font-black text-lg">{step.num}</span>
                  </div>
                  <p className="font-semibold text-slate-900">{step.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Criar Currículo", href: "/br/criar-curriculo", desc: "Crie um currículo do zero" },
                { name: "PDF para Word", href: "/br/pdf-para-word", desc: "Converta PDF para Word editável" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho do PDF" },
                { name: "Achatar PDF", href: "/br/achatar-pdf", desc: "Achate campos de formulário" },
              ].map((tool) => (
                <div
                  key={tool.href}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <Link
                    href={tool.href}
                    className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                        rgba(255, 255, 255, 0.07)
                      `,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%),
              radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%),
              radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Schema */}
        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a,
            },
          })),
        })}} />
      </main>
      <FooterBr />
    </div>
  )
}
