import {
  useQuery,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import {
  getProject,
  postProject,
  ProjectData,
  putProjectLike,
  putProjectScrap,
  getProjectRecommend,
} from "@component/api/projectAPI";

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
      console.log(err);
    },
  });
  return { pullUpMutate, isPending };
};