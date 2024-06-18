"use client";

import LandingTop from "@component/components/landing/carousel/LandingTop";
import LandingMid from "@component/components/landing/carousel/LandingMid";
import ProjectList from "@component/components/landing/project/ProjectList";
import { Suspense, useEffect, useState } from "react";
import SignUpModal from "@component/components/signup/SignUpModal";
import useWindowSize from "@component/hooks/useWindowSize";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // signToken이 있는 경우 추가 정보 모달 open
  useEffect(() => {
    if (window.sessionStorage.getItem("signToken")) {
      setIsOpen(true);
    }
  }, []);

  const { width } = useWindowSize();

  return (
    // 전체 1440px
    <>
      <section
        className={`absolute scale-75 ${width ?? 0 >= 1460 ? "fixed left-[20%] transform-1/2-1/2" : "flex justify-center items-center min-w-[1460px] max-[1920px]"}`}
      >
        <LandingTop />
      </section>
      <main className="mx-auto w-full flex flex-col items-center mt-[70px]">
        {/* 랜딩 문구 */}
        <section
          className="w-full max-w-[1470px] h-[620px] flex justify-center items-center"
          style={{
            backgroundImage: "url('/assets/main_background.png')",
            backgroundSize: "cover",
          }}
        ></section>

        {/* 컨테이너 너비 */}
        <section className="max-w-[1080px] w-full mt-[100px] flex flex-col gap-[100px] mb-[100px]">
          {/* 캐러셀 */}
          <LandingMid />
          <Suspense>
            {/* 프로젝트 */}
            <ProjectList />
          </Suspense>
        </section>

        {isOpen && <SignUpModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      </main>
    </>
  );
}
