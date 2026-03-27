import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { Mail, CheckCircle, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SignUpSuccessPageEs() {
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
        <filter id="successGrainEs"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
        <rect width="100%" height="100%" filter="url(#successGrainEs)" />
      </svg>
      <HeaderEs />
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
              <h1 className="text-2xl font-black text-white mb-2">{"¡Gracias por Unirte a PDF.it!"}</h1>
              <p className="text-slate-300 text-base mb-6">Tu cuenta ha sido creada exitosamente.</p>
              <div className="rounded-xl p-5 mb-6" style={{ background: "rgba(20,216,196,0.08)", border: "1px solid rgba(20,216,196,0.2)" }}>
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Mail className="h-5 w-5 text-[#14D8C4]" />
                  <span className="text-white font-semibold">Revisa Tu Correo</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {"Te enviamos un enlace de confirmación. Haz clic en él para activar tu cuenta y luego inicia sesión para comenzar a usar tus herramientas PDF."}
                </p>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                  {"¿No lo ves? Revisa tu carpeta de Spam o Correo no deseado."}
                </p>
              </div>
              <div className="text-left space-y-3 mb-8">
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wider text-center mb-3">Lo que obtienes con tu cuenta gratis</p>
                {["10 conversiones gratis cada día", "Comprimir, unir, dividir, rotar y más", "Sin tarjeta de crédito requerida"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-[#14D8C4] flex-shrink-0">&#10003;</span>
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/es/login"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl font-bold text-[#0E0F1E] transition-all duration-200 hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #14D8C4, #0FBFB0)", boxShadow: "0 0 20px rgba(20,216,196,0.4), 0 4px 12px rgba(0,0,0,0.3)" }}
              >
                {"Ir a Iniciar Sesión"} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1.5 mt-6">
            <Shield className="h-3.5 w-3.5 text-slate-500" />
            <p className="text-slate-500 text-xs">Tus archivos nunca se almacenan. La privacidad es primero.</p>
          </div>
        </div>
      </main>
      <FooterEs />
    </div>
  )
}
