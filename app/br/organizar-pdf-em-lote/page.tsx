import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download } from "lucide-react"

export const metadata = {
  title: "Organizar PDF em Lote — Reorganize Varios PDFs de Uma Vez | PDF.it",
  description:
    "Organize multiplos PDFs em lote com o PDF.it. Reordene e gerencie paginas de varios documentos simultaneamente — rapido, seguro e no navegador.",
  alternates: {
    canonical: "https://pdf.it.com/br/organizar-pdf-em-lote",
    languages: {
      en: "https://pdf.it.com/batch-organize-pdf",
      es: "https://pdf.it.com/es/organizar-pdf-por-lotes",
      pt: "https://pdf.it.com/br/organizar-pdf-em-lote",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que e organizar PDFs em lote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Organizar PDFs em lote significa processar varios documentos PDF ao mesmo tempo — reordenando paginas, removendo paginas desnecessarias e gerenciando a estrutura de multiplos arquivos simultaneamente.",
      },
    },
    {
      "@type": "Question",
      name: "Quantos PDFs posso organizar ao mesmo tempo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Com o plano Pro do PDF.it voce pode processar multiplos PDFs em lote. O limite depende do tamanho total dos arquivos — ate 200MB por arquivo no plano Pro.",
      },
    },
    {
      "@type": "Question",
      name: "O processamento em lote e gratuito?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O processamento em lote e um recurso Pro. Na versao gratuita voce pode organizar um PDF por vez, com arquivos de ate 25MB. Atualize para Pro para processar varios arquivos simultaneamente.",
      },
    },
    {
      "@type": "Question",
      name: "Posso baixar todos os PDFs organizados de uma vez?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Apos o processamento em lote, voce pode baixar todos os PDFs organizados em um unico arquivo ZIP ou individualmente.",
      },
    },
    {
      "@type": "Question",
      name: "A qualidade dos PDFs e preservada no processamento em lote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O PDF.it preserva a qualidade original de todos os documentos durante o processamento em lote. Texto, imagens e formatacao permanecem identicos.",
      },
    },
  ],
}

export default function OrganizarPDFEmLotePage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl lg:text-5xl font-black">Organizar PDF em Lote</h1>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <p className="text-xl text-slate-300 mb-8">
                Organize multiplos PDFs simultaneamente. Reordene paginas, remova as desnecessarias e gerencie seus documentos em lote para economizar tempo.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Processamento em Lote</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Removidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Baixe Todos como ZIP</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Organize PDF"
          outputFormat="PDF"
          processingMessage="Organizando seus PDFs em lote..."
          successMessage="PDFs organizados com sucesso!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Precisa organizar dezenas de PDFs? O processamento em lote do PDF.it permite gerenciar as paginas de multiplos documentos ao mesmo tempo. Suba seus PDFs, organize cada um e baixe todos os resultados de uma vez.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Processe multiplos PDFs simultaneamente</li>
              <li>&#10003; Reordene e remova paginas de cada documento</li>
              <li>&#10003; Baixe todos os resultados como ZIP</li>
              <li>&#10003; Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li>&#10003; Progresso individual por arquivo</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Processar Documentos de Escritorio</h2>
              <p className="text-slate-600">
                Organize dezenas de PDFs recebidos diariamente no escritorio — remova paginas de rosto, reordene secoes e padronize documentos em massa.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Preparar Materiais de Treinamento</h2>
              <p className="text-slate-600">
                Organize multiplos PDFs de materiais de treinamento em lote. Remova paginas desatualizadas e reordene o conteudo para cada turma.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Gerenciar Documentos Juridicos</h2>
              <p className="text-slate-600">
                Processe lotes de contratos e documentos legais — remova paginas em branco, organize anexos e prepare documentacao para assinatura.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Arquivar Digitalizacoes</h2>
              <p className="text-slate-600">
                Organize grandes volumes de documentos digitalizados em lote. Remova paginas duplicadas e reordene documentos que ficaram fora de sequencia.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Organizar PDFs em Lote</h2>
            <div className="space-y-4">
              {[
                "Suba ou arraste todos os seus PDFs para o PDF.it.",
                "Organize as paginas de cada documento — reordene, remova ou gire conforme necessario.",
                "Clique em Processar Todos e baixe os PDFs organizados como ZIP.",
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
                { name: "Girar PDF", href: "/br/girar-pdf", desc: "Gire paginas do PDF" },
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Separe paginas do PDF" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine varios PDFs" },
                { name: "Achatar PDF", href: "/br/achatar-pdf", desc: "Bloqueie formularios e camadas" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho do arquivo" },
                { name: "Proteger PDF", href: "/br/proteger-pdf", desc: "Adicione senha ao PDF" },
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
                { q: "O que e organizar PDFs em lote?", a: "Organizar PDFs em lote significa processar varios documentos PDF ao mesmo tempo — reordenando paginas, removendo paginas desnecessarias e gerenciando a estrutura de multiplos arquivos simultaneamente." },
                { q: "Quantos PDFs posso organizar ao mesmo tempo?", a: "Com o plano Pro do PDF.it voce pode processar multiplos PDFs em lote. O limite depende do tamanho total dos arquivos — ate 200MB por arquivo no plano Pro." },
                { q: "O processamento em lote e gratuito?", a: "O processamento em lote e um recurso Pro. Na versao gratuita voce pode organizar um PDF por vez, com arquivos de ate 25MB. Atualize para Pro para processar varios arquivos simultaneamente." },
                { q: "Posso baixar todos os PDFs organizados de uma vez?", a: "Sim. Apos o processamento em lote, voce pode baixar todos os PDFs organizados em um unico arquivo ZIP ou individualmente." },
                { q: "A qualidade dos PDFs e preservada no processamento em lote?", a: "Sim. O PDF.it preserva a qualidade original de todos os documentos durante o processamento em lote. Texto, imagens e formatacao permanecem identicos." },
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
