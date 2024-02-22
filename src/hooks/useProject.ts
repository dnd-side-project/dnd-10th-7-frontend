import {
  ProjectData,
  deleteProject,
  getProject,
  getProjectRecommend,
  postProject,
  projectAPI,
  pullProjectUp,
  putProjectLike,
  putProjectScrap,
} from "@component/api/projectAPI";
import { ProjectPageParams } from "@component/types/api";
import {
  useQuery,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";

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
      return res.data.data;
    },
    onError: (error) => {
      console.error("Error posting project:", error);
      return error;
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

export const useGetProjectRecommend = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getProjectRecommend"],
    queryFn: () => getProjectRecommend(),
  });

  return { data, error, isLoading };
};

export const useLikeMutation = (projectId: number) => {
  const { data, error, isPending, mutate } = useMutation({
    mutationFn: () => putProjectLike(projectId),
    onSuccess: (res) => {
      console.log("좋아요 성공", res);
    },
    onError: (err: any) => {
      console.log(err);
    },
  });
  return { mutate, isPending };
};

export const useScrapMutation = (projectId: number) => {
  const {
    data,
    error,
    isPending,
    mutate: isScrapMutate,
  } = useMutation({
    mutationFn: () => putProjectScrap(projectId),
    onSuccess: (res) => {
      console.log("스크랩 성공", res);
    },
    onError: (err: any) => {
      console.log(err);
    },
  });
  return { isScrapMutate };
};

export const useDeleteMutation = (projectId: any) => {
  const {
    data,
    error,
    isPending,
    mutate: deleteMutate,
  } = useMutation({
    mutationFn: () => deleteProject(projectId),
    onSuccess: (res) => {
      console.log("삭제 성공", res);
    },
    onError: (err: any) => {
      // error 종류
      // 1. 이미 삭제 한 경우 2. 내 프로젝트가 아닌 경우
      console.log(err);
    },
  });
  return { deleteMutate, isPending };
};

export const usePullUpMutation = (projectId: any) => {
  const {
    data,
    error,
    isPending,
    mutate: pullUpMutate,
  } = useMutation({
    mutationFn: () => pullProjectUp(projectId),
    onSuccess: (res) => {
      console.log("끌올 성공", res);
    },
    onError: (err: any) => {
      // error 종류
      // 1. 3일이 지나지 않은 경우 2. 이미 삭제된 경우 3. 내 프로젝트가 아닌 경우
      console.log(err);
    },
  });
  return { pullUpMutate, isPending };
};

export const useProjectList = (params: ProjectPageParams) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getProjectList", { params }],
    queryFn: () => projectAPI.getProjectList(params),
    placeholderData: (prevData, _) => prevData,
    enabled: Boolean(params),
  });

  return { data, error, isLoading };
};
