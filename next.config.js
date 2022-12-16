/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "scontent.flhr6-1.fna.fbcdn.net",
      "source.unsplash.com",
      "images.unsplash.com",
      "images.pexels.com",
    ],
  },
};

module.exports = nextConfig;
