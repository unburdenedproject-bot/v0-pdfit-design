import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { RotatePdfInterface } from "@/components/rotate-pdf-interface"
import { RotateCw, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Girar PDF Online — Rotacionar Paginas de PDF | PDF.it",
  description:
    "Gire paginas de PDF online com o PDF.it. Corrija paginas de lado ou de cabeca para baixo, gire paginas especificas e baixe um PDF corrigido na hora.",
  alternates: {
    canonical: "https://pdf.it.com/br/girar-pdf",
    languages: {
      en: "/rotate-pdf",
      es: "/es/rotar-pdf",
      pt: "/br/girar-pdf",
    },
  },
}

export default function GirarPDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        {/* Hero Section */}
        <section
          className="text-white py-16 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%),
              #0E0F1E
            `,
          }}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
            <filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#heroGrain)" />
          </svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                  boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)",
                }}
              >
                <RotateCw className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Girar PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Corrija paginas de lado ou de cabeca para baixo com o PDF.it. Gire paginas individuais de PDF ou o documento completo e baixe um PDF com a orientacao correta.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>90°, 180°, 270°</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Eliminados Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Use a ferramenta Girar PDF do PDF.it para rotacionar paginas de PDF e corrigir a orientacao em segundos. Gire uma unica pagina ou varias paginas 90°, 180° ou 270°, e baixe um PDF limpo que seja facil de ler, imprimir e compartilhar.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Gire PDFs de lado e corrija paginas de cabeca para baixo</li>
              <li className="flex items-center gap-2">✓ Gire uma unica pagina ou varias paginas no mesmo arquivo</li>
              <li className="flex items-center gap-2">✓ Ideal para PDFs escaneados, formularios, recibos e documentos</li>
              <li className="flex items-center gap-2">✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li className="flex items-center gap-2">✓ Sem instalacao — gire PDFs no navegador</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <RotatePdfInterface />

        {/* Feature Blocks */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Gire Paginas Individuais de PDF", desc: "Corrija apenas as paginas que precisam. Gire uma pagina, um intervalo ou varias paginas selecionadas sem alterar o restante do documento." },
                { title: "Corrija PDFs Escaneados e Documentos de Lado", desc: "Os scanners frequentemente salvam paginas giradas incorretamente. O PDF.it ajuda voce a girar as paginas rapidamente para a direcao correta de leitura." },
                { title: "Salve um PDF com a Orientacao Correta", desc: "Apos girar, baixe um novo PDF com a orientacao de pagina atualizada — pronto para imprimir, enviar por e-mail e compartilhar." },
              ].map((feature) => (
                <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <div className="rounded-[11px] p-6 h-full" style={{ background: "radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Girar um PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Envie seu PDF", desc: "Arraste e solte ou clique para escolher um arquivo" },
                { num: "2", title: "Selecione as paginas para girar", desc: "Escolha a direcao e o angulo de rotacao" },
                { num: "3", title: "Baixe seu PDF", desc: "Obtenha um arquivo com a orientacao correta" },
              ].map((step) => (
                <div key={step.num} className="flex-1">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}>
                    <span className="text-[#14D8C4] font-black text-lg">{step.num}</span>
                  </div>
                  <p className="font-semibold text-slate-900">{step.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
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
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Extraia paginas antes de girar" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine PDFs apos girar" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho apos salvar" },
                { name: "Scanner OCR", href: "/br/scanner-ocr", desc: "Extraia texto de PDFs escaneados" },
              ].map((tool) => (
                <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: "radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16" style={{ background: "radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {[
                { q: "Posso girar apenas uma pagina de um PDF?", a: "Sim. O PDF.it permite girar paginas individuais sem modificar o restante do documento." },
                { q: "Quais angulos de rotacao estao disponiveis?", a: "Voce pode girar paginas 90°, 180° ou 270° — no sentido horario ou anti-horario." },
                { q: "Posso girar um PDF escaneado?", a: "Sim — a rotacao e especialmente util para documentos escaneados que ficam de lado ou de cabeca para baixo." },
                { q: "Posso girar um PDF no celular?", a: "Sim. O PDF.it funciona em navegadores moveis — envie, gire e baixe do seu iPhone ou Android." },
                { q: "E seguro enviar meu PDF?", a: "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos." },
                { q: "Qual e o tamanho maximo de arquivo que posso girar?", a: "Contas gratuitas podem enviar arquivos de ate 25MB. Contas Pro podem enviar ate 200MB. Contas Business podem enviar ate 1GB." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
            { "@type": "Question", "name": "Posso girar apenas uma pagina de um PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it permite girar paginas individuais sem modificar o restante do documento." } },
            { "@type": "Question", "name": "Quais angulos de rotacao estao disponiveis?", "acceptedAnswer": { "@type": "Answer", "text": "Voce pode girar paginas 90°, 180° ou 270° — no sentido horario ou anti-horario." } },
            { "@type": "Question", "name": "Posso girar um PDF escaneado?", "acceptedAnswer": { "@type": "Answer", "text": "Sim — a rotacao e especialmente util para documentos escaneados que ficam de lado ou de cabeca para baixo." } },
            { "@type": "Question", "name": "Posso girar um PDF no celular?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em navegadores moveis — envie, gire e baixe do seu iPhone ou Android." } },
            { "@type": "Question", "name": "E seguro enviar meu PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos." } },
            { "@type": "Question", "name": "Qual e o tamanho maximo de arquivo que posso girar?", "acceptedAnswer": { "@type": "Answer", "text": "Contas gratuitas podem enviar arquivos de ate 25MB. Contas Pro podem enviar ate 200MB. Contas Business podem enviar ate 1GB." } }
          ]
        })}} />
      </main>
      <FooterBr />
    </div>
  )
}
