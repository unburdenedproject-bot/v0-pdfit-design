import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download } from "lucide-react"

export const metadata = {
  title: "Organizar PDF — Reordene, Remova e Gerencie Paginas | PDF.it",
  description:
    "Organize seu PDF com o PDF.it. Reordene paginas, remova as desnecessarias e gerencie seu documento — rapido, gratuito e direto no navegador.",
  alternates: {
    canonical: "https://pdf.it.com/br/organizar-pdf",
    languages: {
      en: "https://pdf.it.com/organize-pdf",
      es: "https://pdf.it.com/es/organizar-pdf",
      pt: "https://pdf.it.com/br/organizar-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que significa organizar um PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Organizar um PDF significa reordenar paginas, remover paginas desnecessarias, girar paginas e gerenciar a estrutura do documento para que fique exatamente como voce precisa.",
      },
    },
    {
      "@type": "Question",
      name: "Posso remover paginas especificas do PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O PDF.it permite selecionar e remover paginas individuais do seu PDF. Voce pode excluir paginas em branco, duplicadas ou desnecessarias.",
      },
    },
    {
      "@type": "Question",
      name: "A qualidade do PDF muda ao reorganizar paginas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nao. Reorganizar paginas nao altera a qualidade do conteudo. Texto, imagens e formatacao de cada pagina permanecem identicos.",
      },
    },
    {
      "@type": "Question",
      name: "Posso organizar PDFs pelo celular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O PDF.it funciona em navegadores moveis. Suba seu PDF, organize as paginas e baixe o resultado pelo iPhone ou Android.",
      },
    },
    {
      "@type": "Question",
      name: "E gratuito organizar um PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Voce pode organizar PDFs de ate 25MB gratuitamente. Para arquivos maiores e processamento em lote, atualize para o plano Pro.",
      },
    },
  ],
}

export default function OrganizarPDFPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Organizar PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Reordene, remova e gerencie as paginas do seu PDF. Arraste e solte para organizar seu documento na ordem perfeita.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Arrastar e Soltar</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Removidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Organize PDF"
          outputFormat="PDF"
          processingMessage="Organizando seu PDF..."
          successMessage="PDF organizado com sucesso!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              O organizador de PDF do PDF.it permite gerenciar as paginas do seu documento de forma visual e intuitiva. Reordene, remova paginas desnecessarias, gire paginas individuais e exporte o resultado — tudo direto no navegador.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Reordene paginas arrastando e soltando</li>
              <li>&#10003; Remova paginas em branco ou desnecessarias</li>
              <li>&#10003; Gire paginas individuais</li>
              <li>&#10003; Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li>&#10003; Sem instalacao — organize PDFs direto no navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Preparar Apresentacoes</h2>
              <p className="text-slate-600">
                Reorganize paginas de um PDF de apresentacao para ajustar a ordem dos slides. Remova slides desnecessarios e crie a sequencia perfeita.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Limpar Documentos Digitalizados</h2>
              <p className="text-slate-600">
                Remova paginas em branco ou duplicadas de documentos digitalizados. Reorganize as paginas que ficaram fora de ordem durante a digitalizacao.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Montar Portfolios</h2>
              <p className="text-slate-600">
                Organize paginas de diferentes trabalhos na ordem ideal para criar portfolios profissionais e materiais de apresentacao impactantes.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Editar Relatorios</h2>
              <p className="text-slate-600">
                Remova secoes desnecessarias e reorganize capitulos de relatorios longos para criar versoes resumidas e personalizadas.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Organizar um PDF</h2>
            <div className="space-y-4">
              {[
                "Suba ou arraste seu PDF para o PDF.it.",
                "Arraste e solte as paginas para reordena-las. Remova as desnecessarias.",
                "Clique em Salvar e baixe seu PDF organizado.",
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
                { q: "O que significa organizar um PDF?", a: "Organizar um PDF significa reordenar paginas, remover paginas desnecessarias, girar paginas e gerenciar a estrutura do documento para que fique exatamente como voce precisa." },
                { q: "Posso remover paginas especificas do PDF?", a: "Sim. O PDF.it permite selecionar e remover paginas individuais do seu PDF. Voce pode excluir paginas em branco, duplicadas ou desnecessarias." },
                { q: "A qualidade do PDF muda ao reorganizar paginas?", a: "Nao. Reorganizar paginas nao altera a qualidade do conteudo. Texto, imagens e formatacao de cada pagina permanecem identicos." },
                { q: "Posso organizar PDFs pelo celular?", a: "Sim. O PDF.it funciona em navegadores moveis. Suba seu PDF, organize as paginas e baixe o resultado pelo iPhone ou Android." },
                { q: "E gratuito organizar um PDF?", a: "Sim. Voce pode organizar PDFs de ate 25MB gratuitamente. Para arquivos maiores e processamento em lote, atualize para o plano Pro." },
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
