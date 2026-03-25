import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, CheckCircle, Zap, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Converter Word para PDF Online — DOCX para PDF Gratis | PDF.it",
  description:
    "Converta Word para PDF em segundos com o PDF.it. Transforme arquivos DOC ou DOCX em um PDF limpo e pronto para compartilhar — rapido, facil e sem instalar nada.",
  alternates: {
    canonical: "https://pdf.it.com/br/word-para-pdf",
    languages: {
      en: "https://pdf.it.com/word-to-pdf",
      es: "https://pdf.it.com/es/word-a-pdf",
      pt: "https://pdf.it.com/br/word-para-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Posso converter tanto DOC quanto DOCX para PDF?",
      acceptedAnswer: { "@type": "Answer", text: "Sim. O PDF.it suporta ambos os formatos de arquivo .doc e .docx." },
    },
    {
      "@type": "Question",
      name: "O PDF mantera a formatacao do meu arquivo Word?",
      acceptedAnswer: { "@type": "Answer", text: "Na maioria dos casos, sim — o PDF.it preserva o layout, fontes e espacamento. Documentos complexos com fontes personalizadas ou tabelas incomuns podem variar ligeiramente." },
    },
    {
      "@type": "Question",
      name: "Posso converter Word para PDF no celular?",
      acceptedAnswer: { "@type": "Answer", text: "Sim. O PDF.it funciona em navegadores moveis — envie seu arquivo Word e baixe o PDF." },
    },
    {
      "@type": "Question",
      name: "E seguro enviar meu documento Word?",
      acceptedAnswer: { "@type": "Answer", text: "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos." },
    },
    {
      "@type": "Question",
      name: "Qual e o tamanho maximo de arquivo que posso converter?",
      acceptedAnswer: { "@type": "Answer", text: "Contas Pro podem enviar arquivos de ate 200MB. Contas Business podem enviar ate 1GB." },
    },
    {
      "@type": "Question",
      name: "Meu PDF parece diferente do meu arquivo Word — por que?",
      acceptedAnswer: { "@type": "Answer", text: "As diferencas podem ocorrer por fontes incorporadas ou formatacao complexa. Tente simplificar o espacamento, usar fontes padrao ou exportar novamente." },
    },
  ],
}

export default function WordParaPDFPage() {
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
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Converter Word para PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Converta DOC/DOCX para PDF com o PDF.it — rapido, simples e perfeito para documentos limpos e prontos para compartilhar.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-500" />
                  <span>Formatacao Preservada</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>Arquivos Eliminados Apos a Sessao</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>DOC e DOCX Suportados</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".doc,.docx"
          toolName="Word to PDF"
          outputFormat="PDF"
          processingMessage="Converting your Word document..."
          successMessage="Your PDF is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use o conversor de Word para PDF do PDF.it para transformar um DOC ou DOCX em um PDF em segundos. Perfeito para curriculos, relatorios, contratos e documentos escolares — converta, baixe e compartilhe um PDF que funciona em qualquer lugar.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Converte Word para PDF online em segundos</li>
              <li>✓ Suporta arquivos DOC e DOCX</li>
              <li>✓ Cria PDFs prontos para compartilhar por e-mail, imprimir e enviar</li>
              <li>✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalacao — conversao direto do navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Converta DOCX para PDF Mantendo o Layout</h2>
              <p className="text-slate-600">
                O PDF.it converte documentos Word em PDFs projetados para ficarem consistentes em todos os dispositivos. Ideal para enviar arquivos onde a formatacao precisa se manter estavel.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Torne seus Documentos Word Faceis de Compartilhar e Imprimir</h2>
              <p className="text-slate-600">
                PDFs sao o padrao para entregas, impressao e documentos oficiais. Converta seu arquivo Word para PDF para que os destinatarios vejam o mesmo layout — independente do software que usem.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Conversao Rapida Online — Sem Apps</h2>
              <p className="text-slate-600">
                Envie um arquivo Word, converta para PDF e baixe imediatamente — sem downloads, sem instalacoes e sem etapas complicadas.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Converter Word para PDF</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu arquivo DOC/DOCX para o PDF.it.",
                "Clique em Converter Word para PDF.",
                "Baixe seu novo PDF.",
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
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Excel para PDF", href: "/br/excel-para-pdf", desc: "Converta planilhas para PDF" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho do PDF" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine varios PDFs em um" },
                { name: "PDF para JPG", href: "/br/pdf-para-jpg", desc: "Extraia paginas como imagens" },
              ].map((tool) => (
                <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: "radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255,255,255,0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16" style={{ background: "radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-white mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {[
                { q: "Posso converter tanto DOC quanto DOCX para PDF?", a: "Sim. O PDF.it suporta ambos os formatos de arquivo .doc e .docx." },
                { q: "O PDF mantera a formatacao do meu arquivo Word?", a: "Na maioria dos casos, sim — o PDF.it preserva o layout, fontes e espacamento. Documentos complexos com fontes personalizadas ou tabelas incomuns podem variar ligeiramente." },
                { q: "Posso converter Word para PDF no celular?", a: "Sim. O PDF.it funciona em navegadores moveis — envie seu arquivo Word e baixe o PDF." },
                { q: "E seguro enviar meu documento Word?", a: "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos." },
                { q: "Qual e o tamanho maximo de arquivo que posso converter?", a: "Contas Pro podem enviar arquivos de ate 200MB. Contas Business podem enviar ate 1GB." },
                { q: "Meu PDF parece diferente do meu arquivo Word — por que?", a: "As diferencas podem ocorrer por fontes incorporadas ou formatacao complexa. Tente simplificar o espacamento, usar fontes padrao ou exportar novamente." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                  <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 text-sm">{faq.a}</p>
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
