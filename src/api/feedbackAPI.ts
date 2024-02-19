import { authApi } from "./api";

// 특정 프로젝트 피드백 상세 조회
export const getProjectFeedback = async (projectId: number) => {
  const res = await authApi().get(`/api/projects/${projectId}/feedbacks`);
  return res;
};