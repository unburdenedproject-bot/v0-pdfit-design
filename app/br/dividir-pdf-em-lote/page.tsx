import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Scissors, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Dividir PDF em Lote — Divida Varios PDFs de Uma Vez | PDF.it",
  description:
    "Divida varios PDFs em lote com PDF.it. Processamento em lote para dividir multiplos documentos de uma so vez — rapido, gratis e online.",
  alternates: {
    languages: {
      en: "/batch-split-pdf",
      es: "/es/dividir-pdf-por-lotes",
      pt: "/br/dividir-pdf-em-lote",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que significa dividir PDFs em lote?",
      "acceptedAnswer": { "@type": "Answer", "text": "Dividir em lote significa processar varios PDFs de uma so vez, aplicando a mesma regra de divisao a todos os arquivos. Em vez de dividir um por um, voce processa todos simultaneamente." }
    },
    {
      "@type": "Question",
      "name": "Quantos PDFs posso dividir em lote?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usuarios gratuitos podem processar varios PDFs de ate 25MB cada. Usuarios Pro tem acesso a processamento em lote avancado com arquivos de ate 200MB." }
    },
    {
      "@type": "Question",
      "name": "A divisao em lote e gratuita?",
      "acceptedAnswer": { "@type": "Answer", "text": "A divisao basica de multiplos PDFs e gratuita. Para processamento em lote avancado com arquivos maiores e sem limites, faca upgrade para o plano Pro." }
    },
    {
      "@type": "Question",
      "name": "Posso aplicar regras diferentes para cada arquivo no lote?",
      "acceptedAnswer": { "@type": "Answer", "text": "O processamento em lote aplica a mesma configuracao de divisao a todos os arquivos. Para regras diferentes, divida cada arquivo individualmente." }
    },
    {
      "@type": "Question",
      "name": "Como baixo os resultados do processamento em lote?",
      "acceptedAnswer": { "@type": "Answer", "text": "Apos o processamento, voce pode baixar todos os arquivos resultantes em um unico ZIP ou baixar cada um individualmente." }
    },
    {
      "@type": "Question",
      "name": "E seguro enviar varios PDFs de uma vez?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it usa conexoes criptografadas e exclui todos os arquivos apos sua sessao. Nenhum arquivo e armazenado permanentemente." }
    }
  ]
}

export default function DividirPdfEmLotePage() {
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
                <Scissors className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Dividir PDF em Lote</h1>
              <p className="text-xl text-slate-300 mb-8">
                Divida varios PDFs de uma so vez com processamento em lote. Ideal para quem precisa dividir dezenas de documentos rapidamente — sem instalar software.
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
          toolName="Split PDF"
          outputFormat="PDF"
          processingMessage="Dividindo seus PDFs em lote..."
          successMessage="Seus PDFs foram divididos com sucesso!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Quando voce tem muitos PDFs para dividir, processar um por um e ineficiente. O PDF.it permite dividir varios PDFs em lote — envie todos os arquivos, configure a regra de divisao e processe todos de uma vez.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Divida varios PDFs simultaneamente</li>
              <li>✓ Aplique a mesma regra de divisao a todos os arquivos</li>
              <li>✓ Baixe todos os resultados em um ZIP</li>
              <li>✓ Sem perda de qualidade em nenhum arquivo</li>
              <li>✓ Processamento rapido mesmo com muitos documentos</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Processamento de Documentos Empresariais</h2>
              <p className="text-slate-600">
                Empresas que recebem dezenas de relatorios, contratos ou formularios podem dividi-los em lote para extrair secoes especificas de cada documento.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Preparacao de Materiais Educacionais</h2>
              <p className="text-slate-600">
                Professores e instrutores podem dividir varios PDFs de livros ou apostilas em capitulos individuais para distribuir secoes especificas aos alunos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Organizacao de Arquivos Digitais</h2>
              <p className="text-slate-600">
                Divida documentos extensos em partes menores para organizar seu arquivo digital. Facilite a busca e o acesso a informacoes especificas.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Dividir PDFs em Lote</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste todos os seus PDFs para o PDF.it.",
                "Configure a regra de divisao (por paginas, intervalos ou tamanho).",
                "Clique em Dividir e baixe todos os resultados.",
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
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Ferramenta padrao de divisao" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine PDFs em um" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho" },
                { name: "Girar PDF", href: "/br/girar-pdf", desc: "Corrija a orientacao" },
                { name: "Extrair Imagens", href: "/br/extrair-imagens-de-pdf", desc: "Extraia imagens do PDF" },
                { name: "PDF para JPG", href: "/br/pdf-para-jpg", desc: "Converta em imagens" },
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
                { q: "O que significa dividir PDFs em lote?", a: "Dividir em lote significa processar varios PDFs de uma so vez, aplicando a mesma regra de divisao a todos os arquivos. Em vez de dividir um por um, voce processa todos simultaneamente." },
                { q: "Quantos PDFs posso dividir em lote?", a: "Usuarios gratuitos podem processar varios PDFs de ate 25MB cada. Usuarios Pro tem acesso a processamento em lote avancado com arquivos de ate 200MB." },
                { q: "A divisao em lote e gratuita?", a: "A divisao basica de multiplos PDFs e gratuita. Para processamento em lote avancado com arquivos maiores e sem limites, faca upgrade para o plano Pro." },
                { q: "Posso aplicar regras diferentes para cada arquivo no lote?", a: "O processamento em lote aplica a mesma configuracao de divisao a todos os arquivos. Para regras diferentes, divida cada arquivo individualmente." },
                { q: "Como baixo os resultados do processamento em lote?", a: "Apos o processamento, voce pode baixar todos os arquivos resultantes em um unico ZIP ou baixar cada um individualmente." },
                { q: "E seguro enviar varios PDFs de uma vez?", a: "Sim. O PDF.it usa conexoes criptografadas e exclui todos os arquivos apos sua sessao. Nenhum arquivo e armazenado permanentemente." },
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
