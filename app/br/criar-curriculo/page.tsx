import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ResumeBuilderInterface } from "@/components/resume-builder-interface"
import { Sparkles, Zap, FileText, Target } from "lucide-react"

export const metadata = {
  title: "Criador de Curriculo com IA — Crie um Curriculo Profissional Online | PDF.it",
  description:
    "Crie um curriculo polido e otimizado para ATS do zero com IA. Insira seus dados, obtenha um curriculo escrito profissionalmente e baixe como arquivo Word editavel. Carta de apresentacao opcional incluida.",
  alternates: {
    languages: {
      en: "/create-resume",
      es: "/es/crear-curriculum",
      pt: "/br/criar-curriculo",
    },
  },
}

const faqs = [
  {
    q: "Como funciona o criador de curriculo com IA?",
    a: "Insira suas informacoes de contato, experiencia profissional, educacao e habilidades. Nossa IA gera um curriculo escrito profissionalmente e otimizado para ATS que voce pode baixar como arquivo Word (.docx) e editar a qualquer momento.",
  },
  {
    q: "Em qual formato o curriculo e baixado?",
    a: "Em formato Word (.docx), para que voce possa edita-lo no Microsoft Word, Google Docs ou qualquer processador de texto compativel. Isso te da controle total sobre o resultado final.",
  },
  {
    q: "O curriculo e compativel com ATS?",
    a: "Sim. A IA utiliza formatacao limpa, cabecalhos de secao apropriados (Experiencia, Educacao, Habilidades) e conteudo rico em palavras-chave projetado para passar nos Sistemas de Rastreamento de Candidatos usados pela maioria dos empregadores.",
  },
  {
    q: "Tambem posso gerar uma carta de apresentacao?",
    a: "Sim. Ha um recurso opcional que cria uma carta de apresentacao personalizada com base nos dados do seu curriculo e na vaga que voce esta buscando.",
  },
  {
    q: "Meus dados pessoais sao armazenados?",
    a: "Nao. Suas informacoes sao processadas em tempo real para gerar o curriculo e nao sao armazenadas em nossos servidores. Nunca compartilhamos ou vendemos seus dados pessoais.",
  },
  {
    q: "O Criador de Curriculo e gratuito?",
    a: "Criar Curriculo e um recurso Pro a $7.99/mes. O Pro inclui geracao ilimitada de curriculos mais todas as outras ferramentas PDF.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a,
    },
  })),
}

export default function CriarCurriculoPageBr() {
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
                <Sparkles className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Criador de Curriculo com IA</h1>
              <p className="text-xl text-slate-300 mb-8">
                Preencha seus dados e a IA cria um curriculo polido e pronto para ATS em segundos. Baixe como arquivo Word editavel — personalize quando quiser.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Potencializado por IA</span></div>
                <div className="flex items-center gap-2"><FileText className="h-4 w-4 text-[#14D8C4]" /><span>Formato Word</span></div>
                <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#14D8C4]" /><span>Carta de Apresentacao</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Escrever um curriculo do zero e estressante — escolher o formato certo, as palavras certas e a estrutura enquanto compete com centenas de candidatos. O Criador de Curriculo com IA do PDF.it elimina essa luta. Preencha seus dados e obtenha um curriculo polido e pronto para ATS em segundos, baixado como arquivo Word editavel.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ A IA escreve seu curriculo a partir dos seus dados</li>
              <li className="flex items-center gap-2">✓ Formatacao e palavras-chave otimizadas para ATS</li>
              <li className="flex items-center gap-2">✓ Baixe como arquivo Word (.docx) editavel</li>
              <li className="flex items-center gap-2">✓ Geracao opcional de carta de apresentacao</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <ResumeBuilderInterface />

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
                { title: "Primeiro Emprego e Mudanca de Carreira", desc: "Criando seu primeiro curriculo ou mudando de area? A IA cuida da formatacao, linguagem e estrutura. Destaca habilidades transferiveis e adapta o conteudo para sua vaga alvo." },
                { title: "Redacao Profissional com IA", desc: "Nossa IA gera topicos polidos, verbos de acao fortes e descricoes ricas em palavras-chave que correspondem ao que recrutadores e sistemas ATS procuram." },
                { title: "Arquivo Word Editavel + Carta", desc: "Baixe seu curriculo como arquivo Word que voce pode personalizar ainda mais. Opcionalmente gere uma carta de apresentacao personalizada baseada no seu curriculo e vaga alvo." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Criar seu Curriculo</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Preencha seus dados", desc: "Contato, experiencia, educacao, habilidades" },
                { num: "2", title: "A IA escreve seu curriculo", desc: "Escrito profissionalmente e otimizado para ATS" },
                { num: "3", title: "Baixe o arquivo Word", desc: "Edite no Word, Google Docs ou qualquer editor" },
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
                { name: "Otimizador ATS", href: "/br/otimizador-ats", desc: "Pontue seu curriculo para ATS" },
                { name: "PDF para Word", href: "/br/pdf-para-word", desc: "Converta PDF para Word editavel" },
                { name: "Word para PDF", href: "/br/word-para-pdf", desc: "Converta Word para PDF" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho do PDF" },
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
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </main>
      <FooterBr />
    </div>
  )
}
