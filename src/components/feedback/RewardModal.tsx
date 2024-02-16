"use client";

import Button from "../common-components/button";
import Modal from "../common-components/modal";
import { ModalViewProps } from "../sign-up/LoginModal";

export const RewardModal = (props: ModalViewProps) => {
  const { isOpen, setIsOpen } = props;

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal open={isOpen} onClose={handleClose} className="">
        <Modal.Close onClick={handleClose} />

        <Modal.Description className="px-[20px] flex flex-col items-center justify-center">
          <div className="h-[400px]">이미지area</div>
          <p className="text-h1 text-center">
            리워드 지급이 완료됐습니다. <br /> 다음 레벨까지
            <span className="text-purple-main1">n</span>번의 피드백이 남았어요!
          </p>
        </Modal.Description>

        <Modal.Footer className="flex items-center">
          <Button
            onClick={() => {
              // TODO : 기존화면으로 돌아가는 이벤트 넣기
            }}
            size="lg"
            color="default"
            className="w-full min-w-[680px]"
          >
            기존 화면으로 돌아가기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
