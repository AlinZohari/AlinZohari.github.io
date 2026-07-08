import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: isGithubActions && repo !== "AlinZohari.github.io" ? `/${repo}` : "",
  assetPrefix: isGithubActions && repo !== "AlinZohari.github.io" ? `/${repo}/` : undefined
};

export default nextConfig;
