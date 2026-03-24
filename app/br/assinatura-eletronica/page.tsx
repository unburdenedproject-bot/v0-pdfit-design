import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { EsignInterface } from "@/components/esign-interface"
import { PenTool, Zap, Eye, Shield, FileText, Lock, Layers, Repeat, ArrowLeftRight, Merge } from "lucide-react"

export const metadata = {
  title: "Assinatura Eletrônica de PDFs Online — Adicione Assinaturas a Documentos PDF | PDF.it",
  description:
    "Assine documentos PDF online com um editor visual. Desenhe, digite ou envie sua assinatura e posicione-a em qualquer parte de qualquer página. Baixe seu PDF assinado instantaneamente. Função Business do PDF.it.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é a Assinatura Eletrônica?",
      "acceptedAnswer": { "@type": "Answer", "text": "A Assinatura Eletrônica permite adicionar assinaturas eletrônicas a documentos PDF. Você pode desenhar sua assinatura, digitar seu nome em uma fonte de assinatura, ou enviar uma imagem da sua assinatura. Depois posicione-a em qualquer parte do documento e baixe o PDF assinado." }
    },
    {
      "@type": "Question",
      "name": "A assinatura fica incorporada no PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. A assinatura é incorporada permanentemente no PDF como parte do documento. Aparece na página e é incluída quando o PDF é impresso ou compartilhado." }
    },
    {
      "@type": "Question",
      "name": "Posso assinar múltiplas páginas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Você pode navegar por todas as páginas do seu PDF e colocar assinaturas em qualquer página. Também pode colocar múltiplas assinaturas em uma única página." }
    },
    {
      "@type": "Question",
      "name": "Quais opções de assinatura estão disponíveis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Você pode desenhar sua assinatura à mão livre usando o mouse ou trackpad, digitar seu nome e escolher entre diferentes fontes de assinatura, ou enviar uma imagem da sua assinatura manuscrita." }
    },
    {
      "@type": "Question",
      "name": "A Assinatura Eletrônica é grátis?",
      "acceptedAnswer": { "@type": "Answer", "text": "A Assinatura Eletrônica está disponível como função do plano Business por $13,99/mês. Inclui o editor de assinaturas junto com outras ferramentas Business como Automação de Fluxos, Redação de PDF, Comparar PDF e Extração de Tabelas." }
    },
    {
      "@type": "Question",
      "name": "Como adiciono uma assinatura a um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF, crie sua assinatura desenhando, digitando ou enviando uma imagem. Depois clique em Posicionar no PDF e clique no ponto do documento onde deseja que a assinatura apareça. Quando terminar, clique em Aplicar assinaturas para incorporá-las e baixar o PDF assinado." }
    },
    {
      "@type": "Question",
      "name": "Posso remover uma assinatura posicionada antes de aplicar?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Antes de aplicar as assinaturas, você pode remover qualquer assinatura posicionada pela lista lateral. Depois de aplicar e baixar, as assinaturas ficam incorporadas permanentemente." }
    },
  ]
}

export default function AssinaturaEletronicaPagePt() {
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
                <PenTool className="h-10 w-10 text-white" />
              </div>
              <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                Business
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Assinatura Eletrônica de PDFs</h1>
              <p className="text-xl text-slate-300 mb-4">
                Adicione assinaturas eletrônicas a qualquer documento PDF. Desenhe sua assinatura, digite seu nome em uma fonte de assinatura, ou envie uma imagem da sua assinatura manuscrita. Posicione-a exatamente onde precisa e baixe o PDF assinado instantaneamente.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                Assine contratos, acordos, formulários, cartas e qualquer outro documento PDF sem imprimir, escanear ou enviar pelo correio.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><PenTool className="h-4 w-4 text-indigo-400" /><span>Desenhe, Digite ou Envie</span></div>
                <div className="flex items-center gap-2"><Eye className="h-4 w-4 text-indigo-400" /><span>Posicionamento Visual</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-indigo-400" /><span>Suporte Multi-Página</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* eSign Interface */}
        <EsignInterface locale="br" />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Como Funciona</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Envie seu PDF", desc: "Arraste e solte seu PDF na área de upload. O documento é aberto no editor de assinaturas para que você possa ver cada página." },
                { step: "2", title: "Crie sua Assinatura", desc: "Desenhe sua assinatura à mão livre, digite seu nome e escolha um estilo de fonte, ou envie uma imagem da sua assinatura manuscrita." },
                { step: "3", title: "Posicione e Aplique", desc: "Clique em Posicionar no PDF, depois clique no documento onde quer a assinatura. Aplique todas as assinaturas e baixe seu PDF assinado." },
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

        {/* Why Sign PDFs Online */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4 text-center">Por Que Assinar PDFs Online?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-600 text-center">
                Assinar documentos não requer mais imprimir, assinar à mão, escanear e enviar pelo correio. Com uma ferramenta de assinatura eletrônica online, você pode adicionar sua assinatura diretamente ao PDF em segundos e enviá-lo imediatamente.
              </p>
              <p className="text-slate-600 text-center">
                Isso economiza tempo, reduz o desperdício de papel e permite assinar documentos de qualquer lugar — seja no escritório, em trânsito ou trabalhando remotamente.
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
                <h3 className="text-xl font-black text-slate-900 mb-3">Contratos e Acordos</h3>
                <p className="text-slate-600">
                  Assine contratos comerciais, acordos de freelancer, contratos com fornecedores e documentos de parceria. Posicione sua assinatura na linha designada e devolva o PDF assinado sem atrasos.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Formulários de Recursos Humanos</h3>
                <p className="text-slate-600">
                  Assine cartas de oferta, formulários de integração, acordos de confidencialidade, formulários fiscais e reconhecimentos de políticas. Novos funcionários e gestores podem assinar e devolver documentos rapidamente sem imprimir.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Imóveis e Aluguéis</h3>
                <p className="text-slate-600">
                  Assine contratos de aluguel, renovações de locação, divulgações de propriedades e documentos de fechamento. Adicione sua assinatura em cada página necessária e envie o PDF completo ao seu corretor ou proprietário.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Formulários Escolares e Governamentais</h3>
                <p className="text-slate-600">
                  Assine autorizações, formulários de matrícula, documentos de auxílio financeiro, solicitações governamentais e formulários de consentimento. Complete e devolva formulários assinados sem visitar um escritório.
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
                { q: "O que é a Assinatura Eletrônica?", a: "Permite adicionar assinaturas eletrônicas a documentos PDF. Você pode desenhar, digitar ou enviar sua assinatura, posicioná-la no documento e baixar o PDF assinado." },
                { q: "A assinatura fica incorporada no PDF?", a: "Sim. A assinatura é incorporada permanentemente no PDF. Aparece na página e é incluída ao imprimir ou compartilhar." },
                { q: "Posso assinar múltiplas páginas?", a: "Sim. Você pode navegar por todas as páginas e colocar assinaturas em qualquer página. Também pode colocar múltiplas assinaturas em uma única página." },
                { q: "Quais opções de assinatura existem?", a: "Você pode desenhar à mão livre, digitar seu nome e escolher uma fonte, ou enviar uma imagem da sua assinatura manuscrita." },
                { q: "É grátis?", a: "A Assinatura Eletrônica está disponível como função do plano Business por $13,99/mês." },
                { q: "Como adiciono uma assinatura a um PDF?", a: "Envie seu PDF, crie sua assinatura desenhando, digitando ou enviando uma imagem. Clique em Posicionar no PDF e depois no local onde deseja a assinatura. Quando terminar, clique em Aplicar assinaturas para incorporá-las e baixar o PDF assinado." },
                { q: "Posso remover uma assinatura posicionada antes de aplicar?", a: "Sim. Antes de aplicar as assinaturas, você pode remover qualquer assinatura posicionada pela lista lateral. Depois de aplicar e baixar, as assinaturas ficam incorporadas permanentemente." },
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
            <h2 className="text-2xl font-black mb-4">Assine PDFs em Segundos</h2>
            <p className="text-slate-300 text-lg mb-8">
              Pare de imprimir, escanear e enviar documentos só para adicionar uma assinatura. Envie seu PDF, posicione sua assinatura e baixe o arquivo assinado — tudo direto do navegador.
            </p>
            <Link
              href="/br/assinatura-eletronica"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Começar a Assinar
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
                { name: "Proteger PDF", desc: "Adicione proteção com senha.", href: "/br/proteger-pdf", icon: Lock },
                { name: "Achatar PDF", desc: "Bloqueie campos de formulário e anotações.", href: "/br/achatar-pdf", icon: Layers },
                { name: "Unir PDF", desc: "Combine vários PDFs em um só.", href: "/br/unir-pdf", icon: Merge },
                { name: "Automação", desc: "Encadeie ferramentas PDF em um fluxo.", href: "/br/automacao", icon: Repeat },
                { name: "Comparar PDF", desc: "Compare dois PDFs lado a lado.", href: "/br/comparar-pdf", icon: ArrowLeftRight },
                { name: "Comprimir PDF", desc: "Reduza o tamanho sem perder qualidade.", href: "/br/comprimir-pdf", icon: FileText },
                { name: "Dividir PDF", desc: "Divida um PDF em arquivos separados.", href: "/br/dividir-pdf", icon: FileText },
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
