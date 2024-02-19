"use client";
import ProjectSendbackTitleData from "@component/components/project/ProjectSendbackTitleData";
import ProjectSendbackUserInfo from "@component/components/project/ProjectSendbackUserInfo";
import Button from "@component/components/common-components/button/Button";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ProjectDetailImage from "./ProjectDetailImage";
import { useState, useEffect } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ProjectDetailFeedBackRequest from "./ProjectDetailFeedBackRequest";
import SubTitle from "@component/components/common-components/sub-title/SubTitle";
import TeamMemberInfo from "./ProjectDetailTeamMemberInfo";
import { useGetProjectDetail } from "@component/hooks/useProject";

type PageParams = {
  projectId: number;
};

export default function ProjectDetailPage({ params }: { params: PageParams }) {
  const { data, error, isLoading } = useGetProjectDetail(params.projectId);

  const [projectData, setProjectData] = useState<any>();

  // if (isLoading) {
  //   // TODO: 스켈레톤 코드
  //   return <div></div>
  // }

  useEffect(() => {
    if (data) {
      setProjectData(data.data.data);
    }
  }, [data]);

  if (error) {
    console.log("err:", error);
  }

  const [likeCount, setLikeCount] = useState<number>(
    projectData?.likeCount || 0
  );

  const [likeState, setLikeState] = useState<boolean>(
    projectData?.isCheckedLike
  );
  const [scrappedCount, setScrappedCount] = useState<number>(
    projectData?.scrapCount || 0
  );
  const [scrapState, setScrapState] = useState<boolean>(
    projectData?.isCheckedScrap
  );

  const handleLikeClick = () => {
    // 좋아요 버튼 클릭 시
    if (likeCount === projectData!.likeCount) {
      setLikeCount(likeCount + 1);
      setLikeState(true);
      // 해제 시
    } else {
      setLikeCount(projectData?.likeCount);
      setLikeState(false);
    }
  };

  const handleScrappedClick = () => {
    // 스크랩 버튼 클릭 시
    if (scrappedCount === projectData!.scrapCount) {
      setScrappedCount(scrappedCount + 1);
      setScrapState(true);
    } else {
      setScrappedCount(projectData?.scrapCount);
      setScrapState(false);
    }
  };

  return (
    <div className="w-[1440px] flex flex-col items-center">
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
              isLoading={isLoading}
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
                {projectData?.frontedCount > 0 && (
                  <TeamMemberInfo
                    count={projectData?.frontedCount}
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
        </div>

        {/* project feedback */}
        <div className="ms-8 mt-[173px]">
          <div className="text-head mb-4">피드백 요청중</div>
          <ProjectDetailFeedBackRequest />
        </div>
      </section>
    </div>
  );
}
