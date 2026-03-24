import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Scissors, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Dividir PDF em Paginas Individuais | PDF.it",
  description:
    "Aprenda como dividir um PDF em paginas individuais, criando um arquivo separado para cada pagina. Ideal para documentos digitalizados e formularios — online, gratis.",
  keywords: "dividir pdf em paginas, separar paginas pdf, cada pagina um pdf, dividir pdf pagina por pagina",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como dividir um PDF em paginas individuais?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie o PDF para a ferramenta Dividir PDF por Paginas do PDF.it, selecione a opcao de dividir em paginas individuais e clique em Dividir. Cada pagina sera salva como um PDF separado." }
    },
    {
      "@type": "Question",
      "name": "Posso baixar todas as paginas de uma vez?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Apos dividir, voce pode baixar cada pagina individualmente ou todas de uma vez como arquivo ZIP." }
    },
    {
      "@type": "Question",
      "name": "Para que serve dividir em paginas individuais?",
      "acceptedAnswer": { "@type": "Answer", "text": "E util para documentos digitalizados onde cada pagina e um documento diferente (RG, CPF, comprovantes), para enviar paginas especificas por email, ou para portais que aceitam apenas um documento por campo." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Dividir PDF em Paginas Individuais",
  "description": "Separe cada pagina do seu PDF em um arquivo individual.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Envie o PDF",
      "text": "Acesse a ferramenta Dividir PDF por Paginas e envie seu arquivo."
    },
    {
      "@type": "HowToStep",
      "name": "Selecione paginas individuais",
      "text": "Escolha a opcao de dividir cada pagina em um PDF separado."
    },
    {
      "@type": "HowToStep",
      "name": "Baixe os resultados",
      "text": "Clique em Dividir e baixe cada pagina como PDF individual ou todas em ZIP."
    }
  ]
}

export default function DividirPDFEmPaginasIndividuaisPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Dividir PDF em Paginas Individuais</h1>
              <p className="text-xl text-slate-300">
                Precisa que cada pagina do PDF se torne um arquivo separado? Veja como fazer isso automaticamente em segundos.
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
              href="/br/dividir-pdf-por-paginas"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Dividir PDF Agora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Quando Dividir em Paginas Individuais?</h2>
              <p className="text-slate-600 mb-4">
                Dividir cada pagina em um PDF separado e util em varias situacoes:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Documentos digitalizados em lote.</strong> Voce digitalizou RG, CPF e comprovantes em um unico PDF e precisa separar cada documento.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Portais de upload.</strong> Muitos portais exigem upload individual de cada documento (ex: portal gov.br, sites de concurso).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Compartilhar paginas especificas.</strong> Enviar apenas uma pagina de um contrato ou relatorio longo.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Dividir (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Envie o PDF",
                    desc: "Acesse a ferramenta Dividir PDF por Paginas e envie o arquivo que deseja separar.",
                  },
                  {
                    title: "Selecione divisao por paginas",
                    desc: "Escolha a opcao 'Cada pagina como PDF individual'. O sistema mostrara uma previa de quantos arquivos serao gerados.",
                  },
                  {
                    title: "Baixe as paginas",
                    desc: "Clique em Dividir. Voce pode baixar cada pagina individualmente (ex: pagina-1.pdf, pagina-2.pdf) ou todas em um arquivo ZIP.",
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para Paginas Individuais</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Renomeie os arquivos</strong> depois de baixar para identificar cada documento facilmente (ex: "RG_frente.pdf", "CPF.pdf").</li>
                <li>&#10003; <strong>Comprima cada pagina</strong> se necessario usando <Link href="/br/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> — especialmente util para documentos digitalizados pesados.</li>
                <li>&#10003; <strong>Para reunir depois</strong>, use <Link href="/br/unir-pdf" className="text-orange-600 hover:underline">Unir PDF</Link> para combinar paginas selecionadas.</li>
                <li>&#10003; <strong>Se precisa de apenas algumas paginas</strong>, use <Link href="/br/extrair-paginas-de-pdf" className="text-orange-600 hover:underline">Extrair Paginas</Link> em vez de dividir tudo.</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Pronto para Dividir em Paginas?</h2>
            <p className="text-slate-300 mb-6">Separe cada pagina em um arquivo individual — gratis, sem cadastro.</p>
            <Link
              href="/br/dividir-pdf-por-paginas"
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
                { q: "Como dividir um PDF em paginas individuais?", a: "Envie o PDF para a ferramenta Dividir PDF por Paginas do PDF.it, selecione a opcao de dividir em paginas individuais e clique em Dividir. Cada pagina sera salva como um PDF separado." },
                { q: "Posso baixar todas as paginas de uma vez?", a: "Sim. Apos dividir, voce pode baixar cada pagina individualmente ou todas de uma vez como arquivo ZIP." },
                { q: "Para que serve dividir em paginas individuais?", a: "E util para documentos digitalizados onde cada pagina e um documento diferente, para portais que aceitam apenas um documento por campo, ou para enviar paginas especificas por email." },
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
