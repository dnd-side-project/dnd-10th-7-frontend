// export const TagTypes = {};
// export type TagType = (typeof TagTypes)[keyof typeof TagTypes];

// export const TagColors = {
//   purple: "purple",
//   blue: "blue",
//   gray: "gray",
// };
// export type TagColor = (typeof TagColors)[keyof typeof TagColors];

export type TagProps = {
  type?:
    | "예술/대중문화"
    | "환경"
    | "건강"
    | "취미/실용"
    | "금융/핀테크"
    | "교육"
    | "게임"
    | "AI/머신러닝"
    | "기타";
  status?: "기획중" | "개발중" | "리팩토링중";
  startIcon?: React.ReactNode;
};
