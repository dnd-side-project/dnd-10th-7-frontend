import { authApi } from "./api";

// 특정 프로젝트 피드백 상세 조회
export const getProjectFeedback = async (projectId: number) => {
  const res = await authApi().get(`/api/projects/${projectId}/feedbacks`);
  return res;
};

// 피드백 상세 조회
export const getFeedbackDetail = async (
  projectId: any,
  feedbackId: any
) => {
  const res = await authApi().get(
    `/api/projects/${projectId}/feedbacks/${feedbackId}`
  );
  return res;
};

// 피드백 제출
export const postFeedbackDoneImg = async (
  projectId: number,
  feedbackId: number,
  img: File
) => {
  const formData = new FormData();
  formData.append("file", img);

  const res = await authApi({ "Content-Type": "multipart/form-data" }).post(
    `/api/projects/${projectId}/feedbacks/${feedbackId}`,
    formData
  );
  return res;
};
