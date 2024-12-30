/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  // Ignore TypeScript build errors
  typescript: {
    ignoreBuildErrors: true,
  },

  // Ignore ESLint build errors
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Additional Next.js configurations can go here
  

};

export default config;
