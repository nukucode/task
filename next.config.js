/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "cdn4.iconfinder.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
