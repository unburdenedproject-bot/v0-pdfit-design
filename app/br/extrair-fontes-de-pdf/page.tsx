import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Type, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extrair Fontes de PDF — Descubra as Fontes Usadas no PDF | PDF.it",
  description:
    "Extraia e identifique todas as fontes usadas em arquivos PDF com o PDF.it. Descubra nomes de fontes, estilos e tamanhos — rápido, no navegador, sem cadastro.",
  alternates: {
    canonical: "https://pdf.it.com/br/extrair-fontes-de-pdf",
    languages: {
      en: "https://pdf.it.com/extract-fonts-from-pdf",
      es: "https://pdf.it.com/es/extraer-fuentes-de-pdf",
      pt: "https://pdf.it.com/br/extrair-fontes-de-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como extraio fontes de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF para o PDF.it e a ferramenta identificará automaticamente todas as fontes usadas no documento, incluindo nomes, estilos e tamanhos." }
    },
    {
      "@type": "Question",
      "name": "Posso saber quais fontes foram usadas em um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O extrator de fontes do PDF.it analisa o PDF e lista todas as fontes incorporadas ou referenciadas no documento." }
    },
    {
      "@type": "Question",
      "name": "Funciona com fontes incorporadas e não incorporadas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. A ferramenta detecta tanto fontes incorporadas quanto referenciadas no PDF, mostrando informações disponíveis sobre cada uma." }
    },
    {
      "@type": "Question",
      "name": "É seguro enviar meu PDF para extrair fontes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todos os arquivos são processados com segurança e eliminados automaticamente após a sessão. Nunca armazenamos seus documentos." }
    },
    {
      "@type": "Question",
      "name": "Posso extrair fontes de um PDF pelo celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em navegadores móveis — envie seu PDF e veja as fontes identificadas de qualquer dispositivo." }
    },
    {
      "@type": "Question",
      "name": "É grátis extrair fontes de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Contas gratuitas têm 10 extrações por dia. Contas Pro têm extrações ilimitadas." }
    }
  ]
}

export default function ExtrairFontesDePDFPage() {
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
                <Type className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extrair Fontes de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Descubra todas as fontes usadas nos seus documentos PDF. Identifique nomes, estilos e tamanhos de fontes — rápido e direto do navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Detecção Instantânea</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Eliminados Após a Sessão</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Extract Text"
          outputFormat="TXT"
          processingMessage="Extraindo fontes do seu PDF..."
          successMessage="As fontes foram identificadas!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Precisa saber quais fontes foram usadas em um PDF? O extrator de fontes do PDF.it analisa seu documento e identifica todas as fontes incorporadas ou referenciadas, incluindo nomes, famílias tipográficas e estilos utilizados.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Identifique todas as fontes usadas em qualquer PDF</li>
              <li>✓ Perfeito para designers, editores e profissionais gráficos</li>
              <li>✓ Detecta fontes incorporadas e referenciadas</li>
              <li>✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalação — identifique fontes no seu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Design e Identidade Visual</h2>
              <p className="text-slate-600">
                Recebeu um PDF e precisa replicar o design? Extraia as fontes para descobrir exatamente quais tipografias foram usadas e mantenha a consistência visual em seus projetos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Produção Gráfica</h2>
              <p className="text-slate-600">
                Antes de enviar um PDF para impressão, verifique se todas as fontes estão incorporadas corretamente. Identifique fontes faltantes que podem causar problemas na produção.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Compliance de Marca</h2>
              <p className="text-slate-600">
                Verifique se os documentos da empresa seguem o manual de marca corretamente, identificando fontes que não fazem parte da identidade visual aprovada.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Extrair Fontes de um PDF</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF para o PDF.it.",
                "Clique em Extrair — as fontes são identificadas automaticamente.",
                "Veja a lista completa de fontes usadas no documento.",
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
                { name: "Extrair Imagens de PDF", href: "/br/extrair-imagens-de-pdf", desc: "Extraia imagens do PDF" },
                { name: "PDF para Texto", href: "/br/pdf-para-texto", desc: "Converta PDF para TXT" },
                { name: "Scanner OCR", href: "/br/scanner-ocr", desc: "Texto de digitalizações" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho do arquivo" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine vários PDFs em um" },
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Separe páginas de um PDF" },
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
                { q: "Como extraio fontes de um PDF?", a: "Envie seu PDF para o PDF.it e a ferramenta identificará automaticamente todas as fontes usadas no documento, incluindo nomes, estilos e tamanhos." },
                { q: "Posso saber quais fontes foram usadas em um PDF?", a: "Sim. O extrator de fontes do PDF.it analisa o PDF e lista todas as fontes incorporadas ou referenciadas no documento." },
                { q: "Funciona com fontes incorporadas e não incorporadas?", a: "Sim. A ferramenta detecta tanto fontes incorporadas quanto referenciadas no PDF, mostrando informações disponíveis sobre cada uma." },
                { q: "É seguro enviar meu PDF para extrair fontes?", a: "Sim. Todos os arquivos são processados com segurança e eliminados automaticamente após a sessão. Nunca armazenamos seus documentos." },
                { q: "Posso extrair fontes de um PDF pelo celular?", a: "Sim. O PDF.it funciona em navegadores móveis — envie seu PDF e veja as fontes identificadas de qualquer dispositivo." },
                { q: "É grátis extrair fontes de um PDF?", a: "Sim. Contas gratuitas têm 10 extrações por dia. Contas Pro têm extrações ilimitadas." },
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
