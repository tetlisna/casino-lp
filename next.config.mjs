import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.nintendo.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'cdn2.unrealengine.com',
      },
      {
        protocol: 'https',
        hostname: 'www.zelda.com',
      },
      {
        protocol: 'https',
        hostname: 'www.cyberpunk.net',
      },
      {
        protocol: 'https',
        hostname: 'www.playstation.com',
      },
      {
        protocol: 'https',
        hostname: 'www.epicgames.com',
      },
      {
        protocol: 'https',
        hostname: 'www.minecraft.net',
      },
      {
        protocol: 'https',
        hostname: 'playoverwatch.com',
      },
      {
        protocol: 'https',
        hostname: 'www.darksouls3.com',
      }
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
