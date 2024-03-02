/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [360, 375, 390, 412, 430, 640, 750, 992, 1080, 1200, 1480, 1600, 1920, 2048, 2600],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 3600,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  compiler: {
    removeConsole: true,
  },
}

module.exports = nextConfig
