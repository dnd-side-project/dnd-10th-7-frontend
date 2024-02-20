import { useState } from "react";
import { ModalViewProps } from "../signup/LoginModal";
import Button from "../common-components/button";
import TabComponent from "../common-components/tab/TabComponent";
import { Modal } from "../common-components/modal";

export default function ErrorModal({
  isOpen,
  setIsOpen,
  title,
}: ModalViewProps) {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal open={isOpen} onClose={handleClose} className="">
        <Modal.Close onClick={handleClose} />
        <Modal.Title>
          <div>경고표시 아이콘 같은 거 넣기..</div>
          <div>{title}</div>
        </Modal.Title>

        <Modal.Footer className="mt-[18px]">
          <Button
            size="md"
            color="default"
            className="w-[120px] cursor-pointer"
            onClick={handleClose}
          >
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
