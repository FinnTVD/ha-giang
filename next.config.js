/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [360, 390, 420, 640, 750, 828, 992, 1080, 1200, 1480, 1600, 1920, 2048, 3840],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 3600,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'cheers.okhub.tech',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'ha-giang-tour.s3-accelerate.amazonaws.com',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'ha-giang-tour.s3.ap-southeast-1.amazonaws.com',
      // },
      { protocol: 'https', hostname: '**' },
    ],
  },
  // images: {
  //   loader: 'custom',
  //   loaderFile: './loader.js',
  // },
}

module.exports = nextConfig
