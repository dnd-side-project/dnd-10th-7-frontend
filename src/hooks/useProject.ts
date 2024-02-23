import { ProjectPageParams } from "@component/types/api";
import {
  useQuery,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";

import { useSetRecoilState } from "recoil";
import { errorModalState } from "@component/atoms/modalAtom";
import {
  ProjectData,
  deleteProject,
  deleteProjectComment,
  getProject,
  getProjectComment,
  getProjectList,
  getProjectRecommend,
  postProject,
  postProjectComment,
  pullProjectUp,
  putProjectLike,
  putProjectScrap,
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
      alert("삭제 되었습니다.");
      window.location.reload();
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
    queryFn: () => getProjectList(params),
    placeholderData: (prevData, _) => prevData,
    enabled: Boolean(params),
  });

  return { data, error, isLoading };
};

// 댓글

export const useGetProjectComment = (projectId: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getProjectComment", { projectId }],
    queryFn: () => getProjectComment(projectId),
    enabled: Boolean(projectId),
  });
  return { data, error, isLoading };
};

export const usePostComment = (projectId: number, content: string) => {
  const setErrorModal = useSetRecoilState(errorModalState);

  const { data, isPending, mutate } = useMutation({
    mutationFn: () => postProjectComment(projectId, content),
    onSuccess: (res) => {
      console.log("댓글 등록 성공", res);
      window.location.reload();
    },
    onError: (err: any) => {
      console.log(err);
      setErrorModal({
        open: true,
        text: "예기치 못한 오류가 발생했습니다.",
      });
    },
  });
  return { mutate, isPending };
};

export const useDeleteComment = (projectId: number, commentId: number) => {
  const { data, error, isPending, mutate } = useMutation({
    mutationFn: () => deleteProjectComment(projectId, commentId),
    onSuccess: (res) => {
      console.log("댓글 삭제 성공", res);
      alert("댓글을 삭제했습니다.");
      window.location.reload();
    },
    onError: (err: any) => {
      console.log(err);
      alert("댓글 삭제 실패!");
    },
  });
  return { mutate, isPending };
};
