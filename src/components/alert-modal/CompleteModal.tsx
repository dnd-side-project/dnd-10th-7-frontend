import { useState } from "react";
import { ModalViewProps } from "../sign-up/LoginModal";
import Button from "../common-components/button";
import TabComponent from "../common-components/tab/TabComponent";
import { Modal } from "../common-components/modal";

export default function CompleteModal({
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
