import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Table, CheckCircle, Zap, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Converter Excel para PDF Online — XLSX para PDF Gratis | PDF.it",
  description:
    "Converta Excel para PDF em segundos com o PDF.it. Transforme planilhas XLS ou XLSX em um PDF limpo e pronto para compartilhar — rapido, facil e direto do navegador.",
  alternates: {
    canonical: "https://pdf.it.com/br/excel-para-pdf",
    languages: {
      en: "https://pdf.it.com/excel-to-pdf",
      es: "https://pdf.it.com/es/excel-a-pdf",
      pt: "https://pdf.it.com/br/excel-para-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O PDF.it pode converter tanto XLS quanto XLSX para PDF?",
      acceptedAnswer: { "@type": "Answer", text: "Sim. O PDF.it suporta ambos os formatos de arquivo .xls e .xlsx." },
    },
    {
      "@type": "Question",
      name: "A formatacao do meu Excel sera mantida no PDF?",
      acceptedAnswer: { "@type": "Answer", text: "Na maioria dos casos, sim. Planilhas complexas com colunas muito largas ou fontes personalizadas podem ficar ligeiramente diferentes dependendo do arquivo." },
    },
    {
      "@type": "Question",
      name: "Por que as colunas sao cortadas na minha conversao de Excel para PDF?",
      acceptedAnswer: { "@type": "Answer", text: "Isso geralmente acontece quando a planilha e mais larga que a pagina PDF. Tente usar um layout de impressao ajustado a pagina no Excel antes de enviar o arquivo." },
    },
    {
      "@type": "Question",
      name: "Posso converter Excel para PDF no celular?",
      acceptedAnswer: { "@type": "Answer", text: "Sim. O PDF.it funciona em navegadores moveis — envie o arquivo XLSX e baixe o PDF." },
    },
    {
      "@type": "Question",
      name: "E seguro enviar meu arquivo Excel?",
      acceptedAnswer: { "@type": "Answer", text: "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos." },
    },
    {
      "@type": "Question",
      name: "Qual e o tamanho maximo de arquivo que posso converter?",
      acceptedAnswer: { "@type": "Answer", text: "Contas Pro podem enviar arquivos de ate 200MB. Contas Business podem enviar ate 1GB." },
    },
  ],
}

export default function ExcelParaPDFPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderBr />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Table className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Converter Excel para PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Converta XLS/XLSX para PDF com o PDF.it — ideal para compartilhar relatorios, faturas e planilhas em formato consistente e pronto para imprimir.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-500" />
                  <span>Tabelas Preservadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>Arquivos Eliminados Apos a Sessao</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>XLS e XLSX Suportados</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".xls,.xlsx"
          toolName="Excel to PDF"
          outputFormat="PDF"
          processingMessage="Converting your spreadsheet..."
          successMessage="Your PDF is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use o conversor de Excel para PDF do PDF.it para transformar uma planilha XLS ou XLSX em um PDF que voce pode compartilhar com qualquer pessoa. Ideal para relatorios, impressao, envio por e-mail e entrega de arquivos — converta em segundos e baixe seu PDF na hora.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Converte Excel para PDF online em segundos</li>
              <li>✓ Suporta planilhas .xls e .xlsx</li>
              <li>✓ Cria PDFs prontos para compartilhar, imprimir e enviar por e-mail</li>
              <li>✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalacao — conversao direto do navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Exporte XLSX para PDF para Compartilhar Facilmente</h2>
              <p className="text-slate-600">
                PDF e a forma mais simples de compartilhar planilhas sem surpresas de layout. Converta Excel para PDF para que os destinatarios vejam de forma consistente — sem precisar do Excel.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">PDFs Prontos para Imprimir para Relatorios e Faturas</h2>
              <p className="text-slate-600">
                Transforme planilhas em PDFs mais faceis de imprimir, anexar a e-mails ou enviar para portais de contabilidade, escola e trabalho.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Mantem as Tabelas Legiveis</h2>
              <p className="text-slate-600">
                O PDF.it converte suas planilhas em um PDF otimizado para visualizacao e impressao padrao, mantendo seus dados claros e organizados.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Converter Excel para PDF</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu arquivo XLS/XLSX para o PDF.it.",
                "Clique em Converter Excel para PDF.",
                "Baixe seu PDF.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Word para PDF", href: "/br/word-para-pdf", desc: "Converta documentos Word para PDF" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho do PDF" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine varios PDFs em um" },
                { name: "PDF para JPG", href: "/br/pdf-para-jpg", desc: "Extraia paginas como imagens" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="border border-orange-200 bg-orange-50 rounded-xl p-4 hover:border-orange-400 hover:bg-orange-100 transition-all text-center flex flex-col justify-center min-h-[80px]"
                >
                  <div className="font-bold text-orange-600 text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-500">{tool.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "O PDF.it pode converter tanto XLS quanto XLSX para PDF?", a: "Sim. O PDF.it suporta ambos os formatos de arquivo .xls e .xlsx." },
                { q: "A formatacao do meu Excel sera mantida no PDF?", a: "Na maioria dos casos, sim. Planilhas complexas com colunas muito largas ou fontes personalizadas podem ficar ligeiramente diferentes dependendo do arquivo." },
                { q: "Por que as colunas sao cortadas na minha conversao de Excel para PDF?", a: "Isso geralmente acontece quando a planilha e mais larga que a pagina PDF. Tente usar um layout de impressao ajustado a pagina no Excel antes de enviar o arquivo." },
                { q: "Posso converter Excel para PDF no celular?", a: "Sim. O PDF.it funciona em navegadores moveis — envie o arquivo XLSX e baixe o PDF." },
                { q: "E seguro enviar meu arquivo Excel?", a: "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos." },
                { q: "Qual e o tamanho maximo de arquivo que posso converter?", a: "Contas Pro podem enviar arquivos de ate 200MB. Contas Business podem enviar ate 1GB." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
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
