/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ Enables static HTML export

  basePath: '/portfolio', // ✅ Required for GitHub Pages under a subpath
  assetPrefix: '/portfolio',

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
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

module.exports = nextConfig;
