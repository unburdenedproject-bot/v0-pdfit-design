import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import type { Metadata } from "next"
import { Users, Shield, FileSignature, EyeOff, FileSpreadsheet, Archive, Lock, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Ferramentas de PDF para Equipes de RH — Assinar Propostas, Redigir PII e Processar Pacotes de Onboarding | PDF.it",
  description:
    "Ferramentas de PDF criadas para RH e People Ops. Assine cartas-proposta eletronicamente, redija dados pessoais de candidaturas, una pacotes de onboarding e extraia dados de formulários para o Excel. Os arquivos são excluídos imediatamente após o download.",
  keywords: [
    "ferramentas de PDF para RH",
    "ferramentas de PDF para onboarding de RH",
    "assinar cartas-proposta eletronicamente",
    "redigir PII de PDF de candidato",
    "extração de dados de formulário PDF para RH",
    "automação de documentos de RH",
    "pacote de onboarding de novo funcionário em PDF",
    "ferramentas de PDF para formulário de admissão",
    "ferramentas de PDF para CTPS digital",
    "ferramentas de PDF seguras para RH",
  ],
  openGraph: {
    title: "Ferramentas de PDF para Equipes de RH — Assinar Propostas, Redigir PII e Processar Pacotes de Onboarding | PDF.it",
    description:
      "Assine cartas-proposta eletronicamente, redija dados pessoais de candidaturas, una pacotes de onboarding e extraia dados de formulários para o Excel. Os arquivos são excluídos imediatamente.",
    url: "https://pdf.it.com/br/para/equipes-rh",
    siteName: "PDF.it",
    images: [{ url: "https://pdf.it.com/og-logo.png", width: 1736, height: 846, alt: "PDF.it para Equipes de RH" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferramentas de PDF para Equipes de RH — Assinar Propostas, Redigir PII e Processar Pacotes de Onboarding",
    description:
      "Assine propostas, redija PII, una pacotes de onboarding e extraia dados de formulários. Os arquivos são excluídos imediatamente.",
    images: ["https://pdf.it.com/og-logo.png"],
  },
  alternates: {
    canonical: "https://pdf.it.com/br/para/equipes-rh",
    languages: {
      en: "https://pdf.it.com/for/hr-teams",
      es: "https://pdf.it.com/es/para/recursos-humanos",
      pt: "https://pdf.it.com/br/para/equipes-rh",
    },
  },
}

const faqs = [
  {
    q: "Posso assinar uma carta-proposta eletronicamente no PDF.it?",
    a: "Sim. Faça o upload da carta-proposta, adicione campos de assinatura e envie ao candidato. As assinaturas são válidas apenas para a sessão — nunca armazenamos bibliotecas de assinaturas reutilizáveis no servidor, o que mantém os dados do candidato fora de qualquer banco de dados de fornecedor.",
  },
  {
    q: "O RH pode redigir PII de materiais de candidatos para revisão às cegas?",
    a: "Sim. Nossa ferramenta de redação remove permanentemente nomes, endereços, fotos e quaisquer outras informações identificadoras dos PDFs dos candidatos. O conteúdo redigido é excluído no nível do objeto — não é apenas coberto com uma caixa preta.",
  },
  {
    q: "O PDF.it armazena documentos de funcionários?",
    a: "Não. Os arquivos são processados em tempo real e excluídos assim que você baixa o resultado. Todas as transferências são criptografadas via SSL. Formulários de admissão, cartas-proposta e avaliações de desempenho nunca ficam em nossos servidores.",
  },
  {
    q: "Posso extrair dados de formulários de uma pilha de PDFs de onboarding?",
    a: "Sim. Use a extração inteligente para solicitar campos específicos — nome completo, data de início, departamento, contato de emergência — e receba uma saída estruturada que você pode enviar para o seu sistema de RH ou para uma planilha de novos contratados.",
  },
  {
    q: "Qual plano uma equipe de RH deve escolher?",
    a: "O plano Business cobre a maioria dos fluxos de People Ops: redação, assinatura eletrônica, extração inteligente, arquivos de 1GB e conversões ilimitadas. O Enterprise é o ideal para equipes de RH em organizações maiores que rodam automação de fluxos de trabalho em dezenas de contratações por mês.",
  },
]

export default function ParaEquipesRhPage() {
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
                <Users className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Ferramentas de PDF Criadas para RH e People Ops</h1>
              <p className="text-xl text-slate-300 mb-8">
                Envie cartas-proposta para assinatura, redija PII para revisões às cegas, una pacotes de onboarding e extraia dados de formulários — sem instalar software. Os arquivos são excluídos imediatamente após o download.
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
            <h2 className="text-3xl font-black text-slate-900 mb-4 text-center">Onde o RH Gasta Mais Tempo do Que Deveria</h2>
            <p className="text-lg text-slate-600 leading-relaxed text-center mb-10">
              Recrutamento, onboarding e eventos do ciclo de vida do funcionário são cheios de PDFs que precisam ser assinados, redigidos, unidos ou analisados. O PDF.it resolve os seis problemas que mais consomem tempo em uma semana de People Ops.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Cartas-proposta paradas sem assinatura", desc: "Ciclos de imprimir, assinar, digitalizar e enviar por e-mail estendem o tempo entre a oferta e a aceitação. Candidatos perdem o engajamento quando o papel demora dias para circular." },
                { title: "PII em revisões de candidaturas", desc: "Processos de revisão às cegas precisam que nomes, fotos e detalhes identificadores sejam removidos — permanentemente, não cobertos com uma forma." },
                { title: "Pacotes de onboarding em dez pedaços", desc: "Formulário de admissão, declaração do regulamento interno, dados bancários, contato de emergência, formulários de benefícios — novos contratados recebem tudo isso como arquivos separados que deveriam ser um pacote único." },
                { title: "Formulários que precisam virar linhas de planilha", desc: "Quando 40 novos contratados entregam formulários em papel, transformar essa pilha em um upload para o sistema de RH é um trabalho manual penoso." },
                { title: "Documentos de funcionário que precisam ficar privados", desc: "Informações salariais, CPFs, atestados médicos — tudo isso não pode ficar nos servidores de um fornecedor terceiro nem trafegar por canais inseguros." },
                { title: "Manuais de benefícios e regulamentos extensos", desc: "Pacotes de benefícios e manuais do funcionário chegam a centenas de páginas. Excedem limites de e-mail e atrasam as cadeias de mensagens dos novos contratados." },
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
            <h2 className="text-3xl font-black text-white mb-4 text-center">As Seis Ferramentas Que o RH Usa Toda Semana</h2>
            <p className="text-lg text-slate-300 leading-relaxed text-center max-w-3xl mx-auto mb-10">
              Todas as ferramentas abaixo rodam no seu navegador. Sem instalações no desktop, sem arquivos enviados que ficam nos servidores de um fornecedor.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: FileSignature, title: "Assinar Cartas-Proposta Eletronicamente", desc: "Envie propostas para assinatura em segundos. Assinaturas válidas apenas para a sessão — nada persiste em nossos servidores. Os candidatos assinam no navegador e você recebe o PDF assinado de volta.", href: "/br/assinatura-eletronica", cta: "Enviar para assinatura" },
                { icon: EyeOff, title: "Redação de PDF", desc: "Remova permanentemente nomes, fotos e detalhes identificadores de materiais de candidatos para revisões às cegas. Redação no nível do objeto — o conteúdo desaparece, não é apenas coberto.", href: "/br/redacao-pdf", cta: "Redigir um PDF" },
                { icon: Archive, title: "Unir Pacotes de Onboarding", desc: "Combine formulário de admissão, declaração do regulamento interno e formulários de benefícios em um único PDF de onboarding. Os novos contratados recebem um arquivo limpo e único em vez de dez anexos.", href: "/br/unir-pdf", cta: "Unir documentos" },
                { icon: FileSpreadsheet, title: "Extração Inteligente", desc: "Extraia campos específicos de pilhas de formulários de onboarding — nome, data de início, departamento, contato de emergência — e obtenha dados estruturados prontos para o seu sistema de RH.", href: "/br/extracao-inteligente", cta: "Extrair dados" },
                { icon: Lock, title: "Proteger com Senha", desc: "Criptografia AES-256 em avaliações de desempenho, cartas salariais e documentação de desligamento. Compartilhe PDFs sensíveis sem se preocupar com anexos encaminhados.", href: "/br/criptografar-pdf", cta: "Proteger um PDF" },
                { icon: FileSpreadsheet, title: "Comprimir Manuais de Benefícios", desc: "Reduza pacotes de benefícios de 200 páginas para que caibam nos e-mails de boas-vindas e não esbarrem nos limites de tamanho da caixa de entrada.", href: "/br/comprimir-pdf", cta: "Comprimir um PDF" },
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
              Estas são as sequências que equipes de RH e People Ops executam no PDF.it durante a contratação, o onboarding e os eventos do ciclo de vida do funcionário.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Enviando uma carta-proposta e recebendo-a assinada de volta",
                  steps: [
                    "Abra /br/assinatura-eletronica e envie a carta-proposta.",
                    "Adicione campos de assinatura e data para o candidato.",
                    "Envie por link de e-mail. O candidato assina no navegador.",
                    "Baixe o PDF assinado para o arquivo do funcionário. As versões original e assinada nunca persistem em nossos servidores.",
                  ],
                },
                {
                  title: "Preparando uma revisão às cegas de materiais de candidatos",
                  steps: [
                    "Envie o pacote de cada candidato para /br/redacao-pdf.",
                    "Redija nome, foto, nomes de instituições e qualquer outro conteúdo identificador.",
                    "Baixe as versões redigidas e entregue ao painel de entrevistadores.",
                  ],
                },
                {
                  title: "Montando um pacote de onboarding de novo contratado",
                  steps: [
                    "Combine formulário de admissão, declaração do regulamento interno, dados bancários e formulários de benefícios em /br/unir-pdf.",
                    "Comprima o pacote unido em /br/comprimir-pdf para que caiba no e-mail de boas-vindas.",
                    "Proteja com senha se você estiver incluindo dados bancários ou salariais.",
                  ],
                },
                {
                  title: "Transformando uma pilha de formulários em papel em linhas no sistema de RH",
                  steps: [
                    "Digitalize os formulários de novo contratado a 300 DPI.",
                    "Passe-os por /br/scanner-ocr para adicionar uma camada de texto.",
                    "Use /br/extracao-inteligente para solicitar nome, data de início, departamento e contato de emergência como campos.",
                    "Baixe os dados estruturados e faça o upload no seu sistema de RH.",
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
            <h2 className="text-3xl font-black text-white mb-4 text-center">Qual Plano Atende uma Equipe de RH?</h2>
            <p className="text-lg text-slate-300 leading-relaxed text-center mb-10">
              Assinatura eletrônica, redação e extração inteligente são todos do plano Business. É onde a maioria das equipes de People Ops se encaixa.
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
                  <span className="text-slate-400 text-sm">— recomendado para RH e People Ops</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Assinatura eletrônica válida apenas para a sessão",
                    "Redação de PDF (no nível do objeto)",
                    "Extração inteligente para formulários",
                    "Scanner OCR",
                    "Proteção por senha e criptografia AES-256",
                    "Arquivos de até 1GB",
                    "Conversões ilimitadas e processamento em lote",
                    "Extração de tabelas — 200 páginas/mês",
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
                <p className="text-xs text-slate-400 mt-4">Contratando em escala? O Enterprise libera modelos de automação de fluxos de trabalho, 2.000 páginas/mês de extração de tabelas e processamento prioritário.</p>
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
                  <h2 className="text-2xl font-black text-slate-900 mb-2">Os Dados dos Funcionários Permanecem Privados</h2>
                  <p className="text-slate-600 leading-relaxed">
                    O PDF.it processa seus arquivos em tempo real e os exclui no momento em que você baixa o resultado. Nunca armazenamos, lemos, indexamos ou compartilhamos seus documentos. CPFs, formulários de admissão, cartas salariais e avaliações de desempenho nunca ficam em nossos servidores.
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
                  "Sem indexação, sem análise do conteúdo dos documentos",
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
              Comece com o plano Business completo — assinatura eletrônica, redação, extração inteligente, arquivos de 1GB. Sem cobrança por 30 dias. Cancele quando quiser.
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
