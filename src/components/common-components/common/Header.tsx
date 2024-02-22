"use client";

import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DropdownBox from "../dropdown-box";
import Link from "next/link";
import LoginModal from "@component/components/signup/LoginModal";

const variants = {
  menu: "hover:text-purple-main1 cursor-pointer",
};

export const Header = () => {
  const username =
    typeof window !== "undefined"
      ? window.localStorage.getItem("nickname")
      : null;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="fixed z-50 top-0 m-auto py-[17px] w-full h-[70px] flex flex-row items-center justify-center border-b-2 bg-white text-h2">
      <div className="w-9/12 flex justify-between max-w-[1080px]">
        {/* left side */}
        <div className="flex flex-row gap-[50px]">
          <div className={`${variants.menu} flex flex-row gap-2`}>
            <Link href="/">
              <span>logo</span>
              <span>sendback</span>
            </Link>
          </div>
          <Link href="/project">
            <div className={clsx(variants.menu)}>프로젝트</div>
          </Link>
          <Link href="/project/register">
            <div className={clsx(variants.menu)}>프로젝트 등록하기</div>
          </Link>
        </div>
        {typeof window !== "undefined" &&
        !sessionStorage.getItem("accessToken") ? (
          <>
            <div
              className={clsx(variants.menu)}
              onClick={() => setIsOpen(true)}
            >
              로그인
            </div>
            <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
          </>
        ) : (
          <>
            <div
              className={`${variants.menu} relative flex flex-row items-center gap-2`}
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
              <DropdownBox
                items={["마이페이지", "로그아웃"]}
                place="right"
                setIsOpen={setIsOpen}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};
