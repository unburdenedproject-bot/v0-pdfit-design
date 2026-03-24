import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { TableExtractionInterface } from "@/components/table-extraction-interface"
import { Table2, Zap, Shield, FileText, Lock, Layers, Merge, Repeat, ArrowLeftRight, PenTool } from "lucide-react"

export const metadata = {
  title: "Extrair Tabelas de PDF para Excel Online | PDF.it",
  description:
    "Extraia tabelas de documentos PDF e converta-as em planilhas Excel. Detecte e exporte tabelas automaticamente — rapido e preciso. Funcao Business do PDF.it.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que e a Extracao de Tabelas?",
      "acceptedAnswer": { "@type": "Answer", "text": "A Extracao de Tabelas detecta automaticamente tabelas dentro de documentos PDF e as converte em planilhas Excel (.xlsx) editaveis. Funciona com relatorios financeiros, faturas, dados cientificos e qualquer PDF que contenha dados tabulados." }
    },
    {
      "@type": "Question",
      "name": "Quais tipos de tabelas podem ser extraidos?",
      "acceptedAnswer": { "@type": "Answer", "text": "A ferramenta pode extrair tabelas com bordas visiveis, tabelas sem bordas (baseadas em alinhamento), tabelas de varias paginas e tabelas com cabecalhos mesclados. Funciona melhor com tabelas estruturadas e limpas." }
    },
    {
      "@type": "Question",
      "name": "A Extracao de Tabelas e gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "A Extracao de Tabelas esta disponivel como funcao do plano Business por $13,99/mes. Inclui extracoes ilimitadas junto com todas as outras ferramentas Business como Automacao de Fluxos, Comparar PDF, Assinatura Eletronica e Redacao de PDF." }
    },
    {
      "@type": "Question",
      "name": "Posso extrair tabelas de PDFs escaneados?",
      "acceptedAnswer": { "@type": "Answer", "text": "Para melhores resultados, primeiro execute OCR no PDF escaneado usando nossa ferramenta Scanner OCR, depois use a Extracao de Tabelas no PDF com texto reconhecido." }
    },
    {
      "@type": "Question",
      "name": "Em qual formato o resultado e exportado?",
      "acceptedAnswer": { "@type": "Answer", "text": "As tabelas sao exportadas como arquivo Excel (.xlsx) que pode ser aberto no Microsoft Excel, Google Sheets, LibreOffice Calc e outros aplicativos de planilha." }
    },
  ]
}

export default function ExtracaoTabelasPagePt() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema-pt"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderBr />
      <main>
        {/* Hero */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Table2 className="h-10 w-10 text-white" />
              </div>
              <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                Business
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extracao de Tabelas de PDF</h1>
              <p className="text-xl text-slate-300 mb-4">
                Extraia tabelas de documentos PDF e converta-as em planilhas Excel editaveis. Detecte automaticamente dados tabulados em relatorios, faturas, demonstracoes financeiras e documentos cientificos.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                Pare de copiar dados manualmente — deixe o PDF.it extrair suas tabelas com precisao.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Table2 className="h-4 w-4 text-indigo-400" /><span>Deteccao Automatica</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-indigo-400" /><span>Exportacao para Excel</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-indigo-400" /><span>Arquivos Removidos Apos a Sessao</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Table Extraction Interface */}
        <TableExtractionInterface />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Como Funciona</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Envie seu PDF", desc: "Arraste e solte seu PDF contendo tabelas na zona de upload." },
                { step: "2", title: "Deteccao Automatica", desc: "O PDF.it detecta automaticamente todas as tabelas no documento usando reconhecimento com inteligencia artificial." },
                { step: "3", title: "Baixe o Excel", desc: "Baixe as tabelas extraidas como arquivo Excel (.xlsx) pronto para edicao e analise." },
              ].map((item) => (
                <div key={item.step} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                  <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-2">{item.title}</div>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Use */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4 text-center">Por que Extrair Tabelas de PDFs?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-600 text-center">
                PDFs sao otimos para compartilhar documentos, mas pessimos para trabalhar com dados. Quando voce precisa de numeros de um relatorio financeiro, itens de uma fatura ou dados de pesquisa, copiar celula por celula e lento e propenso a erros.
              </p>
              <p className="text-slate-600 text-center">
                A Extracao de Tabelas usa Google Document AI para detectar e extrair tabelas automaticamente de qualquer PDF, entregando planilhas Excel limpas prontas para analise, formulas e graficos.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comuns</h2>
            <div className="space-y-10">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Relatorios Financeiros</h3>
                <p className="text-slate-600">
                  Extraia demonstracoes financeiras, balancos patrimoniais e relatorios de resultados de PDFs diretamente para Excel para analise e modelagem financeira.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Faturas e Pedidos</h3>
                <p className="text-slate-600">
                  Extraia itens de linha, quantidades, precos e totais de faturas em PDF para importar em sistemas contabeis ou planilhas de controle.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Dados Cientificos e de Pesquisa</h3>
                <p className="text-slate-600">
                  Extraia tabelas de dados de artigos cientificos, relatorios de pesquisa e publicacoes academicas para reutilizacao em suas proprias analises.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Documentos Governamentais e Regulatorios</h3>
                <p className="text-slate-600">
                  Extraia dados estatisticos, tabelas de conformidade e cifras regulatorias de PDFs governamentais em planilhas estruturadas para relatorios e analise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "O que e a Extracao de Tabelas?", a: "Detecta automaticamente tabelas dentro de PDFs e as converte em planilhas Excel editaveis. Funciona com relatorios financeiros, faturas, dados cientificos e qualquer PDF com dados tabulados." },
                { q: "Quais tipos de tabelas podem ser extraidos?", a: "Tabelas com bordas visiveis, tabelas sem bordas, tabelas de varias paginas e tabelas com cabecalhos mesclados. Funciona melhor com tabelas estruturadas e limpas." },
                { q: "E gratis?", a: "A Extracao de Tabelas esta disponivel como funcao do plano Business por $13,99/mes." },
                { q: "Posso extrair tabelas de PDFs escaneados?", a: "Para melhores resultados, primeiro execute OCR usando nossa ferramenta Scanner OCR, depois use a Extracao de Tabelas no PDF processado." },
                { q: "Em qual formato e exportado?", a: "As tabelas sao exportadas como arquivo Excel (.xlsx) compativel com Microsoft Excel, Google Sheets e LibreOffice Calc." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#191B4D] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Transforme Tabelas de PDF em Planilhas</h2>
            <p className="text-slate-300 text-lg mb-8">
              Extraia qualquer tabela de qualquer PDF e obtenha um arquivo Excel limpo e formatado em segundos. Sem copiar manualmente.
            </p>
            <Link
              href="/br/extracao-de-tabelas"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Comecar a Extrair
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Mais Ferramentas PDF</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Comparar PDF", desc: "Compare dois PDFs lado a lado.", href: "/br/comparar-pdf", icon: ArrowLeftRight },
                { name: "Assinatura Eletronica", desc: "Adicione assinaturas a PDFs.", href: "/br/assinatura-eletronica", icon: PenTool },
                { name: "Redacao PDF", desc: "Remova informacoes sensiveis.", href: "/br/redacao-pdf", icon: Shield },
                { name: "Automacao", desc: "Encadeie ferramentas PDF em um fluxo.", href: "/br/automacao", icon: Repeat },
                { name: "Proteger PDF", desc: "Adicione protecao com senha.", href: "/br/proteger-pdf", icon: Lock },
                { name: "Achatar PDF", desc: "Bloqueie campos e anotacoes.", href: "/br/achatar-pdf", icon: Layers },
                { name: "Comprimir PDF", desc: "Reduza o tamanho sem perder qualidade.", href: "/br/comprimir-pdf", icon: FileText },
                { name: "Unir PDF", desc: "Combine varios PDFs em um so.", href: "/br/unir-pdf", icon: Merge },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col items-center text-center rounded-xl border border-gray-200 bg-white p-4 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    <tool.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-1">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{tool.desc}</p>
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
