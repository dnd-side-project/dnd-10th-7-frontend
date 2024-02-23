import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserData } from "@component/api/userAPI";
import {
  MyProjectProps,
  getMyFeedbackData,
  getMyProjectData,
  getMySrapData,
  putUserData,
  userDataProps,
} from "@component/api/mypageAPI";
import { useSetRecoilState } from "recoil";
import { completeModalState } from "@component/atoms/modalAtom";

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
  const setCompleteModal = useSetRecoilState(completeModalState);
  const { data, error, isPending, mutate } = useMutation({
    mutationFn: () => putUserData({ nickname, career, birthday, fields }),
    onSuccess: (res) => {
      alert("프로필 편집 완료");
      setCompleteModal({
        open: true,
        text: "프로필 수정이 완료되었습니다.",
      });
      console.log("프로필 편집 성공", res);
      window.location.reload();
    },
    onError: (err: any) => {
      alert("프로필 편집 실패: 중복된 닉네임 입니다");
      console.log(err);
    },
  });
  return { mutate, isPending };
};
