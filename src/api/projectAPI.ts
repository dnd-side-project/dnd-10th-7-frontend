import { authApi } from "./api";

export type ProjectData = {
  titleValue: string;
  selectedOption: string;
  content: string;
  subTitleValue: string;
  serviceLink: string;
  startDate: string;
  endDate: string;
  selectedProgress: string;
  pmMember: number;
  frontMember: number;
  backMember: number;
  designMember: number;
  fileList: File[];
};

// 프로젝트 등록하기
export const postProject = {
  postProjectData: (data: ProjectData) => {
    const json = JSON.stringify({
      title: data.titleValue,
      field: data.selectedOption,
      content: data.content,
      summary: data.subTitleValue,
      demoSiteUrl: data.serviceLink,
      startedAt: data.startDate,
      endedAt: data.endDate,
      progress: data.selectedProgress,
      plannerCount: data.pmMember,
      frontendCount: data.frontMember,
      backendCount: data.backMember,
      designCount: data.designMember,
    });

    const blob = new Blob([json], { type: "application/json" });

    const formData = new FormData();
    formData.append("data", blob);

    for (const file of data.fileList) {
      formData.append("images", file, file.name);
    }

    return authApi({ "Content-Type": "multipart/form-data" }).post(
      `/api/projects`,
      formData
    );
  },
};

// 프로젝트 상세 조회
export const getProject = async (projectId: number) => {
  const res = await authApi({ "Content-Type": "application/json" }).get(
    `/api/projects/${projectId}`
  );
  return res;
};

export const putProjectLike = async (projectId: number) => {
  const res = await authApi({ "Content-Type": "application/x-www-form-urlencoded" }).put(
    `/api/projects/${projectId}/like`
  );
  return res;
};