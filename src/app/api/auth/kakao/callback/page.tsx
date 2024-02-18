"use client";
import { useRouter } from "next/navigation";
import { useKakaoLogin } from "@component/hooks/useAuth";

export default function KakaoCallBack() {
  const router = useRouter();
  // URL에서 'code' 쿼리 파라미터 추출
  let code: string = "";

  if (typeof window !== "undefined") {
    code = new URL(window.location.href).searchParams.get("code") || "";
  }

  const { data, error } = useKakaoLogin(code);

  if (data) {
    const accessToken: string | undefined = data.data?.accessToken;
    const refreshToken: string | undefined = data.data?.refreshToken;
    if (accessToken && refreshToken) {
      // 회원가입 성공하면 sign_token 제거
      window.sessionStorage.removeItem("sign_token");
      window.sessionStorage.setItem("access_token", accessToken);
      window.sessionStorage.setItem("refresh_token", refreshToken);

      // main으로
      router.push('/')
    }
  }

  // 에러가 난 경우 -> 1. 신규 회원 2. 코드 재사용 -> 메인페이지로 보내기
  if (error) {
    router.push("/");
  }

  // TODO: loading component 캐릭터 추가하기
  return (
    <div className="bg-purple-main4 min-w-[1440px] min-h-[1080px] w-full h-full"></div>
  );
}
