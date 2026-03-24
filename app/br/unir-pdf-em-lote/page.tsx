import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Merge, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Unir PDF em Lote — Combine Dezenas de PDFs de Uma Vez | PDF.it",
  description:
    "Una PDFs em lote com PDF.it. Envie dezenas de arquivos PDF e combine todos em um unico documento — processamento em lote rapido, gratis e online.",
  alternates: {
    languages: {
      en: "/batch-merge-pdf",
      es: "/es/unir-pdf-por-lotes",
      pt: "/br/unir-pdf-em-lote",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que significa unir PDFs em lote?",
      "acceptedAnswer": { "@type": "Answer", "text": "Unir em lote significa combinar muitos arquivos PDF de uma so vez em um unico documento, em vez de unir dois de cada vez. E muito mais rapido quando voce tem dezenas de arquivos." }
    },
    {
      "@type": "Question",
      "name": "Quantos PDFs posso unir em lote?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usuarios gratuitos podem unir varios PDFs de ate 25MB cada. Usuarios Pro tem acesso a processamento em lote avancado com arquivos de ate 200MB cada." }
    },
    {
      "@type": "Question",
      "name": "O processamento em lote e gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "A uniao basica de multiplos PDFs e gratuita. Para processamento em lote avancado com arquivos maiores e sem limites, faca upgrade para o plano Pro." }
    },
    {
      "@type": "Question",
      "name": "Posso escolher a ordem dos arquivos no lote?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Apos enviar todos os arquivos, voce pode arrastar e soltar para definir a ordem exata antes de unir." }
    },
    {
      "@type": "Question",
      "name": "E seguro enviar muitos arquivos de uma vez?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it usa conexoes criptografadas e exclui todos os arquivos apos sua sessao. Nenhum arquivo e armazenado permanentemente em nossos servidores." }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo leva para unir PDFs em lote?",
      "acceptedAnswer": { "@type": "Answer", "text": "A maioria dos lotes e processada em segundos. Lotes muito grandes podem levar um pouco mais, mas o processo e muito mais rapido que software de desktop." }
    }
  ]
}

export default function UnirPdfEmLotePage() {
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
                <Merge className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Unir PDF em Lote</h1>
              <p className="text-xl text-slate-300 mb-8">
                Combine dezenas de arquivos PDF de uma so vez. Processamento em lote rapido para quem precisa unir muitos documentos — sem instalar software.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Processamento em Lote</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Excluidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Merge PDF"
          outputFormat="PDF"
          processingMessage="Unindo seus PDFs em lote..."
          successMessage="Todos os PDFs foram combinados com sucesso!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Quando voce tem dezenas ou centenas de PDFs para combinar, unir um por um nao e viavel. O PDF.it oferece uniao em lote — envie todos os arquivos de uma vez, organize a ordem e gere um unico PDF consolidado em segundos.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Envie muitos PDFs de uma so vez</li>
              <li>✓ Reorganize a ordem com arrastar e soltar</li>
              <li>✓ Processamento rapido mesmo com muitos arquivos</li>
              <li>✓ Sem perda de qualidade ou formatacao</li>
              <li>✓ Funciona em qualquer navegador moderno</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Consolidacao de Relatorios Mensais</h2>
              <p className="text-slate-600">
                Junte relatorios diarios ou semanais em um unico relatorio mensal. Ideal para equipes que geram documentos individuais que precisam ser consolidados.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Arquivamento de Documentos</h2>
              <p className="text-slate-600">
                Combine centenas de documentos avulsos em arquivos consolidados para arquivamento digital organizado e facil de pesquisar.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Materiais de Treinamento</h2>
              <p className="text-slate-600">
                Una apostilas, slides, exercicios e materiais complementares em um unico PDF para distribuir para a equipe ou alunos.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Unir PDFs em Lote</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste todos os seus arquivos PDF para o PDF.it.",
                "Organize os arquivos na ordem desejada.",
                "Clique em Unir e baixe seu PDF consolidado.",
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine PDFs em um" },
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Separe paginas" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho" },
                { name: "Girar PDF", href: "/br/girar-pdf", desc: "Corrija a orientacao" },
                { name: "Achatar PDF", href: "/br/achatar-pdf", desc: "Achate campos" },
                { name: "PDF para JPG", href: "/br/pdf-para-jpg", desc: "Converta em imagens" },
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
                { q: "O que significa unir PDFs em lote?", a: "Unir em lote significa combinar muitos arquivos PDF de uma so vez em um unico documento, em vez de unir dois de cada vez. E muito mais rapido quando voce tem dezenas de arquivos." },
                { q: "Quantos PDFs posso unir em lote?", a: "Usuarios gratuitos podem unir varios PDFs de ate 25MB cada. Usuarios Pro tem acesso a processamento em lote avancado com arquivos de ate 200MB cada." },
                { q: "O processamento em lote e gratis?", a: "A uniao basica de multiplos PDFs e gratuita. Para processamento em lote avancado com arquivos maiores e sem limites, faca upgrade para o plano Pro." },
                { q: "Posso escolher a ordem dos arquivos no lote?", a: "Sim. Apos enviar todos os arquivos, voce pode arrastar e soltar para definir a ordem exata antes de unir." },
                { q: "E seguro enviar muitos arquivos de uma vez?", a: "Sim. O PDF.it usa conexoes criptografadas e exclui todos os arquivos apos sua sessao. Nenhum arquivo e armazenado permanentemente em nossos servidores." },
                { q: "Quanto tempo leva para unir PDFs em lote?", a: "A maioria dos lotes e processada em segundos. Lotes muito grandes podem levar um pouco mais, mas o processo e muito mais rapido que software de desktop." },
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
