import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { FileSpreadsheet, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Relatorio Excel para PDF (Profissional e Bem Formatado) | PDF.it",
  description:
    "Aprenda como converter relatorios Excel para PDF com formatacao profissional. Cabecalhos, rodapes, graficos, margens e layout perfeitos para apresentacao.",
  keywords: "relatorio excel para pdf, converter relatorio excel pdf, excel pdf profissional, planilha relatorio pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Como criar um relatorio profissional em PDF a partir do Excel?", "acceptedAnswer": { "@type": "Answer", "text": "Configure cabecalhos e rodapes, defina margens adequadas, use Configurar Pagina para ajustar orientacao e escala, e converta para PDF. O resultado sera um documento profissional pronto para apresentacao." } },
    { "@type": "Question", "name": "Como incluir graficos no PDF do relatorio?", "acceptedAnswer": { "@type": "Answer", "text": "Certifique-se de que os graficos estao dentro da area de impressao. No Excel, use Visualizar > Quebra de Pagina para verificar. Graficos fora da area de impressao nao aparecerao no PDF." } },
    { "@type": "Question", "name": "Como numerar paginas no relatorio PDF?", "acceptedAnswer": { "@type": "Answer", "text": "No Excel, va em Inserir > Cabecalho e Rodape e adicione numero de pagina no rodape. Isso sera mantido na conversao para PDF." } },
    { "@type": "Question", "name": "Posso converter varias abas de relatorio em um unico PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. No Excel, selecione todas as abas desejadas (Ctrl+clique) antes de salvar como PDF. No PDF.it, faca upload do arquivo e todas as abas serao incluidas." } },
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Converter Relatorio Excel para PDF Profissional",
  "description": "Crie um PDF profissional a partir de relatorios Excel com formatacao perfeita.",
  "step": [
    { "@type": "HowToStep", "name": "Configure o layout", "text": "Defina orientacao, margens, cabecalhos/rodapes e area de impressao no Excel." },
    { "@type": "HowToStep", "name": "Ajuste a escala", "text": "Use Configurar Pagina para ajustar a planilha a largura da pagina sem cortar colunas." },
    { "@type": "HowToStep", "name": "Converta para PDF", "text": "Salve como PDF no Excel ou faca upload no PDF.it para conversao online." }
  ]
}

export default function RelatorioExcelParaPDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Excel para PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Relatorio Excel para PDF</h1>
              <p className="text-xl text-slate-300">Converta relatorios Excel para PDF com aparencia profissional. Cabecalhos, rodapes, graficos, margens e numeracao de paginas — tudo no lugar certo.</p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><FileSpreadsheet className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Converta seu relatorio agora.</p>
            </div>
            <Link href="/br/excel-para-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Excel para PDF <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Converter Relatorios para PDF?</h2>
              <p className="text-slate-600 mb-4">Relatorios financeiros, de vendas, de desempenho e gerenciais frequentemente sao criados no Excel. Mas para apresentacao, distribuicao e arquivamento, PDF e o formato ideal:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span><span><strong>Formatacao fixa:</strong> O relatorio fica identico em qualquer computador, celular ou impressora.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span><span><strong>Protecao de dados:</strong> O destinatario nao pode alterar os numeros ou formulas acidentalmente.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span><span><strong>Profissionalismo:</strong> PDFs bem formatados passam uma impressao de seriedade e cuidado.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span><span><strong>Facilidade de compartilhamento:</strong> PDFs sao menores e mais faceis de enviar por e-mail.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Preparando o Relatorio no Excel</h2>
              <div className="space-y-4">
                {[
                  { title: "Defina a area de impressao", desc: "Selecione as celulas do relatorio e va em Layout da Pagina > Area de Impressao > Definir Area de Impressao. Isso garante que apenas os dados relevantes vao para o PDF." },
                  { title: "Escolha a orientacao", desc: "Relatorios com muitas colunas ficam melhor em paisagem. Va em Layout da Pagina > Orientacao. Para relatorios narrativos, retrato funciona melhor." },
                  { title: "Ajuste margens e escala", desc: "Va em Configurar Pagina e ajuste margens (estreita para mais espaco). Use 'Ajustar a 1 pagina de largura' para evitar colunas cortadas." },
                  { title: "Adicione cabecalho e rodape", desc: "Va em Inserir > Cabecalho e Rodape. Adicione o titulo do relatorio no cabecalho e numero de pagina + data no rodape. Isso profissionaliza o documento." },
                  { title: "Verifique com quebra de pagina", desc: "Va em Exibicao > Visualizacao de Quebra de Pagina para ver exatamente como o relatorio sera dividido em paginas no PDF." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Incluindo Graficos no Relatorio</h2>
              <p className="text-slate-600 mb-4">Graficos sao essenciais em relatorios. Para garantir que aparecam corretamente no PDF:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Posicione graficos dentro da area de impressao definida.</li>
                <li>&#10003; Evite graficos que se sobreponham a dados da planilha.</li>
                <li>&#10003; Para graficos em pagina separada, considere mover para uma aba propria e incluir no PDF.</li>
                <li>&#10003; Verifique se as cores do grafico sao visiveis em impressao preto e branco (se o relatorio sera impresso).</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Convertendo para PDF</h2>
              <p className="text-slate-600 mb-4">Com o relatorio preparado, voce tem duas opcoes:</p>
              <div className="space-y-6">
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Opcao 1: No Excel</h3><p className="text-slate-600">Arquivo &gt; Salvar como &gt; PDF. Ou Arquivo &gt; Imprimir &gt; Impressora: Microsoft Print to PDF (Windows) ou Salvar como PDF (Mac).</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Opcao 2: PDF.it Online</h3><p className="text-slate-600">Faca upload do .xlsx no <Link href="/br/excel-para-pdf" className="text-[#14D8C4] hover:underline">Excel para PDF</Link> do PDF.it. Funciona em qualquer navegador, sem necessidade de ter Excel instalado.</p></div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Toques Finais</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Apos converter, use <Link href="/br/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> se o relatorio com graficos ficou pesado para e-mail.</li>
                <li>&#10003; Para relatorios confidenciais, adicione <Link href="/br/proteger-pdf" className="text-[#14D8C4] hover:underline">protecao por senha</Link> ao PDF.</li>
                <li>&#10003; Para relatorios internos, considere adicionar <Link href="/br/marca-dagua-pdf" className="text-[#14D8C4] hover:underline">marca d&apos;agua</Link> como &quot;USO INTERNO&quot; ou &quot;CONFIDENCIAL&quot;.</li>
                <li>&#10003; Nome o arquivo de forma clara: &quot;Relatorio_Vendas_Jan2026.pdf&quot;.</li>
              </ul>
            </section>
          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Converta Seu Relatorio Agora</h2>
            <p className="text-slate-300 mb-6">Excel para PDF com formatacao profissional em segundos.</p>
            <Link href="/br/excel-para-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><FileSpreadsheet className="h-5 w-5" /> Excel para PDF</Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Excel para PDF no Mac", href: "/br/aprender/excel-para-pdf-no-mac" },
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
                { q: "Como criar um relatorio profissional em PDF?", a: "Configure cabecalhos, rodapes, margens e area de impressao no Excel. Ajuste a escala e converta para PDF." },
                { q: "Como incluir graficos no PDF?", a: "Posicione graficos dentro da area de impressao. Use Visualizacao de Quebra de Pagina para confirmar." },
                { q: "Como numerar paginas?", a: "No Excel: Inserir > Cabecalho e Rodape > adicione numero de pagina no rodape." },
                { q: "Posso incluir varias abas em um PDF?", a: "Sim. Selecione todas as abas (Ctrl+clique) antes de salvar como PDF." },
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
