"use client";

import { useEffect, useRef, useState } from "react";
import PurpleTextarea from "../common-components/textarea/Textarea";
import Button from "../common-components/button";
import Image from "next/image";
import Img from "../../../public/assets/profile_img.png";

export const CommentInput = () => {
  const [comment, setComment] = useState<string>("");

  const handleComment = (e: any) => {
    setComment(e.target.value);
  };

  //
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const [submitClicked, setSubmitClicked] = useState<boolean>(false);

  const focus = () => {
    console.log("click");
    console.log("inputRef.current before", inputRef.current);
    if (inputRef.current) {
      console.log("inputRef.current after", inputRef.current);
      inputRef.current.focus();
    }
    setSubmitClicked(true);
  };

  // 클릭했을 때마다 focus 함수를 다시 작동시켜서 rendering 시켜야 inputRef.current 가 null
  useEffect(() => {
    if (submitClicked) {
      focus();
    }
  }, [submitClicked]);

  const isInvalid = submitClicked && comment.length === 0;

  return (
    <div className="w-full max-w-[800px] ">
      <div className="flex gap-[23px] items-center">
        <div className="h-[48px] w-[48px] rounded-full bg-gray-40" />
        {/* <Image
        src={Img}
        alt="임시 프로필 이미지"
        width={20}
        height={20}
        className="w-[20px] h-[20px] rounded-full me-[10px]"
      /> */}

        <PurpleTextarea
          value={comment}
          onChange={handleComment}
          placeholder="댓글을 입력하세요."
          size="xl"
          backgroundColors="purple5"
          borderSize="xs"
          textSize="xs"
          entire={100}
          className={isInvalid ? "border-error-main" : "border-purple-main1"}
        />
      </div>
      <div className="text-right pt-3">
        <Button size="xs" color="default">
          등록
        </Button>
      </div>
    </div>
  );
};
