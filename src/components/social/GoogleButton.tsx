"use client";

// import { signIn, signOut, useSession } from "next-auth/react";
import googleIcon from "../../../public/assets/google_icon.png";
import Image from "next/image";

export default function GoogleButton() {
  const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const GOOGLE_REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;

  const googleUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=openid email profile`;

  const handleGoogleLogin = () => {
    if (typeof window !== "undefined") {
      window.location.href = googleUrl;
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="flex gap-[10px] items-center justify-center h-[56px] border border-gray-60 text-h2 rounded-[6px] bg-black text-white"
    >
      <Image src={googleIcon} alt="google" width={30} />
      Google로 시작하기
    </button>
  );
}
