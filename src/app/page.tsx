import LadingTop from "@component/components/landing/carousel/LandingTop";
import LandingMid from "@component/components/landing/carousel/LandingMid";
import Title from "@component/components/common-components/title";
import { ProjectList } from "@component/components/landing/project/ProjectList";

export default function Home() {
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
    </main>
  );
}
