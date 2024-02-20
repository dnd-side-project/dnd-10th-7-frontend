import {
  getProjectFeedback,
  getFeedbackDetail,
  postFeedbackDoneImg,
} from "@component/api/feedbackAPI";
import { useQuery, useMutation } from "@tanstack/react-query";

export const useGetProjectFeedbackDetail = (projectId: number) => {
  const {
    data: feedbackData,
    error: feedbackError,
    isLoading: feedbackIsLoading,
  } = useQuery({
    queryKey: ["getProjectFeedBackData", { projectId }],
    queryFn: () => getProjectFeedback(projectId),
    enabled: Boolean(projectId),
  });

  return { feedbackData, feedbackError, feedbackIsLoading };
};

export const useGetFeedbackDetail = (projectId: number, feedbackId: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getFeedBackData", { projectId, feedbackId }],
    queryFn: () => getFeedbackDetail(projectId, feedbackId),
    enabled: Boolean(projectId && feedbackId),
  });

  return { data, error, isLoading };
};

export const useFeedbackSubmitImg = (projectId: any, feedbackId: any, img: File) => {
  const { data, error, isPending, mutate } = useMutation({
    mutationFn: () => postFeedbackDoneImg(projectId, feedbackId, img),
    onSuccess: (res) => {
      console.log("사진 등록 성공", res);
    },
    onError: (err: any) => {
      console.log(err);
    },
  });
  return { mutate, isPending, data, error };
};
