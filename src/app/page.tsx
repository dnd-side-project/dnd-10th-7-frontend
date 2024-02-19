"use client";

import LadingTop from "@component/components/landing/carousel/LandingTop";
import LandingMid from "@component/components/landing/carousel/LandingMid";
import { ProjectList } from "@component/components/landing/project/ProjectList";
import { useEffect, useState } from "react";
import Footer from "@component/components/common-components/common/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // signToken이 있는 경우 추가 정보 모달 open
  useEffect(() => {
    if (window.sessionStorage.getItem("sign_token")) {
      setIsOpen(true);
    }
  }, []);

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
      <section className="max-w-[1080px] w-full mt-[100px] flex flex-col gap-[100px] mb-[100px]">
        {/* 캐러셀 */}
        <LandingMid />

        {/* 프로젝트 */}
        <ProjectList />
      </section>

      {/* <section className="w-full">
        <Footer></Footer>
      </section> */}
    </main>
  );
}
