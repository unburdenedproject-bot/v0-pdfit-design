import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { ImageIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "PDF para JPG vs PNG: Qual Escolher? (Comparação Completa) | PDF.it",
  description:
    "JPG ou PNG? Descubra qual formato é melhor para converter seu PDF. Comparação de qualidade, tamanho, transparência e usos ideais para cada formato.",
  keywords: "pdf para jpg vs png, jpg ou png, diferença jpg png, melhor formato para pdf, converter pdf para imagem",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "JPG ou PNG: qual tem melhor qualidade?", "acceptedAnswer": { "@type": "Answer", "text": "PNG tem melhor qualidade porque usa compressão sem perda. JPG usa compressão com perda, o que pode criar artefatos visíveis. Para textos e gráficos, PNG é superior. Para fotos, a diferença é mínima." } },
    { "@type": "Question", "name": "Qual formato é menor: JPG ou PNG?", "acceptedAnswer": { "@type": "Answer", "text": "JPG geralmente produz arquivos 2-5x menores que PNG. Se o tamanho do arquivo importa (email, WhatsApp, upload), JPG é a melhor escolha." } },
    { "@type": "Question", "name": "Quando devo usar PNG em vez de JPG?", "acceptedAnswer": { "@type": "Answer", "text": "Use PNG quando seu PDF tem texto nítido, diagramas, gráficos, arte linear ou quando precisa de fundo transparente. PNG mantém a nitidez de linhas e texto sem artefatos." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Escolher Entre JPG e PNG para PDF",
  "description": "Guia para decidir qual formato usar ao converter seu PDF para imagem.",
  "step": [
    { "@type": "HowToStep", "name": "Analise o conteúdo do PDF", "text": "Verifique se seu PDF contém principalmente fotos, texto, gráficos ou uma combinação." },
    { "@type": "HowToStep", "name": "Considere o uso final", "text": "Para web e redes sociais, JPG é ideal. Para design, impressão e documentação, PNG é melhor." },
    { "@type": "HowToStep", "name": "Converta no formato escolhido", "text": "Use a ferramenta PDF para JPG ou PDF para PNG do PDF.it conforme sua necessidade." }
  ]
}

export default function PdfParaJpgVsPngPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PDF para JPG</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PDF para JPG vs PNG: Qual Escolher?</h1>
              <p className="text-xl text-slate-300">
                Converter PDF para imagem, mas não sabe se deve usar JPG ou PNG? Veja a comparação completa e descubra o formato ideal para cada situação.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <ImageIcon className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Já sabe qual formato? Converta agora.</p>
            </div>
            <Link href="/br/pdf-para-jpg" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Converter PDF para JPG <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">A Diferença Fundamental</h2>
              <p className="text-slate-600 mb-4">A principal diferença entre JPG e PNG está na compressão:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">-</span><span><strong>JPG (JPEG):</strong> Compressão com perda. Descarta alguns dados da imagem para criar arquivos menores. Ideal para fotos e imagens complexas.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">-</span><span><strong>PNG:</strong> Compressão sem perda. Mantém todos os dados da imagem, gerando arquivos maiores mas com qualidade perfeita. Ideal para texto, gráficos e transparência.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Comparação Lado a Lado</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead><tr className="bg-slate-900 text-white"><th className="text-left py-3 px-4 font-bold">Critério</th><th className="text-left py-3 px-4 font-bold">JPG</th><th className="text-left py-3 px-4 font-bold">PNG</th></tr></thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Qualidade</td><td className="py-3 px-4">Boa (com perda)</td><td className="py-3 px-4">Perfeita (sem perda)</td></tr>
                    <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Tamanho</td><td className="py-3 px-4">Pequeno (2-5x menor)</td><td className="py-3 px-4">Grande</td></tr>
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Transparência</td><td className="py-3 px-4">Não suporta</td><td className="py-3 px-4">Suporta</td></tr>
                    <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Melhor para fotos</td><td className="py-3 px-4 text-green-600 font-semibold">Sim</td><td className="py-3 px-4">Não ideal</td></tr>
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Melhor para texto</td><td className="py-3 px-4">Não ideal</td><td className="py-3 px-4 text-green-600 font-semibold">Sim</td></tr>
                    <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Redes sociais</td><td className="py-3 px-4 text-green-600 font-semibold">Ideal</td><td className="py-3 px-4">Funciona</td></tr>
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Design gráfico</td><td className="py-3 px-4">Não ideal</td><td className="py-3 px-4 text-green-600 font-semibold">Ideal</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Quando Usar JPG</h2>
              <ul className="space-y-2 text-slate-700">
                <li>- PDF com fotos ou imagens coloridas complexas</li>
                <li>- Compartilhamento no WhatsApp, Instagram, Facebook</li>
                <li>- Anexos de email (tamanho menor = envio mais rápido)</li>
                <li>- Documentos digitalizados</li>
                <li>- Quando o tamanho do arquivo é prioridade</li>
              </ul>
              <p className="text-slate-600 mt-4">
                <Link href="/br/pdf-para-jpg" className="text-[#14D8C4] hover:underline font-semibold">Converter PDF para JPG agora</Link>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Quando Usar PNG</h2>
              <ul className="space-y-2 text-slate-700">
                <li>- PDF com texto nítido, tabelas ou gráficos</li>
                <li>- Uso em ferramentas de design (Canva, Figma, Photoshop)</li>
                <li>- Quando precisa de fundo transparente</li>
                <li>- Capturas de tela e documentação técnica</li>
                <li>- Quando a qualidade é prioridade sobre o tamanho</li>
              </ul>
              <p className="text-slate-600 mt-4">
                <Link href="/br/pdf-para-png" className="text-[#14D8C4] hover:underline font-semibold">Converter PDF para PNG agora</Link>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Resumo Rápido</h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-slate-700"><strong>Regra simples:</strong> Se seu PDF tem fotos e você quer arquivo pequeno, use JPG. Se tem texto/gráficos e quer qualidade perfeita, use PNG. Na dúvida? Comece com JPG a 200 DPI — funciona bem para a maioria dos casos.</p>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Escolheu o Formato? Converta Agora</h2>
            <p className="text-slate-300 mb-6">Converta seu PDF para JPG ou PNG em segundos — grátis e sem cadastro.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/br/pdf-para-jpg" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">
                <ImageIcon className="h-5 w-5" /> PDF para JPG
              </Link>
              <Link href="/br/pdf-para-png" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-slate-900 font-bold py-3 px-8 rounded-xl transition-colors">
                <ImageIcon className="h-5 w-5" /> PDF para PNG
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Converter PDF para JPG Online (Guia Completo)", href: "/br/aprender/converter-pdf-para-jpg" },
                { title: "Como Converter PDF para PNG Online", href: "/br/aprender/converter-pdf-para-png" },
                { title: "PDF para PNG para Design", href: "/br/aprender/pdf-para-png-para-design" },
                { title: "Por Que PDF para JPG Fica Borrado", href: "/br/aprender/por-que-pdf-para-jpg-fica-borrado" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group">
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
                { q: "JPG ou PNG: qual tem melhor qualidade?", a: "PNG tem melhor qualidade porque usa compressão sem perda. JPG usa compressão com perda, o que pode criar artefatos visíveis. Para textos e gráficos, PNG é superior. Para fotos, a diferença é mínima." },
                { q: "Qual formato é menor: JPG ou PNG?", a: "JPG geralmente produz arquivos 2-5x menores que PNG. Se o tamanho do arquivo importa (email, WhatsApp, upload), JPG é a melhor escolha." },
                { q: "Quando devo usar PNG em vez de JPG?", a: "Use PNG quando seu PDF tem texto nítido, diagramas, gráficos, arte linear ou quando precisa de fundo transparente. PNG mantém a nitidez de linhas e texto sem artefatos." },
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
