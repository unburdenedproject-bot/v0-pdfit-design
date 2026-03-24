import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Scissors, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extrair Paginas de PDF — Tire Paginas Especificas do Seu PDF | PDF.it",
  description:
    "Extraia paginas especificas de um PDF com PDF.it. Selecione as paginas que precisa e salve em um novo arquivo — rapido, gratis e online.",
  alternates: {
    languages: {
      en: "/extract-pages-from-pdf",
      es: "/es/extraer-paginas-de-pdf",
      pt: "/br/extrair-paginas-de-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como extrair paginas de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF para o PDF.it, selecione as paginas que deseja extrair (por numero ou intervalo) e clique em Extrair. As paginas selecionadas serao salvas em um novo PDF." }
    },
    {
      "@type": "Question",
      "name": "Qual a diferenca entre extrair e dividir paginas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Extrair paginas cria um novo PDF apenas com as paginas selecionadas. Dividir separa o PDF inteiro em multiplas partes. Use extrair quando precisa de paginas especificas; use dividir quando quer separar o documento todo." }
    },
    {
      "@type": "Question",
      "name": "Extrair paginas afeta a qualidade?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. As paginas sao extraidas do PDF original sem recodificar. Texto, imagens e formatacao permanecem identicos ao original." }
    },
    {
      "@type": "Question",
      "name": "Posso extrair paginas nao consecutivas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Voce pode selecionar paginas individuais (ex: 2, 5, 9) e intervalos (ex: 12-18) na mesma operacao. Todas as paginas selecionadas serao combinadas em um unico PDF." }
    },
    {
      "@type": "Question",
      "name": "E gratis extrair paginas de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Voce pode extrair paginas de PDFs de ate 25MB gratis. Usuarios Pro podem processar arquivos de ate 200MB." }
    },
    {
      "@type": "Question",
      "name": "Posso extrair paginas de um PDF no celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em navegadores moveis — selecione as paginas, extraia e baixe diretamente do seu celular." }
    }
  ]
}

export default function ExtrairPaginasDePdfPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extrair Paginas de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Tire exatamente as paginas que precisa de qualquer PDF. Selecione paginas individuais ou intervalos e salve em um novo documento — tudo online e gratis.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Selecao Precisa</span></div>
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
          processingMessage="Extraindo paginas do seu PDF..."
          successMessage="Paginas extraidas com sucesso!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              As vezes voce so precisa de algumas paginas de um PDF longo. O PDF.it permite extrair exatamente as paginas desejadas — por numero, intervalo ou combinacao — e salvar em um novo arquivo PDF limpo e organizado.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Extraia paginas individuais ou intervalos</li>
              <li>✓ Combine paginas nao consecutivas em um novo PDF</li>
              <li>✓ Sem perda de qualidade — paginas extraidas fielmente</li>
              <li>✓ Arquivo original permanece inalterado</li>
              <li>✓ Funciona em qualquer dispositivo com navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extraia Paginas de Contratos</h2>
              <p className="text-slate-600">
                Precisa enviar apenas as paginas de assinatura de um contrato? Extraia somente as paginas relevantes sem compartilhar o documento inteiro.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Tire Graficos e Tabelas de Relatorios</h2>
              <p className="text-slate-600">
                Extraia as paginas com graficos, tabelas ou dados especificos de relatorios extensos para incluir em apresentacoes ou outros documentos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Selecione Exercicios de Apostilas</h2>
              <p className="text-slate-600">
                Professores podem extrair exercicios especificos de apostilas para criar listas personalizadas para cada turma ou nivel.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Extrair Paginas de um PDF</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF para o PDF.it.",
                "Selecione as paginas ou intervalos que deseja extrair.",
                "Clique em Extrair e baixe o novo PDF com as paginas selecionadas.",
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
                { q: "Como extrair paginas de um PDF?", a: "Envie seu PDF para o PDF.it, selecione as paginas que deseja extrair (por numero ou intervalo) e clique em Extrair. As paginas selecionadas serao salvas em um novo PDF." },
                { q: "Qual a diferenca entre extrair e dividir paginas?", a: "Extrair paginas cria um novo PDF apenas com as paginas selecionadas. Dividir separa o PDF inteiro em multiplas partes. Use extrair quando precisa de paginas especificas; use dividir quando quer separar o documento todo." },
                { q: "Extrair paginas afeta a qualidade?", a: "Nao. As paginas sao extraidas do PDF original sem recodificar. Texto, imagens e formatacao permanecem identicos ao original." },
                { q: "Posso extrair paginas nao consecutivas?", a: "Sim. Voce pode selecionar paginas individuais (ex: 2, 5, 9) e intervalos (ex: 12-18) na mesma operacao. Todas as paginas selecionadas serao combinadas em um unico PDF." },
                { q: "E gratis extrair paginas de um PDF?", a: "Sim. Voce pode extrair paginas de PDFs de ate 25MB gratis. Usuarios Pro podem processar arquivos de ate 200MB." },
                { q: "Posso extrair paginas de um PDF no celular?", a: "Sim. O PDF.it funciona em navegadores moveis — selecione as paginas, extraia e baixe diretamente do seu celular." },
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
