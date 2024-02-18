import { useState } from "react";
import { Modal } from "../common-components/modal";
import { ModalViewProps } from "../sign-up/LoginModal";
import Button from "../common-components/button";
import TabComponent from "../common-components/tab/TabComponent";

export default function ErrorModal(props: ModalViewProps) {
  const { isOpen, setIsOpen } = props;

  // 나중에 props으로 받을 error-text
  const title = "예기치 못한 오류가 발생했습니다.";

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
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
