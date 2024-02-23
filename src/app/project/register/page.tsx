"use client";
import { useState, useRef, useEffect } from "react";

import Button from "@component/components/common-components/button/Button";
import RegisterProjectInputTitle from "./RegisterProjectInputTitle";
import RegisterProjectInputCheck from "./ReigsterProjectInputCheck";
import RegisterProjectInputPeriod from "./RegisterProjectInputPeriod";
import RegisterProjectInputContent from "./RegisterProjectInputContent";
import PurpleInput from "@component/components/common-components/input/PurPleInput";
import RegisterProjectInputImage from "./RegisterProjectInputImage";
import { Modal } from "@component/components/common-components/modal";
import Image from "next/image";

import { usePostProjectMutation } from "@component/hooks/useProject";
import { useRouter } from "next/navigation";

export default function RegisterProject() {
  const router = useRouter();

  // title
  const [titleValue, setTitleValue] = useState<string>("");
  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };

  //subtitle
  const [subTitleValue, setSubTitleValue] = useState<string>("");
  const onSubTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubTitleValue(e.target.value);
  };

  // category options
  const [selectedOption, setSelectedOption] = useState<string>("");
  const handleCheckBoxChange = (option: string) => {
    setSelectedOption(option);
  };

  // progress options
  const [selectedProgress, setSelectedProgress] = useState<string>("");
  const handleProgressCheckBoxChange = (option: string) => {
    setSelectedProgress(option);
  };

  // member
  const [frontMember, setFrontMember] = useState<string>("0명");
  const [backMember, setBackMember] = useState<string>("0명");
  const [designMember, setDesignMember] = useState<string>("0명");
  const [pmMember, setPMMember] = useState<string>("0명");

  // content
  const [content, setContent] = useState<string>("");
  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };

  // date
  const [startDate, setStartDate] = useState<string>("");
  const [startIndex, setStartIndex] = useState<number>();
  const [endDate, setEndDate] = useState<string>("");
  const [endIndex, setEndIndex] = useState<number>();

  // service link
  const [serviceLink, setServiceLink] = useState<string>("");
  const handleServiceLinkChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setServiceLink(event.target.value);
  };

  // preview Img
  const [filePreviews, setFilePreviews] = useState<string[]>([]);
  // img file
  const [fileList, setFileList] = useState<File[]>([]);

  // submit fail
  const subTitleRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [submitClicked, setSubmitClicked] = useState<boolean>(false);

  // modal
  const [isEssentialOpen, setIsEssentailOpen] = useState<boolean>(false);
  const [isSubmitOpen, setIsSubmitOpen] = useState<boolean>(false);

  // mutation
  const mutation = usePostProjectMutation();
  const [projectId, setProjectId] = useState<number>();

  // submit
  const onSubmit = async () => {
    if (
      titleValue.length === 0 ||
      subTitleValue.length === 0 ||
      content.length === 0 ||
      selectedOption === "" ||
      selectedProgress === "" ||
      (frontMember === "0명" &&
        backMember === "0명" &&
        designMember === "0명" &&
        pmMember === "0명") ||
      startDate === "" ||
      endDate === ""
    ) {
      setIsEssentailOpen(true);
    } else {
      // form data 담아서
      const formData = {
        titleValue,
        subTitleValue,
        selectedOption,
        selectedProgress,
        frontMember: parseInt(frontMember, 10),
        backMember: parseInt(backMember, 10),
        designMember: parseInt(designMember, 10),
        pmMember: parseInt(pmMember, 10),
        content,
        startDate,
        endDate,
        serviceLink,
        fileList,
      };

      try {
        const data = await mutation.mutateAsync(formData);
        // 완료 모달 창 열기
        setIsSubmitOpen(true);
        // 프로젝트 ID 저장하기
        setProjectId(data.data.data.projectId);
      } catch (error) {
        // TODO: 등록 실패 모달 만들기
        // 필수 입력 모달 창 열기
        setIsEssentailOpen(true);
      }
    }

    // focus
    if (subTitleRef.current) {
      subTitleRef.current.focus();
    }
    if (contentRef.current) {
      contentRef.current.focus();
    }
    setSubmitClicked(true);
  };

  // Invalid
  const subTitleInvalid = submitClicked && subTitleValue.length === 0;
  const contentInvalid = submitClicked && content.length === 0;

  useEffect(() => {
    if (submitClicked) {
      focus();
    }
  }, [submitClicked]);

  return (
    <div className="w-[1440px] flex flex-col items-center justify-center">
      <section className="max-w-[1080px] w-full mt-[135px]">
        {/* Title */}
        <RegisterProjectInputTitle
          titleValue={titleValue}
          onTitleChange={onTitleChange}
          subTitleValue={subTitleValue}
          onSubTitleChange={onSubTitleChange}
          subTitleRef={subTitleRef}
          subTitleInvalid={subTitleInvalid}
        />

        {/* check */}
        <RegisterProjectInputCheck
          selectedOption={selectedOption}
          handleCheckBoxChange={handleCheckBoxChange}
          selectedProgress={selectedProgress}
          handleProgressCheckBoxChange={handleProgressCheckBoxChange}
          frontMember={frontMember}
          setFrontMember={setFrontMember}
          backMember={backMember}
          setBackMember={setBackMember}
          designMember={designMember}
          setDesignMember={setDesignMember}
          pmMember={pmMember}
          setPMMember={setPMMember}
          submitClicked={submitClicked}
        />

        {/* period */}
        <RegisterProjectInputPeriod
          startDate={startDate}
          setStartDate={setStartDate}
          startIndex={startIndex}
          setStartIndex={setStartIndex}
          endDate={endDate}
          setEndDate={setEndDate}
          endIndex={endIndex}
          setEndIndex={setEndIndex}
        />

        {/* content */}
        <RegisterProjectInputContent
          content={content}
          handleContentChange={handleContentChange}
          contentRef={contentRef}
          contentInvalid={contentInvalid}
          submitClicked={submitClicked}
        />

        {/* link */}
        <PurpleInput
          defaultValue={serviceLink}
          onChange={handleServiceLinkChange}
          placeholder="서비스 링크 입력하기"
          shape="rounded"
          size="md"
          textSize="md"
          borderSize="lg"
          backgroundColors="white"
          className="mt-6 mb-7"
        />

        {/* image */}
        <RegisterProjectInputImage
          filePreviews={filePreviews}
          setFilePreviews={setFilePreviews}
          fileList={fileList}
          setFileList={setFileList}
        />

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
          <div>프로젝트 등록이 완료되었습니다</div>
        </Modal.Title>
        <Modal.Description>
          <Image
            src={"/assets/modal/project.png"}
            alt="project"
            width={232}
            height={192}
            className="mx-auto mt-[-45px]"
          ></Image>
        </Modal.Description>
        <Modal.Footer>
          <div className="flex space-x-[8px]">
            <Button
              onClick={() => {
                router.push(`/project/${projectId}`);
              }}
            >
              등록된 글 확인하기
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
