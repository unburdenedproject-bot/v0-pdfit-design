import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { FileText, Shield } from "lucide-react"

export default function SignupRequiredPageBr() {
  return (
    <div
      className="flex min-h-screen flex-col"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% 0%, rgba(20, 216, 196, 0.12), transparent 60%),
          radial-gradient(ellipse 60% 40% at 80% 100%, rgba(107, 124, 255, 0.08), transparent 50%),
          #0E0F1E
        `,
      }}
    >
      <svg className="pointer-events-none fixed inset-0 w-full h-full z-0" style={{ opacity: 0.04 }}>
        <filter id="signupReqGrainBr"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
        <rect width="100%" height="100%" filter="url(#signupReqGrainBr)" />
      </svg>
      <HeaderBr />
      <main className="relative z-10 flex flex-1 items-center justify-center py-16 px-4">
        <div className="max-w-md w-full">
          <div className="rounded-2xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(20,216,196,0.2))" }}>
            <div className="rounded-[15px] p-10 text-center" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.06) 0%, transparent 50%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", boxShadow: "inset 0 1px 1px rgba(20,216,196,0.08), 0 4px 24px rgba(0,0,0,0.3)" }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20,216,196,0.3)" }}>
                <FileText className="h-8 w-8 text-[#14D8C4]" />
              </div>
              <h1 className="text-2xl font-black text-white mb-2">Crie uma Conta para Continuar</h1>
              <p className="text-slate-400 mb-8">{"Não é necessário cartão de crédito. Receba 10 conversões grátis por dia."}</p>
              <Link
                href="/br/cadastro"
                className="block w-full py-3 px-6 rounded-xl text-center font-bold transition-all duration-200 hover:scale-[1.02] mb-3"
                style={{ background: "linear-gradient(135deg, #14D8C4, #0FBFB0)", color: "#0E0F1E", boxShadow: "0 0 20px rgba(20,216,196,0.4), 0 4px 12px rgba(0,0,0,0.3)" }}
              >
                Criar Conta Grátis
              </Link>
              <Link
                href="/br/login"
                className="block w-full py-3 px-6 rounded-xl text-center font-bold text-slate-300 border border-white/15 hover:border-white/30 hover:text-white transition-colors"
              >
                Entrar
              </Link>
              <p className="text-xs text-slate-500 mt-6">
                {"Você precisará reenviar seu arquivo — removemos os uploads automaticamente."}
              </p>
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
