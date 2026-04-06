import * as Sentry from "@sentry/nextjs"

// Only initialize Sentry if DSN is configured
if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    tracesSampleRate: 0.1, // 10% of transactions for performance monitoring
    replaysSessionSampleRate: 0, // Don't record sessions
    replaysOnErrorSampleRate: 0.5, // Record 50% of sessions with errors
    environment: process.env.NODE_ENV,
    // Don't send errors in development
    enabled: process.env.NODE_ENV === "production",
  })
}
