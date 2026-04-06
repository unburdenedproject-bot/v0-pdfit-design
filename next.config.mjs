import { withSentryConfig } from "@sentry/nextjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/ocr-pdf',
        destination: '/ocr-scanner',
        permanent: true,
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'recharts'],
    serverComponentsExternalPackages: ['pdfjs-dist'],
  },
}

// Only wrap with Sentry if DSN is configured — otherwise export plain config
const sentryEnabled = !!process.env.NEXT_PUBLIC_SENTRY_DSN

export default sentryEnabled
  ? withSentryConfig(nextConfig, {
      // Sentry build options
      silent: true, // Don't log Sentry build output
      disableSourceMapUpload: true, // We'll enable this later when org is configured
    })
  : nextConfig
