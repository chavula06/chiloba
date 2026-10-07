/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: false,
  },
  poweredByHeader: false,
  compress: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
