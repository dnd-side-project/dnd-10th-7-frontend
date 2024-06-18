import { TagProps } from "@component/components/common-components/tag";

export type RecommendDataType = {
  createdAt: string;
  createdBy: string;
  field: TagProps["type"];
  profileImageUrl: string;
  progress: TagProps["status"];
  projectId: number;
  summary: string;
  title: string;
}

