/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [360, 375, 390, 412, 430, 768, 992, 1080, 1200, 1480, 1600, 1920, 2048, 2600],
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
