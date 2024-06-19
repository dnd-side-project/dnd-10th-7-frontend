import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { ModalViewProps } from "./LoginModal";
import { userAPI } from "@component/api/userAPI";
import clsx from "clsx";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useRecoilState } from "recoil";
import { nicknameState } from "@component/atoms/userInfoAtom";
import GrayInput from "../common-components/input/GrayInput";
import { Modal } from "../common-components/modal";
import Button from "../common-components/button";
import { useNicknameValid } from "@component/hooks/useAuth";

export default function NicknameForm() {
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [nickInvalid, setNickInvalid] = useState<boolean>(true);

  const { data, error, isLoading } = useNicknameValid(nickname);

  const checkNickname = () => {
    if (data.data.check === false) {
      alert("사용 가능한 닉네임입니다.");
      setNickInvalid(true);
    } else {
      setNickInvalid(false);
    }
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

  return (
    <>
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
    </>
  );
}
