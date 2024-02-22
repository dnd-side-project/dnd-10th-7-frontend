import React, { useState } from "react";
import Button from "../common-components/button";
import Dropdown from "../common-components/dropdown";
import GrayInput from "../common-components/input/GrayInput";
import { ModalViewProps } from "../signup/LoginModal";
import { Modal } from "../common-components/modal";

export default function ProfileEditModal(props: ModalViewProps) {
  const { isOpen, setIsOpen, isPrevOpen, setIsPrevOpen } = props;

  const [careerChecked, setCareerChecked] = useState<boolean>();
  const [selectStatus, setSelectStatus] = useState<boolean>(false);
  const [completeModalOpen, setCompleteModalOpen] = useState<boolean>(false);
  const [fields, setFields] = useState<string[]>([]);

  // original info
  let originBirth: any = "";
  let originNickname: any = "";
  let originCareer: any = "";
  if (typeof window !== "undefined") {
    originBirth = localStorage.getItem("birthDay");
    originNickname = localStorage.getItem("nickname");
    originCareer = localStorage.getItem("career");
  }

  const [birth, setBirth] = useState(originBirth);
  const [nickname, setNickname] = useState(originNickname);
  const [career, setCareer] = useState(originCareer);

  const { mutate, isPending } = usePutUserDataMutation({
    nickname,
    career,
    birthday: birth,
    fields,
  });

  const handleClick = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("birthDay", birth);
      localStorage.setItem("career", career);
      localStorage.setItem("nickname", nickname);
    }
    setIsOpen(false);
    setCompleteModalOpen(true);
  };

  const handleBack = () => {
    setIsOpen(false);
    setIsPrevOpen?.(!isPrevOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal open={isOpen} onClose={handleClose}>
        <Modal.Close onClick={handleClose} />
        <Modal.Title>프로필 편집</Modal.Title>

        <Modal.Description className="flex flex-col gap-[11px]">
          <div className="flex flex-col gap-[20px]">
            <div>
              <p className="pb-[10px]">닉네임</p>
              <GrayInput
                className="text-center"
                value={nickname}
                onChange={(e: React.ChangeEvent<any>) =>
                  setNickname(e.target.value)
                }
                placeholder={originBirth}
                size="xs"
              />
            </div>
            <div>
              <p className="pb-[10px]">생년월일</p>
              <GrayInput
                className="text-center"
                value={birth}
                onChange={(e: React.ChangeEvent<any>) =>
                  setBirth(e.target.value)
                }
                placeholder={originBirth}
                size="xs"
              />
            </div>

            <div className="">
              <p className="pb-[10px]">직업군</p>

              <Dropdown
                size="lg"
                items={["디자이너", "기획자", "프론트엔드", "백엔드"]}
                selectedItem={career}
                setSelectedItem={(selectedItem) => {
                  setCareer(selectedItem);
                  setSelectStatus(true);
                  setCareerChecked(true);
                }}
                textSize="lg"
                place="center"
                padding="md"
              />
            </div>
          </div>
        </Modal.Description>

        <Modal.Footer className="flex flex-row gap-[8px]">
          <Button size="md" color="gray" onClick={handleBack}>
            닫기
          </Button>
          <Button size="md" color="default" onClick={handleClick}>
            수정완료
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <CompleteModal
        title="프로필 수정이 완료되었습니다."
        isOpen={completeModalOpen}
        setIsOpen={setCompleteModalOpen}
      /> */}
    </>
  );
}
