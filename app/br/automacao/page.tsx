import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { WorkflowInterface } from "@/components/workflow-interface"
import { Repeat, Zap, Shield, Layers } from "lucide-react"

export const metadata = {
  title: "Automação de Fluxos PDF — Encadeie Ferramentas em Um Clique | PDF.it",
  description:
    "Automatize fluxos de trabalho PDF de múltiplas etapas. Achate, comprima, adicione marca d'água, gire e proteja — tudo em um clique. Função Business do PDF.it.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é a Automação de Fluxos?",
      "acceptedAnswer": { "@type": "Answer", "text": "A Automação de Fluxos permite encadear várias ferramentas PDF em um único processo automatizado. Por exemplo, achatar formulários, comprimir o arquivo e adicionar uma marca d'água — tudo em um único clique em vez de três etapas separadas." }
    },
    {
      "@type": "Question",
      "name": "Quais ferramentas posso encadear?",
      "acceptedAnswer": { "@type": "Answer", "text": "Você pode combinar: Achatar PDF, Comprimir PDF, Marca d'Água PDF, Girar PDF e Proteger com Senha. Pode usar até 5 etapas por fluxo de trabalho." }
    },
    {
      "@type": "Question",
      "name": "A Automação de Fluxos é grátis?",
      "acceptedAnswer": { "@type": "Answer", "text": "A Automação de Fluxos é uma função do plano Business ($13,99/mês). Inclui fluxos ilimitados junto com todas as outras ferramentas Business como Extração de Tabelas, Comparar PDF e Assinatura Eletrônica." }
    },
    {
      "@type": "Question",
      "name": "Posso criar fluxos personalizados?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Você pode escolher entre fluxos pré-definidos ou criar seu próprio fluxo personalizado selecionando e ordenando até 5 etapas. Cada etapa pode ser configurada individualmente." }
    },
  ]
}

export default function AutomacaoFluxosPagePt() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
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
                <Repeat className="h-10 w-10 text-white" />
              </div>
              <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                Business
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Automação de Fluxos</h1>
              <p className="text-xl text-slate-300 mb-8">
                Encadeie múltiplas ferramentas PDF em um fluxo de trabalho automatizado. Achate, comprima, adicione marca d'água e proteja — tudo em um único clique.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-indigo-400" /><span>Até 5 Etapas</span></div>
                <div className="flex items-center gap-2"><Layers className="h-4 w-4 text-indigo-400" /><span>Fluxos Pré-definidos + Personalizados</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-indigo-400" /><span>Arquivos Removidos Após a Sessão</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Interface */}
        <WorkflowInterface locale="br" />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Como Funciona</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Escolha as Etapas", desc: "Selecione um fluxo pré-definido ou crie o seu próprio adicionando até 5 etapas." },
                { step: "2", title: "Envie seu PDF", desc: "Arraste e solte seu arquivo PDF na zona de upload." },
                { step: "3", title: "Baixe o Resultado", desc: "Todas as etapas são executadas automaticamente. Baixe seu PDF processado quando terminar." },
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

        {/* FAQ */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "O que é a Automação de Fluxos?", a: "Permite encadear várias ferramentas PDF em um único processo automatizado. Por exemplo, achatar formulários, comprimir o arquivo e adicionar uma marca d'água — tudo em um único clique." },
                { q: "Quais ferramentas posso encadear?", a: "Você pode combinar: Achatar PDF, Comprimir PDF, Marca d'Água PDF, Girar PDF e Proteger com Senha. Pode usar até 5 etapas por fluxo." },
                { q: "É grátis?", a: "A Automação de Fluxos é uma função do plano Business ($13,99/mês). Inclui fluxos ilimitados junto com todas as outras ferramentas Business." },
                { q: "Posso criar fluxos personalizados?", a: "Sim. Você pode escolher entre fluxos pré-definidos ou criar seu próprio fluxo personalizado selecionando e ordenando até 5 etapas." },
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
