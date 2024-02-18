"use client";
import { useRouter } from "next/navigation";
import { useKakaoLogin } from "@component/hooks/useAuth";
import { useEffect, useState } from "react";
import Loading from "@component/components/loading/Loading";
import SignUpModal from "@component/components/signup/SignUpModal";

export default function KakaoCallBack() {
  const router = useRouter();

  // URL에서 'code' 쿼리 파라미터 추출
  let code: string = "";

  if (typeof window !== "undefined") {
    code = new URL(window.location.href).searchParams.get("code") || "";
  }

  const { data, error, isLoading } = useKakaoLogin(code);

  useEffect(() => {
    if (data) {
      const accessToken: string | undefined = data.data?.accessToken;
      const refreshToken: string | undefined = data.data?.refreshToken;
      if (accessToken && refreshToken) {
        // 회원가입 성공하면 sign_token 제거
        window.sessionStorage.removeItem("signToken");
        window.sessionStorage.setItem("accessToken", accessToken);
        window.sessionStorage.setItem("refreshToken", refreshToken);
        console.log("accessToken", accessToken);
        console.log("refreshToken", refreshToken);

        // main으로
        router.push("/");
      }
    }
    if (error) {
      console.log("err입니다", error);
      router.push("/");
    }
  }, [data, error]);

  return <>{isLoading && <Loading />}</>;
}
