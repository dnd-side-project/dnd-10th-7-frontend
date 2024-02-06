"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import googleIcon from "../../../public/assets/google_icon.png";
import Image from "next/image";

export default function GoogleLogin() {
  const { data } = useSession();
  console.log(data); // 로그인 정보 : 이름, 이미지, 이메일

  const onClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (data) {
      await signOut();
    } else {
      await signIn("google", { callbackUrl: "/" });
    }
  };

  const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;

  const onGoogleSocialLogin = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=openid email profile`;
  };

  return (
    <button
      onClick={onGoogleSocialLogin}
      className="flex gap-[10px] items-center justify-center w-[392px] h-[56px] border border-gray-60 rounded-[6px]"
    >
      <Image src={googleIcon} alt="google" width={30} />
      google login
      {/* {data ? <div>Google 로그아웃</div> : <div>Google로 시작하기</div>} */}
    </button>
  );
}
