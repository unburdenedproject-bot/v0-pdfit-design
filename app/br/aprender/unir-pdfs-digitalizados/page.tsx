import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Merge, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Unir PDFs Digitalizados (Combinar Documentos Escaneados) | PDF.it",
  description:
    "Aprenda como unir PDFs digitalizados em um unico documento. Combine documentos escaneados mantendo a qualidade — online, gratis.",
  keywords: "unir pdf digitalizado, combinar pdf escaneado, juntar documentos digitalizados, mesclar pdf scanner",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como unir PDFs digitalizados?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie os PDFs digitalizados para a ferramenta Unir PDF do PDF.it, organize na ordem desejada e clique em Unir. O processo e o mesmo para PDFs digitalizados ou criados digitalmente." }
    },
    {
      "@type": "Question",
      "name": "O arquivo combinado fica muito grande?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDFs digitalizados ja sao grandes individualmente. Ao combinar, o tamanho sera a soma dos originais. Recomendamos comprimir o resultado usando a ferramenta Comprimir PDF apos unir." }
    },
    {
      "@type": "Question",
      "name": "Posso unir PDFs digitalizados com PDFs normais?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Voce pode misturar PDFs digitalizados e PDFs criados digitalmente no mesmo documento. A qualidade de cada pagina e mantida individualmente." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Unir PDFs Digitalizados",
  "description": "Combine documentos escaneados em um unico PDF.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Digitalize seus documentos",
      "text": "Use um scanner ou aplicativo de digitalizacao no celular para criar PDFs de cada documento."
    },
    {
      "@type": "HowToStep",
      "name": "Envie para o PDF.it",
      "text": "Acesse Unir PDF e envie todos os PDFs digitalizados."
    },
    {
      "@type": "HowToStep",
      "name": "Organize e combine",
      "text": "Arraste para ordenar e clique em Unir PDF. Depois, comprima o resultado se necessario."
    }
  ]
}

export default function UnirPDFsDigitalizadosPage() {
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
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Unir PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Unir PDFs Digitalizados</h1>
              <p className="text-xl text-slate-300">
                Digitalizou varios documentos separadamente e precisa combina-los em um unico PDF? Veja como unir documentos escaneados de forma rapida e facil.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <Merge className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Pronto para unir? Va direto para a ferramenta.</p>
            </div>
            <Link
              href="/br/unir-pdf-digitalizado"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Unir PDF Agora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">O Desafio dos PDFs Digitalizados</h2>
              <p className="text-slate-600 mb-4">
                Documentos digitalizados apresentam desafios especificos quando combinados:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Tamanho grande.</strong> Cada pagina digitalizada pesa 2-5MB. Combinar 10 documentos pode gerar um PDF de 50MB+ facilmente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Orientacao variada.</strong> Alguns documentos podem estar em retrato e outros em paisagem, ou ate de cabeca para baixo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Qualidade inconsistente.</strong> Documentos digitalizados em diferentes scanners ou celulares podem ter qualidades variadas.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Unir PDFs Digitalizados (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Prepare os documentos digitalizados",
                    desc: "Antes de unir, verifique se todos os PDFs estao na orientacao correta. Se algum estiver de cabeca para baixo ou de lado, use a ferramenta Girar PDF primeiro.",
                  },
                  {
                    title: "Envie e organize",
                    desc: "Acesse a ferramenta Unir PDF, envie todos os documentos digitalizados e organize na ordem desejada usando arrastar e soltar.",
                  },
                  {
                    title: "Una e comprima",
                    desc: "Clique em Unir PDF para combinar. Como PDFs digitalizados geram arquivos grandes, recomendamos comprimir o resultado em seguida.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para Documentos Digitalizados</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Corrija a orientacao</strong> antes de unir usando <Link href="/br/girar-pdf" className="text-[#14D8C4] hover:underline">Girar PDF</Link> — e mais facil do que corrigir depois de combinar.</li>
                <li>&#10003; <strong>Comprima apos unir</strong> usando <Link href="/br/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> — PDFs digitalizados comprimem muito bem (reducoes de 60-80%).</li>
                <li>&#10003; <strong>Use OCR</strong> se precisa que o texto seja pesquisavel. Nossa ferramenta <Link href="/br/ocr-pdf" className="text-[#14D8C4] hover:underline">OCR PDF</Link> reconhece texto em documentos digitalizados.</li>
                <li>&#10003; <strong>Digitalize com boa iluminacao</strong> para melhor qualidade. Documentos mais nitidos comprimem melhor e ficam mais legiveis.</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Pronto para Unir Seus PDFs Digitalizados?</h2>
            <p className="text-slate-300 mb-6">Combine documentos escaneados em um unico arquivo — gratis, sem cadastro.</p>
            <Link
              href="/br/unir-pdf-digitalizado"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Merge className="h-5 w-5" /> Unir PDF Agora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Unir Arquivos PDF", href: "/br/aprender/como-unir-arquivos-pdf" },
                { title: "Unir PDFs em Ordem", href: "/br/aprender/unir-pdfs-em-ordem" },
                { title: "Combinar PDFs para Envio", href: "/br/aprender/combinar-pdfs-para-envio" },
                { title: "Unir PDF no iPhone", href: "/br/aprender/unir-pdf-no-iphone" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group"
                >
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
                { q: "Como unir PDFs digitalizados?", a: "Envie os PDFs digitalizados para a ferramenta Unir PDF do PDF.it, organize na ordem desejada e clique em Unir. O processo e o mesmo para PDFs digitalizados ou criados digitalmente." },
                { q: "O arquivo combinado fica muito grande?", a: "PDFs digitalizados ja sao grandes individualmente. Ao combinar, o tamanho sera a soma dos originais. Recomendamos comprimir o resultado usando a ferramenta Comprimir PDF apos unir." },
                { q: "Posso unir PDFs digitalizados com PDFs normais?", a: "Sim. Voce pode misturar PDFs digitalizados e PDFs criados digitalmente no mesmo documento. A qualidade de cada pagina e mantida individualmente." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}">
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
