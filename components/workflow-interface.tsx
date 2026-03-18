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
import { TrustBadges } from "@/components/trust-badges"

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

function StepConfig({ step, onChange }: { step: WorkflowStep; onChange: (params: Record<string, unknown>) => void }) {
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

export function WorkflowInterface() {
  const router = useRouter()
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
    if (droppedFiles.length > 0) setFile(droppedFiles[0])
  }, [])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }, [])

  const runWorkflow = useCallback(async () => {
    if (!file || steps.length < 2) return

    // Validate protect is last if present
    const protectIndex = steps.findIndex((s) => s.tool === "protect")
    if (protectIndex !== -1 && protectIndex !== steps.length - 1) {
      setValidationMessage("Password protection must be the last step. Please reorder your steps.")
      return
    }

    // Validate watermark has text
    const watermarkStep = steps.find((s) => s.tool === "watermark")
    if (watermarkStep && !(watermarkStep.params.text as string)?.trim()) {
      setValidationMessage("Please enter your watermark text before running the workflow.")
      return
    }

    // Validate protect has password
    const protectStep = steps.find((s) => s.tool === "protect")
    if (protectStep && !(protectStep.params.password as string)?.trim()) {
      setValidationMessage("Please enter a password for the protection step before running the workflow.")
      return
    }

    setIsProcessing(true)
    setHasError(false)
    setValidationMessage("")
    setProcessingStep(0)

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
            router.push("/pricing?source=workflow")
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
    } catch (error) {
      setHasError(true)
      setErrorMessage(error instanceof Error ? error.message : "An unknown error occurred")
      setIsProcessing(false)
    }
  }, [file, steps, router])

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
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Crown className="h-10 w-10 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-4">Business Feature</h2>
            <p className="text-lg text-slate-600 mb-8">
              Workflow Automation is available on the Business plan. Chain multiple PDF tools into one automated workflow.
            </p>
            <Button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl px-8 py-3 text-lg"
              onClick={() => router.push("/pricing?source=workflow")}
            >
              Upgrade to Business — $13.99/mo
            </Button>
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
      router.push("/signup-required")
      return null
    }

    if (isUpgradeError || isLimitError) {
      return (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="h-10 w-10 text-orange-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2">
                {isUpgradeError ? "This Feature Requires an Upgrade" : "You're out of free conversions"}
              </h2>
              <p className="text-xl sm:text-2xl font-bold text-orange-600 mb-4">Upgrade to Business</p>
              <p className="text-base sm:text-lg text-slate-600 mb-8">
                {isUpgradeError
                  ? "This tool is available on the Business plan. Upgrade to unlock unlimited access to all PDF tools."
                  : "Free includes 10 conversions per day. Upgrade for unlimited conversions."}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  onClick={() => router.push("/pricing")}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl px-6 py-3"
                >
                  Upgrade to Business
                </Button>
                <Button
                  onClick={resetInterface}
                  variant="outline"
                  className="border border-slate-200 text-slate-700 rounded-xl px-6 py-3"
                >
                  Go Back
                </Button>
              </div>
            </div>
          </div>
        </section>
      )
    }

    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="h-10 w-10 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Workflow Failed</h2>
            <p className="text-slate-600 mb-8">{errorMessage}</p>
            <Button onClick={resetInterface} className="bg-orange-500 hover:bg-orange-600 text-white">
              Try Again
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Workflow Complete!</h2>
            <p className="text-slate-600 mb-2">
              {steps.length} steps processed successfully.
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
                    <div className="text-sm text-green-600">Ready for download</div>
                  </div>
                </div>
                <Button onClick={downloadResult} className="bg-green-600 hover:bg-green-700 text-white font-bold">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button onClick={resetInterface} variant="outline" className="border-slate-300">
                Run Another Workflow
              </Button>
              <Button onClick={() => (window.location.href = "/")} className="bg-orange-500 hover:bg-orange-600 text-white">
                Back to Tools
              </Button>
            </div>

            <div className="mt-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
                <div className="flex items-center justify-center gap-2 text-blue-800 text-sm">
                  <Shield className="h-4 w-4" />
                  <span className="font-medium">Files are automatically deleted after 1 hour.</span>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Running Workflow...</h2>
            <p className="text-slate-600 mb-8">Processing step {Math.min(processingStep + 1, steps.length)} of {steps.length}</p>

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
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Choose a Preset Workflow</h3>
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
                          Enterprise
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
                  Build Custom Workflow
                </Button>
              </div>
            </div>
          )}

          {/* Step Builder */}
          {showCustom && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">Workflow Steps</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => { setSteps([]); setShowCustom(false) }}
                  className="text-slate-500 text-sm"
                >
                  Back to Presets
                </Button>
              </div>

              {steps.length === 0 && (
                <div className="text-center py-8 border-2 border-dashed border-gray-200 rounded-xl mb-4">
                  <p className="text-slate-500">No steps yet. Add at least 2 steps to create a workflow.</p>
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
                      <StepConfig step={step} onChange={(params) => updateStepParams(index, params)} />
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
              <h3 className="text-lg font-bold text-slate-900 mb-3">Upload Your PDF</h3>

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
                  <p className="text-slate-900 font-bold mb-1">Drop your PDF here</p>
                  <p className="text-sm text-slate-500">or click to browse</p>
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
                  Run Workflow ({steps.length} steps)
                </Button>
              )}
            </div>
          )}

          {showCustom && steps.length < 2 && steps.length > 0 && (
            <p className="text-center text-sm text-amber-600 font-medium mb-4">
              Add at least 2 steps to create a workflow.
            </p>
          )}

          <TrustBadges />
        </div>
      </div>
    </section>
  )
}
