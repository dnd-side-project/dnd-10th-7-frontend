import type { Metadata } from "next";
import "./globals.css";
import pretendard from "@component/utils/fonts";
import { ThemeProvider } from "@mui/material";
import { theme } from "@component/components/common-components/mui/theme";
import Providers from "@component/context/provider";
import Footer from "@component/components/common-components/common/Footer";
import Header from "@component/components/common-components/common/Header";
import RecoilRootWrapper from "./RecoilRootWrapper";

export const metadata: Metadata = {
  title: "sendback",
  description:
    "맞으면서 성장하는 피드백 수집 플랫폼 👊Sendback(Send + Feedback)👊",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pretendard.variable} font-pretendard font-bold`}
    >
      <RecoilRootWrapper>
        <ThemeProvider theme={theme}>
          <body>
            <Providers>
              <Header />
              {children}
            </Providers>
            <Footer />
          </body>
        </ThemeProvider>
      </RecoilRootWrapper>
    </html>
  );
}
