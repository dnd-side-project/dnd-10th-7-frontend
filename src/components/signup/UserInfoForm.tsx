import React, { useState } from "react";
import { ModalViewProps } from "./LoginModal";
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
import { Modal } from "../common-components/modal";

export default function UserInfoForm() {
  const [birth, setBirth] = useRecoilState(birthState);
  const [career, setCareer] = useRecoilState(careerState);
  const [gender, setGender] = useRecoilState(genderState);

  const [careerChecked, setCareerChecked] = useState<boolean>();
  const [selectStatus, setSelectStatus] = useState<boolean>(false);
  const setNickname = useSetRecoilState(nicknameState);

  const handleToggle = (selectedGender: string) => {
    if (selectedGender === gender) {
      // setGender(null); // 이미 선택된 성별을 선택하면 선택 해제
    } else {
      setGender(selectedGender); // 선택되지 않은 성별 선택
    }
  };

  console.log("form에서의 gender", gender);

  return (
    <>
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
              onChange={(e: React.ChangeEvent<any>) => setBirth(e.target.value)}
              placeholder="0000.00.00"
              size="xs"
            />
          </div>
          <div>
            <p className="pb-[10px]">성별</p>
            <div className="w-full flex flex-row gap-[13px] text-center">
              <div
                onClick={() => handleToggle("남자")}
                className={clsx(
                  "cursor-pointer",
                  "p-[14px] rounded-md w-6/12 text-gray-60 text-h2 bg-gray-10 border border-2 border-gray-10",
                  gender === "남자" &&
                    "border border-2 border-purple-main1 bg-purple-main5 text-purple-main1"
                )}
              >
                <span>남자</span>
              </div>
              <div
                onClick={() => handleToggle("여자")}
                className={clsx(
                  "cursor-pointer",
                  "p-[14px] rounded-md w-6/12 text-gray-60 text-h2 bg-gray-10 border border-2 border-gray-10",
                  gender === "여자" &&
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
    </>
  );
}
