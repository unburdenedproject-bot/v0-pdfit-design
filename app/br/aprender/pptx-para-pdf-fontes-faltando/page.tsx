import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Type, ArrowRight } from "lucide-react"

export const metadata = {
  title: "PPTX para PDF — Fontes Faltando? Como Corrigir | OmnisPDF",
  description: "Resolvendo o problema de fontes faltando ao converter PowerPoint para PDF. Aprenda a incorporar fontes, identificar substituicoes e garantir que seu PDF fique perfeito.",
  keywords: "pptx para pdf fontes faltando, fontes powerpoint pdf, incorporar fontes powerpoint, fontes substituidas pdf, fontes sumindo pdf",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Por que minhas fontes estao diferentes no PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Quando o PowerPoint usa fontes que nao estao incorporadas no arquivo, o conversor substitui por fontes padrao (como Arial ou Calibri). Isso acontece com fontes personalizadas, baixadas ou de sistemas especificos." } },
  { "@type": "Question", "name": "Como incorporo fontes no PowerPoint?", "acceptedAnswer": { "@type": "Answer", "text": "Va em Arquivo > Opcoes > Salvar e marque 'Incorporar fontes no arquivo'. Escolha 'Incorporar todos os caracteres' para maximo compatibilidade. Isso aumenta o tamanho do arquivo mas garante que as fontes aparecam corretamente." } },
  { "@type": "Question", "name": "Fontes do Google Fonts precisam ser incorporadas?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Mesmo fontes gratuitas do Google Fonts precisam ser incorporadas se nao estiverem instaladas no computador que fara a conversao. Incorpore-as no PowerPoint ou instale-as no sistema antes de converter." } },
  { "@type": "Question", "name": "Posso corrigir as fontes depois de converter para PDF?", "acceptedAnswer": { "@type": "Answer", "text": "E muito dificil corrigir fontes em um PDF ja convertido. A melhor abordagem e corrigir no PowerPoint original (incorporando as fontes) e converter novamente." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como corrigir fontes faltando ao converter PPTX para PDF", "description": "Corrija problemas de fontes antes de converter seu PowerPoint para PDF.", "step": [
  { "@type": "HowToStep", "name": "Identifique as fontes usadas", "text": "No PowerPoint, use Substituir Fontes (Inicio > Substituir > Substituir Fontes) para ver todas as fontes usadas na apresentacao." },
  { "@type": "HowToStep", "name": "Incorpore as fontes no arquivo", "text": "Va em Arquivo > Opcoes > Salvar e marque 'Incorporar fontes no arquivo'." },
  { "@type": "HowToStep", "name": "Converta para PDF", "text": "Envie o arquivo com fontes incorporadas para o conversor do OmnisPDF para obter um PDF perfeito." }
] }

export default function PptxParaPdfFontesFaltandoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PowerPoint para PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">PPTX para PDF — Fontes Faltando</h1>
          <p className="text-xl text-slate-300">Converteu seu PowerPoint para PDF e as fontes ficaram diferentes? Entenda por que isso acontece e como resolver de uma vez por todas.</p>
        </div></div></section>

        <section className="py-8 bg-orange-50 border-b border-orange-100"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><Type className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Pronto para converter? Pule o guia e va direto para a ferramenta.</p></div>
          <Link href="/br/powerpoint-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Converter PPT para PDF <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por que as fontes somem ou mudam no PDF?</h2>
            <p className="text-slate-600 mb-4">Quando voce cria uma apresentacao no PowerPoint, as fontes usadas estao instaladas no seu computador. Mas quando o arquivo e convertido para PDF em outro ambiente (como um conversor online), as fontes podem nao estar disponiveis. Resultado:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Fontes substituidas.</strong> O conversor troca a fonte original por uma similar (ex: sua fonte decorativa vira Arial).</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Espacamento alterado.</strong> Mesmo fontes similares tem metricas diferentes, causando texto desalinhado ou cortado.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Caracteres especiais perdidos.</strong> Fontes personalizadas podem ter glifos unicos que nao existem na fonte substituta.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como incorporar fontes no PowerPoint (solucao definitiva)</h2>
            <div className="space-y-4">
              {[
                { title: "Abra as opcoes do PowerPoint", desc: "Va em Arquivo > Opcoes > Salvar. Na secao 'Preservar fidelidade ao compartilhar', marque 'Incorporar fontes no arquivo'." },
                { title: "Escolha o nivel de incorporacao", desc: "'Incorporar apenas os caracteres usados' reduz o tamanho do arquivo. 'Incorporar todos os caracteres' garante maxima compatibilidade — recomendado se outra pessoa pode editar o arquivo." },
                { title: "Salve e converta", desc: "Salve o arquivo PPTX. Agora as fontes estao dentro do arquivo. Envie para o conversor do OmnisPDF e o PDF tera as fontes corretas." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Fontes seguras que sempre funcionam</h2>
            <p className="text-slate-600 mb-4">Se voce nao pode incorporar fontes (ex: licenca da fonte nao permite), use fontes que estao disponiveis em praticamente todos os sistemas:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Arial / Helvetica</strong> — sans-serif classica, disponivel em todos os sistemas.</li>
              <li>&#10003; <strong>Calibri</strong> — padrao do Microsoft Office desde 2007.</li>
              <li>&#10003; <strong>Times New Roman</strong> — serif tradicional, universal.</li>
              <li>&#10003; <strong>Verdana</strong> — otima legibilidade em tela.</li>
              <li>&#10003; <strong>Georgia</strong> — serif elegante, disponivel amplamente.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Como verificar fontes antes de converter</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Use Substituir Fontes:</strong> No PowerPoint, va em Inicio &gt; Substituir &gt; Substituir Fontes para ver todas as fontes usadas na apresentacao.</li>
              <li>&#10003; <strong>Verifique em outro computador:</strong> Abra o arquivo em outro computador sem as fontes instaladas para ver como ficaria sem incorporacao.</li>
              <li>&#10003; <strong>Use o PowerPoint Online:</strong> Abra no PowerPoint Online (gratuito) — se as fontes aparecerem diferente la, vao aparecer diferente no PDF tambem.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Outras dicas para conversao perfeita</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; Veja nosso guia completo de <Link href="/br/aprender/converter-ppt-para-pdf" className="text-orange-600 hover:underline">como converter PowerPoint para PDF</Link>.</li>
              <li>&#10003; Se o PDF ficou grande apos incorporar fontes, use nosso <Link href="/br/comprimir-pdf" className="text-orange-600 hover:underline">compressor de PDF</Link>.</li>
              <li>&#10003; Para impressao, confira nosso guia de <Link href="/br/aprender/ppt-para-pdf-para-imprimir" className="text-orange-600 hover:underline">PPT para PDF para imprimir</Link>.</li>
            </ul>
          </section>
        </div></article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Converta seu PowerPoint com fontes perfeitas</h2>
          <p className="text-slate-300 mb-6">Incorpore as fontes, envie seu PPTX e obtenha um PDF fiel ao original — gratis, sem cadastro.</p>
          <Link href="/br/powerpoint-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><Type className="h-5 w-5" /> Converter PPT para PDF Agora</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Converter PowerPoint para PDF online (guia completo)", href: "/br/aprender/converter-ppt-para-pdf" },
              { title: "PPT para PDF — E as animacoes?", href: "/br/aprender/ppt-para-pdf-animacoes" },
              { title: "PPT para PDF para imprimir: dicas de layout e qualidade", href: "/br/aprender/ppt-para-pdf-para-imprimir" },
              { title: "PPT para PDF no iPhone (metodo rapido)", href: "/br/aprender/ppt-para-pdf-no-iphone" },
            ].map((a) => (<Link key={a.href} href={a.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"><span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{a.title}</span><ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" /></Link>))}
          </div>
        </div></section>

        <section className="py-16 bg-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas frequentes</h2>
          <div className="space-y-6">
            {(faqSchema.mainEntity as Array<{name: string; acceptedAnswer: {text: string}}>).map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200"><h3 className="font-bold text-slate-900 mb-2">{faq.name}</h3><p className="text-slate-600 text-sm">{faq.acceptedAnswer.text}</p></div>
            ))}
          </div>
        </div></section>
      </main>
      <FooterBr />
    </div>
  )
}
