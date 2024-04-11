"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import LoginModal from "@component/components/signup/LoginModal";
import { useGetUserData } from "@component/hooks/useMyPage";
import DropdownBox from "../dropdown-box";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const variants = {
  menu: "hover:text-purple-main1 cursor-pointer",
};

export default function Header() {
  // 로그인 한 유저인지 확인
  const accessToken =
    typeof window !== "undefined" && sessionStorage.getItem("accessToken");

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const goToLogin = () => {
    if (!accessToken) {
      setIsOpen(true);
    }
  };

  const { data: userData } = useGetUserData();
  const profileImageUrl = userData?.data?.data?.profileImageUrl;
  const nickname = userData?.data?.data?.nickname;

  // test cookie
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const authCheck = () => {
    const token = cookies.refreshToken;
    // axios
    // 	.post('/users/loginCheck', { token: token })
    // 	.then((res) => {
    // 		// setUserId(res.data.id); /
    // 	})
    // 	.catch(() => {
    // 		logOut(); // 에러 발생시 실행
    // 	});
  };

  const navigate = useNavigate();

  const logout = () => {
    removeCookie("refreshToken");
    navigate("/");
  };

  return (
    <div className="fixed z-50 top-0 m-auto py-[17px] w-full h-[70px] flex flex-row items-center justify-center border-b-2 bg-white text-h2">
      <div className="w-9/12 flex justify-between max-w-[1080px]">
        {/* left side */}
        <div className="flex flex-row gap-[50px] items-center text-center">
          <div className={`${variants.menu} flex flex-row gap-2`}>
            <Link href="/">
              <div className="flex gap-2 items-center">
                <Image
                  src="/assets/logo.png"
                  alt="logo"
                  width={30}
                  height={35}
                  className="me-2"
                />
                <span>Sendback</span>
              </div>
            </Link>
          </div>
          <Link href="/project">
            <div className={clsx(variants.menu)}>프로젝트</div>
          </Link>
          <Link href={accessToken ? "/project/register" : "#"}>
            <div
              onClick={goToLogin}
              className={clsx(variants.menu)}
              onKeyDown={() => {}}
              role="presentation"
            >
              프로젝트 등록하기
            </div>
          </Link>
        </div>
        {typeof window !== "undefined" &&
        !sessionStorage.getItem("accessToken") ? (
          <>
            <div
              className={clsx(variants.menu)}
              onClick={() => setIsOpen(true)}
              onKeyDown={() => {}}
              role="presentation"
            >
              로그인
            </div>
            <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
          </>
        ) : (
          <div className="relative">
            <div
              className={`${variants.menu} relative flex flex-row items-center gap-2`}
              onClick={() => setIsOpen((prev) => !prev)}
              onKeyDown={() => {}}
              role="presentation"
            >
              <Image
                src={profileImageUrl}
                alt=""
                width={60}
                height={60}
                className="w-[34px] h-[34px] rounded-full me-4"
              />
              <div>{nickname}</div>
            </div>

            {isOpen && (
              <DropdownBox
                items={["마이페이지", "로그아웃"]}
                place="right"
                setIsOpen={setIsOpen}
                className=""
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
