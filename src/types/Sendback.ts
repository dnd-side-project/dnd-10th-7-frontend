import { TagProps } from "@component/components/common-components/tag";

export type ProjectData = {
  projectId: number;
  title: string;
  fields: TagProps["type"];
  process: TagProps["status"];
  username: string;
  userlevel: string;
  profileImageUrl: string;
  createdAt: string;
};

export type TitleData = {
  title: string;
  field: TagProps["type"];
  process: TagProps["status"];
};

export type InputTitleProps = {
  titleValue: string;
  onTitleChange: any;
}

export type UserInfoProps = {
  username: string;
  userlevel: string;
  profileImg: string;
  createdAt: string;
  isLoading: boolean;
}
