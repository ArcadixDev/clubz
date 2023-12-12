/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
