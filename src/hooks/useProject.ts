import {
  useQuery,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import {
  deleteProjectComment,
  getProjectComment,
  postProject,
  postProjectComment,
  ProjectData,
} from "@component/api/projectAPI";
import { getProject } from "@component/api/projectAPI";
import { putProjectLike, putProjectScrap } from "@component/api/projectAPI";

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
    isPending: isScrapPending,
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
  return { isScrapMutate, isScrapPending };
};

export const useGetProjectComment = (projectId: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getProjectComment", { projectId }],
    queryFn: () => getProjectComment(projectId),
    enabled: Boolean(projectId),
  });

  return { data, error, isLoading };
};

export const usePostComment = (projectId: number, content: string) => {
  const { data, error, isPending, mutate } = useMutation({
    mutationFn: () => postProjectComment(projectId, content),
    onSuccess: (res) => {
      console.log("댓글 등록 성공", res);
    },
    onError: (err: any) => {
      console.log(err);
    },
  });
  return { mutate, isPending };
};

export const useDeleteComment = (projectId: number, commentId: number) => {
  const { data, error, isPending, mutate } = useMutation({
    mutationFn: () => deleteProjectComment(projectId, commentId),
    onSuccess: (res) => {
      console.log("댓글 삭제 성공", res);
    },
    onError: (err: any) => {
      console.log(err);
    },
  });
  return { mutate, isPending };
};
