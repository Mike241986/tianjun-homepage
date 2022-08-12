module.exports = {
  reactStrictMode: true,
  // not working when pushing to vercel
  swcMinify: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
