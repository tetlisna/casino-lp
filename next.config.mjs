import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ['assets.nintendo.com'],
  // },
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'styles')],
  },
};

export default nextConfig;
