import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserData } from "@component/api/userAPI";
import {
  MyProjectProps,
  getMyFeedbackData,
  getMyProjectData,
  getMySrapData,
  purtUserData,
  userDataProps,
} from "@component/api/mypageAPI";

export const useGetUserData = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getUserData"],
    queryFn: () => getUserData(),
  });

  return { data, error, isLoading };
};

export const useGetMyProjectData = ({ page, size, sort }: MyProjectProps) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getMyProjectData"],
    queryFn: () => getMyProjectData({ page, size, sort }),
  });

  return { data, error, isLoading };
};

export const useGetMyScrapData = ({ page, size, sort }: MyProjectProps) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getMySrapData"],
    queryFn: () => getMySrapData({ page, size, sort }),
  });

  return { data, error, isLoading };
};
export const useGetMyFeedbackData = ({ page, size, sort }: MyProjectProps) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getMyFeedbackData"],
    queryFn: () => getMyFeedbackData({ page, size, sort }),
  });

  return { data, error, isLoading };
};

export const usePutUserDataMutation = ({
  nickname,
  career,
  birthday,
  fields,
}: userDataProps) => {
  const { data, error, isPending, mutate } = useMutation({
    mutationFn: () => purtUserData({ nickname, career, birthday, fields }),
    onSuccess: (res) => {
      alert("프로필 편집 완료");
      console.log("프로필 편집 성공", res);
    },
    onError: (err: any) => {
      alert("프로필 편집 실패");
      console.log(err);
    },
  });
  return { mutate, isPending };
};
