"use client";

import LadingTop from "@component/components/landing/carousel/LandingTop";
import LandingMid from "@component/components/landing/carousel/LandingMid";
import { ProjectList } from "@component/components/landing/project/ProjectList";
import { useEffect, useState } from "react";
import SignUpModal from "@component/components/signup/SignUpModal";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // signToken이 있는 경우 추가 정보 모달 open
  useEffect(() => {
    if (window.sessionStorage.getItem("signToken")) {
      setIsOpen(true);
    }
  }, []);

  return (
    // 전체 1440px
    <main className="mx-auto w-full flex flex-col items-center">
      {/* 랜딩 문구 */}
      <section
        className="w-full h-[619px] bg-purple-main4 flex justify-center"
        style={{
          backgroundImage: "url('/assets/main_background.png')",
          backgroundSize: "cover",
        }}
      >
        <section className="w-[1080px] flex justify-center">
          <LadingTop />
        </section>
      </section>

      {/* 컨테이너 너비 */}
      <section className="max-w-[1080px] w-full mt-[100px] flex flex-col gap-[100px] mb-[100px]">
        {/* 캐러셀 */}
        <LandingMid />

        {/* 프로젝트 */}
        <ProjectList />
      </section>

      {isOpen && <SignUpModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </main>
  );
}
