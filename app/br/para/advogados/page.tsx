import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import type { Metadata } from "next"
import { Scale, Shield, FileSignature, EyeOff, FileSearch, GitCompare, Lock, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Ferramentas de PDF para Advogados — Redigir, Assinar e Comparar Documentos Jurídicos | PDF.it",
  description:
    "Ferramentas de PDF criadas para equipes jurídicas. Redija permanentemente dados privilegiados, assine contratos eletronicamente, compare versões de documentos e proteja petições com senha. Os arquivos são excluídos imediatamente após o download.",
  keywords: [
    "ferramentas de PDF para advogados",
    "redação de PDF para área jurídica",
    "assinatura eletrônica de documentos jurídicos",
    "comparar versões de PDF para advogados",
    "proteger PDF jurídico com senha",
    "PDF para escritórios de advocacia",
    "alternativa ao Bates numbering",
    "redação de documentos privilegiados",
    "ferramentas de PDF para petições judiciais",
    "alternativa ao Adobe Acrobat para advogados",
  ],
  openGraph: {
    title: "Ferramentas de PDF para Advogados — Redigir, Assinar e Comparar Documentos Jurídicos | PDF.it",
    description:
      "Ferramentas de PDF criadas para equipes jurídicas. Redija permanentemente dados privilegiados, assine contratos eletronicamente, compare versões de documentos e proteja petições com senha.",
    url: "https://pdf.it.com/br/para/advogados",
    siteName: "PDF.it",
    images: [{ url: "https://pdf.it.com/og-logo.png", width: 1736, height: 846, alt: "PDF.it para Advogados" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferramentas de PDF para Advogados — Redigir, Assinar e Comparar Documentos Jurídicos",
    description:
      "Redija dados privilegiados, assine contratos eletronicamente, compare versões e proteja petições. Os arquivos são excluídos imediatamente após o download.",
    images: ["https://pdf.it.com/og-logo.png"],
  },
  alternates: {
    canonical: "https://pdf.it.com/br/para/advogados",
    languages: {
      en: "https://pdf.it.com/for/lawyers",
      es: "https://pdf.it.com/es/para/abogados",
      pt: "https://pdf.it.com/br/para/advogados",
    },
  },
}

const faqs = [
  {
    q: "A redação do PDF.it é permanente?",
    a: "Sim. Nossa ferramenta de redação remove permanentemente o texto e as imagens selecionadas do PDF — não apenas as cobre com uma caixa preta. Após a redação, o conteúdo desaparece do arquivo, o que significa que a parte adversa não consegue copiar e colar o texto oculto nem inspecionar o objeto subjacente.",
  },
  {
    q: "Posso usar o PDF.it para petições judiciais?",
    a: "Sim. O PDF.it gera PDFs em conformidade com os padrões, adequados para a maioria dos sistemas de peticionamento eletrônico. Você pode achatar campos de formulário, redigir conteúdo privilegiado, proteger anexos sensíveis com senha e comprimir arquivos para ficar abaixo dos limites de tamanho impostos pelo PJe, e-SAJ, eproc e demais portais.",
  },
  {
    q: "O PDF.it armazena meus documentos?",
    a: "Não. Os arquivos são processados em tempo real e excluídos assim que você baixa o resultado. Todas as transferências são criptografadas via SSL. Nunca armazenamos, lemos, indexamos ou compartilhamos seus documentos.",
  },
  {
    q: "Posso comparar duas versões de um contrato?",
    a: "Sim — nossa ferramenta de comparação de PDF mostra as diferenças lado a lado entre duas versões, destacando texto alterado, adicionado e removido. É útil para revisão de contratos, análises de marcações e para confirmar se as edições da contraparte correspondem ao que foi negociado.",
  },
  {
    q: "Qual plano um advogado autônomo ou um escritório pequeno deve escolher?",
    a: "O plano Business cobre a maioria dos fluxos jurídicos: redação, assinatura eletrônica, comparação de PDF, arquivos de até 1GB e extração de tabelas para cronogramas de descoberta. Escritórios maiores que lidam com grande volume de documentação devem considerar o Enterprise pelos 2.000 páginas/mês de extração de tabelas e pela fila de processamento prioritária.",
  },
]

export default function ParaAdvogadosPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <HeaderBr />
      <main>
        {/* ── Hero ── */}
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
                <Scale className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Ferramentas de PDF Criadas para Equipes Jurídicas</h1>
              <p className="text-xl text-slate-300 mb-8">
                Redija conteúdo privilegiado, assine contratos eletronicamente, compare revisões e prepare petições judiciais — sem instalar o Acrobat. Os arquivos são excluídos imediatamente após o download.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/br/cadastro"
                  className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-6 rounded-xl transition-colors"
                >
                  Iniciar teste grátis <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
                <Link
                  href="/br/precos"
                  className="inline-flex items-center justify-center border border-slate-600 text-white hover:bg-slate-800 font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  Ver preços
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Problem ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-black text-slate-900 mb-4 text-center">Os Problemas Documentais que Equipes Jurídicas Enfrentam Diariamente</h2>
            <p className="text-lg text-slate-600 leading-relaxed text-center mb-10">
              A maior parte do trabalho com documentos jurídicos é repetitiva, urgente e de alto risco. Uma redação esquecida, uma confusão de versões ou uma petição que ultrapassa o limite de tamanho do portal podem comprometer um dia inteiro. O PDF.it resolve os cinco problemas que escritórios de advocacia enfrentam com mais frequência.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Redação que realmente remove o texto", desc: "Caixas pretas desenhadas no Word ou no Preview não removem o conteúdo subjacente — a parte adversa muitas vezes consegue recuperá-lo. A redação permanente, no nível do objeto, faz toda a diferença." },
                { title: "Confusão de versões em contratos longos", desc: "Quando um negócio passa por cinco rodadas de revisão entre três contrapartes, acompanhar o que mudou da v4 para a v5 a olho nu é lento e propenso a erros." },
                { title: "Limites de tamanho dos portais judiciais", desc: "PJe, e-SAJ, eproc e a maioria dos portais estaduais limitam uploads entre 10MB e 50MB. Os anexos costumam exceder o limite na primeira tentativa." },
                { title: "Cadeias de assinatura que se arrastam por dias", desc: "Imprimir, assinar, digitalizar e enviar um contrato por e-mail é meia jornada de produtividade perdida por parte." },
                { title: "Cronogramas de descoberta presos em PDFs", desc: "Tabelas dentro de produções digitalizadas ou listas de anexos exportadas precisam ser redigitadas no Excel quando os dados subjacentes não são legíveis por máquina." },
                { title: "Conteúdo privilegiado enviado em formatos editáveis", desc: "Documentos do Word e PDFs desbloqueados podem ser alterados depois que você os envia. Proteção por senha e achatamento bloqueiam o arquivo." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl p-6 bg-white border border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── The Core Tools ── */}
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-black text-white mb-4 text-center">As Cinco Ferramentas que Você Vai Usar Toda Semana</h2>
            <p className="text-lg text-slate-300 leading-relaxed text-center max-w-3xl mx-auto mb-10">
              Todas as ferramentas abaixo rodam no seu navegador. Sem instalações, sem plugins, sem armazenamento de arquivos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: EyeOff, title: "Redação de PDF", desc: "Remova permanentemente nomes, CPFs, números de conta e textos privilegiados de qualquer PDF. O conteúdo redigido é excluído do arquivo — não apenas coberto visualmente.", href: "/br/redacao-pdf", cta: "Redigir um PDF" },
                { icon: FileSignature, title: "Assinatura Eletrônica", desc: "Envie contratos para assinatura em segundos. Assinaturas válidas apenas durante a sessão — nunca armazenamos bibliotecas de assinaturas reutilizáveis em nossos servidores.", href: "/br/assinatura-eletronica", cta: "Assinar um documento" },
                { icon: GitCompare, title: "Comparar PDF", desc: "Comparação lado a lado entre duas versões de PDF. Texto alterado, adicionado e removido é destacado para que você faça a marcação em minutos.", href: "/br/comparar-pdf", cta: "Comparar versões" },
                { icon: Lock, title: "Proteger com Senha e Criptografar", desc: "Criptografia AES-256 em qualquer PDF antes de sair da sua mesa. Achate formulários para que os campos não possam ser editados pelo destinatário.", href: "/br/criptografar-pdf", cta: "Proteger um PDF" },
                { icon: FileSearch, title: "Extração de Tabelas para Excel", desc: "Extraia listas de anexos, cronogramas de descoberta e tabelas de depoimentos dos PDFs direto para XLSX. Funciona também em documentos digitalizados.", href: "/br/extracao-de-tabelas", cta: "Extrair tabelas" },
                { icon: Shield, title: "Comprimir para Peticionamento", desc: "Reduza anexos para caber nos limites do PJe, e-SAJ e portais judiciais estaduais sem deixar documentos digitalizados ilegíveis.", href: "/br/comprimir-pdf", cta: "Comprimir um PDF" },
              ].map((tool) => (
                <div
                  key={tool.title}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <div
                    className="rounded-[11px] p-6 h-full"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                        rgba(255, 255, 255, 0.07)
                      `,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <tool.icon className="h-6 w-6 text-[#14D8C4]" />
                      <h3 className="text-lg font-bold text-white">{tool.title}</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{tool.desc}</p>
                    <Link href={tool.href} className="inline-flex items-center text-sm font-semibold text-[#14D8C4] hover:text-[#2EE6D6]">
                      {tool.cta} <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Workflows ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-black text-slate-900 mb-4 text-center">Quatro Fluxos de Trabalho Reais</h2>
            <p className="text-lg text-slate-600 leading-relaxed text-center mb-10">
              Estas são as sequências exatas que pequenos escritórios e equipes jurídicas internas executam no PDF.it toda semana.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Redigindo uma produção do cliente",
                  steps: [
                    "Envie o PDF para /br/redacao-pdf.",
                    "Selecione os nomes, números de conta e textos privilegiados a serem removidos.",
                    "Aplique as redações — o conteúdo é excluído no nível do objeto, não apenas coberto.",
                    "Baixe o PDF redigido. O original nunca sai do seu navegador.",
                  ],
                },
                {
                  title: "Comparando revisões de contrato",
                  steps: [
                    "Abra /br/comparar-pdf e envie as versões v4 e v5 do contrato.",
                    "Revise a comparação lado a lado — texto adicionado, removido e alterado é destacado.",
                    "Exporte um resumo das alterações para o seu memorando de marcação.",
                  ],
                },
                {
                  title: "Preparando uma petição para o PJe",
                  steps: [
                    "Una a peça + anexos em /br/unir-pdf.",
                    "Comprima o arquivo combinado em /br/comprimir-pdf para ficar abaixo do limite de 50MB do portal.",
                    "Achate quaisquer campos preenchíveis para que o tribunal não possa editar o formulário acidentalmente.",
                    "Faça o upload no PJe de uma só vez, sem precisar dividir em partes.",
                  ],
                },
                {
                  title: "Assinando um NDA com uma contraparte",
                  steps: [
                    "Abra /br/assinatura-eletronica e envie o NDA.",
                    "Assine com uma assinatura válida apenas para a sessão — nenhuma biblioteca armazenada no servidor.",
                    "Envie o PDF assinado por e-mail para a contraparte. Proteja com senha primeiro se o NDA for sensível.",
                  ],
                },
              ].map((w) => (
                <div key={w.title} className="rounded-xl p-6 bg-white border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{w.title}</h3>
                  <ol className="space-y-2">
                    {w.steps.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#14D8C4]/15 text-[#0B9B8B] font-bold text-xs flex items-center justify-center">{i + 1}</span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Plan Pick ── */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.04) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-black text-white mb-4 text-center">Qual Plano Atende uma Equipe Jurídica?</h2>
            <p className="text-lg text-slate-300 leading-relaxed text-center mb-10">
              Redação, assinatura eletrônica e comparação de PDF são todos recursos do plano Business. É onde a maioria dos pequenos escritórios e equipes internas se encaixa.
            </p>
            <div
              className="rounded-xl p-[1px]"
              style={{ background: "linear-gradient(135deg, rgba(107,124,255,0.5), rgba(20,216,196,0.3), rgba(107,124,255,0.35), rgba(107,124,255,0.4))" }}
            >
              <div
                className="rounded-[11px] p-8"
                style={{
                  background: `
                    radial-gradient(ellipse 40% 30% at 50% 0%, rgba(107,124,255,0.06) 0%, transparent 50%),
                    radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%),
                    rgba(255, 255, 255, 0.07)
                  `,
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "inset 0 -1px 1px rgba(107,124,255,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                }}
              >
                <div className="flex flex-wrap items-baseline gap-3 mb-6">
                  <h3 className="text-2xl font-bold text-white">Business</h3>
                  <span className="text-[#6B7CFF] font-semibold">US$ 13,99/mês</span>
                  <span className="text-slate-400 text-sm">— recomendado para advogados</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Redação de PDF (permanente, no nível do objeto)",
                    "Assinatura eletrônica válida apenas para a sessão",
                    "Comparação de PDF (lado a lado)",
                    "Proteção por senha e criptografia AES-256",
                    "Extração de tabelas — 200 páginas/mês",
                    "Arquivos de até 1GB",
                    "Conversões ilimitadas",
                    "Processamento em lote",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#14D8C4] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/br/cadastro"
                    className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-6 rounded-xl transition-colors"
                  >
                    Iniciar teste grátis de 30 dias
                  </Link>
                  <Link
                    href="/br/precos"
                    className="inline-flex items-center justify-center border border-slate-600 text-white hover:bg-slate-800 font-semibold py-3 px-6 rounded-xl transition-colors"
                  >
                    Comparar todos os planos
                  </Link>
                </div>
                <p className="text-xs text-slate-400 mt-4">Alto volume de descoberta? O Enterprise libera 2.000 páginas/mês de extração de tabelas + fila de processamento prioritária.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Privacy & Compliance ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="rounded-xl p-8 bg-white border border-slate-200">
              <div className="flex items-start gap-4 mb-4">
                <Shield className="h-8 w-8 text-[#14D8C4] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-2">Sigilo e Confidencialidade, de Fábrica</h2>
                  <p className="text-slate-600 leading-relaxed">
                    O PDF.it processa seus arquivos em tempo real e os exclui no momento em que você baixa o resultado. Nunca armazenamos, lemos, indexamos ou compartilhamos documentos. Todas as transferências são criptografadas via SSL. As redações são permanentes e no nível do objeto, não sobreposições cosméticas.
                  </p>
                </div>
              </div>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                {[
                  "Arquivos excluídos imediatamente após o download",
                  "Transferências criptografadas via SSL",
                  "Criptografia AES-256 em PDFs protegidos por senha",
                  "Sem bibliotecas de assinaturas reutilizáveis no servidor",
                  "Sem armazenamento de arquivos, jamais",
                  "Sem indexação, sem análise do conteúdo dos seus documentos",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#14D8C4] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-xl border border-slate-200 bg-slate-50 p-5 group">
                  <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-slate-900">
                    <span>{f.q}</span>
                    <span className="text-[#14D8C4] text-xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl font-black text-slate-900 mb-4">30 Dias do Plano Business, Grátis</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Comece com o plano Business completo — redação, assinatura eletrônica, comparação, extração de tabelas, arquivos de 1GB. Sem cobrança por 30 dias. Cancele quando quiser.
            </p>
            <Link
              href="/br/cadastro"
              className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 px-8 rounded-xl text-lg transition-colors"
            >
              Iniciar teste grátis <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
