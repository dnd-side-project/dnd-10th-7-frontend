import { useQuery } from "@tanstack/react-query";
import { getUserData } from "@component/api/userAPI";

export const useGetUserData = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getUserData"],
    queryFn: () => getUserData(),
  });

  return { data, error, isLoading };
};