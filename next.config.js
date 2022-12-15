/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["source.unsplash.com", "images.unsplash.com",'images.pexels.com'],
  },
};

module.exports = nextConfig;
