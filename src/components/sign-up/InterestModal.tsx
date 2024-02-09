import { Dispatch, SetStateAction, useState } from "react";
import Modal from "../common-components/modal";
import { ModalViewProps } from "./LoginModal";
import { GrayInput } from "../common-components/input";
import Button from "../common-components/button";
import TabComponent from "../common-components/tab/TabComponent";

export default function InterestModal(props: ModalViewProps) {
  const { isOpen, setIsOpen, isPrevOpen, setIsPrevOpen } = props;

  const localNickname =
    typeof window !== "undefined" ? localStorage.getItem("nickname") : "error";

  const handleBack = () => {
    setIsOpen(false); // 현재 모달 닫고
    setIsPrevOpen?.(!isPrevOpen); // 이전 모달 있을 경우 다시 열기
  };

  const handleRegister = () => {
    // sign-up event function
    console.log("sign-up start");
    alert("sign-up");
  };

  return (
    <>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} className="">
        <Modal.Close onClick={() => setIsOpen(false)} />
        <Modal.Title>
          <div>어떤 분야에 관심이 있나요?</div>
        </Modal.Title>
        <Modal.SubTitle>
          <div>
            1개 이상의 관심분야를 골라주세요. <b>{localNickname}</b>님에게 맞는
            프로젝트를 추천해 드릴게요. (선택)
          </div>
        </Modal.SubTitle>

        <Modal.Description className="flex flex-col gap-[11px]">
          <TabComponent />
        </Modal.Description>

        <Modal.Footer className="flex flex-row gap-[8px]">
          <Button size="md" color="gray" onClick={handleBack}>
            이전으로
          </Button>
          <Button size="md" color="default" onClick={handleRegister}>
            선택완료
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
