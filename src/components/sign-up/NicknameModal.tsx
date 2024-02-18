import { useEffect, useState } from "react";
import Modal from "../common-components/modal";
import { ModalViewProps } from "./LoginModal";
import Button from "../common-components/button";
import UserInfoModal from "./UserInfoModal";
import { userAPI } from "@component/api/userAPI";
import clsx from "clsx";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useRecoilState } from "recoil";
import { nicknameState } from "@component/atoms/modal";
import GrayInput from "../common-components/input/GrayInput";

export default function NicknameModal(props: ModalViewProps) {
  const { isOpen, setIsOpen } = props;
  // const [nickname, setNickname] = useState<string>("");
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [nickInvalid, setNickInvalid] = useState<boolean>(true);

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
    console.log("clicked next-step");
    setIsOpen(false);

    if (typeof window !== "undefined")
      localStorage.setItem("nickname", nickname);

    setInfoModal(true);
  };

  const checkInvalid = () => {
    // invalid check
    if (nickname.length > 8) {
      setNickInvalid(false);
    } else {
      setNickInvalid(true);
    }
  };

  useEffect(() => {
    checkInvalid();
  }, [nickname]);

  const handleClose = () => {
    setNickname("");
    setIsOpen(false);
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={handleClose}
        // className="w-[480px]"
      >
        <Modal.Close onClick={handleClose} />
        <Modal.Title>
          <div>닉네임을 입력해주세요</div>
        </Modal.Title>
        <Modal.SubTitle>
          <div>입력한 닉네임은 마이페이지에서 변경할 수 있어요.</div>
        </Modal.SubTitle>

        <Modal.Description className="flex flex-col gap-[11px]">
          <div className="relative">
            <GrayInput
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="닉네임을 입력해주세요."
              size="xs"
              className={clsx(
                !nickInvalid &&
                  "caret-error-main focus:ring-0 focus:outline-error-main"
              )}
            />
            <button
              onClick={checkNickname}
              className="absolute right-[16px] top-[9px] h-[32px] rounded-[5px] p-[9px] bg-[#EEEEEE] text-gray-80 text-caption1 items-center flex justify-center text-center"
            >
              중복확인
            </button>
            <div className="pt-[8px] text-caption1 text-gray-60 flex flex-row justify-between">
              {!nickInvalid ? (
                <p className="text-error-main">
                  한글, 영어 (2~8자) 이내로 입력해주세요.
                </p>
              ) : nickname.length === 0 ? (
                <p>한글, 영어 (2~8자) 이내로 입력해주세요.</p>
              ) : (
                <div className="flex flex-row items-center gap-[4px] text-purple-main1 text-caption1">
                  <CheckCircleOutlineIcon className="text-body2" />
                  <p>사용 가능한 닉네임이에요.</p>
                </div>
              )}
              <p>({nickname.length}/8)</p>
            </div>
          </div>
        </Modal.Description>

        <Modal.Footer className="flex flex-row gap-[8px]">
          {/* <Button size="md" color="gray">
            이전으로
          </Button> */}
          <Button
            size="md"
            color="default"
            onClick={handleClick}
            disabled={nickname.length > 8 || nickname.length === 0}
          >
            선택완료
          </Button>
        </Modal.Footer>
      </Modal>

      <UserInfoModal
        isOpen={infoModal}
        setIsOpen={setInfoModal}
        isPrevOpen={isOpen}
        setIsPrevOpen={setIsOpen}
      />
    </>
  );
}
