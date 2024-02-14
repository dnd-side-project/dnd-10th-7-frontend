"use client";

import RegisterProjectTitle from "./RegisterProjectTitle";
import { InputCheckProps, TeamItem } from "@component/types/Project";
import { useState } from "react";
import Dropdown from "@component/components/common-components/dropdown/Dropdown";
import { RadioCheckBox } from "@component/components/common-components/radiocheckbox/RadioCheckBox";

const RegisterProjectInputCheck = ({
  selectedOption,
  handleCheckBoxChange,
  selectedProgress,
  handleProgressCheckBoxChange,
  frontMember,
  setFrontMember,
  backMember,
  setBackMember,
  designMember,
  setDesignMember,
  pmMember,
  setPMMember,
  submitClicked,
}: InputCheckProps) => {
  // 분야
  const options = [
    "예술/대중문화",
    "금융/핀테크",
    "환경",
    "교육",
    "건강",
    "AI/머신러닝",
    "취미/실용",
    "게임",
    "기타",
  ];

  // 진행도
  const progress = ["기획중", "개발중", "리팩토링중"];

  // 드롭다운
  const range: string[] = [
    "0명",
    "1명",
    "2명",
    "3명",
    "4명",
    "5명",
    "6명",
    "7명",
    "8명",
    "9명",
  ];
  const [showFrontDropdown, setShowFrontDropdown] = useState<boolean>(false);
  const handleFrontDropdownItemClick = (item: any) => {
    setShowFrontDropdown(!showFrontDropdown);
  };
  const [showBackDropdown, setShowBackDropdown] = useState<boolean>(false);
  const handleBackDropdownItemClick = (item: any) => {
    setShowBackDropdown(!showBackDropdown);
  };
  const [showDesignDropdown, setShowDesignDropdown] = useState<boolean>(false);
  const handleDesignDropdownItemClick = (item: any) => {
    setShowDesignDropdown(!showDesignDropdown);
  };
  const [showPmDropdown, setShowPmDropdown] = useState<boolean>(false);
  const handlePmDropdownItemClick = (item: any) => {
    setShowPmDropdown(!showBackDropdown);
  };

  const teams: TeamItem[] = [
    {
      title: "프론트엔드",
      state: showFrontDropdown,
      member: frontMember,
      handleDropdownItemClick: handleFrontDropdownItemClick,
      setMember: setFrontMember,
      setShowDropdown: setShowFrontDropdown,
    },
    {
      title: "백엔드",
      state: showBackDropdown,
      member: backMember,
      handleDropdownItemClick: handleBackDropdownItemClick,
      setMember: setBackMember,
      setShowDropdown: setShowBackDropdown,
    },
    {
      title: "디자인",
      state: showDesignDropdown,
      member: designMember,
      handleDropdownItemClick: handleDesignDropdownItemClick,
      setMember: setDesignMember,
      setShowDropdown: setShowDesignDropdown,
    },
    {
      title: "기획",
      state: showPmDropdown,
      member: pmMember,
      handleDropdownItemClick: handlePmDropdownItemClick,
      setMember: setPMMember,
      setShowDropdown: setShowPmDropdown,
    },
  ];

  return (
    <>
      {/* 분야 */}
      <div className="mb-[74.5px]  mt-[74px]">
        <div className="flex items-center">
          <RegisterProjectTitle title="분야" />
          {!selectedOption && submitClicked && (
            <div className="text-error-main text-body3 mb-4 ms-4">
              필수 입력해주세요
            </div>
          )}
        </div>
        <div className="text-body2 text-gray-60 mb-[18.5px]">
          1개 이하의 분야를 선택해주세요.
        </div>
        <RadioCheckBox
          options={options}
          selectedOption={selectedOption}
          handleCheckBoxChange={handleCheckBoxChange}
          className="flex"
        />
      </div>

      {/* 진행도 */}
      <div className="flex items-center">
        <RegisterProjectTitle title="진행도" />
        {!selectedProgress && submitClicked && (
          <div className="text-error-main text-body3 mb-4 ms-4">
            필수 입력해주세요
          </div>
        )}
      </div>
      <RadioCheckBox
        options={progress}
        selectedOption={selectedProgress}
        handleCheckBoxChange={handleProgressCheckBoxChange}
        className="flex"
      />

      {/* 멤버 */}
      <div className="mt-[74px]">
        <div className="flex items-center">
          <RegisterProjectTitle title="멤버" />
          {frontMember === "0명" &&
            backMember === "0명" &&
            designMember === "0명" &&
            pmMember === "0명" &&
            submitClicked && (
              <div className="text-error-main text-body3 mb-4 ms-4">
                필수 입력해주세요
              </div>
            )}
        </div>
        <div className="flex">
          {teams.map((team, index) => (
            <div key={index} className="flex">
              <p className="me-4 text-h2">{team.title}</p>
              <div className="me-8 mt-[-8px]">
                <Dropdown
                  size="xs"
                  items={range}
                  selectedItem={team.member}
                  setSelectedItem={(selectedItem) => {
                    team.setMember(selectedItem);
                    team.setShowDropdown(false);
                  }}
                  textSize="xs"
                  place="center"
                  padding="xs"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RegisterProjectInputCheck;
