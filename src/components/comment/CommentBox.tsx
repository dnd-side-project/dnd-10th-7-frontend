import { CommentInput } from "./CommentInput";
import { CommentItem } from "./CommentItem";

export default function CommentBox() {
  return (
    <div className="w-full max-w-[800px]">
      <div className="pb-[37px] flex items-center gap-3">
        <p className="text-title">댓글</p>
        <p className="text-h2 text-gray-60">32</p>
      </div>
      <CommentInput />
      <CommentItem />
    </div>
  );
}
