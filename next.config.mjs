/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
      {
        hostname: "via.placeholder.com",
      },
      {
        hostname: "www.btcgiftshop.xyz",
      },
    ],
  },
  webpack: (config) => {
    config.externals.push('pino-pretty', /* add any other modules that might be causing the error */);
    return config;
  },
  // crossOrigin: 'anonymous', // or 'use-credentials'
  async headers() {
    return [
      {
        // matching all API routes
        // source: "/(.*)",
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Authorization, Date, X-Api-Version" },
        ]
      }
    ]
  }
};

export default nextConfig;
