/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "swiperjs.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack5: true,
  webpack: config => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

module.exports = nextConfig;
