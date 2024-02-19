"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getGoogleLogin } from "@component/api/socialAPI";
import { useGoogleLogin } from "@component/hooks/useAuth";
import { SyncLoader } from "react-spinners";
import Loading from "@component/components/loading/Loading";

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
