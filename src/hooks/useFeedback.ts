import { getProjectFeedback, getFeedbackDetail } from "@component/api/feedbackAPI";
import { useQuery } from "@tanstack/react-query";

export const useGetProjectFeedbackDetail = (projectId: number) => {
  const { data: feedbackData, error: feedbackError, isLoading: feedbackIsLoading } = useQuery({
    queryKey: ["getProjectFeedBackData", { projectId }],
    queryFn: () => getProjectFeedback(projectId),
    enabled: Boolean(projectId),
  });

  return { feedbackData, feedbackError, feedbackIsLoading };
};

export const useGetFeedbackDetail = (projectId: number, feedbackId: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getFeedBackData", { projectId, feedbackId }],
    queryFn: () => getProjectFeedback(projectId && feedbackId),
    enabled: Boolean(projectId && feedbackId)
  });

  return { data, error, isLoading }
};