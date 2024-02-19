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
  fintech: "금융/핀테크",
  health: "건강",
  envir: "환경",
  edu: "교육",
  game: "게임",
  it: "AI/머신러닝",
  hobby: "취미/실용",
  etc: "기타",
};
export type FIELD_TYPE = (typeof FIELDS_TYPE)[keyof typeof FIELDS_TYPE];
