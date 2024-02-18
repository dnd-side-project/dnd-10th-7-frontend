import { useRecoilState } from "recoil";
import { Modal } from "../common-components/modal";
import { ModalViewProps } from "./LoginModal";
import {
  birthState,
  careerState,
  genderState,
  interestState,
  nicknameState,
} from "@component/atoms/modal";
import Button from "../common-components/button";
import { useState } from "react";
import NicknameForm from "./NicknameForm";
import UserInfoForm from "./UserInfoForm";
import InterestForm from "./InterestForm";
import { userAPI } from "@component/api/userAPI";

export default function SignUpModal({ isOpen, setIsOpen }: ModalViewProps) {
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [birthDay, setBirthday] = useRecoilState(birthState);
  const [gender, setGender] = useRecoilState(genderState);
  const [career, setCareer] = useRecoilState(careerState);
  const [interestedList, setInterestedList] = useRecoilState(interestState);

  // step state
  const [step, setStep] = useState<number>(1);

  const handleClose = () => {
    setNickname("");
    setBirthday("");
    setGender("");
    setCareer("");
    setInterestedList([]);
    setIsOpen(false);
    setStep(1);
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleClick = () => {
    console.log("handle click");

    if (step === 1 && typeof window !== "undefined") {
      localStorage.setItem("nickname", nickname);
    }

    if (step === 2 && typeof window !== "undefined") {
      localStorage.setItem("birthDay", birthDay);
      localStorage.setItem("gender", gender as string);
      localStorage.setItem("career", career);
    }

    if (step === 3 && typeof window !== "undefined") {
      localStorage.setItem("birthDay", birthDay);
      localStorage.setItem("gender", gender as string);
      localStorage.setItem("career", career);
    }

    handleNextStep();
  };

  const disabledBtn = () => {
    if (step === 1 && (nickname.length > 8 || nickname.length === 0))
      return true;
    if (step === 2 && (birthDay === "" || gender === "" || career === ""))
      return true;
    if (step === 3 && interestedList.length === 0) return true;
    return false;
  };

  const handleRegister = async () => {
    // todo - 추후 리액트 쿼리 훅 사용해서 fetch할 예정
    console.log("sign-up start");
    await userAPI
      .postUserInfo({ nickname, birthDay, gender, career, interestedList })
      .then((res) => {
        console.log("res.data:", res.data);
        alert("sign-up");
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={handleClose}
        // className="w-[480px]"
      >
        <Modal.Close onClick={handleClose} />

        {step === 1 && <NicknameForm />}
        {step === 2 && <UserInfoForm />}
        {step === 3 && <InterestForm />}

        <Modal.Footer className="flex flex-row gap-[8px]">
          {step !== 1 && (
            <Button size="md" color="gray" onClick={handlePrevStep}>
              이전으로
            </Button>
          )}

          {step === 3 ? (
            <Button
              size="md"
              color={disabledBtn() ? "disabled" : "active"}
              onClick={handleRegister}
              disabled={disabledBtn()}
            >
              가입하기
            </Button>
          ) : (
            <Button
              size="md"
              color={disabledBtn() ? "disabled" : "active"}
              onClick={handleClick}
              disabled={disabledBtn()}
            >
              선택완료
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
