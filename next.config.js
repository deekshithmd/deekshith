/** @type {import('next').NextConfig} */

const pathPrefix = process.env.NODE_ENV === "production" ? "/deekshith" : "";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: ["cdn.hashnode.com"],
  },
  basePath: "/deekshith",
};

module.exports = nextConfig;
