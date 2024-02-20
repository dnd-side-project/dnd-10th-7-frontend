import { atom } from "recoil";

// export const LoginModalState = atom<boolean>({
//   key: `loginModalStatus`,
//   default: false,
// });

export type AlertModalStateType = {
  open: boolean;
  text: string;
};

export const completeModalState = atom<AlertModalStateType>({
  key: `completeModalState`,
  default: {
    open: false,
    text: "",
  },
});

export const errorModalState = atom<AlertModalStateType>({
  key: `errorModalState`,
  default: {
    open: false,
    text: "",
  },
});
