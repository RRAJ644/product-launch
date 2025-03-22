import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: [
      'randomuser.me',
      'images.unsplash.com',
      'i.giphy.com',
      'media.giphy.com',
      'via.placeholder.com',
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
