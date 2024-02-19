import { useQuery, useMutation, UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { postProject, ProjectData } from "@component/api/projectAPI";
import { getProject } from '@component/api/projectAPI';

export const usePostProjectMutation = (): UseMutationResult<
  any,
  unknown,
  ProjectData,
  unknown
> => {
  const mutationFn = (data: ProjectData) => postProject.postProjectData(data);

  return useMutation({
    mutationFn: mutationFn,
    onSuccess: (res) => {
      console.log("Post project successful:", res.data.data);
      return res.data.data
    },
    onError: (error) => {
      console.error("Error posting project:", error);
      return error
    },
  });
};

export const useGetProjectDetail = (projectId: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getProjectData", { projectId }],
    queryFn: () => getProject(projectId),
    enabled: Boolean(projectId),
  });

  return { data, error, isLoading };
};