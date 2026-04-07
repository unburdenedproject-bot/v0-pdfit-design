import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Conversor Office para PDF Online — Word, Excel, PowerPoint | PDF.it",
  description: "Converta qualquer arquivo do Microsoft Office para PDF online. Word, Excel, PowerPoint — tudo em uma unica ferramenta. Gratis, sem instalacao, preservando formatacao.",
  keywords: "conversor office para pdf, office para pdf online, converter office para pdf, word excel powerpoint para pdf, microsoft office para pdf",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Quais formatos do Office posso converter para PDF?", "acceptedAnswer": { "@type": "Answer", "text": "O PDF.it converte DOCX, DOC, XLSX, XLS, PPTX e PPT para PDF. Basta enviar qualquer arquivo do Microsoft Office e a ferramenta identifica o formato automaticamente." } },
  { "@type": "Question", "name": "A formatacao do documento e mantida?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O conversor preserva texto, imagens, tabelas, graficos, fontes e layout o mais fielmente possivel. Para melhor resultado, incorpore as fontes antes de converter." } },
  { "@type": "Question", "name": "Preciso ter o Microsoft Office instalado?", "acceptedAnswer": { "@type": "Answer", "text": "Nao. O PDF.it e uma ferramenta 100% online. Funciona em qualquer navegador, sem necessidade de ter Word, Excel ou PowerPoint instalado." } },
  { "@type": "Question", "name": "Posso converter varios arquivos de uma vez?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Usuarios Pro podem usar o processamento em lote para converter multiplos arquivos do Office para PDF simultaneamente. Usuarios gratuitos convertem um arquivo por vez." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como converter arquivos do Office para PDF", "description": "Converta Word, Excel ou PowerPoint para PDF em 3 passos.", "step": [
  { "@type": "HowToStep", "name": "Envie seu arquivo do Office", "text": "Acesse a ferramenta Office para PDF do PDF.it e envie seu arquivo DOCX, XLSX ou PPTX." },
  { "@type": "HowToStep", "name": "Converta para PDF", "text": "Clique em Converter. O PDF.it processa o arquivo e gera um PDF preservando a formatacao original." },
  { "@type": "HowToStep", "name": "Baixe o PDF", "text": "Baixe o PDF convertido, pronto para compartilhar, imprimir ou arquivar." }
] }

export default function OfficeParaPdfConversorPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Office para PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Conversor Office para PDF</h1>
          <p className="text-xl text-slate-300">Converta qualquer arquivo do Microsoft Office — Word, Excel ou PowerPoint — para PDF em segundos. Uma unica ferramenta para todos os seus documentos.</p>
        </div></div></section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><FileText className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Pronto para converter? Pule o guia e va direto para a ferramenta.</p></div>
          <Link href="/br/office-para-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Converter Office para PDF <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por que usar um conversor Office para PDF?</h2>
            <p className="text-slate-600 mb-4">Documentos do Office sao otimos para edicao, mas PDF e o formato ideal para compartilhar e distribuir. Veja as vantagens:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Uma ferramenta para tudo.</strong> Em vez de usar conversores separados para Word, Excel e PowerPoint, o PDF.it aceita todos os formatos em uma unica ferramenta.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Formatacao preservada.</strong> Texto, tabelas, graficos e imagens sao convertidos fielmente para PDF.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Sem software necessario.</strong> Funciona direto no navegador — nao precisa ter o Microsoft Office instalado.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Seguranca.</strong> Seus arquivos sao processados com seguranca e deletados automaticamente apos a conversao.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como converter Office para PDF</h2>
            <div className="space-y-4">
              {[
                { title: "Envie seu arquivo", desc: "Acesse a ferramenta Office para PDF e arraste qualquer arquivo do Office (DOCX, XLSX, PPTX, DOC, XLS, PPT) para a area de upload." },
                { title: "Converta automaticamente", desc: "O PDF.it detecta o tipo de arquivo e aplica a conversao ideal. Word vira PDF com texto pesquisavel, Excel mantem tabelas, PowerPoint preserva slides." },
                { title: "Baixe o PDF", desc: "Baixe o PDF pronto. Compartilhe por email, envie para clientes ou imprima — o resultado e identico em qualquer dispositivo." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Formatos suportados</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead><tr className="bg-slate-900 text-white">
                  <th className="text-left py-3 px-4 font-bold">Formato</th>
                  <th className="text-left py-3 px-4 font-bold">Aplicativo</th>
                  <th className="text-left py-3 px-4 font-bold">Ferramenta dedicada</th>
                </tr></thead>
                <tbody className="text-slate-700">
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">DOCX / DOC</td><td className="py-3 px-4">Microsoft Word</td><td className="py-3 px-4"><Link href="/br/word-para-pdf" className="text-[#14D8C4] hover:underline">Word para PDF</Link></td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">XLSX / XLS</td><td className="py-3 px-4">Microsoft Excel</td><td className="py-3 px-4"><Link href="/br/excel-para-pdf" className="text-[#14D8C4] hover:underline">Excel para PDF</Link></td></tr>
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">PPTX / PPT</td><td className="py-3 px-4">Microsoft PowerPoint</td><td className="py-3 px-4"><Link href="/br/powerpoint-para-pdf" className="text-[#14D8C4] hover:underline">PowerPoint para PDF</Link></td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para melhor conversao</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Incorpore fontes</strong> nos arquivos do Office antes de converter para evitar <Link href="/br/aprender/pptx-para-pdf-fontes-faltando" className="text-[#14D8C4] hover:underline">fontes faltando</Link>.</li>
              <li>&#10003; <strong>Verifique a formatacao</strong> — revise margens, quebras de pagina e tamanho de papel antes de enviar.</li>
              <li>&#10003; <strong>Use o formato mais recente</strong> (DOCX, XLSX, PPTX) em vez dos antigos (DOC, XLS, PPT) para melhor compatibilidade.</li>
              <li>&#10003; <strong>Para arquivos grandes</strong>, considere <Link href="/br/comprimir-pdf" className="text-[#14D8C4] hover:underline">comprimir o PDF</Link> apos a conversao.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Converter no celular</h2>
            <p className="text-slate-600 mb-4">O conversor funciona perfeitamente em celulares. Veja nosso guia de <Link href="/br/aprender/office-para-pdf-no-celular" className="text-[#14D8C4] hover:underline">Office para PDF no celular</Link> para dicas especificas de conversao em smartphones Android e iPhone.</p>
          </section>
        </div></article>

        <section className="py-12" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Converta seus documentos do Office para PDF</h2>
          <p className="text-slate-300 mb-6">Envie qualquer arquivo Word, Excel ou PowerPoint e obtenha um PDF perfeito — gratis, sem cadastro.</p>
          <Link href="/br/office-para-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><FileText className="h-5 w-5" /> Converter Office para PDF Agora</Link>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Office para PDF no celular: guia completo", href: "/br/aprender/office-para-pdf-no-celular" },
              { title: "Office para PDF — como manter o formato original", href: "/br/aprender/office-para-pdf-manter-formato" },
              { title: "Converter DOCX, XLSX, PPTX para PDF de uma vez", href: "/br/aprender/converter-docx-xlsx-pptx-para-pdf" },
              { title: "Melhor formato para enviar documentos profissionais", href: "/br/aprender/melhor-formato-para-enviar-documentos" },
            ].map((a) => (<Link key={a.href} href={a.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group"><span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{a.title}</span><ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" /></Link>))}
          </div>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas frequentes</h2>
          <div className="space-y-6">
            {(faqSchema.mainEntity as Array<{name: string; acceptedAnswer: {text: string}}>).map((faq, i) => (
              <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><h3 className="font-bold text-slate-900 mb-2">{faq.name}</h3><p className="text-slate-600 text-sm">{faq.acceptedAnswer.text}</p></div>
            ))}
          </div>
        </div></section>
      </main>
      <FooterBr />
    </div>
  )
}
