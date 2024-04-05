"use client";

import { RecoilRoot } from "recoil";
import React from "react";
import { CookiesProvider } from "react-cookie";

interface RecoilRootWrapperProps {
  children: React.ReactNode;
}

export default function RecoilRootWrapper({
  children,
}: RecoilRootWrapperProps) {
  return (
    <RecoilRoot>
      <CookiesProvider>{children}</CookiesProvider>
    </RecoilRoot>
  );
}
