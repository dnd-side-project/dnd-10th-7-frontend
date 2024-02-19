import { useMutation, useQuery } from "@tanstack/react-query";
import { getGoogleLogin, getKakaoLogIn } from "@component/api/socialAPI";
import { userAPI, userInfoType } from "@component/api/userAPI";

export const useKakaoLogin = (code: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["kakaoLogin", { code }],
    queryFn: () => getKakaoLogIn(code),
    enabled: Boolean(code),
  });

  return { data, error, isLoading };
};

export const useGoogleLogin = (code: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["googleLogin", { code }],
    queryFn: () => getGoogleLogin(code),
    enabled: Boolean(code),
  });

  return { data, error, isLoading };
};

export const useSignUp = ({
  nickname,
  birthday,
  gender,
  career,
  fields,
  signToken,
}: userInfoType) => {
  const { data, error, isPending, mutate } = useMutation({
    mutationFn: () =>
      userAPI.postUserInfo({
        nickname,
        birthday,
        gender,
        career,
        fields,
        signToken,
      }),
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (err: any) => {
      console.log(err);
    },
  });

  return { mutate, data, error, isPending };
};

export const useNicknameValid = (nickname: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["nicknameValid", { nickname }],
    queryFn: () => {
      return userAPI.getDuplicatedNickname(nickname);
    },
    enabled: Boolean(nickname),
  });

  return { data, error, isLoading };
};
