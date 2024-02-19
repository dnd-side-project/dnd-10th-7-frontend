export interface ProjectPageParams extends ProjectParams {
  keyword?: string;
  field?: FIELD_TYPE;
}

export interface ProjectParams {
  sort: number;
  size: number;
  isFinished: boolean;
}

export const FIELDS_TYPE = {
  art: "예술/대중문화",
  //   TODO : field 추가하기
};
export type FIELD_TYPE = (typeof FIELDS_TYPE)[keyof typeof FIELDS_TYPE];
