"use client";
import { useState, useRef, useEffect } from "react";
import RegisterSendbackTitleData from "./RegisterSendbackTitleData";
import { ProjectData } from "@component/types/Sendback";
import RegisterSendbackInputTitle from "./RegisterSendbackInputTitle";
import RegisterSendbackUserInfo from "./RegisterSendbackUserInfo";
import RegisterSendbackTitle from "./RegisterSendbackTitle";
import PurpleInput from "@component/components/common-components/input/PurPleInput";
import PurpleTextarea from "@component/components/common-components/textarea/Textarea";
import Button from "@component/components/common-components/button/Button";
import Modal from "@component/components/common-components/modal/Modal";

export default function RegisterSendback() {
  const projectData: ProjectData = {
    projectId: 1,
    title: "팅클(Tincle) - 우리들만의 피드 폐쇄형 SNS 서비스",
    fields: "예술/대중문화",
    process: "기획중",
    username: "철수",
    userlevel: "1",
    profileImageUrl: "/assets/profile_img.png",
    createdAt: "2022-05-05",
  };

  // title
  const [titleValue, setTitleValue] = useState<string>("");
  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // 30자 제한
    if (inputValue.length <= 30) {
      setTitleValue(inputValue);
    }
  };

  // link
  const [linkValue, setLinkValue] = useState<string>("");
  const handleLinkChange = (event: any) => {
    setLinkValue(event.target.value);
  };

  // content
  const [contentValue, setContentValue] = useState<string>("");
  const handleContentChange = (event: any) => {
    setContentValue(event.target.value);
  };

  // submit fail
  const linkRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [submitClicked, setSubmitClicked] = useState<boolean>(false);

  // modal
  const [isEssentialOpen, setIsEssentailOpen] = useState<boolean>(false);
  const [isSubmitOpen, setIsSubmitOpen] = useState<boolean>(false);

  // award
  const [awardValue, setAwardValue] = useState<string>("");
  const handleAwardChange = (event: any) => {
    setAwardValue(event.target.value);
  };

  const onSubmit = () => {
    if (linkValue.length === 0 || contentValue.length === 0) {
      setIsEssentailOpen(true);
    } else {
      // TODO: api 로직 추가
      setIsSubmitOpen(true);
    }

    // focus
    if (linkRef.current) {
      linkRef.current.focus();
    }
    if (contentRef.current) {
      contentRef.current.focus();
    }
    setSubmitClicked(true);
  };

  // Invalid
  const linkInvalid = submitClicked && linkValue.length === 0;
  const contentInvalid = submitClicked && contentValue.length === 0;

  useEffect(() => {
    if (submitClicked) {
      focus();
    }
  }, [submitClicked]);

  return (
    <div className="w-[1440px] flex flex-col items-center">
      <section className="max-w-[1080px] w-full mt-[135px]">
        {/* 프로젝트 이름 */}
        <RegisterSendbackTitleData
          title={projectData.title}
          field={projectData.fields}
          process={projectData.process}
        />
        {/* sendback title */}
        <RegisterSendbackInputTitle
          titleValue={titleValue}
          onTitleChange={onTitleChange}
        />
        {/* user info */}
        <RegisterSendbackUserInfo
          username={projectData.username}
          userlevel={projectData.userlevel}
          profileImg={projectData.profileImageUrl}
          createdAt={projectData.createdAt}
        />
        {/* link */}
        <RegisterSendbackTitle title="피드백 요청 링크" />
        <PurpleInput
          value={linkValue}
          onChange={handleLinkChange}
          placeholder="링크를 입력하세요"
          shape="rounded"
          size="lg"
          textSize="lg"
          borderSize="md"
          backgroundColors="white"
          ref={linkRef}
          className={linkInvalid ? "border-error-main" : "border-purple-main1"}
        />

        {/* content */}
        <RegisterSendbackTitle title="피드백 요청 내용" />
        <div className="w-[707px]">
          <PurpleTextarea
            value={contentValue}
            onChange={handleContentChange}
            placeholder="피드백 요청 내용을 입력하세요."
            size="lg"
            backgroundColors="white"
            borderSize="md"
            textSize="lg"
            entire={500}
            className={
              contentInvalid ? "border-error-main" : "border-purple-main1"
            }
          />
        </div>

        {/* period */}
        <RegisterSendbackTitle title="기간" />
        {/* TODO: merge 후 달력 추가 */}

        {/* reward */}
        <RegisterSendbackTitle title="추가 리워드" />
        <div className="w-[707px]">
          <PurpleTextarea
            value={awardValue}
            onChange={handleAwardChange}
            placeholder="따로 지급하실 추가 리워드가 있다면 입력해주세요."
            size="md"
            backgroundColors="white"
            borderSize="md"
            textSize="md"
            entire={100}
            className="border-purple-main1"
            // className={isInvalid ? "border-error-main" : "border-purple-main1"}
          />
        </div>

        {/* submit */}
        <div className="mt-[185px] flex justify-end mb-[154px]">
          <Button
            size="lg"
            color="border"
            className="py-[14.5px] px-[49.5px] me-5"
          >
            임시저장
          </Button>
          <Button
            size="lg"
            className="py-[14.5px] px-[49.5px]"
            onClick={onSubmit}
          >
            등록하기
          </Button>
        </div>
      </section>

      {/* 필수 입력 모달 */}
      <Modal
        open={isEssentialOpen}
        onClose={() => setIsEssentailOpen(false)}
        className="w-[374px]"
      >
        <Modal.Title>
          <div>필수 정보를 입력해주세요</div>
        </Modal.Title>
        <Modal.Footer>
          <div className="flex space-x-[8px]">
            <Button
              onClick={() => setIsEssentailOpen(false)}
              className="min-w-[123px]"
            >
              확인
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      {/* 제출 모달 */}
      <Modal
        open={isSubmitOpen}
        onClose={() => setIsSubmitOpen(false)}
        className="w-[473px]"
      >
        <Modal.Close onClick={() => setIsSubmitOpen(false)} />
        <Modal.Title>
          <div>피드백 요청이 완료되었습니다.</div>
        </Modal.Title>
        <Modal.Description>
          <>{/* TODO: 캐릭터 추가 */}</>
        </Modal.Description>
        <Modal.Footer>
          <div className="flex space-x-[8px]">
            {/* TODO: 등록된 글 확인하러 가기 router 추가 */}
            <Button>등록된 글 확인하기</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
