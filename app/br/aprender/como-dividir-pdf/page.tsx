import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Scissors, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Dividir PDF (Separar Paginas Facilmente) | OmnisPDF",
  description:
    "Aprenda como dividir um PDF em partes menores ou extrair paginas especificas. Guia passo a passo para separar documentos — online, gratis, sem software.",
  keywords: "dividir pdf, separar pdf, como dividir pdf, cortar pdf, separar paginas pdf online gratis",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como dividir um PDF em partes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie o PDF para o OmnisPDF, escolha como deseja dividir (por paginas, por intervalos ou em partes iguais), clique em Dividir e baixe os arquivos resultantes. E gratis e nao precisa de cadastro." }
    },
    {
      "@type": "Question",
      "name": "Posso extrair apenas algumas paginas do PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Voce pode selecionar paginas especificas (ex: 1, 3, 5-8) para extrair em um novo PDF. Use a ferramenta Extrair Paginas para isso." }
    },
    {
      "@type": "Question",
      "name": "Dividir o PDF afeta a qualidade?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. Dividir um PDF simplesmente separa as paginas — nao ha compressao ou alteracao de qualidade. Cada parte mantem exatamente a mesma qualidade do original." }
    },
    {
      "@type": "Question",
      "name": "Posso dividir um PDF protegido com senha?",
      "acceptedAnswer": { "@type": "Answer", "text": "Voce precisa desbloquear o PDF primeiro. Use a ferramenta Desbloquear PDF, depois divida o arquivo desbloqueado." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Dividir um PDF Online",
  "description": "Separe seu PDF em partes menores em 3 passos simples.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Envie seu PDF",
      "text": "Acesse a ferramenta Dividir PDF do OmnisPDF e envie o arquivo que deseja separar."
    },
    {
      "@type": "HowToStep",
      "name": "Escolha como dividir",
      "text": "Selecione dividir por paginas especificas, por intervalos ou em partes iguais."
    },
    {
      "@type": "HowToStep",
      "name": "Baixe as partes",
      "text": "Clique em Dividir PDF e baixe os arquivos resultantes individualmente ou todos de uma vez."
    }
  ]
}

export default function ComoDividirPDFPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Dividir PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Como Dividir PDF</h1>
              <p className="text-xl text-slate-300">
                Precisa separar um PDF em partes menores ou extrair paginas especificas? Veja como fazer em menos de 30 segundos — sem software, sem cadastro.
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
              <p className="text-slate-700 font-semibold">Pronto para dividir? Pule o guia e va direto para a ferramenta.</p>
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Quando Dividir um PDF?</h2>
              <p className="text-slate-600 mb-4">
                Existem varias situacoes onde dividir um PDF e necessario:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Arquivo muito grande para email.</strong> Divida em partes menores que cabem no limite de anexo do servico de email.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Enviar apenas algumas paginas.</strong> Extraia so as paginas relevantes de um documento longo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Organizar capitulos.</strong> Separe um livro ou relatorio em capitulos individuais.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Limites de upload.</strong> Portais que aceitam PDFs de ate 2MB ou 5MB precisam de arquivos menores.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Dividir um PDF (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Envie seu PDF",
                    desc: "Acesse a ferramenta Dividir PDF e arraste o arquivo para a area de upload. Arquivos ate 25MB sao gratis — usuarios Pro podem enviar ate 200MB.",
                  },
                  {
                    title: "Escolha o modo de divisao",
                    desc: "Selecione como deseja dividir: por paginas especificas (ex: 1-5, 6-10), em paginas individuais, ou em partes iguais (ex: dividir em 3 partes).",
                  },
                  {
                    title: "Baixe as partes",
                    desc: "Clique em Dividir PDF. Baixe cada parte individualmente ou todas de uma vez como arquivo ZIP.",
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Modos de Divisao Disponiveis</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Modo</th>
                      <th className="text-left py-3 px-4 font-bold">Como Funciona</th>
                      <th className="text-left py-3 px-4 font-bold">Melhor Para</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Por intervalos</td>
                      <td className="py-3 px-4">Define quais paginas vao em cada parte (ex: 1-5, 6-10)</td>
                      <td className="py-3 px-4">Separar capitulos ou secoes</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">Paginas individuais</td>
                      <td className="py-3 px-4">Cada pagina vira um PDF separado</td>
                      <td className="py-3 px-4">Documentos digitalizados, formularios</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Partes iguais</td>
                      <td className="py-3 px-4">Divide em N partes com numero igual de paginas</td>
                      <td className="py-3 px-4">Distribuir trabalho, reduzir tamanho</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para Dividir PDFs</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Para extrair paginas especificas</strong>, use <Link href="/br/extrair-paginas-de-pdf" className="text-orange-600 hover:underline">Extrair Paginas de PDF</Link> — mais pratico quando precisa de apenas algumas paginas.</li>
                <li>&#10003; <strong>Apos dividir</strong>, voce pode <Link href="/br/comprimir-pdf" className="text-orange-600 hover:underline">comprimir cada parte</Link> para reduzir ainda mais o tamanho.</li>
                <li>&#10003; <strong>Para reunir depois</strong>, use <Link href="/br/unir-pdf" className="text-orange-600 hover:underline">Unir PDF</Link> para combinar as partes novamente.</li>
                <li>&#10003; <strong>PDFs protegidos</strong> precisam ser desbloqueados primeiro com <Link href="/br/desbloquear-pdf" className="text-orange-600 hover:underline">Desbloquear PDF</Link>.</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Pronto para Dividir Seu PDF?</h2>
            <p className="text-slate-300 mb-6">Separe paginas em segundos — gratis, sem cadastro.</p>
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
                { title: "Dividir PDF em Paginas Individuais", href: "/br/aprender/dividir-pdf-em-paginas-individuais" },
                { title: "Dividir PDF para Email", href: "/br/aprender/dividir-pdf-para-email" },
                { title: "Dividir PDF no Celular", href: "/br/aprender/dividir-pdf-no-celular" },
                { title: "Extrair Paginas de PDF", href: "/br/aprender/extrair-paginas-de-pdf" },
                { title: "Extrair Paginas de PDF — Guia Completo", href: "/br/aprender/extrair-paginas-de-pdf-guia" },
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
                { q: "Como dividir um PDF em partes?", a: "Envie o PDF para o OmnisPDF, escolha como deseja dividir (por paginas, por intervalos ou em partes iguais), clique em Dividir e baixe os arquivos resultantes." },
                { q: "Posso extrair apenas algumas paginas do PDF?", a: "Sim. Voce pode selecionar paginas especificas para extrair em um novo PDF. Use a ferramenta Extrair Paginas para isso." },
                { q: "Dividir o PDF afeta a qualidade?", a: "Nao. Dividir um PDF simplesmente separa as paginas — nao ha compressao ou alteracao de qualidade." },
                { q: "Posso dividir um PDF protegido com senha?", a: "Voce precisa desbloquear o PDF primeiro. Use a ferramenta Desbloquear PDF, depois divida o arquivo desbloqueado." },
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
