"use client";

import { useEffect, useRef, useState } from "react";
import PurpleTextarea from "../common-components/textarea/Textarea";
import Button from "../common-components/button";
import Image from "next/image";
import Img from "../../../public/assets/profile_img.png";
import clsx from "clsx";
import PurpleInput from "../common-components/input/PurPleInput";

export const ReplyComment = () => {
  const dummyComment = {
    commentId: 1,
    user: "chaeminenie",
    nickname: "cjcjcjcj",
    profileImageUrl: "aiaiaiaiaiaiaai",
    createdDate: "2024.24.24",
    time: "2시간전",
    content:
      "굉장히 흥미로운 서비스 어쩌구 졸리다 지금 새벽 4시다지금 새벽 4시다지금 새벽 4시다지금 새벽 4시다",
  };

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
    <div className="ml-[72px] pt-6">
      <div className="flex gap-[23px] items-center">
        <div className="h-[48px] w-[48px] rounded-full bg-gray-40" />

        <div className="flex flex-col space-y-1">
          <div className="flex gap-[8px] items-center">
            <p className="text-body2">{dummyComment.user}</p>
            <p className="text-caption1 text-gray-60">
              {dummyComment.createdDate}
            </p>
            <p className="w-[5px] h-[5px] rounded-full bg-gray-60" />
            <p className="text-caption1 text-gray-60">{dummyComment.time}</p>
            <p className="w-[5px] h-[5px] rounded-full bg-gray-60" />
            <p
              className="text-caption1 text-gray-60 cursor-pointer"
              // onClick={() => {
              //   toggleReplyComment(idx);
              // }}
            >
              답글달기
            </p>
          </div>
          <PurpleInput
            value={comment}
            onChange={handleComment}
            placeholder="답글을 입력해주세요"
            shape="rounded"
            size="xs"
            textSize="xs"
            borderSize="xs" // 테두리 두께
            backgroundColors="purple"
          />
        </div>
      </div>
      <div className="text-right pt-3">
        <Button size="xs" color="default">
          등록
        </Button>
      </div>
    </div>
  );
};
