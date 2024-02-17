'use client'

import LadingTop from "@component/components/landing/carousel/LandingTop";
import LandingMid from "@component/components/landing/carousel/LandingMid";
import { ProjectList } from "@component/components/landing/project/ProjectList";
import NicknameModal from "@component/components/sign-up/NicknameModal";
import { useEffect, useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // signToken이 있는 경우 추가 정보 모달 open
  useEffect(() => {
    if (window.sessionStorage.getItem('sign_token')) {
      setIsOpen(true)
    } 
  }, [])

  return (
    // 전체 1440px
    <main className="mx-auto w-full flex flex-col items-center">
      {/* 랜딩 문구 */}
      <section className="w-full h-[640px] bg-purple-main4 flex justify-center">
        <section className="w-[1080px]">
          <LadingTop />
        </section>
      </section>

      {/* 컨테이너 너비 */}
      <section className="max-w-[1080px] w-full mt-[31.93px]">
        {/* 캐러셀 */}
        <LandingMid />

        {/* todo : 나중에 큰 organism 컴포넌트 사이의 gap 설정 필요 */}
        <ProjectList />
      </section>

      <NicknameModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
}
