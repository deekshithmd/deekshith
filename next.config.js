/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let basePath = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  basePath = `/${repo}`;
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: basePath,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: ["cdn.hashnode.com"],
  },
};

module.exports = nextConfig;
