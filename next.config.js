/** @type {import('next').NextConfig} */
const nextConfig = {
  // Clean standard Next.js config - no export mode
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true 
  },
};

module.exports = nextConfig;
