import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { PdfCompareInterface } from "@/components/pdf-compare-interface"
import { ArrowLeftRight, Eye, Layers, Zap, Shield, Lock, PenTool, FileText, Merge, Repeat } from "lucide-react"

export const metadata = {
  title: "Comparar PDFs Online — Visualizador de Diferenças Lado a Lado | OmnisPDF",
  description:
    "Compare dois documentos PDF lado a lado e veja exatamente o que mudou. Destaque visual de diferenças em vermelho. Vistas sobrepostas e lado a lado. Função Business do OmnisPDF.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como funciona o Comparar PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie dois PDFs — um original e uma versão modificada. A ferramenta renderiza cada página e as compara pixel por pixel. As diferenças são destacadas em vermelho para que você possa ver exatamente o que mudou entre os dois documentos." }
    },
    {
      "@type": "Question",
      "name": "Quais modos de visualização estão disponíveis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Três modos de visualização: Lado a Lado mostra ambos os documentos um ao lado do outro, Sobreposição os mescla com transparência, e Diferenças destaca as áreas alteradas em vermelho contra um fundo atenuado." }
    },
    {
      "@type": "Question",
      "name": "Posso comparar PDFs com número diferente de páginas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Se um PDF tem mais páginas que o outro, a ferramenta compara as páginas que existem em ambos os documentos e marca as páginas extras como 100% diferentes." }
    },
    {
      "@type": "Question",
      "name": "O Comparar PDF detecta mudanças de texto?",
      "acceptedAnswer": { "@type": "Answer", "text": "O Comparar PDF realiza uma comparação visual pixel por pixel. Detecta qualquer mudança visível na página incluindo edições de texto, elementos movidos, conteúdo adicionado ou removido, mudanças de imagem e diferenças de formatação." }
    },
    {
      "@type": "Question",
      "name": "O Comparar PDF é grátis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Comparar PDF está disponível como função do plano Business por $13,99/mês. Inclui a ferramenta de comparação junto com outras ferramentas Business como Automação de Fluxos, Redação de PDF, Assinatura Eletrônica e Extração de Tabelas." }
    },
    {
      "@type": "Question",
      "name": "Posso baixar um relatório de comparação?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Clique no botão Relatório para baixar um resumo de texto mostrando a porcentagem de diferença para cada página, categorizado como Idêntico, Mudanças menores, Mudanças moderadas ou Mudanças maiores." }
    },
  ]
}

export default function PdfComparePagePt() {
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
                <ArrowLeftRight className="h-10 w-10 text-white" />
              </div>
              <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                Business
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comparar PDFs Online</h1>
              <p className="text-xl text-slate-300 mb-4">
                Envie dois documentos PDF e veja exatamente o que mudou entre eles. Compare contratos, propostas, relatórios e qualquer revisão de documento com um visualizador visual lado a lado que destaca cada diferença.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                Detecte edições, adições, exclusões e mudanças de formatação instantaneamente — sem leitura manual.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><ArrowLeftRight className="h-4 w-4 text-indigo-400" /><span>Lado a Lado</span></div>
                <div className="flex items-center gap-2"><Layers className="h-4 w-4 text-indigo-400" /><span>Vista Sobreposta</span></div>
                <div className="flex items-center gap-2"><Eye className="h-4 w-4 text-indigo-400" /><span>Destaque de Diferenças</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Compare Interface */}
        <PdfCompareInterface locale="br" />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Como Funciona</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Envie Dois PDFs", desc: "Envie o documento original e a versão modificada. Cada PDF é renderizado página por página para comparação." },
                { step: "2", title: "Escolha um Modo de Vista", desc: "Alterne entre Lado a Lado, Sobreposição e vista de Diferenças. Cada modo mostra as mudanças de uma maneira diferente." },
                { step: "3", title: "Revise e Gere Relatório", desc: "Navegue pelas páginas, veja as porcentagens de diferença e baixe um relatório resumo mostrando o que mudou em cada página." },
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

        {/* Why Compare PDFs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4 text-center">Por Que Comparar PDFs?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-600 text-center">
                Quando você recebe um contrato revisado, um relatório atualizado ou uma proposta editada, precisa saber exatamente o que mudou. Ler o documento inteiro manualmente é lento e propenso a erros.
              </p>
              <p className="text-slate-600 text-center">
                Comparar PDF mostra cada diferença de uma vez — texto alterado, elementos movidos, conteúdo adicionado ou removido — para que você possa revisar mudanças com confiança e detectar edições inesperadas antes de assinar ou aprovar.
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
                <h3 className="text-xl font-black text-slate-900 mb-3">Revisões de Contratos</h3>
                <p className="text-slate-600">
                  Compare contratos originais e revisados para detectar mudanças em termos, preços, datas e linguagem jurídica. Certifique-se de que nada foi adicionado ou removido sem seu conhecimento antes de assinar.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Atualizações de Relatórios</h3>
                <p className="text-slate-600">
                  Compare diferentes versões de relatórios financeiros, atualizações de projetos ou documentos de conformidade. Veja quais dados, gráficos ou seções mudaram entre rascunhos.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Revisão de Design e Layout</h3>
                <p className="text-slate-600">
                  Compare provas de PDF, folhetos ou materiais de marketing para verificar mudanças de design, fontes, imagens e outras diferenças visuais entre revisões.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Documentos Legais e de Conformidade</h3>
                <p className="text-slate-600">
                  Revise atualizações de políticas, submissões regulatórias e acordos jurídicos para garantir que apenas mudanças autorizadas foram feitas. A comparação visual facilita detectar edições não autorizadas.
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
                { q: "Como funciona o Comparar PDF?", a: "Envie dois PDFs — um original e uma versão modificada. A ferramenta renderiza cada página e as compara pixel por pixel. As diferenças são destacadas em vermelho." },
                { q: "Quais modos de vista existem?", a: "Três modos: Lado a Lado mostra ambos os documentos juntos, Sobreposição os mescla com transparência, e Diferenças destaca as áreas alteradas em vermelho." },
                { q: "Posso comparar PDFs com número diferente de páginas?", a: "Sim. A ferramenta compara as páginas que existem em ambos os documentos e marca as páginas extras como 100% diferentes." },
                { q: "Detecta mudanças de texto?", a: "Realiza uma comparação visual pixel por pixel. Detecta qualquer mudança visível incluindo edições de texto, elementos movidos, conteúdo adicionado ou removido." },
                { q: "É grátis?", a: "Comparar PDF está disponível como função do plano Business por $13,99/mês." },
                { q: "Posso baixar um relatório?", a: "Sim. Clique no botão Relatório para baixar um resumo mostrando a porcentagem de diferença para cada página." },
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
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Não Perca Nenhuma Mudança</h2>
            <p className="text-slate-300 text-lg mb-8">
              Compare qualquer par de PDFs e veja exatamente o que foi adicionado, removido ou modificado. Revise revisões de contratos, atualizações de relatórios e edições de documentos com confiança.
            </p>
            <Link
              href="/br/comparar-pdf"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Começar a Comparar
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Mais Ferramentas PDF</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Redação PDF", desc: "Remova permanentemente texto sensível de PDFs.", href: "/br/redacao-pdf", icon: Shield },
                { name: "Assinatura Eletrônica", desc: "Adicione assinaturas eletrônicas a PDFs.", href: "/br/assinatura-eletronica", icon: PenTool },
                { name: "Proteger PDF", desc: "Adicione proteção com senha.", href: "/br/proteger-pdf", icon: Lock },
                { name: "Unir PDF", desc: "Combine vários PDFs em um só.", href: "/br/unir-pdf", icon: Merge },
                { name: "Automação", desc: "Encadeie ferramentas PDF em um fluxo.", href: "/br/automacao", icon: Repeat },
                { name: "Comprimir PDF", desc: "Reduza o tamanho sem perder qualidade.", href: "/br/comprimir-pdf", icon: FileText },
                { name: "Dividir PDF", desc: "Divida um PDF em arquivos separados.", href: "/br/dividir-pdf", icon: FileText },
                { name: "PDF para JPG", desc: "Converta páginas PDF em imagens JPG.", href: "/br/pdf-para-jpg", icon: FileText },
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
