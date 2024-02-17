const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import { AxiosResponse, AxiosError } from "axios";
import { useRouter } from "next/navigation";
import axios from "axios";

interface IAuthResponse {
  // response type
}

export const GetKakaoLogin = async (code: any) => {
  console.log("i am now executinggggggg");
  const router = useRouter();
  try {
    console.log('i am trying to axios function')
    const response: AxiosResponse<IAuthResponse> = await axios.get(
      `${BASE_URL}/api/auth/kakao/callback`,
      {
        params: { code },
      }
    );
    return response.data;
  } catch (error: any) {
    console.log("i have so many errorrrr");
    // 추가 정보 입력이 필요한 경우
    const axiosError = error as AxiosError;
    if (
      axiosError.response?.data &&
      (axiosError.response.data as any).code === 1080
    ) {
      // 1. signToken 저장하기
      const signToken: string = error.response?.data.data.signToken;
      window.sessionStorage.setItem("sign_token", signToken);
      // 2. main 페이지로 이동한 뒤
      router.push("/");
      // 3. 메인 페이지에서 세션스토리지에 만약에 사인 토큰이 존재하면 추가 정보 입력 모달 띄우기 로직 추가
    }
  }
};
