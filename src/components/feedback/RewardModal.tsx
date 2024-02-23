"use client";

import Button from "../common-components/button";
import { Modal } from "../common-components/modal";
import { ModalViewProps } from "../signup/LoginModal";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const RewardModal = (props: ModalViewProps) => {
  const { isOpen, setIsOpen, level, feedbackCount, isLevelUp, projectId } =
    props;

  const router = useRouter();

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal open={isOpen} onClose={handleClose} className="">
        <Modal.Close onClick={handleClose} />

        <Modal.Description className="px-[20px] flex flex-col items-center justify-center">
          <Image
            src={"/assets/modal/reward.png"}
            alt="reward"
            width={416}
            height={325}
          ></Image>
          <p className="text-h1 text-center">
            리워드 지급이 완료됐습니다. <br />
            {isLevelUp ? (
              <span className="text-purple-main1">
                {level}으로 레벨 업 되었어요!
              </span>
            ) : (
              <span>
                다음 레벨까지{" "}
                <span className="text-purple-main1">{feedbackCount}</span>번의
                피드백이 남았어요!
              </span>
            )}
          </p>
        </Modal.Description>

        <Modal.Footer className="flex items-center">
          <Button
            onClick={() => {
              router.push(`/project/${projectId}`);
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
