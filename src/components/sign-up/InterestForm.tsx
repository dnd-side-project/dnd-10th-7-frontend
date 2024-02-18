import { ModalViewProps } from "./LoginModal";
import Button from "../common-components/button";
import TabComponent from "../common-components/tab/TabComponent";
import {
  birthState,
  careerState,
  genderState,
  interestState,
  nicknameState,
} from "@component/atoms/modal";
import { useRecoilState } from "recoil";
import { userAPI } from "@component/api/userAPI";
import { Modal } from "../common-components/modal";
import { useState } from "react";

export default function InterestForm() {
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [birthDay, setBirthday] = useRecoilState(birthState);
  const [gender, setGender] = useRecoilState(genderState);
  const [career, setCareer] = useRecoilState(careerState);

  const [interestedList, setInterestedList] = useRecoilState(interestState);

  //   const [interestedList, setInterestedList] = useState<string[]>([]);

  const localNickname =
    typeof window !== "undefined" ? localStorage.getItem("nickname") : "error";

  return (
    <>
      <Modal.Title>
        <div>어떤 분야에 관심이 있나요?</div>
      </Modal.Title>
      <Modal.SubTitle>
        <div>
          1개 이상의 관심분야를 골라주세요. <b>{localNickname}</b>님에게 맞는
          프로젝트를 추천해 드릴게요. (선택)
        </div>
      </Modal.SubTitle>

      <Modal.Description className="flex flex-col gap-[11px]">
        <TabComponent
          interestedList={interestedList}
          setInterestedList={setInterestedList}
        />
        <></>
      </Modal.Description>
    </>
  );
}
