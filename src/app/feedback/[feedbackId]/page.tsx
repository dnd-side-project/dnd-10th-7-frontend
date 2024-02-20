"use client";

import SubTitle from "@component/components/common-components/sub-title";
import { CaptureModal } from "@component/components/feedback/CaptureModal";
import { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import Button from "@component/components/common-components/button";
import ProjectSendbackTitleData from "@component/components/project/ProjectSendbackTitleData";
import { ProjectData } from "@component/types/Sendback";
import ProjectSendbackUserInfo from "@component/components/project/ProjectSendbackUserInfo";

type PageParams = {
  feedbackId: number;
};

export default function Feedback({ params }: { params: PageParams }) {
  console.log(params.feedbackId);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  return (
    <div className="mx-auto w-[1080px] mt-[63px] mb-[650px] flex justify-center">
      <div className="flex flex-col gap-3">
        <ProjectSendbackTitleData
          title={projectData.title}
          field={projectData.fields}
          process={projectData.process}
        />
        <span className="pt-[40px] text-head">
          {/* TODO : API reponse 보고 데이터 받는 구조 다시 수정 */}
          기획 관련 설문조사를 진행해주세요!
        </span>

        <ProjectSendbackUserInfo
          username={projectData.username}
          userlevel={projectData.userlevel}
          profileImg={projectData.profileImageUrl}
          createdAt={projectData.createdAt}
        />

        <div className="pt-[50px] flex flex-col gap-[50px]">
          {/* 피드백 요청 링크 */}
          <SubTitle title="피드백 요청 링크" className="w-3/5 max-w-[700px]">
            <div className="flex justify-between bg-purple-main5 items-center px-5 py-2 border border-purple-main1 rounded-full text-body1">
              <span className="text-gray-80">aiejfasjlfaijelifajsliejf</span>
              <span
                className="text-purple-active"
                onClick={() => window.open("/")}
              >
                링크이동
              </span>
            </div>

            <span className="font-medium text-body1 mt-6">
              기획 관련 설문조사 과정에 있습니다. 한번이라도 SNS를 써보신 분이면
              한 번만 참여 부탁드립니다.
            </span>
          </SubTitle>

          {/* 기간 */}
          <SubTitle title="기간">2024.01.21 ~ 2024.02.07</SubTitle>

          <SubTitle title="추가 리워드">
            추첨을 통해 스타벅스 아메리카노 기프티콘을 드립니다.
          </SubTitle>
        </div>

        <div className="mt-[50px] flex w-[640px] gap-3 bg-purple-main5 items-center px-6 py-4 border border-purple-main1 rounded-[30px] text-body1">
          <CheckCircleOutlineIcon className="fill-purple-active" />
          <div>
            피드백을 완료하시고
            <span className="text-purple-active">
              &nbsp;최종 제출 페이지를 캡쳐
            </span>
            해주세요. <br />
            하단의 버튼을 눌러
            <span className="text-purple-active">
              캡쳐하신 화면을 업로드하셔야 리워드가 지급
            </span>
            됩니다.
          </div>
        </div>

        <Button
          size="md"
          color="default"
          className="mt-3 flex justify-center items-center gap-2 text-white fill-white"
          onClick={() => setIsOpen(true)}
        >
          <InsertPhotoOutlinedIcon />
          캡쳐화면 업로드
        </Button>
      </div>
      <CaptureModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
