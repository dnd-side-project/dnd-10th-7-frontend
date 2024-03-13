"use client";

import SubTitle from "@component/components/common-components/sub-title";
import { CaptureModal } from "@component/components/feedback/CaptureModal";
import { useEffect, useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import Button from "@component/components/common-components/button";
import ProjectSendbackTitleData from "@component/components/project/ProjectSendbackTitleData";
import ProjectSendbackUserInfo from "@component/components/project/ProjectSendbackUserInfo";
import { useGetFeedbackDetail } from "@component/hooks/useFeedback";

type PageParams = {
  feedbackId: number;
  projectId: number;
};

export default function Feedback({ params }: { params: PageParams }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [feedbackData, setFeedbackData] = useState<any>();

  const { data, error, isLoading } = useGetFeedbackDetail(
    params.projectId,
    params.feedbackId
  );

  useEffect(() => {
    if (data) {
      console.log(data.data.data);
      setFeedbackData(data.data.data);
    }
  }, [data]);

  if (error) {
    console.log(error);
  }

  return (
    <div className="mx-auto w-[1080px] mt-[63px] mb-[650px] flex justify-start">
      <div className="flex flex-col gap-3">
        <ProjectSendbackTitleData
          title={feedbackData?.projectTitle}
          field={feedbackData?.field}
          process={feedbackData?.progress}
        />
        <span className="pt-[40px] text-head">
          {feedbackData?.feedbackTitle}
        </span>

        <ProjectSendbackUserInfo
          username={feedbackData?.nickname}
          userlevel={feedbackData?.userLevel}
          profileImg={feedbackData?.profileImageUrl}
          createdAt={feedbackData?.createdAt}
        />

        <div className="pt-[50px] flex flex-col gap-[50px]">
          {/* 피드백 요청 링크 */}
          <SubTitle title="피드백 요청 링크" className="w-3/5 max-w-[700px]">
            <div className="flex justify-between bg-purple-main5 items-center px-5 py-2 border border-purple-main1 rounded-full text-body1">
              <span className="text-gray-80">{feedbackData?.linkUrl}</span>
              <span
                className="text-purple-active"
                onClick={() => window.open(`${feedbackData?.linkUrl}`)}
              >
                링크이동
              </span>
            </div>

            <span className="font-medium text-body1 mt-6">
              {feedbackData?.content}
            </span>
          </SubTitle>

          {/* 기간 */}
          <SubTitle title="기간">
            {feedbackData?.startedAt} ~ {feedbackData?.endedAt}
          </SubTitle>

          <SubTitle title="추가 리워드">{feedbackData?.rewardMessage}</SubTitle>
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
      <CaptureModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        projectId={params.projectId}
        feedbackId={params.feedbackId}
      />
    </div>
  );
}
