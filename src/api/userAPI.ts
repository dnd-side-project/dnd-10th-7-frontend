import axios, { AxiosResponse } from "axios";
import { BASE_URL, api } from "./api";
import { authApi } from "./api";

export type userInfoType = {
  nickname: string;
  gender: string;
  birthday: string;
  career: string;
  fields: Array<string>;
  signToken: string | null;
};

export const userAPI = {
  // 닉네임 중복
  getDuplicatedNickname: async (nickname: string) => {
    try {
      const res: AxiosResponse = await axios.get(
        `${BASE_URL}/api/users/check`,
        {
          params: { nickname },
        }
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },

  // 유저 정보 추가 입력
  postUserInfo: async (data: userInfoType) => {
    try {
      const res: AxiosResponse = await axios.post(
        `${BASE_URL}/api/users/signup`,
        {
          nickname: data.nickname,
          gender: data.gender,
          birthday: data.birthday,
          career: data.career,
          fields: data.fields,
          signToken: data.signToken,
        }
      );
      return res.data;
    } catch (err) {
      console.log("err:", err);
    }
  },
};

// 유저 정보 조회하기
export const getUserData = async () => {
  const res = await authApi().get("/api/users/me");
  return res;
};
