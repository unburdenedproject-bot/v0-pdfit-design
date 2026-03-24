import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { UrlPdfInterface } from "@/components/url-pdf-interface"
import { Globe, Zap, Shield, FileText, Merge, Scan, Lock, Type } from "lucide-react"

export const metadata = {
  title: "Converter URL para PDF Online — Salve Qualquer Pagina Web | PDF.it",
  description:
    "Converta qualquer pagina web em um PDF de alta qualidade. Digite uma URL e baixe um PDF perfeitamente formatado. Tamanho, orientacao e margens personalizaveis. Funcao Pro do PDF.it.",
  alternates: {
    canonical: "https://pdf.it.com/br/url-para-pdf",
    languages: {
      en: "https://pdf.it.com/url-to-pdf",
      es: "https://pdf.it.com/es/url-a-pdf",
      pt: "https://pdf.it.com/br/url-para-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como converter uma URL para PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cole a URL da pagina web no PDF.it, escolha o tamanho de pagina e orientacao desejados, e clique em Converter. O PDF sera gerado em segundos e estara pronto para download.",
      },
    },
    {
      "@type": "Question",
      name: "Posso personalizar o layout do PDF gerado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Voce pode escolher o tamanho da pagina (A4, Letter, Legal), orientacao (retrato ou paisagem) e ajustar as margens antes de converter.",
      },
    },
    {
      "@type": "Question",
      name: "A conversao de URL para PDF e gratuita?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A ferramenta URL para PDF e uma funcao Pro do PDF.it, disponivel no plano Pro a $7,99/mes. O plano Pro inclui conversoes ilimitadas e acesso a todas as ferramentas avancadas.",
      },
    },
    {
      "@type": "Question",
      name: "Quais tipos de paginas web posso converter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Voce pode converter qualquer pagina web publica — artigos, blogs, documentacao, portfolios, relatorios e muito mais. Paginas protegidas por login nao podem ser acessadas.",
      },
    },
    {
      "@type": "Question",
      name: "Meus dados ficam seguros ao converter uma URL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Todas as transferencias sao criptografadas com SSL e os arquivos gerados sao removidos apos sua sessao. Nao armazenamos nem compartilhamos seus documentos.",
      },
    },
  ],
}

export default function UrlParaPdfPageBr() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderBr />
      <main>
        {/* Hero */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl lg:text-5xl font-black">Converter URL para PDF</h1>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <p className="text-xl text-slate-300 mb-8">
                Converta qualquer pagina web em um PDF de alta qualidade. Cole a URL, personalize o layout e baixe um PDF perfeitamente formatado em segundos.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Globe className="h-4 w-4 text-orange-500" /><span>Qualquer Pagina</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Layout Personalizado</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Download Instantaneo</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* URL to PDF Interface */}
        <UrlPdfInterface />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Funciona</h2>
            <div className="space-y-4">
              {[
                "Cole a URL da pagina web que deseja converter no campo acima.",
                "Escolha o tamanho da pagina, orientacao e margens desejados.",
                "Clique em Converter e baixe seu PDF pronto em segundos.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Use URL to PDF */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <h2 className="text-2xl font-black text-slate-900 mb-3 text-center">Por Que Converter URL para PDF?</h2>
            <div>
              <h3 className="text-xl font-black text-slate-900 mb-3">Salve Paginas Web para Leitura Offline</h3>
              <p className="text-slate-600">
                Paginas web podem ser alteradas ou removidas a qualquer momento. Converter para PDF garante que voce tenha uma copia permanente e formatada do conteudo, acessivel mesmo sem internet.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900 mb-3">Compartilhe Conteudo Web de Forma Profissional</h3>
              <p className="text-slate-600">
                Em vez de enviar links que podem quebrar, envie um PDF limpo e bem formatado. Ideal para relatorios, propostas e documentacao que precisa parecer profissional.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900 mb-3">Arquive Informacoes Importantes</h3>
              <p className="text-slate-600">
                Mantenha registros permanentes de artigos, pesquisas, receitas, tutoriais e qualquer conteudo web que voce precisa preservar. O PDF mantem o layout original da pagina.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Pesquisa e Estudo",
                  desc: "Salve artigos academicos, documentacao tecnica e tutoriais como PDFs para referencia offline. Perfeito para estudantes e pesquisadores.",
                },
                {
                  title: "Marketing e Vendas",
                  desc: "Converta paginas de produtos, landing pages e depoimentos em PDFs para incluir em propostas comerciais e materiais de vendas.",
                },
                {
                  title: "Documentacao Legal",
                  desc: "Capture paginas web como prova documental — termos de servico, politicas de privacidade e publicacoes online com data e hora preservadas.",
                },
                {
                  title: "Gestao de Projetos",
                  desc: "Salve especificacoes, requisitos e briefings publicados online como PDFs para distribuir a equipe e manter todos alinhados.",
                },
              ].map((useCase, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{useCase.title}</h3>
                  <p className="text-slate-600 text-sm">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Como converter uma URL para PDF?", a: "Cole a URL da pagina web no PDF.it, escolha o tamanho de pagina e orientacao desejados, e clique em Converter. O PDF sera gerado em segundos e estara pronto para download." },
                { q: "Posso personalizar o layout do PDF gerado?", a: "Sim. Voce pode escolher o tamanho da pagina (A4, Letter, Legal), orientacao (retrato ou paisagem) e ajustar as margens antes de converter." },
                { q: "A conversao de URL para PDF e gratuita?", a: "A ferramenta URL para PDF e uma funcao Pro do PDF.it, disponivel no plano Pro a $7,99/mes. O plano Pro inclui conversoes ilimitadas e acesso a todas as ferramentas avancadas." },
                { q: "Quais tipos de paginas web posso converter?", a: "Voce pode converter qualquer pagina web publica — artigos, blogs, documentacao, portfolios, relatorios e muito mais. Paginas protegidas por login nao podem ser acessadas." },
                { q: "Meus dados ficam seguros ao converter uma URL?", a: "Sim. Todas as transferencias sao criptografadas com SSL e os arquivos gerados sao removidos apos sua sessao. Nao armazenamos nem compartilhamos seus documentos." },
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
        <section className="py-16 bg-[#191B4D] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-black mb-4">Pronto para Converter URLs em PDFs?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Atualize para o plano Pro e converta qualquer pagina web em um PDF de alta qualidade com layout personalizado, sem limites.
            </p>
            <Link
              href="/br/precos"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl text-lg transition-colors"
            >
              Comece Agora
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "PDF para JPG", href: "/br/pdf-para-jpg", icon: FileText, desc: "Converta paginas PDF em imagens" },
                { name: "Unir PDF", href: "/br/unir-pdf", icon: Merge, desc: "Combine varios PDFs em um" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", icon: Zap, desc: "Reduza o tamanho do arquivo" },
                { name: "Scanner OCR", href: "/br/scanner-ocr", icon: Scan, desc: "Extraia texto de escaneamentos" },
                { name: "Word para PDF", href: "/br/word-para-pdf", icon: Type, desc: "Converta documentos Word" },
                { name: "Proteger PDF", href: "/br/proteger-pdf", icon: Lock, desc: "Adicione senha ao PDF" },
                { name: "Dividir PDF", href: "/br/dividir-pdf", icon: FileText, desc: "Separe paginas do PDF" },
                { name: "Achatar PDF", href: "/br/achatar-pdf", icon: Shield, desc: "Bloqueie formularios e camadas" },
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
