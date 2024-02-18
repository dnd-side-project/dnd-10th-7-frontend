"use client";

import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DropdownBox from "../dropdown-box";

export const Header = () => {
  const variants = {
    menu: "hover:text-purple-main1 cursor-pointer",
  };

  const username = "chamny";
  const router = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="sticky z-50 top-0 m-auto py-[17px] w-full h-[70px] flex flex-row items-center justify-center bg-white text-h2">
      <div className="w-9/12 flex justify-between max-w-[1080px]">
        {/* left side */}
        <div className="flex flex-row gap-[50px]">
          <div className={clsx(variants.menu, "flex flex-row gap-2")}>
            <span>logo</span>
            <span onClick={() => router.push("/")}>sendback</span>
          </div>
          <div
            className={clsx(variants.menu)}
            onClick={() => router.push("/project")}
          >
            프로젝트
          </div>
          <div
            className={clsx(variants.menu)}
            onClick={() => router.push("/project/register")}
          >
            프로젝트 등록하기
          </div>
        </div>
        {/* !localStorage.getItem("accessToken") */}
        {false ? (
          <div
            className={clsx(variants.menu)}
            onClick={() => router.push("/login")}
          >
            로그인
          </div>
        ) : (
          <div className="relative">
            <div
              className={clsx(
                variants.menu,
                "flex flex-row items-center gap-2"
              )}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {/* <Image
          src={profileImg}
          alt={username}
          width={60}
          height={60}
          className="w-[34px] h-[34px] rounded-full me-8"
        ></Image> */}
              <div>{username}</div>
            </div>
            {isOpen && (
              <DropdownBox items={["마이페이지", "로그아웃"]} place="right" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
