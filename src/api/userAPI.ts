import axios, { AxiosResponse } from "axios";
import { BASE_URL, api } from "./api";

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
  getDuplicatedNickname: (nickname: string) => {
    return api.get(`/api/users/check`, {
      params: nickname,
    });
  },

  // 유저 정보 추가 입력
  postUserInfo: async (data: userInfoType) => {
    console.log("datadldldl", data);
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
