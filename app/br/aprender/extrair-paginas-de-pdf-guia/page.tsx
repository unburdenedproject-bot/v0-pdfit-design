import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Scissors, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Extrair Paginas de PDF — Guia Completo | PDF.it",
  description:
    "Guia completo sobre como extrair paginas de PDF. Aprenda todas as tecnicas: selecao individual, intervalos, extracao em lote e mais — online, gratis.",
  keywords: "extrair paginas pdf guia, como extrair paginas pdf, selecionar paginas pdf, guia extrair pdf completo",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Posso extrair paginas nao consecutivas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Voce pode selecionar qualquer combinacao de paginas, como 1, 5, 8-12, 15. As paginas extraidas aparecerao no novo PDF na ordem em que foram selecionadas." }
    },
    {
      "@type": "Question",
      "name": "Posso extrair paginas de varios PDFs ao mesmo tempo?",
      "acceptedAnswer": { "@type": "Answer", "text": "O PDF.it processa um PDF por vez. Para combinar paginas de diferentes PDFs, extraia as paginas de cada um separadamente e depois use Unir PDF para combinar os resultados." }
    },
    {
      "@type": "Question",
      "name": "Posso mudar a ordem das paginas extraidas?",
      "acceptedAnswer": { "@type": "Answer", "text": "As paginas sao extraidas na ordem em que voce as seleciona. Se precisar reordenar, extraia primeiro e depois use a ferramenta de reorganizar paginas." }
    },
    {
      "@type": "Question",
      "name": "A extracao mantem a qualidade das paginas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Extrair paginas nao envolve compressao — as paginas extraidas mantem exatamente a mesma qualidade do PDF original." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Guia Completo para Extrair Paginas de PDF",
  "description": "Aprenda todas as formas de extrair paginas de um PDF.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Envie o PDF",
      "text": "Acesse a ferramenta Extrair Paginas e envie o PDF do qual deseja extrair paginas."
    },
    {
      "@type": "HowToStep",
      "name": "Selecione as paginas",
      "text": "Use clique para selecao individual, intervalos (5-10) ou Ctrl+clique para selecao multipla."
    },
    {
      "@type": "HowToStep",
      "name": "Extraia e use",
      "text": "Clique em Extrair, baixe o novo PDF e use como precisar — enviar, imprimir ou combinar com outros documentos."
    }
  ]
}

export default function ExtrairPaginasDePDFGuiaPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extrair Paginas de PDF — Guia Completo</h1>
              <p className="text-xl text-slate-300">
                Tudo que voce precisa saber sobre extracao de paginas: selecao individual, intervalos, cenarios avancados e dicas de produtividade.
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
              <p className="text-slate-700 font-semibold">Pronto para extrair? Va direto para a ferramenta.</p>
            </div>
            <Link
              href="/br/extrair-paginas-de-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Extrair Paginas Agora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Formas de Selecionar Paginas</h2>
              <p className="text-slate-600 mb-4">
                O PDF.it oferece varias formas de selecionar as paginas que deseja extrair:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">Selecao por clique</h3>
                  <p className="text-slate-600 text-sm">Clique no thumbnail de cada pagina que deseja extrair. Clique novamente para desselecionar. Simples e visual.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">Selecao por intervalo</h3>
                  <p className="text-slate-600 text-sm">Digite intervalos como "1-5, 8, 12-15". Ideal quando voce sabe exatamente quais paginas precisa.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">Selecionar todas / nenhuma</h3>
                  <p className="text-slate-600 text-sm">Use "Selecionar todas" e depois remova as que nao precisa. Util quando quer a maioria das paginas.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Passo a Passo Detalhado</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Envie o PDF original",
                    desc: "Acesse a ferramenta Extrair Paginas e envie o PDF. Todas as paginas serao exibidas como thumbnails para facil visualizacao e identificacao.",
                  },
                  {
                    title: "Selecione as paginas",
                    desc: "Use qualquer metodo de selecao: clique individual, intervalos digitados ou selecao em massa. Paginas selecionadas ficam destacadas em laranja.",
                  },
                  {
                    title: "Verifique a selecao",
                    desc: "Confira o contador de paginas selecionadas. Role pela lista de thumbnails para garantir que nao esqueceu nenhuma pagina importante.",
                  },
                  {
                    title: "Extraia e baixe",
                    desc: "Clique em Extrair Paginas. O novo PDF sera gerado instantaneamente com apenas as paginas selecionadas, mantendo toda a qualidade original.",
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cenarios Avancados</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Extrair paginas de diferentes PDFs e combinar</h3>
                  <p className="text-slate-600">
                    Extraia paginas do primeiro PDF, depois do segundo, e use <Link href="/br/unir-pdf" className="text-orange-600 hover:underline">Unir PDF</Link> para combinar os resultados em um unico documento.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Extrair e comprimir</h3>
                  <p className="text-slate-600">
                    Extraia as paginas desejadas e depois use <Link href="/br/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> para reduzir o tamanho do resultado — especialmente util para documentos digitalizados.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Extrair para criar um resumo</h3>
                  <p className="text-slate-600">
                    De um relatorio longo, extraia a capa, o sumario executivo e as conclusoes para criar um resumo rapido para gestores.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas de Produtividade</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Use intervalos</strong> para selecionar grandes blocos de paginas rapidamente (ex: "1-50").</li>
                <li>&#10003; <strong>Visualize antes de extrair</strong> — os thumbnails ajudam a garantir que voce esta selecionando as paginas certas.</li>
                <li>&#10003; <strong>Para documentos recorrentes</strong> (ex: sempre extrair paginas 1-3 de um relatorio mensal), memorize os numeros para agilizar.</li>
                <li>&#10003; <strong>Funciona no celular</strong> — voce pode extrair paginas direto do iPhone ou Android pelo navegador.</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Pronto para Extrair Paginas?</h2>
            <p className="text-slate-300 mb-6">Selecione exatamente as paginas que precisa — gratis, sem cadastro.</p>
            <Link
              href="/br/extrair-paginas-de-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Scissors className="h-5 w-5" /> Extrair Paginas Agora
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
                { title: "Dividir PDF para Email", href: "/br/aprender/dividir-pdf-para-email" },
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
                { q: "Posso extrair paginas nao consecutivas?", a: "Sim. Voce pode selecionar qualquer combinacao de paginas, como 1, 5, 8-12, 15. As paginas extraidas aparecerao no novo PDF na ordem em que foram selecionadas." },
                { q: "Posso extrair paginas de varios PDFs ao mesmo tempo?", a: "O PDF.it processa um PDF por vez. Extraia as paginas de cada PDF separadamente e depois use Unir PDF para combinar os resultados." },
                { q: "Posso mudar a ordem das paginas extraidas?", a: "As paginas sao extraidas na ordem em que voce as seleciona. Se precisar reordenar, extraia primeiro e depois use a ferramenta de reorganizar paginas." },
                { q: "A extracao mantem a qualidade das paginas?", a: "Sim. Extrair paginas nao envolve compressao — as paginas extraidas mantem exatamente a mesma qualidade do PDF original." },
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
