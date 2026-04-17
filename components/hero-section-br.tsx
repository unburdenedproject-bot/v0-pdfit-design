import { Shield, Crown, Gift, Sparkles, Target, FilePlus, MessageCircle, Zap } from "lucide-react"
import Link from "next/link"

export function HeroSectionBr() {
  return (
    <section
      style={{
        background: `
          radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.22) 0%, transparent 60%),
          radial-gradient(ellipse 50% 40% at 80% 20%, rgba(232,129,58,0.08) 0%, transparent 55%),
          radial-gradient(ellipse 60% 60% at 15% 75%, rgba(107,124,255,0.14) 0%, transparent 60%),
          radial-gradient(ellipse 40% 40% at 85% 70%, rgba(20,216,196,0.06) 0%, transparent 50%),
          #0E0F1E
        `,
      }}
      className="relative text-white pt-20 lg:pt-28 overflow-hidden"
    >
      {/* Grain texture overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.04 }}>
        <filter id="grain-br">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-br)" />
      </svg>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* AI Tools Banner */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 mb-8"
            style={{
              background: "linear-gradient(135deg, rgba(232,129,58,0.15), rgba(20,216,196,0.12), rgba(107,124,255,0.15))",
              border: "1px solid rgba(232,129,58,0.35)",
              boxShadow: "0 0 20px rgba(232,129,58,0.15), 0 0 40px rgba(20,216,196,0.08)",
            }}
          >
            <Zap className="h-4 w-4 text-[#E8813A]" />
            <span className="text-sm font-bold text-white">Ferramentas com IA:</span>
            <div className="flex items-center gap-3">
              <Link href="/br/otimizador-ats" className="text-sm font-semibold text-[#14D8C4] hover:text-[#2EE6D6] transition-colors">
                Otimizador ATS
              </Link>
              <span className="text-slate-500">|</span>
              <Link href="/br/criar-curriculo" className="text-sm font-semibold text-[#14D8C4] hover:text-[#2EE6D6] transition-colors">
                Criar Curriculo
              </Link>
              <span className="text-slate-500">|</span>
              <Link href="/br/chat-com-pdf" className="text-sm font-semibold text-[#14D8C4] hover:text-[#2EE6D6] transition-colors">
                Chat com PDF
              </Link>
              <span className="text-slate-500">|</span>
              <Link href="/br/extracao-inteligente" className="text-sm font-semibold text-[#14D8C4] hover:text-[#2EE6D6] transition-colors">
                Extração Inteligente
              </Link>
              <span className="text-slate-500">|</span>
              <Link href="/br/resumidor-pdf" className="text-sm font-semibold text-[#14D8C4] hover:text-[#2EE6D6] transition-colors">
                Resumidor
              </Link>
              <span className="text-slate-500">|</span>
              <Link href="/br/gerador-perguntas" className="text-sm font-semibold text-[#14D8C4] hover:text-[#2EE6D6] transition-colors">
                Perguntas
              </Link>
              <span className="text-slate-500">|</span>
              <Link href="/br/traduzir-pdf" className="text-sm font-semibold text-[#14D8C4] hover:text-[#2EE6D6] transition-colors">
                Traduzir
              </Link>
            </div>
          </div>

          {/* Headline */}
          <h1
            className="mb-5 leading-tight"
            style={{ fontSize: "clamp(40px, 7vw, 68px)", fontWeight: 900, letterSpacing: "-2.5px" }}
          >
            <span className="text-white block">Feito para Profissionais.</span>
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #14D8C4, #6B7CFF, #E8813A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Zero Armazenamento.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="mb-10 max-w-xl mx-auto"
            style={{ fontSize: "18px", color: "rgba(165,180,252,0.7)", lineHeight: "1.7" }}
          >
            Converta, comprima e edite PDFs em segundos — arquivos removidos imediatamente após o download.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#tools"
              className="cta-primary py-4 px-10 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #14D8C4, #0FBFB0)",
                color: "#0E0F1E",
                fontWeight: 800,
                boxShadow: "0 0 30px rgba(20,216,196,0.5), 0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.15)",
                textShadow: "0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              Comecar Gratis →
            </a>
            <Link
              href="/br/ferramentas"
              className="py-4 px-10 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                color: "#ffffff",
                fontWeight: 600,
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
                backdropFilter: "blur(8px)",
              }}
            >
              Ver todas as ferramentas
            </Link>
          </div>

          {/* Trust icons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm font-semibold text-slate-300">
            <div className="flex items-center gap-2">
              <Gift className="h-4 w-4 text-green-400" />
              <span>10 conversoes gratis/dia</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#E8813A]" />
              <span>7 Ferramentas com IA</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" style={{ color: "#14D8C4" }} />
              <span>Arquivos removidos apos o uso</span>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="h-4 w-4 text-purple-400" />
              <span>Pro: Acesso Ilimitado</span>
            </div>
          </div>

          {/* Free trial banner */}
          <div className="max-w-md mx-auto rounded-2xl p-[1px] mt-8" style={{ background: "linear-gradient(135deg, #E0C27A, #D6B36A, #E0C27A)" }}>
            <div className="rounded-[15px] px-8 py-5 text-center" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(224,194,122,0.08) 0%, transparent 60%), rgba(14,15,30,0.95)" }}>
              <p className="text-sm sm:text-base font-black uppercase tracking-widest text-[#E0C27A] mb-2">Teste Gratis</p>
              <p className="text-xl sm:text-2xl font-black text-white mb-1">Experimente qualquer plano gratis por 30 días</p>
              <p className="text-sm text-slate-400">Sem compromisso, cancele quando quiser. Basta adicionar um método de pagamento para iniciar seu teste sem risco.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated wave */}
      <div className="relative w-full" style={{ height: "160px", marginTop: "8px" }}>
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-full"
          style={{ display: "block" }}
        >
          <defs>
            <linearGradient id="waveGrad1Br" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0A4A5C" />
              <stop offset="35%" stopColor="#14D8C4" />
              <stop offset="65%" stopColor="#6B7CFF" />
              <stop offset="100%" stopColor="#E8813A" />
            </linearGradient>
            <linearGradient id="waveGrad2Br" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14D8C4" />
              <stop offset="40%" stopColor="#6B7CFF" />
              <stop offset="70%" stopColor="#E8813A" />
              <stop offset="100%" stopColor="#14D8C4" />
            </linearGradient>
            <style>{`
              @keyframes waveMoveBr1 {
                0%   { d: path("M0,80 C240,130 480,20 720,80 C960,140 1200,30 1440,80 L1440,160 L0,160 Z"); }
                25%  { d: path("M0,60 C240,110 480,40 720,60 C960,120 1200,10 1440,60 L1440,160 L0,160 Z"); }
                50%  { d: path("M0,100 C240,50 480,140 720,100 C960,60 1200,150 1440,100 L1440,160 L0,160 Z"); }
                75%  { d: path("M0,70 C240,120 480,30 720,70 C960,130 1200,20 1440,70 L1440,160 L0,160 Z"); }
                100% { d: path("M0,80 C240,130 480,20 720,80 C960,140 1200,30 1440,80 L1440,160 L0,160 Z"); }
              }
              @keyframes waveMoveBr2 {
                0%   { d: path("M0,100 C240,50 480,150 720,100 C960,50 1200,150 1440,100 L1440,160 L0,160 Z"); }
                25%  { d: path("M0,90 C240,140 480,40 720,90 C960,140 1200,40 1440,90 L1440,160 L0,160 Z"); }
                50%  { d: path("M0,70 C240,120 480,20 720,70 C960,20 1200,120 1440,70 L1440,160 L0,160 Z"); }
                75%  { d: path("M0,110 C240,60 480,160 720,110 C960,60 1200,160 1440,110 L1440,160 L0,160 Z"); }
                100% { d: path("M0,100 C240,50 480,150 720,100 C960,50 1200,150 1440,100 L1440,160 L0,160 Z"); }
              }
              @media (prefers-reduced-motion: reduce) {
                path { animation: none !important; }
              }
            `}</style>
          </defs>
          <path
            d="M0,80 C240,130 480,20 720,80 C960,140 1200,30 1440,80 L1440,160 L0,160 Z"
            fill="url(#waveGrad1Br)"
            style={{
              animation: "waveMoveBr1 6s ease-in-out infinite",
              opacity: 0.85,
            }}
          />
          <path
            d="M0,100 C240,50 480,150 720,100 C960,50 1200,150 1440,100 L1440,160 L0,160 Z"
            fill="url(#waveGrad2Br)"
            style={{
              animation: "waveMoveBr2 6s ease-in-out infinite",
              opacity: 0.5,
            }}
          />
        </svg>
      </div>
    </section>
  )
}
