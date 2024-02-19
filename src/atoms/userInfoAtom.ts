import { atom } from "recoil";

export const nicknameState = atom<string>({
  key: `nicknameModal`,
  default: "",
});

export const birthState = atom<string>({
  key: `birthState`,
  default: "",
});

export const genderState = atom<string>({
  key: `genderState`,
  default: "",
});

export const careerState = atom<string>({
  key: `careerState`,
  default: "",
});

// export const userInfoModal = atom<Record<string, string>>({
//   key: `userInfoModal`,
//   default: {
//     birth: "",
//     gender: "",
//     career: "",
//   },
// });

export const interestState = atom<Array<string>>({
  key: `interestState`,
  default: [],
});
