import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { RotateCw, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Girar PDF no iPhone (Sem Aplicativo) | PDF.it",
  description:
    "Aprenda como girar paginas de um PDF diretamente no iPhone usando o navegador. Corrija a orientacao sem instalar nenhum app — online, gratis.",
  keywords: "girar pdf iphone, rotacionar pdf iphone, girar pdf celular, corrigir pdf iphone, girar pdf ios sem app",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como girar um PDF no iPhone sem aplicativo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Abra o Safari no iPhone, acesse pdf.it.com/br/girar-pdf, envie o PDF, selecione as paginas e a rotacao desejada, toque em Girar e baixe o resultado. Nenhum app necessario." }
    },
    {
      "@type": "Question",
      "name": "Funciona no Android tambem?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em qualquer navegador movel. O processo e identico em iPhone, Android e iPad." }
    },
    {
      "@type": "Question",
      "name": "Onde fica o PDF girado depois de baixar?",
      "acceptedAnswer": { "@type": "Answer", "text": "No iPhone, o PDF vai para a pasta Downloads no app Arquivos. De la voce pode abrir, compartilhar por email ou WhatsApp." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Girar PDF no iPhone",
  "description": "Corrija a orientacao de paginas PDF usando apenas o navegador do iPhone.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Abra o PDF.it no Safari",
      "text": "No iPhone, abra o Safari e acesse pdf.it.com/br/girar-pdf."
    },
    {
      "@type": "HowToStep",
      "name": "Envie e gire",
      "text": "Toque na area de upload, selecione o PDF, escolha as paginas e a rotacao."
    },
    {
      "@type": "HowToStep",
      "name": "Baixe o resultado",
      "text": "Toque em Girar PDF e baixe o arquivo corrigido."
    }
  ]
}

export default function GirarPDFNoIPhonePage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Girar PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Girar PDF no iPhone</h1>
              <p className="text-xl text-slate-300">
                Recebeu um PDF com paginas na orientacao errada no iPhone? Corrija diretamente pelo navegador, sem instalar nenhum aplicativo.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <RotateCw className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">No iPhone agora? Va direto para a ferramenta.</p>
            </div>
            <Link
              href="/br/girar-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Girar PDF Agora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Usar o Navegador em Vez de um App?</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Sem instalacao</strong> — nao ocupa espaco no iPhone.</li>
                <li>&#10003; <strong>Sem assinatura</strong> — muitos apps cobram mensalidade para funcoes basicas como girar paginas.</li>
                <li>&#10003; <strong>Rapido e simples</strong> — abra o Safari, envie, gire e baixe. Pronto.</li>
                <li>&#10003; <strong>Mesma ferramenta em todos os dispositivos</strong> — funciona identico no iPhone, iPad, Android e computador.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Girar no iPhone (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Abra o Safari e acesse o PDF.it",
                    desc: "No iPhone, abra o Safari (ou Chrome) e acesse pdf.it.com/br/girar-pdf. A interface e totalmente adaptada para telas moveis.",
                  },
                  {
                    title: "Envie o PDF",
                    desc: "Toque na area de upload e selecione o PDF do app Arquivos, iCloud Drive, email ou qualquer outro local no iPhone.",
                  },
                  {
                    title: "Selecione paginas e rotacao",
                    desc: "Os thumbnails mostrarao cada pagina. Toque nas paginas que precisa girar e selecione a direcao (90° horario, 90° anti-horario ou 180°).",
                  },
                  {
                    title: "Gire e baixe",
                    desc: "Toque em Girar PDF. O resultado ira para a pasta Downloads do app Arquivos. De la, compartilhe por email, WhatsApp ou AirDrop.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para iPhone</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Salve na tela inicial:</strong> no Safari, toque Compartilhar &gt; Adicionar a Tela de Inicio para acesso rapido.</li>
                <li>&#10003; <strong>Girou errado?</strong> Basta enviar novamente e girar na direcao oposta.</li>
                <li>&#10003; <strong>Depois de girar</strong>, voce pode <Link href="/br/comprimir-pdf" className="text-[#14D8C4] hover:underline">comprimir</Link> ou <Link href="/br/unir-pdf" className="text-[#14D8C4] hover:underline">unir</Link> com outros PDFs no mesmo navegador.</li>
                <li>&#10003; <strong>Funciona offline?</strong> Nao, voce precisa de internet para processar o PDF.</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Pronto para Girar no iPhone?</h2>
            <p className="text-slate-300 mb-6">Abra no Safari e corrija a orientacao em segundos — gratis, sem app.</p>
            <Link
              href="/br/girar-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <RotateCw className="h-5 w-5" /> Girar PDF Agora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Girar PDF", href: "/br/aprender/como-girar-pdf" },
                { title: "Girar PDF Digitalizado", href: "/br/aprender/girar-pdf-digitalizado" },
                { title: "Corrigir PDF de Cabeca para Baixo", href: "/br/aprender/corrigir-pdf-de-cabeca-para-baixo" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Como girar um PDF no iPhone sem aplicativo?", a: "Abra o Safari, acesse pdf.it.com/br/girar-pdf, envie o PDF, selecione as paginas e a rotacao desejada, toque em Girar e baixe o resultado." },
                { q: "Funciona no Android tambem?", a: "Sim. O PDF.it funciona em qualquer navegador movel. O processo e identico em iPhone, Android e iPad." },
                { q: "Onde fica o PDF girado depois de baixar?", a: "No iPhone, o PDF vai para a pasta Downloads no app Arquivos. De la voce pode abrir, compartilhar por email ou WhatsApp." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
