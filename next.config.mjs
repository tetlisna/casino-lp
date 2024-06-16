import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
      },
      {
        protocol: 'https',
        hostname: '"www.freetogame.com"',
      },
    ],
  },
  sassOptions: {
    images: {
      domains: ['assets.nintendo.com'],
    },
    includePaths: [path.join(process.cwd(), 'styles')],
  },
};

export default nextConfig;
