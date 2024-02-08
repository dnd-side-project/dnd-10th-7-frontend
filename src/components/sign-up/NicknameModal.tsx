import { Dispatch, SetStateAction, useState } from "react";
import Modal from "../common-components/modal";
import { ModalViewProps } from "./LoginModal";
import { GrayInput } from "../common-components/input";
import Button from "../common-components/button";
import UserInfoModal from "./UserInfoModal";
import { userAPI } from "@component/api/userAPI";

export default function NicknameModal(props: ModalViewProps) {
  const { isOpen, setIsOpen } = props;
  const [nickname, setNickname] = useState<string>("");

  // 다음 모달을 위한 state
  const [infoModal, setInfoModal] = useState<boolean>(false);

  // 중복확인
  const checkNickname = async () => {
    await userAPI
      .getDuplicatedNickname(nickname)
      .then((res) => {
        console.log("res:", res);
      })
      .catch((err) => {
        console.error("err:", err);
      });
  };

  const handleClick = () => {
    // next step
    console.log("clicked next-step");
    setIsOpen(true); // 현재 모달 닫고
    // 이 사이에 닉네임 값 저장하기

    if (typeof window !== "undefined")
      localStorage.setItem("nickname", nickname);

    setInfoModal(true); // 다음 모달 열기
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
          <div>닉네임을 입력해주세요</div>
        </Modal.Title>
        <Modal.SubTitle>
          <div>입력한 닉네임은 마이페이지에서 변경할 수 있어요.</div>
        </Modal.SubTitle>

        <Modal.Description className="flex flex-col gap-[11px]">
          <div>
            <GrayInput
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="닉네임을 입력해주세요."
              size="xs"
            />
            <button onClick={checkNickname}>중복확인</button>
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

      <UserInfoModal isOpen={infoModal} setIsOpen={setInfoModal} />
    </>
  );
}
