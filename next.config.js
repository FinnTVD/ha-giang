/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cheers.okhub.tech',
      },
    ],
  },
  reactStrictMode: true,
  viewportMeta: {
    width: 'device-width',
    initialScale: '1.0',
    maximumScale: '1.0',
  },
}

module.exports = nextConfig
