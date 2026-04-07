import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Merge, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Unir PDF no iPhone (Sem Aplicativo) | PDF.it",
  description:
    "Aprenda como unir PDFs diretamente no iPhone usando o navegador. Combine documentos sem instalar nenhum aplicativo — online, gratis.",
  keywords: "unir pdf iphone, combinar pdf iphone, juntar pdf celular, mesclar pdf ios, unir pdf sem app",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como unir PDFs no iPhone sem aplicativo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Abra o Safari no iPhone, acesse pdf.it.com/br/unir-pdf, envie seus PDFs tocando na area de upload, organize a ordem e toque em Unir. Nenhum aplicativo necessario." }
    },
    {
      "@type": "Question",
      "name": "Funciona no Android tambem?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em qualquer navegador movel — iPhone, Android, iPad ou tablet. O processo e identico em todos os dispositivos." }
    },
    {
      "@type": "Question",
      "name": "Onde fica o PDF combinado depois de baixar?",
      "acceptedAnswer": { "@type": "Answer", "text": "No iPhone, o PDF baixado vai para o app Arquivos, na pasta Downloads. Voce pode abri-lo, compartilhar por email ou WhatsApp diretamente de la." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Unir PDF no iPhone",
  "description": "Combine varios PDFs no iPhone usando apenas o navegador.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Abra o PDF.it no Safari",
      "text": "No iPhone, abra o Safari e acesse pdf.it.com/br/unir-pdf."
    },
    {
      "@type": "HowToStep",
      "name": "Envie seus PDFs",
      "text": "Toque na area de upload e selecione os PDFs do app Arquivos, iCloud ou outro local."
    },
    {
      "@type": "HowToStep",
      "name": "Organize e baixe",
      "text": "Arraste para reorganizar, toque em Unir PDF e baixe o resultado."
    }
  ]
}

export default function UnirPDFNoIPhonePage() {
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
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Unir PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Unir PDF no iPhone</h1>
              <p className="text-xl text-slate-300">
                Precisa combinar PDFs diretamente no iPhone? Nao precisa baixar nenhum app — faca tudo pelo navegador em segundos.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <Merge className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">No iPhone agora? Va direto para a ferramenta.</p>
            </div>
            <Link
              href="/br/unir-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Unir PDF Agora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Usar o Navegador em Vez de um App?</h2>
              <p className="text-slate-600 mb-4">
                Existem vantagens claras em usar o PDF.it no navegador:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Sem instalacao</strong> — nao ocupa espaco no iPhone.</li>
                <li>&#10003; <strong>Sem atualizacoes</strong> — sempre a versao mais recente.</li>
                <li>&#10003; <strong>Sem assinatura</strong> — muitos apps cobram mensal para funcoes basicas.</li>
                <li>&#10003; <strong>Funciona em qualquer dispositivo</strong> — o mesmo link funciona no iPhone, iPad, Android ou computador.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Unir PDF no iPhone (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Abra o Safari e acesse o PDF.it",
                    desc: "No iPhone, abra o Safari (ou Chrome) e acesse pdf.it.com/br/unir-pdf. A interface e totalmente otimizada para telas moveis.",
                  },
                  {
                    title: "Toque para enviar seus PDFs",
                    desc: "Toque na area de upload. O iPhone vai mostrar opcoes para selecionar arquivos do app Arquivos, iCloud Drive, Google Drive ou outro local. Selecione todos os PDFs que deseja unir.",
                  },
                  {
                    title: "Organize a ordem",
                    desc: "Os PDFs aparecerao na tela. Toque e segure para arrastar e reorganizar na ordem desejada.",
                  },
                  {
                    title: "Una e baixe",
                    desc: "Toque em Unir PDF. Quando terminar, toque em Baixar. O PDF combinado ira para a pasta Downloads do app Arquivos.",
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
                <li>&#10003; <strong>Salve o site na tela inicial</strong> — no Safari, toque em Compartilhar &gt; Adicionar a Tela de Inicio para acesso rapido.</li>
                <li>&#10003; <strong>Compartilhe diretamente</strong> — apos baixar, abra o PDF no app Arquivos e use Compartilhar para enviar por email, WhatsApp ou AirDrop.</li>
                <li>&#10003; <strong>Comprima se necessario</strong> — se o resultado for grande, use <Link href="/br/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> no mesmo navegador.</li>
                <li>&#10003; <strong>Funciona offline?</strong> Nao, voce precisa de conexao com internet para processar os PDFs.</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Pronto para Unir PDFs no iPhone?</h2>
            <p className="text-slate-300 mb-6">Abra no Safari e combine seus documentos em segundos — gratis, sem app.</p>
            <Link
              href="/br/unir-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Merge className="h-5 w-5" /> Unir PDF Agora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Unir Arquivos PDF", href: "/br/aprender/como-unir-arquivos-pdf" },
                { title: "Unir PDFs em Ordem", href: "/br/aprender/unir-pdfs-em-ordem" },
                { title: "Unir PDFs Digitalizados", href: "/br/aprender/unir-pdfs-digitalizados" },
                { title: "Combinar PDFs para Envio", href: "/br/aprender/combinar-pdfs-para-envio" },
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
                { q: "Como unir PDFs no iPhone sem aplicativo?", a: "Abra o Safari no iPhone, acesse pdf.it.com/br/unir-pdf, envie seus PDFs tocando na area de upload, organize a ordem e toque em Unir. Nenhum aplicativo necessario." },
                { q: "Funciona no Android tambem?", a: "Sim. O PDF.it funciona em qualquer navegador movel — iPhone, Android, iPad ou tablet. O processo e identico em todos os dispositivos." },
                { q: "Onde fica o PDF combinado depois de baixar?", a: "No iPhone, o PDF baixado vai para o app Arquivos, na pasta Downloads. Voce pode abri-lo, compartilhar por email ou WhatsApp diretamente de la." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}">
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
