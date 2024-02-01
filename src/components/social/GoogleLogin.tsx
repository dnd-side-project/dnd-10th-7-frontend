"use client";

import { signIn } from "next-auth/react";

export default function GoogleLogin() {
  return (
    <>
      <button onClick={() => signIn()} className="border border-black">
        google-login
      </button>
    </>
  );
}
