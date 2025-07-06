/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gojctraining.com',
      },
    ],
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
