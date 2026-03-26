import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { Mail, CheckCircle, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SignUpSuccessPageBr() {
  return (
    <div
      className="flex min-h-screen flex-col"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% 0%, rgba(20, 216, 196, 0.12), transparent 60%),
          radial-gradient(ellipse 60% 40% at 80% 100%, rgba(107, 124, 255, 0.08), transparent 50%),
          radial-gradient(ellipse 40% 30% at 20% 80%, rgba(232, 129, 58, 0.04), transparent 50%),
          #0E0F1E
        `,
      }}
    >
      <svg className="pointer-events-none fixed inset-0 w-full h-full z-0" style={{ opacity: 0.04 }}>
        <filter id="successGrainBr"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
        <rect width="100%" height="100%" filter="url(#successGrainBr)" />
      </svg>
      <HeaderBr />
      <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-2xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.5), rgba(107,124,255,0.3), rgba(20,216,196,0.2))" }}>
            <div className="rounded-[15px] p-10 text-center" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.06) 0%, transparent 50%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", boxShadow: "inset 0 1px 1px rgba(20,216,196,0.08), 0 4px 24px rgba(0,0,0,0.3)" }}>
              <div className="relative mx-auto mb-6 w-20 h-20">
                <div className="absolute inset-0 rounded-full" style={{ background: "rgba(20,216,196,0.1)", boxShadow: "0 0 40px rgba(20,216,196,0.2), 0 0 80px rgba(20,216,196,0.1)" }} />
                <div className="relative w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20,216,196,0.3)" }}>
                  <CheckCircle className="h-10 w-10 text-[#14D8C4]" />
                </div>
              </div>
              <h1 className="text-2xl font-black text-white mb-2">Obrigado por se Cadastrar no PDF.it!</h1>
              <p className="text-slate-300 text-base mb-6">Sua conta foi criada com sucesso.</p>
              <div className="rounded-xl p-5 mb-6" style={{ background: "rgba(20,216,196,0.08)", border: "1px solid rgba(20,216,196,0.2)" }}>
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Mail className="h-5 w-5 text-[#14D8C4]" />
                  <span className="text-white font-semibold">Verifique Seu Email</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {"Enviamos um link de confirmação. Clique nele para ativar sua conta e depois faça login para começar a usar suas ferramentas PDF."}
                </p>
              </div>
              <div className="text-left space-y-3 mb-8">
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wider text-center mb-3">O que você ganha com sua conta grátis</p>
                {["10 conversões grátis por dia", "Comprimir, unir, dividir, girar e mais", "Sem cartão de crédito necessário"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-[#14D8C4] flex-shrink-0">&#10003;</span>
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/br/login"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl font-bold text-[#0E0F1E] transition-all duration-200 hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #14D8C4, #0FBFB0)", boxShadow: "0 0 20px rgba(20,216,196,0.4), 0 4px 12px rgba(0,0,0,0.3)" }}
              >
                Ir para Login <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1.5 mt-6">
            <Shield className="h-3.5 w-3.5 text-slate-500" />
            <p className="text-slate-500 text-xs">Seus arquivos nunca são armazenados. Privacidade em primeiro lugar.</p>
          </div>
        </div>
      </main>
      <FooterBr />
    </div>
  )
}
