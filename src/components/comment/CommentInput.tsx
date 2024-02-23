"use client";

import { useEffect, useRef, useState } from "react";
import PurpleTextarea from "../common-components/textarea/Textarea";
import Button from "../common-components/button";
import Image from "next/image";
import Img from "../../../public/assets/profile_img.png";
import { usePostComment } from "@component/hooks/useProject";
import Loading from "../loading/Loading";
import { useSetRecoilState } from "recoil";
import { errorModalState } from "@component/atoms/modalAtom";
import { useGetUserData } from "@component/hooks/useMyPage";

type Props = {
  projectId: number;
};
export const CommentInput = ({ projectId }: Props) => {
  const [comment, setComment] = useState<string>("");

  const handleComment = (e: any) => {
    setComment(e.target.value);
  };

  //
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const [submitClicked, setSubmitClicked] = useState<boolean>(false);
  const setErroModal = useSetRecoilState(errorModalState);

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

  const { mutate, isPending } = usePostComment(projectId, comment);

  const handleSubmit = () => {
    if (!sessionStorage.getItem("accessToken")) {
      setErroModal({
        open: true,
        text: "로그인이 필요한 기능입니다.",
      });
      setTimeout(() => {
        setErroModal({
          open: false,
          text: "로그인이 필요한 기능입니다.",
        });
      }, 1500);
    }
    mutate();

    if (isPending) return <Loading />;
  };

  const { data, isLoading } = useGetUserData();
  const profileImageUrl = data?.data.data.profileImageUrl;

  return (
    <div className="w-full ">
      <div className="flex gap-[23px] items-start">
        {isLoading ? (
          <div className="h-[48px] w-[48px] rounded-full bg-gray-40" />
        ) : (
          <Image
            src={profileImageUrl ?? ""}
            alt="프로필 이미지"
            width={40}
            height={40}
            className="w-[48px] h-[48px] rounded-full bg-gray-40"
          />
        )}

        <PurpleTextarea
          value={comment}
          onChange={handleComment}
          placeholder="댓글을 입력하세요."
          size="xl"
          backgroundColors="purple5"
          borderSize="xs"
          textSize="xs"
          entire={100}
          onKeyDown={(e: any) => {
            if (e.key === "Enter") handleSubmit();
          }}
          className={isInvalid ? "border-error-main" : "border-purple-main1"}
        />
      </div>
      <div className="text-right pt-3">
        <Button size="xs" color="default" onClick={handleSubmit}>
          등록
        </Button>
      </div>
    </div>
  );
};
