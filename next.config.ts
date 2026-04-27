import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Avoid inferring ~/package-lock.json as the monorepo root (breaks tracing / tooling).
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
