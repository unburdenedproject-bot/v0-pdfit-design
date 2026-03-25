"use client"

import { Shield, Crown, Gift, Sparkles, Target, FilePlus } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      style={{
        background: `
          radial-gradient(ellipse 90% 70% at 50% 15%, rgba(20,216,196,0.18) 0%, transparent 70%),
          radial-gradient(ellipse 60% 60% at 20% 80%, rgba(107,124,255,0.12) 0%, transparent 65%),
          radial-gradient(ellipse 50% 50% at 75% 35%, rgba(107,124,255,0.06) 0%, transparent 65%),
          #0E0F1E
        `,
      }}
      className="relative text-white pt-16 lg:pt-24 overflow-hidden"
    >
      {/* Grain texture overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.05 }}>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge links */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Link
              href="/ats-optimizer"
              className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-teal-300 hover:bg-teal-400/20 transition-colors"
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

          {/* Headline */}
          <h1
            className="mb-4 leading-tight"
            style={{ fontSize: "clamp(40px, 7vw, 64px)", fontWeight: 900, letterSpacing: "-2px" }}
          >
            <span className="text-white block">Fix Any PDF Problem</span>
            <span style={{ color: "#14D8C4" }} className="block">Instantly.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="mb-8 max-w-xl mx-auto"
            style={{ fontSize: "18px", color: "#6A7299", lineHeight: "1.6" }}
          >
            No login. No install. Files deleted immediately after use.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a
              href="#tools"
              style={{
                background: "#14D8C4",
                color: "#0E0F1E",
                fontWeight: 800,
                border: "none",
                boxShadow: "0 0 24px rgba(20, 216, 196, 0.45)",
              }}
              className="py-3.5 px-8 rounded-xl text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:opacity-90"
            >
              Start for free →
            </a>
            <Link
              href="/tools"
              style={{
                background: "transparent",
                color: "#ffffff",
                border: "1.5px solid #252A6A",
                fontWeight: 600,
              }}
              className="py-3.5 px-8 rounded-xl text-lg transition-all duration-300 hover:border-teal-400/60"
            >
              See all tools
            </Link>
          </div>

          {/* Trust icons */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm font-semibold text-slate-300">
            <div className="flex items-center gap-2">
              <Gift className="h-4 w-4 text-green-400" />
              <span>10 free conversions/day</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-sky-300" />
              <span>AI Resume Builder + ATS Optimizer</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" style={{ color: "#14D8C4" }} />
              <span>Files auto-deleted after use</span>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="h-4 w-4 text-purple-400" />
              <span>Pro: Unlimited Access</span>
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
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#191B4D" />
              <stop offset="35%" stopColor="#14D8C4" />
              <stop offset="65%" stopColor="#6B7CFF" />
              <stop offset="100%" stopColor="#191B4D" />
            </linearGradient>
            <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14D8C4" />
              <stop offset="40%" stopColor="#6B7CFF" />
              <stop offset="70%" stopColor="#191B4D" />
              <stop offset="100%" stopColor="#14D8C4" />
            </linearGradient>
            <style>{`
              @keyframes waveMove1 {
                0%   { d: path("M0,80 C240,130 480,20 720,80 C960,140 1200,30 1440,80 L1440,160 L0,160 Z"); }
                25%  { d: path("M0,60 C240,110 480,40 720,60 C960,120 1200,10 1440,60 L1440,160 L0,160 Z"); }
                50%  { d: path("M0,100 C240,50 480,140 720,100 C960,60 1200,150 1440,100 L1440,160 L0,160 Z"); }
                75%  { d: path("M0,70 C240,120 480,30 720,70 C960,130 1200,20 1440,70 L1440,160 L0,160 Z"); }
                100% { d: path("M0,80 C240,130 480,20 720,80 C960,140 1200,30 1440,80 L1440,160 L0,160 Z"); }
              }
              @keyframes waveMove2 {
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
            fill="url(#waveGrad1)"
            style={{
              animation: "waveMove1 6s ease-in-out infinite",
              opacity: 0.85,
            }}
          />
          <path
            d="M0,100 C240,50 480,150 720,100 C960,50 1200,150 1440,100 L1440,160 L0,160 Z"
            fill="url(#waveGrad2)"
            style={{
              animation: "waveMove2 6s ease-in-out infinite",
              opacity: 0.5,
            }}
          />
        </svg>
      </div>
    </section>
  )
}
