import { readFile, writeFile, unlink } from "fs/promises"
import { join } from "path"
import { randomUUID } from "crypto"
import { logger } from "@/lib/logger"

interface StepConfig {
  taskType: string
  getParams: (params: Record<string, any>) => Record<string, any>
}

interface WorkflowStep {
  tool: string
  params?: Record<string, any>
}

const SUPPORTED_STEPS: Record<string, StepConfig> = {
  flatten: {
    taskType: "pdfa",
    getParams: () => ({ conformance: "pdfa-2b" }),
  },
  compress: {
    taskType: "compress",
    getParams: (params) => ({
      compression_level: params.compression_level || "recommended",
    }),
  },
  watermark: {
    taskType: "watermark",
    getParams: (params) => ({
      mode: "text",
      text: params.text || "CONFIDENTIAL",
      transparency: params.transparency ?? 50,
      font_family: "Arial",
      font_size: params.fontSize || 48,
      font_color: params.fontColor || "#000000",
      rotation: 315,
      vertical_position: "middle",
      horizontal_position: "center",
      layer: "above",
    }),
  },
  rotate: {
    taskType: "rotate",
    getParams: (params) => ({
      rotate: params.rotate || 90,
    }),
  },
  protect: {
    taskType: "protect",
    getParams: (params) => ({
      password: params.password || "",
    }),
  },
}

/**
 * Workflow processor — extracted from app/api/workflow/route.ts
 * Used by the job queue system for async processing.
 *
 * params.steps: WorkflowStep[]
 * params.original_name: string
 */
export async function workflowProcessor(
  tmpPath: string,
  params: Record<string, unknown>,
  onProgress: (pct: number) => void
): Promise<{ outputUrl: string; outputFilename: string }> {
  const publicKey = process.env.ILOVEAPI_PUBLIC_KEY
  const secretKey = process.env.ILOVEAPI_SECRET_KEY

  if (!publicKey || !secretKey) {
    throw new Error("Processing service not configured")
  }

  const steps = (params.steps as WorkflowStep[]) || []
  const originalName = (params.original_name as string) || "input.pdf"

  if (!Array.isArray(steps) || steps.length < 1 || steps.length > 5) {
    throw new Error("Steps must be an array of 1-5 items.")
  }

  // Validate all steps
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i]
    if (!step.tool || !SUPPORTED_STEPS[step.tool]) {
      throw new Error(`Invalid tool "${step.tool}" at step ${i + 1}. Supported: ${Object.keys(SUPPORTED_STEPS).join(", ")}`)
    }
    if (step.tool === "protect" && i !== steps.length - 1) {
      throw new Error("Password protection must be the last step in the workflow.")
    }
  }

  onProgress(10)

  const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default
  const ILovePDFFile = (await import("@ilovepdf/ilovepdf-nodejs/ILovePDFFile")).default

  let currentPath = tmpPath
  const tempFiles: string[] = []

  try {
    for (let i = 0; i < steps.length; i++) {
      const step = steps[i]
      const config = SUPPORTED_STEPS[step.tool]
      const taskParams = config.getParams(step.params || {})

      const instance = new ILovePDFApi(publicKey, secretKey)
      const task = instance.newTask(config.taskType)

      await task.start()
      await task.addFile(new ILovePDFFile(currentPath))
      await task.process(taskParams)

      const data = await task.download()

      const nextPath = join("/tmp", `${randomUUID()}-step${i + 1}.pdf`)
      await writeFile(nextPath, data)
      tempFiles.push(nextPath)

      currentPath = nextPath

      onProgress(10 + Math.floor(((i + 1) / steps.length) * 70))
    }

    // Read final result and upload to Vercel Blob
    const finalData = await readFile(currentPath)

    onProgress(90)

    const { put } = await import("@vercel/blob")
    const baseName = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/g, "")
    const outputFilename = `${baseName}-workflow.pdf`

    const blob = await put(outputFilename, finalData, {
      access: "public",
      contentType: "application/pdf",
    })

    logger.info("workflow_complete", { originalName, steps: steps.length, outputUrl: blob.url })

    return { outputUrl: blob.url, outputFilename }
  } finally {
    // Clean up intermediate temp files (but not tmpPath — the job runner handles that)
    for (const f of tempFiles) {
      await unlink(f).catch(() => {})
    }
  }
}
