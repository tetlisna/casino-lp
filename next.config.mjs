
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'styles')], // the global folder is inside assets/scss
  },
};

export default nextConfig;