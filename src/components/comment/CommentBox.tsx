import { useGetProjectComment } from "@component/hooks/useProject";
import { CommentInput } from "./CommentInput";
import { CommentItem } from "./CommentItem";
import { useEffect, useMemo } from "react";
import { ProjectCommentType } from "@component/types/Project";
import axios from "axios";

export default function CommentBox({ projectId }: { projectId: number }) {
  const {
    data: commentData,
    error,
    isLoading,
  } = useGetProjectComment(projectId);

  const commentList = useMemo(
    () =>
      commentData?.data?.data.map(
        (item: ProjectCommentType) =>
          ({
            userId: item.userId,
            nickname: item.nickname,
            profileImageUrl: item.profileImageUrl,
            commentId: item.commentId,
            content: item.content,
            createdAt: item.createdAt,
            isAuthor: item.isAuthor,
          }) as ProjectCommentType
      ) ?? [],
    [commentData?.data]
  );

  // console.log("댓글 리스트들", commentList);

  return (
    <div className="w-full max-w-[800px]">
      <div className="pb-[37px] flex items-center gap-3">
        <p className="text-title">댓글</p>
        <p className="text-h2 text-gray-60">{commentList.length}</p>
      </div>
      <CommentInput projectId={projectId} />
      <CommentItem data={commentList} projectId={projectId} />
    </div>
  );
}
