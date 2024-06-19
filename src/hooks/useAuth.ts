import { useMutation, useQuery } from "@tanstack/react-query";
import { getGoogleLogin, getKakaoLogin } from "@component/api/socialAPI";
import { userAPI, userInfoType } from "@component/api/userAPI";
import { useRouter } from "next/navigation";
import { getCookie, setCookie } from "@component/utils";

export const useKakaoLogin = (code: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["kakaoLogin", { code }],
    queryFn: () => getKakaoLogin(code),
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
  const router = useRouter();

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
      window.sessionStorage.removeItem("signToken");
      window.sessionStorage.setItem("accessToken", res?.data?.accessToken);
      const temp = getCookie("refreshToken");
      // setCookie('refreshToken', )
      alert("회원가입이 완료되었습니다.");
      window.location.reload();
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
