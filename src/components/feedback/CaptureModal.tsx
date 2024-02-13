"use client";

import { useState } from "react";
import Button from "../common-components/button";
import Modal from "../common-components/modal";

export const CaptureModal = ({ isOpen }: { isOpen: boolean }) => {
  const handleClose = () => {
    // close event
  };

  return (
    <>
      <Modal open={isOpen} onClose={handleClose} className="">
        <Modal.Close onClick={handleClose} />

        <Modal.Description className="px-[20px]">
          <>
            <div className="w-[680px] h-[330px] bg-purple-main5 rounded-[20px]">
              제출 화면 업로드하기
            </div>
          </>
        </Modal.Description>

        <Modal.Footer className="flex items-center">
          <Button size="lg" color="default" className="w-full">
            피드백 완료하고 리워드 받기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
