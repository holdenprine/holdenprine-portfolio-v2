import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const configDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Avoid inferring ~/package-lock.json as the monorepo root (breaks tracing / tooling).
  outputFileTracingRoot: path.join(configDir),
};

export default nextConfig;
