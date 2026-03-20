"use client"

import { useMemo, useRef, useState } from "react"
import { Check, Eraser, ImagePlus, Loader2, PenLine, RotateCcw, Type, Undo2 } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { SignaturePad, type SignaturePadHandle } from "@/components/esign/signature-pad"
import { SIGNATURE_COLORS, TYPED_SIGNATURE_VARIANTS, blobToDataUrl, createTypedSignatureSvg, exportUploadPreviewToBlob, getBlobImageDimensions, normalizeSignatureText, svgMarkupToPngBlob, svgToDataUrl } from "@/lib/esign/signature-utils"
import type { SignatureKind, SignatureMethod, SignatureSessionAsset } from "@/lib/esign/types"

type SignatureTab = "type" | "draw" | "upload"

interface CreateSignatureModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSaved: (signature: SignatureSessionAsset) => void
}

export function CreateSignatureModal({ open, onOpenChange, onSaved }: CreateSignatureModalProps) {
  const padRef = useRef<SignaturePadHandle>(null)

  const [activeTab, setActiveTab] = useState<SignatureTab>("type")
  const [signatureKind, setSignatureKind] = useState<SignatureKind>("signature")
  const [typedValue, setTypedValue] = useState("")
  const [selectedVariantId, setSelectedVariantId] = useState(TYPED_SIGNATURE_VARIANTS[0].id)
  const [selectedColor, setSelectedColor] = useState(SIGNATURE_COLORS[0].value)
  const [strokeWidth, setStrokeWidth] = useState(2.2)
  const [uploadPreview, setUploadPreview] = useState("")
  const [uploadScale, setUploadScale] = useState(1)
  const [uploadOffsetX, setUploadOffsetX] = useState(0)
  const [uploadOffsetY, setUploadOffsetY] = useState(0)
  const [consentChecked, setConsentChecked] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState("")

  const currentVariant = useMemo(
    () => TYPED_SIGNATURE_VARIANTS.find((variant) => variant.id === selectedVariantId) ?? TYPED_SIGNATURE_VARIANTS[0],
    [selectedVariantId]
  )
  const normalizedTypedValue = useMemo(
    () => normalizeSignatureText(typedValue, signatureKind),
    [typedValue, signatureKind]
  )

  const typedPreviewMarkup = useMemo(() => {
    if (!normalizedTypedValue) return ""
    return createTypedSignatureSvg({
      text: normalizedTypedValue,
      color: selectedColor,
      strokeWidth,
      variant: currentVariant,
      width: 640,
      height: 220,
    })
  }, [normalizedTypedValue, selectedColor, strokeWidth, currentVariant])

  const typedPreviewUrl = typedPreviewMarkup ? svgToDataUrl(typedPreviewMarkup) : ""

  const resetState = () => {
    setActiveTab("type")
    setSignatureKind("signature")
    setTypedValue("")
    setSelectedVariantId(TYPED_SIGNATURE_VARIANTS[0].id)
    setSelectedColor(SIGNATURE_COLORS[0].value)
    setStrokeWidth(2.2)
    setUploadPreview("")
    setUploadScale(1)
    setUploadOffsetX(0)
    setUploadOffsetY(0)
    setConsentChecked(false)
    setIsSaving(false)
    setError("")
  }

  const handleClose = (nextOpen: boolean) => {
    onOpenChange(nextOpen)
    if (!nextOpen) resetState()
  }

  const handleUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!["image/png", "image/jpeg", "image/jpg", "image/webp"].includes(file.type)) {
      setError("Please upload a PNG, JPG, JPEG, or WEBP signature image.")
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      setUploadPreview(reader.result as string)
      setUploadScale(1)
      setUploadOffsetX(0)
      setUploadOffsetY(0)
      setError("")
    }
    reader.readAsDataURL(file)
  }

  const saveCurrentSignature = async () => {
    setError("")
    setIsSaving(true)

    try {
      let pngBlob: Blob
      let method: SignatureMethod
      let svgMarkup: string | undefined
      let fontFamily: string | undefined
      let width = 640
      let height = 220
      let metadata: Record<string, unknown> = {}

      if (activeTab === "type") {
        if (!normalizedTypedValue || !typedPreviewMarkup) {
          throw new Error(signatureKind === "signature" ? "Enter your full name to create a signature." : "Enter initials to create initials.")
        }
        pngBlob = await svgMarkupToPngBlob(typedPreviewMarkup, width, height)
        method = "typed"
        svgMarkup = typedPreviewMarkup
        fontFamily = currentVariant.fontFamily
        metadata = {
          typed_text: normalizedTypedValue,
          variant_id: currentVariant.id,
          variant_label: currentVariant.label,
        }
      } else if (activeTab === "draw") {
        if (!padRef.current?.hasSignature()) {
          throw new Error(`Draw your ${signatureKind} before continuing.`)
        }
        const drawnAsset = await padRef.current.exportSignature()
        pngBlob = drawnAsset.pngBlob
        svgMarkup = drawnAsset.svgMarkup
        method = "drawn"
        width = drawnAsset.width
        height = drawnAsset.height
      } else {
        if (!uploadPreview) {
          throw new Error(`Upload an image of your ${signatureKind} before continuing.`)
        }
        pngBlob = await exportUploadPreviewToBlob({
          source: uploadPreview,
          scale: uploadScale,
          offsetX: uploadOffsetX,
          offsetY: uploadOffsetY,
        })
        method = "uploaded"
        metadata = {
          upload_scale: uploadScale,
          upload_offset_x: uploadOffsetX,
          upload_offset_y: uploadOffsetY,
        }
      }

      const assetDimensions = await getBlobImageDimensions(pngBlob)
      width = assetDimensions.width
      height = assetDimensions.height
      const assetUrl = await blobToDataUrl(pngBlob)
      const createdAt = new Date().toISOString()
      const signature: SignatureSessionAsset = {
        id: crypto.randomUUID(),
        kind: signatureKind,
        method,
        assetUrl,
        previewUrl: activeTab === "type" ? typedPreviewUrl || assetUrl : assetUrl,
        assetMime: "image/png",
        width,
        height,
        aspectRatio: Number((width / height).toFixed(4)),
        color: method === "uploaded" ? undefined : selectedColor,
        fontFamily,
        strokeWidth,
        svgMarkup,
        createdAt,
        metadata,
      }

      onSaved(signature)
      handleClose(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to prepare signature.")
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-5xl max-h-[92vh] p-0 overflow-hidden">
        <DialogHeader className="border-b border-slate-200 px-6 py-5">
          <DialogTitle className="text-2xl font-black text-slate-900">Create Signature</DialogTitle>
          <DialogDescription className="text-slate-600">
            Create an electronic signature or initials for this PDF. OmniSPDF does not store signature data after your session.
          </DialogDescription>
        </DialogHeader>

        <div className="grid max-h-[calc(92vh-88px)] gap-0 overflow-y-auto lg:max-h-[calc(92vh-88px)] lg:grid-cols-[1.3fr_0.7fr] lg:overflow-hidden">
          <div className="border-b border-slate-200 px-6 py-5 lg:overflow-y-auto lg:border-b-0 lg:border-r">
            <div className="inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1 mb-5">
              {(["signature", "initials"] as SignatureKind[]).map((kind) => (
                <button
                  key={kind}
                  type="button"
                  onClick={() => setSignatureKind(kind)}
                  className={cn(
                    "rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
                    signatureKind === kind ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                  )}
                >
                  {kind === "signature" ? "Signature" : "Initials"}
                </button>
              ))}
            </div>

            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as SignatureTab)}>
              <TabsList className="grid w-full grid-cols-3 bg-slate-100">
                <TabsTrigger value="type" className="gap-2">
                  <Type className="h-4 w-4" />
                  Type
                </TabsTrigger>
                <TabsTrigger value="draw" className="gap-2">
                  <PenLine className="h-4 w-4" />
                  Draw
                </TabsTrigger>
                <TabsTrigger value="upload" className="gap-2">
                  <ImagePlus className="h-4 w-4" />
                  Upload
                </TabsTrigger>
              </TabsList>

              <TabsContent value="type" className="mt-5 space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    {signatureKind === "signature" ? "Full name" : "Initials"}
                  </label>
                  <Input
                    value={typedValue}
                    onChange={(event) => setTypedValue(event.target.value)}
                    placeholder={signatureKind === "signature" ? "Enter your full name" : "Enter your initials"}
                    className="h-12 text-base"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-slate-700">Ink color</p>
                    <div className="flex gap-2">
                      {SIGNATURE_COLORS.map((color) => (
                        <button
                          key={color.id}
                          type="button"
                          onClick={() => setSelectedColor(color.value)}
                          className={cn(
                            "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
                            selectedColor === color.value ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                          )}
                        >
                          <span className="h-3 w-3 rounded-full border border-white/40" style={{ backgroundColor: color.value }} />
                          {color.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="w-full md:w-48 space-y-2">
                    <p className="text-sm font-semibold text-slate-700">Stroke weight</p>
                    <Slider value={[strokeWidth]} min={1.4} max={4} step={0.2} onValueChange={(values) => setStrokeWidth(values[0] ?? 2.2)} />
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {TYPED_SIGNATURE_VARIANTS.map((variant) => {
                    const variantSvg = normalizedTypedValue
                      ? createTypedSignatureSvg({
                          text: normalizedTypedValue,
                          color: selectedColor,
                          strokeWidth,
                          variant,
                          width: 520,
                          height: 160,
                        })
                      : ""
                    return (
                      <button
                        key={variant.id}
                        type="button"
                        onClick={() => setSelectedVariantId(variant.id)}
                        className={cn(
                          "rounded-2xl border bg-white p-4 text-left transition-all",
                          selectedVariantId === variant.id ? "border-slate-900 ring-2 ring-slate-900/10 shadow-sm" : "border-slate-200 hover:border-slate-300"
                        )}
                      >
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wide text-slate-500">{variant.label}</span>
                          {selectedVariantId === variant.id && <Check className="h-4 w-4 text-slate-900" />}
                        </div>
                        <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-3 py-5 min-h-[112px] flex items-center justify-center">
                          {variantSvg ? (
                            <img src={svgToDataUrl(variantSvg)} alt={variant.label} className="max-h-20 w-auto" />
                          ) : (
                            <span className="text-sm text-slate-400">Enter {signatureKind === "signature" ? "your name" : "your initials"} to preview</span>
                          )}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </TabsContent>

              <TabsContent value="draw" className="mt-5 space-y-5">
                <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-slate-700">Ink color</p>
                    <div className="flex gap-2">
                      {SIGNATURE_COLORS.map((color) => (
                        <button
                          key={color.id}
                          type="button"
                          onClick={() => setSelectedColor(color.value)}
                          className={cn(
                            "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
                            selectedColor === color.value ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                          )}
                        >
                          <span className="h-3 w-3 rounded-full border border-white/40" style={{ backgroundColor: color.value }} />
                          {color.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="w-full md:w-48 space-y-2">
                    <p className="text-sm font-semibold text-slate-700">Stroke weight</p>
                    <Slider value={[strokeWidth]} min={1.6} max={4.8} step={0.2} onValueChange={(values) => setStrokeWidth(values[0] ?? 2.2)} />
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <SignaturePad
                    ref={padRef}
                    color={selectedColor}
                    strokeWidth={strokeWidth}
                    className="w-full rounded-xl border border-dashed border-slate-300 bg-slate-50 touch-none"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button type="button" variant="outline" onClick={() => padRef.current?.undo()} className="gap-2">
                    <Undo2 className="h-4 w-4" />
                    Undo
                  </Button>
                  <Button type="button" variant="outline" onClick={() => padRef.current?.clear()} className="gap-2">
                    <Eraser className="h-4 w-4" />
                    Clear
                  </Button>
                  <Button type="button" variant="outline" onClick={() => padRef.current?.clear()} className="gap-2">
                    <RotateCcw className="h-4 w-4" />
                    Retry
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="upload" className="mt-5 space-y-5">
                <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                  <label className="cursor-pointer">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white border border-slate-200">
                      <ImagePlus className="h-5 w-5 text-slate-600" />
                    </div>
                    <p className="font-semibold text-slate-900">Upload a signature image</p>
                    <p className="mt-1 text-sm text-slate-500">PNG, JPG, JPEG, or WEBP. Transparent PNG works best.</p>
                    <input type="file" accept="image/png,image/jpeg,image/jpg,image/webp" className="hidden" onChange={handleUploadFile} />
                  </label>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-slate-700">Scale</p>
                    <Slider value={[uploadScale]} min={0.7} max={2.2} step={0.05} onValueChange={(values) => setUploadScale(values[0] ?? 1)} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-slate-700">Horizontal fit</p>
                    <Slider value={[uploadOffsetX]} min={-180} max={180} step={2} onValueChange={(values) => setUploadOffsetX(values[0] ?? 0)} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-slate-700">Vertical fit</p>
                    <Slider value={[uploadOffsetY]} min={-90} max={90} step={2} onValueChange={(values) => setUploadOffsetY(values[0] ?? 0)} />
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="mb-2 text-sm font-semibold text-slate-700">Preview area</div>
                  <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-xl border border-dashed border-slate-300 bg-slate-50">
                    {uploadPreview ? (
                      <img
                        src={uploadPreview}
                        alt="Uploaded signature preview"
                        className="pointer-events-none max-w-none"
                        style={{
                          transform: `translate(${uploadOffsetX}px, ${uploadOffsetY}px) scale(${uploadScale})`,
                        }}
                      />
                    ) : (
                      <span className="text-sm text-slate-400">Upload an image to adjust fit and scale.</span>
                    )}
                  </div>
                  <p className="mt-3 text-xs text-slate-500">
                    White background removal is not applied automatically. Transparent PNGs will keep their transparency.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <aside className="bg-slate-50 px-6 py-5 lg:overflow-y-auto">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Document Preview</h3>
              <p className="text-sm text-slate-500 mb-4">
                This signature is prepared locally in your browser and used only for the current PDF signing session.
              </p>

              <div className="mb-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 min-h-[200px] flex items-center justify-center p-4">
                {activeTab === "type" && typedPreviewUrl ? (
                  <img src={typedPreviewUrl} alt="Typed signature preview" className="max-h-28 w-auto" />
                ) : activeTab === "upload" && uploadPreview ? (
                  <img
                    src={uploadPreview}
                    alt="Uploaded signature preview"
                    className="max-h-28 w-auto"
                    style={{ transform: `translate(${uploadOffsetX * 0.3}px, ${uploadOffsetY * 0.3}px) scale(${uploadScale})` }}
                  />
                ) : activeTab === "draw" ? (
                  <span className="text-sm text-slate-400 text-center">Your drawn {signatureKind} will be trimmed locally with a transparent background.</span>
                ) : (
                  <span className="text-sm text-slate-400 text-center">Create a {signatureKind} to preview it here before placing it on the document.</span>
                )}
              </div>

              <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-800">Electronic signature confirmation</p>
                <div className="flex items-start gap-3">
                  <Checkbox id="signature-consent" checked={consentChecked} onCheckedChange={(value) => setConsentChecked(Boolean(value))} />
                  <label htmlFor="signature-consent" className="text-sm leading-6 text-slate-600">
                    By saving this signature, you agree to use it as your electronic signature.
                  </label>
                </div>
                <p className="text-xs text-slate-500">
                  OmniSPDF does not store this signature. It is generated in-session so you can place it directly on the current document.
                </p>
              </div>

              {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}

              <div className="mt-5 flex flex-col gap-3">
                <Button onClick={saveCurrentSignature} disabled={!consentChecked || isSaving} className="h-11 bg-slate-900 hover:bg-slate-800 text-white">
                  {isSaving ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Preparing {signatureKind}
                    </>
                  ) : (
                    `Use ${signatureKind}`
                  )}
                </Button>
                <Button variant="outline" onClick={() => handleClose(false)} disabled={isSaving}>
                  Cancel
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </DialogContent>
    </Dialog>
  )
}
