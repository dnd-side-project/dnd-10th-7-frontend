"use client";

import Button from "@component/components/common-components/button/Button";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const notify = () =>
  toast.success("로그인이 필요한 서비스에요", {
    style: {
      backgroundColor: "#F9F7FF",
      border: "1px solid #8C82FF",
      padding: "16px",
      color: "#8C82FF",
    },
    icon: "👋",
  });

const LandingTop = () => {
  const router = useRouter();

  const onClickProject = () => {
    const accessToken =
      typeof window !== "undefined" && sessionStorage.getItem("accessToken");

    if (accessToken) {
      router.push("/project/register");
    } else {
      notify();
    }
  };

  return (
    <div className="w-[1080px] flex flex-col items-center">
      <div className="text-title mt-[177px] text-white">
        사이드 프로젝트 기획부터 론칭까지, 프로젝트를 등록하고
      </div>
      <div className="text-huge mt-[32px] text-white">
        다양한 사람들과 피드백을 주고 받으세요!
      </div>
      <div className="text-title mt-[32px] text-white">
        여러 분야의 서비스 유저로부터 유의미한 피드백을 받을 수 있어요.
      </div>
      <Button size="lg" className="mt-[100px] min-w-[246px] text-h1" onClick={onClickProject}>
        프로젝트 등록하기
      </Button>
      <Toaster />
    </div>
  );
};

export default LandingTop;
