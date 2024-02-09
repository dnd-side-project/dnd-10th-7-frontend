import LadingTop from "@component/components/landing/carousel/LandingTop";
import LandingMid from "@component/components/landing/carousel/LandingMid";


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
      </section>
    </main>
  );
}
