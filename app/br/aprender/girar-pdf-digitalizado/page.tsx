import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { RotateCw, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Girar PDF Digitalizado (Corrigir Orientacao de Escaneados) | OmnisPDF",
  description:
    "Aprenda como girar PDFs digitalizados que ficaram na orientacao errada. Corrija documentos escaneados de lado ou de cabeca para baixo — online, gratis.",
  keywords: "girar pdf digitalizado, girar pdf escaneado, corrigir orientacao pdf, pdf digitalizado de lado, rotacionar pdf scanner",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como corrigir um PDF digitalizado que ficou de lado?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie o PDF para a ferramenta Girar PDF, selecione as paginas que estao de lado e aplique rotacao de 90 graus (horario ou anti-horario, conforme necessario). Baixe o PDF corrigido." }
    },
    {
      "@type": "Question",
      "name": "Por que documentos digitalizados ficam na orientacao errada?",
      "acceptedAnswer": { "@type": "Answer", "text": "Isso acontece quando o documento e colocado no scanner em posicao diferente da esperada, ou quando o app de digitalizacao do celular nao detecta corretamente a orientacao do documento." }
    },
    {
      "@type": "Question",
      "name": "Girar afeta a legibilidade do texto digitalizado?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. Girar apenas muda a orientacao da pagina sem alterar o conteudo. O texto digitalizado permanece com a mesma qualidade e legibilidade apos a rotacao." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Girar PDF Digitalizado",
  "description": "Corrija a orientacao de documentos digitalizados em poucos passos.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Envie o PDF digitalizado",
      "text": "Acesse a ferramenta Girar PDF e envie o documento escaneado com orientacao errada."
    },
    {
      "@type": "HowToStep",
      "name": "Identifique e gire as paginas",
      "text": "Visualize os thumbnails, identifique quais paginas estao erradas e aplique a rotacao adequada."
    },
    {
      "@type": "HowToStep",
      "name": "Baixe o PDF corrigido",
      "text": "Clique em Girar e baixe o documento com todas as paginas na orientacao correta."
    }
  ]
}

export default function GirarPDFDigitalizadoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <HeaderBr />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Girar PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Girar PDF Digitalizado</h1>
              <p className="text-xl text-slate-300">
                Digitalizou um documento e ele ficou de lado ou de cabeca para baixo? Veja como corrigir a orientacao rapidamente.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <RotateCw className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Pronto para corrigir? Va direto para a ferramenta.</p>
            </div>
            <Link
              href="/br/girar-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Girar PDF Agora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Problemas Comuns com PDFs Digitalizados</h2>
              <p className="text-slate-600 mb-4">
                Documentos digitalizados frequentemente apresentam problemas de orientacao:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Paginas de lado (90° errado).</strong> O documento foi colocado no scanner em posicao horizontal quando deveria estar vertical, ou vice-versa.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Paginas de cabeca para baixo (180°).</strong> O documento foi digitalizado ao contrario — o texto aparece invertido.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Orientacoes misturadas.</strong> Num lote de digitalizacao, diferentes paginas ficaram em orientacoes diferentes.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Corrigir (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Envie o PDF digitalizado",
                    desc: "Acesse a ferramenta Girar PDF e envie o documento escaneado. Os thumbnails mostrarao a orientacao atual de cada pagina.",
                  },
                  {
                    title: "Identifique paginas com problema",
                    desc: "Olhe os thumbnails e identifique quais paginas estao de lado (precisam de 90°) ou de cabeca para baixo (precisam de 180°).",
                  },
                  {
                    title: "Aplique a rotacao correta",
                    desc: "Para cada pagina com problema, selecione a rotacao adequada. Voce pode girar paginas individuais em direcoes diferentes conforme necessario.",
                  },
                  {
                    title: "Baixe e verifique",
                    desc: "Clique em Girar PDF, baixe o resultado e abra para confirmar que todas as paginas estao na orientacao correta.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Fluxo Ideal para Documentos Digitalizados</h2>
              <p className="text-slate-600 mb-4">
                Para o melhor resultado com documentos digitalizados, siga esta sequencia:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Passo 1: Gire</strong> — corrija a orientacao de todas as paginas usando <Link href="/br/girar-pdf" className="text-orange-600 hover:underline">Girar PDF</Link>.</li>
                <li>&#10003; <strong>Passo 2: Una</strong> — se tem varios PDFs digitalizados, combine com <Link href="/br/unir-pdf" className="text-orange-600 hover:underline">Unir PDF</Link>.</li>
                <li>&#10003; <strong>Passo 3: Comprima</strong> — reduza o tamanho com <Link href="/br/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> (documentos digitalizados comprimem muito bem).</li>
                <li>&#10003; <strong>Passo 4: OCR (opcional)</strong> — se precisa que o texto seja pesquisavel, use <Link href="/br/ocr-pdf" className="text-orange-600 hover:underline">OCR PDF</Link>.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para Evitar Problemas de Orientacao</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Posicione corretamente</strong> o documento no scanner antes de digitalizar.</li>
                <li>&#10003; <strong>Use apps de digitalizacao</strong> com deteccao automatica de orientacao (ex: Adobe Scan, Microsoft Lens).</li>
                <li>&#10003; <strong>Verifique cada pagina</strong> imediatamente apos digitalizar — e mais facil redigitalizar do que corrigir depois.</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Pronto para Corrigir Seu PDF Digitalizado?</h2>
            <p className="text-slate-300 mb-6">Gire as paginas para a orientacao correta — gratis, sem cadastro.</p>
            <Link
              href="/br/girar-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <RotateCw className="h-5 w-5" /> Girar PDF Agora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Girar PDF", href: "/br/aprender/como-girar-pdf" },
                { title: "Girar PDF no iPhone", href: "/br/aprender/girar-pdf-no-iphone" },
                { title: "Corrigir PDF de Cabeca para Baixo", href: "/br/aprender/corrigir-pdf-de-cabeca-para-baixo" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"
                >
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
                { q: "Como corrigir um PDF digitalizado que ficou de lado?", a: "Envie o PDF para a ferramenta Girar PDF, selecione as paginas que estao de lado e aplique rotacao de 90 graus. Baixe o PDF corrigido." },
                { q: "Por que documentos digitalizados ficam na orientacao errada?", a: "Isso acontece quando o documento e colocado no scanner em posicao diferente da esperada, ou quando o app de digitalizacao nao detecta corretamente a orientacao." },
                { q: "Girar afeta a legibilidade do texto digitalizado?", a: "Nao. Girar apenas muda a orientacao da pagina sem alterar o conteudo. O texto permanece com a mesma qualidade e legibilidade." },
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
