import { Dispatch, SetStateAction, useState } from "react";
import Modal from "../common-components/modal";
import { ModalViewProps } from "./LoginModal";
import { GrayInput } from "../common-components/input";
import Button from "../common-components/button";

export default function UserInfoModal(props: ModalViewProps) {
  const { isOpen, setIsOpen } = props;

  const [birth, setBirth] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [career, setCareer] = useState<Array<string>>();

  const handleClick = () => {
    localStorage.setItem("birthDay", birth);
    localStorage.setItem("gender", gender);
    localStorage.setItem("career", JSON.stringify(career));
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        // className="w-[480px]"
      >
        <Modal.Close onClick={() => setIsOpen(false)} />
        <Modal.Title>
          <div>회원정보를 입력해주세요</div>
        </Modal.Title>
        <Modal.SubTitle>
          <div>입력한 정보는 마이페이지에서 변경할 수 있어요.</div>
        </Modal.SubTitle>

        <Modal.Description className="flex flex-col gap-[11px]">
          <div>
            <p>생년월일</p>
            <p>성별</p>
            <p>관심분야</p>
          </div>
        </Modal.Description>

        <Modal.Footer className="flex flex-row gap-[8px]">
          <Button size="md" color="gray">
            이전으로
          </Button>
          <Button size="md" color="default" onClick={handleClick}>
            선택완료
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
