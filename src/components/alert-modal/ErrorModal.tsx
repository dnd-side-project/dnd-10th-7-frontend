import { useState } from "react";
import { ModalViewProps } from "../signup/LoginModal";
import Button from "../common-components/button";
import TabComponent from "../common-components/tab/TabComponent";
import { Modal } from "../common-components/modal";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";

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
        <Modal.Title>
          <div className="flex items-center">
            <WarningRoundedIcon className="text-error-main me-2" fontSize="large" />
            <div>{title}</div>
          </div>
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
