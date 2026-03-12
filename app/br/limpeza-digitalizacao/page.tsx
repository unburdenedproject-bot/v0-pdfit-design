import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { PhoneScanCleanupInterface } from "@/components/phone-scan-cleanup-interface"
import { Camera, Zap, Shield, ScanLine, FileText, Merge, RotateCw, Scissors, Lock } from "lucide-react"

export const metadata = {
  title: "Limpeza de Digitalização — Melhorar Fotos de Documentos | OmnisPDF",
  description:
    "Envie uma foto de documento tirada com seu celular e obtenha um PDF limpo e profissional. Endireite, elimine sombras e melhore o contraste. Ferramenta online grátis.",
  alternates: {
    languages: {
      en: "/phone-scan-cleanup",
      es: "/es/limpiar-escaneo",
      pt: "/br/limpeza-digitalizacao",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é Limpeza de Digitalização?",
      "acceptedAnswer": { "@type": "Answer", "text": "Limpeza de Digitalização pega fotos de documentos capturadas com a câmera do seu celular e as transforma em PDFs limpos e profissionais. Remove sombras, corrige iluminação irregular, endireita a imagem e melhora o texto para um resultado com qualidade de scanner." }
    },
    {
      "@type": "Question",
      "name": "Quais formatos de imagem são aceitos?",
      "acceptedAnswer": { "@type": "Answer", "text": "São aceitas imagens JPG, PNG e WEBP. Esses são os formatos padrão usados pelas câmeras de celulares tanto em iPhone quanto em dispositivos Android." }
    },
    {
      "@type": "Question",
      "name": "Qual é a diferença entre Preto e Branco e Limpeza a Cores?",
      "acceptedAnswer": { "@type": "Answer", "text": "O modo Preto e Branco converte a imagem em texto preto nítido sobre fundo branco puro, como um scanner profissional. É ideal para documentos de texto, contratos e formulários. Limpeza a Cores mantém as cores originais enquanto remove sombras e melhora o contraste, ideal para recibos, formulários coloridos e documentos com logos." }
    },
    {
      "@type": "Question",
      "name": "Limpeza de Digitalização é grátis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Você pode limpar alguns escaneamentos grátis. Para uso ilimitado, atualize para o plano Pro a $7,99/mês que inclui todas as ferramentas PDF, processamento em lote e suporte para arquivos maiores." }
    },
    {
      "@type": "Question",
      "name": "Funciona com qualquer câmera de celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Funciona com fotos de qualquer câmera de celular, incluindo iPhone, Samsung, Google Pixel e qualquer dispositivo Android. Basta tirar uma foto do documento, enviar e a ferramenta cuida do resto." }
    },
    {
      "@type": "Question",
      "name": "Posso tornar o texto pesquisável após a limpeza?",
      "acceptedAnswer": { "@type": "Answer", "text": "Limpeza de Digitalização cria um PDF limpo a partir da sua foto. Para tornar o texto pesquisável e copiável, passe o resultado pela nossa ferramenta Scanner OCR, que extrai texto de documentos escaneados." }
    }
  ]
}

export default function LimpezaDigitalizacaoPage() {
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
                <Camera className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Limpeza de Digitalização</h1>
              <p className="text-xl text-slate-300 mb-4">
                Converta fotos de documentos tiradas com seu celular em PDFs limpos e profissionais. Remova sombras, corrija a iluminação, melhore o texto e obtenha resultados com qualidade de scanner de qualquer câmera de celular.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                Sem scanner. Sem app para instalar. Apenas envie e baixe.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><ScanLine className="h-4 w-4 text-orange-500" /><span>Remove Sombras</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Contraste Automático</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>PDF Instantâneo</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Interface */}
        <PhoneScanCleanupInterface />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Como Funciona</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Tire uma Foto", desc: "Use a câmera do seu celular para fotografar qualquer documento — contratos, recibos, notas, formulários. Não precisa de nenhum app especial." },
                { step: "2", title: "Envie e Escolha o Modo", desc: "Envie a foto e selecione Preto e Branco para documentos de texto ou Limpeza a Cores para recibos e formulários coloridos." },
                { step: "3", title: "Baixe o PDF Limpo", desc: "Obtenha um PDF profissional, sem sombras, com texto nítido e iluminação uniforme. Pronto para compartilhar, imprimir ou arquivar." },
              ].map((item) => (
                <div key={item.step} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-2">{item.title}</div>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Use This Tool */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4 text-center">Por Que Limpar Digitalizações do Celular?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-600 text-center">
                Fotos de documentos tiradas com o celular têm sombras, iluminação irregular, ângulos tortos e texto borrado. Enviá-las diretamente parece pouco profissional e pode ser difícil de ler.
              </p>
              <p className="text-slate-600 text-center">
                Limpeza de Digitalização transforma fotos desorganizadas em PDFs limpos e de alto contraste que parecem ter saído de um scanner profissional. Perfeito para enviar documentos, arquivar papéis ou compartilhar com colegas.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comuns</h2>
            <div className="space-y-10">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Contratos e Documentos Legais</h3>
                <p className="text-slate-600">
                  Precisa enviar um contrato assinado mas só tem seu celular? Tire uma foto, limpe e envie um PDF profissional em vez de uma foto escura e com sombras.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Recibos e Relatórios de Despesas</h3>
                <p className="text-slate-600">
                  Capture recibos com seu celular para relatórios de despesas. O modo Limpeza a Cores preserva logos e cores enquanto remove sombras e brilho da foto.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Notas e Quadros Brancos</h3>
                <p className="text-slate-600">
                  Fotografe notas manuscritas ou sessões de quadro branco e converta-as em PDFs limpos e legíveis. O modo Preto e Branco faz a escrita à mão se destacar claramente.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Cópias de Documentos de Identidade e Passaportes</h3>
                <p className="text-slate-600">
                  Crie cópias limpas de documentos de identidade, passaportes ou carteiras de motorista para cadastros e registros. A limpeza garante que todo o texto fique legível.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "O que é Limpeza de Digitalização?", a: "Pega fotos de documentos da câmera do seu celular e as transforma em PDFs limpos e profissionais. Remove sombras, corrige a iluminação e melhora o texto para resultados com qualidade de scanner." },
                { q: "Quais formatos de imagem são aceitos?", a: "JPG, PNG e WEBP. Esses são os formatos padrão usados pelas câmeras de celulares tanto em iPhone quanto em Android." },
                { q: "Qual é a diferença entre Preto e Branco e Limpeza a Cores?", a: "Preto e Branco converte para texto preto nítido sobre fundo branco, como um scanner. Limpeza a Cores mantém as cores enquanto remove sombras e melhora o contraste." },
                { q: "Limpeza de Digitalização é grátis?", a: "Você pode limpar alguns escaneamentos grátis. Para uso ilimitado, atualize para o plano Pro a $7,99/mês." },
                { q: "Funciona com qualquer câmera de celular?", a: "Sim. Funciona com fotos de qualquer celular — iPhone, Samsung, Google Pixel ou qualquer dispositivo Android." },
                { q: "Posso tornar o texto pesquisável?", a: "Esta ferramenta cria um PDF limpo a partir da sua foto. Para tornar o texto pesquisável, passe o resultado pela nossa ferramenta Scanner OCR." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Esqueça o Scanner</h2>
            <p className="text-slate-300 text-lg mb-8">
              A câmera do seu celular é tudo que você precisa. Envie uma foto e obtenha um PDF profissional em segundos.
            </p>
            <Link
              href="/br/limpeza-digitalizacao"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Limpar uma Digitalização Agora
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Mais Ferramentas PDF</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Scanner OCR", desc: "Torne PDFs escaneados pesquisáveis.", href: "/br/scanner-ocr", icon: ScanLine },
                { name: "Comprimir PDF", desc: "Reduza o tamanho sem perder qualidade.", href: "/br/comprimir-pdf", icon: FileText },
                { name: "Unir PDF", desc: "Combine vários PDFs em um.", href: "/br/unir-pdf", icon: Merge },
                { name: "Girar PDF", desc: "Corrija páginas de lado ou invertidas.", href: "/br/girar-pdf", icon: RotateCw },
                { name: "Dividir PDF", desc: "Divida um PDF em arquivos separados.", href: "/br/dividir-pdf", icon: Scissors },
                { name: "Proteger PDF", desc: "Adicione proteção com senha.", href: "/br/proteger-pdf", icon: Lock },
                { name: "Achatar PDF", desc: "Achate campos e anotações.", href: "/br/achatar-pdf", icon: FileText },
                { name: "PDF para JPG", desc: "Converta páginas PDF em imagens.", href: "/br/pdf-para-jpg", icon: FileText },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col items-center text-center rounded-xl border border-gray-200 bg-white p-4 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    <tool.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-1">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{tool.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
