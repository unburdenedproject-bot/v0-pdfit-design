import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Stamp, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Marca d'Agua em PDF no Celular (iPhone e Android) | PDF.it",
  description:
    "Aprenda como adicionar marca d'agua a um PDF direto do celular. Funciona no iPhone e Android sem instalar nenhum aplicativo — use o navegador.",
  keywords: "marca dagua pdf celular, marca dagua pdf iphone, marca dagua pdf android, marca dagua pdf online celular",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Posso adicionar marca d'agua a um PDF no celular?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona no navegador do celular. Basta acessar a ferramenta Marca d'Agua em PDF, fazer upload do arquivo e configurar o texto desejado." } },
    { "@type": "Question", "name": "Preciso instalar algum app?", "acceptedAnswer": { "@type": "Answer", "text": "Nao. O PDF.it e uma ferramenta online que funciona diretamente no navegador do seu celular, sem necessidade de instalar aplicativos." } },
    { "@type": "Question", "name": "Funciona no iPhone e no Android?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em qualquer navegador moderno, incluindo Safari no iPhone e Chrome no Android." } },
    { "@type": "Question", "name": "O arquivo fica salvo no celular?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Apos o processamento, voce pode baixar o PDF com marca d'agua diretamente para a pasta de downloads do seu celular." } },
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Adicionar Marca d'Agua em PDF no Celular",
  "description": "Adicione marca d'agua a um PDF usando seu celular em 3 passos simples.",
  "step": [
    { "@type": "HowToStep", "name": "Abra o PDF.it no navegador", "text": "No navegador do celular, acesse pdf.it.com e va para a ferramenta Marca d'Agua em PDF." },
    { "@type": "HowToStep", "name": "Faca upload e configure", "text": "Selecione o PDF da galeria ou pasta de arquivos. Digite o texto da marca d'agua e ajuste cor, tamanho e opacidade." },
    { "@type": "HowToStep", "name": "Baixe o resultado", "text": "Toque em aplicar e baixe o PDF com marca d'agua para seu celular." }
  ]
}

export default function MarcaDaguaCelularPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Marca d&apos;Agua PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Marca d&apos;Agua em PDF no Celular</h1>
              <p className="text-xl text-slate-300">Adicione marca d&apos;agua a qualquer PDF direto do seu iPhone ou Android, sem instalar nenhum aplicativo. Tudo funciona no navegador.</p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><Stamp className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Adicione marca d&apos;agua pelo celular agora.</p>
            </div>
            <Link href="/br/marca-dagua-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Marca d&apos;Agua PDF <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Adicionar Marca d&apos;Agua pelo Celular?</h2>
              <p className="text-slate-600 mb-4">Nem sempre voce esta no computador quando precisa proteger um documento. Pode ser um contrato que chegou por e-mail, um relatorio que voce precisa enviar urgente ou um documento que recebeu pelo WhatsApp.</p>
              <p className="text-slate-600 mb-4">Com o PDF.it, voce pode adicionar marca d&apos;agua a qualquer PDF direto do navegador do celular — Safari, Chrome ou qualquer outro. Nao precisa instalar nenhum aplicativo.</p>
              <p className="text-slate-600">O processo e identico ao do computador: faca upload, configure o texto e baixe o resultado.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Passo a Passo no Celular</h2>
              <div className="space-y-4">
                {[
                  { title: "Abra o PDF.it no navegador", desc: "No Safari (iPhone) ou Chrome (Android), acesse pdf.it.com e toque em Marca d'Agua PDF no menu de ferramentas." },
                  { title: "Selecione o PDF", desc: "Toque no botao de upload e escolha o PDF da sua galeria, pasta de downloads ou aplicativo de arquivos. No iPhone, use o app Arquivos; no Android, o gerenciador de arquivos." },
                  { title: "Configure a marca d'agua", desc: "Digite o texto desejado (ex: CONFIDENCIAL, RASCUNHO). Ajuste cor, tamanho da fonte, opacidade e angulo. A visualizacao mostra como ficara." },
                  { title: "Aplique e baixe", desc: "Toque em aplicar e aguarde o processamento. O PDF com marca d'agua sera baixado automaticamente para a pasta de downloads do celular." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para o Celular</h2>
              <div className="space-y-6">
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Use Wi-Fi para Arquivos Grandes</h3><p className="text-slate-600">Se o PDF for grande (acima de 10MB), use uma conexao Wi-Fi para upload e download mais rapidos e evitar consumo excessivo de dados moveis.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Verifique a Visualizacao</h3><p className="text-slate-600">Antes de aplicar, verifique a visualizacao para garantir que o texto da marca d&apos;agua esta legivel e bem posicionado na tela menor do celular.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Compartilhe Direto do Celular</h3><p className="text-slate-600">Apos baixar o PDF com marca d&apos;agua, compartilhe direto pelo WhatsApp, e-mail ou qualquer outro aplicativo de mensagens do celular.</p></div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">iPhone vs Android</h2>
              <p className="text-slate-600 mb-4">O PDF.it funciona de forma identica em ambos os sistemas. A unica diferenca e onde o arquivo fica salvo apos o download:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>iPhone:</strong> O PDF e salvo no app Arquivos, na pasta Downloads. Abra o app Arquivos para encontrar.</li>
                <li>&#10003; <strong>Android:</strong> O PDF vai para a pasta Downloads padrao. Acesse pelo gerenciador de arquivos ou pela notificacao de download.</li>
              </ul>
              <p className="text-slate-600 mt-4">Depois de adicionar a marca d&apos;agua, voce pode usar <Link href="/br/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> para reduzir o tamanho antes de enviar por e-mail.</p>
            </section>
          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Adicione Marca d&apos;Agua Agora</h2>
            <p className="text-slate-300 mb-6">Funciona no celular e no computador. Nenhum app necessario.</p>
            <Link href="/br/marca-dagua-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><Stamp className="h-5 w-5" /> Marca d&apos;Agua PDF (Pro)</Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Marca d'Agua 'Confidencial' em PDF", href: "/br/aprender/marca-dagua-pdf-confidencial" },
                { title: "Melhores Praticas para Marca d'Agua em PDF", href: "/br/aprender/marca-dagua-pdf-melhores-praticas" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group">
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
                { q: "Posso adicionar marca d'agua a um PDF no celular?", a: "Sim. O PDF.it funciona no navegador do celular. Basta acessar a ferramenta Marca d'Agua em PDF, fazer upload do arquivo e configurar o texto desejado." },
                { q: "Preciso instalar algum app?", a: "Nao. O PDF.it e uma ferramenta online que funciona diretamente no navegador do seu celular, sem necessidade de instalar aplicativos." },
                { q: "Funciona no iPhone e no Android?", a: "Sim. O PDF.it funciona em qualquer navegador moderno, incluindo Safari no iPhone e Chrome no Android." },
                { q: "O arquivo fica salvo no celular?", a: "Sim. Apos o processamento, voce pode baixar o PDF com marca d'agua diretamente para a pasta de downloads do seu celular." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
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
