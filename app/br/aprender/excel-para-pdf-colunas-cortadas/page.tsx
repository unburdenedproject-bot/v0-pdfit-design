import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { TableIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Excel para PDF — Colunas Cortadas? Como Resolver | PDF.it",
  description:
    "Seu Excel para PDF cortou colunas? Descubra por que isso acontece e 5 formas de resolver para que todas as colunas caibam na página do PDF.",
  keywords: "excel para pdf colunas cortadas, planilha pdf cortada, excel pdf não cabe, colunas faltando pdf, ajustar excel para pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Por que as colunas ficam cortadas no PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Porque a planilha é mais larga que a página do PDF. Uma folha A4 retrato tem largura limitada. Se sua planilha tem muitas colunas ou colunas largas, elas não cabem e são cortadas." } },
    { "@type": "Question", "name": "Como fazer todas as colunas caberem no PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Use orientação paisagem, reduza a largura das colunas, diminua o tamanho da fonte, defina a área de impressão ou use a opção Ajustar à página no Excel." } },
    { "@type": "Question", "name": "Posso usar paisagem no PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. No Excel, mude a orientação para Paisagem antes de converter: Layout da Página > Orientação > Paisagem. Isso dá mais espaço horizontal para as colunas." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Resolver Colunas Cortadas no Excel para PDF",
  "description": "5 soluções para evitar colunas cortadas ao converter Excel para PDF.",
  "step": [
    { "@type": "HowToStep", "name": "Mude para paisagem", "text": "No Excel: Layout da Página > Orientação > Paisagem." },
    { "@type": "HowToStep", "name": "Ajuste à página", "text": "No Excel: Layout da Página > Escalar para ajustar > 1 página de largura." },
    { "@type": "HowToStep", "name": "Converta no PDF.it", "text": "Envie o Excel ajustado e converta para PDF." }
  ]
}

export default function ExcelParaPdfColunasCortadasPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Excel para PDF — Colunas Cortadas? Como Resolver</h1>
              <p className="text-xl text-slate-300">
                Converteu Excel para PDF e as colunas ficaram cortadas? Veja 5 soluções para garantir que toda a planilha caiba na página do PDF.
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
              <p className="text-slate-700 font-semibold">Ajuste a planilha e converta sem colunas cortadas.</p>
            </div>
            <Link href="/br/excel-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Converter Excel para PDF <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que as Colunas São Cortadas?</h2>
              <p className="text-slate-600 mb-4">O problema é simples: a planilha é mais larga que a página do PDF. Uma folha A4 retrato tem apenas ~21cm de largura. Se sua planilha tem 15+ colunas, elas simplesmente não cabem.</p>
              <p className="text-slate-600">A boa notícia: existem várias formas de resolver isso antes de converter.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">5 Soluções (Da Mais Fácil à Mais Eficaz)</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">1. Mude para Orientação Paisagem</h3>
                  <p className="text-slate-600 mb-2">A solução mais simples. No Excel:</p>
                  <ul className="space-y-1 text-slate-600 text-sm">
                    <li>- Vá em <strong>Layout da Página &gt; Orientação &gt; Paisagem</strong></li>
                    <li>- Isso muda a página de vertical para horizontal, dando ~30cm de largura</li>
                    <li>- Funciona para planilhas com até ~15 colunas de largura média</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">2. Use "Ajustar à Página"</h3>
                  <p className="text-slate-600 mb-2">Force toda a planilha a caber em uma página:</p>
                  <ul className="space-y-1 text-slate-600 text-sm">
                    <li>- No Excel: <strong>Layout da Página &gt; Escalar para ajustar</strong></li>
                    <li>- Configure <strong>Largura: 1 página</strong> e <strong>Altura: Automático</strong></li>
                    <li>- O Excel reduz automaticamente o tamanho para caber</li>
                  </ul>
                  <p className="text-slate-600 text-sm mt-2">Leia mais: <Link href="/br/aprender/excel-para-pdf-ajustar-a-pagina" className="text-orange-600 hover:underline">Excel para PDF — Ajustar à Página</Link></p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">3. Reduza a Largura das Colunas</h3>
                  <p className="text-slate-600 mb-2">Muitas vezes as colunas são mais largas do que precisam:</p>
                  <ul className="space-y-1 text-slate-600 text-sm">
                    <li>- Selecione todas as colunas (Ctrl+A)</li>
                    <li>- Clique com botão direito &gt; <strong>Largura da Coluna</strong></li>
                    <li>- Ou use <strong>Autoajustar Largura da Coluna</strong> para ajustar ao conteúdo</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">4. Diminua o Tamanho da Fonte</h3>
                  <p className="text-slate-600">Reduzir a fonte de 11pt para 9pt ou 8pt pode fazer toda a diferença. O texto ainda fica legível no PDF e as colunas ocupam menos espaço.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">5. Defina a Área de Impressão</h3>
                  <p className="text-slate-600 mb-2">Se não precisa de todas as colunas no PDF:</p>
                  <ul className="space-y-1 text-slate-600 text-sm">
                    <li>- Selecione apenas as colunas que precisa</li>
                    <li>- Vá em <strong>Layout da Página &gt; Área de Impressão &gt; Definir Área de Impressão</strong></li>
                    <li>- Apenas a área selecionada será convertida para PDF</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Resumo Rápido</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead><tr className="bg-slate-900 text-white"><th className="text-left py-3 px-4 font-bold">Solução</th><th className="text-left py-3 px-4 font-bold">Quando Usar</th><th className="text-left py-3 px-4 font-bold">Dificuldade</th></tr></thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Paisagem</td><td className="py-3 px-4">Planilha um pouco larga demais</td><td className="py-3 px-4 text-green-600">Fácil</td></tr>
                    <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Ajustar à página</td><td className="py-3 px-4">Quer tudo em 1 página</td><td className="py-3 px-4 text-green-600">Fácil</td></tr>
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Reduzir colunas</td><td className="py-3 px-4">Colunas mais largas que necessário</td><td className="py-3 px-4 text-yellow-600">Médio</td></tr>
                    <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Fonte menor</td><td className="py-3 px-4">Ajuste fino</td><td className="py-3 px-4 text-green-600">Fácil</td></tr>
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Área de impressão</td><td className="py-3 px-4">Só precisa de parte da planilha</td><td className="py-3 px-4 text-green-600">Fácil</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Converta Sem Colunas Cortadas</h2>
            <p className="text-slate-300 mb-6">Ajuste a planilha e converta para PDF com todas as colunas visíveis.</p>
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
                { title: "Excel para PDF — Ajustar à Página", href: "/br/aprender/excel-para-pdf-ajustar-a-pagina" },
                { title: "Word para PDF — Erros Comuns de Formato", href: "/br/aprender/word-para-pdf-erros-comuns-de-formato" },
                { title: "Converter Word para PDF Online", href: "/br/aprender/converter-word-para-pdf" },
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
                { q: "Por que as colunas ficam cortadas no PDF?", a: "A planilha é mais larga que a página do PDF. Use paisagem, ajuste à página ou reduza a largura das colunas." },
                { q: "Como fazer todas as colunas caberem no PDF?", a: "A forma mais fácil é usar Ajustar à Página no Excel: Layout da Página > Escalar para ajustar > Largura: 1 página." },
                { q: "Posso usar paisagem no PDF?", a: "Sim. No Excel, mude para Paisagem antes de converter: Layout da Página > Orientação > Paisagem." },
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
