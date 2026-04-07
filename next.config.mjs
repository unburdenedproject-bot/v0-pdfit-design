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
    unoptimized: false,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'recharts'],
    serverComponentsExternalPackages: ['pdfjs-dist'],
  },
}

export default nextConfig
