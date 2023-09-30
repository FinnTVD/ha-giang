/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 3600,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cheers-cms.okhub.tech',
            },
        ],
    },
}

module.exports = nextConfig
