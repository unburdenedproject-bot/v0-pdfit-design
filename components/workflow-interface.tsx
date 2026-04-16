"use client"

import { useState, useCallback, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Upload, FileText, X, Download, CheckCircle, Loader2, AlertCircle,
  Shield, Crown, Layers, Droplets, Lock, RotateCw, ChevronUp, ChevronDown,
  Plus, Trash2, FileArchiveIcon as Compress, Play,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { uploadFileToBlob, deleteBlobUrl } from "@/lib/upload-to-blob"
import { getSizeLimitLabel } from "@/lib/client-file-validator"
import { trackToolEvent, classifyError } from "@/lib/analytics"
import { SoftErrorCard, isUserInputError } from "@/components/processing/soft-error-card"
import { TrustBadges } from "@/components/trust-badges"

type ToolLocale = "en" | "es" | "br"

const WORKFLOW_COPY = {
  en: {
    pricingPath: "/pricing",
    pricingSourcePath: "/pricing?source=workflow",
    signupPath: "/signup-required",
    homePath: "/",
    businessFeature: "Business Feature",
    businessDescription: "Workflow Automation is available on the Business plan. Chain multiple PDF tools into one automated workflow.",
    upgradeButton: "Upgrade to Business — $13.99/mo",
    upgradeTitle: "This Feature Requires an Upgrade",
    limitTitle: "You're out of free conversions",
    upgradeLabel: "Upgrade to Business",
    upgradeDescription: "This tool is available on the Business plan. Upgrade to unlock unlimited access to all PDF tools.",
    limitDescription: "Free includes 10 conversions per day. Upgrade for unlimited conversions.",
    goBack: "Go Back",
    failedTitle: "Workflow Failed",
    tryAgain: "Try Again",
    completeTitle: "Workflow Complete!",
    readyForDownload: "Ready for download",
    download: "Download",
    runAnother: "Run Another Workflow",
    backToTools: "Back to Tools",
    filesDeleted: "Files are automatically deleted after download.",
    runningTitle: "Running Workflow...",
    processingStep: "Processing step {current} of {total}",
    choosePreset: "Choose a Preset Workflow",
    enterprise: "Enterprise",
    buildCustom: "Build Custom Workflow",
    workflowSteps: "Workflow Steps",
    backToPresets: "Back to Presets",
    noSteps: "No steps yet. Add at least 2 steps to create a workflow.",
    uploadPdf: "Upload Your PDF",
    dropPdf: "Drop your PDF here",
    browse: "or click to browse",
    addTwoSteps: "Add at least 2 steps to create a workflow.",
    runWorkflow: "Run Workflow ({count} steps)",
    workflowSuccess: "{count} steps processed successfully.",
    unknownError: "An unknown error occurred",
    protectLast: "Password protection must be the last step. Please reorder your steps.",
    watermarkRequired: "Please enter your watermark text before running the workflow.",
    passwordRequired: "Please enter a password for the protection step before running the workflow.",
  },
  es: {
    pricingPath: "/es/precios",
    pricingSourcePath: "/es/precios?source=workflow",
    signupPath: "/es/registro-requerido",
    homePath: "/es",
    businessFeature: "Función Business",
    businessDescription: "Automatización de Flujos está disponible en el plan Business. Encadena varias herramientas PDF en un flujo automatizado.",
    upgradeButton: "Mejorar a Business — $13.99/mes",
    upgradeTitle: "Esta función requiere una mejora",
    limitTitle: "Ya no tienes conversiones gratis",
    upgradeLabel: "Mejorar a Business",
    upgradeDescription: "Esta herramienta está disponible en el plan Business. Mejora para desbloquear acceso ilimitado a todas las herramientas PDF.",
    limitDescription: "Free incluye 10 conversiones por día. Mejora para conversiones ilimitadas.",
    goBack: "Volver",
    failedTitle: "El flujo falló",
    tryAgain: "Intentar de nuevo",
    completeTitle: "¡Flujo completado!",
    readyForDownload: "Listo para descargar",
    download: "Descargar",
    runAnother: "Ejecutar otro flujo",
    backToTools: "Volver a herramientas",
    filesDeleted: "Los archivos se eliminan automáticamente después de 1 hora.",
    runningTitle: "Ejecutando flujo...",
    processingStep: "Procesando paso {current} de {total}",
    choosePreset: "Elige un flujo predefinido",
    enterprise: "Enterprise",
    buildCustom: "Crear flujo personalizado",
    workflowSteps: "Pasos del flujo",
    backToPresets: "Volver a predefinidos",
    noSteps: "Todavía no hay pasos. Agrega al menos 2 pasos para crear un flujo.",
    uploadPdf: "Sube tu PDF",
    dropPdf: "Suelta tu PDF aquí",
    browse: "o haz clic para explorar",
    addTwoSteps: "Agrega al menos 2 pasos para crear un flujo.",
    runWorkflow: "Ejecutar flujo ({count} pasos)",
    workflowSuccess: "{count} pasos procesados correctamente.",
    unknownError: "Ocurrió un error desconocido",
    protectLast: "La protección con contraseña debe ser el último paso. Reordena los pasos.",
    watermarkRequired: "Ingresa el texto de la marca de agua antes de ejecutar el flujo.",
    passwordRequired: "Ingresa una contraseña para el paso de protección antes de ejecutar el flujo.",
  },
  br: {
    pricingPath: "/br/precos",
    pricingSourcePath: "/br/precos?source=workflow",
    signupPath: "/br/cadastro-obrigatorio",
    homePath: "/br",
    businessFeature: "Recurso Business",
    businessDescription: "Automação de Fluxos está disponível no plano Business. Encadeie várias ferramentas PDF em um fluxo automatizado.",
    upgradeButton: "Fazer upgrade para Business — $13.99/mês",
    upgradeTitle: "Este recurso exige upgrade",
    limitTitle: "Você ficou sem conversões gratuitas",
    upgradeLabel: "Fazer upgrade para Business",
    upgradeDescription: "Esta ferramenta está disponível no plano Business. Faça upgrade para desbloquear acesso ilimitado a todas as ferramentas PDF.",
    limitDescription: "Free inclui 10 conversões por dia. Faça upgrade para conversões ilimitadas.",
    goBack: "Voltar",
    failedTitle: "O fluxo falhou",
    tryAgain: "Tentar novamente",
    completeTitle: "Fluxo concluído!",
    readyForDownload: "Pronto para download",
    download: "Baixar",
    runAnother: "Executar outro fluxo",
    backToTools: "Voltar para ferramentas",
    filesDeleted: "Os arquivos são excluídos automaticamente após 1 hora.",
    runningTitle: "Executando fluxo...",
    processingStep: "Processando etapa {current} de {total}",
    choosePreset: "Escolha um fluxo predefinido",
    enterprise: "Enterprise",
    buildCustom: "Criar fluxo personalizado",
    workflowSteps: "Etapas do fluxo",
    backToPresets: "Voltar para predefinidos",
    noSteps: "Ainda não há etapas. Adicione pelo menos 2 etapas para criar um fluxo.",
    uploadPdf: "Envie seu PDF",
    dropPdf: "Solte seu PDF aqui",
    browse: "ou clique para procurar",
    addTwoSteps: "Adicione pelo menos 2 etapas para criar um fluxo.",
    runWorkflow: "Executar fluxo ({count} etapas)",
    workflowSuccess: "{count} etapas processadas com sucesso.",
    unknownError: "Ocorreu um erro desconhecido",
    protectLast: "A proteção por senha deve ser a última etapa. Reordene as etapas.",
    watermarkRequired: "Digite o texto da marca d'água antes de executar o fluxo.",
    passwordRequired: "Digite uma senha para a etapa de proteção antes de executar o fluxo.",
  },
} as const

function formatCopy(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ""))
}

interface WorkflowStep {
  tool: string
  params: Record<string, unknown>
}

interface PresetWorkflow {
  id: string
  name: string
  description: string
  steps: WorkflowStep[]
  enterpriseOnly?: boolean
}

const TOOL_OPTIONS = [
  { value: "flatten", label: "Flatten PDF", icon: Layers, description: "Lock form fields and annotations" },
  { value: "compress", label: "Compress PDF", icon: Compress, description: "Reduce file size" },
  { value: "watermark", label: "Add Watermark", icon: Droplets, description: "Stamp text on every page" },
  { value: "rotate", label: "Rotate Pages", icon: RotateCw, description: "Change page orientation" },
  { value: "protect", label: "Password Protect", icon: Lock, description: "Must be the last step" },
]

const PRESET_WORKFLOWS: PresetWorkflow[] = [
  {
    id: "upload-ready-pro",
    name: "Upload-Ready Pro",
    description: "Flatten forms and compress for portal uploads",
    steps: [
      { tool: "flatten", params: {} },
      { tool: "compress", params: { compression_level: "recommended" } },
    ],
  },
  {
    id: "secure-share",
    name: "Secure Share",
    description: "Compress, watermark, and password-protect for safe sharing",
    steps: [
      { tool: "compress", params: { compression_level: "recommended" } },
      { tool: "watermark", params: { text: "CONFIDENTIAL", transparency: 50 } },
      { tool: "protect", params: { password: "" } },
    ],
  },
  {
    id: "clean-compress",
    name: "Clean & Compress",
    description: "Flatten all elements and reduce to minimum size",
    steps: [
      { tool: "flatten", params: {} },
      { tool: "compress", params: { compression_level: "extreme" } },
    ],
  },
  {
    id: "branded-pdf",
    name: "Branded PDF",
    description: "Add your watermark then compress for distribution",
    steps: [
      { tool: "watermark", params: { text: "", transparency: 30 } },
      { tool: "compress", params: { compression_level: "recommended" } },
    ],
  },
  // Enterprise-only templates
  {
    id: "legal-doc-prep",
    name: "Legal Document Prep",
    description: "Flatten, compress, mark confidential, and lock with password",
    enterpriseOnly: true,
    steps: [
      { tool: "flatten", params: {} },
      { tool: "compress", params: { compression_level: "recommended" } },
      { tool: "watermark", params: { text: "CONFIDENTIAL", transparency: 40 } },
      { tool: "protect", params: { password: "" } },
    ],
  },
  {
    id: "court-filing",
    name: "Court Filing Ready",
    description: "Flatten forms and compress to meet court upload requirements",
    enterpriseOnly: true,
    steps: [
      { tool: "flatten", params: {} },
      { tool: "compress", params: { compression_level: "extreme" } },
    ],
  },
  {
    id: "invoice-archive",
    name: "Invoice Archive",
    description: "Flatten, compress to minimum size, and password-protect for storage",
    enterpriseOnly: true,
    steps: [
      { tool: "flatten", params: {} },
      { tool: "compress", params: { compression_level: "extreme" } },
      { tool: "protect", params: { password: "" } },
    ],
  },
  {
    id: "draft-review",
    name: "Draft for Review",
    description: "Mark as DRAFT with watermark and compress for easy sharing",
    enterpriseOnly: true,
    steps: [
      { tool: "watermark", params: { text: "DRAFT", transparency: 50 } },
      { tool: "compress", params: { compression_level: "recommended" } },
    ],
  },
  {
    id: "lab-report",
    name: "Lab Report Finalize",
    description: "Flatten data, add lab watermark, compress, and protect",
    enterpriseOnly: true,
    steps: [
      { tool: "flatten", params: {} },
      { tool: "watermark", params: { text: "", transparency: 25 } },
      { tool: "compress", params: { compression_level: "recommended" } },
      { tool: "protect", params: { password: "" } },
    ],
  },
]

function StepConfig({ step, onChange, locale }: { step: WorkflowStep; onChange: (params: Record<string, unknown>) => void; locale: ToolLocale }) {
  if (step.tool === "compress") {
    return (
      <div className="mt-2">
        <label className="text-xs text-slate-500 block mb-1">Compression Level</label>
        <select
          value={(step.params.compression_level as string) || "recommended"}
          onChange={(e) => onChange({ ...step.params, compression_level: e.target.value })}
          className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 w-full"
        >
          <option value="low">Low (better quality)</option>
          <option value="recommended">Recommended</option>
          <option value="extreme">Extreme (smallest size)</option>
        </select>
      </div>
    )
  }

  if (step.tool === "watermark") {
    return (
      <div className="mt-2 space-y-2">
        <div>
          <label className="text-xs text-slate-500 block mb-1">Watermark Text</label>
          <input
            type="text"
            value={(step.params.text as string) || ""}
            onChange={(e) => onChange({ ...step.params, text: e.target.value })}
            placeholder="e.g. CONFIDENTIAL"
            className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 w-full"
          />
        </div>
        <div>
          <label className="text-xs text-slate-500 block mb-1">Transparency ({step.params.transparency ?? 50}%)</label>
          <input
            type="range"
            min="10"
            max="90"
            value={(step.params.transparency as number) ?? 50}
            onChange={(e) => onChange({ ...step.params, transparency: Number(e.target.value) })}
            className="w-full"
          />
        </div>
        <div>
          <label className="text-xs text-slate-500 block mb-1">Color</label>
          <input
            type="color"
            value={(step.params.fontColor as string) || "#000000"}
            onChange={(e) => onChange({ ...step.params, fontColor: e.target.value })}
            className="h-8 w-16 border border-gray-200 rounded-lg cursor-pointer"
          />
        </div>
      </div>
    )
  }

  if (step.tool === "rotate") {
    return (
      <div className="mt-2">
        <label className="text-xs text-slate-500 block mb-1">Rotation</label>
        <select
          value={(step.params.rotate as number) || 90}
          onChange={(e) => onChange({ ...step.params, rotate: Number(e.target.value) })}
          className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 w-full"
        >
          <option value={90}>90° clockwise</option>
          <option value={180}>180°</option>
          <option value={270}>270° clockwise</option>
        </select>
      </div>
    )
  }

  if (step.tool === "protect") {
    return (
      <div className="mt-2">
        <label className="text-xs text-slate-500 block mb-1">Password</label>
        <input
          type="text"
          value={(step.params.password as string) || ""}
          onChange={(e) => onChange({ ...step.params, password: e.target.value })}
          placeholder="Enter password"
          className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 w-full"
        />
      </div>
    )
  }

  // Flatten has no config
  return null
}

export function WorkflowInterface({ locale = "en" }: { locale?: ToolLocale }) {
  const router = useRouter()
  const copy = WORKFLOW_COPY[locale]
  const [userPlan, setUserPlan] = useState<string>("free")
  const [steps, setSteps] = useState<WorkflowStep[]>([])
  const [file, setFile] = useState<File | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [processingStep, setProcessingStep] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [validationMessage, setValidationMessage] = useState("")
  const [resultUrl, setResultUrl] = useState("")
  const [resultName, setResultName] = useState("")
  const [showCustom, setShowCustom] = useState(false)

  const isBusinessUser = userPlan === "business" || userPlan === "enterprise"

  useEffect(() => {
    fetch("/api/user-plan")
      .then((res) => res.json())
      .then((data) => setUserPlan(data.plan || "free"))
      .catch(() => setUserPlan("free"))
  }, [])

  const selectPreset = useCallback((preset: PresetWorkflow) => {
    setSteps(preset.steps.map((s) => ({ ...s, params: { ...s.params } })))
    setShowCustom(true)
  }, [])

  const addStep = useCallback((tool: string) => {
    const defaultParams: Record<string, Record<string, unknown>> = {
      flatten: {},
      compress: { compression_level: "recommended" },
      watermark: { text: "CONFIDENTIAL", transparency: 50 },
      rotate: { rotate: 90 },
      protect: { password: "" },
    }
    setSteps((prev) => [...prev, { tool, params: { ...defaultParams[tool] } }])
  }, [])

  const removeStep = useCallback((index: number) => {
    setSteps((prev) => prev.filter((_, i) => i !== index))
  }, [])

  const moveStep = useCallback((index: number, direction: "up" | "down") => {
    setSteps((prev) => {
      const newSteps = [...prev]
      const targetIndex = direction === "up" ? index - 1 : index + 1
      if (targetIndex < 0 || targetIndex >= newSteps.length) return prev
      ;[newSteps[index], newSteps[targetIndex]] = [newSteps[targetIndex], newSteps[index]]
      return newSteps
    })
  }, [])

  const updateStepParams = useCallback((index: number, params: Record<string, unknown>) => {
    setSteps((prev) => prev.map((s, i) => (i === index ? { ...s, params } : s)))
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    const droppedFiles = Array.from(e.dataTransfer.files)
    if (droppedFiles.length > 0) {
      const f = droppedFiles[0]
      trackToolEvent("workflow", "file_selected", {
        tier: userPlan,
        file_size_mb: f.size / (1024 * 1024),
        file_type: f.type || "pdf",
      })
      setFile(f)
    }
  }, [userPlan])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const f = e.target.files[0]
      trackToolEvent("workflow", "file_selected", {
        tier: userPlan,
        file_size_mb: f.size / (1024 * 1024),
        file_type: f.type || "pdf",
      })
      setFile(f)
    }
  }, [userPlan])

  const runWorkflow = useCallback(async () => {
    if (!file || steps.length < 2) return

    // Validate protect is last if present
    const protectIndex = steps.findIndex((s) => s.tool === "protect")
    if (protectIndex !== -1 && protectIndex !== steps.length - 1) {
      setValidationMessage(copy.protectLast)
      return
    }

    // Validate watermark has text
    const watermarkStep = steps.find((s) => s.tool === "watermark")
    if (watermarkStep && !(watermarkStep.params.text as string)?.trim()) {
      setValidationMessage(copy.watermarkRequired)
      return
    }

    // Validate protect has password
    const protectStep = steps.find((s) => s.tool === "protect")
    if (protectStep && !(protectStep.params.password as string)?.trim()) {
      setValidationMessage(copy.passwordRequired)
      return
    }

    setIsProcessing(true)
    setHasError(false)
    setValidationMessage("")
    setProcessingStep(0)

    const t0 = Date.now()
    trackToolEvent("workflow", "process_start", {
      tier: userPlan,
      file_size_mb: file.size / (1024 * 1024),
      step_count: steps.length,
    })

    try {
      // Upload file
      const inputUrl = await uploadFileToBlob(file)

      // Simulate per-step progress
      const stepInterval = setInterval(() => {
        setProcessingStep((prev) => Math.min(prev + 1, steps.length - 1))
      }, 5000)

      const response = await fetch("/api/workflow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          blobUrl: inputUrl,
          originalName: file.name,
          steps,
        }),
      })

      clearInterval(stepInterval)
      setProcessingStep(steps.length)

      if (!response.ok) {
        let message = `Workflow failed (HTTP ${response.status})`
        try {
          const errorData = await response.json()
          if (errorData.error) message = errorData.error
          if (message.includes("upgrade_required")) {
            router.push(copy.pricingSourcePath)
            return
          }
        } catch { }
        throw new Error(message)
      }

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const baseName = file.name.replace(/\.[^/.]+$/, "")
      setResultUrl(url)
      setResultName(`${baseName}-workflow.pdf`)
      setIsComplete(true)
      setIsProcessing(false)
      trackToolEvent("workflow", "process_complete", {
        tier: userPlan,
        latency_ms: Date.now() - t0,
      })
    } catch (error) {
      const msg = error instanceof Error ? error.message : copy.unknownError
      setHasError(true)
      setErrorMessage(msg)
      trackToolEvent("workflow", "process_error", {
        tier: userPlan,
        latency_ms: Date.now() - t0,
        error_type: classifyError(undefined, msg),
      })
      setIsProcessing(false)
    }
  }, [copy.passwordRequired, copy.pricingSourcePath, copy.protectLast, copy.unknownError, copy.watermarkRequired, file, router, steps, userPlan])

  const downloadResult = useCallback(() => {
    const link = document.createElement("a")
    link.href = resultUrl
    link.download = resultName
    link.style.display = "none"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [resultUrl, resultName])

  const resetInterface = useCallback(() => {
    if (resultUrl) URL.revokeObjectURL(resultUrl)
    setFile(null)
    setSteps([])
    setIsProcessing(false)
    setIsComplete(false)
    setHasError(false)
    setErrorMessage("")
    setResultUrl("")
    setResultName("")
    setShowCustom(false)
    setProcessingStep(0)
  }, [resultUrl])

  // Not a Business user — show upgrade prompt
  if (!isBusinessUser && userPlan !== "loading") {
    return (
      <section className="py-16" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(192,197,206,0.05) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(20,216,196,0.04) 0%, transparent 50%), #0E0F1E" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto relative">
            <div className="rounded-2xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(192,197,206,0.5), rgba(20,216,196,0.3), rgba(192,197,206,0.35), rgba(107,124,255,0.2), rgba(192,197,206,0.4))" }}>
              <div className="rounded-[15px] p-8 pt-10 text-center relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(192,197,206,0.06) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(192,197,206,0.03) 0%, transparent 60%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 1px 1px rgba(192,197,206,0.08), 0 4px 24px rgba(0,0,0,0.3)" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg text-[10px] font-bold uppercase tracking-widest" style={{ background: "linear-gradient(135deg, #C0C5CE, #14D8C4)", color: "#0E0F1E" }}>Enterprise Feature</div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(192,197,206,0.25), 0 0 40px rgba(20,216,196,0.1), 0 4px 8px rgba(0,0,0,0.2)" }}>
                  <Crown className="h-7 w-7 text-[#C0C5CE]" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{copy.businessFeature}</h2>
                <p className="text-sm text-slate-400 mb-6">{copy.businessDescription}</p>
                <Button onClick={() => router.push(copy.pricingSourcePath)} className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold px-8 py-3 rounded-xl">{copy.upgradeButton}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Error state
  if (hasError) {
    const isUpgradeError = (errorMessage || "").includes("upgrade_required")
    const isLimitError = (errorMessage || "").toLowerCase().includes("daily limit reached") || (errorMessage || "").includes("daily_limit_reached")
    const isSignupError = (errorMessage || "").includes("signup_required")

    if (isSignupError) {
      router.push(copy.signupPath)
      return null
    }

    if (isUpgradeError || isLimitError) {
      return (
        <section className="py-16" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(192,197,206,0.05) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(20,216,196,0.04) 0%, transparent 50%), #0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto relative">
              <div className="rounded-2xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(192,197,206,0.5), rgba(20,216,196,0.3), rgba(192,197,206,0.35), rgba(107,124,255,0.2), rgba(192,197,206,0.4))" }}>
                <div className="rounded-[15px] p-8 pt-10 text-center relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(192,197,206,0.06) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(192,197,206,0.03) 0%, transparent 60%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 1px 1px rgba(192,197,206,0.08), 0 4px 24px rgba(0,0,0,0.3)" }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg text-[10px] font-bold uppercase tracking-widest" style={{ background: "linear-gradient(135deg, #C0C5CE, #14D8C4)", color: "#0E0F1E" }}>Enterprise Feature</div>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(192,197,206,0.25), 0 0 40px rgba(20,216,196,0.1), 0 4px 8px rgba(0,0,0,0.2)" }}>
                    <Crown className="h-7 w-7 text-[#C0C5CE]" />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    {isUpgradeError ? copy.upgradeTitle : copy.limitTitle}
                  </h2>
                  <p className="text-sm text-slate-400 mb-6">
                    {isUpgradeError ? copy.upgradeDescription : copy.limitDescription}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button onClick={() => router.push(copy.pricingPath)} className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold px-8 py-3 rounded-xl">{copy.upgradeLabel}</Button>
                    <Button onClick={resetInterface} variant="outline" className="border border-slate-500 text-slate-300 hover:text-white rounded-xl px-6 py-3">{copy.goBack}</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }

    if (isUserInputError(errorMessage)) {
      return <SoftErrorCard errorMessage={errorMessage} onReset={resetInterface} />
    }

    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="h-10 w-10 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{copy.failedTitle}</h2>
            <p className="text-slate-600 mb-8">{errorMessage}</p>
            <Button onClick={resetInterface} className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E]">
              {copy.tryAgain}
            </Button>
          </div>
        </div>
      </section>
    )
  }

  // Success state
  if (isComplete) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{copy.completeTitle}</h2>
            <p className="text-slate-600 mb-2">
              {formatCopy(copy.workflowSuccess, { count: steps.length })}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {steps.map((s, i) => {
                const toolInfo = TOOL_OPTIONS.find((t) => t.value === s.tool)
                return (
                  <span key={i} className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                    {i + 1}. {toolInfo?.label}
                  </span>
                )
              })}
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-green-600" />
                  <div className="text-left">
                    <div className="font-bold text-slate-900">{resultName}</div>
                    <div className="text-sm text-green-600">{copy.readyForDownload}</div>
                  </div>
                </div>
                <Button onClick={downloadResult} className="bg-green-600 hover:bg-green-700 text-white font-bold">
                  <Download className="h-4 w-4 mr-2" />
                  {copy.download}
                </Button>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button onClick={resetInterface} variant="outline" className="border-slate-300">
                {copy.runAnother}
              </Button>
              <Button onClick={() => (window.location.href = copy.homePath)} className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E]">
                {copy.backToTools}
              </Button>
            </div>

            <div className="mt-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
                <div className="flex items-center justify-center gap-2 text-blue-800 text-sm">
                  <Shield className="h-4 w-4" />
                  <span className="font-medium">{copy.filesDeleted}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Processing state
  if (isProcessing) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Loader2 className="h-10 w-10 text-indigo-600 animate-spin" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{copy.runningTitle}</h2>
            <p className="text-slate-600 mb-8">{formatCopy(copy.processingStep, { current: Math.min(processingStep + 1, steps.length), total: steps.length })}</p>

            <div className="space-y-3 max-w-md mx-auto">
              {steps.map((s, i) => {
                const toolInfo = TOOL_OPTIONS.find((t) => t.value === s.tool)
                const Icon = toolInfo?.icon || FileText
                return (
                  <div key={i} className={cn(
                    "flex items-center gap-3 p-3 rounded-lg border",
                    i < processingStep ? "bg-green-50 border-green-200 text-green-700" :
                    i === processingStep ? "bg-indigo-50 border-indigo-200 text-indigo-700" :
                    "bg-gray-50 border-gray-200 text-slate-400"
                  )}>
                    {i < processingStep ? <CheckCircle className="h-5 w-5 flex-shrink-0" /> :
                     i === processingStep ? <Loader2 className="h-5 w-5 animate-spin flex-shrink-0" /> :
                     <Icon className="h-5 w-5 flex-shrink-0" />}
                    <span className="font-medium text-sm">{i + 1}. {toolInfo?.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Main interface — presets + step builder + file upload
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Preset Workflows */}
          {!showCustom && (
            <div className="mb-10">
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">{copy.choosePreset}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {PRESET_WORKFLOWS
                  .filter((preset) => !preset.enterpriseOnly || userPlan === "enterprise")
                  .map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => selectPreset(preset)}
                    className={cn(
                      "text-left border rounded-xl p-5 transition-all",
                      preset.enterpriseOnly
                        ? "border-amber-300 bg-amber-50/30 hover:border-amber-400 hover:bg-amber-50/60"
                        : "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/40"
                    )}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="font-bold text-slate-900">{preset.name}</div>
                      {preset.enterpriseOnly && (
                        <span className="bg-amber-500 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                          {copy.enterprise}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-500 mb-3">{preset.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {preset.steps.map((s, i) => {
                        const toolInfo = TOOL_OPTIONS.find((t) => t.value === s.tool)
                        return (
                          <span key={i} className={cn(
                            "text-[10px] font-bold px-2 py-0.5 rounded-full",
                            preset.enterpriseOnly
                              ? "bg-amber-100 text-amber-700"
                              : "bg-indigo-100 text-indigo-700"
                          )}>
                            {toolInfo?.label}
                          </span>
                        )
                      })}
                    </div>
                  </button>
                ))}
              </div>
              <div className="text-center">
                <Button
                  variant="outline"
                  onClick={() => setShowCustom(true)}
                  className="border-slate-300 text-slate-700"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  {copy.buildCustom}
                </Button>
              </div>
            </div>
          )}

          {/* Step Builder */}
          {showCustom && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">{copy.workflowSteps}</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => { setSteps([]); setShowCustom(false) }}
                  className="text-slate-500 text-sm"
                >
                  {copy.backToPresets}
                </Button>
              </div>

              {steps.length === 0 && (
                <div className="text-center py-8 border-2 border-dashed border-gray-200 rounded-xl mb-4">
                  <p className="text-slate-500">{copy.noSteps}</p>
                </div>
              )}

              <div className="space-y-3 mb-4">
                {steps.map((step, index) => {
                  const toolInfo = TOOL_OPTIONS.find((t) => t.value === step.tool)
                  const Icon = toolInfo?.icon || FileText
                  return (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                            {index + 1}
                          </div>
                          <Icon className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                          <div>
                            <div className="font-bold text-slate-900 text-sm">{toolInfo?.label}</div>
                            <div className="text-xs text-slate-500">{toolInfo?.description}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => moveStep(index, "up")}
                            disabled={index === 0}
                            className="p-1 text-slate-400 hover:text-slate-600 disabled:opacity-30"
                          >
                            <ChevronUp className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => moveStep(index, "down")}
                            disabled={index === steps.length - 1}
                            className="p-1 text-slate-400 hover:text-slate-600 disabled:opacity-30"
                          >
                            <ChevronDown className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => removeStep(index)}
                            className="p-1 text-red-400 hover:text-red-600 ml-1"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <StepConfig step={step} onChange={(params) => updateStepParams(index, params)} locale={locale} />
                    </div>
                  )
                })}
              </div>

              {/* Add Step */}
              {steps.length < 5 && (
                <div className="flex flex-wrap gap-2">
                  {TOOL_OPTIONS.map((tool) => (
                    <Button
                      key={tool.value}
                      variant="outline"
                      size="sm"
                      onClick={() => addStep(tool.value)}
                      className="border-gray-200 text-slate-700 text-xs"
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      {tool.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* File Upload */}
          {showCustom && steps.length >= 2 && (
            <div className="mb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-3">{copy.uploadPdf}</h3>

              {!file ? (
                <div
                  className={cn(
                    "border-2 border-dashed rounded-xl p-8 transition-all duration-200 cursor-pointer text-center",
                    isDragOver ? "border-indigo-500 bg-indigo-50" : "border-gray-300 hover:border-indigo-400 hover:bg-gray-50"
                  )}
                  onDragOver={(e) => { e.preventDefault(); setIsDragOver(true) }}
                  onDragLeave={(e) => { e.preventDefault(); setIsDragOver(false) }}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById("workflow-file-upload")?.click()}
                >
                  <Upload className="h-10 w-10 text-indigo-500 mx-auto mb-3" />
                  <p className="text-slate-900 font-bold mb-1">{copy.dropPdf}</p>
                  <p className="text-sm text-slate-500">{copy.browse}</p>
                  <p className="text-xs text-slate-400 mt-3">PDF only &middot; up to {getSizeLimitLabel(userPlan)}</p>
                </div>
              ) : (
                <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-indigo-500" />
                    <div>
                      <div className="font-medium text-slate-900">{file.name}</div>
                      <div className="text-sm text-slate-500">{(file.size / 1024 / 1024).toFixed(1)} MB</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setFile(null)} className="text-slate-400 hover:text-slate-600">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              )}

              <input
                id="workflow-file-upload"
                type="file"
                accept=".pdf"
                className="hidden"
                onClick={(e) => { (e.target as HTMLInputElement).value = "" }}
                onChange={handleFileSelect}
              />

              {validationMessage && (
                <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-800">{validationMessage}</p>
                </div>
              )}

              {file && (
                <Button
                  onClick={runWorkflow}
                  className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg py-3"
                  size="lg"
                >
                  <Play className="h-5 w-5 mr-2" />
                  {formatCopy(copy.runWorkflow, { count: steps.length })}
                </Button>
              )}
            </div>
          )}

          {showCustom && steps.length < 2 && steps.length > 0 && (
            <p className="text-center text-sm text-amber-600 font-medium mb-4">
              {copy.addTwoSteps}
            </p>
          )}

          <TrustBadges />
        </div>
      </div>
    </section>
  )
}
