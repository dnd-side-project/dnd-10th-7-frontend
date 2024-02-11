"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { GoogleLogInAPI } from "@component/app/api/googleGetAPI";

export default function GoogleCallBack() {
  const router = useRouter();

  const getGoogle = async () => {
    const code = new URL(window.location.href).searchParams.get("code") || "";
    console.log(code, "cococo");
    await GoogleLogInAPI.getGoogleLogIn(code)
      .then((response: any) => {
        console.log("response", response);
        // const access_token: string = response.data.data.accessToken;
        // const refresh_token: string = response.data.data.refreshToken;
        // window.sessionStorage.setItem("access_token", access_token);
        // window.sessionStorage.setItem("refresh_token", refresh_token);

        router.push("/");
      })
      .catch((err: any) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    console.log("hi");
    getGoogle();
  }, []);

  return <div>로딩중</div>;
}
