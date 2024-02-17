"use client";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/navigation";

interface IAuthResponse {
  // response type
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function KakaoCallBack() {
  const router = useRouter();
  // URL에서 'code' 쿼리 파라미터 추출
  let code: string = "";

  if (typeof window !== "undefined") {
    code = new URL(window.location.href).searchParams.get("code") || "";
  }

  const fetchKakaoLogin = async (code: any) => {
    try {
      const response: AxiosResponse<IAuthResponse> = await axios.get(
        `${BASE_URL}/api/auth/kakao/callback`,
        {
          params: { code },
        }
      );
      return response.data;
    } catch (error: any) {
      // 추가 정보 입력이 필요한 경우
      const axiosError = error as AxiosError;
      if (
        axiosError.response?.data &&
        (axiosError.response.data as any).code === 1080
        ) {
          // 1. signToken 저장하기
          const signToken: string = error.response?.data.data.signToken
          window.sessionStorage.setItem("sign_token", signToken);
          // 2. main 페이지로 이동한 뒤
          router.push('/')
          // 3. 메인 페이지에서 세션스토리지에 만약에 사인 토큰이 존재하면 추가 정보 입력 모달 띄우기 로직 추가
        }
    }
  };

  const { data } = useQuery<IAuthResponse, AxiosError, IAuthResponse>({
    queryKey: ["kakaoLogin", { code }], 
    queryFn: () => fetchKakaoLogin(code),
    enabled: Boolean(code), 
  });

  if (data) {
    console.log(data)
  }

  return <div>로딩중</div>;
}
