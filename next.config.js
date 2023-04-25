/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/deekshith",
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
