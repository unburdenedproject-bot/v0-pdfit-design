"use client"

import { Button } from "@/components/ui/button"
import { Crown } from "lucide-react"
import { useRouter } from "next/navigation"

interface TierGateCardProps {
  requiredPlan: "pro" | "business" | "enterprise"
  toolName: string
  pricingUrl: string
}

export function TierGateCard({ requiredPlan, toolName, pricingUrl }: TierGateCardProps) {
  const router = useRouter()

  const tierLabel = requiredPlan === "pro" ? "Pro" : requiredPlan === "business" ? "Business" : "Enterprise"
  const badgeText = requiredPlan === "pro" ? "Most Popular" : requiredPlan === "business" ? "Business Feature" : "Enterprise Feature"
  const badgeBg = requiredPlan === "pro"
    ? "linear-gradient(135deg, #D6B36A, #E0C27A)"
    : requiredPlan === "business"
      ? "linear-gradient(135deg, #6B7CFF, #8B9AFF)"
      : "linear-gradient(135deg, #C0C5CE, #14D8C4)"
  const crownColor = requiredPlan === "pro" ? "#E0C27A" : requiredPlan === "business" ? "#6B7CFF" : "#C0C5CE"
  const glowColor = requiredPlan === "pro" ? "rgba(214,179,106,0.25)" : requiredPlan === "business" ? "rgba(107,124,255,0.3)" : "rgba(192,197,206,0.25)"
  const borderGradient = requiredPlan === "pro"
    ? "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(214,179,106,0.3), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))"
    : requiredPlan === "business"
      ? "linear-gradient(135deg, rgba(107,124,255,0.5), rgba(20,216,196,0.25), rgba(107,124,255,0.35), rgba(232,129,58,0.2), rgba(107,124,255,0.4))"
      : "linear-gradient(135deg, rgba(192,197,206,0.5), rgba(20,216,196,0.3), rgba(192,197,206,0.35), rgba(107,124,255,0.2), rgba(192,197,206,0.4))"
  const innerGlow = requiredPlan === "pro" ? "rgba(214,179,106,0.05)" : requiredPlan === "business" ? "rgba(107,124,255,0.06)" : "rgba(192,197,206,0.06)"

  return (
    <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${innerGlow.replace("0.05", "0.06").replace("0.06", "0.06")} 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto relative">
          <div className="rounded-2xl p-[1px]" style={{ background: borderGradient }}>
            <div className="rounded-[15px] p-8 pt-10 text-center relative overflow-hidden" style={{ background: `radial-gradient(ellipse 40% 30% at 50% 0%, ${innerGlow} 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 4px 24px rgba(0,0,0,0.3)" }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg text-[10px] font-bold uppercase tracking-widest" style={{ background: badgeBg, color: "#0E0F1E" }}>
                {badgeText}
              </div>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: `0 0 20px ${glowColor}, 0 4px 8px rgba(0,0,0,0.2)` }}>
                <Crown className="h-7 w-7" style={{ color: crownColor }} />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">{tierLabel} Feature</h2>
              <p className="text-sm text-slate-400 mb-6">{toolName} is available on the {tierLabel}, {requiredPlan === "enterprise" ? "" : "Business, and "}Enterprise plan{requiredPlan === "enterprise" ? "" : "s"}.</p>
              <Button onClick={() => router.push(pricingUrl)} className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold px-8 py-3 rounded-xl">View Plans</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
