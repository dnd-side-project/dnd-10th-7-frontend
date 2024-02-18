import { useQuery } from "@tanstack/react-query";
import { GetKakaoLogin } from "@component/api/kakaoGetAPI";

export const useKakaoLogin = (code: string) => {
  const { data, error } = useQuery({
    queryKey: ["kakaoLogin", { code }],
    queryFn: () => GetKakaoLogin(code),
    enabled: Boolean(code),
  });

  return { data, error };
};
