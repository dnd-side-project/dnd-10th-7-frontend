import { getProjectFeedback } from "@component/api/feedbackAPI";
import { useQuery } from "@tanstack/react-query";

export const useGetProjectFeedbackDetail = (projectId: number) => {
  const { data: feedbackData, error: feedbackError, isLoading: feedbackIsLoading } = useQuery({
    queryKey: ["getProjectFeedBackData", { projectId }],
    queryFn: () => getProjectFeedback(projectId),
    enabled: Boolean(projectId),
  });

  return { feedbackData, feedbackError, feedbackIsLoading };
};