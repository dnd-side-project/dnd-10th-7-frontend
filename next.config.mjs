/** @type {import('next').NextConfig} */
const nextConfig = {
  // 외부 이미지 불러오기
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: `k.kakaocdn.net`,
      },
      
    ],
  },
};

export default nextConfig;
