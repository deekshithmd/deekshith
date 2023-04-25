/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    loader: "akamai",
    path: "/",
    domains: ["cdn.hashnode.com"],
  },
};

module.exports = nextConfig;
