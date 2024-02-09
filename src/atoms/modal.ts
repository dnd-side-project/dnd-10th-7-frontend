import { atom } from "recoil";

export const nicknameModal = atom<string>({
  key: `nicknameModal`,
  default: "",
});
export const userInfoModal = atom<Record<string, string>>({
  key: `userInfoModal`,
  default: {
    birth: "",
    gender: "",
    career: "",
  },
});

export const interestModal = atom<string>({
  key: `interestModal`,
  default: "",
});
