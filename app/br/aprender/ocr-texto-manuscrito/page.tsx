import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { ScanText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "OCR para Texto Manuscrito (O Que Esperar) | PDF.it",
  description:
    "O OCR pode ler texto manuscrito? Descubra as limitacoes, quando funciona e dicas para obter melhores resultados ao aplicar OCR em documentos manuscritos.",
  keywords: "ocr texto manuscrito, ocr letra de mao, ocr escrita manual, reconhecimento texto manuscrito",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "O OCR pode ler texto manuscrito?", "acceptedAnswer": { "@type": "Answer", "text": "Parcialmente. O OCR funciona melhor com texto impresso. Texto manuscrito com letra legivel e consistente pode ser reconhecido, mas a precisao e significativamente menor do que com texto impresso — geralmente 60-80% contra 95-99% para texto impresso." } },
    { "@type": "Question", "name": "Que tipo de escrita manual funciona melhor com OCR?", "acceptedAnswer": { "@type": "Answer", "text": "Letras de forma (maiusculas), escritas com caneta escura em papel branco, com boa separacao entre letras e palavras. Letras cursivas conectadas sao muito mais dificeis de reconhecer." } },
    { "@type": "Question", "name": "Como melhorar o OCR de texto manuscrito?", "acceptedAnswer": { "@type": "Answer", "text": "Use digitalizacao de alta resolucao (300 DPI+), garanta bom contraste entre tinta e papel, use a ferramenta Limpeza de Digitalizacao para melhorar a imagem, e revise manualmente o resultado." } },
    { "@type": "Question", "name": "O OCR funciona com caligrafia medica?", "acceptedAnswer": { "@type": "Answer", "text": "Geralmente nao. Caligrafia medica e uma das mais dificeis de reconhecer por OCR devido a letras conectadas, abreviacoes nao padrao e velocidade de escrita. Requer revisao humana." } },
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Aplicar OCR em Texto Manuscrito",
  "description": "Dicas para obter melhores resultados ao aplicar OCR em documentos manuscritos.",
  "step": [
    { "@type": "HowToStep", "name": "Digitalize em alta resolucao", "text": "Digitalize o documento manuscrito a 300 DPI ou mais, garantindo bom contraste entre tinta e papel." },
    { "@type": "HowToStep", "name": "Limpe a imagem", "text": "Use a ferramenta Limpeza de Digitalizacao para melhorar contraste, remover sombras e otimizar a imagem para OCR." },
    { "@type": "HowToStep", "name": "Aplique OCR e revise", "text": "Execute o OCR e revise manualmente o resultado, corrigindo erros de reconhecimento que sao comuns em texto manuscrito." }
  ]
}

export default function OCRTextoManuscritoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / OCR PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">OCR para Texto Manuscrito</h1>
              <p className="text-xl text-slate-300">O OCR pode ler letra de mao? Descubra quando funciona, quais sao as limitacoes e como obter os melhores resultados possiveis com documentos manuscritos.</p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><ScanText className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Experimente o Scanner OCR do PDF.it.</p>
            </div>
            <Link href="/br/scanner-ocr" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Scanner OCR <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">OCR e Texto Manuscrito: A Realidade</h2>
              <p className="text-slate-600 mb-4">O OCR foi projetado principalmente para texto impresso — fontes padrao, letras uniformes, espacamento consistente. Quando aplicado a texto manuscrito, a precisao cai significativamente.</p>
              <p className="text-slate-600 mb-4">Com texto impresso, a precisao do OCR fica entre 95% e 99%. Com texto manuscrito, essa taxa pode cair para 60% a 80%, dependendo da legibilidade da escrita.</p>
              <p className="text-slate-600">Isso nao significa que o OCR e inutil para manuscritos — significa que voce precisa ajustar suas expectativas e planejar uma revisao manual do resultado.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Quando o OCR Funciona Bem em Manuscrito</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">&#10003;</span><span><strong>Letras de forma (maiusculas)</strong> — Letras separadas e bem definidas sao muito mais faceis de reconhecer do que cursiva.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">&#10003;</span><span><strong>Caneta escura em papel branco</strong> — Bom contraste e essencial para o reconhecimento.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">&#10003;</span><span><strong>Espacamento consistente</strong> — Palavras e letras bem separadas facilitam a identificacao individual.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">&#10003;</span><span><strong>Formularios preenchidos</strong> — Campos com texto manuscrito em formularios impressos geralmente funcionam bem.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Quando o OCR Tem Dificuldade</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">&#10007;</span><span><strong>Letra cursiva conectada</strong> — Letras que se conectam sao dificeis de separar e identificar individualmente.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">&#10007;</span><span><strong>Caligrafia medica</strong> — Abreviacoes, velocidade e estilo pessoal tornam quase impossivel para OCR automatico.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">&#10007;</span><span><strong>Caneta clara ou lapis</strong> — Baixo contraste reduz drasticamente a precisao.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">&#10007;</span><span><strong>Papel pautado ou quadriculado</strong> — As linhas do papel podem confundir o motor OCR.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Dicas para Melhores Resultados</h2>
              <div className="space-y-4">
                {[
                  { title: "Digitalize em alta resolucao", desc: "Use 300 DPI ou mais. Para texto manuscrito pequeno, 600 DPI pode fazer diferenca significativa na precisao." },
                  { title: "Use Limpeza de Digitalizacao", desc: "A ferramenta de Limpeza de Digitalizacao do PDF.it melhora contraste, remove sombras e otimiza a imagem antes do OCR." },
                  { title: "Selecione o idioma correto", desc: "Mesmo para manuscrito, selecionar o idioma correto ajuda o motor OCR a usar o dicionario adequado para correcao contextual." },
                  { title: "Revise manualmente o resultado", desc: "Sempre revise o texto reconhecido. Corrija erros, especialmente em nomes proprios, numeros e termos tecnicos." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Alternativas para Texto Manuscrito</h2>
              <p className="text-slate-600 mb-4">Se o OCR automatico nao e suficiente para seu documento manuscrito, considere:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Transcricao manual:</strong> Para documentos criticos, a transcricao humana ainda e a opcao mais confiavel.</li>
                <li>&#10003; <strong>OCR + revisao:</strong> Use OCR como ponto de partida e corrija os erros manualmente — ainda e mais rapido que digitar tudo do zero.</li>
                <li>&#10003; <strong>Servicos especializados de IA:</strong> Para grandes volumes de manuscritos, existem servicos especializados em ICR (Reconhecimento Inteligente de Caracteres).</li>
              </ul>
            </section>
          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Experimente o OCR Agora</h2>
            <p className="text-slate-300 mb-6">Funciona melhor com texto impresso, mas vale testar com manuscrito tambem.</p>
            <Link href="/br/scanner-ocr" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><ScanText className="h-5 w-5" /> Scanner OCR (Pro)</Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "O Que E OCR?", href: "/br/aprender/o-que-e-ocr" },
                { title: "Dicas para Melhorar a Precisao do OCR", href: "/br/aprender/dicas-precisao-ocr" },
                { title: "OCR para Documento Digitalizado", href: "/br/aprender/ocr-documento-digitalizado" },
                { title: "OCR de PDF no Celular", href: "/br/aprender/ocr-pdf-no-celular" },
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
                { q: "O OCR pode ler texto manuscrito?", a: "Parcialmente. Funciona melhor com letras de forma legiveis. Texto cursivo e caligrafia dificil tem precisao muito menor (60-80%) comparado a texto impresso (95-99%)." },
                { q: "Que tipo de escrita funciona melhor?", a: "Letras de forma (maiusculas), escritas com caneta escura em papel branco, com boa separacao entre letras e palavras." },
                { q: "Como melhorar o OCR de texto manuscrito?", a: "Use digitalizacao de alta resolucao (300 DPI+), melhore o contraste com Limpeza de Digitalizacao, e revise manualmente o resultado." },
                { q: "O OCR funciona com caligrafia medica?", a: "Geralmente nao. Caligrafia medica e das mais dificeis de reconhecer por OCR. Requer revisao humana." },
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
