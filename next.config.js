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
      {
        protocol: 'https',
        hostname: 'ha-giang-tour.s3-accelerate.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig
