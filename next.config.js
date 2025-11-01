/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        'generate-*.html',
        'generate-*.js',
        'create_*.html',
        'blog-thumbnail-generator.html',
      ],
    },
  },
}

module.exports = nextConfig

