import { MyPageTab } from "@component/components/mypage/MyPageTab";
import MyPageProfileTab from "@component/components/mypage/MyPageProfileTab";

export default function MyPage() {
  return (
    <>
      <div className="w-[1440px] m-auto">
        <section className="min-w-[1080px] w-full flex justify-center mt-[120px] mb-[108px]">
          <MyPageProfileTab />
          <div className="w-full max-w-[800px]">
            <MyPageTab />
          </div>
        </section>
      </div>
    </>
  );
}
