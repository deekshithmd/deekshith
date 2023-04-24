/** @type {import('next').NextConfig} */

const pathPrefix = process.env.NODE_ENV === "production" ? "/deekshith" : "";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: pathPrefix,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: ["cdn.hashnode.com"],
  },
};

module.exports = nextConfig;
