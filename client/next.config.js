/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
    largePageDataBytes: 128 * 100000,
  },
};

module.exports = nextConfig;
