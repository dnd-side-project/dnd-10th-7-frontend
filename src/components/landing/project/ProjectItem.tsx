"use client";

import { useState } from "react";
import Tag, { TagProps } from "@component/components/common-components/tag";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ProjectItemProps } from "@component/types/Project";

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

  return (
    <div className="w-full max-w-[890px] py-[32px] border-b-[1px] border-gray-40">
      <div className="flex flex-col gap-[16px]">
        <div className="flex items-center justify-between">
          <Tag
            type={field as TagProps["type"]}
            status={progress as TagProps["status"]}
          />
          {moreBtn && <MoreVertIcon className="mr-[20px] fill-gray-80" />}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-title cursor-pointer">{title}</div>
          <div
            onClick={() => {
              console.log("clicked");
            }}
            className="cursor-pointer"
          >
            {isScrapped ? (
              <BookmarkIcon />
            ) : (
              <BookmarkBorderIcon className="fill-gray-60 mr-[20px]" />
            )}
          </div>
        </div>
        <div className="text-body1 text-gray-60">{summary}</div>
        <div className="flex flex-row gap-[12px] text-gray-60">
          <p>{nickname}</p>
          <p>{createdAt}</p>
          <p>끌올 {pullUpCount}회</p>
        </div>
        <div className="text-gray-60 flex gap-[30px] items-center">
          <div className="flex gap-[5px]">
            <ThumbUpOutlinedIcon />
            <p>{likeCount}</p>
          </div>
          <div className="flex gap-[5px]">
            <ChatOutlinedIcon />
            <p>{commentCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
