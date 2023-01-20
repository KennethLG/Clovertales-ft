/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [`${process.env.NEXT_PUBLIC_AWS_CDN}`.replace("https://", "")],
  },
};

module.exports = nextConfig;
