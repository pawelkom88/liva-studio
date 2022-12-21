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
      "c1.staticflickr.com",
      "c2.staticflickr.com",
      "c3.staticflickr.com",
      "c4.staticflickr.com",
      "c5.staticflickr.com",
      "c6.staticflickr.com",
      "c7.staticflickr.com",
      "c8.staticflickr.com",
      "images.ctfassets.net",
      "scontent.flhr6-1.fna.fbcdn.net",
    ],
  },
};

module.exports = nextConfig;
