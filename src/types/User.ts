export type Profile = {
  nickname: string;
  career: string;
  profileImageUrl: string;
  birthday: string;
  email: string;
  field: string;
  level: number;
  feedbackCount: number;
  projectCount: number;
  likeCount: number;
  restFeedbackCount: number;
};

export type UserInfoProps = {
  username: string;
  birth: string;
  email: string;
  interest: string;
  profileImg: string;
  career: string;
};

export type UserInfo = {
  label: string;
  value: string;
};

export type UserFeed = {
  label: string;
  value: number;
};

export type UserFeedBackInfoProps = {
  level: number
  restFeedbackCount: number;
  feedbackCount: number
  projectCount: number
  likeCount: number
}
