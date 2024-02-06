import { Dispatch, SetStateAction, useState } from "react";
import Modal from "../common-components/modal";
import { ModalViewProps } from "./LoginModal";
import { GrayInput } from "../common-components/input";

export default function NicknameModal(props: ModalViewProps) {
  const { isOpen, setIsOpen } = props;
  const [nickname, setNickname] = useState<string>("");

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
          </div>
        </Modal.Description>

        <Modal.Footer>
          <p className="text-caption1 text-gray-60 text-center">
            로그인 시 개인정보보호 정책 및 서비스 약관에 동의하는 것으로
            간주하며,
            <br />
            서비스 이용을 위해 이메일과 이름을 수집합니다.
          </p>
        </Modal.Footer>
      </Modal>
    </>
  );
}
