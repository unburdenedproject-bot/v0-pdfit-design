import { ShieldCheck, LockKeyhole, Trash2, Monitor } from "lucide-react"

export function TrustBadges() {
  const items = [
    {
      icon: ShieldCheck,
      label: "SECURE PROCESSING",
      text: "Your file is protected during conversion",
    },
    {
      icon: LockKeyhole,
      label: "ENCRYPTED UPLOADS",
      text: "Encrypted transfer (TLS/HTTPS)",
    },
    {
      icon: Trash2,
      label: "AUTO-DELETE",
      text: "Files are removed after processing",
    },
    {
      icon: Monitor,
      label: "BROWSER-BASED",
      text: "No installs — works in your browser",
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 mt-10">
      <div className="border-t border-slate-200 pt-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
          {items.map(({ icon: Icon, label, text }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
                <Icon className="h-6 w-6 text-slate-900" strokeWidth={1.75} aria-hidden="true" />
              </div>

              <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-800">
                {label}
              </div>

              <div className="text-[13px] font-medium text-slate-600 leading-snug max-w-[220px]">
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
