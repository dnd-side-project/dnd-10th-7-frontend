import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary color
        "purple-main1": "#8C82FF",
        "purple-main2": "#C1B6FF",
        "purple-main3": "#D9D3FF",
        "purple-main4": "#F1EBFF",
        "purple-main5": "#F9F7FF",

        // sub color
        "blue-main1": "#0092E5",
        "blue-main2": "#21B0FB",
        "blue-main3": "#9EDDFE",
        "blue-main4": "#DDF3FF",
        "blue-main5": "#F8FDFF",

        // gray scale
        "gray-0": "#FFFFFF",
        "gray-10": "#FAFAFA",
        "gray-20": "#EFEFEF",
        "gray-40": "#D6D6D6",
        "gray-60": "#999999",
        "gray-80": "#3A3A3A",
        "gray-100": "#000000",

        // error color
        "error-main": "#FF465C",
      },
      fontSize: {
        huge: "56px",
        head: "34px",
        h1: "26px",
        title: "24px",
        h2: "20px",
        body1: "18px",
        body2: "16px",
        body3: "14px",
        caption1: "12px",
        caption2: "11px",
        caption3: "10px",
      },
    },
  },
  plugins: [],
};
export default config;
