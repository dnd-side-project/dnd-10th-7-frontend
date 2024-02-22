import { authApi } from "./api";

export type MyProjectProps = {
  page?: number;
  size?: number;
  sort?: number;
};

// 등록한 프로젝트 조회
export const getMyProjectData = async ({
  page,
  size,
  sort,
}: MyProjectProps) => {
  const res = await authApi().get("/api/users/me/projects", {
    params: {
      page,
      size,
      sort,
    },
  });
  return res;
};

// 스크랩한 프로젝트 조회
export const getMySrapData = async ({ page, size, sort }: MyProjectProps) => {
  const res = await authApi().get("/api/users/me/scraps", {
    params: {
      page,
      size,
      sort,
    },
  });
  return res;
};

// 피드백한 프로젝트 조회
export const getMyFeedbackData = async ({
  page,
  size,
  sort,
}: MyProjectProps) => {
  const res = await authApi().get("/api/users/me/feedbacks", {
    params: {
      page,
      size,
      sort,
    },
  });
  return res;
};

export type userDataProps = {
  nickname: string;
  career: string;
  birthday: string;
  fields: string[];
};

// 프로필 편집
export const purtUserData = async ({
  nickname,
  career,
  birthday,
  fields,
}: userDataProps) => {
  const res = await authApi().put(`/api/users/me`, {
    nickname,
    career,
    birthday,
    fields,
  });
  return res;
};
