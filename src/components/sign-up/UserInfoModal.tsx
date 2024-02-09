import React, { useState } from "react";
import Modal from "../common-components/modal";
import { ModalViewProps } from "./LoginModal";
import { GrayInput } from "../common-components/input";
import Button from "../common-components/button";
import Dropdown from "../common-components/dropdown";
import InterestModal from "./InterestModal";
import clsx from "clsx";
import Tab from "../common-components/tab";
import { useSetRecoilState } from "recoil";
import { nicknameModal } from "@component/atoms/modal";

export default function UserInfoModal(props: ModalViewProps) {
  const { isOpen, setIsOpen, isPrevOpen, setIsPrevOpen } = props;

  const [birth, setBirth] = useState<string>("");
  const [career, setCareer] = useState<string>("");
  const [careerChecked, setCareerChecked] = useState<boolean>();
  const [selectStatus, setSelectStatus] = useState<boolean>(false);
  // const SetNickname = useSetRecoilState(nicknameModal);

  const [gender, setGender] = useState<string | null>(null);

  // 다음 모달을 위한 state
  const [interestModal, setInterestModal] = useState<boolean>(false);

  const handleClick = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("birthDay", birth);
      localStorage.setItem("gender", gender as string);
      localStorage.setItem("career", career);
    }
    setIsOpen(false);
    setInterestModal(true);
  };

  const handleBack = () => {
    setIsOpen(false);
    setIsPrevOpen?.(!isPrevOpen);
  };

  const handleToggle = (selectedGender: string) => {
    if (selectedGender === gender) {
      setGender(null); // 이미 선택된 성별을 선택하면 선택 해제
    } else {
      setGender(selectedGender); // 선택되지 않은 성별 선택
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setBirth("");
    setCareer("");
    setGender("");
    // SetNickname("");
    // nickname초기화 해야되는데 아 잘못생각했다
  };

  console.log(gender, birth, career);

  return (
    <>
      <Modal open={isOpen} onClose={handleClose}>
        <Modal.Close onClick={() => setIsOpen(false)} />
        <Modal.Title>회원정보를 입력해주세요</Modal.Title>
        <Modal.SubTitle>
          입력한 정보는 마이페이지에서 변경할 수 있어요.
        </Modal.SubTitle>

        <Modal.Description className="flex flex-col gap-[11px]">
          <div className="flex flex-col gap-[20px]">
            <div>
              <p className="pb-[10px]">생년월일</p>
              <GrayInput
                className="text-center"
                value={birth}
                onChange={(e) => setBirth(e.target.value)}
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
                    "p-[14px] rounded-[6px] w-6/12 text-gray-60 text-h2 bg-gray-10 border border-2 border-gray-10",
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
                    "p-[14px] rounded-[6px] w-6/12 text-gray-60 text-h2 bg-gray-10 border border-2 border-gray-10",
                    gender === "female" &&
                      "border border-2 border-purple-main1 bg-purple-main5 text-purple-main1"
                  )}
                >
                  <span>여자</span>
                </div>
              </div>
            </div>

            <div>
              <p className="pb-[10px]">직업군</p>
              {/* <Tab content="직업군을 선택해주세요." /> */}
              <div
                onClick={() => setCareerChecked((prev) => !prev)}
                className={clsx(
                  "cursor-pointer",
                  "p-[14px] w-full rounded-[6px] inline-block text-gray-60 text-h2 bg-gray-10 border border-2 border-gray-10",
                  !careerChecked &&
                    "border border-2 !border-purple-main1 bg-purple-main5 text-purple-main1"
                )}
              >
                {careerChecked ? `${career}` : "직업군을 선택해주세요."}
              </div>
              {careerChecked ? (
                <></>
              ) : (
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
              )}
            </div>
          </div>
        </Modal.Description>

        <Modal.Footer className="flex flex-row gap-[8px]">
          <Button size="md" color="gray" onClick={handleBack}>
            이전으로
          </Button>
          <Button size="md" color="default" onClick={handleClick}>
            선택완료
          </Button>
        </Modal.Footer>
      </Modal>

      <InterestModal
        isOpen={interestModal}
        setIsOpen={setInterestModal}
        isPrevOpen={isOpen}
        setIsPrevOpen={setIsOpen}
      />
    </>
  );
}
