/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gojctraining.com',
      },
    ],
    deviceSizes: [320, 410, 640], // Optimized sizes for desktop/retina/mobile
    imageSizes: [410, 614],       // For local images, e.g., hero display
    formats: ['image/webp'],
  },
  experimental: {
    optimizeCss: true, // ✅ Reduce CSS blocking on FCP
  },
  compiler: {
    removeConsole: true, // ✅ Trim console.log from production
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
