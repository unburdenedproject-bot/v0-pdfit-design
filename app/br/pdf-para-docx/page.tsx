import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download } from "lucide-react"

export const metadata = {
  title: "PDF para DOCX — Converta PDF para Documento Word Editavel | PDF.it",
  description:
    "Converta PDF para DOCX com o PDF.it. Transforme seus arquivos PDF em documentos Word .docx editaveis instantaneamente — rapido, seguro e no navegador.",
  alternates: {
    canonical: "https://pdf.it.com/br/pdf-para-docx",
    languages: {
      en: "https://pdf.it.com/pdf-to-docx",
      es: "https://pdf.it.com/es/pdf-a-docx",
      pt: "https://pdf.it.com/br/pdf-para-docx",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qual a diferenca entre PDF para Word e PDF para DOCX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sao a mesma coisa. DOCX e o formato nativo do Microsoft Word. Ao converter PDF para DOCX voce obtem um arquivo .docx que pode abrir e editar no Word, Google Docs ou qualquer processador de texto compativel.",
      },
    },
    {
      "@type": "Question",
      name: "A formatacao do PDF e mantida ao converter para DOCX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O PDF.it preserva o layout, fontes, imagens e estrutura o melhor possivel. Formatacoes complexas podem variar dependendo do PDF original.",
      },
    },
    {
      "@type": "Question",
      name: "Posso editar o arquivo DOCX no Google Docs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Baixe o arquivo .docx, suba para o Google Drive e abra com o Google Docs para edita-lo diretamente no navegador.",
      },
    },
    {
      "@type": "Question",
      name: "E seguro subir meu PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos ou compartilhamos seus documentos.",
      },
    },
    {
      "@type": "Question",
      name: "Qual o tamanho maximo de arquivo que posso converter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contas gratuitas podem subir arquivos de ate 25MB. Contas Pro e Business podem subir arquivos de ate 200MB.",
      },
    },
  ],
}

export default function PDFParaDOCXPage() {
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
                <FileText className="h-10 w-10 text-white" />
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl lg:text-5xl font-black">PDF para DOCX</h1>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <p className="text-xl text-slate-300 mb-8">
                Converta seus arquivos PDF em documentos DOCX editaveis instantaneamente. Abra e edite no Word, Google Docs ou qualquer processador de texto.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Conversao Rapida</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>100% Seguro</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Formato DOCX</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to Word"
          outputFormat="DOCX"
          processingMessage="Convertendo seu PDF para DOCX..."
          successMessage="Seu arquivo DOCX esta pronto!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use a ferramenta PDF para DOCX do PDF.it para converter arquivos PDF em documentos Word editaveis em segundos. O formato DOCX e o padrao do Microsoft Word — compativel com Word, Google Docs, LibreOffice e muito mais. Suba seu PDF, converta e baixe um arquivo .docx pronto para editar.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Converta PDF para formato DOCX editavel</li>
              <li>&#10003; Preserva o layout, fontes, imagens e estrutura</li>
              <li>&#10003; Compativel com Word, Google Docs e LibreOffice</li>
              <li>&#10003; Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li>&#10003; Sem instalacao — converta PDFs direto no navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Edite Contratos e Documentos Legais</h2>
              <p className="text-slate-600">
                Converta contratos em PDF para DOCX para modificar clausulas, atualizar datas ou adicionar informacoes sem precisar recriar o documento do zero.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Modifique Relatorios e Apresentacoes</h2>
              <p className="text-slate-600">
                Transforme relatorios empresariais em documentos editaveis. Atualize dados, adicione secoes e personalize o conteudo diretamente no Word.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Atualize Curriculos e Documentos Pessoais</h2>
              <p className="text-slate-600">
                Converta seu curriculo em PDF para DOCX para atualiza-lo facilmente. Adicione nova experiencia, mude o formato ou adapte o conteudo para diferentes vagas de emprego.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Colabore em Documentos de Equipe</h2>
              <p className="text-slate-600">
                Converta PDFs para DOCX para compartilhar e colaborar. Suba o arquivo DOCX para o Google Docs ou OneDrive e trabalhe com sua equipe em tempo real.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Converter PDF para DOCX</h2>
            <div className="space-y-4">
              {[
                "Suba ou arraste seu PDF para o PDF.it.",
                "Clique em Converter PDF para DOCX.",
                "Baixe seu arquivo .docx editavel e abra no Word ou Google Docs.",
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
                { name: "PDF para Word", href: "/br/pdf-para-word", desc: "Converta PDF para Word" },
                { name: "PDF para Excel", href: "/br/pdf-para-excel", desc: "Extraia tabelas para planilha" },
                { name: "PDF para PowerPoint", href: "/br/pdf-para-powerpoint", desc: "Converta PDF para apresentacao" },
                { name: "Scanner OCR", href: "/br/scanner-ocr", desc: "Reconhecimento de texto" },
                { name: "PDF para Texto", href: "/br/pdf-para-texto", desc: "Extraia texto do PDF" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho do arquivo" },
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
                { q: "Qual a diferenca entre PDF para Word e PDF para DOCX?", a: "Sao a mesma coisa. DOCX e o formato nativo do Microsoft Word. Ao converter PDF para DOCX voce obtem um arquivo .docx que pode abrir e editar no Word, Google Docs ou qualquer processador de texto compativel." },
                { q: "A formatacao do PDF e mantida ao converter para DOCX?", a: "O PDF.it preserva o layout, fontes, imagens e estrutura o melhor possivel. Formatacoes complexas podem variar dependendo do PDF original." },
                { q: "Posso editar o arquivo DOCX no Google Docs?", a: "Sim. Baixe o arquivo .docx, suba para o Google Drive e abra com o Google Docs para edita-lo diretamente no navegador." },
                { q: "E seguro subir meu PDF?", a: "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos ou compartilhamos seus documentos." },
                { q: "Qual o tamanho maximo de arquivo que posso converter?", a: "Contas gratuitas podem subir arquivos de ate 25MB. Contas Pro e Business podem subir arquivos de ate 200MB." },
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
