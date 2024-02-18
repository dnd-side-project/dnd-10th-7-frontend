import { useRecoilState } from "recoil";
import { Modal } from "../common-components/modal";
import { ModalViewProps } from "./LoginModal";
import {
  birthState,
  careerState,
  genderState,
  interestState,
  nicknameState,
} from "@component/atoms/userInfoAtom";
import Button from "../common-components/button";
import { useState } from "react";
import NicknameForm from "./NicknameForm";
import UserInfoForm from "./UserInfoForm";
import InterestForm from "./InterestForm";
import { userAPI } from "@component/api/userAPI";
import { useSignUp } from "@component/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function SignUpModal({ isOpen, setIsOpen }: ModalViewProps) {
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [birthday, setBirthday] = useRecoilState(birthState);
  const [gender, setGender] = useRecoilState(genderState);
  const [career, setCareer] = useRecoilState(careerState);
  const [fields, setFields] = useRecoilState(interestState);

  const router = useRouter();

  const signToken: string | null =
    (typeof window !== "undefined" &&
      window.sessionStorage.getItem("signToken")) ||
    null;

  // step state
  const [step, setStep] = useState<number>(1);

  const handleClose = () => {
    setNickname("");
    setBirthday("");
    setGender("");
    setCareer("");
    setFields([]);
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
      localStorage.setItem("birthDay", birthday);
      localStorage.setItem("gender", gender as string);
      localStorage.setItem("career", career);
      console.log(localStorage.getItem("gender"), "hihi");
    }

    // if (step === 3 && typeof window !== "undefined") {
    // }

    handleNextStep();
  };

  const disabledBtn = () => {
    if (step === 1 && (nickname.length > 8 || nickname.length === 0))
      return true;
    if (step === 2 && (birthday === "" || gender === "" || career === ""))
      return true;
    if (step === 3 && fields.length === 0) return true;
    return false;
  };

  const { mutate, data, error, isPending } = useSignUp({
    nickname,
    birthday,
    gender,
    career,
    fields,
    signToken,
  });

  const handleRegister = () => {
    mutate();
    console.log("data:", data);
    console.log("err:", error);
    router.push("/");

    // 성공 시 메인으로 이동
    // TODO : 실패시 알림 띄우고 처리 로직 필요
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
