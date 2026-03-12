import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { TableIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Excel para PDF — Como Ajustar à Página (Sem Cortar Dados) | OmnisPDF",
  description:
    "Aprenda como usar a função Ajustar à Página no Excel para garantir que toda a planilha caiba perfeitamente na página do PDF. Guia passo a passo.",
  keywords: "excel ajustar à página, excel caber na página, excel para pdf ajustar, escalar planilha pdf, excel fit to page pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "O que faz o Ajustar à Página no Excel?", "acceptedAnswer": { "@type": "Answer", "text": "A função Escalar para Ajustar reduz ou amplia automaticamente o conteúdo da planilha para caber no número de páginas que você definir. Ideal para garantir que tudo caiba em uma página de PDF." } },
    { "@type": "Question", "name": "O texto fica muito pequeno ao ajustar?", "acceptedAnswer": { "@type": "Answer", "text": "Depende do tamanho da planilha. Para planilhas com até 15 colunas, o texto geralmente fica legível. Para planilhas muito grandes, considere dividir em múltiplas páginas ou remover colunas desnecessárias." } },
    { "@type": "Question", "name": "Posso ajustar só a largura?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Configure Largura como '1 página' e Altura como 'Automático'. Assim o Excel ajusta a largura para caber em uma página mas permite múltiplas páginas na altura." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Ajustar Excel à Página para PDF",
  "description": "Configure o Excel para que a planilha caiba perfeitamente na página do PDF.",
  "step": [
    { "@type": "HowToStep", "name": "Abra o Excel", "text": "Abra a planilha que deseja converter para PDF." },
    { "@type": "HowToStep", "name": "Configure Escalar para Ajustar", "text": "Vá em Layout da Página > Escalar para Ajustar. Configure Largura: 1 página." },
    { "@type": "HowToStep", "name": "Converta para PDF", "text": "Envie o arquivo para o OmnisPDF e converta para PDF com as colunas ajustadas." }
  ]
}

export default function ExcelParaPdfAjustarAPaginaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Excel para PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Excel para PDF — Como Ajustar à Página</h1>
              <p className="text-xl text-slate-300">
                A função "Ajustar à Página" do Excel é a melhor forma de garantir que toda a planilha caiba na página do PDF. Veja como usar passo a passo.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <TableIcon className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Planilha ajustada? Converta agora.</p>
            </div>
            <Link href="/br/excel-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Converter Excel para PDF <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">O Que é "Ajustar à Página"?</h2>
              <p className="text-slate-600 mb-4">A função <strong>Escalar para Ajustar</strong> (ou "Fit to Page") do Excel redimensiona automaticamente o conteúdo da planilha para caber no número de páginas que você definir. É a forma mais eficaz de evitar colunas cortadas no PDF.</p>
              <p className="text-slate-600">Em vez de ajustar manualmente cada coluna, o Excel faz o trabalho por você — reduzindo proporcionalmente todo o conteúdo.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Configurar (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  { title: "Abra o Excel e vá para Layout da Página", desc: "Abra sua planilha no Excel. Na barra de menu, clique na aba 'Layout da Página' (Page Layout)." },
                  { title: "Encontre 'Escalar para Ajustar'", desc: "No grupo 'Escalar para Ajustar' (Scale to Fit), você verá três opções: Largura, Altura e Escala." },
                  { title: "Configure a Largura", desc: "Mude 'Largura' para '1 página'. Isso força todas as colunas a caberem na largura de uma página. Mantenha 'Altura' como 'Automático' para permitir múltiplas páginas na vertical." },
                  { title: "Verifique o resultado", desc: "Use 'Visualização de Impressão' (Ctrl+P) para ver como ficará. Se o texto ficou muito pequeno, considere usar orientação Paisagem ou remover colunas desnecessárias." },
                  { title: "Salve e converta", desc: "Salve o arquivo Excel e envie para a ferramenta Excel para PDF do OmnisPDF. As configurações de escala serão respeitadas na conversão." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Configurações Recomendadas</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead><tr className="bg-slate-900 text-white"><th className="text-left py-3 px-4 font-bold">Cenário</th><th className="text-left py-3 px-4 font-bold">Largura</th><th className="text-left py-3 px-4 font-bold">Altura</th><th className="text-left py-3 px-4 font-bold">Orientação</th></tr></thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200"><td className="py-3 px-4">Planilha com ~10 colunas</td><td className="py-3 px-4 font-semibold">1 página</td><td className="py-3 px-4">Automático</td><td className="py-3 px-4">Retrato</td></tr>
                    <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4">Planilha com ~15 colunas</td><td className="py-3 px-4 font-semibold">1 página</td><td className="py-3 px-4">Automático</td><td className="py-3 px-4 font-semibold text-orange-600">Paisagem</td></tr>
                    <tr className="border-t border-gray-200"><td className="py-3 px-4">Planilha com 20+ colunas</td><td className="py-3 px-4 font-semibold">1 página</td><td className="py-3 px-4">Automático</td><td className="py-3 px-4 font-semibold text-orange-600">Paisagem + fonte menor</td></tr>
                    <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4">Tudo em 1 página</td><td className="py-3 px-4 font-semibold">1 página</td><td className="py-3 px-4 font-semibold">1 página</td><td className="py-3 px-4">Paisagem</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Quando Não Usar Ajustar à Página</h2>
              <p className="text-slate-600 mb-4">Nem sempre ajustar tudo em uma página é a melhor opção:</p>
              <ul className="space-y-2 text-slate-700">
                <li>- <strong>Planilhas muito grandes:</strong> Se tem 30+ colunas, o texto ficará ilegível em uma página. Melhor dividir em múltiplas páginas ou remover colunas.</li>
                <li>- <strong>Dados detalhados:</strong> Se o destinatário precisa ler números pequenos, não reduza demais. Use múltiplas páginas.</li>
                <li>- <strong>Impressão em papel:</strong> Para impressão, garanta que o texto fique pelo menos em 8pt para ser legível.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dica Extra: Combine com Área de Impressão</h2>
              <p className="text-slate-600">Para o melhor resultado, combine Ajustar à Página com Área de Impressão:</p>
              <ul className="space-y-2 text-slate-700 mt-2">
                <li>1. Selecione apenas os dados que precisa no PDF</li>
                <li>2. Vá em <strong>Layout da Página &gt; Área de Impressão &gt; Definir</strong></li>
                <li>3. Configure Escalar para Ajustar: Largura 1 página</li>
                <li>4. Converta — apenas os dados selecionados serão incluídos, perfeitamente ajustados</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Planilha Ajustada? Converta Agora</h2>
            <p className="text-slate-300 mb-6">Envie seu Excel e obtenha um PDF com todas as colunas visíveis.</p>
            <Link href="/br/excel-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">
              <TableIcon className="h-5 w-5" /> Converter Excel para PDF
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Converter Excel para PDF Online", href: "/br/aprender/converter-excel-para-pdf" },
                { title: "Excel para PDF — Colunas Cortadas", href: "/br/aprender/excel-para-pdf-colunas-cortadas" },
                { title: "Converter Word para PDF Online", href: "/br/aprender/converter-word-para-pdf" },
                { title: "Word para PDF — Erros Comuns de Formato", href: "/br/aprender/word-para-pdf-erros-comuns-de-formato" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group">
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "O que faz o Ajustar à Página no Excel?", a: "Reduz ou amplia automaticamente o conteúdo para caber no número de páginas que você definir. Ideal para garantir que tudo caiba em uma página de PDF." },
                { q: "O texto fica muito pequeno ao ajustar?", a: "Depende do tamanho da planilha. Para até 15 colunas, geralmente fica legível. Para planilhas muito grandes, considere dividir em páginas ou usar paisagem." },
                { q: "Posso ajustar só a largura?", a: "Sim. Configure Largura como '1 página' e Altura como 'Automático'. O Excel ajusta a largura mas permite múltiplas páginas na altura." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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
