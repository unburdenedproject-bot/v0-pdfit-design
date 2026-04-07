import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Converter Office para PDF Online — DOCX, XLSX, PPTX para PDF | PDF.it",
  description:
    "Converta arquivos de Word, Excel e PowerPoint para PDF com o PDF.it. Transforme DOCX, XLSX, PPTX e mais para PDF — rapido, preciso e seguro.",
  alternates: {
    canonical: "https://pdf.it.com/br/office-para-pdf",
    languages: {
      en: "https://pdf.it.com/office-to-pdf",
      es: "https://pdf.it.com/es/office-a-pdf",
      pt: "https://pdf.it.com/br/office-para-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quais formatos do Office o PDF.it pode converter para PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "O PDF.it converte Word (DOC/DOCX), Excel (XLS/XLSX), PowerPoint (PPT/PPTX) e formatos OpenDocument (ODT/ODP/ODS) para PDF." }
    },
    {
      "@type": "Question",
      "name": "Minha formatacao sera mantida igual apos converter para PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "A maioria dos documentos se converte corretamente. Alguns layouts complexos com fontes incomuns ou planilhas muito largas podem ficar ligeiramente diferentes dependendo do arquivo fonte." }
    },
    {
      "@type": "Question",
      "name": "Posso converter arquivos do Office para PDF no celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em navegadores moveis — envie seu arquivo e baixe o PDF." }
    },
    {
      "@type": "Question",
      "name": "As animacoes do PowerPoint sao convertidas para PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. Os PDFs sao estaticos, entao as animacoes e transicoes nao sao reproduzidas — os slides sao exportados como paginas fixas." }
    },
    {
      "@type": "Question",
      "name": "E seguro enviar arquivos do Office?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos." }
    },
    {
      "@type": "Question",
      "name": "Qual e o tamanho maximo de arquivo que posso converter?",
      "acceptedAnswer": { "@type": "Answer", "text": "Contas Pro podem enviar arquivos de ate 200MB. Contas Business podem enviar ate 1GB." }
    }
  ]
}

export default function OfficeParaPDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderBr />
      <main>
        {/* Hero */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a1f5e] to-[#252A6A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Converter Office para PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Converta arquivos de Word, Excel, PowerPoint e outros arquivos de escritorio para PDF. Rapido, preciso e seguro.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Formatacao Preservada</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Eliminados Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sem Cadastro</span></div>
              </div>
              <div className="flex flex-wrap justify-center gap-2 text-xs text-slate-400">
                <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">DOC / DOCX</span>
                <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">XLS / XLSX</span>
                <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">PPT / PPTX</span>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".doc,.docx,.xls,.xlsx,.ppt,.pptx"
          toolName="Office to PDF"
          outputFormat="PDF"
          processingMessage="Convertendo seu arquivo..."
          successMessage="Seu PDF esta pronto!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use o conversor de Office para PDF do PDF.it para transformar documentos do Word, planilhas do Excel e apresentacoes do PowerPoint para PDF em segundos. Converta seus arquivos para um formato universal que fica igual em qualquer dispositivo.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Converte Word, Excel e PowerPoint para PDF online</li>
              <li>✓ Suporta DOC, DOCX, XLS, XLSX, PPT e PPTX</li>
              <li>✓ Cria PDFs compartilhaveis e profissionais</li>
              <li>✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalacao — funciona direto do navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Converta Qualquer Arquivo do Office para PDF</h2>
              <p className="text-slate-600">
                Seja um documento do Word, uma planilha do Excel ou uma apresentacao do PowerPoint, o PDF.it converte seu arquivo em um PDF limpo e profissional que abre em qualquer dispositivo.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Perfeito para Compartilhar e Arquivar</h2>
              <p className="text-slate-600">
                PDFs sao o formato universal para documentos. Converta seus arquivos do Office para PDF para compartilha-los por e-mail, envia-los para portais ou arquiva-los com seguranca.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Conversao Rapida e Segura</h2>
              <p className="text-slate-600">
                Envie seu arquivo, converta e baixe. Sem software adicional — o PDF.it funciona diretamente do navegador com criptografia SSL.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Converter Office para PDF</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu arquivo do Office (Word, Excel ou PowerPoint) para o PDF.it.",
                "Clique em Converter para PDF.",
                "Baixe seu PDF pronto para compartilhar.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "PowerPoint para PDF", href: "/br/powerpoint-para-pdf", desc: "Converta slides para PDF" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho apos converter" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine multiplos PDFs" },
                { name: "Proteger PDF", href: "/br/proteger-pdf", desc: "Proteja seu PDF com senha" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="rounded-xl p-4 transition-all text-center flex flex-col justify-center min-h-[80px] hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(20,216,196,0.25)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.2)" }}
                >
                  <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-400">{tool.desc}</div>
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
                { q: "Quais formatos do Office o PDF.it pode converter para PDF?", a: "O PDF.it converte Word (DOC/DOCX), Excel (XLS/XLSX), PowerPoint (PPT/PPTX) e formatos OpenDocument (ODT/ODP/ODS) para PDF." },
                { q: "Minha formatacao sera mantida igual apos converter para PDF?", a: "A maioria dos documentos se converte corretamente. Alguns layouts complexos com fontes incomuns ou planilhas muito largas podem ficar ligeiramente diferentes dependendo do arquivo fonte." },
                { q: "Posso converter arquivos do Office para PDF no celular?", a: "Sim. O PDF.it funciona em navegadores moveis — envie seu arquivo e baixe o PDF." },
                { q: "As animacoes do PowerPoint sao convertidas para PDF?", a: "Nao. Os PDFs sao estaticos, entao as animacoes e transicoes nao sao reproduzidas — os slides sao exportados como paginas fixas." },
                { q: "E seguro enviar arquivos do Office?", a: "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos." },
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
