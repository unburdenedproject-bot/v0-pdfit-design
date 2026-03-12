import Script from "next/script"
import { HeaderPt } from "@/components/header-pt"
import { FooterPt } from "@/components/footer-pt"
import { ProcessingInterface } from "@/components/processing-interface"
import { Presentation, CheckCircle, Zap, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Converter PowerPoint para PDF Online — PPTX para PDF | OmnisPDF",
  description:
    "Converta PPT para PDF em segundos com o OmnisPDF. Transforme seus slides PPT/PPTX em um PDF limpo e facil de compartilhar — rapido, simples e direto do navegador.",
  alternates: {
    canonical: "https://omnispdf.com/pt/powerpoint-para-pdf",
    languages: {
      en: "https://omnispdf.com/powerpoint-to-pdf",
      es: "https://omnispdf.com/es/powerpoint-a-pdf",
      pt: "https://omnispdf.com/pt/powerpoint-para-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O OmnisPDF pode converter tanto PPT quanto PPTX para PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O OmnisPDF suporta ambos os formatos de arquivo .ppt e .pptx." }
    },
    {
      "@type": "Question",
      "name": "O PDF mantem o design e a disposicao dos meus slides?",
      "acceptedAnswer": { "@type": "Answer", "text": "Na maioria dos casos, sim. Slides muito complexos, fontes incomuns ou efeitos especiais podem renderizar ligeiramente diferente dependendo do arquivo fonte." }
    },
    {
      "@type": "Question",
      "name": "As animacoes e transicoes sao transferidas para o PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. Um PDF e um formato estatico, entao as animacoes e transicoes nao sao reproduzidas — os slides sao exportados como paginas fixas." }
    },
    {
      "@type": "Question",
      "name": "Posso converter PowerPoint para PDF no celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O OmnisPDF funciona em navegadores moveis — envie sua apresentacao e baixe o PDF." }
    },
    {
      "@type": "Question",
      "name": "E seguro enviar meu arquivo PowerPoint?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos." }
    },
    {
      "@type": "Question",
      "name": "Qual e o tamanho maximo de arquivo que posso converter?",
      "acceptedAnswer": { "@type": "Answer", "text": "Contas Pro e Business podem enviar arquivos de ate 200MB." }
    }
  ]
}

export default function PowerPointParaPDFPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderPt />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Presentation className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Converter PPT para PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Converta PPT/PPTX para PDF com o OmnisPDF — ideal para compartilhar slides, enviar apresentacoes por e-mail e imprimir materiais.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-orange-500" /><span>Slides Preservados</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Arquivos Eliminados Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>PPT e PPTX Suportados</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".ppt,.pptx"
          toolName="PowerPoint to PDF"
          outputFormat="PDF"
          processingMessage="Convertendo sua apresentacao..."
          successMessage="Seu PDF esta pronto!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use o conversor de PPT para PDF do OmnisPDF para transformar um PowerPoint (PPT/PPTX) em um PDF em segundos. Exporte seus slides para um formato facil de visualizar em qualquer lugar — perfeito para e-mail, impressao e envio para portais.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Converte PowerPoint para PDF online em segundos</li>
              <li>✓ Suporta arquivos .ppt e .pptx</li>
              <li>✓ Cria PDFs compartilhaveis e prontos para apresentar</li>
              <li>✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalacao — funciona direto do navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Converta Slides PPTX em um PDF Compartilhavel</h2>
              <p className="text-slate-600">
                Os PDFs abrem de forma consistente em todos os dispositivos e nao exigem PowerPoint. Converta sua apresentacao para PDF para que qualquer pessoa possa ve-la em um navegador ou leitor de PDF.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Ideal para Imprimir e Distribuir</h2>
              <p className="text-slate-600">
                Precisa de uma versao impressa dos seus slides? Converta PPT para PDF para imprimir rapidamente, copias de revisao ou entregas de aulas e trabalho.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Mantenha o Design dos seus Slides</h2>
              <p className="text-slate-600">
                O OmnisPDF converte os slides em paginas PDF para que seu texto, imagens e graficos sejam faceis de ler e compartilhar. Nota: animacoes e transicoes se tornam estaticas no formato PDF.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Converter PPT para PDF</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu arquivo PPT/PPTX para o OmnisPDF.",
                "Clique em Converter PPT para PDF.",
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
                { name: "Office para PDF", href: "/pt/office-para-pdf", desc: "Converta arquivos Office para PDF" },
                { name: "Comprimir PDF", href: "/pt/comprimir-pdf", desc: "Reduza o tamanho do seu PDF" },
                { name: "Unir PDF", href: "/pt/unir-pdf", desc: "Combine multiplos PDFs" },
                { name: "Proteger PDF", href: "/pt/proteger-pdf", desc: "Proteja seu PDF com senha" },
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
                { q: "O OmnisPDF pode converter tanto PPT quanto PPTX para PDF?", a: "Sim. O OmnisPDF suporta ambos os formatos de arquivo .ppt e .pptx." },
                { q: "O PDF mantem o design e a disposicao dos meus slides?", a: "Na maioria dos casos, sim. Slides muito complexos, fontes incomuns ou efeitos especiais podem renderizar ligeiramente diferente dependendo do arquivo fonte." },
                { q: "As animacoes e transicoes sao transferidas para o PDF?", a: "Nao. Um PDF e um formato estatico, entao as animacoes e transicoes nao sao reproduzidas — os slides sao exportados como paginas fixas." },
                { q: "Posso converter PowerPoint para PDF no celular?", a: "Sim. O OmnisPDF funciona em navegadores moveis — envie sua apresentacao e baixe o PDF." },
                { q: "E seguro enviar meu arquivo PowerPoint?", a: "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos." },
                { q: "Qual e o tamanho maximo de arquivo que posso converter?", a: "Contas Pro e Business podem enviar arquivos de ate 200MB." },
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
      <FooterPt />
    </div>
  )
}
