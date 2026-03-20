import { Shield, ArrowRight, Crown, Gift, Sparkles, Target, FilePlus } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-14 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-5">
            <Link
              href="/ats-optimizer"
              className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-orange-200 hover:bg-orange-500/20 transition-colors"
            >
              <Target className="h-3.5 w-3.5" />
              New AI ATS Resume Optimizer
            </Link>
            <Link
              href="/create-resume"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-100 hover:bg-white/15 transition-colors"
            >
              <FilePlus className="h-3.5 w-3.5" />
              New AI Resume Builder
            </Link>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-4 leading-tight text-balance">
            PDF Tools Built for Legal, Accounting, Business Teams <span className="text-orange-500">and for Your Everyday Student</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-6 font-medium leading-relaxed max-w-3xl mx-auto text-pretty">
            Compress, convert, extract tables, sign, and redact - in English, Spanish, and Portuguese. Now with AI ATS resume optimization and an AI resume builder.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm font-semibold">
            <div className="flex items-center gap-2">
              <Gift className="h-4 w-4 text-green-400" />
              <span>10 free conversions/day</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-sky-300" />
              <span>AI Resume Builder + ATS Optimizer</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-orange-500" />
              <span>Files auto-deleted after use</span>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="h-4 w-4 text-purple-400" />
              <span>Pro: Unlimited Access</span>
            </div>
          </div>

          <p className="text-sm text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Get 10 free conversions per day. Upgrade for unlimited access, larger files, and AI resume tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#tools"
              className="group bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
            >
              Start Converting Free
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/pricing"
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-3.5 px-8 rounded-xl text-lg transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center gap-2"
            >
              View Pricing
              <Crown className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
