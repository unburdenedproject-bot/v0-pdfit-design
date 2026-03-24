import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { TableIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Converter Excel para PDF Online (Sem Cortar Colunas) | PDF.it",
  description:
    "Aprenda como converter planilhas Excel para PDF mantendo todas as colunas visíveis. Guia passo a passo para evitar colunas cortadas e formatação errada.",
  keywords: "converter excel para pdf, excel para pdf online, planilha para pdf, xlsx para pdf, converter planilha pdf grátis",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Como converto Excel para PDF grátis?", "acceptedAnswer": { "@type": "Answer", "text": "Envie seu arquivo Excel para a ferramenta Excel para PDF do PDF.it, clique em Converter e baixe o PDF. Não é necessário cadastro para seus primeiros 3 arquivos." } },
    { "@type": "Question", "name": "As colunas ficam cortadas ao converter?", "acceptedAnswer": { "@type": "Answer", "text": "O PDF.it ajusta automaticamente a planilha para caber na página PDF. Para planilhas muito largas, recomendamos usar orientação paisagem e ajustar a área de impressão no Excel antes de converter." } },
    { "@type": "Question", "name": "Posso converter Excel para PDF no celular?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em qualquer navegador móvel. Envie o arquivo Excel e baixe o PDF diretamente no celular." } },
    { "@type": "Question", "name": "As fórmulas são mantidas?", "acceptedAnswer": { "@type": "Answer", "text": "O PDF mostra os valores calculados, não as fórmulas. PDF é um formato visual — ele captura o que está visível na planilha, incluindo formatação, cores e bordas." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Converter Excel para PDF",
  "description": "Converta planilhas Excel para PDF mantendo a formatação e todas as colunas visíveis.",
  "step": [
    { "@type": "HowToStep", "name": "Envie o arquivo Excel", "text": "Acesse a ferramenta Excel para PDF do PDF.it e envie seu arquivo .xlsx ou .xls." },
    { "@type": "HowToStep", "name": "Clique em Converter", "text": "O PDF.it converte a planilha ajustando para caber na página PDF." },
    { "@type": "HowToStep", "name": "Baixe o PDF", "text": "Baixe o PDF gerado e verifique que todas as colunas estão visíveis." }
  ]
}

export default function ConverterExcelParaPdfPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Excel para PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Como Converter Excel para PDF Online (Sem Cortar Colunas)</h1>
              <p className="text-xl text-slate-300">
                Precisa enviar uma planilha Excel como PDF? Veja como converter mantendo todas as colunas, formatação e cores intactas.
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
              <p className="text-slate-700 font-semibold">Pronto para converter? Vá direto para a ferramenta.</p>
            </div>
            <Link href="/br/excel-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Converter Excel para PDF <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Converter Excel para PDF?</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Compartilhamento profissional.</strong> PDFs são universais — qualquer pessoa pode abrir sem ter Excel instalado.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Proteção de dados.</strong> O destinatário não pode alterar os dados ou ver fórmulas — vê apenas o resultado visual.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Impressão consistente.</strong> O PDF garante que a planilha será impressa exatamente como você vê na tela.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Relatórios e apresentações.</strong> PDFs de planilhas são ideais para anexar a emails, relatórios e apresentações.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Converter (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  { title: "Envie o arquivo Excel", desc: "Acesse a ferramenta Excel para PDF e envie seu arquivo .xlsx ou .xls. Arquivos até 25MB são grátis — usuários Pro podem enviar até 200MB." },
                  { title: "Clique em Converter", desc: "O PDF.it processa a planilha, convertendo cada aba para uma página (ou múltiplas páginas) no PDF. Formatação, cores e bordas são mantidas." },
                  { title: "Baixe o PDF", desc: "Baixe o PDF gerado. Abra e verifique que todas as colunas estão visíveis e a formatação está correta." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Problema Comum: Colunas Cortadas</h2>
              <p className="text-slate-600 mb-4">O maior problema ao converter Excel para PDF é planilhas largas que não cabem em uma página. Leia nosso guia detalhado: <Link href="/br/aprender/excel-para-pdf-colunas-cortadas" className="text-orange-600 hover:underline">Excel para PDF — Colunas Cortadas</Link>.</p>
              <p className="text-slate-600">Resumo rápido das soluções:</p>
              <ul className="space-y-2 text-slate-700 mt-2">
                <li>- Use orientação paisagem para planilhas largas</li>
                <li>- Defina a área de impressão no Excel antes de converter</li>
                <li>- Ajuste largura das colunas e tamanho da fonte</li>
                <li>- Use "Ajustar à página" (veja: <Link href="/br/aprender/excel-para-pdf-ajustar-a-pagina" className="text-orange-600 hover:underline">Excel para PDF — Ajustar à Página</Link>)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para Melhor Resultado</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Prepare a Planilha Antes</h3>
                  <p className="text-slate-600">Ajuste a largura das colunas, remova colunas desnecessárias e defina a área de impressão no Excel antes de converter.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use Orientação Paisagem</h3>
                  <p className="text-slate-600">Para planilhas com muitas colunas, configure a orientação como Paisagem no Excel antes de enviar. No Excel: Layout da Página &gt; Orientação &gt; Paisagem.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Verifique Múltiplas Abas</h3>
                  <p className="text-slate-600">Se seu arquivo tem múltiplas abas, todas serão convertidas para o PDF. Esconda as abas que não quer incluir antes de converter.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Converta Seu Excel para PDF</h2>
            <p className="text-slate-300 mb-6">Mantenha todas as colunas, formatação e cores — grátis, sem cadastro.</p>
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
                { title: "Excel para PDF — Colunas Cortadas (Como Resolver)", href: "/br/aprender/excel-para-pdf-colunas-cortadas" },
                { title: "Excel para PDF — Ajustar à Página", href: "/br/aprender/excel-para-pdf-ajustar-a-pagina" },
                { title: "Converter Word para PDF", href: "/br/aprender/converter-word-para-pdf" },
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

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Como converto Excel para PDF grátis?", a: "Envie seu arquivo Excel para o PDF.it, clique em Converter e baixe o PDF. Não é necessário cadastro para seus primeiros 3 arquivos." },
                { q: "As colunas ficam cortadas ao converter?", a: "O PDF.it ajusta automaticamente. Para planilhas largas, use orientação paisagem e ajuste a área de impressão antes." },
                { q: "Posso converter Excel para PDF no celular?", a: "Sim. O PDF.it funciona em qualquer navegador móvel. Envie o Excel e baixe o PDF diretamente no celular." },
                { q: "As fórmulas são mantidas?", a: "O PDF mostra os valores calculados, não as fórmulas. PDF captura o que está visível na planilha." },
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
