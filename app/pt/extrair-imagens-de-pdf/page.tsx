import Script from "next/script"
import { HeaderPt } from "@/components/header-pt"
import { FooterPt } from "@/components/footer-pt"
import { ProcessingInterface } from "@/components/processing-interface"
import { Image, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extrair Imagens de PDF Online — Baixar Fotos de PDF | OmnisPDF",
  description:
    "Extraia todas as imagens de arquivos PDF com o OmnisPDF. Retire fotos, logos e gráficos de qualquer PDF — rápido, pelo navegador, sem cadastro.",
  alternates: {
    languages: {
      en: "/extract-images-from-pdf",
      es: "/es/extraer-imagenes-de-pdf",
      pt: "/pt/extrair-imagens-de-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como extraio imagens de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF ao OmnisPDF, clique em Extrair e baixe um arquivo ZIP com todas as imagens encontradas no seu PDF." }
    },
    {
      "@type": "Question",
      "name": "Em quais formatos as imagens são extraídas?",
      "acceptedAnswer": { "@type": "Answer", "text": "O OmnisPDF extrai as imagens no formato original — geralmente JPG ou PNG. As imagens são baixadas como arquivo ZIP." }
    },
    {
      "@type": "Question",
      "name": "Qual é a diferença entre extrair imagens e converter PDF para JPG?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF para JPG converte cada página em uma imagem. Extrair Imagens retira apenas as fotos, logos e gráficos incorporados — não o layout completo da página." }
    },
    {
      "@type": "Question",
      "name": "Posso extrair imagens de um PDF escaneado?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDFs escaneados tratam toda a página como uma única imagem. Você pode extraí-la, mas será o escaneamento completo da página em vez de gráficos individuais." }
    },
    {
      "@type": "Question",
      "name": "Posso extrair imagens de um PDF pelo celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O OmnisPDF funciona em navegadores móveis — envie, extraia e baixe do seu iPhone ou Android." }
    },
    {
      "@type": "Question",
      "name": "É grátis extrair imagens de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Contas gratuitas têm 10 extrações por dia. Contas Pro têm extrações ilimitadas." }
    }
  ]
}

export default function ExtrairImagensDePDFPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderPt />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Image className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extrair Imagens de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Retire todas as fotos, logos e gráficos incorporados no seu PDF. Baixe-os como arquivo ZIP — instantâneo e direto do navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Todas as Imagens Extraídas</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Removidos Após a Sessão</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Extract Images from PDF"
          outputFormat="ZIP"
          processingMessage="Extracting images from your PDF..."
          successMessage="Your images are ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Precisa das fotos ou gráficos de um PDF sem o texto e o layout? O extrator de imagens do OmnisPDF retira cada imagem incorporada — fotos, logos, gráficos, diagramas — e as entrega como um arquivo ZIP que você pode usar em qualquer lugar.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Extraia todas as imagens incorporadas de qualquer PDF</li>
              <li>✓ Imagens salvas no formato original (JPG, PNG)</li>
              <li>✓ Perfeito para reutilizar fotos, logos e gráficos</li>
              <li>✓ Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalação — extraia imagens no seu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Reutilize Fotos e Gráficos de PDFs</h2>
              <p className="text-slate-600">
                Recebeu um folheto, apresentação ou relatório em PDF? Extraia as imagens para reutilizá-las nos seus próprios documentos, slides ou redes sociais sem precisar de capturas de tela.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extraia Logos e Recursos de Marca</h2>
              <p className="text-slate-600">
                Retire logos, ícones e gráficos de marca de guias de estilo PDF, materiais de marketing e documentos corporativos — obtenha os arquivos de imagem originais instantaneamente.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Diferente de PDF para JPG</h2>
              <p className="text-slate-600">
                PDF para JPG converte páginas inteiras em imagens. A extração de imagens retira apenas os gráficos incorporados — fotos, gráficos, logos — separados do layout da página.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Extrair Imagens de um PDF</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF para o OmnisPDF.",
                "Clique em Extrair Imagens — todas as imagens incorporadas são detectadas automaticamente.",
                "Baixe o arquivo ZIP com todas as imagens extraídas.",
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
                { name: "PDF para JPG", href: "/pt/pdf-para-jpg", desc: "Converte páginas em imagens" },
                { name: "PDF para PNG", href: "/pt/pdf-para-png", desc: "Converte páginas em PNG" },
                { name: "Comprimir PDF", href: "/pt/comprimir-pdf", desc: "Reduz o tamanho do arquivo" },
                { name: "Scanner OCR", href: "/pt/scanner-ocr", desc: "Extrai texto de escaneamentos" },
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
                { q: "Como extraio imagens de um PDF?", a: "Envie seu PDF ao OmnisPDF, clique em Extrair e baixe um arquivo ZIP com todas as imagens encontradas no seu PDF." },
                { q: "Em quais formatos as imagens são extraídas?", a: "O OmnisPDF extrai as imagens no formato original — geralmente JPG ou PNG. As imagens são baixadas como arquivo ZIP." },
                { q: "Qual é a diferença entre extrair imagens e converter PDF para JPG?", a: "PDF para JPG converte cada página em uma imagem. Extrair Imagens retira apenas as fotos, logos e gráficos incorporados — não o layout completo da página." },
                { q: "Posso extrair imagens de um PDF escaneado?", a: "PDFs escaneados tratam toda a página como uma única imagem. Você pode extraí-la, mas será o escaneamento completo da página em vez de gráficos individuais." },
                { q: "Posso extrair imagens de um PDF pelo celular?", a: "Sim. O OmnisPDF funciona em navegadores móveis — envie, extraia e baixe do seu iPhone ou Android." },
                { q: "É grátis extrair imagens de um PDF?", a: "Sim. Contas gratuitas têm 10 extrações por dia. Contas Pro têm extrações ilimitadas." },
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
      <FooterPt />
    </div>
  )
}
