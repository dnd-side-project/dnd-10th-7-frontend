"use client";

import ModalMain from "./Modal";
import { ModalClose } from "./ModalClose";
import { ModalDescription } from "./ModalDescription";
import { ModalFooter } from "./ModalFooter";
import { ModalSubTitle } from "./ModalSubTitle";
import { ModalTitle } from "./ModalTitle";

export * from "./ModalContext";
export const Modal = Object.assign(ModalMain, {
  Title: ModalTitle,
  SubTitle: ModalSubTitle,
  Close: ModalClose,
  Description: ModalDescription,
  Footer: ModalFooter,
});

export const MODAL_TRANSITION_DURATION = 150;
