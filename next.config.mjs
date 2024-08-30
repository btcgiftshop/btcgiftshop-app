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
        // source: "/(.*)",
        // headers: [
        //   {
        //     key: "Cross-Origin-Opener-Policy",
        //     value: "same-origin-allow-popups"
        //   },
        // ],
        source: "/api/(.*)",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" }
        ],
      },
    ];
  },
};

export default nextConfig;
