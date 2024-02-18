import { api } from "./api";

export type userInfoType = {
  nickname: string;
  gender: string;
  birthDay: string;
  career: string;
  interestedList: Array<string>;
};

export const userAPI = {
  // 닉네임 중복
  getDuplicatedNickname: (nickname: string) => {
    return api.get(`/api/users/check`, {
      params: nickname,
    });
  },

  // 유저 정보 추가 입력
  postUserInfo: (data: userInfoType) => {
    return api.post(`/api/users/sign-up`, {
      nickname: data.nickname,
      gender: data.gender,
      birthDay: data.birthDay,
      career: data.career,
      interests: data.interestedList,
    });
  },
};
