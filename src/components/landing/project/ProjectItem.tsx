"use client";

import { useState } from "react";
import Tag, { TagProps } from "@component/components/common-components/tag";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DropdownBox from "@component/components/common-components/dropdown-box/DropdownBox";

export type ProjectItemProps = {
  projectId: number;
  type: TagProps["type"];
  status: TagProps["status"];
  title: string;
  subTitle: string;
  user?: string;
  //   profileImg:string;
  createdDate: string;
  pullUpCount: number;
  likeCount?: number;
  commentCount?: number;
  moreBtn?: boolean;
  projectId?: number;
};

export default function ProjectItem({
  projectId,
  type,
  status,
  title,
  subTitle,
  user,
  createdDate,
  pullUpCount,
  likeCount,
  commentCount,
  moreBtn,
}: ProjectItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full max-w-[890px] py-[32px] border-b-[1px] border-gray-40">
      <div className="flex flex-col gap-[16px]">
        <div className="flex items-center justify-between">
          <Tag type={type} status={status} />
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
        </div>
        <div className="flex justify-between items-center">
          <div className="text-title cursor-pointer">{title}</div>
          <div
            onClick={() => {
              console.log("clicked");
            }}
            className="cursor-pointer"
          >
            <BookmarkBorderIcon className="fill-gray-60 mr-[20px]" />
          </div>
        </div>
        <div className="text-body1 text-gray-60">{subTitle}</div>
        <div className="flex flex-row gap-[12px] text-gray-60">
          <p>{user}</p>
          <p>{createdDate}</p>
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
