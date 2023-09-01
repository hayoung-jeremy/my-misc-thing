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
  webpack: (config, { isServer }) => {
    // 기존의 Webpack 설정들
    config.resolve.fallback = { fs: false };

    // .glsl 파일을 처리하기 위한 loader 설정
    config.module.rules.push({
      test: /\.glsl$/,
      exclude: /node_modules/,
      use: ["raw-loader", "glslify-loader"],
    });

    return config;
  },
};

module.exports = nextConfig;
