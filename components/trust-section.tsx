import { Shield, Zap, Users, Award, Globe, Gift, Crown } from "lucide-react"
import Link from "next/link"

const stats = [
  { icon: Shield, label: "Security", value: "HTTPS", description: "Secure TLS encrypted transfer" },
  { icon: Zap, label: "Processing Speed", value: "Fast", description: "Seconds for most files" },
  { icon: Globe, label: "Free File Limit", value: "25MB", description: "200MB Pro · 1GB Business" },
  { icon: Gift, label: "Free Conversions", value: "10/day", description: "Unlimited with Pro" },
]

const features = [
  {
    icon: Gift,
    title: "Free to Start",
    description: "10 free conversions per day. No credit card required.",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description: "Convert PDFs in seconds — no installs, no waiting.",
  },
  {
    icon: Crown,
    title: "Pro Features",
    description: "Unlimited conversions, larger files, and access to all tools including OCR, Watermark, and Office to PDF.",
  },
  {
    icon: Award,
    title: "High-Fidelity Output",
    description: "Designed to keep text clear, layouts clean, and formatting intact.",
  },
]

export function TrustSection() {
  return (
    <section
      className="py-16"
      style={{
        background: `
          radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%),
          radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%),
          radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%),
          radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%),
          #0E0F1E
        `,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{
                  background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                  boxShadow: "0 0 20px rgba(20,216,196,0.2)",
                }}
              >
                <stat.icon className="h-5 w-5 text-[#14D8C4]" />
              </div>
              <div className="text-2xl font-black text-white mb-0.5">{stat.value}</div>
              <div className="text-xs font-semibold text-[#14D8C4]">{stat.label}</div>
              <div className="text-xs text-slate-400">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div
          className="rounded-2xl p-6 mb-12"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-black text-white">30+</div>
              <div className="text-sm text-slate-400">PDF tools in one place</div>
            </div>
            <div>
              <div className="text-2xl font-black text-white">3 Languages</div>
              <div className="text-sm text-slate-400">English, Spanish, Portuguese</div>
            </div>
            <div>
              <div className="text-2xl font-black text-white">4 Plans</div>
              <div className="text-sm text-slate-400">Free, Pro, Business, Enterprise</div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-slate-400">
            <span className="px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>Used by legal teams</span>
            <span className="px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>Accounting professionals</span>
            <span className="px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>Research labs</span>
            <span className="px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>Students worldwide</span>
          </div>
        </div>

        {/* Features */}
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-2 text-balance">
            Why PDF.it
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto">
            Online PDF tools with Pro features when you need them — convert, compress, merge, split, and OCR in your browser.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{
                  background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                  boxShadow: "0 0 20px rgba(107,124,255,0.2)",
                }}
              >
                <feature.icon className="h-5 w-5 text-[#14D8C4]" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">{feature.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div
            className="rounded-2xl p-8 max-w-3xl mx-auto"
            style={{
              background: "linear-gradient(135deg, rgba(20,216,196,0.08), rgba(107,124,255,0.06), rgba(232,129,58,0.04))",
              border: "1px solid rgba(20,216,196,0.15)",
              boxShadow: "0 0 40px rgba(20,216,196,0.08), 0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            <h3 className="text-xl font-black text-white mb-2 text-balance">Ready to convert your first file?</h3>
            <p className="text-slate-400 text-sm mb-5 max-w-xl mx-auto leading-relaxed">
              10 free conversions per day. No account required for free tools. Upgrade anytime for unlimited conversions and larger files.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#tools"
                className="font-bold py-2.5 px-6 rounded-xl text-sm transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #14D8C4, #0FBFB0)",
                  color: "#0E0F1E",
                  boxShadow: "0 0 20px rgba(20,216,196,0.4), 0 4px 12px rgba(0,0,0,0.3)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                Start Converting Free
              </a>
              <Link
                href="/pricing"
                className="font-bold py-2.5 px-6 rounded-xl text-sm transition-all duration-300 hover:scale-105 text-white"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                }}
              >
                See Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
