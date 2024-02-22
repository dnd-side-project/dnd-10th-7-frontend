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
} from "@component/atoms/userInfoAtom";
import GrayInput from "../common-components/input/GrayInput";
import { userInfo } from "os";
import { ModalViewProps } from "../signup/LoginModal";
import CompleteModal from "../alert-modal/CompleteModal";
import { Modal } from "../common-components/modal";
import { usePutUserDataMutation } from "@component/hooks/useMyPage";
import TabComponent from "../common-components/tab/TabComponent";
import Loading from "../loading/Loading";

export default function ProfileEditModal(props: ModalViewProps) {
  const { isOpen, setIsOpen, isPrevOpen, setIsPrevOpen } = props;

  const [careerChecked, setCareerChecked] = useState<boolean>();
  const [selectStatus, setSelectStatus] = useState<boolean>(false);
  const [completeModalOpen, setCompleteModalOpen] = useState<boolean>(false);
  const [fields, setFields] = useState<string[]>([]);
  
  
  // original info
  let originBirth: any = "";
  let originNickname: any = "";
  let originGender: any = "";
  let originCareer: any = "";
  if (typeof window !== "undefined") {
    originBirth = localStorage.getItem("birthDay");
    originNickname = localStorage.getItem("nickname");
    originGender = localStorage.getItem("gender");
    originCareer = localStorage.getItem("career");
  }
  
  const [birth, setBirth] = useState(originBirth);
  const [nickname, setNickname] = useState(originNickname);
  const [gender, setGender] = useState(originGender);
  const [career, setCareer] = useState(originCareer);
  
  const { mutate, isPending } = usePutUserDataMutation({
    nickname,
    career,
    birthday: birth,
    fields,
  });

  const handleClick = () => {
    mutate();

    if (isPending) return <Loading />;

    if (typeof window !== "undefined") {
      localStorage.setItem("birthDay", birth);
      localStorage.setItem("gender", gender as string);
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

        <Modal.Description className="py-0 px-4 pb-6">
          <div className="flex flex-col gap-[20px]">
            <div>
              <p className="pb-[10px]">닉네임</p>
              <GrayInput
                className="text-center w-full"
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
                className="w-full text-center"
                value={birth}
                onChange={(e: React.ChangeEvent<any>) =>
                  setBirth(e.target.value)
                }
                placeholder={originBirth}
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

            <div>
              <p className="pb-[10px]">관심 분야</p>
              <TabComponent
                interestedList={fields}
                setInterestedList={setFields}
              />
            </div>
          </div>
        </Modal.Description>

        <Modal.Footer className="flex flex-row gap-[8px] h-full">
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
