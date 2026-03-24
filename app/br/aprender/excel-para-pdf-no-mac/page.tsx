import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { FileSpreadsheet, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Excel para PDF no Mac (Fluxo Rapido e Confiavel) | PDF.it",
  description:
    "Aprenda como converter Excel para PDF no Mac usando Excel para Mac, Preview e PDF.it online. Resolva problemas de fontes, colunas cortadas e formatacao.",
  keywords: "excel para pdf mac, converter excel pdf mac, xlsx pdf mac, planilha pdf mac, excel para mac pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Como converter Excel para PDF no Mac?", "acceptedAnswer": { "@type": "Answer", "text": "Tres opcoes: 1) No Excel para Mac, use Arquivo > Salvar como > PDF. 2) Use Imprimir > Salvar como PDF. 3) Faca upload do arquivo XLSX no PDF.it online para conversao sem instalar nada." } },
    { "@type": "Question", "name": "Por que colunas ficam cortadas no PDF?", "acceptedAnswer": { "@type": "Answer", "text": "A planilha e mais larga que a pagina. Solucoes: mude a orientacao para paisagem, ajuste a escala em Configurar Pagina, ou reduza a largura das colunas." } },
    { "@type": "Question", "name": "O PDF.it funciona no Mac?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it e uma ferramenta online que funciona em qualquer navegador, incluindo Safari e Chrome no Mac." } },
    { "@type": "Question", "name": "Fontes do Excel mudam no PDF no Mac?", "acceptedAnswer": { "@type": "Answer", "text": "Pode acontecer se voce usar fontes Windows que nao existem no Mac (como Calibri antigo). Use fontes universais como Arial ou Helvetica para resultados consistentes." } },
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Converter Excel para PDF no Mac",
  "description": "Converta planilhas Excel para PDF no Mac mantendo formatacao e colunas.",
  "step": [
    { "@type": "HowToStep", "name": "Prepare a planilha", "text": "Ajuste margens, orientacao e area de impressao no Excel para Mac." },
    { "@type": "HowToStep", "name": "Converta para PDF", "text": "Use Salvar como PDF no Excel, Imprimir > PDF, ou faca upload no PDF.it online." },
    { "@type": "HowToStep", "name": "Verifique o resultado", "text": "Abra o PDF e confira se todas as colunas, dados e formatacao estao corretos." }
  ]
}

export default function ExcelParaPDFMacPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Excel para PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Excel para PDF no Mac</h1>
              <p className="text-xl text-slate-300">Converta planilhas Excel para PDF no Mac sem colunas cortadas ou fontes trocadas. Tres metodos: Excel para Mac, Preview e PDF.it online.</p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><FileSpreadsheet className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Converta Excel para PDF online agora.</p>
            </div>
            <Link href="/br/excel-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Excel para PDF <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Metodo 1: Excel para Mac (Salvar Como)</h2>
              <p className="text-slate-600 mb-4">Se voce tem o Excel para Mac instalado:</p>
              <div className="space-y-4">
                {[
                  { title: "Abra a planilha no Excel", desc: "Abra o arquivo .xlsx no Excel para Mac." },
                  { title: "Configure a pagina", desc: "Va em Layout da Pagina > Configurar Pagina. Escolha orientacao (retrato ou paisagem), ajuste as margens e defina a area de impressao se necessario." },
                  { title: "Salve como PDF", desc: "Arquivo > Salvar como > Escolha 'PDF' no formato. Ou use Arquivo > Imprimir > botao 'PDF' no canto inferior esquerdo > Salvar como PDF." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Metodo 2: PDF.it Online</h2>
              <p className="text-slate-600 mb-4">Se nao tem Excel instalado ou quer uma conversao mais consistente:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Acesse <Link href="/br/excel-para-pdf" className="text-orange-600 hover:underline">Excel para PDF</Link> no PDF.it.</li>
                <li>&#10003; Faca upload do arquivo .xlsx.</li>
                <li>&#10003; Baixe o PDF convertido.</li>
                <li>&#10003; Funciona no Safari e Chrome — sem instalacao.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Problemas Comuns no Mac e Solucoes</h2>
              <div className="space-y-6">
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Colunas Cortadas</h3><p className="text-slate-600">A planilha e mais larga que a pagina A4. Solucoes: mude para orientacao paisagem, reduza a escala em Configurar Pagina (ex: &quot;Ajustar a 1 pagina de largura&quot;), ou reduza a largura das colunas.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Fontes Diferentes</h3><p className="text-slate-600">O Excel no Mac pode substituir fontes Windows como Calibri por fontes Mac. Use Arial ou Helvetica para resultados identicos em ambas plataformas.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Graficos Nao Aparecem</h3><p className="text-slate-600">Certifique-se de que graficos estao dentro da area de impressao. No Excel, va em Visualizar &gt; Quebra de Pagina para verificar o que sera incluido no PDF.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Varias Abas da Planilha</h3><p className="text-slate-600">Por padrao, o Excel exporta apenas a aba ativa. Para exportar todas, selecione todas as abas (Ctrl+clique) antes de salvar como PDF.</p></div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para o Mac</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Use Visualizacao de Quebra de Pagina no Excel para ver exatamente como a planilha sera dividida em paginas.</li>
                <li>&#10003; Defina a area de impressao manualmente se so precisa exportar parte da planilha.</li>
                <li>&#10003; Apos converter, use <Link href="/br/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> se o arquivo ficou grande (especialmente com graficos).</li>
                <li>&#10003; O Preview do Mac pode abrir e verificar o PDF sem instalar nenhum leitor adicional.</li>
              </ul>
            </section>
          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Converta Excel para PDF</h2>
            <p className="text-slate-300 mb-6">Funciona no Mac, Windows e celular — direto no navegador.</p>
            <Link href="/br/excel-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><FileSpreadsheet className="h-5 w-5" /> Excel para PDF</Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Relatorio Excel para PDF", href: "/br/aprender/relatorio-excel-para-pdf" },
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
                { q: "Como converter Excel para PDF no Mac?", a: "Use Arquivo > Salvar como > PDF no Excel para Mac, ou faca upload no PDF.it online." },
                { q: "Por que colunas ficam cortadas?", a: "A planilha e mais larga que a pagina. Mude para paisagem, ajuste a escala ou reduza colunas." },
                { q: "O PDF.it funciona no Mac?", a: "Sim. Funciona em qualquer navegador, incluindo Safari e Chrome." },
                { q: "Fontes mudam no PDF?", a: "Pode acontecer com fontes Windows. Use Arial ou Helvetica para resultados consistentes." },
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
