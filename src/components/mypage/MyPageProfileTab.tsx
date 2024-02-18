"use client";

import { Profile } from "@component/types/User";
import MyPageUserInfo from "./MyPageUserInfo";
import Button from "../common-components/button/Button";
import MyPageFeedBackInfo from "./MyPageFeedBackInfo";
import { useState } from "react";
import ProfileEditModal from "./ProfileEditModal";

const MyPageProfileTab = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const profileData: Profile = {
    nickname: "김철수",
    career: "backend",
    profileImageUrl: "/assets/profile_img.png",
    birthday: "2022.05.05",
    email: "backend@gmail.com",
    field: "예술/대중문화",
    level: 2,
    restFeedbackCount: 5,
    feedbackCount: 3,
    projectCount: 4,
    likeCount: 4,
  };

  return (
    <div className="min-w-[344px] max-w-[344px] h-[840px] bg-gray-10 rounded-[30px] me-[66.5px] p-[27px]">
      {/* user info */}
      <MyPageUserInfo
        username={profileData.nickname}
        profileImg={profileData.profileImageUrl}
        career={profileData.career}
        birth={profileData.birthday}
        email={profileData.email}
        interest={profileData.field}
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
        level={profileData.level}
        restFeedbackCount={profileData.restFeedbackCount}
        feedbackCount={profileData.feedbackCount}
        projectCount={profileData.projectCount}
        likeCount={profileData.likeCount}
      />

      <ProfileEditModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default MyPageProfileTab;
