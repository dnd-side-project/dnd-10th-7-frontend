"use client";

import { useGetUserData } from "@component/hooks/useMyPage";
import Title from "@component/components/common-components/title/Title";
import Carousel from "./Carousel";

function LandingMid() {
  const { data: userData } = useGetUserData();
  const nickname = userData?.data?.data?.nickname;

  let accessToken: string | null = "";
  if (typeof window !== "undefined") {
    accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
      // nickname = localStorage.getItem("nickname");
    }
  }

  return (
    <div className="w-[1080px]">
      {nickname ? (
        // 로그인 한 유저
        <Title>{nickname}님이 관심있을 만한 프로젝트</Title>
      ) : (
        // 로그인 하지 않은 유저
        <Title>지금 인기있는 프로젝트</Title>
      )}

      <Carousel />
    </div>
  );
}

export default LandingMid;
