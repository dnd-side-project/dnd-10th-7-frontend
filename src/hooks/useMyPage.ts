import { useQuery } from "@tanstack/react-query";
import { getUserData } from "@component/api/userAPI";
import {
  MyProjectProps,
  getMyFeedbackData,
  getMyProjectData,
  getMySrapData,
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
