import { useEffect, useState } from "react";
import { ReplyComment } from "./ReplyComment";
import { ProjectCommentType } from "@component/types/Project";
import Image from "next/image";
import { useDeleteComment } from "@component/hooks/useProject";
import { deleteProjectComment } from "@component/api/projectAPI";

export type Props = {
  data: ProjectCommentType[];
  projectId: number;
};

export const CommentItem = ({ data, projectId }: Props) => {
  const [openReplyComments, setOpenReplyComments] = useState<Array<boolean>>(
    new Array(data.length).fill(false)
  );

  const toggleReplyComment = (index: number) => {
    const newOpenReplyComments = [...openReplyComments];
    newOpenReplyComments[index] = !newOpenReplyComments[index];
    setOpenReplyComments(newOpenReplyComments);
  };

  const [commentId, setCommentId] = useState<number>(0);

  const { mutate, isPending } = useDeleteComment(projectId, commentId);

  const useDelComment = (id: number) => {
    setCommentId(id);
    console.log(commentId, "commentId");
    mutate();
  };

  return (
    <div className="flex flex-col space-y-8">
      {data.map((item, idx) => {
        return (
          <div key={idx}>
            <div className="flex gap-[25px] items-center">
              <Image
                src={item.profileImageUrl}
                alt="profile"
                // TODO : size 다시 수정 필요
                width={48}
                height={48}
                className="w-[48px] h-[48px] rounded-full me-4 object-cover"
              ></Image>
              {/* <div className="h-[48px] w-[48px] rounded-full bg-gray-40" /> */}

              <div className="flex flex-col space-y-1">
                <div className="flex gap-[8px] items-center">
                  <p className="text-body2">{item.nickname}</p>
                  <p className="text-caption1 text-gray-60">{item.createdAt}</p>
                  <p className="w-[5px] h-[5px] rounded-full bg-gray-60" />
                  {/* <p className="text-caption1 text-gray-60">{item.time}</p> */}
                  {/* <p className="w-[5px] h-[5px] rounded-full bg-gray-60" /> */}
                  <p
                    className="text-caption1 text-gray-60 cursor-pointer"
                    onClick={() => {
                      toggleReplyComment(idx);
                    }}
                  >
                    답글달기
                  </p>
                  {/* 본인이면 삭제하기 보이게 */}
                  {item.isAuthor && (
                    <>
                      <p className="w-[5px] h-[5px] rounded-full bg-gray-60" />
                      <p
                        className="text-caption1 text-gray-60 cursor-pointer hover:text-purple-main1"
                        onClick={() => useDelComment(item.commentId)}
                      >
                        삭제하기
                      </p>
                    </>
                  )}
                </div>
                <div className="text-body3">{item.content}</div>
              </div>
            </div>
            {openReplyComments[idx] && <ReplyComment />}
          </div>
        );
      })}
    </div>
  );
};
