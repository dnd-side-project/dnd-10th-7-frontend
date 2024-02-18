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
