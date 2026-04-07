/**
 * Wrap an async operation with a timeout.
 * Throws if the operation takes longer than the specified duration.
 * Use to prevent serverless functions from hitting the 300s Vercel limit
 * without cleanup.
 */
export async function withTimeout<T>(
  fn: () => Promise<T>,
  timeoutMs: number,
  timeoutMessage = "Operation timed out"
): Promise<T> {
  let timeoutId: ReturnType<typeof setTimeout>

  const timeoutPromise = new Promise<never>((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error(timeoutMessage))
    }, timeoutMs)
  })

  try {
    const result = await Promise.race([fn(), timeoutPromise])
    clearTimeout(timeoutId!)
    return result
  } catch (err) {
    clearTimeout(timeoutId!)
    throw err
  }
}

/** Default timeout: 4 minutes (leaves 1 minute buffer before 300s Vercel limit) */
export const API_TIMEOUT_MS = 240_000
