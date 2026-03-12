import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Scissors, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Dividir PDF por Paginas — Escolha Quais Paginas Separar | OmnisPDF",
  description:
    "Divida seu PDF por paginas especificas com OmnisPDF. Selecione exatamente quais paginas extrair ou separar — rapido, gratis e online.",
  alternates: {
    languages: {
      en: "/split-pdf-by-pages",
      es: "/es/dividir-pdf-por-paginas",
      pt: "/br/dividir-pdf-por-paginas",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como dividir um PDF por paginas especificas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF para o OmnisPDF, selecione as paginas ou intervalos que deseja separar (ex: 1-5, 8, 12-15) e clique em Dividir. Cada selecao gera um arquivo PDF separado." }
    },
    {
      "@type": "Question",
      "name": "Posso escolher paginas individuais para extrair?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Voce pode selecionar paginas individuais (ex: pagina 3, 7, 12) ou intervalos (ex: paginas 1-10) ou uma combinacao de ambos." }
    },
    {
      "@type": "Question",
      "name": "A divisao por paginas afeta a qualidade?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. As paginas sao extraidas do PDF original sem recodificar. Texto, imagens e formatacao permanecem identicos ao original." }
    },
    {
      "@type": "Question",
      "name": "E gratis dividir PDF por paginas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Voce pode dividir PDFs de ate 25MB gratis. Usuarios Pro podem dividir arquivos de ate 200MB e usar processamento em lote." }
    },
    {
      "@type": "Question",
      "name": "Posso dividir um PDF por paginas no celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O OmnisPDF funciona em qualquer navegador movel. Selecione as paginas, divida e baixe diretamente do seu celular." }
    },
    {
      "@type": "Question",
      "name": "Posso dividir cada pagina em um arquivo separado?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Selecione a opcao de dividir todas as paginas individualmente e cada pagina do seu PDF sera salva como um arquivo separado." }
    }
  ]
}

export default function DividirPdfPorPaginasPage() {
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
                <Scissors className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Dividir PDF por Paginas</h1>
              <p className="text-xl text-slate-300 mb-8">
                Escolha exatamente quais paginas separar do seu PDF. Selecione paginas individuais, intervalos ou divida cada pagina em um arquivo separado — tudo online e gratis.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Selecao por Paginas</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Excluidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Split PDF"
          outputFormat="PDF"
          processingMessage="Dividindo seu PDF por paginas..."
          successMessage="Seu PDF foi dividido por paginas!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Nem sempre voce precisa de todas as paginas de um PDF. Com o OmnisPDF, voce pode dividir seu documento selecionando exatamente quais paginas extrair — por numero, intervalo ou dividindo cada pagina individualmente.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Selecione paginas especificas (ex: 1, 3, 7)</li>
              <li>✓ Defina intervalos de paginas (ex: 1-10, 15-20)</li>
              <li>✓ Divida cada pagina em um arquivo individual</li>
              <li>✓ Sem perda de qualidade — paginas extraidas, nao recodificadas</li>
              <li>✓ Funciona em qualquer navegador moderno</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extraia Capitulos de um Livro</h2>
              <p className="text-slate-600">
                Precisa apenas de um capitulo especifico? Selecione as paginas do capitulo desejado e extraia em um PDF separado para leitura ou compartilhamento.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Separe Secoes de Relatorios</h2>
              <p className="text-slate-600">
                Divida relatorios extensos em secoes especificas — resumo executivo, dados financeiros, conclusoes — para distribuir a diferentes equipes.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Prepare Paginas para Impressao</h2>
              <p className="text-slate-600">
                Selecione apenas as paginas que precisa imprimir. Em vez de imprimir o documento inteiro, extraia somente as paginas relevantes.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Dividir PDF por Paginas</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF para o OmnisPDF.",
                "Selecione as paginas ou intervalos que deseja separar.",
                "Clique em Dividir PDF e baixe os arquivos resultantes.",
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

        {/* Related Tools */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Ferramenta padrao de divisao" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine PDFs em um" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho" },
                { name: "Girar PDF", href: "/br/girar-pdf", desc: "Corrija a orientacao" },
                { name: "Extrair Imagens", href: "/br/extrair-imagens-de-pdf", desc: "Extraia imagens do PDF" },
                { name: "PDF para JPG", href: "/br/pdf-para-jpg", desc: "Converta em imagens" },
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

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Como dividir um PDF por paginas especificas?", a: "Envie seu PDF para o OmnisPDF, selecione as paginas ou intervalos que deseja separar (ex: 1-5, 8, 12-15) e clique em Dividir. Cada selecao gera um arquivo PDF separado." },
                { q: "Posso escolher paginas individuais para extrair?", a: "Sim. Voce pode selecionar paginas individuais (ex: pagina 3, 7, 12) ou intervalos (ex: paginas 1-10) ou uma combinacao de ambos." },
                { q: "A divisao por paginas afeta a qualidade?", a: "Nao. As paginas sao extraidas do PDF original sem recodificar. Texto, imagens e formatacao permanecem identicos ao original." },
                { q: "E gratis dividir PDF por paginas?", a: "Sim. Voce pode dividir PDFs de ate 25MB gratis. Usuarios Pro podem dividir arquivos de ate 200MB e usar processamento em lote." },
                { q: "Posso dividir um PDF por paginas no celular?", a: "Sim. O OmnisPDF funciona em qualquer navegador movel. Selecione as paginas, divida e baixe diretamente do seu celular." },
                { q: "Posso dividir cada pagina em um arquivo separado?", a: "Sim. Selecione a opcao de dividir todas as paginas individualmente e cada pagina do seu PDF sera salva como um arquivo separado." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
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
