const BASE_URL = process.env.BASE_URL;
import { AxiosResponse } from "axios";
import axios from "axios";

interface IAuthResponse {
  // response type
}

export const fetchKakaoLogin = async (code: any) => {
  try {

    const response: AxiosResponse<IAuthResponse> = await axios.get(
      `https://api.sendback.co.kr/api/auth/kakao/callback`,
      {
        params: { code },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error)
  }
};
