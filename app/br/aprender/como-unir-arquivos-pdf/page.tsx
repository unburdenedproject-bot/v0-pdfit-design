import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Merge, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Unir Arquivos PDF (Juntar PDFs em Um So) | PDF.it",
  description:
    "Aprenda como unir varios arquivos PDF em um so documento. Guia passo a passo para combinar PDFs — online, gratis, sem instalar nada.",
  keywords: "unir pdf, juntar pdf, combinar pdf, como unir arquivos pdf, mesclar pdf online gratis",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como unir varios PDFs em um so?",
      "acceptedAnswer": { "@type": "Answer", "text": "Acesse a ferramenta Unir PDF do PDF.it, envie seus arquivos na ordem desejada, clique em Unir e baixe o PDF combinado. E gratis e nao precisa de cadastro." }
    },
    {
      "@type": "Question",
      "name": "Posso reorganizar a ordem dos PDFs antes de unir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Depois de enviar os arquivos, voce pode arrastar e soltar para reorganizar a ordem antes de combinar. Os PDFs serao unidos na ordem exata que voce definir." }
    },
    {
      "@type": "Question",
      "name": "Quantos PDFs posso unir de uma vez?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usuarios gratuitos podem unir ate 3 PDFs por vez. Usuarios Pro podem unir quantos arquivos precisarem com processamento em lote." }
    },
    {
      "@type": "Question",
      "name": "Unir PDFs altera a qualidade dos documentos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. Unir PDFs simplesmente combina os arquivos — nao ha compressao ou alteracao de qualidade. O resultado mantem exatamente a mesma qualidade dos originais." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Unir Arquivos PDF Online",
  "description": "Combine varios PDFs em um unico documento em 3 passos simples.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Envie seus PDFs",
      "text": "Acesse a ferramenta Unir PDF do PDF.it e envie todos os arquivos que deseja combinar."
    },
    {
      "@type": "HowToStep",
      "name": "Organize a ordem",
      "text": "Arraste e solte para reorganizar os PDFs na ordem desejada."
    },
    {
      "@type": "HowToStep",
      "name": "Baixe o PDF combinado",
      "text": "Clique em Unir PDF e baixe o documento unico com todos os arquivos combinados."
    }
  ]
}

export default function ComoUnirArquivosPDFPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Como Unir Arquivos PDF</h1>
              <p className="text-xl text-slate-300">
                Precisa combinar varios PDFs em um unico documento? Veja como fazer isso em menos de 30 segundos — sem software, sem cadastro.
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
              <p className="text-slate-700 font-semibold">Pronto para unir? Pule o guia e va direto para a ferramenta.</p>
            </div>
            <Link
              href="/br/unir-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Unir PDF Agora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Quando Voce Precisa Unir PDFs?</h2>
              <p className="text-slate-600 mb-4">
                Existem muitas situacoes onde combinar PDFs e necessario:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Enviar documentos completos.</strong> Combinar RG, CPF, comprovante de residencia e outros documentos em um unico PDF para envio.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Organizar relatorios.</strong> Juntar capitulos ou secoes de um relatorio que foram criados separadamente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Preparar apresentacoes.</strong> Combinar slides de diferentes fontes em uma unica apresentacao PDF.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Arquivar documentos.</strong> Juntar faturas, recibos ou contratos do mesmo periodo em um arquivo unico.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Unir PDFs (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Envie seus arquivos PDF",
                    desc: "Acesse a ferramenta Unir PDF e arraste todos os PDFs para a area de upload. Voce pode selecionar multiplos arquivos de uma vez.",
                  },
                  {
                    title: "Organize a ordem",
                    desc: "Os PDFs aparecerao na tela. Arraste e solte para reorganizar na ordem que deseja no documento final. O primeiro arquivo sera as primeiras paginas.",
                  },
                  {
                    title: "Baixe o PDF unido",
                    desc: "Clique em Unir PDF. O sistema combina todos os arquivos mantendo a qualidade original. Baixe o resultado — um unico PDF com todas as paginas.",
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para Unir PDFs com Sucesso</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Verifique a ordem</strong> antes de unir — e mais facil organizar agora do que depois.</li>
                <li>&#10003; <strong>PDFs protegidos</strong> precisam ser desbloqueados primeiro. Use <Link href="/br/desbloquear-pdf" className="text-[#14D8C4] hover:underline">Desbloquear PDF</Link> antes de unir.</li>
                <li>&#10003; <strong>Para muitos arquivos</strong>, o plano Pro permite processamento em lote sem limites.</li>
                <li>&#10003; <strong>Depois de unir</strong>, voce pode <Link href="/br/comprimir-pdf" className="text-[#14D8C4] hover:underline">comprimir o resultado</Link> se o arquivo ficar muito grande.</li>
                <li>&#10003; <strong>Precisa remover paginas</strong> do resultado? Use <Link href="/br/dividir-pdf" className="text-[#14D8C4] hover:underline">Dividir PDF</Link> para extrair apenas as paginas que precisa.</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Pronto para Unir Seus PDFs?</h2>
            <p className="text-slate-300 mb-6">Combine varios arquivos em um unico documento — gratis, sem cadastro.</p>
            <Link
              href="/br/unir-pdf"
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
                { title: "Unir PDFs em Ordem", href: "/br/aprender/unir-pdfs-em-ordem" },
                { title: "Unir PDFs Digitalizados", href: "/br/aprender/unir-pdfs-digitalizados" },
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
                { q: "Como unir varios PDFs em um so?", a: "Acesse a ferramenta Unir PDF do PDF.it, envie seus arquivos na ordem desejada, clique em Unir e baixe o PDF combinado. E gratis e nao precisa de cadastro." },
                { q: "Posso reorganizar a ordem dos PDFs antes de unir?", a: "Sim. Depois de enviar os arquivos, voce pode arrastar e soltar para reorganizar a ordem antes de combinar." },
                { q: "Quantos PDFs posso unir de uma vez?", a: "Usuarios gratuitos podem unir ate 3 PDFs por vez. Usuarios Pro podem unir quantos arquivos precisarem com processamento em lote." },
                { q: "Unir PDFs altera a qualidade dos documentos?", a: "Nao. Unir PDFs simplesmente combina os arquivos — nao ha compressao ou alteracao de qualidade. O resultado mantem exatamente a mesma qualidade dos originais." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
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
