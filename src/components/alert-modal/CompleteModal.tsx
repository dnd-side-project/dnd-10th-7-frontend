import { useState } from "react";
import { ModalViewProps } from "../sign-up/LoginModal";
import Button from "../common-components/button";
import TabComponent from "../common-components/tab/TabComponent";
import { Modal } from "../common-components/modal";

export default function CompleteModal(props: ModalViewProps) {
  const { isOpen, setIsOpen } = props;

  // 나중에 props으로 받을 complete-text
  const title = "회원가입이 완료되었습니다.";

  return (
    <>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} className="">
        <Modal.Close onClick={() => setIsOpen(false)} />
        <Modal.Title>
          <div>{title}</div>
        </Modal.Title>
        <Modal.Description>
          <></>
        </Modal.Description>

        <Modal.Footer>
          <Button size="md" color="default">
            시작하기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
