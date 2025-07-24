/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Optional but recommended

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
    // You can keep `unoptimized: true` if you prefer,
    // but Vercel optimizes images by default
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

module.exports = nextConfig;
