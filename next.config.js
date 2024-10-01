/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: true,
  },
}

module.exports = nextConfig
