/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        "studious-waddle-rw56p47xggjcx9pv-3000.app.github.dev",
      ],
    },
  },
};

module.exports = nextConfig;
