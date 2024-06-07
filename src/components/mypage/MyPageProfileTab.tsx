"use client";

import MyPageUserInfo from "./MyPageUserInfo";
import Button from "../common-components/button/Button";
import MyPageFeedBackInfo from "./MyPageFeedBackInfo";
import { useEffect, useState } from "react";
import ProfileEditModal from "./ProfileEditModal";
import { useGetUserData } from "@component/hooks/useMyPage";

const MyPageProfileTab = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [profileData, setProfileData] = useState<any>();
  const { data, error, isLoading } = useGetUserData();

  useEffect(() => {
    if (data) {
      // console.log(data.data.data, "hi");
      setProfileData(data.data.data);
    }
  }, [data]);

  if (error) {
    console.log(error);
  }

  return (
    <div className="min-w-[344px] max-w-[344px] h-[840px] bg-gray-10 rounded-[30px] me-[66.5px] p-[27px]">
      {/* user info */}
      <MyPageUserInfo
        username={profileData?.nickname}
        profileImg={profileData?.profileImageUrl}
        career={profileData?.career}
        birth={profileData?.birthday}
        email={profileData?.email}
        interest={profileData?.fields}
      />

      {/* edit profile */}
      <Button
        size="md"
        className="min-w-[290px]"
        color="black"
        onClick={() => setIsOpen(true)}
      >
        프로필 편집
      </Button>

      {/* level */}
      <MyPageFeedBackInfo
        level={profileData?.level}
        restFeedbackCount={profileData?.needToFeedbackCount}
        feedbackCount={profileData?.feedbackCount}
        projectCount={profileData?.projectCount}
        likeCount={profileData?.likeCount}
      />

      <ProfileEditModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default MyPageProfileTab;
