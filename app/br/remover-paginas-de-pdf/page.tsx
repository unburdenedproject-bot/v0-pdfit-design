import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Scissors, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Remover Paginas de PDF — Delete Paginas Indesejadas | OmnisPDF",
  description:
    "Remova paginas indesejadas de um PDF com OmnisPDF. Exclua paginas em branco, duplicadas ou desnecessarias — rapido, gratis e online.",
  alternates: {
    languages: {
      en: "/remove-pages-from-pdf",
      es: "/es/eliminar-paginas-de-pdf",
      pt: "/br/remover-paginas-de-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como remover paginas de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF para o OmnisPDF, selecione as paginas que deseja remover e clique em Processar. O OmnisPDF gera um novo PDF sem as paginas selecionadas." }
    },
    {
      "@type": "Question",
      "name": "O arquivo original e alterado?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. O OmnisPDF cria um novo PDF sem as paginas removidas. Seu arquivo original nao e modificado — voce baixa uma nova versao." }
    },
    {
      "@type": "Question",
      "name": "Posso remover paginas em branco automaticamente?",
      "acceptedAnswer": { "@type": "Answer", "text": "Voce pode visualizar as paginas do seu PDF e selecionar manualmente quais remover, incluindo paginas em branco. Selecione todas as paginas em branco e remova-as de uma vez." }
    },
    {
      "@type": "Question",
      "name": "Remover paginas afeta a qualidade do PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. As paginas restantes sao mantidas exatamente como no original — texto, imagens e formatacao preservados integralmente." }
    },
    {
      "@type": "Question",
      "name": "E gratis remover paginas de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Voce pode remover paginas de PDFs de ate 25MB gratis. Usuarios Pro podem processar arquivos de ate 200MB." }
    },
    {
      "@type": "Question",
      "name": "Posso remover paginas de um PDF no celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O OmnisPDF funciona em navegadores moveis — selecione as paginas indesejadas, remova e baixe o PDF limpo diretamente do seu celular." }
    }
  ]
}

export default function RemoverPaginasDePdfPage() {
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
                <Scissors className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Remover Paginas de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Delete paginas indesejadas, em branco ou duplicadas do seu PDF. Limpe seu documento removendo o que nao precisa — tudo online, rapido e gratis.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Remocao Rapida</span></div>
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
          processingMessage="Removendo paginas do seu PDF..."
          successMessage="Paginas removidas com sucesso!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              PDFs muitas vezes contem paginas desnecessarias — capas, paginas em branco, anuncios ou secoes irrelevantes. O OmnisPDF permite remover essas paginas facilmente, gerando um documento limpo e profissional.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Remova paginas em branco ou desnecessarias</li>
              <li>✓ Exclua capas, indices ou secoes irrelevantes</li>
              <li>✓ Sem perda de qualidade nas paginas restantes</li>
              <li>✓ Arquivo original preservado — voce baixa uma nova versao</li>
              <li>✓ Funciona em qualquer dispositivo com navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Remova Paginas em Branco</h2>
              <p className="text-slate-600">
                Digitalizacoes e documentos convertidos frequentemente tem paginas em branco extras. Remova-as para ter um PDF limpo e profissional.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Exclua Informacoes Confidenciais</h2>
              <p className="text-slate-600">
                Antes de compartilhar um documento, remova paginas com informacoes sensiveis ou confidenciais que nao devem ser vistas pelo destinatario.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Limpe Documentos para Impressao</h2>
              <p className="text-slate-600">
                Remova capas, contra-capas, paginas de publicidade ou secoes desnecessarias antes de imprimir, economizando papel e tinta.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Remover Paginas de um PDF</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF para o OmnisPDF.",
                "Selecione as paginas que deseja remover.",
                "Clique em Processar e baixe o PDF sem as paginas removidas.",
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
                { q: "Como remover paginas de um PDF?", a: "Envie seu PDF para o OmnisPDF, selecione as paginas que deseja remover e clique em Processar. O OmnisPDF gera um novo PDF sem as paginas selecionadas." },
                { q: "O arquivo original e alterado?", a: "Nao. O OmnisPDF cria um novo PDF sem as paginas removidas. Seu arquivo original nao e modificado — voce baixa uma nova versao." },
                { q: "Posso remover paginas em branco automaticamente?", a: "Voce pode visualizar as paginas do seu PDF e selecionar manualmente quais remover, incluindo paginas em branco. Selecione todas as paginas em branco e remova-as de uma vez." },
                { q: "Remover paginas afeta a qualidade do PDF?", a: "Nao. As paginas restantes sao mantidas exatamente como no original — texto, imagens e formatacao preservados integralmente." },
                { q: "E gratis remover paginas de um PDF?", a: "Sim. Voce pode remover paginas de PDFs de ate 25MB gratis. Usuarios Pro podem processar arquivos de ate 200MB." },
                { q: "Posso remover paginas de um PDF no celular?", a: "Sim. O OmnisPDF funciona em navegadores moveis — selecione as paginas indesejadas, remova e baixe o PDF limpo diretamente do seu celular." },
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
