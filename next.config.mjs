/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 외부 이미지 불러오기
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: `k.kakaocdn.net`,
      },
      {
        protocol: "https",
        hostname: `s3.ap-northeast-2.amazonaws.com`,
      },
      {
        protocol: "https",
        hostname: `chillin-bucket.s3.ap-northeast-2.amazonaws.com`,
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
