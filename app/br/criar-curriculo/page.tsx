import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ResumeBuilderInterface } from "@/components/resume-builder-interface"
import { Sparkles, Zap, Shield, FileText, Merge, Lock, Scan, Target } from "lucide-react"

export const metadata = {
  title: "Criar um Curriculo Profissional com IA | OmnisPDF",
  description:
    "Crie um curriculo otimizado para ATS do zero. Preencha seus dados e deixe a IA escrever um curriculo polido e pronto para o trabalho que voce pode baixar em Word e editar a qualquer momento.",
  alternates: {
    languages: {
      en: "/create-resume",
      es: "/es/crear-curriculum",
      pt: "/br/criar-curriculo",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como funciona o criador de curriculo com IA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Voce preenche seus dados pessoais, experiencia profissional, educacao e habilidades. Nossa IA gera um curriculo profissional otimizado para ATS que voce pode baixar como documento Word e editar a qualquer momento."
      }
    },
    {
      "@type": "Question",
      "name": "Em qual formato o curriculo e baixado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Seu curriculo e baixado como arquivo Word (.docx), para que voce possa edita-lo facilmente no Microsoft Word, Google Docs ou qualquer processador de texto compativel."
      }
    },
    {
      "@type": "Question",
      "name": "O curriculo e compativel com ATS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. A IA gera curriculos com formatacao limpa, cabecalhos de secao apropriados e conteudo rico em palavras-chave projetado para passar nos Sistemas de Rastreamento de Candidatos usados pela maioria dos empregadores."
      }
    },
    {
      "@type": "Question",
      "name": "Tambem posso gerar uma carta de apresentacao?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Ha um recurso opcional de carta de apresentacao que gera uma carta personalizada com base nos dados do seu curriculo e na vaga que voce esta buscando."
      }
    },
    {
      "@type": "Question",
      "name": "Meus dados pessoais sao armazenados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nao. Suas informacoes sao processadas em tempo real para gerar o curriculo e nao sao armazenadas em nossos servidores. Nunca compartilhamos ou vendemos seus dados pessoais."
      }
    }
  ]
}

export default function CriarCurriculoPageBr() {
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
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4">PRO</span>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Criar um Curriculo Profissional</h1>
              <p className="text-xl text-slate-300 mb-8">
                Preencha seus dados e a IA cria um curriculo polido e pronto para o trabalho em segundos. Baixe em Word — edite quando quiser.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Potencializado por IA</span></div>
                <div className="flex items-center gap-2"><FileText className="h-4 w-4 text-orange-500" /><span>Formato Word</span></div>
                <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-orange-500" /><span>Opcao de Carta de Apresentacao</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Builder Interface */}
        <ResumeBuilderInterface />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Funciona</h2>
            <div className="space-y-4">
              {[
                { title: "Preencha Seus Dados", desc: "Insira suas informacoes de contato, experiencia profissional, educacao, habilidades e qualquer outra secao relevante." },
                { title: "A IA Escreve Seu Curriculo", desc: "Nossa IA pega suas informacoes e gera um curriculo profissional otimizado para ATS com formatacao limpa e linguagem impactante." },
                { title: "Baixe o Arquivo Word", desc: "Baixe seu curriculo finalizado como arquivo Word (.docx). Abra em qualquer processador de texto e personalize ainda mais se necessario." },
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

        {/* Why Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Por Que Criar um Curriculo do Zero e Dificil</h2>
            <div className="space-y-4 text-slate-600 text-lg">
              <p>
                Escrever um curriculo do zero e uma das partes mais estressantes de procurar emprego. Voce precisa escolher o formato certo, as palavras certas, destacar as habilidades certas e garantir que tudo pareca profissional — tudo isso enquanto compete com centenas de outros candidatos.
              </p>
              <p>
                A maioria das pessoas passa horas olhando para uma pagina em branco ou copiando modelos desatualizados. Nosso Criador de Curriculo com IA elimina essa luta. Basta preencher seus dados e deixar a inteligencia artificial cuidar da redacao. Voce recebe um curriculo polido e pronto para ATS em segundos — sem necessidade de habilidades de design ou experiencia em redacao.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Para Quem e Isso?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Primeiro Emprego", desc: "Crie seu primeiro curriculo com confianca. A IA cuida da formatacao, linguagem e estrutura para que voce foque nos seus pontos fortes." },
                { title: "Mudanca de Carreira", desc: "Fazendo transicao para uma nova area? A IA destaca habilidades transferiveis e adapta seu curriculo para sua industria alvo." },
                { title: "Freelancers Indo para o Corporativo", desc: "Traduza sua experiencia freelance em um curriculo corporativo que recrutadores e sistemas ATS entendam." },
                { title: "Profissionais Internacionais", desc: "Crie um curriculo que atenda aos padroes locais e use linguagem profissional em ingles, espanhol ou portugues — independente do seu idioma nativo." },
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
                  q: "Como funciona o criador de curriculo com IA?",
                  a: "Voce preenche seus dados pessoais, experiencia profissional, educacao e habilidades. Nossa IA gera um curriculo profissional otimizado para ATS que voce pode baixar como documento Word e editar a qualquer momento.",
                },
                {
                  q: "Em qual formato o curriculo e baixado?",
                  a: "Seu curriculo e baixado como arquivo Word (.docx), para que voce possa edita-lo facilmente no Microsoft Word, Google Docs ou qualquer processador de texto compativel.",
                },
                {
                  q: "O curriculo e compativel com ATS?",
                  a: "Sim. A IA gera curriculos com formatacao limpa, cabecalhos de secao apropriados e conteudo rico em palavras-chave projetado para passar nos Sistemas de Rastreamento de Candidatos usados pela maioria dos empregadores.",
                },
                {
                  q: "Tambem posso gerar uma carta de apresentacao?",
                  a: "Sim. Ha um recurso opcional de carta de apresentacao que gera uma carta personalizada com base nos dados do seu curriculo e na vaga que voce esta buscando.",
                },
                {
                  q: "Meus dados pessoais sao armazenados?",
                  a: "Nao. Suas informacoes sao processadas em tempo real para gerar o curriculo e nao sao armazenadas em nossos servidores. Nunca compartilhamos ou vendemos seus dados pessoais.",
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
            <h2 className="text-3xl font-black mb-4">Pronto para Criar seu Curriculo?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Preencha seus dados e deixe a IA criar um curriculo profissional e pronto para o trabalho em segundos.
            </p>
            <Link
              href="#"
              onClick={undefined}
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              Criar seu Curriculo
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Otimizador ATS", href: "/br/otimizador-ats", icon: Target, desc: "Pontue seu curriculo para ATS" },
                { name: "PDF para Word", href: "/br/pdf-para-word", icon: FileText, desc: "Converta PDF para Word editavel" },
                { name: "Unir PDF", href: "/br/unir-pdf", icon: Merge, desc: "Combine varios PDFs" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", icon: Zap, desc: "Reduza o tamanho do PDF" },
                { name: "Scanner OCR", href: "/br/scanner-ocr", icon: Scan, desc: "Extraia texto de digitalizacoes" },
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
