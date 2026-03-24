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
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <stat.icon className="h-5 w-5 text-orange-600" />
              </div>
              <div className="text-2xl font-black text-slate-900 mb-0.5">{stat.value}</div>
              <div className="text-xs font-semibold text-slate-700">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="bg-slate-50 rounded-2xl p-6 mb-10 border border-slate-100">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-black text-slate-900">30+</div>
              <div className="text-sm text-slate-600">PDF tools in one place</div>
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">3 Languages</div>
              <div className="text-sm text-slate-600">English, Spanish, Portuguese</div>
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">4 Plans</div>
              <div className="text-sm text-slate-600">Free, Pro, Business, Enterprise</div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-slate-500">
            <span className="bg-white px-3 py-1.5 rounded-full border border-slate-200">Used by legal teams</span>
            <span className="bg-white px-3 py-1.5 rounded-full border border-slate-200">Accounting professionals</span>
            <span className="bg-white px-3 py-1.5 rounded-full border border-slate-200">Research labs</span>
            <span className="bg-white px-3 py-1.5 rounded-full border border-slate-200">Students worldwide</span>
          </div>
        </div>

        {/* Features */}
        <div className="text-center mb-6">
          <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-2 text-balance">
            Why PDF.it
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Online PDF tools with Pro features when you need them — convert, compress, merge, split, and OCR in your browser.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-11 h-11 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <feature.icon className="h-5 w-5 text-orange-500" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">{feature.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-black text-white mb-2 text-balance">Ready to convert your first file?</h3>
            <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto leading-relaxed">
              10 free conversions per day. No account required for free tools. Upgrade anytime for unlimited conversions and larger files.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#tools"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors shadow-lg hover:shadow-xl"
              >
                Start Converting Free
              </a>
              <Link
                href="/pricing"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-all border border-white/20 hover:border-white/40"
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
