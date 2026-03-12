import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { Table2, Zap, Shield, FileText, Lock, Layers, Merge, Repeat, ArrowLeftRight, PenTool } from "lucide-react"

export const metadata = {
  title: "Extração de Tabelas de PDF para Excel Online | OmnisPDF",
  description:
    "Extraia tabelas de documentos PDF e converta-as em planilhas Excel. Detecte e exporte tabelas automaticamente — rápido e preciso. Função Business do OmnisPDF.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é a Extração de Tabelas?",
      "acceptedAnswer": { "@type": "Answer", "text": "A Extração de Tabelas detecta automaticamente tabelas dentro de documentos PDF e as converte em planilhas Excel (.xlsx) editáveis. Funciona com relatórios financeiros, faturas, dados científicos e qualquer PDF que contenha dados tabulados." }
    },
    {
      "@type": "Question",
      "name": "Quais tipos de tabelas podem ser extraídos?",
      "acceptedAnswer": { "@type": "Answer", "text": "A ferramenta pode extrair tabelas com bordas visíveis, tabelas sem bordas (baseadas em alinhamento), tabelas de várias páginas e tabelas com cabeçalhos mesclados. Funciona melhor com tabelas estruturadas e limpas." }
    },
    {
      "@type": "Question",
      "name": "A Extração de Tabelas é grátis?",
      "acceptedAnswer": { "@type": "Answer", "text": "A Extração de Tabelas está disponível como função do plano Business por $13,99/mês. Inclui extrações ilimitadas junto com todas as outras ferramentas Business como Automação de Fluxos, Comparar PDF, Assinatura Eletrônica e Redação de PDF." }
    },
    {
      "@type": "Question",
      "name": "Posso extrair tabelas de PDFs escaneados?",
      "acceptedAnswer": { "@type": "Answer", "text": "Para melhores resultados, primeiro execute OCR no PDF escaneado usando nossa ferramenta Scanner OCR, depois use a Extração de Tabelas no PDF com texto reconhecido." }
    },
    {
      "@type": "Question",
      "name": "Em qual formato o resultado é exportado?",
      "acceptedAnswer": { "@type": "Answer", "text": "As tabelas são exportadas como arquivo Excel (.xlsx) que pode ser aberto no Microsoft Excel, Google Sheets, LibreOffice Calc e outros aplicativos de planilha." }
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
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Table2 className="h-10 w-10 text-white" />
              </div>
              <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                Business
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extração de Tabelas de PDF</h1>
              <p className="text-xl text-slate-300 mb-4">
                Extraia tabelas de documentos PDF e converta-as em planilhas Excel editáveis. Detecte automaticamente dados tabulados em relatórios, faturas, demonstrações financeiras e documentos científicos.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                Pare de copiar dados manualmente — deixe o OmnisPDF extrair suas tabelas com precisão.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Table2 className="h-4 w-4 text-indigo-400" /><span>Detecção Automática</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-indigo-400" /><span>Exportação para Excel</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-indigo-400" /><span>Arquivos Removidos Após a Sessão</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Notice */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Table2 className="h-7 w-7 text-indigo-500" />
                </div>
                <h2 className="text-xl font-bold text-slate-800 mb-2">Em Breve</h2>
                <p className="text-sm text-slate-500 mb-6">A Extração de Tabelas está sendo desenvolvida e estará disponível em breve para usuários Business.</p>
                <Link href="/br/precos">
                  <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
                    Ver Planos
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Como Vai Funcionar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Envie seu PDF", desc: "Arraste e solte seu PDF contendo tabelas na zona de upload." },
                { step: "2", title: "Detecção Automática", desc: "O OmnisPDF detecta automaticamente todas as tabelas no documento e as destaca para revisão." },
                { step: "3", title: "Baixe o Excel", desc: "Baixe as tabelas extraídas como arquivo Excel (.xlsx) pronto para edição e análise." },
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

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comuns</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Relatórios Financeiros</h3>
                <p className="text-slate-600">
                  Extraia demonstrações financeiras, balanços patrimoniais e relatórios de resultados de PDFs diretamente para Excel para análise e modelagem financeira.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Faturas e Pedidos</h3>
                <p className="text-slate-600">
                  Extraia itens de linha, quantidades, preços e totais de faturas em PDF para importar em sistemas contábeis ou planilhas de controle.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Dados Científicos e de Pesquisa</h3>
                <p className="text-slate-600">
                  Extraia tabelas de dados de artigos científicos, relatórios de pesquisa e publicações acadêmicas para reutilização em suas próprias análises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "O que é a Extração de Tabelas?", a: "Detecta automaticamente tabelas dentro de PDFs e as converte em planilhas Excel editáveis. Funciona com relatórios financeiros, faturas, dados científicos e qualquer PDF com dados tabulados." },
                { q: "Quais tipos de tabelas podem ser extraídos?", a: "Tabelas com bordas visíveis, tabelas sem bordas, tabelas de várias páginas e tabelas com cabeçalhos mesclados. Funciona melhor com tabelas estruturadas e limpas." },
                { q: "É grátis?", a: "A Extração de Tabelas está disponível como função do plano Business por $13,99/mês." },
                { q: "Posso extrair tabelas de PDFs escaneados?", a: "Para melhores resultados, primeiro execute OCR usando nossa ferramenta Scanner OCR, depois use a Extração de Tabelas no PDF processado." },
                { q: "Em qual formato é exportado?", a: "As tabelas são exportadas como arquivo Excel (.xlsx) compatível com Microsoft Excel, Google Sheets e LibreOffice Calc." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Mais Ferramentas PDF</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Comparar PDF", desc: "Compare dois PDFs lado a lado.", href: "/br/comparar-pdf", icon: ArrowLeftRight },
                { name: "Assinatura Eletrônica", desc: "Adicione assinaturas a PDFs.", href: "/br/assinatura-eletronica", icon: PenTool },
                { name: "Redação PDF", desc: "Remova informações sensíveis.", href: "/br/redacao-pdf", icon: Shield },
                { name: "Automação", desc: "Encadeie ferramentas PDF em um fluxo.", href: "/br/automacao", icon: Repeat },
                { name: "Proteger PDF", desc: "Adicione proteção com senha.", href: "/br/proteger-pdf", icon: Lock },
                { name: "Achatar PDF", desc: "Bloqueie campos e anotações.", href: "/br/achatar-pdf", icon: Layers },
                { name: "Comprimir PDF", desc: "Reduza o tamanho sem perder qualidade.", href: "/br/comprimir-pdf", icon: FileText },
                { name: "Unir PDF", desc: "Combine vários PDFs em um só.", href: "/br/unir-pdf", icon: Merge },
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
