import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { OcrPdfInterface } from "@/components/ocr-pdf-interface"
import { TrustBadges } from "@/components/trust-badges"
import { Scan, Zap, Shield, Download, Crown } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Scanner OCR Online — Extrair Texto de PDF Escaneado | PDF.it",
  description:
    "Execute OCR em um PDF com o PDF.it para extrair texto de escaneamentos. Torne seus PDFs pesquisáveis e copiáveis em segundos — rápido e direto do navegador.",
  alternates: {
    canonical: "https://pdf.it.com/br/scanner-ocr",
    languages: {
      en: "https://pdf.it.com/ocr-scanner",
      es: "https://pdf.it.com/es/escaner-ocr",
      pt: "https://pdf.it.com/br/scanner-ocr",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que é OCR para PDFs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OCR (Reconhecimento Óptico de Caracteres) detecta texto dentro de PDFs escaneados ou baseados em imagens e o converte em texto selecionável e pesquisável.",
      },
    },
    {
      "@type": "Question",
      name: "Quando preciso de OCR em vez de PDF para TXT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se o PDF é um escaneamento e você não consegue selecionar texto, precisa de OCR. Se o PDF já contém texto selecionável, uma conversão normal de PDF para TXT pode ser mais rápida.",
      },
    },
    {
      "@type": "Question",
      name: "Quão preciso é o OCR do PDF.it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A precisão depende da clareza do escaneamento, resolução e fonte. Escaneamentos limpos e de alta resolução produzem os melhores resultados. Escaneamentos borrados ou tortos reduzem a precisão.",
      },
    },
    {
      "@type": "Question",
      name: "Quais idiomas o Scanner OCR suporta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Scanner OCR suporta mais de 16 idiomas incluindo português, inglês, espanhol, francês, alemão, italiano, holandês e mais.",
      },
    },
    {
      "@type": "Question",
      name: "É seguro enviar documentos escaneados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Todas as transferências são criptografadas com SSL e seus arquivos são removidos imediatamente após sua sessão. Nunca armazenamos nem compartilhamos seus documentos.",
      },
    },
    {
      "@type": "Question",
      name: "Qual é o tamanho máximo de arquivo para OCR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contas Pro podem enviar arquivos de até 200MB. Contas Business podem enviar até 1GB.",
      },
    },
  ],
}

export default function ScannerOCRPage() {
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
                <Scan className="h-10 w-10 text-white" />
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl lg:text-5xl font-black">Scanner OCR Online</h1>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <p className="text-xl text-slate-300 mb-8">
                Use o PDF.it para executar OCR em PDFs escaneados — converta imagens em texto selecionável e pesquisável, e baixe um PDF mais limpo e útil.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>16+ Idiomas Suportados</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Removidos Após a Sessão</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>PDF Pesquisável</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* OCR Interface */}
        <OcrPdfInterface />
        <TrustBadges />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use a ferramenta de OCR do PDF.it para extrair texto de PDFs escaneados e tornar seus documentos pesquisáveis e copiáveis. Perfeito para recibos, faturas, contratos, formulários e escaneamentos arquivados — envie seu PDF, execute OCR e baixe um arquivo processado em segundos.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Converta PDFs escaneados em PDFs pesquisáveis</li>
              <li>✓ Torne o texto selecionável e copiável — sem precisar redigitar</li>
              <li>✓ Melhore a utilidade do documento para busca, citação e edição</li>
              <li>✓ Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalação — o OCR é executado no seu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Torne PDFs Escaneados Pesquisáveis</h2>
              <p className="text-slate-600">
                Se seu PDF é um escaneamento, frequentemente é apenas uma imagem — você não consegue selecionar texto nem buscar palavras. O OCR do PDF.it reconhece o texto e cria um PDF pesquisável que você pode usar como um documento normal.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extraia Texto de Escaneamentos PDF</h2>
              <p className="text-slate-600">
                Precisa das palavras de um documento escaneado? O OCR extrai texto de páginas baseadas em imagens para que você possa copiar e colar conteúdo em notas, e-mail, Word ou um arquivo TXT.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Funciona com Recibos, Formulários, Contratos e Faturas</h2>
              <p className="text-slate-600">
                O OCR é especialmente útil para documentos e arquivos onde você precisa buscar, encontrar palavras-chave ou reutilizar texto rapidamente.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Fazer OCR em um PDF</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF escaneado para o PDF.it.",
                "Escolha o idioma de OCR se necessário.",
                "Clique em Executar OCR.",
                "Baixe seu PDF pesquisável.",
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
                { name: "PDF para Texto", href: "/br/pdf-para-texto", desc: "Extraia texto de PDFs com texto" },
                { name: "Girar PDF", href: "/br/girar-pdf", desc: "Corrija escaneamentos tortos antes do OCR" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho antes do OCR" },
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "OCR apenas nas páginas necessárias" },
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
                { q: "O que é OCR para PDFs?", a: "OCR (Reconhecimento Óptico de Caracteres) detecta texto dentro de PDFs escaneados ou baseados em imagens e o converte em texto selecionável e pesquisável." },
                { q: "Quando preciso de OCR em vez de PDF para TXT?", a: "Se o PDF é um escaneamento e você não consegue selecionar texto, precisa de OCR. Se o PDF já contém texto selecionável, uma conversão normal de PDF para TXT pode ser mais rápida." },
                { q: "Quão preciso é o OCR do PDF.it?", a: "A precisão depende da clareza do escaneamento, resolução e fonte. Escaneamentos limpos e de alta resolução produzem os melhores resultados. Escaneamentos borrados ou tortos reduzem a precisão." },
                { q: "Quais idiomas o Scanner OCR suporta?", a: "O Scanner OCR suporta mais de 16 idiomas incluindo português, inglês, espanhol, francês, alemão, italiano, holandês e mais." },
                { q: "É seguro enviar documentos escaneados?", a: "Sim. Todas as transferências são criptografadas com SSL e seus arquivos são removidos imediatamente após sua sessão. Nunca armazenamos nem compartilhamos seus documentos." },
                { q: "Qual é o tamanho máximo de arquivo para OCR?", a: "Contas Pro podem enviar arquivos de até 200MB. Contas Business podem enviar até 1GB." },
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
