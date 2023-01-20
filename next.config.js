/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.AWS_CDN || "",
        port: "",
        pathname: "/",
      },
    ],
  },
};

module.exports = nextConfig;
