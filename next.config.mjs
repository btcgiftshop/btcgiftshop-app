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
};

export default nextConfig;
