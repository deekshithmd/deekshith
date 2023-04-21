/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    loader: "akamai",
    domains: ["cdn.hashnode.com"],
    path: "",
  },
};

module.exports = nextConfig;
