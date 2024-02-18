import React, { useState } from "react";
import Button from "../common-components/button";
import Dropdown from "../common-components/dropdown";
import clsx from "clsx";
import Tab from "../common-components/tab";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  birthState,
  careerState,
  genderState,
  nicknameState,
} from "@component/atoms/modal";
import GrayInput from "../common-components/input/GrayInput";
import { userInfo } from "os";
import { ModalViewProps } from "../sign-up/LoginModal";
import CompleteModal from "../alert-modal/CompleteModal";
import { Modal } from "../common-components/modal";

export default function ProfileEditModal(props: ModalViewProps) {
  const { isOpen, setIsOpen, isPrevOpen, setIsPrevOpen } = props;

  const [birth, setBirth] = useRecoilState(birthState);
  const [career, setCareer] = useRecoilState(careerState);
  const [gender, setGender] = useRecoilState(genderState);
  const [nickname, setNickname] = useRecoilState(nicknameState);

  const [careerChecked, setCareerChecked] = useState<boolean>();
  const [selectStatus, setSelectStatus] = useState<boolean>(false);

  const [completeModalOpen, setCompleteModalOpen] = useState<boolean>(false);

  const handleClick = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("birthDay", birth);
      localStorage.setItem("gender", gender as string);
      localStorage.setItem("career", career);
    }
    setIsOpen(false);
    setCompleteModalOpen(true);
  };

  const handleBack = () => {
    setIsOpen(false);
    setIsPrevOpen?.(!isPrevOpen);
  };

  const handleToggle = (selectedGender: string) => {
    if (selectedGender === gender) {
      // setGender(null); // 이미 선택된 성별을 선택하면 선택 해제
    } else {
      setGender(selectedGender); // 선택되지 않은 성별 선택
    }
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
                placeholder="이채민"
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
                placeholder="0000.00.00"
                size="xs"
              />
            </div>
            <div>
              <p className="pb-[10px]">성별</p>
              <div className="w-full flex flex-row gap-[13px] text-center">
                <div
                  onClick={() => handleToggle("male")}
                  className={clsx(
                    "cursor-pointer",
                    "p-[14px] rounded-md w-6/12 text-gray-60 text-h2 bg-gray-10 border border-2 border-gray-10",
                    gender === "male" &&
                      "border border-2 border-purple-main1 bg-purple-main5 text-purple-main1"
                  )}
                >
                  <span>남자</span>
                </div>
                <div
                  onClick={() => handleToggle("female")}
                  className={clsx(
                    "cursor-pointer",
                    "p-[14px] rounded-md w-6/12 text-gray-60 text-h2 bg-gray-10 border border-2 border-gray-10",
                    gender === "female" &&
                      "border border-2 border-purple-main1 bg-purple-main5 text-purple-main1"
                  )}
                >
                  <span>여자</span>
                </div>
              </div>
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

      <CompleteModal
        title="프로필 수정이 완료되었습니다."
        isOpen={completeModalOpen}
        setIsOpen={setCompleteModalOpen}
      />
    </>
  );
}
