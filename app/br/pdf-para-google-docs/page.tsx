import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download } from "lucide-react"

export const metadata = {
  title: "PDF para Google Docs — Converta PDF para Editar no Google Docs | PDF.it",
  description:
    "Converta PDF para Google Docs com o PDF.it. Transforme seu PDF em documento editavel compativel com Google Docs — rapido, gratuito e no navegador.",
  alternates: {
    canonical: "https://pdf.it.com/br/pdf-para-google-docs",
    languages: {
      en: "https://pdf.it.com/pdf-to-google-docs",
      es: "https://pdf.it.com/es/pdf-a-google-docs",
      pt: "https://pdf.it.com/br/pdf-para-google-docs",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como converter PDF para Google Docs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Suba seu PDF no PDF.it para converte-lo em formato DOCX. Depois, suba o arquivo .docx para o Google Drive e abra com o Google Docs para editar diretamente no navegador.",
      },
    },
    {
      "@type": "Question",
      name: "Por que converter para DOCX e nao diretamente para Google Docs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Google Docs nao tem um formato proprio de arquivo — ele usa DOCX como formato de importacao. Ao converter seu PDF para DOCX, voce obtem o formato ideal para abrir e editar no Google Docs.",
      },
    },
    {
      "@type": "Question",
      name: "A formatacao e mantida no Google Docs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O PDF.it preserva o layout, fontes e estrutura ao converter para DOCX. O Google Docs mantem a maioria da formatacao ao abrir o arquivo, embora ajustes menores possam ser necessarios.",
      },
    },
    {
      "@type": "Question",
      name: "Posso colaborar no documento apos a conversao?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Apos subir o arquivo DOCX para o Google Drive, voce pode compartilhar e colaborar em tempo real com outras pessoas, assim como qualquer documento do Google Docs.",
      },
    },
    {
      "@type": "Question",
      name: "E gratuito converter PDF para Google Docs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A conversao de PDF para DOCX (compativel com Google Docs) e um recurso Pro do PDF.it. Voce pode testar com arquivos de ate 25MB na versao gratuita.",
      },
    },
  ],
}

export default function PDFParaGoogleDocsPage() {
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
                <h1 className="text-4xl lg:text-5xl font-black">PDF para Google Docs</h1>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <p className="text-xl text-slate-300 mb-8">
                Converta seu PDF para formato compativel com Google Docs. Edite, compartilhe e colabore no documento diretamente pelo navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Conversao Rapida</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>100% Seguro</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Compativel com Google Docs</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to Word"
          outputFormat="DOCX"
          processingMessage="Convertendo seu PDF para formato Google Docs..."
          successMessage="Seu arquivo esta pronto para o Google Docs!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              O PDF.it converte seu PDF em formato DOCX, que e totalmente compativel com o Google Docs. Suba o arquivo convertido para o Google Drive, abra com o Google Docs e comece a editar. A formatacao, fontes e estrutura do documento sao preservadas durante a conversao.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Converta PDF para formato compativel com Google Docs</li>
              <li>&#10003; Preserva layout, fontes e estrutura</li>
              <li>&#10003; Edite e colabore em tempo real no Google Docs</li>
              <li>&#10003; Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li>&#10003; Sem instalacao — converta direto no navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Colaboracao em Tempo Real</h2>
              <p className="text-slate-600">
                Converta PDFs para Google Docs e trabalhe com sua equipe simultaneamente. Adicione comentarios, sugira edicoes e acompanhe as alteracoes em tempo real.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Edicao Sem Software</h2>
              <p className="text-slate-600">
                Nao tem Word instalado? Converta seu PDF para Google Docs e edite gratuitamente pelo navegador, sem precisar de nenhum software adicional.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Armazenamento na Nuvem</h2>
              <p className="text-slate-600">
                Apos converter, o documento fica armazenado no Google Drive. Acesse de qualquer dispositivo, a qualquer momento, sem se preocupar com backup.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Compartilhamento Facil</h2>
              <p className="text-slate-600">
                Compartilhe o documento convertido com qualquer pessoa usando um link do Google Docs. Controle permissoes de visualizacao, comentario e edicao.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Converter PDF para Google Docs</h2>
            <div className="space-y-4">
              {[
                "Suba ou arraste seu PDF para o PDF.it.",
                "Clique em Converter — o PDF.it gera um arquivo .docx compativel.",
                "Baixe o .docx, suba para o Google Drive e abra com o Google Docs.",
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
                { q: "Como converter PDF para Google Docs?", a: "Suba seu PDF no PDF.it para converte-lo em formato DOCX. Depois, suba o arquivo .docx para o Google Drive e abra com o Google Docs para editar diretamente no navegador." },
                { q: "Por que converter para DOCX e nao diretamente para Google Docs?", a: "O Google Docs nao tem um formato proprio de arquivo — ele usa DOCX como formato de importacao. Ao converter seu PDF para DOCX, voce obtem o formato ideal para abrir e editar no Google Docs." },
                { q: "A formatacao e mantida no Google Docs?", a: "O PDF.it preserva o layout, fontes e estrutura ao converter para DOCX. O Google Docs mantem a maioria da formatacao ao abrir o arquivo, embora ajustes menores possam ser necessarios." },
                { q: "Posso colaborar no documento apos a conversao?", a: "Sim. Apos subir o arquivo DOCX para o Google Drive, voce pode compartilhar e colaborar em tempo real com outras pessoas, assim como qualquer documento do Google Docs." },
                { q: "E gratuito converter PDF para Google Docs?", a: "A conversao de PDF para DOCX (compativel com Google Docs) e um recurso Pro do PDF.it. Voce pode testar com arquivos de ate 25MB na versao gratuita." },
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
