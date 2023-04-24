/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: ["cdn.hashnode.com"],
    loader: "akamai",
    path: "",
  },
  assetPrefix: "./",
};

module.exports = nextConfig;
