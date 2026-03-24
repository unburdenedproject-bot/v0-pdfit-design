import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Merge, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Combinar PDFs para Envio (Email, Portais, Formularios) | PDF.it",
  description:
    "Aprenda como combinar varios PDFs em um unico arquivo para envio por email, upload em portais ou formularios online — online, gratis.",
  keywords: "combinar pdf para envio, juntar pdf email, unir pdf portal, combinar documentos pdf enviar",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como combinar PDFs para enviar por email?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seus PDFs para o PDF.it, organize na ordem desejada e clique em Unir. Se o resultado for maior que 25MB (limite do Gmail), comprima o PDF antes de enviar." }
    },
    {
      "@type": "Question",
      "name": "Qual o tamanho ideal para envio por email?",
      "acceptedAnswer": { "@type": "Answer", "text": "Gmail aceita ate 25MB, Outlook ate 20MB e Yahoo ate 25MB. Recomendamos manter o PDF abaixo de 10MB para envio rapido. Use a ferramenta Comprimir PDF se necessario." }
    },
    {
      "@type": "Question",
      "name": "Posso combinar e comprimir ao mesmo tempo?",
      "acceptedAnswer": { "@type": "Answer", "text": "O PDF.it processa uma tarefa por vez. Primeiro, use Unir PDF para combinar seus documentos. Depois, use Comprimir PDF para reduzir o tamanho do resultado." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Combinar PDFs para Envio",
  "description": "Junte varios documentos PDF em um arquivo pronto para enviar.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Envie os documentos",
      "text": "Acesse a ferramenta Unir PDF e envie todos os PDFs que precisa combinar para envio."
    },
    {
      "@type": "HowToStep",
      "name": "Organize e combine",
      "text": "Coloque os documentos na ordem correta e clique em Unir PDF."
    },
    {
      "@type": "HowToStep",
      "name": "Comprima se necessario",
      "text": "Se o arquivo combinado for muito grande, use Comprimir PDF para reduzir o tamanho antes de enviar."
    }
  ]
}

export default function CombinarPDFsParaEnvioPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Unir PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Combinar PDFs para Envio</h1>
              <p className="text-xl text-slate-300">
                Precisa enviar varios documentos como um unico arquivo? Veja como combinar PDFs e deixar tudo pronto para email, portais ou formularios online.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Merge className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Pronto para combinar? Va direto para a ferramenta.</p>
            </div>
            <Link
              href="/br/unir-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Unir PDF Agora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Combinar PDFs para Envio?</h2>
              <p className="text-slate-600 mb-4">
                Enviar um unico PDF e muito mais pratico do que anexar varios arquivos separados:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Menos confusao</strong> — o destinatario recebe tudo organizado em um arquivo.</li>
                <li>&#10003; <strong>Mais profissional</strong> — um documento completo passa mais credibilidade.</li>
                <li>&#10003; <strong>Evita esquecimentos</strong> — nao ha risco de esquecer de anexar um documento.</li>
                <li>&#10003; <strong>Portais de upload</strong> frequentemente aceitam apenas um arquivo por campo.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Combinar e Preparar para Envio</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Reuna todos os documentos",
                    desc: "Separe todos os PDFs que precisa enviar. Documentos comuns: RG, CPF, comprovante de residencia, curriculo, certificados, contratos.",
                  },
                  {
                    title: "Combine usando Unir PDF",
                    desc: "Envie todos para a ferramenta Unir PDF, organize na ordem logica (geralmente documentos pessoais primeiro, depois comprovantes) e clique em Unir.",
                  },
                  {
                    title: "Comprima para caber no limite",
                    desc: "Se o PDF combinado for maior que o limite de envio (25MB para Gmail, 20MB para Outlook), use Comprimir PDF para reduzir o tamanho.",
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Limites de Envio por Servico</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Servico</th>
                      <th className="text-left py-3 px-4 font-bold">Limite de Anexo</th>
                      <th className="text-left py-3 px-4 font-bold">Dica</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Gmail</td>
                      <td className="py-3 px-4">25MB</td>
                      <td className="py-3 px-4">Acima de 25MB, gera link do Google Drive</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Outlook</td>
                      <td className="py-3 px-4">20MB</td>
                      <td className="py-3 px-4">Use compressao Media</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">WhatsApp</td>
                      <td className="py-3 px-4">100MB</td>
                      <td className="py-3 px-4">Limite generoso, mas comprima para envio rapido</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Portais gov.br</td>
                      <td className="py-3 px-4">2-10MB</td>
                      <td className="py-3 px-4">Use compressao Extrema</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para Envio Profissional</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Nomeie o arquivo final</strong> de forma descritiva (ex: "Documentos_JoaoSilva_2024.pdf").</li>
                <li>&#10003; <strong>Comprima depois de unir</strong> usando <Link href="/br/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> — especialmente para documentos digitalizados.</li>
                <li>&#10003; <strong>Proteja documentos sensiveis</strong> com senha usando <Link href="/br/proteger-pdf" className="text-orange-600 hover:underline">Proteger PDF</Link> antes de enviar.</li>
                <li>&#10003; <strong>Verifique todas as paginas</strong> antes de enviar para garantir que nenhum documento ficou de fora.</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Pronto para Combinar Seus PDFs?</h2>
            <p className="text-slate-300 mb-6">Junte todos os documentos em um unico arquivo — gratis, sem cadastro.</p>
            <Link
              href="/br/unir-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Merge className="h-5 w-5" /> Unir PDF Agora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Unir Arquivos PDF", href: "/br/aprender/como-unir-arquivos-pdf" },
                { title: "Unir PDFs em Ordem", href: "/br/aprender/unir-pdfs-em-ordem" },
                { title: "Unir PDFs Digitalizados", href: "/br/aprender/unir-pdfs-digitalizados" },
                { title: "Unir PDF no iPhone", href: "/br/aprender/unir-pdf-no-iphone" },
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
                { q: "Como combinar PDFs para enviar por email?", a: "Envie seus PDFs para o PDF.it, organize na ordem desejada e clique em Unir. Se o resultado for maior que 25MB, comprima o PDF antes de enviar." },
                { q: "Qual o tamanho ideal para envio por email?", a: "Gmail aceita ate 25MB, Outlook ate 20MB e Yahoo ate 25MB. Recomendamos manter o PDF abaixo de 10MB para envio rapido." },
                { q: "Posso combinar e comprimir ao mesmo tempo?", a: "O PDF.it processa uma tarefa por vez. Primeiro, use Unir PDF para combinar. Depois, use Comprimir PDF para reduzir o tamanho do resultado." },
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
