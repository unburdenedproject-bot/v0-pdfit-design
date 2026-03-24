import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Scissors, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Dividir PDF para Email (Caber no Limite de Anexo) | PDF.it",
  description:
    "Aprenda como dividir um PDF grande para enviar por email. Separe em partes que cabem no limite de anexo do Gmail, Outlook e outros — online, gratis.",
  keywords: "dividir pdf para email, separar pdf email, pdf grande para email, dividir pdf gmail, dividir pdf outlook",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como dividir um PDF para caber no email?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie o PDF para o PDF.it, divida em partes menores (cada uma abaixo de 20-25MB) e envie cada parte como anexo separado. Outra opcao e comprimir o PDF primeiro." }
    },
    {
      "@type": "Question",
      "name": "Qual o limite de anexo do Gmail?",
      "acceptedAnswer": { "@type": "Answer", "text": "O Gmail aceita anexos de ate 25MB. O Outlook aceita ate 20MB. Se seu PDF e maior, divida em partes ou comprima antes de enviar." }
    },
    {
      "@type": "Question",
      "name": "E melhor dividir ou comprimir para email?",
      "acceptedAnswer": { "@type": "Answer", "text": "Depende. Se o PDF e levemente acima do limite, tente comprimir primeiro. Se for muito grande (ex: 50MB+), divida em partes. Voce tambem pode combinar: comprima primeiro, e se ainda for grande, divida." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Dividir PDF para Email",
  "description": "Separe um PDF grande em partes que cabem no limite de anexo do seu email.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Envie o PDF",
      "text": "Acesse a ferramenta Dividir PDF e envie o arquivo que e grande demais para email."
    },
    {
      "@type": "HowToStep",
      "name": "Divida em partes",
      "text": "Escolha dividir em partes iguais ou por intervalos de paginas, garantindo que cada parte fique abaixo do limite de anexo."
    },
    {
      "@type": "HowToStep",
      "name": "Envie por email",
      "text": "Baixe as partes e anexe cada uma em emails separados, ou envie todas no mesmo email se o total couber no limite."
    }
  ]
}

export default function DividirPDFParaEmailPage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Dividir PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Dividir PDF para Email</h1>
              <p className="text-xl text-slate-300">
                Seu PDF e grande demais para enviar por email? Veja como dividi-lo em partes que cabem no limite de anexo do Gmail, Outlook e outros servicos.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Scissors className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Pronto para dividir? Va direto para a ferramenta.</p>
            </div>
            <Link
              href="/br/dividir-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Dividir PDF Agora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Limites de Anexo dos Servicos de Email</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Servico</th>
                      <th className="text-left py-3 px-4 font-bold">Limite</th>
                      <th className="text-left py-3 px-4 font-bold">O Que Acontece Acima</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Gmail</td>
                      <td className="py-3 px-4">25MB</td>
                      <td className="py-3 px-4">Gera link do Google Drive automaticamente</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Outlook</td>
                      <td className="py-3 px-4">20MB</td>
                      <td className="py-3 px-4">Bloqueia o envio</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Yahoo Mail</td>
                      <td className="py-3 px-4">25MB</td>
                      <td className="py-3 px-4">Bloqueia o envio</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">UOL Mail</td>
                      <td className="py-3 px-4">25MB</td>
                      <td className="py-3 px-4">Bloqueia o envio</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Estrategia: Comprimir ou Dividir?</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">Tente comprimir primeiro</h3>
                  <p className="text-slate-600 text-sm">Se o PDF esta entre 25-50MB, a <Link href="/br/comprimir-pdf" className="text-orange-600 hover:underline">compressao</Link> pode ser suficiente para caber no limite. Especialmente eficaz para documentos digitalizados.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">Divida se a compressao nao for suficiente</h3>
                  <p className="text-slate-600 text-sm">Se mesmo apos comprimir o PDF continuar grande, divida em 2 ou mais partes. Envie cada parte como anexo separado com uma nota explicativa.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">Combine ambas as estrategias</h3>
                  <p className="text-slate-600 text-sm">Para PDFs muito grandes (100MB+), comprima primeiro, depois divida. Isso garante que cada parte seja a menor possivel.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Dividir para Email (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Envie o PDF grande",
                    desc: "Acesse a ferramenta Dividir PDF e envie o arquivo que e grande demais para email.",
                  },
                  {
                    title: "Divida em partes de tamanho adequado",
                    desc: "Divida em partes iguais, garantindo que cada parte fique abaixo do limite do email (20-25MB). Para um PDF de 60MB, divida em 3 partes de ~20MB cada.",
                  },
                  {
                    title: "Envie por email",
                    desc: "Baixe as partes e anexe cada uma no email. Inclua uma nota como 'Documento dividido em 3 partes — Parte 1 de 3' para o destinatario saber.",
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para Envio por Email</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Nomeie as partes claramente:</strong> "Relatorio_Parte1de3.pdf", "Relatorio_Parte2de3.pdf".</li>
                <li>&#10003; <strong>Informe o destinatario</strong> que o documento esta dividido e em quantas partes.</li>
                <li>&#10003; <strong>O destinatario pode recombinar</strong> usando <Link href="/br/unir-pdf" className="text-orange-600 hover:underline">Unir PDF</Link> do PDF.it.</li>
                <li>&#10003; <strong>Alternativa:</strong> use <Link href="/br/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> primeiro — pode ser suficiente para caber no limite sem precisar dividir.</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Pronto para Dividir Seu PDF?</h2>
            <p className="text-slate-300 mb-6">Separe em partes que cabem no email — gratis, sem cadastro.</p>
            <Link
              href="/br/dividir-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Scissors className="h-5 w-5" /> Dividir PDF Agora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Dividir PDF", href: "/br/aprender/como-dividir-pdf" },
                { title: "Dividir PDF em Paginas Individuais", href: "/br/aprender/dividir-pdf-em-paginas-individuais" },
                { title: "Dividir PDF no Celular", href: "/br/aprender/dividir-pdf-no-celular" },
                { title: "Extrair Paginas de PDF", href: "/br/aprender/extrair-paginas-de-pdf" },
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
                { q: "Como dividir um PDF para caber no email?", a: "Envie o PDF para o PDF.it, divida em partes menores (cada uma abaixo de 20-25MB) e envie cada parte como anexo separado." },
                { q: "Qual o limite de anexo do Gmail?", a: "O Gmail aceita anexos de ate 25MB. O Outlook aceita ate 20MB. Se seu PDF e maior, divida em partes ou comprima antes de enviar." },
                { q: "E melhor dividir ou comprimir para email?", a: "Depende. Se o PDF e levemente acima do limite, tente comprimir primeiro. Se for muito grande (50MB+), divida em partes." },
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
