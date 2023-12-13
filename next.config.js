/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  images: {
    remotePatterns: [
      {
        hostname: "*",
        pathname: "/**",
      },
    ],
  },
};
=======
    images: {
        dangerouslyAllowSVG: true,
        domains: ['api.dicebear.com']
    },
}
>>>>>>> UI

module.exports = nextConfig;
