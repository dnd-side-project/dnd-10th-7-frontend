import { projectAPI } from "@component/api/projectAPI";
import { ProjectPageParams } from "@component/types/api";
import { useQuery } from "@tanstack/react-query";

export const useProjectList = (params: ProjectPageParams) => {
  return useQuery({
    queryKey: ["getProjectList", params],
    queryFn: () => projectAPI.getProjectList(params),
    placeholderData: (prevData, _) => prevData,
  });
};
