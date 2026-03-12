import Script from "next/script"
import Link from "next/link"
import { HeaderPt } from "@/components/header-pt"
import { FooterPt } from "@/components/footer-pt"
import { RedactionInterface } from "@/components/redaction-interface"
import { Shield, Zap, Eye, Lock, FileText, Merge, Layers, Repeat, ArrowLeftRight } from "lucide-react"

export const metadata = {
  title: "Redação de PDFs Online — Remova Informações Sensíveis Permanentemente | OmnisPDF",
  description:
    "Redija permanentemente texto sensível, CPFs, endereços e dados confidenciais de PDFs. Editor visual de redação — desenhe caixas diretamente sobre seu documento. Função Business do OmnisPDF.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é a redação de PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "A redação de PDF é o processo de remover permanentemente informações sensíveis de um PDF. Diferente de colocar uma caixa preta sobre o texto, a redação verdadeira remove o conteúdo subjacente para que não possa ser recuperado." }
    },
    {
      "@type": "Question",
      "name": "A redação é permanente?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Após aplicar as redações, o conteúdo original é removido permanentemente do PDF. As áreas redigidas aparecem como caixas pretas sólidas e o texto oculto por baixo é eliminado." }
    },
    {
      "@type": "Question",
      "name": "Quais informações devo redigir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Você deve redigir qualquer informação sensível ou confidencial, incluindo CPFs, endereços, números de telefone, dados bancários, números de conta, informações médicas, detalhes de processos e outras informações de identificação pessoal." }
    },
    {
      "@type": "Question",
      "name": "Qual a diferença entre redação e cobrir texto com uma caixa preta?",
      "acceptedAnswer": { "@type": "Answer", "text": "Uma simples caixa preta pode apenas ocultar o texto visualmente enquanto deixa o conteúdo original no arquivo. A redação adequada de PDF remove os dados reais por baixo, tornando-os inacessíveis para ferramentas de busca, cópia e extração." }
    },
    {
      "@type": "Question",
      "name": "A Redação de PDF é grátis?",
      "acceptedAnswer": { "@type": "Answer", "text": "A Redação de PDF está disponível como função do plano Business por $13,99/mês. Inclui o editor visual de redação junto com outras ferramentas Business como Automação de Fluxos, Extração de Tabelas, Comparar PDF e Assinatura Eletrônica." }
    },
  ]
}

export default function RedacaoPdfPagePt() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema-pt"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderPt />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                Business
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Redação de PDFs Online</h1>
              <p className="text-xl text-slate-300 mb-4">
                Remova permanentemente informações sensíveis de documentos PDF com uma ferramenta visual de redação simples. Envie seu arquivo, desenhe caixas de redação sobre conteúdo confidencial e aplique redações permanentes para que o texto subjacente não possa ser copiado, pesquisado ou recuperado.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                Proteja dados pessoais, informações comerciais confidenciais, detalhes de processos legais, registros médicos e outro conteúdo privado antes de compartilhar ou arquivar seus PDFs.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Eye className="h-4 w-4 text-red-400" /><span>Editor Visual</span></div>
                <div className="flex items-center gap-2"><Lock className="h-4 w-4 text-red-400" /><span>Remoção Permanente</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-red-400" /><span>Suporte Multi-Página</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Redaction Interface */}
        <RedactionInterface />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Como Funciona</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Envie seu PDF", desc: "Arraste e solte seu PDF na área de upload para abri-lo no editor de redação." },
                { step: "2", title: "Desenhe Redações", desc: "Clique e arraste para colocar caixas de redação pretas sobre o texto ou áreas que deseja remover. Revise cada página e adicione redações onde houver informação sensível." },
                { step: "3", title: "Aplique e Baixe", desc: "Clique em Aplicar Redação para remover permanentemente o conteúdo subjacente do PDF. Depois baixe seu arquivo redigido, pronto para compartilhar com segurança." },
              ].map((item) => (
                <div key={item.step} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-2">{item.title}</div>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Use PDF Redaction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4 text-center">Por Que Usar Redação de PDF?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-600 text-center">
                A redação adequada de PDF faz mais do que ocultar texto visualmente. Remove permanentemente as informações subjacentes do documento para que não possam ser selecionadas, copiadas, pesquisadas ou recuperadas depois.
              </p>
              <p className="text-slate-600 text-center">
                Isso torna a redação de PDF essencial para compartilhar documentos que contêm informações pessoais, financeiras, legais, médicas ou comerciais confidenciais.
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
                <h3 className="text-xl font-black text-slate-900 mb-3">Documentos Legais e Judiciais</h3>
                <p className="text-slate-600">
                  Redija nomes de testemunhas, números de processo, assinaturas, endereços e outras informações sensíveis antes de arquivar ou compartilhar documentos legais. A redação adequada ajuda a proteger detalhes confidenciais e cumprir requisitos de privacidade.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Recursos Humanos e Registros de Funcionários</h3>
                <p className="text-slate-600">
                  Remova CPFs, detalhes salariais, endereços, informações de contato e outros dados de funcionários antes de enviar registros a auditores, fornecedores ou parceiros externos.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Saúde e Conformidade</h3>
                <p className="text-slate-600">
                  Redija nomes de pacientes, números de prontuário, detalhes de tratamento, datas de nascimento e outras informações de saúde protegidas para cumprir regulamentações de privacidade e proteger a privacidade do paciente.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Documentos Financeiros e Comerciais</h3>
                <p className="text-slate-600">
                  Remova números de conta bancária, detalhes de pagamento, identificações fiscais, faturas, dados de contratos e outras informações comerciais confidenciais antes de compartilhar documentos interna ou externamente.
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
                { q: "O que é a redação de PDF?", a: "É o processo de remover permanentemente informações sensíveis de um PDF. Diferente de uma caixa preta simples, a redação verdadeira remove o conteúdo subjacente para que não possa ser recuperado." },
                { q: "A redação é permanente?", a: "Sim. Após aplicar as redações, o conteúdo original é removido permanentemente. As áreas redigidas aparecem como caixas pretas sólidas e o texto oculto é eliminado." },
                { q: "Quais informações devo redigir?", a: "Qualquer informação sensível: CPFs, endereços, números de telefone, dados bancários, informações médicas, detalhes de processos e outras informações de identificação pessoal." },
                { q: "Qual a diferença entre redação e cobrir com uma caixa preta?", a: "Uma caixa preta simples apenas oculta visualmente. A redação adequada remove os dados reais, tornando-os inacessíveis para ferramentas de busca, cópia e extração." },
                { q: "Posso redigir múltiplas páginas?", a: "Sim. Você pode navegar pelo documento página por página e adicionar redações onde houver conteúdo sensível antes de aplicar todas as redações de uma vez." },
                { q: "É grátis?", a: "A Redação de PDF está disponível como função do plano Business por $13,99/mês." },
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
            <h2 className="text-2xl font-black mb-4">Redija Informações Sensíveis com Confiança</h2>
            <p className="text-slate-300 text-lg mb-8">
              Use a Redação de PDF para remover com segurança conteúdo confidencial dos seus documentos antes de compartilhar, arquivar ou armazenar.
            </p>
            <Link
              href="/pt/redacao-pdf"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Começar a Redigir
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Mais Ferramentas PDF</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Proteger PDF", desc: "Adicione proteção com senha.", href: "/pt/proteger-pdf", icon: Lock },
                { name: "Achatar PDF", desc: "Bloqueie campos de formulário e anotações.", href: "/pt/achatar-pdf", icon: Layers },
                { name: "Unir PDF", desc: "Combine vários PDFs em um só.", href: "/pt/unir-pdf", icon: Merge },
                { name: "Automação", desc: "Encadeie ferramentas PDF em um fluxo.", href: "/pt/automacao", icon: Repeat },
                { name: "Comparar PDF", desc: "Compare dois PDFs lado a lado.", href: "/pt/comparar-pdf", icon: ArrowLeftRight },
                { name: "PDF para JPG", desc: "Converta páginas PDF em imagens JPG.", href: "/pt/pdf-para-jpg", icon: FileText },
                { name: "Comprimir PDF", desc: "Reduza o tamanho sem perder qualidade.", href: "/pt/comprimir-pdf", icon: FileText },
                { name: "Dividir PDF", desc: "Divida um PDF em arquivos separados.", href: "/pt/dividir-pdf", icon: FileText },
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
      <FooterPt />
    </div>
  )
}
