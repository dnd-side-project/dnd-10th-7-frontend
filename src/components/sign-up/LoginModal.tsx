import { Dispatch, SetStateAction, useState } from "react";
import { Modal } from "../common-components/modal";

export type ModalViewProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  //
  isPrevOpen?: boolean;
  setIsPrevOpen?: Dispatch<SetStateAction<boolean>>;
};

export default function LoginModal(props: ModalViewProps) {
  const { isOpen, setIsOpen } = props;

  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        // className="w-[480px]"
      >
        <Modal.Close onClick={() => setIsOpen(false)} />
        <Modal.Title>
          <div>Sendback 시작하기</div>
        </Modal.Title>
        <Modal.SubTitle>
          <div>소셜 계정에 빠르게 로그인하고 피드백을 시작해보세요!</div>
        </Modal.SubTitle>

        <Modal.Description className="flex flex-col gap-[11px]">
          <button>google temp btn</button>
          <button>kakao temp btn</button>
        </Modal.Description>

        <Modal.Footer>
          <p className="text-caption1 text-gray-60 text-center">
            로그인 시 개인정보보호 정책 및 서비스 약관에 동의하는 것으로
            간주하며, 서비스 이용을 위해 이메일과 이름을 수집합니다.
          </p>
        </Modal.Footer>
      </Modal>
    </>
  );
}
