"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getGoogleLogin } from "@component/api/socialAPI";
import { useGoogleLogin } from "@component/hooks/useAuth";
import Loading from "@component/components/loading/Loading";
import { useSetRecoilState } from "recoil";
import { completeModalState } from "@component/atoms/modalAtom";

export default function GoogleCallBack() {
  const router = useRouter();

  const code =
    (typeof window !== "undefined" &&
      new URL(window.location.href).searchParams.get("code")) ||
    "";

  const { data, error, isLoading } = useGoogleLogin(code);

  useEffect(() => {
    if (data) {
      const accessToken: string | undefined = data.data?.accessToken;
      const refreshToken: string | undefined = data.data?.refreshToken;
      if (accessToken && refreshToken) {
        // 회원가입 성공하면 sign_token 제거
        window.sessionStorage.removeItem("signToken");
        window.sessionStorage.setItem("accessToken", accessToken);
        window.sessionStorage.setItem("refreshToken", refreshToken);
        // console.log("accessToken", accessToken);
        // console.log("refreshToken", refreshToken);

        // main으로
        router.push("/");
      }
    }
    if (error) {
      console.log("google error", error);
      router.push("/");

      // TODO : 회원가입이 안된 경우의 에러와 아무 경우에도 속하지 않는 찐 에러 구분해서 로직 짜기!
    }
  }, [data, error]);

  return <>{isLoading && <Loading />}</>;
}
