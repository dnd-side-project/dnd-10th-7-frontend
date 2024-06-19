import {
  getProjectFeedback,
  getFeedbackDetail,
  postFeedbackDoneImg,
  registerFeedback,
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

export const useFeedbackSubmitImg = (
  projectId: any,
  feedbackId: any,
  img: File
) => {
  const { data, error, isPending, mutate } = useMutation({
    mutationFn: () => postFeedbackDoneImg(projectId, feedbackId, img),
    onSuccess: (res) => {},
    onError: (err: any) => {
      console.log(err);
    },
  });
  return { mutate, isPending, data, error };
};

export const useFeedbackSubmit = (
  projectId: number,
  titleValue: string,
  linkValue: string,
  contentValue: string,
  awardValue: string,
  startDate: string,
  endDate: string
) => {
  const {
    data: registerData,
    error,
    isPending,
    mutate,
  } = useMutation({
    mutationFn: () =>
      registerFeedback(
        projectId,
        titleValue,
        linkValue,
        contentValue,
        awardValue,
        startDate,
        endDate
      ),
    onSuccess: (res) => {},
    onError: (err: any) => {
      console.error("Error submitting feedback", err);
    },
  });

  return { mutate, isPending, registerData, error };
};
