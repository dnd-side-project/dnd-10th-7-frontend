import { atom } from "recoil";

export const nicknameModal = atom<boolean>({
  key: `nicknameModal`,
  default: false,
});
