import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { RotateCw, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Corrigir PDF de Cabeca para Baixo (Inverter 180°) | PDF.it",
  description:
    "Aprenda como corrigir um PDF que esta de cabeca para baixo. Gire 180 graus para inverter paginas e deixar o documento legivel — online, gratis.",
  keywords: "pdf de cabeca para baixo, corrigir pdf invertido, girar pdf 180 graus, inverter pdf, pdf ao contrario",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como corrigir um PDF de cabeca para baixo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie o PDF para a ferramenta Girar PDF do PDF.it, selecione as paginas invertidas, aplique rotacao de 180 graus e baixe o PDF corrigido. O processo leva apenas alguns segundos." }
    },
    {
      "@type": "Question",
      "name": "Por que meu PDF esta de cabeca para baixo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Isso geralmente acontece quando o documento foi digitalizado de cabeca para baixo no scanner, ou quando o app de digitalizacao nao detectou corretamente a orientacao da pagina." }
    },
    {
      "@type": "Question",
      "name": "Posso corrigir apenas algumas paginas invertidas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Voce pode selecionar apenas as paginas que estao de cabeca para baixo e girar 180 graus, deixando as demais na orientacao original." }
    },
    {
      "@type": "Question",
      "name": "Corrigir a orientacao afeta a qualidade?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. Girar 180 graus apenas inverte a orientacao da pagina sem alterar o conteudo, a resolucao ou a qualidade do documento." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Corrigir PDF de Cabeca para Baixo",
  "description": "Inverta paginas de PDF que estao de cabeca para baixo em 3 passos.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Envie o PDF invertido",
      "text": "Acesse a ferramenta Girar PDF e envie o documento com paginas de cabeca para baixo."
    },
    {
      "@type": "HowToStep",
      "name": "Selecione 180 graus",
      "text": "Selecione as paginas invertidas e aplique rotacao de 180 graus para corrigi-las."
    },
    {
      "@type": "HowToStep",
      "name": "Baixe o PDF corrigido",
      "text": "Clique em Girar e baixe o documento com as paginas na orientacao correta."
    }
  ]
}

export default function CorrigirPDFDeCabecaParaBaixoPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Girar PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Corrigir PDF de Cabeca para Baixo</h1>
              <p className="text-xl text-slate-300">
                Seu PDF esta de cabeca para baixo e voce nao consegue ler? Corrija em segundos girando 180 graus — sem software, sem cadastro.
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que um PDF Fica de Cabeca para Baixo?</h2>
              <p className="text-slate-600 mb-4">
                As causas mais comuns para PDFs invertidos:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Digitalizacao ao contrario.</strong> O documento foi colocado de cabeca para baixo no scanner ou no alimentador automatico.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Foto com celular.</strong> Ao fotografar um documento com o celular de cabeca para baixo, o PDF gerado fica invertido.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Erro de software.</strong> Alguns programas de criacao de PDF podem gerar paginas na orientacao errada.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Corrigir (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Envie o PDF invertido",
                    desc: "Acesse a ferramenta Girar PDF e envie o documento com paginas de cabeca para baixo. Os thumbnails mostrarao claramente quais paginas estao invertidas.",
                  },
                  {
                    title: "Selecione as paginas e gire 180°",
                    desc: "Selecione as paginas invertidas (ou todas, se o documento inteiro estiver de cabeca para baixo) e aplique rotacao de 180 graus.",
                  },
                  {
                    title: "Baixe e confirme",
                    desc: "Clique em Girar PDF e baixe o resultado. Abra o PDF para confirmar que todas as paginas estao na orientacao correta.",
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">De Cabeca para Baixo vs De Lado</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Problema</th>
                      <th className="text-left py-3 px-4 font-bold">Solucao</th>
                      <th className="text-left py-3 px-4 font-bold">Rotacao</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">Texto de cabeca para baixo</td>
                      <td className="py-3 px-4">Girar 180°</td>
                      <td className="py-3 px-4 font-semibold text-orange-600">180 graus</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4">Texto deitado para a esquerda</td>
                      <td className="py-3 px-4">Girar 90° horario</td>
                      <td className="py-3 px-4 font-semibold text-orange-600">90° horario</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">Texto deitado para a direita</td>
                      <td className="py-3 px-4">Girar 90° anti-horario</td>
                      <td className="py-3 px-4 font-semibold text-orange-600">90° anti-horario</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Proximos Passos Apos Corrigir</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Comprima o PDF</strong> com <Link href="/br/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> se o arquivo for muito grande.</li>
                <li>&#10003; <strong>Una com outros documentos</strong> usando <Link href="/br/unir-pdf" className="text-orange-600 hover:underline">Unir PDF</Link> se precisar combinar varios PDFs.</li>
                <li>&#10003; <strong>Aplique OCR</strong> com <Link href="/br/ocr-pdf" className="text-orange-600 hover:underline">OCR PDF</Link> se o documento digitalizado precisa ter texto pesquisavel.</li>
                <li>&#10003; <strong>Funciona no celular:</strong> corrija PDFs invertidos direto do iPhone ou Android pelo navegador.</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Pronto para Corrigir Seu PDF?</h2>
            <p className="text-slate-300 mb-6">Gire 180° e corrija em segundos — gratis, sem cadastro.</p>
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
                { title: "Girar PDF Digitalizado", href: "/br/aprender/girar-pdf-digitalizado" },
                { title: "Girar PDF no iPhone", href: "/br/aprender/girar-pdf-no-iphone" },
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

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Como corrigir um PDF de cabeca para baixo?", a: "Envie o PDF para a ferramenta Girar PDF do PDF.it, selecione as paginas invertidas, aplique rotacao de 180 graus e baixe o PDF corrigido." },
                { q: "Por que meu PDF esta de cabeca para baixo?", a: "Isso geralmente acontece quando o documento foi digitalizado de cabeca para baixo no scanner, ou quando o app de digitalizacao nao detectou a orientacao corretamente." },
                { q: "Posso corrigir apenas algumas paginas invertidas?", a: "Sim. Voce pode selecionar apenas as paginas que estao de cabeca para baixo e girar 180 graus, deixando as demais na orientacao original." },
                { q: "Corrigir a orientacao afeta a qualidade?", a: "Nao. Girar 180 graus apenas inverte a orientacao sem alterar o conteudo, a resolucao ou a qualidade do documento." },
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
