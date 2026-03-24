import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { FileIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Converter Word para PDF Online (Mantendo a Formatação) | PDF.it",
  description:
    "Aprenda como converter Word (.docx) para PDF online sem perder formatação. Guia passo a passo para manter fontes, imagens e layout intactos.",
  keywords: "converter word para pdf, word para pdf online, docx para pdf, converter documento word pdf, word para pdf grátis",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Como converto Word para PDF grátis?", "acceptedAnswer": { "@type": "Answer", "text": "Envie seu arquivo Word (.docx ou .doc) para a ferramenta Word para PDF do PDF.it, clique em Converter e baixe o PDF. Não é necessário cadastro para seus primeiros 3 arquivos." } },
    { "@type": "Question", "name": "A formatação é mantida ao converter?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it preserva fontes, imagens, tabelas, cabeçalhos, rodapés e layout do documento Word. O PDF gerado é fiel ao original." } },
    { "@type": "Question", "name": "Posso converter Word para PDF no celular?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em qualquer navegador móvel. Envie o arquivo Word e baixe o PDF diretamente no celular." } },
    { "@type": "Question", "name": "Qual o tamanho máximo de arquivo?", "acceptedAnswer": { "@type": "Answer", "text": "Usuários gratuitos podem converter arquivos até 25MB. Usuários Pro podem converter até 200MB e fazer conversões em lote." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Converter Word para PDF",
  "description": "Converta documentos Word para PDF mantendo a formatação original.",
  "step": [
    { "@type": "HowToStep", "name": "Envie o arquivo Word", "text": "Acesse a ferramenta Word para PDF do PDF.it e envie seu arquivo .docx ou .doc." },
    { "@type": "HowToStep", "name": "Clique em Converter", "text": "O PDF.it converte o documento mantendo fontes, imagens e layout intactos." },
    { "@type": "HowToStep", "name": "Baixe o PDF", "text": "Baixe o PDF gerado. O arquivo mantém toda a formatação do documento Word original." }
  ]
}

export default function ConverterWordParaPdfPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Word para PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Como Converter Word para PDF Online (Mantendo a Formatação)</h1>
              <p className="text-xl text-slate-300">
                Precisa enviar um documento Word como PDF? Veja como converter .docx para PDF em segundos, mantendo fontes, imagens e layout intactos.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileIcon className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Pronto para converter? Vá direto para a ferramenta.</p>
            </div>
            <Link href="/br/word-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Converter Word para PDF <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Converter Word para PDF?</h2>
              <p className="text-slate-600 mb-4">PDF é o formato padrão para documentos profissionais. Motivos comuns para converter:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Formatação consistente.</strong> PDFs aparecem igual em qualquer dispositivo. Documentos Word podem mudar de aparência dependendo da versão do Office e das fontes instaladas.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Envio profissional.</strong> Currículos, propostas, contratos e relatórios devem ser enviados em PDF para garantir apresentação profissional.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Proteção do conteúdo.</strong> PDFs não são facilmente editáveis, protegendo seu conteúdo contra alterações acidentais.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Universalidade.</strong> Todo mundo pode abrir PDFs. Nem todo mundo tem Microsoft Word instalado.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Converter (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  { title: "Envie o arquivo Word", desc: "Acesse a ferramenta Word para PDF do PDF.it. Arraste seu arquivo .docx ou .doc para a área de upload, ou clique para selecionar. Arquivos até 25MB são grátis." },
                  { title: "Clique em Converter", desc: "O PDF.it processa o documento mantendo todas as formatações: fontes, imagens, tabelas, cabeçalhos, rodapés, numeração de páginas e layout." },
                  { title: "Baixe o PDF", desc: "Em segundos, seu PDF está pronto. Baixe e verifique que a formatação ficou correta. O resultado é fiel ao documento Word original." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para Melhor Resultado</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use Fontes Comuns</h3>
                  <p className="text-slate-600">Fontes como Arial, Times New Roman, Calibri e Verdana são universais. Fontes personalizadas podem não ser renderizadas corretamente se não estiverem incorporadas.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Verifique Imagens e Tabelas</h3>
                  <p className="text-slate-600">Antes de converter, verifique se imagens estão posicionadas corretamente e tabelas não ultrapassam as margens da página.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Comprima Depois se Necessário</h3>
                  <p className="text-slate-600">Se o PDF ficou grande demais para enviar por email, use <Link href="/br/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> para reduzir o tamanho sem perda significativa de qualidade.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Proteja o PDF</h3>
                  <p className="text-slate-600">Para documentos confidenciais, use <Link href="/br/proteger-pdf" className="text-orange-600 hover:underline">Proteger PDF</Link> para adicionar senha após a conversão.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Erros Comuns de Formatação</h2>
              <p className="text-slate-600 mb-4">Se seu PDF não ficou como esperado, veja os <Link href="/br/aprender/word-para-pdf-erros-comuns-de-formato" className="text-orange-600 hover:underline">erros comuns de formato</Link> e como resolvê-los. Os problemas mais frequentes incluem:</p>
              <ul className="space-y-2 text-slate-700">
                <li>- Fontes substituídas por fontes padrão</li>
                <li>- Imagens fora de posição</li>
                <li>- Tabelas desalinhadas</li>
                <li>- Cabeçalhos e rodapés diferentes</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Converta Seu Word para PDF Agora</h2>
            <p className="text-slate-300 mb-6">Mantenha a formatação perfeita — grátis, sem cadastro.</p>
            <Link href="/br/word-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">
              <FileIcon className="h-5 w-5" /> Converter Word para PDF
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Word para PDF no iPhone", href: "/br/aprender/word-para-pdf-no-iphone" },
                { title: "Word para PDF — Erros Comuns de Formato", href: "/br/aprender/word-para-pdf-erros-comuns-de-formato" },
                { title: "Converter Excel para PDF", href: "/br/aprender/converter-excel-para-pdf" },
                { title: "Como Comprimir PDF", href: "/br/aprender/converter-pdf-para-jpg" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group">
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
                { q: "Como converto Word para PDF grátis?", a: "Envie seu arquivo Word para a ferramenta Word para PDF do PDF.it, clique em Converter e baixe o PDF. Não é necessário cadastro para seus primeiros 3 arquivos." },
                { q: "A formatação é mantida ao converter?", a: "Sim. O PDF.it preserva fontes, imagens, tabelas, cabeçalhos, rodapés e layout do documento Word." },
                { q: "Posso converter Word para PDF no celular?", a: "Sim. O PDF.it funciona em qualquer navegador móvel. Envie o arquivo Word e baixe o PDF diretamente no celular." },
                { q: "Qual o tamanho máximo de arquivo?", a: "Usuários gratuitos podem converter arquivos até 25MB. Usuários Pro podem converter até 200MB e fazer conversões em lote." },
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
