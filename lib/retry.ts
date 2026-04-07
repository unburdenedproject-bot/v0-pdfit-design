/**
 * Retry a function with exponential backoff.
 * Used for transient failures from external APIs (iLoveAPI, CloudConvert, etc.)
 */
export async function withRetry<T>(
  fn: () => Promise<T>,
  options?: {
    maxRetries?: number
    baseDelayMs?: number
    retryableErrors?: (err: unknown) => boolean
  }
): Promise<T> {
  const maxRetries = options?.maxRetries ?? 3
  const baseDelay = options?.baseDelayMs ?? 1000
  const isRetryable =
    options?.retryableErrors ??
    ((err: unknown) => {
      if (err instanceof Error) {
        const msg = err.message.toLowerCase()
        // Retry on timeouts, rate limits, and server errors
        return (
          msg.includes("timeout") ||
          msg.includes("econnreset") ||
          msg.includes("econnrefused") ||
          msg.includes("socket hang up") ||
          msg.includes("429") ||
          msg.includes("502") ||
          msg.includes("503") ||
          msg.includes("504")
        )
      }
      return false
    })

  let lastError: unknown

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn()
    } catch (err) {
      lastError = err

      if (attempt === maxRetries || !isRetryable(err)) {
        throw err
      }

      // Exponential backoff with jitter
      const delay = baseDelay * Math.pow(2, attempt) + Math.random() * 500
      console.log(
        `[retry] Attempt ${attempt + 1}/${maxRetries} failed, retrying in ${Math.round(delay)}ms`
      )
      await new Promise((r) => setTimeout(r, delay))
    }
  }

  throw lastError
}
