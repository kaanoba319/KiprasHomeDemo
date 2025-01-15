/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Static Export
  experimental: {
    appDir: true, // Yeni "app" yapısını etkinleştirir
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
