import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Scissors, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Dividir PDF Grande — Separe PDFs Pesados em Partes Menores | PDF.it",
  description:
    "Divida um PDF grande em arquivos menores e mais faceis de gerenciar com PDF.it. Separe manuais, relatorios e livros digitais em partes — rapido, gratis e no navegador.",
  alternates: {
    languages: {
      en: "/split-large-pdf",
      es: "/es/dividir-pdf-grande",
      pt: "/br/dividir-pdf-grande",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qual o tamanho maximo de PDF que posso dividir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Contas gratuitas podem dividir PDFs de ate 25MB. Contas Pro podem dividir arquivos de ate 200MB — ideal para digitalizacoes pesadas, livros e relatorios extensos." }
    },
    {
      "@type": "Question",
      "name": "Dividir um PDF reduz a qualidade?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. A divisao extrai paginas do PDF original sem recodificar. Texto, imagens e formatacao sao mantidos exatamente como no arquivo original." }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo leva para dividir um PDF grande?",
      "acceptedAnswer": { "@type": "Answer", "text": "A maioria dos PDFs e dividida em segundos. Arquivos muito grandes (100+ paginas) podem levar um pouco mais, mas o processo e significativamente mais rapido que software de desktop." }
    },
    {
      "@type": "Question",
      "name": "E gratis dividir PDFs grandes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Voce pode dividir PDFs de ate 25MB gratis. Para arquivos maiores (ate 200MB) e processamento em lote, faca upgrade para Pro." }
    },
    {
      "@type": "Question",
      "name": "Posso dividir um PDF grande no celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em navegadores moveis — envie, divida e baixe pelo iPhone ou Android. Nao precisa instalar nenhum app." }
    },
    {
      "@type": "Question",
      "name": "Como divido um PDF grande para enviar por email?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF grande, divida-o em partes menores que respeitem o limite do seu provedor de email (geralmente 25MB) e anexe cada parte. Voce tambem pode comprimir cada parte apos dividir." }
    }
  ]
}

export default function DividirPdfGrandePage() {
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
                <Scissors className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Dividir PDF Grande</h1>
              <p className="text-xl text-slate-300 mb-8">
                Separe PDFs pesados em arquivos menores e mais faceis de gerenciar. Perfeito para enviar documentos grandes por email, respeitar limites de upload ou dividir livros em capitulos.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Divisao por Intervalos</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Excluidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Split PDF"
          outputFormat="PDF"
          processingMessage="Dividindo seu PDF grande..."
          successMessage="Seu PDF foi dividido com sucesso!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              PDFs grandes — relatorios de 100+ paginas, digitalizacoes pesadas, livros e manuais — sao dificeis de enviar por email, subir e compartilhar. O PDF.it os divide em arquivos menores por intervalo de paginas ou paginas individuais, para que cada parte respeite os limites de tamanho.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Divida PDFs de 100+ paginas em partes gerenciaveis</li>
              <li>✓ Escolha intervalos personalizados ou divida em partes iguais</li>
              <li>✓ Sem perda de qualidade — as paginas sao extraidas, nao recodificadas</li>
              <li>✓ Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalacao — divida PDFs diretamente no navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Manuais Tecnicos</h2>
              <p className="text-slate-600">
                Manuais tecnicos costumam ter centenas de paginas. Divida-os em secoes ou capitulos para compartilhar apenas a parte relevante com sua equipe ou clientes.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Relatorios Anuais</h2>
              <p className="text-slate-600">
                Separe relatorios anuais extensos em secoes — resumo executivo, demonstracoes financeiras, analise de mercado — para distribuir a diferentes departamentos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Livros Digitais</h2>
              <p className="text-slate-600">
                Divida livros digitais em capitulos individuais para leitura mais facil, impressao seletiva ou para compartilhar secoes especificas.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Apresentacoes Longas</h2>
              <p className="text-slate-600">
                Apresentacoes extensas em PDF podem ser dificeis de gerenciar. Separe-as em blocos tematicos para enviar ou apresentar por partes.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Dividir um PDF Grande</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF grande para o PDF.it.",
                "Escolha como dividir — por intervalo de paginas, paginas individuais ou partes iguais.",
                "Clique em Dividir PDF e baixe seus arquivos menores.",
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
                { q: "Qual o tamanho maximo de PDF que posso dividir?", a: "Contas gratuitas podem dividir PDFs de ate 25MB. Contas Pro podem dividir arquivos de ate 200MB — ideal para digitalizacoes pesadas, livros e relatorios extensos." },
                { q: "Dividir um PDF reduz a qualidade?", a: "Nao. A divisao extrai paginas do PDF original sem recodificar. Texto, imagens e formatacao sao mantidos exatamente como no arquivo original." },
                { q: "Quanto tempo leva para dividir um PDF grande?", a: "A maioria dos PDFs e dividida em segundos. Arquivos muito grandes (100+ paginas) podem levar um pouco mais, mas o processo e significativamente mais rapido que software de desktop." },
                { q: "E gratis dividir PDFs grandes?", a: "Sim. Voce pode dividir PDFs de ate 25MB gratis. Para arquivos maiores (ate 200MB) e processamento em lote, faca upgrade para Pro." },
                { q: "Posso dividir um PDF grande no celular?", a: "Sim. O PDF.it funciona em navegadores moveis — envie, divida e baixe pelo iPhone ou Android. Nao precisa instalar nenhum app." },
                { q: "Como divido um PDF grande para enviar por email?", a: "Envie seu PDF grande, divida-o em partes menores que respeitem o limite do seu provedor de email (geralmente 25MB) e anexe cada parte. Voce tambem pode comprimir cada parte apos dividir." },
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
