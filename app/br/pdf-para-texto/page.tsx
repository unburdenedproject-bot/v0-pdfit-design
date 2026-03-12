import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Type, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Converter PDF para Texto Online — Extrair Texto de PDF | OmnisPDF",
  description:
    "Converta PDF para TXT em segundos com o OmnisPDF. Extraia texto puro de PDFs online para copiar, editar e compartilhar — sem instalar nada.",
  alternates: {
    canonical: "https://omnispdf.com/br/pdf-para-texto",
    languages: {
      en: "https://omnispdf.com/pdf-to-txt",
      es: "https://omnispdf.com/es/pdf-a-texto",
      pt: "https://omnispdf.com/br/pdf-para-texto",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Posso converter qualquer PDF para um arquivo TXT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A maioria dos PDFs com texto se converte bem. Se seu PDF e escaneado (apenas imagem), voce precisara de OCR para extrair o texto.",
      },
    },
    {
      "@type": "Question",
      name: "O OmnisPDF mantem a formatacao do PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TXT e texto puro, entao a formatacao como fontes, colunas e espacamento pode nao ser preservada. Se precisar manter o layout, use nossa ferramenta PDF para Word.",
      },
    },
    {
      "@type": "Question",
      name: "Por que meu texto convertido parece desorganizado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alguns PDFs armazenam texto em colunas ou blocos posicionados. A exportacao para TXT segue a estrutura interna do PDF, o que pode reordenar as linhas.",
      },
    },
    {
      "@type": "Question",
      name: "Posso converter PDF para TXT no celular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Abra o OmnisPDF no navegador do celular, envie o PDF, converta e baixe o arquivo TXT.",
      },
    },
    {
      "@type": "Question",
      name: "E seguro enviar meu PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao.",
      },
    },
    {
      "@type": "Question",
      name: "Para que serve converter PDF para texto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "E ideal para copiar conteudo em notas, documentos, e-mails ou ferramentas de IA — sem ter que redigitar tudo manualmente.",
      },
    },
  ],
}

export default function PDFparaTextoPage() {
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
                <Type className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Converter PDF para Texto Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Extraia texto limpo e editavel de qualquer PDF. Converta para um arquivo .txt puro para copiar, fazer anotacoes e editar rapidamente.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>Texto Puro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>Arquivos Eliminados Apos a Sessao</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>Sem Cadastro</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to TXT"
          outputFormat="TXT"
          processingMessage="Extracting text from your PDF..."
          successMessage="Your text file is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use o conversor de PDF para TXT do OmnisPDF para converter um PDF em um arquivo de texto puro (.txt) em segundos. Perfeito para copiar conteudo em notas, documentos, e-mails ou ferramentas de IA — sem ter que reescrever nada. Envie seu PDF, converta e baixe o texto extraido na hora.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Converte PDF para TXT para copiar e editar rapidamente</li>
              <li>✓ Extrai texto de relatorios, artigos, faturas e formularios</li>
              <li>✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalacao — funciona direto do navegador</li>
              <li>✓ Ideal para buscar, citar e reutilizar conteudo</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extraia Texto de PDF para TXT</h2>
              <p className="text-slate-600">
                Converta paginas de PDF em um arquivo de texto limpo que voce pode editar em qualquer lugar. O OmnisPDF exporta seu conteudo como texto puro, facilitando colar no Word, Google Docs, Notion, e-mails ou editores de codigo.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Resultado Limpo e Facil de Copiar</h2>
              <p className="text-slate-600">
                A saida TXT e ideal quando voce quer as palavras sem a formatacao. Tambem e leve e compativel com todos os dispositivos e aplicativos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Conversao Rapida Online em Qualquer Dispositivo</h2>
              <p className="text-slate-600">
                Converta PDF para texto a partir de qualquer navegador moderno — computador ou celular — sem downloads nem instalacoes.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Converter PDF para Texto</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF para o OmnisPDF.",
                "Clique em Converter PDF para TXT.",
                "Baixe seu arquivo .txt.",
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
                { name: "PDF para JPG", href: "/br/pdf-para-jpg", desc: "Extraia paginas como imagens" },
                { name: "PDF para PNG", href: "/br/pdf-para-png", desc: "Imagens sem perda de qualidade" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho do PDF" },
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Converta apenas as paginas necessarias" },
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
                {
                  q: "Posso converter qualquer PDF para um arquivo TXT?",
                  a: "A maioria dos PDFs com texto se converte bem. Se seu PDF e escaneado (apenas imagem), voce precisara de OCR para extrair o texto.",
                },
                {
                  q: "O OmnisPDF mantem a formatacao do PDF?",
                  a: "TXT e texto puro, entao a formatacao como fontes, colunas e espacamento pode nao ser preservada. Se precisar manter o layout, use nossa ferramenta PDF para Word.",
                },
                {
                  q: "Por que meu texto convertido parece desorganizado?",
                  a: "Alguns PDFs armazenam texto em colunas ou blocos posicionados. A exportacao para TXT segue a estrutura interna do PDF, o que pode reordenar as linhas.",
                },
                {
                  q: "Posso converter PDF para TXT no celular?",
                  a: "Sim. Abra o OmnisPDF no navegador do celular, envie o PDF, converta e baixe o arquivo TXT.",
                },
                {
                  q: "E seguro enviar meu PDF?",
                  a: "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao.",
                },
                {
                  q: "Para que serve converter PDF para texto?",
                  a: "E ideal para copiar conteudo em notas, documentos, e-mails ou ferramentas de IA — sem ter que redigitar tudo manualmente.",
                },
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
