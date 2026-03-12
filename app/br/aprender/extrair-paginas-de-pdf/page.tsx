import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Scissors, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Extrair Paginas de PDF (Selecionar e Salvar Paginas) | OmnisPDF",
  description:
    "Aprenda como extrair paginas especificas de um PDF. Selecione as paginas que precisa e salve em um novo arquivo — online, gratis, sem software.",
  keywords: "extrair paginas pdf, selecionar paginas pdf, salvar paginas pdf, tirar paginas pdf, copiar paginas pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como extrair paginas especificas de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie o PDF para a ferramenta Extrair Paginas do OmnisPDF, selecione as paginas desejadas (ex: 1, 3, 5-8) e clique em Extrair. Um novo PDF sera criado apenas com as paginas selecionadas." }
    },
    {
      "@type": "Question",
      "name": "Extrair paginas altera o PDF original?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. O PDF original permanece intacto. A ferramenta cria um novo PDF apenas com as paginas que voce selecionou." }
    },
    {
      "@type": "Question",
      "name": "Qual a diferenca entre extrair e dividir paginas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Extrair cria um unico PDF com as paginas selecionadas. Dividir separa o PDF inteiro em multiplas partes. Use extrair quando precisa de paginas especificas; use dividir quando quer separar o documento todo." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Extrair Paginas de um PDF",
  "description": "Selecione e salve paginas especificas em um novo PDF.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Envie o PDF",
      "text": "Acesse a ferramenta Extrair Paginas de PDF e envie seu arquivo."
    },
    {
      "@type": "HowToStep",
      "name": "Selecione as paginas",
      "text": "Clique nas paginas que deseja extrair ou digite os numeros (ex: 1, 3, 5-8)."
    },
    {
      "@type": "HowToStep",
      "name": "Baixe o novo PDF",
      "text": "Clique em Extrair e baixe o novo PDF contendo apenas as paginas selecionadas."
    }
  ]
}

export default function ExtrairPaginasDePDFPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extrair Paginas de PDF</h1>
              <p className="text-xl text-slate-300">
                Precisa de apenas algumas paginas de um PDF longo? Veja como selecionar e salvar exatamente as paginas que voce precisa.
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Quando Extrair Paginas de um PDF?</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Enviar apenas paginas relevantes.</strong> De um contrato de 50 paginas, extraia so as 3 paginas que precisa assinar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Separar documentos digitalizados.</strong> Voce digitalizou tudo junto e precisa extrair cada documento individualmente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Criar resumos.</strong> Extraia as paginas mais importantes de um relatorio longo para criar um resumo executivo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Remover paginas sensiveis.</strong> Extraia so as paginas que pode compartilhar, omitindo informacoes confidenciais.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Extrair Paginas (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Envie o PDF",
                    desc: "Acesse a ferramenta Extrair Paginas de PDF e envie seu arquivo. As paginas serao exibidas como thumbnails para facil identificacao.",
                  },
                  {
                    title: "Selecione as paginas desejadas",
                    desc: "Clique nas paginas que deseja extrair. Voce tambem pode digitar numeros (ex: 1, 3, 5-8, 12). Paginas selecionadas ficam destacadas.",
                  },
                  {
                    title: "Extraia e baixe",
                    desc: "Clique em Extrair Paginas. Um novo PDF sera criado contendo apenas as paginas selecionadas, na ordem que voce escolheu.",
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Extrair vs Dividir: Qual Usar?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Funcao</th>
                      <th className="text-left py-3 px-4 font-bold">O Que Faz</th>
                      <th className="text-left py-3 px-4 font-bold">Melhor Para</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Extrair Paginas</td>
                      <td className="py-3 px-4">Cria 1 PDF com as paginas selecionadas</td>
                      <td className="py-3 px-4">Pegar paginas especificas</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">Dividir PDF</td>
                      <td className="py-3 px-4">Separa o PDF inteiro em multiplas partes</td>
                      <td className="py-3 px-4">Separar documento todo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para Extrair Paginas</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Use os thumbnails</strong> para identificar visualmente as paginas corretas antes de selecionar.</li>
                <li>&#10003; <strong>Intervalos funcionam:</strong> digite "5-10" para selecionar as paginas 5 ate 10 de uma vez.</li>
                <li>&#10003; <strong>Comprima o resultado</strong> com <Link href="/br/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> se o arquivo extraido ainda for grande.</li>
                <li>&#10003; <strong>Combine com Unir:</strong> extraia paginas de diferentes PDFs e depois use <Link href="/br/unir-pdf" className="text-orange-600 hover:underline">Unir PDF</Link> para combina-las.</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Pronto para Extrair Paginas?</h2>
            <p className="text-slate-300 mb-6">Selecione as paginas que precisa em segundos — gratis, sem cadastro.</p>
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
                { q: "Como extrair paginas especificas de um PDF?", a: "Envie o PDF para a ferramenta Extrair Paginas do OmnisPDF, selecione as paginas desejadas e clique em Extrair. Um novo PDF sera criado apenas com as paginas selecionadas." },
                { q: "Extrair paginas altera o PDF original?", a: "Nao. O PDF original permanece intacto. A ferramenta cria um novo PDF apenas com as paginas que voce selecionou." },
                { q: "Qual a diferenca entre extrair e dividir paginas?", a: "Extrair cria um unico PDF com as paginas selecionadas. Dividir separa o PDF inteiro em multiplas partes." },
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
