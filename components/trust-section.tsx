"use client"

import { useState, useEffect } from "react"
import { Zap, Award, Crown, Lock, Scale, Calculator, Briefcase, GraduationCap, Stethoscope, Building2 } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Lock,
    title: "Zero File Storage",
    description: "Your files are deleted the moment you download. Nothing is ever stored on our servers.",
  },
  {
    icon: Zap,
    title: "Instant Processing",
    description: "Most files convert in under 5 seconds. No installs, no waiting, no signup for free tools.",
  },
  {
    icon: Crown,
    title: "Pro When You Need It",
    description: "Free for basic tasks. Upgrade for unlimited conversions, larger files, OCR, and AI tools.",
  },
  {
    icon: Award,
    title: "Professional Quality",
    description: "Formatting, fonts, images, and layouts stay intact. Built for documents that matter.",
  },
]

const builtFor = [
  { icon: Scale, label: "Law Firms" },
  { icon: Calculator, label: "Accountants" },
  { icon: Briefcase, label: "Consultants" },
  { icon: GraduationCap, label: "Students" },
  { icon: Stethoscope, label: "Healthcare" },
  { icon: Building2, label: "Small Business" },
]

function formatNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
  return num.toString()
}

export function TrustSection() {
  const [stats, setStats] = useState({ totalConversions: 0, totalUsers: 0 })

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(() => {})
  }, [])

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
        {/* Live Stats */}
        <div
          className="rounded-2xl p-6 mb-12"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-black text-[#14D8C4]">
                {stats.totalConversions > 0 ? formatNumber(stats.totalConversions) : "30+"}
              </div>
              <div className="text-sm text-slate-400">
                {stats.totalConversions > 0 ? "Files processed" : "PDF tools"}
              </div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#14D8C4]">7</div>
              <div className="text-sm text-slate-400">AI-powered tools</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#14D8C4]">3</div>
              <div className="text-sm text-slate-400">Languages supported</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#14D8C4]">0s</div>
              <div className="text-sm text-slate-400">Files stored after download</div>
            </div>
          </div>
        </div>

        {/* Built For */}
        <div className="text-center mb-6">
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-2">
            Built for Professionals Who Handle Documents Daily
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto">
            PDF.it is designed for people who can't afford formatting errors, file leaks, or wasted time.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-12 max-w-3xl mx-auto">
          {builtFor.map((item) => (
            <div key={item.label} className="text-center">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2"
                style={{
                  background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                  boxShadow: "0 0 15px rgba(20,216,196,0.15)",
                }}
              >
                <item.icon className="h-5 w-5 text-[#14D8C4]" />
              </div>
              <div className="text-xs font-semibold text-slate-300">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Why PDF.it */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl p-5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{
                  background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                  boxShadow: "0 0 15px rgba(107,124,255,0.2)",
                }}
              >
                <feature.icon className="h-5 w-5 text-[#14D8C4]" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">{feature.title}</h3>
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
