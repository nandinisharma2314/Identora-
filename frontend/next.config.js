/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "identoraharshika.com",
      },
    ],
  },
  output: "standalone",
};

module.exports = nextConfig;
