/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/task-manager',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig