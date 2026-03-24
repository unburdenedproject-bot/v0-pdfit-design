import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Send, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Melhor Formato para Enviar Documentos Profissionais | PDF.it",
  description: "PDF, DOCX, ou outro formato? Descubra qual o melhor formato para enviar documentos por email, WhatsApp e plataformas profissionais. Comparacao completa.",
  keywords: "melhor formato enviar documentos, pdf ou docx, formato documento email, enviar documento profissional, pdf vs word",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "PDF ou DOCX: qual e melhor para enviar por email?", "acceptedAnswer": { "@type": "Answer", "text": "PDF e a melhor escolha na maioria dos casos. O formato preserva a aparencia do documento em qualquer dispositivo, nao pode ser editado acidentalmente e e mais seguro. Use DOCX apenas quando o destinatario precisa editar o conteudo." } },
  { "@type": "Question", "name": "Qual formato devo usar para enviar curriculo?", "acceptedAnswer": { "@type": "Answer", "text": "PDF e o formato preferido por recrutadores. Garante que sua formatacao fique perfeita em qualquer computador ou celular. Converta seu DOCX para PDF antes de enviar." } },
  { "@type": "Question", "name": "Posso enviar planilhas Excel como PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Sim, e recomendado quando o destinatario so precisa visualizar os dados. PDF preserva o layout da tabela e evita que os dados sejam editados. Se o destinatario precisa dos dados brutos, envie XLSX." } },
  { "@type": "Question", "name": "Qual o tamanho maximo de arquivo para email?", "acceptedAnswer": { "@type": "Answer", "text": "A maioria dos servicos de email limita anexos a 25MB (Gmail, Outlook). PDFs geralmente sao menores que arquivos do Office. Se o PDF for grande, use um compressor de PDF para reduzir o tamanho." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como escolher o melhor formato para enviar documentos", "description": "Escolha o formato ideal para cada situacao profissional.", "step": [
  { "@type": "HowToStep", "name": "Avalie se o destinatario precisa editar", "text": "Se sim, envie no formato editavel (DOCX, XLSX, PPTX). Se nao, converta para PDF." },
  { "@type": "HowToStep", "name": "Converta para PDF", "text": "Use o PDF.it para converter qualquer arquivo do Office para PDF preservando a formatacao." },
  { "@type": "HowToStep", "name": "Comprima se necessario", "text": "Se o PDF for grande, use o compressor de PDF do PDF.it para reduzir o tamanho antes de enviar." }
] }

export default function MelhorFormatoParaEnviarDocumentosPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Office para PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Melhor Formato para Enviar Documentos</h1>
          <p className="text-xl text-slate-300">PDF, DOCX, XLSX, PPTX... qual o melhor formato para enviar seus documentos por email ou mensagem? Descubra quando usar cada um e por que PDF quase sempre e a melhor opcao.</p>
        </div></div></section>

        <section className="py-8 bg-orange-50 border-b border-orange-100"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><Send className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Quer converter agora? Va direto para a ferramenta.</p></div>
          <Link href="/br/office-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Converter para PDF <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por que o formato importa?</h2>
            <p className="text-slate-600 mb-4">O formato que voce escolhe para enviar um documento afeta diretamente como o destinatario o recebe:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Aparencia.</strong> Documentos do Office podem parecer diferentes em cada computador. PDF garante aparencia identica.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Editabilidade.</strong> DOCX e XLSX podem ser editados pelo destinatario. PDF protege o conteudo.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Compatibilidade.</strong> Nem todos tem Microsoft Office. PDFs abrem em qualquer dispositivo.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Profissionalismo.</strong> Enviar PDF passa uma imagem mais profissional do que enviar um DOCX.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Comparacao de formatos</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead><tr className="bg-slate-900 text-white">
                  <th className="text-left py-3 px-4 font-bold">Criterio</th>
                  <th className="text-left py-3 px-4 font-bold">PDF</th>
                  <th className="text-left py-3 px-4 font-bold">DOCX/XLSX/PPTX</th>
                </tr></thead>
                <tbody className="text-slate-700">
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Aparencia consistente</td><td className="py-3 px-4 text-green-600 font-semibold">Sim</td><td className="py-3 px-4 text-red-600 font-semibold">Varia</td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Editavel</td><td className="py-3 px-4 text-red-600 font-semibold">Nao</td><td className="py-3 px-4 text-green-600 font-semibold">Sim</td></tr>
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Abre sem software especifico</td><td className="py-3 px-4 text-green-600 font-semibold">Sim</td><td className="py-3 px-4 text-red-600 font-semibold">Precisa de Office</td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Tamanho do arquivo</td><td className="py-3 px-4 font-semibold">Menor</td><td className="py-3 px-4 font-semibold">Maior</td></tr>
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Protecao com senha</td><td className="py-3 px-4 text-green-600 font-semibold">Facil</td><td className="py-3 px-4 font-semibold">Possivel</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Quando usar cada formato</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Curriculo / carta de apresentacao:</strong> sempre PDF.</li>
              <li>&#10003; <strong>Contrato para assinatura:</strong> PDF (ou use <Link href="/br/assinatura-eletronica" className="text-orange-600 hover:underline">assinatura eletronica</Link>).</li>
              <li>&#10003; <strong>Relatorio financeiro (visualizacao):</strong> PDF.</li>
              <li>&#10003; <strong>Planilha para o colega editar:</strong> XLSX.</li>
              <li>&#10003; <strong>Documento para revisao colaborativa:</strong> DOCX (ou Google Docs).</li>
              <li>&#10003; <strong>Apresentacao para cliente:</strong> PDF para envio, PPTX para apresentar ao vivo.</li>
              <li>&#10003; <strong>Proposta comercial:</strong> PDF, idealmente com <Link href="/br/aprender/como-proteger-pdf-com-senha" className="text-orange-600 hover:underline">senha de protecao</Link>.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Como converter para PDF antes de enviar</h2>
            <p className="text-slate-600 mb-4">Com o PDF.it, converter qualquer documento do Office para PDF e simples:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <Link href="/br/word-para-pdf" className="text-orange-600 hover:underline">Word para PDF</Link> — para documentos DOCX e DOC.</li>
              <li>&#10003; <Link href="/br/excel-para-pdf" className="text-orange-600 hover:underline">Excel para PDF</Link> — para planilhas XLSX e XLS.</li>
              <li>&#10003; <Link href="/br/powerpoint-para-pdf" className="text-orange-600 hover:underline">PowerPoint para PDF</Link> — para apresentacoes PPTX e PPT.</li>
              <li>&#10003; <Link href="/br/office-para-pdf" className="text-orange-600 hover:underline">Office para PDF</Link> — para qualquer formato em uma ferramenta.</li>
            </ul>
            <p className="text-slate-600 mt-4">Se o PDF ficar grande demais para email, use o <Link href="/br/comprimir-pdf" className="text-orange-600 hover:underline">compressor de PDF</Link> para reduzir o tamanho.</p>
          </section>
        </div></article>

        <section className="py-12 bg-[#191B4D]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Converta seus documentos para PDF antes de enviar</h2>
          <p className="text-slate-300 mb-6">Envie qualquer arquivo do Office e obtenha um PDF profissional — gratis, sem cadastro.</p>
          <Link href="/br/office-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><Send className="h-5 w-5" /> Converter para PDF Agora</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Conversor Office para PDF: guia completo", href: "/br/aprender/office-para-pdf-conversor" },
              { title: "Converter DOCX, XLSX, PPTX para PDF", href: "/br/aprender/converter-docx-xlsx-pptx-para-pdf" },
              { title: "Como proteger PDF com senha antes de enviar", href: "/br/aprender/proteger-pdf-antes-de-enviar" },
              { title: "Office para PDF no celular", href: "/br/aprender/office-para-pdf-no-celular" },
            ].map((a) => (<Link key={a.href} href={a.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"><span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{a.title}</span><ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" /></Link>))}
          </div>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas frequentes</h2>
          <div className="space-y-6">
            {(faqSchema.mainEntity as Array<{name: string; acceptedAnswer: {text: string}}>).map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200"><h3 className="font-bold text-slate-900 mb-2">{faq.name}</h3><p className="text-slate-600 text-sm">{faq.acceptedAnswer.text}</p></div>
            ))}
          </div>
        </div></section>
      </main>
      <FooterBr />
    </div>
  )
}
