const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import { AxiosResponse, AxiosError } from "axios";
import axios from "axios";

interface IAuthResponse {
  // response type
}

export const GetKakaoLogin = async (code: any) => {
  try {
    const response: AxiosResponse<IAuthResponse> = await axios.get(
      `${BASE_URL}/api/auth/kakao/callback`,
      {
        params: { code },
      }
    );
    // TODO: 기존 회원인 경우 -> 엑세스 토큰 저장하는 로직 필요!
    //
    //
    return response.data;
  } catch (error: any) {
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
      // 3. 메인 페이지에서 세션스토리지에 만약에 사인 토큰이 존재하면 추가 정보 입력 모달 띄우기 로직 추가
    }
    throw error;
  }
};
