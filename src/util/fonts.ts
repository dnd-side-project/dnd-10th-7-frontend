import localFont from "next/font/local";

const pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/Pretendard-Medium.woff",
      weight: "400",
    },
  ],
  variable: "--font-pretendard",
});

export const SemiBoldPretandard = localFont({
  src: [
    {
      path: "../../public/fonts/Pretendard-SemiBold.woff",
      weight: "700",
    },
  ],
  variable: "--font-bold-pretandard",
});

export default pretendard;
