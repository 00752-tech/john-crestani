/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gojctraining.com',
      },
    ],
    deviceSizes: [320, 410, 640, 1024], // add 1024 for hero/video container
    imageSizes: [220, 410, 614],        // add any specific avatar or card widths (220 from testimonial)
    formats: ['image/webp'],
  },
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
