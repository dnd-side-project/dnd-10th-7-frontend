"use client";

import { useState } from "react";
import Tag, { TagProps } from "@component/components/common-components/tag";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ProjectItemProps } from "@component/types/Project";
import DropdownBox from "@component/components/common-components/dropdown-box";
import { useRouter } from "next/navigation";
import { useScrapMutation } from "@component/hooks/useProject";

export default function ProjectItem({
  commentCount,
  createdAt,
  field,
  isScrapped,
  likeCount,
  nickname,
  profileImageUrl,
  progress,
  projectId,
  title,
  summary,
  pullUpCount,
  moreBtn,
}: ProjectItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const { isScrapMutate } = useScrapMutation(projectId);

  const accessToken =
    typeof window !== "undefined" && sessionStorage.getItem("accessToken");

  const [scrapState, setScrapState] = useState<boolean>(false);

  // const handleScrappedClick = () => {
  //   // 로그인을 안한 경우
  //   if (!accessToken) {
  //     notify();
  //   } else {
  //     // 스크랩 버튼 클릭 시
  //     if (!scrapState) {
  //       setScrapState(true);
  //     } else {
  //       setScrapState(false);
  //     }
  //     isScrapMutate();
  //   }
  // };

  return (
    <div className="w-full max-w-[890px] py-[32px] border-b-[1px] border-gray-40">
      <div className="flex flex-col gap-[16px]">
        <div className="flex items-center justify-between">
          <Tag
            type={field as TagProps["type"]}
            status={progress as TagProps["status"]}
          />
          {moreBtn && (
            <div className="relative">
              <MoreVertIcon
                onClick={() => setIsOpen((prev) => !prev)}
                className="mr-[20px] fill-gray-80 cursor-pointer"
              />
              {isOpen && (
                <DropdownBox
                  items={["끌올하기", "수정하기", "삭제하기"]}
                  place="left"
                  className="absolute right-5"
                  projectId={projectId}
                  setIsOpen={setIsOpen}
                />
              )}
            </div>
          )}
          {/* {moreBtn && <MoreVertIcon className="mr-[20px] fill-gray-80" />} */}
        </div>
        <div className="flex justify-between items-center">
          <div
            className="text-title cursor-pointer"
            onClick={() => router.push(`/project/${projectId}`)}
          >
            {title}
          </div>
          <div
            onClick={() => {
              console.log("clicked");
            }}
            className="cursor-pointer"
          >
            {isScrapped ? (
              <BookmarkIcon />
            ) : (
              <BookmarkBorderIcon
                // onClick={handleScrappedClick}
                className="fill-gray-60 mr-[20px]"
              />
            )}
          </div>
        </div>
        <div className="text-body1 text-gray-60">{summary}</div>
        <div className="flex flex-row gap-[12px] text-gray-60">
          <p>{nickname}</p>
          <p>{createdAt}</p>
          <p>끌올 {pullUpCount ?? 0}회</p>
        </div>
        <div className="text-gray-60 flex gap-[30px] items-center">
          <div className="flex gap-[5px]">
            <ThumbUpOutlinedIcon />
            <p>{likeCount ?? 0}</p>
          </div>
          <div className="flex gap-[5px]">
            <ChatOutlinedIcon />
            <p>{commentCount ?? 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
