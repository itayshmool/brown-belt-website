import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/brown-belt-website",
  images: { unoptimized: true },
};

export default nextConfig;
