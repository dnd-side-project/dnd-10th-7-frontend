"use client";

import ProjectSendbackTitleData from "@component/components/project/ProjectSendbackTitleData";
import ProjectSendbackUserInfo from "@component/components/project/ProjectSendbackUserInfo";
import Button from "@component/components/common-components/button/Button";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useState, useEffect } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SubTitle from "@component/components/common-components/sub-title/SubTitle";
import {
  useGetProjectDetail,
  useLikeMutation,
  useScrapMutation,
} from "@component/hooks/useProject";
import { useGetProjectFeedbackDetail } from "@component/hooks/useFeedback";
import toast, { Toaster } from "react-hot-toast";
import CommentBox from "@component/components/comment/CommentBox";
import TeamMemberInfo from "./ProjectDetailTeamMemberInfo";
import ProjectDetailFeedBackRequest from "./ProjectDetailFeedBackRequest";
import ProjectDetailImage from "./ProjectDetailImage";

type PageParams = {
  projectId: number;
};

const notify = () =>
  toast.success("로그인이 필요한 서비스에요", {
    style: {
      backgroundColor: "#F9F7FF",
      border: "1px solid #8C82FF",
      padding: "16px",
      color: "#8C82FF",
    },
    icon: "👋",
  });

export default function ProjectDetailPage({ params }: { params: PageParams }) {
  // 로그인 한 유저인지 확인
  const accessToken =
    typeof window !== "undefined" && sessionStorage.getItem("accessToken");

  const { data, error, isLoading } = useGetProjectDetail(params.projectId);
  const { feedbackData, feedbackError, feedbackIsLoading } =
    useGetProjectFeedbackDetail(params.projectId);

  const [projectData, setProjectData] = useState<any>();
  const [projectFeedbackData, setProjectFeedbackData] = useState<any>();
  const [isAuthor, setIsAuthor] = useState<boolean>(false);

  // if (isLoading) {
  //   // TODO: 스켈레톤 코드
  //   return <div></div>
  // }

  useEffect(() => {
    if (data) {
      setProjectData(data.data.data);
    }

    if (feedbackData) {
      setProjectFeedbackData(feedbackData?.data?.data?.feedbacks);
      setIsAuthor(feedbackData?.data?.data.isAuthor);
    }

    // 좋아요, 스크랩 업데이트
    setLikeCount(projectData?.likeCount || 0);
    setLikeState(projectData?.isCheckedLike);
    setScrappedCount(projectData?.scrapCount || 0);
    setScrapState(projectData?.isCheckedScrap);
  }, [data, feedbackData, projectData]);

  if (error) {
    console.log("err:", error);
  }

  if (feedbackError) {
    console.log("feedback error:", feedbackError);
  }

  // 좋아요, 스크랩 상태값
  const [likeCount, setLikeCount] = useState<number>(0);
  const [likeState, setLikeState] = useState<boolean>(false);
  const [scrappedCount, setScrappedCount] = useState<number>(0);
  const [scrapState, setScrapState] = useState<boolean>(false);

  const { mutate, isPending } = useLikeMutation(params.projectId);
  const { isScrapMutate } = useScrapMutation(params.projectId);

  const handleLikeClick = () => {
    // 로그인을 안한 경우
    if (!accessToken) {
      notify();
    } else {
      // 좋아요 버튼 클릭 시
      if (!likeState) {
        setLikeCount((prevCount) => prevCount + 1);
        setLikeState(true);
      } else {
        setLikeCount((prevCount) => prevCount - 1);
        setLikeState(false);
      }
      mutate();
    }
  };

  const handleScrappedClick = () => {
    // 로그인을 안한 경우
    if (!accessToken) {
      notify();
    } else {
      // 스크랩 버튼 클릭 시
      if (!scrapState) {
        setScrappedCount((prevCount) => prevCount + 1);
        setScrapState(true);
      } else {
        setScrappedCount((prevCount) => prevCount - 1);
        setScrapState(false);
      }
      isScrapMutate();
    }
  };

  return (
    <div className="w-[1440px] flex flex-col items-center mx-auto">
      <section className="max-w-[1080px] w-full mt-[56.5px] flex mb-[72px]">
        {/* project detail */}
        <div className="min-w-[787px]">
          <ProjectSendbackTitleData
            title={projectData?.title}
            field={projectData?.field}
            process={projectData?.progress}
          />
          <div className="mt-8">
            <ProjectSendbackUserInfo
              username={projectData?.nickname}
              userlevel={projectData?.userLevel}
              profileImg={projectData?.profileImageUrl}
              createdAt={projectData?.createdAt}
            />
          </div>

          {/* 소개 */}
          <div className="mt-[72px]">
            <SubTitle title="소개">{projectData?.content}</SubTitle>
          </div>

          {/* 서비스 링크 새 창 띄우기 */}
          <Button
            size="xs"
            className="min-w-[144px] mt-[88px] mb-[72px]"
            onClick={() => {
              window.open(projectData?.demoSiteUrl || "");
            }}
          >
            <ExitToAppIcon className="w-[22px] h-[22px] text-white me-2" />
            서비스 링크
          </Button>

          {/* 이미지 */}
          <ProjectDetailImage projectImgUrl={projectData?.projectImageUrl} />

          {/* 기간 */}
          <div className="mt-[72px]">
            <SubTitle title="기간">
              {projectData?.startedAt} ~ {projectData?.endedAt}
            </SubTitle>
          </div>

          {/* 멤버 */}
          <div className="mt-[72px]">
            <SubTitle title="멤버">
              <div className="flex min-w-[700px]">
                {projectData?.frontendCount > 0 && (
                  <TeamMemberInfo
                    count={projectData?.frontendCount}
                    label="프론트엔드"
                  />
                )}
                {projectData?.backendCount > 0 && (
                  <TeamMemberInfo
                    count={projectData.backendCount}
                    label="백엔드"
                  />
                )}
                {projectData?.designerCount > 0 && (
                  <TeamMemberInfo
                    count={projectData.designerCount}
                    label="디자인"
                  />
                )}
                {projectData?.plannerCount > 0 && (
                  <TeamMemberInfo
                    count={projectData.plannerCount}
                    label="기획자"
                  />
                )}
              </div>
            </SubTitle>
          </div>

          {/* 좋아요, 스크랩 */}
          <div className="mt-[72px]">
            <Button
              color={likeState ? "border" : "grayBorder"}
              className="me-5"
              onClick={handleLikeClick}
            >
              <ThumbUpIcon className="me-2" />
              <span className="text-body1 font-medium">{likeCount}</span>
            </Button>
            <Button
              color={scrapState ? "border" : "grayBorder"}
              onClick={handleScrappedClick}
            >
              <BookmarkIcon className="me-2" />
              <span className="text-body1 font-medium">{scrappedCount}</span>
            </Button>
          </div>

          {/* 댓글 */}
          <div className="mt-[72px]">
            <CommentBox projectId={params.projectId} />
          </div>
        </div>

        {/* project feedback */}
        <div className="ms-8 mt-[173px]">
          <div className="text-head mb-4">피드백 요청중</div>
          <ProjectDetailFeedBackRequest
            projectFeedbackData={projectFeedbackData}
            projectId={params.projectId}
            isAuthor={isAuthor}
          />
        </div>
      </section>
      <Toaster />
    </div>
  );
}
